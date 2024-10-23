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
    "revision": "3224d53bf1e6f24f1c4ec03fdf2bcc97"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "a02da9cfce6cec1237da3e2592765ab4"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "da71c4ea423d63d338b1d1fc7b028719"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "732fdbe63ba632ff70fa9b5dd94fd299"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "b54d7e396e2fdacd1e073dd409f68060"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "893ebc23278378210f7bdcc44ec5b1f2"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "ac7f610c4cc9f111dc88a20ca6a0f874"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "4e91f4d10052396dd31efe7fd2db9cf3"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "b681d69a169b12359bacdac0e6af0781"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "52315ebe1bf00d9670b64fe8bb388dfa"
  },
  {
    "url": "application/reference/security.html",
    "revision": "980e862e3213a91e3374f93caf1ff105"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "7ae8d0c8a578d7d4c8e3d4b2bca0ff4a"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "1043b587ac488e589f96afa85167e73b"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "ec4e9ec8c682be0c8d88b39c9fe4c950"
  },
  {
    "url": "application/stack/php.html",
    "revision": "5f616bbc6d2b0dfcb3235c0dc67a2fa9"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "972bfc4648002f3be545ae1205f14b33"
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
    "url": "assets/img/ffmpeg-folder.1ef2e021.png",
    "revision": "1ef2e0216c8b7bd896a772eb569d5c4c"
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
    "url": "assets/js/10.99d3a08d.js",
    "revision": "82e2023e24de7e5cffff4f96ec2506e0"
  },
  {
    "url": "assets/js/11.49fd923d.js",
    "revision": "23501ebbae52c22fda401b04da67d88b"
  },
  {
    "url": "assets/js/12.aa8a9090.js",
    "revision": "7be554a20ad3396334e92acad076a7cb"
  },
  {
    "url": "assets/js/13.8bc1897a.js",
    "revision": "092327851479695998af3efd24e4e354"
  },
  {
    "url": "assets/js/14.f4ff5d07.js",
    "revision": "740279162daaf06868e276b6e40bc45c"
  },
  {
    "url": "assets/js/15.0208a74d.js",
    "revision": "47e5753efbcf85c46bd8dc5a135e9109"
  },
  {
    "url": "assets/js/16.0856fd9c.js",
    "revision": "6df34cd128a84279edfe0ecd0002d300"
  },
  {
    "url": "assets/js/17.7d3e4633.js",
    "revision": "b2d42fed2290e1f1a80492ca3d7aad0d"
  },
  {
    "url": "assets/js/18.289d8056.js",
    "revision": "ef1c56f7bb5929820c73ee7443224844"
  },
  {
    "url": "assets/js/19.85c294bb.js",
    "revision": "a0a469b6b405ba4d04d1ffc228e784a1"
  },
  {
    "url": "assets/js/2.b975addd.js",
    "revision": "4bf3ae1371434f16cacff2d81fa8cc7a"
  },
  {
    "url": "assets/js/20.8c084ff8.js",
    "revision": "3b292a8185839af7b2e9e684e59810af"
  },
  {
    "url": "assets/js/21.35b21e8e.js",
    "revision": "6fdb14bdc5acafe10843cd39bf9a4d1e"
  },
  {
    "url": "assets/js/22.32378879.js",
    "revision": "6190a67e642b36cd15a5271804330e1b"
  },
  {
    "url": "assets/js/23.fc46a599.js",
    "revision": "76da0a9788c0b71cdc71e000e9299886"
  },
  {
    "url": "assets/js/24.f25f31f3.js",
    "revision": "073c3e7eef115af4ecce6d46a12941ec"
  },
  {
    "url": "assets/js/25.100c7a66.js",
    "revision": "95d5b8496c95343f05a78af5e46ad722"
  },
  {
    "url": "assets/js/26.dfbbafe4.js",
    "revision": "4814f7b5b8df0838f417dd027d2df269"
  },
  {
    "url": "assets/js/27.b77b076a.js",
    "revision": "abf3c45cd85420f5bc42e143a903442c"
  },
  {
    "url": "assets/js/28.c9793a1e.js",
    "revision": "7f0f5b1e39c46c73f5b4f62133077a94"
  },
  {
    "url": "assets/js/29.48c4546b.js",
    "revision": "151883c729731fc3951444e7134b36fb"
  },
  {
    "url": "assets/js/3.a67d0764.js",
    "revision": "1c27c52c62a86688125c39f721b1851f"
  },
  {
    "url": "assets/js/30.0c6811c9.js",
    "revision": "0513b8c248cdbc35d0c67da514eb839c"
  },
  {
    "url": "assets/js/31.fd952463.js",
    "revision": "87aa87c5ad7c5c256a6c59530fa9d2e7"
  },
  {
    "url": "assets/js/32.2c01d2cf.js",
    "revision": "17cf1acaee80c71270f808123b9ac59b"
  },
  {
    "url": "assets/js/33.7ab83b5d.js",
    "revision": "acb342f6fc05fcb70949af3697e324f9"
  },
  {
    "url": "assets/js/34.d6b2107d.js",
    "revision": "03dad59bb7465a7e6b825765d6b93864"
  },
  {
    "url": "assets/js/35.14180773.js",
    "revision": "167801fc645d1508744f41ce68205213"
  },
  {
    "url": "assets/js/36.5c8b0458.js",
    "revision": "21bb5cdd7319cf1978ef09dd7fefcea7"
  },
  {
    "url": "assets/js/37.b19fcf17.js",
    "revision": "878c6271df276086433eb5bc0f51980c"
  },
  {
    "url": "assets/js/38.6435510e.js",
    "revision": "e9975c4adce680fd9427257d6ecc27d3"
  },
  {
    "url": "assets/js/39.b9e9e2a9.js",
    "revision": "b1378bf5fc8215044077a8f0ab80bffb"
  },
  {
    "url": "assets/js/4.3f7b3292.js",
    "revision": "313a750da9cfaafa73e9781615f0cf05"
  },
  {
    "url": "assets/js/40.6171c3df.js",
    "revision": "80b1f2790036e3f74ec93358506f4bba"
  },
  {
    "url": "assets/js/41.ba826bc0.js",
    "revision": "cb8409991c9b7388ca6e83a6045bdf1c"
  },
  {
    "url": "assets/js/42.fca6bed1.js",
    "revision": "f7288bcf3096f790cf05b5322d17cbfb"
  },
  {
    "url": "assets/js/43.80f667bd.js",
    "revision": "2a9f2ed576c22c17648b65f7ade11d4e"
  },
  {
    "url": "assets/js/44.85179752.js",
    "revision": "119c12959264c80c5be0eedf447e6b39"
  },
  {
    "url": "assets/js/45.ce7459eb.js",
    "revision": "66cb293abf5659a8df6c2800ebe87412"
  },
  {
    "url": "assets/js/46.a8532aaf.js",
    "revision": "df740f00649c6aad2851e06c7d0dfa15"
  },
  {
    "url": "assets/js/47.a4e7ac09.js",
    "revision": "e0957136868d47c9aed4e0c37faaba1e"
  },
  {
    "url": "assets/js/48.4309c0ce.js",
    "revision": "d4febbafeab03817b2c4413037da2e73"
  },
  {
    "url": "assets/js/49.ee2a8657.js",
    "revision": "04dd5c2052f1122f1a5688e923100fc7"
  },
  {
    "url": "assets/js/5.0ba51305.js",
    "revision": "590babcbc8315376953f07ca820e3d2a"
  },
  {
    "url": "assets/js/50.d5f2bf3a.js",
    "revision": "20e1452063cd24331675cff026e11cf0"
  },
  {
    "url": "assets/js/51.02236bf9.js",
    "revision": "1600a1777f1bddd7f8993248ac542a05"
  },
  {
    "url": "assets/js/52.2595ed1a.js",
    "revision": "9f4ef3e8ae98c75713157a1805d3d51c"
  },
  {
    "url": "assets/js/53.dd4d403b.js",
    "revision": "cab53d6065f89b6435b66a7ee4c65987"
  },
  {
    "url": "assets/js/54.5c0aa06e.js",
    "revision": "06456548fcf5891cee008c07ba0837d9"
  },
  {
    "url": "assets/js/55.40cfc439.js",
    "revision": "4ea869bf7aa48012c46900daa0eb74c8"
  },
  {
    "url": "assets/js/56.4509d09b.js",
    "revision": "e3d3cd53be3fb6105848c5343168a9f3"
  },
  {
    "url": "assets/js/57.2211c258.js",
    "revision": "5fcf25fe2165c89c719f8bb10e833256"
  },
  {
    "url": "assets/js/58.aac804c0.js",
    "revision": "860bad13dbe1f0eecced76a04ca625d7"
  },
  {
    "url": "assets/js/6.f09342d1.js",
    "revision": "34ebf111acfa098de6bbb5975358adc0"
  },
  {
    "url": "assets/js/7.d845ccec.js",
    "revision": "d9928123b46d1cc314c3b2fd3958b3ac"
  },
  {
    "url": "assets/js/8.c093f6f5.js",
    "revision": "6ceb4be9913fb2bd5e35a5b02ac05fdf"
  },
  {
    "url": "assets/js/9.090ea5c0.js",
    "revision": "15e3edb11213356882d45e294b95b033"
  },
  {
    "url": "assets/js/app.f660ad3d.js",
    "revision": "08ea9f7eef346f058bb6199f911ba6fe"
  },
  {
    "url": "chevereto.svg",
    "revision": "06eba18f49672a53b977251cdc8e83e6"
  },
  {
    "url": "developer/api/api-v1.html",
    "revision": "3c354b64d950173448c77f89c8032de7"
  },
  {
    "url": "developer/api/api-v4.html",
    "revision": "4ec012709065568ccef7096cc4339e8f"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "13e8a08f7cac81c5e339a2d7b14b2cd2"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "fc93690f121f05463cf0223c3ae55106"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "ac2480f50a2469ef37bde2fd84ea6b46"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "bb75a95ac08efbba15119ecedecf9b3a"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "06041c104ff0b9f6bf11f2066e8394ba"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "d620215672960ae9c71ac913f7cee92e"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "0ebf613fa340121be01f214a972e4e03"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "fc1e9b83427cab635c0de0deb276f993"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "ac343738b42368bfd17ebda3b9506cd2"
  },
  {
    "url": "guides/cpanel/ffmpeg.html",
    "revision": "df7193e98bcf5220e53701c144810496"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "0cb8c8e3611f2eafe78745732fc2f75c"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "70d79c4179e188d9640f37a686e629ab"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "2a8039d9add8b274143500e532048418"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "88762d3f82d988a5cb8977c62bab5d51"
  },
  {
    "url": "guides/index.html",
    "revision": "a676e8c02cc341c908d4c844cbd51ee2"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "7c621bc6ef9cfe3e5599ddc94526437b"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "db23a30d0c17ba9c699d9d992a090792"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "190117943596104d6b38f7677e117c16"
  },
  {
    "url": "guides/plesk/ffmpeg.html",
    "revision": "6172410f43879e450c841cb8ebb74b3f"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "c23951912e54b8471e3c6d21cf491783"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "f53efa6f849441476ea1a1c8fd9278ae"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "41323567446f5ba7e84ca2d92c7b60c2"
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
    "revision": "ede6eb0c948f20968e588227af04b841"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "426458f3aeea4ff4edd2a9805bbd32a7"
  },
  {
    "url": "introduction/changelog/4.1.html",
    "revision": "e0b5b13374cafdcc3edd40473972f5a5"
  },
  {
    "url": "introduction/changelog/4.2.html",
    "revision": "12b63362844679d57132653d3f0c4ee4"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "496a1b654faf1b7e8a4080af9fbc36c6"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "696ffefc467539a62c2eed4c3a65be87"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "a5fa70ae00233ebe76f41584c2184149"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "1cbf21870ab750e15a4c54f3e7346590"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "8c52696f223fd3cb85ec831e757e4f3e"
  },
  {
    "url": "logo.png",
    "revision": "17ccf330d6168c2a694bc5dd3edb0c5d"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "manual/admin.html",
    "revision": "161687246cf8357042174fcd4f30a352"
  },
  {
    "url": "manual/user.html",
    "revision": "df75c85603353e50eae0acbed17ed6d7"
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
