const CACHE = "mycommunity-offline-v1"

// Minimal offline HTML — shown when network is unavailable
const OFFLINE_HTML = `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Community</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding: 32px;
      font-family: Inter, system-ui, sans-serif;
      background: #fff;
      color: #141414;
    }
    h1 { font-size: clamp(72px, 20vw, 144px); font-weight: 700; line-height: 1; }
    p  { font-size: 1.125rem; color: #6B7280; text-align: center; }
    button {
      padding: 12px 24px;
      background: #000;
      color: #fff;
      border: none;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>404</h1>
  <p>Немає з'єднання з інтернетом</p>
  <button onclick="window.location.reload()">Спробувати ще раз</button>
</body>
</html>`

// Install — cache only the offline fallback HTML
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.put("/__offline", new Response(OFFLINE_HTML, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }))
    )
  )
  self.skipWaiting()
})

// Activate — wipe ALL previous caches (removes old page cache)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch — network only; on failure show offline 404 for HTML requests
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return

  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  const isHTML = event.request.headers.get("accept")?.includes("text/html")
  if (!isHTML) return // non-HTML assets: let browser handle naturally

  event.respondWith(
    fetch(event.request).catch(async () => {
      const offline = await caches.match("/__offline")
      return offline ?? new Response(OFFLINE_HTML, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      })
    })
  )
})
