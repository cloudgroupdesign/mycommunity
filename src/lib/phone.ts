import { parsePhoneNumber, CountryCode } from "libphonenumber-js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PhoneValidationResult {
  isValid: boolean;
  normalized: string | null;  // E.164:   "+380971234567"
  display: string | null;     // Human:   "+380 97 123 45 67"
  country: string | null;     // ISO 3166: "UA", "US", …
  error: string | null;
}

// ─── Error messages ───────────────────────────────────────────────────────────

const ERR = {
  PLUS_MISUSE:
    "'+' можна використовувати лише на початку номера.",
  TOO_SHORT:
    "Номер занадто короткий. Введіть повний номер.",
  TOO_LONG:
    "Номер занадто довгий. Перевірте введення.",
  MISSING_COUNTRY_CODE:
    "Додайте код країни (наприклад: +1, +44).",
  UNKNOWN_FORMAT:
    "Некоректний формат. Використовуйте + або номер, що починається з 0.",
  INVALID_UA:
    "Некоректний номер. Перевірте введення.",
} as const;

// ─── Formatting ───────────────────────────────────────────────────────────────

/**
 * Applies a fixed group pattern to a digit string left-to-right.
 * A partial trailing group is kept as-is; overflow beyond defined
 * groups is appended as one final chunk.
 *
 * applyGroups("971898244", [2,3,2,2]) → "97 189 82 44"
 */
function applyGroups(digits: string, groups: number[]): string {
  const parts: string[] = [];
  let pos = 0;
  for (const size of groups) {
    if (pos >= digits.length) break;
    parts.push(digits.slice(pos, pos + size));
    pos += size;
  }
  if (pos < digits.length) parts.push(digits.slice(pos));
  return parts.join(" ");
}

/**
 * Splits a digit string into readable groups.
 *
 * Strategy:
 *   While ≥ 6 digits remain → take 3 (keeps trailing pairs even)
 *   While any remain        → take 2 (last group may be 1 if odd total)
 *
 * Examples (subscriber portion only):
 *   10 digits → 3 3 2 2   ("415 555 26 71")
 *    8 digits → 3 3 2     ("441 234 56") — fallback for short intl
 */
function chunkGeneric(digits: string): string[] {
  const chunks: string[] = [];
  let i = 0;
  while (digits.length - i >= 6) {
    chunks.push(digits.slice(i, i + 3));
    i += 3;
  }
  while (i < digits.length) {
    chunks.push(digits.slice(i, i + 2));
    i += 2;
  }
  return chunks;
}

/**
 * Formats an E.164 number into a human-readable display string.
 * Uses only spaces as separators — no dashes, brackets, or dots.
 *
 * Ukrainian (+380):  +380 97 123 45 67  (2 + 3 + 2 + 2)
 * Generic:           +CC  <3-2-2-2…>   (generic chunking)
 */
function formatDisplay(e164: string, callingCode: string): string {
  const subscriber = e164.slice(1 + callingCode.length); // digits after +CC

  if (callingCode === "380" && subscriber.length === 9) {
    // UA: operator(2) + triplet(3) + pair(2) + pair(2)
    const parts = [
      subscriber.slice(0, 2),
      subscriber.slice(2, 5),
      subscriber.slice(5, 7),
      subscriber.slice(7, 9),
    ];
    return `+${callingCode} ${parts.join(" ")}`;
  }

  // Generic
  const chunks = chunkGeneric(subscriber);
  return `+${callingCode} ${chunks.join(" ")}`;
}

/**
 * Formats a partial phone number string for **live display** in an input field.
 * Strips non-allowed characters and applies progressive spacing as the user types.
 *
 * +380971898244  → "+380 97 189 82 44"   (UA international)
 * 0971898244     → "097 189 82 44"       (UA local)
 * +14155552671   → "+1 415 555 26 71"   (generic)
 */
