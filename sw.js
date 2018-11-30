importScripts('/gh-pages-with-nuxtjs/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/app.6b5bc77fe61584113e51.js",
    "revision": "609e95b3d35ce465828ab07c508112b3"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/layouts/default.5f1df5ea012545a830f1.js",
    "revision": "77c2fc03985a6332d649e5df8070a7ef"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/manifest.b317c895931a4d9f849c.js",
    "revision": "ecb68db36d1ec1dc0e998d666337109d"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/pages/index.1cc43786baf57d4d3a16.js",
    "revision": "62bf453d7aea42f871294e813c0322aa"
  },
  {
    "url": "/gh-pages-with-nuxtjs/_nuxt/vendor.cf35055776ab0bbd7d9a.js",
    "revision": "e1ff2e080b9a4e7a06bd6643f5159538"
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





