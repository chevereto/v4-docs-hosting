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
    "revision": "35c2ed203d718b005ebce16f5a6c6f97"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "5621ee23bffb417a26c0437a65612d75"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "28862131b1f81114056ada661ddc2781"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "0373c801f8161a10cb9661e3de06509d"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "b7f71b02ac731d24e938dddf43daf913"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "67ab98acc6d70af559aca22d4d8cbe4a"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "a8de0fc9c455699ad9ec168068fe4efd"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "f6ac29c65525b13d755d8c5d12ce121f"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "a0f3ebfccd72f60e612c6eaafcb6e90e"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "369caf1adf486f700a931bf5b5f8cf4d"
  },
  {
    "url": "application/reference/security.html",
    "revision": "67afac1d56a2293b8194f7aba6d00497"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "7293c425208487df0b5abde6d85675d6"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "dafa806cec626971f6cc605f972e2950"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "ebd29182a5c06b7493a051bc364da007"
  },
  {
    "url": "application/stack/php.html",
    "revision": "dc64eaa85cac02f6192b20359d7bf183"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "7de7d82cfa0410e348ea83dfbc48b4f4"
  },
  {
    "url": "assets/css/0.styles.8d0a6092.css",
    "revision": "9bb71ac257d357a1cbef5d50ea320715"
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
    "url": "assets/js/1.4572fa76.js",
    "revision": "f1a58cab3871caeaf73ccdf4160a7afa"
  },
  {
    "url": "assets/js/10.63e6632a.js",
    "revision": "9733b3b4f84912137e930b7e0dacfc81"
  },
  {
    "url": "assets/js/11.8c986ad8.js",
    "revision": "595405d27d7b5ac3b3bdf10890038d26"
  },
  {
    "url": "assets/js/12.4133ac6b.js",
    "revision": "12a81af8e1d20b9ccfb0f62d1abf2ca9"
  },
  {
    "url": "assets/js/13.2fcdf155.js",
    "revision": "a68460215d414dfb609b21c9c236008e"
  },
  {
    "url": "assets/js/14.fc4a1a9f.js",
    "revision": "73765635b50521cd49ade18c131e662a"
  },
  {
    "url": "assets/js/15.995f9cc0.js",
    "revision": "ccadfc03eb1f8fefbec74a2b8def0c3b"
  },
  {
    "url": "assets/js/16.c391cf1b.js",
    "revision": "2508803c9a3e254488a18e59831da90b"
  },
  {
    "url": "assets/js/17.142792a6.js",
    "revision": "1aaf4e25a66fb0f5d89d118432dd64ac"
  },
  {
    "url": "assets/js/18.21ede185.js",
    "revision": "3c2cff65079d44071ba55d9296c46e05"
  },
  {
    "url": "assets/js/19.f6e1e951.js",
    "revision": "46f273c3d023353ac4eec9bbaf6f03c9"
  },
  {
    "url": "assets/js/2.bd715938.js",
    "revision": "1c40fcdcad0dfb88a404c0125ec4d1c1"
  },
  {
    "url": "assets/js/20.8fdd7422.js",
    "revision": "0821bf30575bde01d8f502b2a1484a22"
  },
  {
    "url": "assets/js/21.e9137525.js",
    "revision": "e1072de93f731493e213f977fc4ad5fe"
  },
  {
    "url": "assets/js/22.475b2d08.js",
    "revision": "5e196ee745f7e45005e288e9ff7eed76"
  },
  {
    "url": "assets/js/23.ba984b4a.js",
    "revision": "8b0389806db5365c5fb087427103b92f"
  },
  {
    "url": "assets/js/24.14b4f1d5.js",
    "revision": "870cd4f9f2044f0bb640824fb95dbd8a"
  },
  {
    "url": "assets/js/25.ff594898.js",
    "revision": "5dd322e4548053d87bfbef452946f9b4"
  },
  {
    "url": "assets/js/26.5843dbdc.js",
    "revision": "475513dddced0fea525c9c7e143413ca"
  },
  {
    "url": "assets/js/27.ed7a479a.js",
    "revision": "88e6c644e3c4d05926fc037b48b4e45e"
  },
  {
    "url": "assets/js/28.5e109e3e.js",
    "revision": "ca64ba4209b419e14e49d9488488cb97"
  },
  {
    "url": "assets/js/29.75b0aae6.js",
    "revision": "371f04e9315bb2833ec1158d6e594d5a"
  },
  {
    "url": "assets/js/3.aca46339.js",
    "revision": "42274869013822dbcd75f0e555e3f79b"
  },
  {
    "url": "assets/js/30.975a7720.js",
    "revision": "56f52d3815a0d73c4af2966465918169"
  },
  {
    "url": "assets/js/31.8acbb16b.js",
    "revision": "779159421f8056bce69775025c3b1178"
  },
  {
    "url": "assets/js/32.61b52c47.js",
    "revision": "0b7639b72a3e8af7aeb7952ea1aeb975"
  },
  {
    "url": "assets/js/33.5e60045c.js",
    "revision": "2adbfd061b6f5d229ddd5e669483d954"
  },
  {
    "url": "assets/js/34.df00cfb7.js",
    "revision": "7c2b8dac3012f3fc17bbeb33b07fdd45"
  },
  {
    "url": "assets/js/35.c19cbc68.js",
    "revision": "7f0ea0ca3be1a52df740c563c979b2a1"
  },
  {
    "url": "assets/js/36.837a0b44.js",
    "revision": "27c8c9b5eeaf9ee9edb1948e5df97421"
  },
  {
    "url": "assets/js/37.6cb51b45.js",
    "revision": "8cbd92be5aeaabab0b2fe07c3f31bd62"
  },
  {
    "url": "assets/js/38.984281dd.js",
    "revision": "7e0f46e15bb0c1e8fe37517539b79748"
  },
  {
    "url": "assets/js/39.ccf995e7.js",
    "revision": "4d91c5d791c6021f21524e7b78e8e39b"
  },
  {
    "url": "assets/js/4.d9734694.js",
    "revision": "df307fab531858b1df182b951f9617ca"
  },
  {
    "url": "assets/js/40.428c19d9.js",
    "revision": "c6d4218934a411bc9607b78572802b43"
  },
  {
    "url": "assets/js/41.ee07a0e1.js",
    "revision": "7669f0f6b21fa4e064ac68ac17229e78"
  },
  {
    "url": "assets/js/42.93fcbf63.js",
    "revision": "2d1d72f04a0e262099fd6b014e6e09b9"
  },
  {
    "url": "assets/js/43.33b7b337.js",
    "revision": "8bf84f989cb50278d7c6a6e6b9d78c80"
  },
  {
    "url": "assets/js/44.ec8baa63.js",
    "revision": "413179adb3835455f4e6a58c027c468d"
  },
  {
    "url": "assets/js/45.769d0f4b.js",
    "revision": "0b768a19cd0bb4814cdeeabef4033182"
  },
  {
    "url": "assets/js/46.24274ae6.js",
    "revision": "af83cc6e1086a4a9c1400bbe4a6d2152"
  },
  {
    "url": "assets/js/47.e0bf639b.js",
    "revision": "c12ad6061b2f42007037258998971cee"
  },
  {
    "url": "assets/js/48.266df27e.js",
    "revision": "60d705ce7b2e87af84811e0b733e6f19"
  },
  {
    "url": "assets/js/49.5e750711.js",
    "revision": "3dc0a2060fd08012001056d626d40a11"
  },
  {
    "url": "assets/js/5.a04d67cb.js",
    "revision": "eba08f97f0f6ee8259baded90d7e65d2"
  },
  {
    "url": "assets/js/50.afd5e28a.js",
    "revision": "d38ba953b6e59bf17e516316af4f8352"
  },
  {
    "url": "assets/js/51.60059d19.js",
    "revision": "f65a9ef159ecc3466457fc9bddaafed2"
  },
  {
    "url": "assets/js/52.01d198f5.js",
    "revision": "e56531d7099685500ada01c753b16fe7"
  },
  {
    "url": "assets/js/53.0c3df25d.js",
    "revision": "b44b5e25de0c4a992deff24c409cce42"
  },
  {
    "url": "assets/js/54.8d86b286.js",
    "revision": "c78133f2dd9190b2e22c54921751b494"
  },
  {
    "url": "assets/js/55.4ff0f4fe.js",
    "revision": "07a6a5b99a99fde52da5784d28d80a86"
  },
  {
    "url": "assets/js/56.a6195603.js",
    "revision": "154f3d93e0614f051d7f985d0fd41bbe"
  },
  {
    "url": "assets/js/57.cf802c3f.js",
    "revision": "0f6da669d2455f9e567086557ee7d5c5"
  },
  {
    "url": "assets/js/58.54c5ae69.js",
    "revision": "48a6703cec518f262efa6ad2a517dea8"
  },
  {
    "url": "assets/js/59.09055047.js",
    "revision": "5f3ff7497ec1bb42cd5c00186af2af9f"
  },
  {
    "url": "assets/js/6.566c6793.js",
    "revision": "e983f7c5ade65b263752dc409af53091"
  },
  {
    "url": "assets/js/60.dc46c0fa.js",
    "revision": "866d2f952f71ff056ce37de3b9f4076d"
  },
  {
    "url": "assets/js/61.01e7448e.js",
    "revision": "4b2d998c22d52be79a04f3e129d48c28"
  },
  {
    "url": "assets/js/62.8597fd05.js",
    "revision": "7d18984b13d5fc1d7f0aa31c191961d0"
  },
  {
    "url": "assets/js/63.6a209f90.js",
    "revision": "184edd08004f53b7d8cde5662fa3e23c"
  },
  {
    "url": "assets/js/64.018d49e2.js",
    "revision": "c70778bf2b7d2b6668b9472b483563c1"
  },
  {
    "url": "assets/js/65.f8ff2e4e.js",
    "revision": "395293826c98f3da1bf38c15216f2d14"
  },
  {
    "url": "assets/js/66.5b3dcc5e.js",
    "revision": "4059b38ba198b7d414ea0a48663597ba"
  },
  {
    "url": "assets/js/67.68bdfb92.js",
    "revision": "9f26601fb47b4f73165503fa881ab5e0"
  },
  {
    "url": "assets/js/68.0d35ea79.js",
    "revision": "b52a90248c13ad753c92d7f12ea07aaa"
  },
  {
    "url": "assets/js/69.d17455b1.js",
    "revision": "0d79f90ba5fd1c7080adbdf8a3bb8cfd"
  },
  {
    "url": "assets/js/7.668cd0e0.js",
    "revision": "04a15b13825ea927882ce2241190fe0b"
  },
  {
    "url": "assets/js/70.0acc904f.js",
    "revision": "89fbf51ef0604b739c47884a3902b016"
  },
  {
    "url": "assets/js/71.08763117.js",
    "revision": "2467ee114979393571803a7949083924"
  },
  {
    "url": "assets/js/72.6c094916.js",
    "revision": "fc1b4d5c8ba40b5d1a35a233cddfa66f"
  },
  {
    "url": "assets/js/73.112b5a33.js",
    "revision": "c32a6c2d73a050b2fafe01a99b42bf60"
  },
  {
    "url": "assets/js/74.da72703c.js",
    "revision": "23944b804dd8fbadb73c1d1d349215ee"
  },
  {
    "url": "assets/js/app.139ecd90.js",
    "revision": "fe5b5a4bdc2a93ba821f4747b79688e2"
  },
  {
    "url": "assets/js/vendors~docsearch.657e42b7.js",
    "revision": "0d120863282ba9bd6aeb1d0e45e71dee"
  },
  {
    "url": "chevereto.svg",
    "revision": "06eba18f49672a53b977251cdc8e83e6"
  },
  {
    "url": "developer/api/api-v1.html",
    "revision": "d9b3cbb8e7c25eab4a69dd9a413b0921"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "fe7d7b304bdd1b41182643f11a96cf87"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "1c1b7972a95a03922e3660f80ea8f104"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "513b6865b71b789fe48b0363ab1cf2a3"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "6ba3419a4fe7f3f810aa4073e9d787bc"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "18b6bf695717bc001803787ffcd2b1aa"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "d4dc36462748127ba6d7a8b99f912d37"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "ca767255d5d32351a738f7bcf6a9ab7e"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "0ecce29c00e89e38259ce5b28218baa0"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "18ed49d2cb5f602e59784b42df218274"
  },
  {
    "url": "guides/cpanel/ffmpeg.html",
    "revision": "996d1a481ee518d7bdf01de5fcddcee2"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "a8c15418295c7fb6f82d118ce33837e5"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "7a6aaa8129ec48562dc9f56c8b5b980a"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "3abd1cb194d77429b0d165bc37e2e630"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "1810fc9f0261aa5f9fb2df8fb606c415"
  },
  {
    "url": "guides/index.html",
    "revision": "bbffb699e7f0869ce43936a2f3b8c72e"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "738fa1874fb18eb79147b6a92401083b"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "4f77d750a26e28ca4296d15f1739729c"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "61ebdf0845f14ab77a1143a0423add4c"
  },
  {
    "url": "guides/plesk/ffmpeg.html",
    "revision": "5d4ffa7fd62be24c4f09605afa0d248d"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "18116a03f1ba3479feb9c2b58fcb7e88"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "cb8ecd7f2b2830bf88f9c5921d49faae"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "60f1e58f8cf8e1a468be6bba6d488c2b"
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
    "revision": "fe8e0a1a92daf5034ab7330262eb57a9"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "b6c78d9c02a130aac67d2a3652b317d5"
  },
  {
    "url": "introduction/changelog/4.1.html",
    "revision": "8a08888c77a6d3027cda3e87f2fb271b"
  },
  {
    "url": "introduction/changelog/4.2.html",
    "revision": "fa9c0f00cab23d3678ee017b75f35153"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "bbd3890dd5a87158a6b1810f87357818"
  },
  {
    "url": "introduction/editions/chevereto-free.html",
    "revision": "5c090c7627dbe864cfa778d40560e6a7"
  },
  {
    "url": "introduction/editions/chevereto-lite.html",
    "revision": "6406b704b3969cd1ea42454dae4cc6af"
  },
  {
    "url": "introduction/editions/chevereto-pro.html",
    "revision": "048ec527beb4c4cd680f4307e5602558"
  },
  {
    "url": "introduction/editions/compare.html",
    "revision": "8ae1131cd41d382edcac59665930aa25"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "46ca31c87a91d0fc5d86fa7fe92cc283"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "214562d8943cea928ca1b50fd37ff56f"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "295cb82ea4e7129369e4d4e34bca5ff0"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "f09f3934385c97950a3dbbdcb168dbdd"
  },
  {
    "url": "logo.png",
    "revision": "17ccf330d6168c2a694bc5dd3edb0c5d"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
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
