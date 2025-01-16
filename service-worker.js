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
    "revision": "ac26007b3865fecb6f1b501a61d53755"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "5b9b520bc6c8fe1bf728d55d2947a4bf"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "640904b7414c8803e49e8aba2f41d3b8"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "93ec671e206aa51031be01188df799fe"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "acc3cc9abb349e96504b06ede138b1f3"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "c8afb76c23ed6f227b662c326ac254ab"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "a974dcf89d4c2f1896b89a660b1da108"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "5e8451edef58f18d90d5b86157621a0b"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "45f4a9fc6e82c5e264f1cd2f59fa9497"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "7c1071a9259b03adbadeb124535f5bd6"
  },
  {
    "url": "application/reference/security.html",
    "revision": "d0c6ff50338029cab88191c93f22134d"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "24e47915891850986229b05387e1a6e7"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "e41185541c6ed2bde78ecdf3b8325448"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "852de29f227d968113ea198f4983f4dc"
  },
  {
    "url": "application/stack/php.html",
    "revision": "cf9f9c582871c2c4ef743aea7d913a9d"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "b317240f2825af37c90cdff672348046"
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
    "url": "assets/js/19.a1af2f01.js",
    "revision": "c1f81940735aa6125fc66096457813e4"
  },
  {
    "url": "assets/js/2.bd715938.js",
    "revision": "1c40fcdcad0dfb88a404c0125ec4d1c1"
  },
  {
    "url": "assets/js/20.4214452b.js",
    "revision": "ef51fefed7a4527f443944cff708e8c1"
  },
  {
    "url": "assets/js/21.e9137525.js",
    "revision": "e1072de93f731493e213f977fc4ad5fe"
  },
  {
    "url": "assets/js/22.521bf33b.js",
    "revision": "6a1b9ebf7b78c2940fc02c48f6c73ca3"
  },
  {
    "url": "assets/js/23.ba984b4a.js",
    "revision": "8b0389806db5365c5fb087427103b92f"
  },
  {
    "url": "assets/js/24.8086fc04.js",
    "revision": "cb313e4927386309d00a3f858a8e9d7e"
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
    "url": "assets/js/28.eaf9b65e.js",
    "revision": "38c101f2579f27343c47ff612c66de4b"
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
    "url": "assets/js/30.f47a2b23.js",
    "revision": "a4f9a2b2a69feab090b6eacb677454a4"
  },
  {
    "url": "assets/js/31.abfa82d8.js",
    "revision": "5b95988f61fb91ffd0bae0dc393e7a25"
  },
  {
    "url": "assets/js/32.f8abf961.js",
    "revision": "5d14b2ae69a06f4471bc69cc18ddbaf0"
  },
  {
    "url": "assets/js/33.5e60045c.js",
    "revision": "2adbfd061b6f5d229ddd5e669483d954"
  },
  {
    "url": "assets/js/34.54c3c0ea.js",
    "revision": "366a24dd473d2299ca21087dcdd46061"
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
    "url": "assets/js/37.a87e95a2.js",
    "revision": "93779fba824bd1f7c303fbb8d22f2b7d"
  },
  {
    "url": "assets/js/38.984281dd.js",
    "revision": "7e0f46e15bb0c1e8fe37517539b79748"
  },
  {
    "url": "assets/js/39.81e56e97.js",
    "revision": "1648c75783874d6d8e1b9108d66c129e"
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
    "url": "assets/js/42.c9922609.js",
    "revision": "46ba580c01c6e492857f85452ed5384a"
  },
  {
    "url": "assets/js/43.309dc191.js",
    "revision": "cfb74be727e118b3d08f8499fd22fc82"
  },
  {
    "url": "assets/js/44.4bc08eb6.js",
    "revision": "26878c86935763a99909ea50e08f3398"
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
    "url": "assets/js/47.a3dc1635.js",
    "revision": "e212bf35d4ff881d493f2320198a032e"
  },
  {
    "url": "assets/js/48.66c53a0a.js",
    "revision": "c4555b5beadef60da81af2e19dc5d094"
  },
  {
    "url": "assets/js/49.235753f8.js",
    "revision": "fdcd1ea6ee09319cd46b4ecf80708031"
  },
  {
    "url": "assets/js/5.a04d67cb.js",
    "revision": "eba08f97f0f6ee8259baded90d7e65d2"
  },
  {
    "url": "assets/js/50.ee2da8b1.js",
    "revision": "e084ded62a3bbf616b221c4fd2b81859"
  },
  {
    "url": "assets/js/51.d4d7b514.js",
    "revision": "e65b1fffca8ccad9a22a5e548c4592d0"
  },
  {
    "url": "assets/js/52.01d198f5.js",
    "revision": "e56531d7099685500ada01c753b16fe7"
  },
  {
    "url": "assets/js/53.abef1e0c.js",
    "revision": "8f937d3aa0bd27cdecae47bdb80ba9fb"
  },
  {
    "url": "assets/js/54.9e81b06f.js",
    "revision": "f19bce890bca4aa2143d48c6a383affe"
  },
  {
    "url": "assets/js/55.6c2ecd6f.js",
    "revision": "2c9d38c908e9e113a3f20b93abace4be"
  },
  {
    "url": "assets/js/56.a6195603.js",
    "revision": "154f3d93e0614f051d7f985d0fd41bbe"
  },
  {
    "url": "assets/js/57.4b7c6343.js",
    "revision": "3b050dd3172643fc83d9de89edc333ad"
  },
  {
    "url": "assets/js/58.a0b12336.js",
    "revision": "c93c8c223eb6205c9c0df46f0e6eb983"
  },
  {
    "url": "assets/js/59.1f923c2a.js",
    "revision": "5fd59f024437c365e35668357fb311ba"
  },
  {
    "url": "assets/js/6.566c6793.js",
    "revision": "e983f7c5ade65b263752dc409af53091"
  },
  {
    "url": "assets/js/60.1de2233e.js",
    "revision": "a7aac427c0c77f7747edb43172501876"
  },
  {
    "url": "assets/js/61.01e7448e.js",
    "revision": "4b2d998c22d52be79a04f3e129d48c28"
  },
  {
    "url": "assets/js/62.b76a1080.js",
    "revision": "39e76ce2ec414235033bbc8bcb9f5f00"
  },
  {
    "url": "assets/js/63.6e292676.js",
    "revision": "9eb4fbaba4396640bae4d27ac0099bf2"
  },
  {
    "url": "assets/js/64.9c8e3d07.js",
    "revision": "ccbd7e66cee2f98a6010093a39df4e09"
  },
  {
    "url": "assets/js/65.b6646265.js",
    "revision": "8e1938a7562cb0256aaf8b64147d0083"
  },
  {
    "url": "assets/js/66.dabad6be.js",
    "revision": "e46682179728e5d4ea1e4ee98a23f9c1"
  },
  {
    "url": "assets/js/67.133d07a1.js",
    "revision": "422f397cbbe3792525efba52f67189c0"
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
    "url": "assets/js/71.53c60532.js",
    "revision": "fdfac4d453fbf5771c16c1f675cb6583"
  },
  {
    "url": "assets/js/72.6c094916.js",
    "revision": "fc1b4d5c8ba40b5d1a35a233cddfa66f"
  },
  {
    "url": "assets/js/73.9c781355.js",
    "revision": "e6a1e8598d31cbd1d48e45daff7d87c0"
  },
  {
    "url": "assets/js/74.da72703c.js",
    "revision": "23944b804dd8fbadb73c1d1d349215ee"
  },
  {
    "url": "assets/js/app.ff2864c3.js",
    "revision": "bdf9b61e161a895958619f56f7ef3735"
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
    "revision": "a3ab3f055eb0cb2bde773f1339db88ee"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "f7e71db195db3f607ec51552d34811c3"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "3584f8dfdff0d5f77939ba5a93920274"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "3dfb46c37392fdc1212bbde9ee5d9fa1"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "0633c6fd43ee54a8740f8cdde97f17f9"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "f781fbd469a2fb60c291f36dae821516"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "b7011b7f2106186f0a0d19b32d3e8e58"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "62a9a33a1a3bbc3cf9d925fdd976bb2a"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "cb0e8ce65671a827cc0c9f2ed750e988"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "e7571b803c16ba916d7b647b34039e64"
  },
  {
    "url": "guides/cpanel/ffmpeg.html",
    "revision": "447e6df6083ea94dd687dee4231e4def"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "5da3c9071e8b9ac0ef6b84c86f56f297"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "62897b325e7dd4f6019a0d920e4ea493"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "77cb63948d232aeac2069c96147d0fa9"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "bf65d19ba4cc98858aeda30ad24f816e"
  },
  {
    "url": "guides/index.html",
    "revision": "73c7d513a055e9bf06f99c6d333307fe"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "5b2a41ca89db706da57881a90a45b68d"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "4a176e94f6b3b4290ba37fd2cfa3033e"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "3b4750a1bf5037f146bce4481f274df4"
  },
  {
    "url": "guides/plesk/ffmpeg.html",
    "revision": "d8c7d7c98c0d4624d10eb450bfe3f72e"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "c336f03c944c833f707809533cf4835b"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "adb8c83af6b2ebd3ff13d37fb15d34ec"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "0b1b34136e271a9499b0bbadb92ef54e"
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
    "revision": "cf91e6fc3bca55ab0df179f74d532fbe"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "53bf7bb0f8acc67053ce4613c979b671"
  },
  {
    "url": "introduction/changelog/4.1.html",
    "revision": "18dea2c429a0f5e1c462c26f6836f9f7"
  },
  {
    "url": "introduction/changelog/4.2.html",
    "revision": "ef838516f8e2bbc925c79480efe6daee"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "a17dba139a9b24cb0a676b1be3f8839c"
  },
  {
    "url": "introduction/editions/chevereto-free.html",
    "revision": "1829f5d2a47a68e01105f010432cc556"
  },
  {
    "url": "introduction/editions/chevereto-lite.html",
    "revision": "48dcac984e547f65d30d93cf1d9329f9"
  },
  {
    "url": "introduction/editions/chevereto-pro.html",
    "revision": "8ec016ee6aa6f8907d97812e4a7661bd"
  },
  {
    "url": "introduction/editions/compare.html",
    "revision": "41c9ba55857676319d1cce71e308c37a"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "868ccb6feb873db14bc8fa568616da8c"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "d0da05654131c94484fc8030c1db2b3d"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "e48f78609472f7fc1004be5d6e12e22c"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "df95325e7185477e8d4e1d057d85920f"
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
