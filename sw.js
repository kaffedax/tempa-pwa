/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-e3b0c44298fc-"
const CACHE_NAME = "tempa-shell-e3b0c44298fc-880eeacf331f3fd01f8d"
const BASE_PATH = ""
const ASSETS = [{"url":"/__next.__PAGE__.txt","sha256":"59c742dee43edd7093b208f5109619808b7f4cd59a8f0b6d30a8c5e857ef5dc3"},{"url":"/__next._full.txt","sha256":"a3313b9f81915f2d59ce02f0587a8c0754e2d5a5fdb1499fafc637e688f61be7"},{"url":"/__next._head.txt","sha256":"11668adc8a5061612e2ae34c11055bb5e972b012c0b69c3b73322e8620e3f8bf"},{"url":"/__next._index.txt","sha256":"c2f9f1d202b24b2f01b13d846010d0e7f69f9d07865bcfb5a4d01948cabcf8aa"},{"url":"/__next._tree.txt","sha256":"bc048fcfc862d1f866fa9d319a0efc163ef64a99d7bdecac7b34aaaa48c9f451"},{"url":"/_next/static/L4ovF4D6r5b3eMt5aghXF/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/L4ovF4D6r5b3eMt5aghXF/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/_next/static/L4ovF4D6r5b3eMt5aghXF/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/_next/static/chunks/1575030e48a1581a.js","sha256":"b531a8f99cd79f8143ad85d4d48931135dee48c648c93d7b05acc91862eb1193"},{"url":"/_next/static/chunks/299b70bf394d6309.css","sha256":"b833315ee5aec28f3cb77e1189e0fdf7811d4dcb1092f1d4a51fad29a4d99151"},{"url":"/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/_next/static/chunks/36eb040fd7f092fc.js","sha256":"223eb3e589c7677a938aaf6ed46ba85c8659a670abc1adcc312d5eb8d8419512"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/_next/static/chunks/b835f1788960905d.js","sha256":"87adea0301a4287a1d39433163143a440dbe1b642fa3ab84048f8f09d7f53da4"},{"url":"/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/_next/static/chunks/f0e3c5f53329299f.js","sha256":"3fe2811a779de09e34adfea820ddbc8b9b3438fe15527abe7ef9748b046e3dea"},{"url":"/_next/static/chunks/turbopack-191e592bb3ffa1d1.js","sha256":"1e40f415006dd31b1d8fe46abd6f31419cda6fd3affb41d9123398cfe3338c5f"},{"url":"/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/_not-found.txt","sha256":"3892d63d86f1954173cb0535c7a32fd034a659571bf8c28ecc9b9654c86d4a5f"},{"url":"/_not-found/__next._full.txt","sha256":"3892d63d86f1954173cb0535c7a32fd034a659571bf8c28ecc9b9654c86d4a5f"},{"url":"/_not-found/__next._head.txt","sha256":"573fe575b96256e157eb3c217e3408a4090a8d4ec46ffc87888b8f61c5c0c82b"},{"url":"/_not-found/__next._index.txt","sha256":"c2f9f1d202b24b2f01b13d846010d0e7f69f9d07865bcfb5a4d01948cabcf8aa"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"d793d36466410cd0a3fc0e90e06b1f94f68089db5a4fdf8bd691668e428a2839"},{"url":"/_not-found/__next._not-found.txt","sha256":"b991676880b111371c96d8e50d377d95fc752dc9128fa2c90146c8a9d6d52472"},{"url":"/_not-found/__next._tree.txt","sha256":"abc703362ef43462a9bffd21eb39b0474d3f6c6d116dbf0a487bba48ccd3d996"},{"url":"/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/index.html","sha256":"9e783cf61f32d57fca54ff16635d45890bd382b03fa9de4ce2444bceb4196e14"},{"url":"/index.txt","sha256":"a3313b9f81915f2d59ce02f0587a8c0754e2d5a5fdb1499fafc637e688f61be7"},{"url":"/manifest.json","sha256":"5419d8d9bf1310c66cce4a6273d2cf0c5d46d57a95e56c8f4e0a23319be3ac9f"}]

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
