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
    "revision": "6ea4c9020b3c3b7826ff34869ecf39a0"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "32d485c95ea7ac00b3f16c4ca30de9d2"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "48c65c1b691bee727bfba36af414cd0b"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "7c05e64f301cdbcb2b57c636e61d9cad"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "595bacf16e2a7aa98a6ca4d043fbc517"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "1560dc2e7f0034635613fb2ce6da71b5"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "c53dbe9e1d01ce6f43b9cc2df993a7fd"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "e5ed0eb0cd182b020f24675be9c316b5"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "718e6293b85db7c036f6a3eca0a260fe"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "6bc4daecda6876d3ad92fac5c1d7acef"
  },
  {
    "url": "application/reference/security.html",
    "revision": "49b3859cfa83d2af5ed19f6667eb6723"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "0c87ce205601e0562c9d2cfc866035bd"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "a9714ca59cb572eaba4fa87e1885a64a"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "cc8cadffea5bc0a3979d00f43123bc7f"
  },
  {
    "url": "application/stack/php.html",
    "revision": "a9d9e1bc338ec7206a7e13f0271d7684"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "451fb73e429adfcd4a1edc14d4fa0682"
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
    "url": "assets/js/10.561396ce.js",
    "revision": "2fa7f97f971beb6a0e5dfeb87a919150"
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
    "url": "assets/js/13.47e10c5f.js",
    "revision": "8ec2fea3297289d3a6978455df02e124"
  },
  {
    "url": "assets/js/14.70e8bfaf.js",
    "revision": "d207432edb7499bf2f48df78cd49a55c"
  },
  {
    "url": "assets/js/15.89532dbb.js",
    "revision": "216db295a107ede954d2a424876c9ad7"
  },
  {
    "url": "assets/js/16.8a7c2684.js",
    "revision": "9144af181a4d64c42f051b313c352c77"
  },
  {
    "url": "assets/js/17.a2fe6ee9.js",
    "revision": "c7d8574a02b136c47826da923bf7ff0a"
  },
  {
    "url": "assets/js/18.c42020d5.js",
    "revision": "488c39e31271eb9cff40fdfd5fe13fbf"
  },
  {
    "url": "assets/js/19.09abfde0.js",
    "revision": "1402f04485237f4d62f4ab5ae46e255a"
  },
  {
    "url": "assets/js/2.5b2e8727.js",
    "revision": "49cc8f5ae73ea07a81c4d26f465f01ea"
  },
  {
    "url": "assets/js/20.73c05afa.js",
    "revision": "b070021da9b03446093ba43ef5cc0f55"
  },
  {
    "url": "assets/js/21.b0525c1e.js",
    "revision": "10269c8e25c6958dd8ca7dfca80e1941"
  },
  {
    "url": "assets/js/22.d4127543.js",
    "revision": "b3e7b839050bd5766445dbde5276a5b5"
  },
  {
    "url": "assets/js/23.0cea8a05.js",
    "revision": "d56ad301788078361ebccf7393d4cc4d"
  },
  {
    "url": "assets/js/24.e9ad44e1.js",
    "revision": "8dd587dc13e3afc6f44ea8c86e4dabcd"
  },
  {
    "url": "assets/js/25.51cb83fe.js",
    "revision": "52fd73f9a7649fbf954f41015e3a95d9"
  },
  {
    "url": "assets/js/26.e7c9bba2.js",
    "revision": "3133bb96a9d83e28c821042060f0a5d9"
  },
  {
    "url": "assets/js/27.f6b62961.js",
    "revision": "aeb0ac567dc5c0c94431c089e01f654c"
  },
  {
    "url": "assets/js/28.7cf780f2.js",
    "revision": "e200b6ef3c7ff2ae5fc7d882b2900570"
  },
  {
    "url": "assets/js/29.47ba45d1.js",
    "revision": "931fbc30406831550f362e222567db26"
  },
  {
    "url": "assets/js/3.dd83a52f.js",
    "revision": "cd8e0e57b901d9882247e51728d040b9"
  },
  {
    "url": "assets/js/30.e9296a2f.js",
    "revision": "531c15a7fab32848a311407e4a05561f"
  },
  {
    "url": "assets/js/31.63915963.js",
    "revision": "28fdb99e5b24b28a1e1e3e4e7771a921"
  },
  {
    "url": "assets/js/32.eb25aecd.js",
    "revision": "df526446683382cf79d4b1b80eeef995"
  },
  {
    "url": "assets/js/33.872fd718.js",
    "revision": "f412601bcd8e46500cef343592b7b0a3"
  },
  {
    "url": "assets/js/34.043ee057.js",
    "revision": "02eccfa90105e7158d956f552fd6cd1e"
  },
  {
    "url": "assets/js/35.376e6004.js",
    "revision": "61c67f2d4aa6a85022c139c4eb6b0361"
  },
  {
    "url": "assets/js/36.14f410a4.js",
    "revision": "1384fff644605c5b0340badece79a42a"
  },
  {
    "url": "assets/js/37.ebfe93d9.js",
    "revision": "bfde8b7aaed9a5131b69585c52a4b8dd"
  },
  {
    "url": "assets/js/38.ee5618dd.js",
    "revision": "0e3acd9a6d2799bfbffcb40687318b46"
  },
  {
    "url": "assets/js/39.92ff9292.js",
    "revision": "175aa4c611d5de0740d72114fdd0d726"
  },
  {
    "url": "assets/js/4.1831f312.js",
    "revision": "b8183c7def15b28662a7fa9764d2486a"
  },
  {
    "url": "assets/js/40.d02961f6.js",
    "revision": "c7e0aba076d8d6610d97ce4d6a2f5fa0"
  },
  {
    "url": "assets/js/41.ed8296c3.js",
    "revision": "0130deda3c6c568df5c8f2b41d5de8be"
  },
  {
    "url": "assets/js/42.7eb3d1d7.js",
    "revision": "7fc683e00ee0a28fa174cde318866b1d"
  },
  {
    "url": "assets/js/43.51f78281.js",
    "revision": "a56ca4edf6b958cad7c9a35012bfadf5"
  },
  {
    "url": "assets/js/44.9d40e2d2.js",
    "revision": "a25a6ebafdf91e73a202adfff5445551"
  },
  {
    "url": "assets/js/45.fe7dfd1f.js",
    "revision": "85982a1110c7c3aa47cd884b50d5ab31"
  },
  {
    "url": "assets/js/46.78029646.js",
    "revision": "23ba2e4b01db0d310ec114b191baa65c"
  },
  {
    "url": "assets/js/47.217cf800.js",
    "revision": "62c851db17c393f3626bc62d0ebe6c0e"
  },
  {
    "url": "assets/js/48.096b9013.js",
    "revision": "b77920efdfc4100c5ca3afa3686c6010"
  },
  {
    "url": "assets/js/49.40383049.js",
    "revision": "c6d27aa50c53b23d38020d93e27bc45b"
  },
  {
    "url": "assets/js/5.1f04a2d8.js",
    "revision": "2cdd73b3365c9349a4aa856e511080a8"
  },
  {
    "url": "assets/js/50.df494094.js",
    "revision": "d6f551e9ce14c6b7727609744f1c32b5"
  },
  {
    "url": "assets/js/51.0c07308f.js",
    "revision": "7b3031e9754e6499ab4367f0bc04ee8b"
  },
  {
    "url": "assets/js/52.dd0369f2.js",
    "revision": "8d7d1de03bf71f578f26bb6f87df614c"
  },
  {
    "url": "assets/js/53.be7db4ad.js",
    "revision": "ab2a338c01502388dfe0082610c4dabd"
  },
  {
    "url": "assets/js/54.35c3964c.js",
    "revision": "dd2ac826503413ce6f779d5639c1049a"
  },
  {
    "url": "assets/js/55.ef08173d.js",
    "revision": "fbb156094056c7a9007322dc80345fab"
  },
  {
    "url": "assets/js/6.906c2148.js",
    "revision": "125efe95411dfecf6fcbe61aad908a2d"
  },
  {
    "url": "assets/js/7.9470232e.js",
    "revision": "518868c14623db3cff462b418a92f5e6"
  },
  {
    "url": "assets/js/8.566ee541.js",
    "revision": "2acdbcd1fd85985bb9a61ea0d5b92d25"
  },
  {
    "url": "assets/js/9.2f5ae5aa.js",
    "revision": "4636d9e4a9d90336fb8c1c7a0bf2ac40"
  },
  {
    "url": "assets/js/app.0c59aba6.js",
    "revision": "d5918901924de1e16275b91cb469065e"
  },
  {
    "url": "developer/api/api-v1.html",
    "revision": "cc2a84033d98b09276863fe014c3d4d5"
  },
  {
    "url": "developer/api/api-v4.html",
    "revision": "673036ca0301f055d9388ef8fa6f0574"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "c8b8a0d8c6382b6eed6b82412b2d633e"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "5656b5d4f044f405fa9c923dfbf48093"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "e4490cc8d675578aaec72b61f9538415"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "790f0d577cb8abd49e666ccd6deb6808"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "79bed3f8788ed9cd0fe027c08e36a957"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "129157ad28c938a4601c536d711832c2"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "150612b709dbc1fd914deec3d4502677"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "246217a8931f6e24bd042461ea474d29"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "095897b1c204b28ff8baffeffa41b4bd"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "683607c7a160a97670a5747a00f9dd5b"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "39948242e5f77da61425fa0dc3df64f5"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "801bb6982ceb8fdb04d2702883f7d65c"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "debe9a736d6f9b25bab43b26990c64f0"
  },
  {
    "url": "guides/index.html",
    "revision": "1ab54b5a6d1e2eb1a4bd684e7c0279b6"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "32faf39532b295396afd5ff56bb574ae"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "f96a8f52d1d3bbb521c28ee28c7b6c80"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "1c05f1e0d2989aa2cbe35da3231d68c9"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "a66f70482f3d4a44952b8646b39bc746"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "ffa927538298421fed4948ac37beec45"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "aae9082c5b577351262409a12347b5c4"
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
    "revision": "ff2d414317305d12b43df7170d6b1272"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "af632c3dbc80384244956ac7dcbd2e6c"
  },
  {
    "url": "introduction/changelog/4.1.html",
    "revision": "1a4e0e4709015cab2ec1b26c4e15704d"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "8164a6a2737e37ea288a75e1fa5b4772"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "aa906023b42e4866ec9700102fdd06ad"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "c1fd909c4efa215782417fc8601e0aea"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "63a559ccc3d7bd22596e13a1c2f7d385"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "0d0e3ca4f86a820ae30c9ede08bb6a55"
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
    "revision": "bb79bd0003d872c3800000b2c95d9b5e"
  },
  {
    "url": "manual/user.html",
    "revision": "05fb1bd63befe5ff19a17c023d674828"
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
