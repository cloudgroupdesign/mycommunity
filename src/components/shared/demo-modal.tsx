"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "@geist-ui/icons";
import { useDemoModal } from "./modal-context";
import { validatePhone, liveFormatPhone } from "@/lib/phone";
import { createDemoLead } from "@/lib/api";

type Step = "form" | "success";
interface FormErrors { name?: string; phone?: string; }

export default function DemoModal() {
  const { isOpen, close } = useDemoModal();
  const [step, setStep]     = useState<Step>("form");
  const [errors, setErrors] = useState<FormErrors>({});

  // Uncontrolled inputs — zero re-renders per keystroke
  const nameRef  = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll lock + scrollbar-width compensation (prevents layout shift)
  useEffect(() => {
    if (isOpen) {
      const sb = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow     = "hidden";
      document.body.style.paddingRight = sb > 0 ? `${sb}px` : "";
    } else {
      document.body.style.overflow     = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow     = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    close();
    setTimeout(() => {
      setStep("form");
      setErrors({});
      if (nameRef.current)  nameRef.current.value  = "";
      if (phoneRef.current) phoneRef.current.value = "";
    }, 250);
  }, [close]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const name  = nameRef.current?.value.trim()  ?? "";
    const phone = phoneRef.current?.value.trim() ?? "";
    const errs: FormErrors = {};

    if (!name) errs.name = "Вкажіть ім'я";

    if (!phone) {
      errs.phone = "Вкажіть номер телефону";
    } else {
      const result = validatePhone(phone);
      if (!result.isValid) errs.phone = result.error ?? "Некоректний номер телефону";
    }

    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);

    try {
      await createDemoLead(name, phone);
    } catch (err) {
      console.error("[createDemoLead] error:", err);
    } finally {
      setLoading(false);
      setStep("success");
    }
  }, []);

  // Phone input — filter invalid chars + live formatting as user types.
  // Restores cursor by counting significant chars (digits + '+') before
  // the old cursor position and finding the same count in the new value.
  const handlePhoneInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    const raw = el.value;
    const formatted = liveFormatPhone(raw);

    if (raw === formatted) return;

    // Count significant chars before cursor in raw value
    const cursor = el.selectionStart ?? raw.length;
    let sigBefore = 0;
    for (let i = 0; i < cursor; i++) {
      if (/[\d+]/.test(raw[i])) sigBefore++;
    }

    el.value = formatted;

    // Find equivalent cursor position in formatted string
    let newCursor = formatted.length;
    let counted = 0;
    for (let i = 0; i <= formatted.length; i++) {
      if (counted === sigBefore) { newCursor = i; break; }
      if (i < formatted.length && /[\d+]/.test(formatted[i])) counted++;
    }

    el.setSelectionRange(newCursor, newCursor);
  }, []);

  const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  if (!isOpen) return null;

  return (
    <div className="demo-modal-overlay" onClick={handleClose}>
      <div className="demo-modal-content" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" onClick={stopPropagation}>

        <button className="demo-modal-close" onClick={handleClose} aria-label="Закрити">
          <X size={20} />
        </button>

        {step === "form" ? (
          <>
            <div className="demo-modal-header">
              <h2 id="demo-modal-title" className="demo-modal-title">Записатися на демо-перегляд</h2>
              <p className="demo-modal-desc">
                Заповніть форму — ми зв&apos;яжемось з вами та організуємо персональну демонстрацію системи.
              </p>
            </div>

            <form onSubmit={handleSubmit} onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }} noValidate>
              <div className="demo-form-card">

                <div
                  className={`demo-form-row${errors.name ? " demo-form-row--error" : ""}`}
                  style={{ cursor: "text" }}
                  onClick={() => nameRef.current?.focus()}
                >
                  <span className="demo-form-icon">👋</span>
                  <input
                    ref={nameRef}
                    className="demo-form-input"
                    type="text"
                    placeholder="Ім'я"
                    autoComplete="name"
                  />
                </div>
                {errors.name && <p className="demo-form-error">{errors.name}</p>}

                <div className="demo-form-divider" />

                <div
                  className={`demo-form-row${errors.phone ? " demo-form-row--error" : ""}`}
                  style={{ cursor: "text" }}
                  onClick={() => phoneRef.current?.focus()}
                >
                  <span className="demo-form-icon">☎️</span>
                  <input
                    ref={phoneRef}
                    className="demo-form-input"
                    type="tel"
                    placeholder="Номер телефону"
                    autoComplete="tel"
                    onInput={handlePhoneInput}
                  />
                </div>
                {errors.phone && <p className="demo-form-error">{errors.phone}</p>}

              </div>

              <button type="submit" className="btn-primary demo-submit-btn" disabled={loading}>
                {loading ? "Надсилаємо…" : "Записатися"}
              </button>
            </form>
          </>
        ) : (
          <div className="demo-success">
            <div className="demo-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 id="demo-modal-title" className="demo-modal-title" style={{ marginTop: 24 }}>Заявку надіслано!</h2>
            <p className="demo-modal-desc" style={{ marginTop: 8 }}>
              Дякуємо! Ми зв&apos;яжемось з вами найближчим часом та організуємо персональний демо-перегляд My Community.
            </p>
            <button className="btn-primary demo-submit-btn" style={{ marginTop: 32 }} onClick={handleClose}>
              Закрити
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
