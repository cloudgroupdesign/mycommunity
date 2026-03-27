"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getNotFoundConfig } from "@/lib/not-found-handler"
import type { NotFoundReason } from "@/lib/not-found-handler"

interface NotFoundUIProps {
  reason?: NotFoundReason
  onRetry?: () => void
}

export function NotFoundUI({ reason = "NOT_FOUND", onRetry }: NotFoundUIProps) {
  const [resolvedReason, setResolvedReason] = useState<NotFoundReason>(reason)

  // Client-side: promote to OFFLINE if no network
  useEffect(() => {
    if (reason === "NOT_FOUND") return
    if (!navigator.onLine) setResolvedReason("OFFLINE")
  }, [reason])

  const config = getNotFoundConfig(resolvedReason)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 font-[family-name:var(--font-inter)]">
      <span className="text-[120px] md:text-[160px] font-bold tracking-tight leading-none select-none">
        404
      </span>
      <p className="text-lg md:text-xl text-[#6B7280] text-center max-w-sm">
        {config.description}
      </p>
      {config.action === "home" ? (
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Повернутися на головну
        </Link>
      ) : (
        <button
          onClick={onRetry ?? (() => window.location.reload())}
          className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Спробувати ще раз
        </button>
      )}
    </div>
  )
}