export function liveFormatPhone(raw: string): string {
  // Strip everything except digits and a single leading "+"
  const stripped = raw.replace(/[^\d+]/g, "");
  const clean = stripped.startsWith("+")
    ? "+" + stripped.slice(1).replace(/\+/g, "")
    : stripped.replace(/\+/g, "");

  if (!clean) return "";

  // ── UA local (starts with "0") ────────────────────────────────────────────
  // Format: 0XX XXX XX XX
  if (clean.startsWith("0")) {
    return applyGroups(clean, [3, 3, 2, 2]);
  }

  // ── UA international (starts with "+380") ────────────────────────────────
  // Format: +380 XX XXX XX XX
  if (clean.startsWith("+380")) {
    const subscriber = clean.slice(4);
    if (!subscriber) return "+380";
    return `+380 ${applyGroups(subscriber, [2, 3, 2, 2])}`;
  }

  // ── Generic international (any other "+...") ──────────────────────────────
  // Format: +CC <3-2-2-2…>
  if (clean.startsWith("+")) {
    const digits = clean.slice(1);
    if (!digits) return "+";
    return "+" + chunkGeneric(digits).join(" ");
  }

  return clean;
}

// ─── Result builders ──────────────────────────────────────────────────────────

function fail(error: string): PhoneValidationResult {
  return { isValid: false, normalized: null, display: null, country: null, error };
}

function succeed(
  e164: string,
  country: string | undefined,
  callingCode: string,
): PhoneValidationResult {
  return {
    isValid: true,
    normalized: e164,
    display: formatDisplay(e164, callingCode),
    country: country ?? null,
    error: null,
  };
}

// ─── Core validator ───────────────────────────────────────────────────────────

/**
 * Validates and normalises a phone number string.
 *
 * Supported input modes:
 *  - Local Ukrainian  → starts with "0"  → auto-prepend +380
 *  - International    → starts with "+"  → validated as-is
 *
 * Returns a structured `PhoneValidationResult` with:
 *   normalized  — E.164 string  ("+380971234567")
 *   display     — spaced string ("+380 97 123 45 67")
 *   country     — ISO code      ("UA")
 *   error       — Ukrainian UI message or null
 */
export function validatePhone(input: string): PhoneValidationResult {
  if (!input) return fail(ERR.UNKNOWN_FORMAT);

  // ── Sanitize: remove spaces, parens, dashes ───────────────────────────────
  const sanitized = input.trim().replace(/[\s()\-]/g, "");

  if (!sanitized) return fail(ERR.UNKNOWN_FORMAT);

  // ── Guard: "+" must appear only at position 0 ────────────────────────────
  const plusPositions = [...sanitized].reduce<number[]>(
    (acc, ch, i) => (ch === "+" ? [...acc, i] : acc),
    [],
  );

  if (plusPositions.length > 1) return fail(ERR.PLUS_MISUSE);
  if (plusPositions.length === 1 && plusPositions[0] !== 0) return fail(ERR.PLUS_MISUSE);

  // ── Determine mode → normalise to E.164 candidate ────────────────────────
  let e164Candidate: string;
  let parseCountry: CountryCode | undefined;

  if (sanitized.startsWith("+")) {
    if (sanitized.length < 3) return fail(ERR.MISSING_COUNTRY_CODE);
    e164Candidate = sanitized;
    parseCountry  = undefined;

  } else if (sanitized.startsWith("0")) {
    // Ukrainian local: 097… → +38097…
    e164Candidate = "+380" + sanitized.slice(1);
    parseCountry  = "UA";

  } else {
    return fail(ERR.UNKNOWN_FORMAT);
  }

  // ── Quick length check before calling libphonenumber ─────────────────────
  const digitCount = e164Candidate.slice(1).length; // exclude leading "+"

  if (digitCount < 9)  return fail(ERR.TOO_SHORT);
  if (digitCount > 15) return fail(ERR.TOO_LONG);

  // ── libphonenumber validation ─────────────────────────────────────────────
  try {
    const parsed = parseCountry
      ? parsePhoneNumber(e164Candidate, parseCountry)
      : parsePhoneNumber(e164Candidate);

    if (!parsed?.isValid()) {
      return parseCountry === "UA" ? fail(ERR.INVALID_UA) : fail(ERR.UNKNOWN_FORMAT);
    }

    return succeed(
      parsed.format("E.164"),
      parsed.country,
      parsed.countryCallingCode, // e.g. "380", "1", "44"
    );

  } catch {
    return parseCountry === "UA" ? fail(ERR.INVALID_UA) : fail(ERR.UNKNOWN_FORMAT);
  }
}
