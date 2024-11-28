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
    "revision": "8006bc042107cb341a1ed81e6fd633a3"
  },
  {
    "url": "application/configuration/configuring.html",
    "revision": "1da10883d5e4f6951b8b00cb44b70db0"
  },
  {
    "url": "application/configuration/environment.html",
    "revision": "dc2b0b4af44bd360ea1c4bcf7a72f640"
  },
  {
    "url": "application/installing/from-free.html",
    "revision": "44bdcceaf9b858c358ebf0af79fb3ad5"
  },
  {
    "url": "application/installing/installation.html",
    "revision": "9ca703b6e4011d657b588d8e833ab6ce"
  },
  {
    "url": "application/installing/updating.html",
    "revision": "ded85910d380f36df1097a3406cfcedb"
  },
  {
    "url": "application/installing/upgrading.html",
    "revision": "55d76c0362519e6f48357e33bbaac1a2"
  },
  {
    "url": "application/reference/cli.html",
    "revision": "fd5992a4a0c9e8edb7d4c791c7419596"
  },
  {
    "url": "application/reference/encryption.html",
    "revision": "c2b0ccff97b7504f6d5a5c235c4c3708"
  },
  {
    "url": "application/reference/errors.html",
    "revision": "bc75128f855a76ba6456268cc86aca91"
  },
  {
    "url": "application/reference/security.html",
    "revision": "1b1072d00f1022003646b1c5520c4910"
  },
  {
    "url": "application/stack/cron.html",
    "revision": "5f9d43e860fc424f62b5ed1f9261fd01"
  },
  {
    "url": "application/stack/mysql-server.html",
    "revision": "fd7c20adaabf8da24b4c954cf223409a"
  },
  {
    "url": "application/stack/operating-system.html",
    "revision": "7cde228bc63158690748214a66bcd1af"
  },
  {
    "url": "application/stack/php.html",
    "revision": "11f039a558d14f7f8b4f3be0f90b0428"
  },
  {
    "url": "application/stack/web-server.html",
    "revision": "a43e5f4b9bac011c5447df5cf4a9d0df"
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
    "url": "assets/js/18.8543f3b0.js",
    "revision": "207dd1bcf9a80b160d54194ea34b983e"
  },
  {
    "url": "assets/js/19.be4ffaa4.js",
    "revision": "c8aa8b3f79d4fbd83c6b082a4fde313a"
  },
  {
    "url": "assets/js/2.bd715938.js",
    "revision": "1c40fcdcad0dfb88a404c0125ec4d1c1"
  },
  {
    "url": "assets/js/20.1450d587.js",
    "revision": "a1fc7c3f560c70705a5b3622d4f79dc2"
  },
  {
    "url": "assets/js/21.e9137525.js",
    "revision": "e1072de93f731493e213f977fc4ad5fe"
  },
  {
    "url": "assets/js/22.b89c83cd.js",
    "revision": "16d5ee562a2bd6b8e216720c6c4f4091"
  },
  {
    "url": "assets/js/23.e406dbd8.js",
    "revision": "04fced996a2cf4094bcff121e568fd13"
  },
  {
    "url": "assets/js/24.8a277349.js",
    "revision": "236d711116cc715b5d7590246ae9e4a6"
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
    "url": "assets/js/28.b84e6f37.js",
    "revision": "ff40b42aba495579a4a724a6bf1bf3c1"
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
    "url": "assets/js/31.8acbb16b.js",
    "revision": "779159421f8056bce69775025c3b1178"
  },
  {
    "url": "assets/js/32.d9b58795.js",
    "revision": "c9f6274c9794f10c07a4e93745d5ecbd"
  },
  {
    "url": "assets/js/33.75b9ca8c.js",
    "revision": "d067dcb5f9edb754389cf718f2024bb9"
  },
  {
    "url": "assets/js/34.1f5e5516.js",
    "revision": "5e155884a43b3920408033fb329d871d"
  },
  {
    "url": "assets/js/35.4eb0aef5.js",
    "revision": "0d30a8dcc387d816806ad8e6be48b558"
  },
  {
    "url": "assets/js/36.1c35bc5b.js",
    "revision": "0831bfa2f6d4cc9ff70d95ca8badda46"
  },
  {
    "url": "assets/js/37.4a3b1de7.js",
    "revision": "e4adc46b9e94cfacb7d2ba251834074c"
  },
  {
    "url": "assets/js/38.984281dd.js",
    "revision": "7e0f46e15bb0c1e8fe37517539b79748"
  },
  {
    "url": "assets/js/39.4dcfde5c.js",
    "revision": "3fef69614e187cdbba8c93f7d99bdc44"
  },
  {
    "url": "assets/js/4.d9734694.js",
    "revision": "df307fab531858b1df182b951f9617ca"
  },
  {
    "url": "assets/js/40.3dcd7057.js",
    "revision": "60ce0cd9ea9f343bbbbe883d17b4c556"
  },
  {
    "url": "assets/js/41.769500c5.js",
    "revision": "eb14ff91d4c69848be28e0e61a9e7c88"
  },
  {
    "url": "assets/js/42.93fcbf63.js",
    "revision": "2d1d72f04a0e262099fd6b014e6e09b9"
  },
  {
    "url": "assets/js/43.f138ab86.js",
    "revision": "b8a87f887fc7dec0946782b4d0217116"
  },
  {
    "url": "assets/js/44.bf77cfc0.js",
    "revision": "3101883196093a1ba323dc0c844b2ab3"
  },
  {
    "url": "assets/js/45.12eda3b1.js",
    "revision": "e4515b239a9c64cdbfffee8f164389c0"
  },
  {
    "url": "assets/js/46.f6de3a9b.js",
    "revision": "a5ff6467cad06b6ad704439ff65f8d29"
  },
  {
    "url": "assets/js/47.c68a7efa.js",
    "revision": "a100abe049236461e1a28e976eff8ddb"
  },
  {
    "url": "assets/js/48.66c53a0a.js",
    "revision": "c4555b5beadef60da81af2e19dc5d094"
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
    "url": "assets/js/50.82dbc44c.js",
    "revision": "fac4e08be1787378fe812b0d6fcb9290"
  },
  {
    "url": "assets/js/51.d4d7b514.js",
    "revision": "e65b1fffca8ccad9a22a5e548c4592d0"
  },
  {
    "url": "assets/js/52.9132819c.js",
    "revision": "daf129a8e9354936a84f365153941b8e"
  },
  {
    "url": "assets/js/53.abef1e0c.js",
    "revision": "8f937d3aa0bd27cdecae47bdb80ba9fb"
  },
  {
    "url": "assets/js/54.7d8747c5.js",
    "revision": "eb8a317f340e7cc6b9430e5c38f97e44"
  },
  {
    "url": "assets/js/55.8eed8c4a.js",
    "revision": "a0505fce8a0e1d31e4952ce7625456ab"
  },
  {
    "url": "assets/js/56.c8065cce.js",
    "revision": "a04da7cbf9c92da32e9b4777cf6f0fc4"
  },
  {
    "url": "assets/js/57.4b7c6343.js",
    "revision": "3b050dd3172643fc83d9de89edc333ad"
  },
  {
    "url": "assets/js/58.1db24a9b.js",
    "revision": "6c8b229a10943e3aae2c76945dc15a06"
  },
  {
    "url": "assets/js/59.34137fd7.js",
    "revision": "4d5603186fa8a57b6e655b20ced55ae9"
  },
  {
    "url": "assets/js/6.566c6793.js",
    "revision": "e983f7c5ade65b263752dc409af53091"
  },
  {
    "url": "assets/js/60.e3504851.js",
    "revision": "af92d1ecf938ab310f306fb2e4d8ea34"
  },
  {
    "url": "assets/js/61.583e2169.js",
    "revision": "148f704d0d9004a16dd791897b937320"
  },
  {
    "url": "assets/js/62.8597fd05.js",
    "revision": "7d18984b13d5fc1d7f0aa31c191961d0"
  },
  {
    "url": "assets/js/63.78a628fd.js",
    "revision": "f183b0c18d9bf0c13cc31169c762b11a"
  },
  {
    "url": "assets/js/64.3914ab44.js",
    "revision": "ebdb1a23c49129eaa75d4dbc01c6a8be"
  },
  {
    "url": "assets/js/65.d7330f0c.js",
    "revision": "2b6983cc450a5ddb180bf1189bf4bc68"
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
    "url": "assets/js/69.0b955d9a.js",
    "revision": "84097d76ab2a0a31cf7e56626acab66a"
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
    "url": "assets/js/71.87194219.js",
    "revision": "6444c1dee11f3006483d01f4b7812e8e"
  },
  {
    "url": "assets/js/72.6579eac1.js",
    "revision": "e56f1c36b3b642a964a6bd5dd694e863"
  },
  {
    "url": "assets/js/73.009afb74.js",
    "revision": "f8a5055005a24768e222568557eab58b"
  },
  {
    "url": "assets/js/74.da72703c.js",
    "revision": "23944b804dd8fbadb73c1d1d349215ee"
  },
  {
    "url": "assets/js/app.ae443b53.js",
    "revision": "47461e68815d9ef696b8e9dc2ac4ea06"
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
    "revision": "7ce8000c7f9c48653a065748097c6e19"
  },
  {
    "url": "developer/customization/language.html",
    "revision": "ed6a5c1c029b36c25b07cd79cf1f52bc"
  },
  {
    "url": "developer/customization/routes.html",
    "revision": "3addf09658456ca83aeaf470f871971b"
  },
  {
    "url": "developer/customization/theme.html",
    "revision": "03b2bae77242c4d72401429a79ce276f"
  },
  {
    "url": "developer/how-to/debug.html",
    "revision": "19c112099e164ad717bb4a858ec2e483"
  },
  {
    "url": "developer/how-to/repl.html",
    "revision": "9cd0fe6cc91915bc56a5e9bdb16bdad0"
  },
  {
    "url": "developer/how-to/troubleshoot.html",
    "revision": "03154c578f9603ee78867e145a9e15d5"
  },
  {
    "url": "guides/cpanel/app-files.html",
    "revision": "8b1867136576035ef7009bc165600864"
  },
  {
    "url": "guides/cpanel/cron.html",
    "revision": "e22be4ede98ee71b26068b2b5021ebc0"
  },
  {
    "url": "guides/cpanel/database.html",
    "revision": "93d54d8fb6d92b877b3a8c1e616d6807"
  },
  {
    "url": "guides/cpanel/ffmpeg.html",
    "revision": "e72703fa8a7755baea1c85afdb7292ba"
  },
  {
    "url": "guides/cpanel/index.html",
    "revision": "8c0071bbf8675f922ef2b59cfad5cf2f"
  },
  {
    "url": "guides/cpanel/php.html",
    "revision": "0b454de89187761773dab35afe3b1f67"
  },
  {
    "url": "guides/docker/index.html",
    "revision": "b16e1f4c8b0e980bfadbe827b1edbd53"
  },
  {
    "url": "guides/docker/pure-docker.html",
    "revision": "46569b74c9899c9a00c4d125e62b4766"
  },
  {
    "url": "guides/index.html",
    "revision": "e6ba8d4abe6c2c8834ea48394ae83ae1"
  },
  {
    "url": "guides/plesk/app-files.html",
    "revision": "6ef714cdcf098f6021458bcb808c71b4"
  },
  {
    "url": "guides/plesk/cron.html",
    "revision": "23f353c8526d77bc9992941353f9f4a8"
  },
  {
    "url": "guides/plesk/database.html",
    "revision": "de001b3dee3f5c99bea49f222911a975"
  },
  {
    "url": "guides/plesk/ffmpeg.html",
    "revision": "e619eb51ddf5904cfd8b89eb320fc0c7"
  },
  {
    "url": "guides/plesk/index.html",
    "revision": "f0f552bc5eb8e39969f44c72e28a45b5"
  },
  {
    "url": "guides/plesk/php.html",
    "revision": "9b829b427b46b1503849a47437be0f13"
  },
  {
    "url": "guides/server/vps.html",
    "revision": "cff58c11067ac6fb4dd34f4f8ce2a29d"
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
    "revision": "c42408ab550dcc5c406ba90bc0176a1b"
  },
  {
    "url": "introduction/changelog/4.0.html",
    "revision": "5c1ecdb03e1623c2e8770efd625b5159"
  },
  {
    "url": "introduction/changelog/4.1.html",
    "revision": "33de367ad070a09a540c3297abb01558"
  },
  {
    "url": "introduction/changelog/4.2.html",
    "revision": "f1ba1d157349ca4aba86a396eaa2bfff"
  },
  {
    "url": "introduction/changelog/welcome-back.html",
    "revision": "b4bfc42a234fc2ddc3cfc8d2dfb8e08e"
  },
  {
    "url": "introduction/editions/chevereto-free.html",
    "revision": "d4771c61251ac221eb37162a41a138a1"
  },
  {
    "url": "introduction/editions/chevereto-lite.html",
    "revision": "6ef57cf46a68b9aba79a653bd5111b15"
  },
  {
    "url": "introduction/editions/chevereto-pro.html",
    "revision": "1dc071db31a1dd79c4872fb48037e4cf"
  },
  {
    "url": "introduction/editions/compare.html",
    "revision": "b9504b41d47a7a410bae385afb01b615"
  },
  {
    "url": "introduction/get-started/contributing.html",
    "revision": "bdf995c29d5988da0cdbcba7d2209439"
  },
  {
    "url": "introduction/get-started/copyright.html",
    "revision": "be54345241dd8ec8ffe3877816bf0566"
  },
  {
    "url": "introduction/get-started/links.html",
    "revision": "10f66df13cb49656aa93e275cf30757d"
  },
  {
    "url": "introduction/get-started/welcome.html",
    "revision": "8fce32b4fa5ba487227f182466f4cee3"
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
