const CACHE = "mycommunity-v1"
const PAGES = ["/", "/prices", "/integrations"]

// Install — pre-cache all known pages
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PAGES))
      .catch(() => {})
  )
  self.skipWaiting()
})

// Activate — remove stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
  )
  self.clients.claim()
})

// Fetch — network-first, cache fallback
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return

  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  const isHTML = event.request.headers.get("accept")?.includes("text/html")

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful HTML responses
        if (response.ok && isHTML) {
          const clone = response.clone()
          caches.open(CACHE).then((cache) => cache.put(event.request, clone))
        }
        return response
      })
      .catch(async () => {
        // Network failure — try exact cache match
        const cached = await caches.match(event.request)
        if (cached) return cached

        // For HTML: fall back to cached home page (will render with 200, Next.js handles 404 UI)
        if (isHTML) {
          const home = await caches.match("/")
          if (home) return home
        }

        // Nothing cached — let browser show its own error
        return Response.error()
      })
  )
})
