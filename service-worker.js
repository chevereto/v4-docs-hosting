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
    "revision": "2093a64d528062d1401a8ad78876e614"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "db655be767000f296bb94f63e9a7d02b"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "54f7d7c1ad8126ed28e3fdeb414d804b"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "5d71a7edfc6a0b99ac4d79b9bf9aeffa"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "c7de4fcec57a9b71f7e014bfaea05fe7"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "94c840b139c88f6aacdd1364dc335eeb"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "2268a8861a74d9fd31b676096c2b0e68"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "6442d4e7c42eb0ef7197bb9a759d823b"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "a27da6603b572170089ef7c917c5d16b"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "f35c2af8f9795301a3956fa3cf464366"
  },
  {
    "url": "application/reference/security.html",
    "revision": "cfd95a67cf8e42f9510e39dd3aaf8524"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "d1f9d7976a858fd9f623f5b25e94c42a"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "e82e3931f020ad4ffc1b5a95be91531c"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "cd70b0cedff7fc9db318434b640aa222"
  },
  {
    "url": "application/stack/php.html",
    "revision": "4d55fc6c5d05d7f3e2039433c547749c"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "9e5820128137f3b706dd0d92ed852a04"
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
    "url": "assets/js/10.d1b23ddd.js",
    "revision": "c44f03aa9e9f52c58ba193e7c1017cef"
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
    "url": "assets/js/13.7f31a49f.js",
    "revision": "fd8d56ae760b1ae076e2ab01eaa68704"
  },
  {
    "url": "assets/js/14.84dca870.js",
    "revision": "984f9e08b4a492785ddf596a6ef7dee7"
  },
  {
    "url": "assets/js/15.addef186.js",
    "revision": "93c82261153fc815c733766da87b44f0"
  },
  {
    "url": "assets/js/16.38b4fd36.js",
    "revision": "eb095ad2419018173214c47a1144aecd"
  },
  {
    "url": "assets/js/17.7d3e4633.js",
    "revision": "b2d42fed2290e1f1a80492ca3d7aad0d"
  },
  {
    "url": "assets/js/18.4c8fd476.js",
    "revision": "82a470469ec9b3823b4faa38cd24490a"
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
    "url": "assets/js/20.83f00c76.js",
    "revision": "9fa7be1b77badbed3f7d1e9c7a79d19c"
  },
  {
    "url": "assets/js/21.9fbc7669.js",
    "revision": "23eb8c3ef69e4cf82a882be6da25f73a"
  },
  {
    "url": "assets/js/22.e44a516e.js",
    "revision": "8ca2e9898405dc3159cac6106cb37640"
  },
  {
    "url": "assets/js/23.780b2fd0.js",
    "revision": "b6abaafbaf868fceb2553bd77c0e732e"
  },
  {
    "url": "assets/js/24.2da766a3.js",
    "revision": "e37541af07acc0c61bb76a4af362eef5"
  },
  {
    "url": "assets/js/25.49637c90.js",
    "revision": "850a4df5f70e088b0caab3400a972c94"
  },
  {
    "url": "assets/js/26.f643a5e2.js",
    "revision": "f04aa30eb5d83111b2840be01ace4ba7"
  },
  {
    "url": "assets/js/27.51616076.js",
    "revision": "f900e9a238f05588910810f52fd93b8c"
  },
  {
    "url": "assets/js/28.9c9cc71a.js",
    "revision": "f2e5960fd0d51cc4db8f3c2ad7831ab9"
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
    "url": "assets/js/33.47f60930.js",
    "revision": "190646bc65dbcd398ded606720e86e4b"
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
    "url": "assets/js/4.b40583bc.js",
    "revision": "d6085ee93d7181d39432657c508f94ae"
  },
  {
    "url": "assets/js/40.a5b7a387.js",
    "revision": "b994a8a4aaee0ad106ffbd8bf0bbf5c7"
  },
  {
    "url": "assets/js/41.b4ea61d9.js",
    "revision": "fabc8f2102c77432f2ea0731cb651bfa"
  },
  {
    "url": "assets/js/42.07dad0bf.js",
    "revision": "15d9e4545d7c978401ce090776870b8a"
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
    "url": "assets/js/47.e09a06c1.js",
    "revision": "90fee5b83e3f82fe445b08df8d6e158b"
  },
  {
    "url": "assets/js/48.04cba334.js",
    "revision": "67db9c88fcaa4cebc3a5f865b020a4bc"
  },
  {
    "url": "assets/js/49.49cf8991.js",
    "revision": "a6f5a42754c9870e9a843bfbc7c5c108"
  },
  {
    "url": "assets/js/5.e1e6e842.js",
    "revision": "8b1eb3fc52e676fb72f80df5d4951262"
  },
  {
    "url": "assets/js/50.01167134.js",
    "revision": "f2d46a3a7ba8ee4e22f6bedf927bb4b6"
  },
  {
    "url": "assets/js/51.0bb5f311.js",
    "revision": "8975ade5244673013237f2a623ad288c"
  },
  {
    "url": "assets/js/52.808c992c.js",
    "revision": "bff8c1701d07f469953a9a5f45cd716d"
  },
  {
    "url": "assets/js/53.5180117a.js",
    "revision": "4f6dc22e85036879278bf675b481deb2"
  },
  {
    "url": "assets/js/54.de4bf29c.js",
    "revision": "02c05e885ef9610850770a927ed896bb"
  },
  {
    "url": "assets/js/55.40b6b6ce.js",
    "revision": "aacbaaa79a5edae694c2f760ece5f124"
  },
  {
    "url": "assets/js/56.a2912d05.js",
    "revision": "78d5775f0bdc4f8bede349e5b5a65be3"
  },
  {
    "url": "assets/js/57.c7acedab.js",
    "revision": "926c798eb56ed5928cde5a2334fe4f05"
  },
  {
    "url": "assets/js/6.f09342d1.js",
    "revision": "34ebf111acfa098de6bbb5975358adc0"
  },
  {
    "url": "assets/js/7.da70f52e.js",
    "revision": "b7c480b784bafbbd8f9c852d0a0165f5"
  },
  {
    "url": "assets/js/8.d60077dc.js",
    "revision": "cd4192ad2c1d2d051f8ebef8c15aa51e"
  },
  {
    "url": "assets/js/9.090ea5c0.js",
    "revision": "15e3edb11213356882d45e294b95b033"
  },
  {
    "url": "assets/js/app.ab990b15.js",
    "revision": "7548ccb1b88780066563b726344e88b4"
  },
  {
    "url": "chevereto.svg",
    "revision": "06eba18f49672a53b977251cdc8e83e6"
  },
  {
    "url": "developer/api/api-v1.html",
    "revision": "40ed44e7063f82c5040e54c44d121e6b"
  },
  {
    "url": "developer/api/api-v4.html",
    "revision": "fb4ef3f8363d32981f631443259019d1"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "cbd9b50e491105811134301ee73ca516"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "73dc4b6d6dbb071a0afac3704acf0b58"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "c64bdda03b4345ec28b9d9c7f1f9cdfb"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "bbcf78c273bc13ea3ef9c7855bce2bf7"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "02975ea5c2e56915f71d98bb9d64aa8f"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "0bfd815aed727a2094b4c2456cc1bd12"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "3accce3b470d9ba27d947c324765f7e1"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "849e6c0839dbaaf1a4d1583162502f47"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "ffc42a9b360fecaf33902ce34fb832f9"
  },
  {
    "url": "guides/cpanel/ffmpeg.html",
    "revision": "07b89e7f440b5b176925896532070406"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "db61cc7e8d2ef6f93562d0ce5ca95c5a"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "7477650804414c3cb0d6183ce630f379"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "26899beaaf990fc3831ca8f35b4ef69f"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "86ccd8dc494730fc6bcb5f6d74e1bba9"
  },
  {
    "url": "guides/index.html",
    "revision": "e8b2ef234957b7e028d90f85a186df66"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "c88675b14ccdaa90338457940a7b0b14"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "4e18f2bdbd94cc4b33bc0b738cb7752e"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "9a30d5ce8fa72beac78dd464c1713884"
  },
  {
    "url": "guides/plesk/ffmpeg.html",
    "revision": "fc12fba225006184444ca6764fe4f550"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "082541d3db82a8e0193f8b908d0cf1f3"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "99e41ab2b0a022cd9001b017a8b3abbd"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "c10e174f3f60984ee7ceb105cb8b49af"
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
    "revision": "047c15c45affd68449e14b6e706bca82"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "f2f37c28967e9bf636a7ce444fdba983"
  },
  {
    "url": "introduction/changelog/4.1.html",
    "revision": "863bf4be991089d6991583730c7cec9b"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "7854f6dbb8c151039316b947e1a1c866"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "7763ed4188ed69d15a73efea754f6b98"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "5868812bda662c543cd67e1297d2fb32"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "16c559027404654b5d4f4fc50e9418a9"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "1adef52be9124f250152d1725c29b8f1"
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
    "revision": "bbb04cc12afd9e84cf353b35832cd945"
  },
  {
    "url": "manual/user.html",
    "revision": "55781a85d56315ca03f34464d0547a95"
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
