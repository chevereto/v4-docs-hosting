(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{368:function(a,t,e){"use strict";e.r(t);var s=e(17),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"pure-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pure-docker"}},[a._v("#")]),a._v(" Pure Docker")]),a._v(" "),t("p",[a._v("This is the most basic way to run Chevereto using Docker.")]),a._v(" "),t("p",[a._v("Pure Docker refers to running Chevereto using Docker without the extra provisions of "),t("RouterLink",{attrs:{to:"/guides/docker/"}},[a._v("Chevereto Docker")]),a._v(" (nginx ingress proxy, CloudFlare integration).")],1),a._v(" "),t("h2",{attrs:{id:"build-image-paid-edition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-image-paid-edition"}},[a._v("#")]),a._v(" Build image (paid edition)")]),a._v(" "),t("p",[a._v("Image building is "),t("strong",[a._v("recommended")]),a._v(" for Chevereto "),t("strong",[a._v("paid edition")]),a._v(". Skip to "),t("a",{attrs:{href:"#run-free-edition"}},[a._v("Run (free edition)")]),a._v(" if you are using Chevereto free edition or if you want to upgrade to paid edition within the application itself.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Workaround image building")]),a._v(" "),t("p",[a._v("If you can't build the paid image you can use the free edition image and upgrade to paid within the application itself. To do this, pass the environment "),t("code",[a._v("CHEVERETO_SERVICING=server")]),a._v(" to the container runtime and go to "),t("code",[a._v("/dashboard?license")]),a._v(" to enter the license key and proceed with the upgrading process. You will also need to setup persistent storage for the application files.")])]),a._v(" "),t("h3",{attrs:{id:"clone-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-repository"}},[a._v("#")]),a._v(" Clone repository")]),a._v(" "),t("p",[a._v("Clone the "),t("a",{attrs:{href:"https://github.com/chevereto/docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevereto/docker"),t("OutboundLink")],1),a._v(" repository and create an "),t("code",[a._v(".env")]),a._v(" file with your license key:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_LICENSE_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("your_license_key\n")])])]),t("h3",{attrs:{id:"make-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-image"}},[a._v("#")]),a._v(" Make image")]),a._v(" "),t("p",[a._v("Run the following command to create the Chevereto image:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" image\n")])])]),t("p",[a._v("By running the above command you will generate the following tags:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("chevereto:latest")])]),a._v(" "),t("li",[t("code",[a._v("chevereto:4")])]),a._v(" "),t("li",[t("code",[a._v("chevereto:4.2")])]),a._v(" "),t("li",[t("code",[a._v("chevereto:4.2.1")])])]),a._v(" "),t("h2",{attrs:{id:"upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[a._v("#")]),a._v(" Upgrading")]),a._v(" "),t("p",[a._v("To upgrade your Chevereto application you need to (1) Sync repository, (2) Re-build the container image, and (3) Down and re-up the container.")]),a._v(" "),t("h3",{attrs:{id:"step-1-sync-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-sync-repository"}},[a._v("#")]),a._v(" Step 1: Sync repository")]),a._v(" "),t("p",[a._v("Sync latest changes from "),t("a",{attrs:{href:"https://github.com/chevereto/docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevereto/docker"),t("OutboundLink")],1),a._v(" repository:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Note:")]),a._v(" If there's a new branch (for example 4.2) switch to that branch running the following command:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" switch "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.3")]),a._v("\n")])])]),t("h3",{attrs:{id:"step-2-re-build-the-container-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-re-build-the-container-image"}},[a._v("#")]),a._v(" Step 2: Re-build the container image")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" image\n")])])]),t("h3",{attrs:{id:"step-3-down-and-re-up-the-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-down-and-re-up-the-container"}},[a._v("#")]),a._v(" Step 3: Down and re-up the container")]),a._v(" "),t("p",[a._v("Down the container:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chevereto\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chevereto\n")])])]),t("p",[a._v("Then re-up the container using the same command you used to run it the first time.")]),a._v(" "),t("h2",{attrs:{id:"run-paid-edition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-paid-edition"}},[a._v("#")]),a._v(" Run (paid edition)")]),a._v(" "),t("p",[a._v("To run "),t("a",{attrs:{href:"https://chevereto.com/pricing",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevereto.com"),t("OutboundLink")],1),a._v(" (paid edition) you need to pass the environment targeting your private build image, in this example "),t("code",[a._v("chevereto:latest")]),a._v(".")]),a._v(" "),t("blockquote",[t("p",[a._v("Note: For running this command you need to fill your own database credentials.")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user_database_password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_MAX_POST_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2G "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_MAX_UPLOAD_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2G "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/www/html/images/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  chevereto:latest\n")])])]),t("h2",{attrs:{id:"run-free-edition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-free-edition"}},[a._v("#")]),a._v(" Run (free edition)")]),a._v(" "),t("p",[a._v("To run "),t("a",{attrs:{href:"https://github.com/chevereto/chevereto",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevereto/chevereto"),t("OutboundLink")],1),a._v(" (Chevereto free edition) you need to pass the environment targeting public image "),t("code",[a._v("ghcr.io/chevereto/chevereto:latest")]),a._v(".")]),a._v(" "),t("p",[a._v("Alternatively, you can pass "),t("code",[a._v("chevereto/chevereto:latest")]),a._v(" which is the "),t("a",{attrs:{href:"https://hub.docker.com/r/chevereto/chevereto",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chevereto mirror on DockerHub"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("blockquote",[t("p",[a._v("Note: For running this command you need to fill your own database credentials.")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user_database_password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_MAX_POST_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2G "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_MAX_UPLOAD_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2G "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_SERVICING")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/www/html/images/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  ghcr.io/chevereto/chevereto:latest\n")])])]),t("h2",{attrs:{id:"run-free-edition-with-application-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-free-edition-with-application-upgrade"}},[a._v("#")]),a._v(" Run free edition with application upgrade")]),a._v(" "),t("p",[a._v("If you want to run the free edition and manage the application upgrade within the application itself you need to pass "),t("code",[a._v("-e CHEVERETO_SERVICING=server")]),a._v(" and setup persistent storage for the application files:")]),a._v(" "),t("blockquote",[t("p",[a._v("Note: For running this command you need to fill your own database credentials.")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("user_database_password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("chevereto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_MAX_POST_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2G "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_MAX_UPLOAD_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2G "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHEVERETO_SERVICING")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/www/html/images/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/www/html/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  ghcr.io/chevereto/chevereto:latest\n")])])]),t("h2",{attrs:{id:"using-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-compose"}},[a._v("#")]),a._v(" Using compose")]),a._v(" "),t("p",[a._v("Create your own "),t("code",[a._v("docker-compose.yml")]),a._v(" at your project folder. See more examples at "),t("a",{attrs:{href:"https://github.com/chevereto/docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevereto/docker"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mariadb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("jammy\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" chevereto\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/mysql\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("healthcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CMD"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"healthcheck.sh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--su-mysql"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--connect"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("interval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 10s\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 5s\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("retries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" password\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_DATABASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" chevereto\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" chevereto\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" user_database_password\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("php")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" chevereto/chevereto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tweak with target image to run")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" chevereto\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" storage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/images/\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# - app:/var/www/html/ # uncomment when using CHEVERETO_SERVICING=server")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("condition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" service_healthy\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("expose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_DB_HOST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" database\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_DB_USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" chevereto\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_DB_PASS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" user_database_password\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_DB_PORT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" chevereto\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_HOSTNAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" hostname.com\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_HOSTNAME_PATH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_HTTPS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_MAX_POST_SIZE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 2G\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("CHEVERETO_MAX_UPLOAD_SIZE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 2G\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# CHEVERETO_SERVICING: server # uncomment to enable application filesystem upgrades")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("storage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# app: # uncomment when using CHEVERETO_SERVICING=server")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("chevereto")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);