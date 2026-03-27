"use client"

import { useEffect } from "react"
import { NotFoundUI } from "@/components/not-found-ui"
import { detectNotFoundReason } from "@/lib/not-found-handler"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  const reason = detectNotFoundReason(error)

  useEffect(() => {
    console.error("[error boundary]", error.digest ?? error.message, error)
  }, [error])

  return <NotFoundUI reason={reason} onRetry={reset} />
}
