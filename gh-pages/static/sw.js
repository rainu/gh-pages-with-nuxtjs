importScripts('/gh-pages-with-nuxtjs/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/app.f94a298905442b90f0aa.js",
    "revision": "f360e9e6046c57512a0bee3219170334"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/layouts/default.aed1b7875609970baadd.js",
    "revision": "0840e147560d69cfb3b57b2e57dcabfb"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/manifest.3d8cd8f4197d17c45c51.js",
    "revision": "def0acb586792d0daba022d5a45d730b"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/pages/index.8cb1761d306c4b13b0a0.js",
    "revision": "007ef7b2a10a952c4de860d29f6631a9"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/vendor.3adf22a7ab8b987218ff.js",
    "revision": "d97364078d34dbc682d5bf35768997d1"
  }
], {
  "cacheId": "gh-pages-demo",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/gh-pages-with-nuxtjs/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/gh-pages-with-nuxtjs/.*'), workbox.strategies.networkFirst({}), 'GET')





