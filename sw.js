/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-e3b0c44298fc-"
const CACHE_NAME = "tempa-shell-e3b0c44298fc-e4fe4286f64b52ac8307"
const BASE_PATH = ""
const ASSETS = [{"url":"/__next.__PAGE__.txt","sha256":"ae7ab8b9911ca5e9035d8d188e3632bfedf4e36ed92f772b2c4251d19d17436d"},{"url":"/__next._full.txt","sha256":"8d95867304d2ddb309058e65a318d5c7b26ca47a94733b2b5dee13fa5e10e849"},{"url":"/__next._head.txt","sha256":"1129b6091064b44f4c0914bb7d75e93c003f3bc965a67b3ec34950645b1f8da7"},{"url":"/__next._index.txt","sha256":"66543c79c83443502cc12f36cb139cfdc71b325cddfd4cf9feb137dd2a40c534"},{"url":"/__next._tree.txt","sha256":"dbd86949ac65ba43d2aaedb45ccb90be47ad6ccdc05e3b155847b3e16e45fc41"},{"url":"/_next/static/42wDEthLnFhikGwYp22nt/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/42wDEthLnFhikGwYp22nt/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/_next/static/42wDEthLnFhikGwYp22nt/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/_next/static/chunks/36eb040fd7f092fc.js","sha256":"223eb3e589c7677a938aaf6ed46ba85c8659a670abc1adcc312d5eb8d8419512"},{"url":"/_next/static/chunks/7b8d781806368632.js","sha256":"1f451320a3cb0eb4733d4536adf725afa70e5a059fd76a3363eb11a303884e6a"},{"url":"/_next/static/chunks/9515725ec5c3b4ab.js","sha256":"d86ce499211f10e4a35858fbcc4ff3efe90b010eb0297df840f99e2032ea2b31"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/_next/static/chunks/e1a1650170c9616c.css","sha256":"b14558f4ce29e70572546e04f71a4e65a0979b1395dc709f9b222420db1bc8b8"},{"url":"/_next/static/chunks/turbopack-191e592bb3ffa1d1.js","sha256":"1e40f415006dd31b1d8fe46abd6f31419cda6fd3affb41d9123398cfe3338c5f"},{"url":"/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/_not-found.txt","sha256":"3c2e58e90e6694101a0e2a6dbcb8ea443466ab51da8a89d03d3255575d6b85b5"},{"url":"/_not-found/__next._full.txt","sha256":"3c2e58e90e6694101a0e2a6dbcb8ea443466ab51da8a89d03d3255575d6b85b5"},{"url":"/_not-found/__next._head.txt","sha256":"96fefcf482254d1a8d440aea0549de402abd08f44d5fd2d086133d69a5a8d20b"},{"url":"/_not-found/__next._index.txt","sha256":"66543c79c83443502cc12f36cb139cfdc71b325cddfd4cf9feb137dd2a40c534"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"e93bba3bce5e75d62eb4f6133376eb59bf0f12693ab2e883ca247213b9d39c08"},{"url":"/_not-found/__next._not-found.txt","sha256":"3fbf93bbb7b64aef943d766e7714446345b151470d6eb1c49a98494e28fbbc6e"},{"url":"/_not-found/__next._tree.txt","sha256":"66c59feae71a5c2fb336351e29d55b5c4e8e811b84fe2f596e13d731a1621fc4"},{"url":"/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/index.html","sha256":"0115db93f917e27732b59d056acbbf7236d922d6d669a326ea2c27112507a7e7"},{"url":"/index.txt","sha256":"8d95867304d2ddb309058e65a318d5c7b26ca47a94733b2b5dee13fa5e10e849"},{"url":"/manifest.json","sha256":"5419d8d9bf1310c66cce4a6273d2cf0c5d46d57a95e56c8f4e0a23319be3ac9f"}]

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME)
    try {
      for (const asset of ASSETS) {
        const response = await fetch(asset.url, { cache: 'reload' })
        if (!response.ok) throw new Error(`Failed to cache ${asset.url}`)
        const bytes = await response.clone().arrayBuffer()
        const digest = await crypto.subtle.digest('SHA-256', bytes)
        const actual = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('')
        if (actual !== asset.sha256) throw new Error(`Asset mismatch: ${asset.url}`)
        await cache.put(asset.url, response)
      }
    } catch (error) {
      await caches.delete(CACHE_NAME)
      throw error
    }
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))
  })())
})

self.addEventListener('fetch', event => {
  const request = event.request
  const url = new URL(request.url)
  const scope = `${BASE_PATH}/`
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(scope)) return
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME)
    if (request.mode === 'navigate' && (url.pathname === scope || url.pathname === `${BASE_PATH}/index.html`)) {
      return (await cache.match(`${scope}index.html`)) ?? fetch(request)
    }
    return (await cache.match(request, { ignoreSearch: true })) ?? fetch(request)
  })())
})
