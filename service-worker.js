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
    "revision": "0ec7eb1e7c69d08e25e36e9bf1e2ef3c"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "5476e21c691472cc807e964b65e40044"
  },
  {
    "url": "application/configuration/env.php.html",
    "revision": "aaf796fa81e0d36c916dfa40025d422e"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "8f3f731585f5b5a02b440d52f6485580"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "e9b1bcf7454464f72b0b5e7b3739ba72"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "7a5a387b4e052dcc15068400b82b36a0"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "02ae7e2d7f3f23c5cdc4c5ea03897d05"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "056ed77dd7eda4b643c5f2f5ea617ddf"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "61702fde88fa46c33480eb2bc7ca6dc2"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "513ed9b71f8c70f2a9dc4177851d90a1"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "7f07bd3be4272d376159b67984e8af91"
  },
  {
    "url": "application/reference/security.html",
    "revision": "68e0beadb765b13190011623397caf01"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "deeda9644d14986908d500b700f2009c"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "2ab21497f4d9a903bc14a3000096d68f"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "3f0a09a80f4de16604dd82de768ab1fe"
  },
  {
    "url": "application/stack/php.html",
    "revision": "1c81c7e44526c1f9255ffaeb05ce27d4"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "07d2eb1524d66a5ebb624db813d66f94"
  },
  {
    "url": "assets/css/0.styles.9554c03f.css",
    "revision": "934fe56b90ff23b411b230fd290cbf80"
  },
  {
    "url": "assets/img/cronjob.13a2a082.png",
    "revision": "13a2a0821adca81231d050bd313b1693"
  },
  {
    "url": "assets/img/databases-add.48f8f471.png",
    "revision": "48f8f471df09b5057a8133be9df137f4"
  },
  {
    "url": "assets/img/databases-done.a0441970.png",
    "revision": "a04419707ceea790d83be6993d5dffad"
  },
  {
    "url": "assets/img/databases.5d9cf5ab.png",
    "revision": "5d9cf5ab33a10691ffbb58034f6e7240"
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
    "url": "assets/img/file-manager-extract.657c0c2b.png",
    "revision": "657c0c2b59762ded13822b073a6db8c7"
  },
  {
    "url": "assets/img/file-manager-extract.72bea043.png",
    "revision": "72bea043996303786ef14ff8921554d3"
  },
  {
    "url": "assets/img/file-manager-remove-file.c5b2f1aa.png",
    "revision": "c5b2f1aa7c9555044575a3540ad45701"
  },
  {
    "url": "assets/img/file-manager.c016ac19.png",
    "revision": "c016ac195dbf32f776d29cd8b4299226"
  },
  {
    "url": "assets/img/files.4aa4878b.png",
    "revision": "4aa4878b1596ab287dae4417621c2807"
  },
  {
    "url": "assets/img/files.7fc6b3d4.png",
    "revision": "7fc6b3d48f2d7f3cc365fc18ea0ca731"
  },
  {
    "url": "assets/img/hosting-settings.cd381b89.png",
    "revision": "cd381b89f943f5c58d8830d8df552fad"
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
    "url": "assets/img/php-support.997fe037.png",
    "revision": "997fe0370acb29bfd64b836a95fffe90"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sheduled-tasks-add.79d9d81c.png",
    "revision": "79d9d81c4a85989f1f3d581b4ac27e2d"
  },
  {
    "url": "assets/img/sheduled-tasks-demo.c5d5a25c.png",
    "revision": "c5d5a25c1292dba61352b831e8339909"
  },
  {
    "url": "assets/img/sheduled-tasks-ok.8173ab49.png",
    "revision": "8173ab49c53cae3fb60ce4db816a74ac"
  },
  {
    "url": "assets/img/sheduled-tasks.e4524d2a.png",
    "revision": "e4524d2a74f352f62ffc138062ea3950"
  },
  {
    "url": "assets/img/software.77971e2e.png",
    "revision": "77971e2e619a23472449bdd911a762c7"
  },
  {
    "url": "assets/img/tinkerwell-chevereto.387ddd77.png",
    "revision": "387ddd7726f9e0e47643f90a199bd8c8"
  },
  {
    "url": "assets/js/10.6f636975.js",
    "revision": "b2c0230bf786efa74e089872d47a3cf8"
  },
  {
    "url": "assets/js/11.83a502e9.js",
    "revision": "e82781e2364b724d511070a565aae742"
  },
  {
    "url": "assets/js/12.7b973534.js",
    "revision": "cb913acaedafc6ad4601634b43d26665"
  },
  {
    "url": "assets/js/13.5eb6194e.js",
    "revision": "e94f78c78f5c4930e3b4e3d565435ee2"
  },
  {
    "url": "assets/js/14.69779176.js",
    "revision": "2b77d793f9a6eefe76e8c72f53a6b10c"
  },
  {
    "url": "assets/js/15.8a58ef06.js",
    "revision": "f9b27b88bc49ccd406bdfd236ffccd48"
  },
  {
    "url": "assets/js/16.8a7c2684.js",
    "revision": "9144af181a4d64c42f051b313c352c77"
  },
  {
    "url": "assets/js/17.a3f9b2dd.js",
    "revision": "bafd15af8b9973097404e9fd5f2a3c19"
  },
  {
    "url": "assets/js/18.ccb275e1.js",
    "revision": "c7a82842bda1f707037a96b96cf84ada"
  },
  {
    "url": "assets/js/19.7541c8b3.js",
    "revision": "b9159df1be2a32862d526fe25442643b"
  },
  {
    "url": "assets/js/2.5b2e8727.js",
    "revision": "49cc8f5ae73ea07a81c4d26f465f01ea"
  },
  {
    "url": "assets/js/20.2df0b4f3.js",
    "revision": "01275b1c70dd13b6d94ee2f4e30466ef"
  },
  {
    "url": "assets/js/21.09c4ee07.js",
    "revision": "22a59bc275efa10abbdffdcf2d21b9e2"
  },
  {
    "url": "assets/js/22.612b2276.js",
    "revision": "df4d1431a9d20bd4f6fe3e387eff9959"
  },
  {
    "url": "assets/js/23.386a034e.js",
    "revision": "9d3654c1fcc2d87019cffce5dd6ad263"
  },
  {
    "url": "assets/js/24.b48ce88a.js",
    "revision": "11fcb0a715998966a8caa70e0eef7597"
  },
  {
    "url": "assets/js/25.7d123c1d.js",
    "revision": "4ee8e8c592ac4207dccae8c84ba2c061"
  },
  {
    "url": "assets/js/26.1aa5926c.js",
    "revision": "07805405a823e1303e66ba35f1e6e818"
  },
  {
    "url": "assets/js/27.bbca2ca0.js",
    "revision": "4cbbfbaa8a1fb262386be1d1062a80d9"
  },
  {
    "url": "assets/js/28.fa226840.js",
    "revision": "8a7e1d5fa7a0f2827e98026569a98074"
  },
  {
    "url": "assets/js/29.53bacfaa.js",
    "revision": "9cb5eed3df368f7e3e84e3b738c46882"
  },
  {
    "url": "assets/js/3.2496ef63.js",
    "revision": "de7d108954e761c7b67188cf4c4b317a"
  },
  {
    "url": "assets/js/30.a6306f09.js",
    "revision": "d4952f1997e0a5e59e04732dc2037c9e"
  },
  {
    "url": "assets/js/31.3d7ed53a.js",
    "revision": "c8c84a00c6bdf5b30b05a366ff9edc67"
  },
  {
    "url": "assets/js/32.5ffac7b7.js",
    "revision": "f3cbbf0c90b598514028610fdd977274"
  },
  {
    "url": "assets/js/33.525e454f.js",
    "revision": "a395dc97cbd1a20749758d1a92046d86"
  },
  {
    "url": "assets/js/34.50597067.js",
    "revision": "477eae41096eeee7484ddf7c6c306cfd"
  },
  {
    "url": "assets/js/35.858614ee.js",
    "revision": "a778e12203d399fc9ac1a792f93f3f74"
  },
  {
    "url": "assets/js/36.a73c7ed4.js",
    "revision": "d85a03aade15163da0b1e10c4190d330"
  },
  {
    "url": "assets/js/37.b3acd167.js",
    "revision": "3200846eeae1d2ec183d3b97eee8930a"
  },
  {
    "url": "assets/js/38.0e81f3e3.js",
    "revision": "218420f25c0b15e1c5bcb16188a2406d"
  },
  {
    "url": "assets/js/39.ebf58de4.js",
    "revision": "5c357635e498f803f329b1579aebe67c"
  },
  {
    "url": "assets/js/4.39a175a8.js",
    "revision": "375358ec7d03dd526f9a328c4ac48449"
  },
  {
    "url": "assets/js/40.7a15abca.js",
    "revision": "3b3f173a13fa832cf097849f27cb80e1"
  },
  {
    "url": "assets/js/41.5b569a05.js",
    "revision": "df5e7084c1456071f8cd76e47521e72b"
  },
  {
    "url": "assets/js/42.6b0a3ea7.js",
    "revision": "ddbb2aa25be4911bb6190ea5510896f1"
  },
  {
    "url": "assets/js/43.7fb4a1ee.js",
    "revision": "f982e30eba53b94f7f4963e8478c43ec"
  },
  {
    "url": "assets/js/44.69d83572.js",
    "revision": "2abeee8e84503d03463a5da7eac32fd1"
  },
  {
    "url": "assets/js/45.fa46785d.js",
    "revision": "114bc6253d0fe84c161a032994d3734d"
  },
  {
    "url": "assets/js/46.575b2d75.js",
    "revision": "ac9c9defa063b3a7dc7b19ef69f3859b"
  },
  {
    "url": "assets/js/47.2f3bd1a1.js",
    "revision": "3d88f9cc4cb8507adcc5269cd2b2b402"
  },
  {
    "url": "assets/js/48.0dc41b1e.js",
    "revision": "2e249339ab40eb09d92e1f53d943cf9a"
  },
  {
    "url": "assets/js/49.240c3230.js",
    "revision": "473bd64819882ea166be7470599fd58b"
  },
  {
    "url": "assets/js/5.3a08b589.js",
    "revision": "e81da4bd2bc52e3161c8b9c4789fff91"
  },
  {
    "url": "assets/js/50.40e56826.js",
    "revision": "770dea89b57360286146be82c091f6a9"
  },
  {
    "url": "assets/js/51.2a0d338e.js",
    "revision": "a58a487de3b31a1f5796d9e497bb9b21"
  },
  {
    "url": "assets/js/52.8a79cabd.js",
    "revision": "34d3b9f292d40984fe5e8578a46dafdb"
  },
  {
    "url": "assets/js/53.93ea4b81.js",
    "revision": "dcb0af8273726d1b793e6bdd1b4a0b18"
  },
  {
    "url": "assets/js/54.124a730b.js",
    "revision": "8a4742be04d81c22df976c6b4f5061f0"
  },
  {
    "url": "assets/js/55.74f8aa33.js",
    "revision": "9ef86b7c280dad33a643005d62625d6d"
  },
  {
    "url": "assets/js/56.35bbba64.js",
    "revision": "99bae96ca91612a04cd878233c72dedd"
  },
  {
    "url": "assets/js/57.65290e41.js",
    "revision": "d47c87f9fc7c3af00d7444241db9f1fd"
  },
  {
    "url": "assets/js/6.93538772.js",
    "revision": "6f6722bdf62289ac8c63540d67b83b32"
  },
  {
    "url": "assets/js/7.195879fb.js",
    "revision": "115271ca7b40efc47b7b16d5aec12e7a"
  },
  {
    "url": "assets/js/8.2db428e4.js",
    "revision": "b88697cfe832ee6b3851dd5714fc4e51"
  },
  {
    "url": "assets/js/9.2f5ae5aa.js",
    "revision": "4636d9e4a9d90336fb8c1c7a0bf2ac40"
  },
  {
    "url": "assets/js/app.173e8640.js",
    "revision": "8fcbe36fab0b4981ba937c4336eed825"
  },
  {
    "url": "developer/api/api-v1.html",
    "revision": "6a835e85f32b004bee257c78c04f4602"
  },
  {
    "url": "developer/api/api-v4.html",
    "revision": "2c51e5a5389b8150abd13c53ac2ffd1f"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "b749a8639e1e6112ba75fb1ba4f741fb"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "d6248dba17364f1f3a99ae2cb650fbd9"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "341580e26a6f6bd6b925a2b7546654a8"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "e6adcd713be53f1181d705c92234d171"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "f91303361b5890bac9e0a07933987e3c"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "2cabc373a7db511b66f50fc288a07484"
  },
  {
    "url": "developer/plugins/development.html",
    "revision": "ffc3dec0578d5bdc3fcf82ad49f53e98"
  },
  {
    "url": "developer/plugins/publishing.html",
    "revision": "b4c3f2fe41ff41463fb870b38186945a"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "400221ae800e7b5b0504e347e7ba0d39"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "fd11a6466fde392e87b0a748f5156e2f"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "7c0e3f3f363b3a262321ce7fb0324639"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "68fe5075a705f8c7497012fcd5249b64"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "55cf32a6bddaa741136db1c4a2ca294f"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "681e3e67f1437b9c8ac454907def9cfd"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "510af30b7b1f7d51e67d9adba4eefd13"
  },
  {
    "url": "guides/index.html",
    "revision": "729f9b45246e652e26c531adf66e5dab"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "b16514a14527f8b9fc58a6d3290e734d"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "9baa482c54da82b12142f0fb9f980820"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "b9aec312e039a57b46a68e7280071c0c"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "137758ae8e78d9e1f3051f98d5390a27"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "590a909213219ab5b926314ced74aef8"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "3c7d5ff60ce15040521811dba2bcad81"
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
    "revision": "9c0684936875c4ca0885f50f9f4ed654"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "f063d92874501b677b93dcc2aadf6cf3"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "104316f8605da853f34670054a180489"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "8535d4c13077a087c4d84454753887f2"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "2d9a07ddcd7c0c9de8b0fece56a81090"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "3dd3c7a921877d1b707df6b4147d8f36"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "95d71e8577f4ea922f5b87d6a265f6f5"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "manual/admin.html",
    "revision": "8e51620b2271bef422416812474ea5ef"
  },
  {
    "url": "manual/user.html",
    "revision": "eb199c5ed7d62fc34ce2b3efe7bbb537"
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
