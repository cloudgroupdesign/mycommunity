export type NotFoundReason =
  | "NOT_FOUND"
  | "OFFLINE"
  | "TIMEOUT"
  | "BROKEN_ASSETS"
  | "UNKNOWN"

export interface NotFoundConfig {
  description: string
  action: "home" | "retry"
}

export function getNotFoundConfig(reason: NotFoundReason): NotFoundConfig {
  switch (reason) {
    case "NOT_FOUND":
      return { description: "Сторінку не знайдено", action: "home" }
    case "OFFLINE":
      return { description: "Немає з'єднання з інтернетом", action: "retry" }
    case "TIMEOUT":
      return { description: "Час очікування вичерпано", action: "retry" }
    case "BROKEN_ASSETS":
      return { description: "Помилка завантаження ресурсів", action: "retry" }
    default:
      return { description: "Щось пішло не так", action: "retry" }
  }
}

export function detectNotFoundReason(error?: Error): NotFoundReason {
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return "OFFLINE"
  }
  if (
    error?.name === "ChunkLoadError" ||
    error?.message?.includes("Loading chunk") ||
    error?.message?.includes("Failed to fetch dynamically imported module")
  ) {
    return "BROKEN_ASSETS"
  }
  if (
    error?.message?.includes("timeout") ||
    error?.message?.includes("ETIMEDOUT") ||
    error?.name === "AbortError"
  ) {
    return "TIMEOUT"
  }
  return "UNKNOWN"
}
