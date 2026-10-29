/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-e3b0c44298fc-"
const CACHE_NAME = "tempa-shell-e3b0c44298fc-975e692113cf812957be"
const BASE_PATH = ""
const ASSETS = [{"url":"/__next.__PAGE__.txt","sha256":"c563b09c1b7d12b95182c3c35029213c4c52c2b36405c08d1d6bb8f54ad961e7"},{"url":"/__next._full.txt","sha256":"651f3a031afb5bcf68edf472f371c31349d4c811e7844fee52abf91470debbef"},{"url":"/__next._head.txt","sha256":"651b1bf78ca540b779b543e3110904021160c8c84fd32066d36f67b205a94985"},{"url":"/__next._index.txt","sha256":"e24068c7756acf950d5ba4c0c3b0ae088a85dc062d20490873a05599d13ad06f"},{"url":"/__next._tree.txt","sha256":"07a8de4a3332aeaa095351eddc9d862131ec2359a31a59af0c8ebd7c0aa2c270"},{"url":"/_next/static/chunks/18fe3980ca6db382.js","sha256":"5a5f95bffd62b31249b8c16a50d9463a258a9cf17d480968a9392960b70095e3"},{"url":"/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/_next/static/chunks/36eb040fd7f092fc.js","sha256":"223eb3e589c7677a938aaf6ed46ba85c8659a670abc1adcc312d5eb8d8419512"},{"url":"/_next/static/chunks/9515725ec5c3b4ab.js","sha256":"d86ce499211f10e4a35858fbcc4ff3efe90b010eb0297df840f99e2032ea2b31"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/_next/static/chunks/e1a1650170c9616c.css","sha256":"b14558f4ce29e70572546e04f71a4e65a0979b1395dc709f9b222420db1bc8b8"},{"url":"/_next/static/chunks/turbopack-191e592bb3ffa1d1.js","sha256":"1e40f415006dd31b1d8fe46abd6f31419cda6fd3affb41d9123398cfe3338c5f"},{"url":"/_next/static/mAz2ns47hDghxdsZGbYvQ/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/mAz2ns47hDghxdsZGbYvQ/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/_next/static/mAz2ns47hDghxdsZGbYvQ/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/_not-found.txt","sha256":"0fde266ea36f97fafb78e4b651fbba1e58198fea3cceeeee14ba198688fa18f2"},{"url":"/_not-found/__next._full.txt","sha256":"0fde266ea36f97fafb78e4b651fbba1e58198fea3cceeeee14ba198688fa18f2"},{"url":"/_not-found/__next._head.txt","sha256":"130ffc22be1cd73528453dc7b4af1e6f2e397ff32ba6b7c3f3ca5a3a8be3cf76"},{"url":"/_not-found/__next._index.txt","sha256":"e24068c7756acf950d5ba4c0c3b0ae088a85dc062d20490873a05599d13ad06f"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"a7b65c3db5b37bc20e2688fe631e89bf54e79b971f7b6a53733a900c0b032bc0"},{"url":"/_not-found/__next._not-found.txt","sha256":"376362d6c26ebfa13457b11d9168783f2b979007066d66aaa304739923d6a83d"},{"url":"/_not-found/__next._tree.txt","sha256":"857d4a3fa93d9cf9f2b62f6007b365a19dc0af07fb1d81f1258928ff46287958"},{"url":"/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/index.html","sha256":"a2c8bce47336056e2d5eff1a1e66149893797cf35d86a2fa84bfbfec25ce9564"},{"url":"/index.txt","sha256":"651f3a031afb5bcf68edf472f371c31349d4c811e7844fee52abf91470debbef"},{"url":"/manifest.json","sha256":"5419d8d9bf1310c66cce4a6273d2cf0c5d46d57a95e56c8f4e0a23319be3ac9f"}]

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
