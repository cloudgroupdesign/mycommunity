"use client"

import { useEffect } from "react"
import { detectNotFoundReason, getNotFoundConfig } from "@/lib/not-found-handler"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

// global-error replaces the root layout — must include <html>/<body>
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const reason = detectNotFoundReason(error)
  const config = getNotFoundConfig(reason)

  useEffect(() => {
    console.error("[global error]", error.digest ?? error.message, error)
  }, [error])

  return (
    <html lang="uk">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "32px",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          <span style={{ fontSize: "9rem", fontWeight: 700, lineHeight: 1 }}>404</span>
          <p style={{ fontSize: "1.125rem", color: "#6B7280", margin: 0, textAlign: "center" }}>
            {config.description}
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Спробувати ще раз
          </button>
        </div>
      </body>
    </html>
  )
}
