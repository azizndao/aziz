const prefix = "v1"

const URL_TO_CACHE = ["/"]

self.addEventListener("install", (event) => {
  console.log("Service worker installed")
  self.skipWaiting()
  self.waitUntil(async () => {
    const caches = await caches.open(prefix)
    return caches.addAll(URL_TO_CACHE)
  })
})

self.addEventListener("active", (event) => {
  console.log("Service worker activated")
})
