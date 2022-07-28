/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18a5b6fd6bd0021af606b7112265b5f8"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "8f0c56f24326d4ff8a64cf84025e4c0c"
  },
  {
    "url": "application/configuration/env.php.html",
    "revision": "10c349e3a0ca658a2b2556124c8779b6"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "4eaaff962e2b4e3057080b6300350d22"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "456cf337f40953d2b9ff849c69aa8edc"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "90857f2a3deae40daa39fbda6ad56cc4"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "2bdba55093c4079ab78fd078f6b70004"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "1ac3b7e61a03a6795f168042c9adafd3"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "ba16e53d618c64414e6d53e948476c6e"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "93ecafd84f469633ff3773e81d19dc81"
  },
  {
    "url": "application/reference/security.html",
    "revision": "a275fdd4e0744ec67746c66121facdc0"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "57e9b6ea0e5f512ecd91278a72963d44"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "a52f57a5ac40187dc7eca2b3c0335e87"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "69208cdc407d1e7a2b655408e0858358"
  },
  {
    "url": "application/stack/php.html",
    "revision": "edb134463a4e8769c714c6aa492663e2"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "10438ca2b02100dc3c224ae40c2c5d98"
  },
  {
    "url": "assets/css/0.styles.f243e18d.css",
    "revision": "40da8df5bb2b6ca9f409a10c962b7656"
  },
  {
    "url": "assets/img/cronjob.13a2a082.png",
    "revision": "13a2a0821adca81231d050bd313b1693"
  },
  {
    "url": "assets/img/databases.f4d298e3.png",
    "revision": "f4d298e33deaac8de2a17bc87ea1d3e1"
  },
  {
    "url": "assets/img/file-manager-extract-files.0ef60e09.png",
    "revision": "0ef60e09e33aad8888c02477daae8f7b"
  },
  {
    "url": "assets/img/file-manager-extract.72bea043.png",
    "revision": "72bea043996303786ef14ff8921554d3"
  },
  {
    "url": "assets/img/file-manager.d1a07884.png",
    "revision": "d1a078845df44c5bfeb978823c601d6c"
  },
  {
    "url": "assets/img/files.4aa4878b.png",
    "revision": "4aa4878b1596ab287dae4417621c2807"
  },
  {
    "url": "assets/img/logo.e86ba77c.svg",
    "revision": "e86ba77cd18569d687c5e22b7e48bcf3"
  },
  {
    "url": "assets/img/multiphp-ini-keys.83901b7f.png",
    "revision": "83901b7f141fdb6b99f86b244ee0ad2a"
  },
  {
    "url": "assets/img/multiphp-manager.88fa8221.png",
    "revision": "88fa822191bbb6b068796b609a0c9186"
  },
  {
    "url": "assets/img/mutliphp-ini-editor.859b4a87.png",
    "revision": "859b4a87c13eb1beec0520bbf4f09f90"
  },
  {
    "url": "assets/img/mysql-wizard-create-database.e64fa0ed.png",
    "revision": "e64fa0ed54dff2371928c3e64f6b66c6"
  },
  {
    "url": "assets/img/mysql-wizard-privileges.0eee95f6.png",
    "revision": "0eee95f6fd59926640564c5ef93fe372"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/software.77971e2e.png",
    "revision": "77971e2e619a23472449bdd911a762c7"
  },
  {
    "url": "assets/js/10.57d25f40.js",
    "revision": "31da9a21e9cfb4af5511cef369c3b330"
  },
  {
    "url": "assets/js/11.e39049a9.js",
    "revision": "ab1a940bfc901896fad807a771152657"
  },
  {
    "url": "assets/js/12.92ded621.js",
    "revision": "2128f384f1240208a18d56f8f623dbee"
  },
  {
    "url": "assets/js/13.33ad3226.js",
    "revision": "24d6081c1270ebfa6026cd39550fafef"
  },
  {
    "url": "assets/js/14.35eb0845.js",
    "revision": "a8db3c44b78910bc16a16f74da8115ae"
  },
  {
    "url": "assets/js/15.941da77e.js",
    "revision": "eea21752021d50d2ee759f620af03bc1"
  },
  {
    "url": "assets/js/16.3c9a807e.js",
    "revision": "dc753c017df9ec45ff83deaac365fe0a"
  },
  {
    "url": "assets/js/17.6385f000.js",
    "revision": "5f26d32ae7fb2ad663dbeeb0cad6393f"
  },
  {
    "url": "assets/js/18.02501943.js",
    "revision": "b16c2095a3ddb6756ec3ebb1df2db075"
  },
  {
    "url": "assets/js/19.d8fd9b25.js",
    "revision": "b8489afd7150380d1e55207609cf8228"
  },
  {
    "url": "assets/js/2.14705c4e.js",
    "revision": "10ee64a1e7692938bdfe7daf53510b62"
  },
  {
    "url": "assets/js/20.d46675b8.js",
    "revision": "f244e1754d5ba54b662ac783f9c7bfad"
  },
  {
    "url": "assets/js/21.b70a8e8d.js",
    "revision": "ad5a9d9b58f79bdd43099e740b40d47d"
  },
  {
    "url": "assets/js/22.ce58fcd7.js",
    "revision": "250cdef1b5c0d53101fd4dadbd8a5b0b"
  },
  {
    "url": "assets/js/23.37646498.js",
    "revision": "0ea12faff8949032972f8ee613288634"
  },
  {
    "url": "assets/js/24.244242cc.js",
    "revision": "6dce71dc0c2adca76f845daa5e625da4"
  },
  {
    "url": "assets/js/25.f3801ea1.js",
    "revision": "e3c50131cc36f856e9a4099115fab446"
  },
  {
    "url": "assets/js/26.0d10431e.js",
    "revision": "36ff9087339803371d6550e9124c2c9c"
  },
  {
    "url": "assets/js/27.41314ed1.js",
    "revision": "d123c8fc13acc7c1ba9051cc74b93bd6"
  },
  {
    "url": "assets/js/28.52a23650.js",
    "revision": "d5e46f8cbad8b6d9b3c32653c2bdd762"
  },
  {
    "url": "assets/js/29.7efe0a58.js",
    "revision": "a2573671dd041641dbc23855fb3b1132"
  },
  {
    "url": "assets/js/3.21c8e2d0.js",
    "revision": "94ecc2240a69b2ac1170d2bc163807cc"
  },
  {
    "url": "assets/js/30.b0a4882f.js",
    "revision": "90adf9cd9ddc212d7e2da08672e936e7"
  },
  {
    "url": "assets/js/31.f0c1d74c.js",
    "revision": "897fcfd259c5fc765d4bab77f9fec255"
  },
  {
    "url": "assets/js/32.7675440e.js",
    "revision": "afa6e788a70190b21b2b1fa4146fa00d"
  },
  {
    "url": "assets/js/33.ba2421dd.js",
    "revision": "464f799d5f6cfaa85ae216a248eae8c2"
  },
  {
    "url": "assets/js/34.41c8f9b6.js",
    "revision": "6b001224ff4df92bb87c1f3c4f0c3ad9"
  },
  {
    "url": "assets/js/35.d47bd8ff.js",
    "revision": "047dc9574bd66e40d0717af3c27360d8"
  },
  {
    "url": "assets/js/36.33bb062c.js",
    "revision": "74833f91afa642a4924e35454e4a437c"
  },
  {
    "url": "assets/js/37.d3ed149a.js",
    "revision": "ff913f7a3a2b10e0562efaf322a1413c"
  },
  {
    "url": "assets/js/38.8a4f6136.js",
    "revision": "3de761f1af567105df1be9a12b5ba853"
  },
  {
    "url": "assets/js/39.0a8ce1c0.js",
    "revision": "2194dc20f6c3b470b955c2ccae21acc0"
  },
  {
    "url": "assets/js/4.5d831fc8.js",
    "revision": "cd615d55b6ae0ab1a8b202dc1469f27f"
  },
  {
    "url": "assets/js/40.5f0169e5.js",
    "revision": "97ad2ee1b07b475096ef02a68d5fc27b"
  },
  {
    "url": "assets/js/41.5a6cd0ad.js",
    "revision": "e0776cfd2ee48712e1412bfd1c93dd39"
  },
  {
    "url": "assets/js/42.249c6bcf.js",
    "revision": "58380fb76436f73d33c67f173c59f80e"
  },
  {
    "url": "assets/js/43.b11a0eb6.js",
    "revision": "c5a05eb4e347a8b420a09660deacd36f"
  },
  {
    "url": "assets/js/44.aad04781.js",
    "revision": "346747d2331406eaf620b483f5b133b0"
  },
  {
    "url": "assets/js/45.e9a6492e.js",
    "revision": "15b49f6b9bad95a3463b005819925597"
  },
  {
    "url": "assets/js/46.71862ee7.js",
    "revision": "b6971a194ac02516b0ddcd4bdf31e49b"
  },
  {
    "url": "assets/js/47.a6d43952.js",
    "revision": "30b1e6f14a97300d62d431782f7ac372"
  },
  {
    "url": "assets/js/5.a45eb926.js",
    "revision": "fced098bff11287eaebd8b55a9b32b38"
  },
  {
    "url": "assets/js/6.0f1a6441.js",
    "revision": "a2e17f5ba525e2da3a8db7ff845a8ce9"
  },
  {
    "url": "assets/js/7.f7115b90.js",
    "revision": "38c7195944edc79de89d759e06d82c18"
  },
  {
    "url": "assets/js/8.8f77ff8c.js",
    "revision": "262a790b3477936516f59e9084c3b058"
  },
  {
    "url": "assets/js/9.8fccbd1b.js",
    "revision": "98b6a45179916d8575258d284975a5b3"
  },
  {
    "url": "assets/js/app.973d6337.js",
    "revision": "721a48fff38572460f3515fd3aa78829"
  },
  {
    "url": "developer/api/api-v1.html",
    "revision": "3103b763469e59520fa70e094905e858"
  },
  {
    "url": "developer/api/api-v4.html",
    "revision": "d0e1a99ce7e1b5c50b9f43b813488810"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "42e8d8ddb58104d5f32de033584e355c"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "ab6df2ecfb22e59834614f0cfe75ad30"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "9d8bf88e7a3524fe8ceffbc6a326a0fc"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "0b0635d4c2452f20571169ec1f4c9fb0"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "4db3ec9451236760547fd031f5f861fa"
  },
  {
    "url": "developer/plugins/development.html",
    "revision": "3222832b52af99892105640b7aeb4716"
  },
  {
    "url": "developer/plugins/publishing.html",
    "revision": "b0c3b06c8c1c9797e32feefc387d8b20"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "4fca51f9695971284fce20c96be8096b"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "aa822f762d12050642176cdd38eb9f1c"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "22555dae7134cd5a2250cc0e6f12a663"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "744c340a826f2e78e3cdb37b816e33fb"
  },
  {
    "url": "guides/docker/bootstrap.html",
    "revision": "7d53af1ef71232866b4836d6ed24cac7"
  },
  {
    "url": "guides/docker/production.html",
    "revision": "310568a2073fd3a725b0cc2201dbd682"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "1f440b054b3228a9379ae86ffe9b26bb"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "cef3e2cde26ceecc4e986230f615906c"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "6fa0ac17f1f6978609fd0ff76448a971"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "f17a477291340ecd75d3f6c0e352ce48"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "885da57512b919c703b62a46e029ae41"
  },
  {
    "url": "introduction/returning/welcome-back.html",
    "revision": "f62fe8b41d281d3cdfa2c043877df6a0"
  },
  {
    "url": "introduction/returning/whats-new.html",
    "revision": "98d218f8c1df124f6146819302e77b06"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "manual/admin.html",
    "revision": "dfe2de22456fcadaf1e8d789243afd05"
  },
  {
    "url": "manual/user.html",
    "revision": "f3c0402c785caeac8d32f494a069a645"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
