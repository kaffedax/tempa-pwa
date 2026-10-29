/* Generated into out/sw.js. Never cache user data or third-party requests. */
/* global self, caches */
const CACHE_PREFIX = "tempa-shell-e3b0c44298fc-"
const CACHE_NAME = "tempa-shell-e3b0c44298fc-0502626d02334af6b724"
const BASE_PATH = ""
const ASSETS = [{"url":"/__next.__PAGE__.txt","sha256":"21a581a44eb5be6e2b38bb187827bc790f7ce655d2b7a655c0b3d462c7253328"},{"url":"/__next._full.txt","sha256":"3d160a99cd052af316775e80af96359f1c03f8b0495891f8af13675c9a1b37c9"},{"url":"/__next._head.txt","sha256":"73101241d8adb20ecdebbe9355fa79f99ae58685dbe70f04a03da199566c76a2"},{"url":"/__next._index.txt","sha256":"4e2ff38a57393f3ce846a6ff41d5553a4bc8e4684652adbc085617541202eae3"},{"url":"/__next._tree.txt","sha256":"87b1e0632e9a844ab9cb1011ddf7fe2217bba16daf5db8f1ced6d66df6f3e18a"},{"url":"/_next/static/chunks/2d46628e8b17f0ad.js","sha256":"37454443d527bdf2373ffc025863a65c40ba6570767212de8472af78715a1192"},{"url":"/_next/static/chunks/2f236954d6a65e12.js","sha256":"de98aefbea0cffbf2c3d5d266dfeabef219e5d805208e63bccf1fb65a875b012"},{"url":"/_next/static/chunks/36eb040fd7f092fc.js","sha256":"223eb3e589c7677a938aaf6ed46ba85c8659a670abc1adcc312d5eb8d8419512"},{"url":"/_next/static/chunks/90a8c78c78697684.css","sha256":"1d3d05afc98c71643746d90ef0d409b532eaf1bca1d160f35b1caec343e69db6"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/a6dad97d9634a72d.js.map","sha256":"b26c4f42daadc4b7985198660eb4eaf2f4aedb8d5f46e8111c0128cbc11298fc"},{"url":"/_next/static/chunks/ad4cf95c856c591c.js","sha256":"a4b458a2a7229966d4b376076f7c99c4553a7012e5f958471e5cbc5b410226dd"},{"url":"/_next/static/chunks/c3f7c53421ff9a6f.js","sha256":"c76c139cb9280cd38cbf96386424e30f566a6e0f58135ea35730b3735198def4"},{"url":"/_next/static/chunks/f0e3c5f53329299f.js","sha256":"3fe2811a779de09e34adfea820ddbc8b9b3438fe15527abe7ef9748b046e3dea"},{"url":"/_next/static/chunks/turbopack-191e592bb3ffa1d1.js","sha256":"1e40f415006dd31b1d8fe46abd6f31419cda6fd3affb41d9123398cfe3338c5f"},{"url":"/_next/static/fJpoYpe_prIR7pLB-ksJC/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/fJpoYpe_prIR7pLB-ksJC/_clientMiddlewareManifest.json","sha256":"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"},{"url":"/_next/static/fJpoYpe_prIR7pLB-ksJC/_ssgManifest.js","sha256":"678f6ce2cb80b1fe72fc67e7412be6e2ab6ada083111b64f7c40d35e3cba5e00"},{"url":"/_next/static/media/favicon.0b3bf435.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/_not-found.txt","sha256":"4aa44916ca7d6abbaf90e148a3ec0a48616e2c0ddd1ce44175c8684fd1e72593"},{"url":"/_not-found/__next._full.txt","sha256":"4aa44916ca7d6abbaf90e148a3ec0a48616e2c0ddd1ce44175c8684fd1e72593"},{"url":"/_not-found/__next._head.txt","sha256":"d8ad22f762a62c11b6b8cb5619fdf7f5ace904091ac99d82fb784ace52cccabc"},{"url":"/_not-found/__next._index.txt","sha256":"4e2ff38a57393f3ce846a6ff41d5553a4bc8e4684652adbc085617541202eae3"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"4078b8fda62b2af024697a67861f8795396309e7835a4676c0eae5084931132d"},{"url":"/_not-found/__next._not-found.txt","sha256":"89d5e87f98a4c18bf82de720986c26e9223a87dcecc7418c55a0b64c8d75d187"},{"url":"/_not-found/__next._tree.txt","sha256":"1db9ac79c7457d4231a777fb0b0cbdfbb1b29900094861bf2349c6b54ab4853f"},{"url":"/apple-touch-icon.png","sha256":"a10c176265781fa0c217d34d6601ac9df2916360e0854eb543690bf4847257c0"},{"url":"/favicon.ico","sha256":"2b8ad2d33455a8f736fc3a8ebf8f0bdea8848ad4c0db48a2833bd0f9cd775932"},{"url":"/icon-192-maskable.png","sha256":"1d19d6b269ad1bdc0cc4b70ce8e9d65fc8ebb7f3f831f9aa60053e17e78071f6"},{"url":"/icon-192.png","sha256":"6faa7b6c814e5504cd54d7b3119b9a5dcd74a89a9b9276308d6759238704b7c7"},{"url":"/icon-512.png","sha256":"3875be5b710d4b2a31f286d34d866ac52cac220e195a69ff6ab0e28b3b6a36e7"},{"url":"/index.html","sha256":"a0af0cb36123dfee83a7ce0d10a885a80a2452ee97c12989b5a947202a1a2225"},{"url":"/index.txt","sha256":"3d160a99cd052af316775e80af96359f1c03f8b0495891f8af13675c9a1b37c9"},{"url":"/manifest.json","sha256":"5419d8d9bf1310c66cce4a6273d2cf0c5d46d57a95e56c8f4e0a23319be3ac9f"}]

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
