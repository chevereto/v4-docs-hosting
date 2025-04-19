(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{402:function(e,t,a){"use strict";a.r(t);var s=a(25),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"install-chevereto-on-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-chevereto-on-server"}},[e._v("#")]),e._v(" Install Chevereto on Server")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Installation service available")]),e._v(" "),t("p",[e._v("We offer a "),t("a",{attrs:{href:"https://chevereto.com/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("paid installation service"),t("OutboundLink")],1),e._v(" for this guide. We will install Chevereto VPS for you, including all the requirements and configurations.")])]),e._v(" "),t("p",[e._v("Collection of universal bash scripts to install Chevereto in any VPS (Virtual Private Server). We strongly recommend "),t("a",{attrs:{href:"https://chevereto.com/go/digitalocean",target:"_blank",rel:"noopener noreferrer"}},[e._v("DigitalOcean"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://chevereto.com/go/vultr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vultr"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://chevereto.com/go/linode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linode"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repository"}},[e._v("#")]),e._v(" Repository")]),e._v(" "),t("p",[e._v("We have a GitHub repository with all the commands we will need. Check the repository at "),t("a",{attrs:{href:"https://github.com/chevereto/vps",target:"_blank",rel:"noopener noreferrer"}},[e._v("chevereto/vps"),t("OutboundLink")],1),e._v(" for instructions.")]),e._v(" "),t("h2",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[e._v("#")]),e._v(" Instructions")]),e._v(" "),t("ul",[t("li",[e._v("Root login to your VPS")]),e._v(" "),t("li",[e._v("Run the following script(s)")])]),e._v(" "),t("h2",{attrs:{id:"ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[e._v("#")]),e._v(" Ubuntu")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Note")]),e._v(": Ubuntu LTS 24.04 is recommended. If you run other system you may need to alter the scripts. Feel free to contribute.")])]),e._v(" "),t("h3",{attrs:{id:"prepare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[e._v("#")]),e._v(" Prepare")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/chevereto/vps/blob/4.2/ubuntu/24.04/prepare.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("prepare.sh"),t("OutboundLink")],1),e._v(" script install the system stack (PHP, Apache HTTP Web server, MySQL Server, Composer, FFmpeg and Certbot) on Ubuntu.")]),e._v(" "),t("p",[e._v("Reboot the VPS to make sure to apply any pending kernel updates:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),t("p",[e._v("Make sure to change "),t("code",[e._v("24.04")]),e._v(" to match your Ubuntu LTS (available 20.04, 22.04 and 24.04).")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" https://raw.githubusercontent.com/chevereto/vps/4.2/ubuntu/24.04/prepare.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("This message will be shown on success:")]),e._v(" "),t("div",{staticClass:"language-plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[e._v("[OK] Stack ready for Chevereto!\n")])])]),t("h2",{attrs:{id:"common"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[e._v("#")]),e._v(" Common")]),e._v(" "),t("ul",[t("li",[e._v("The scripts at "),t("code",[e._v("common/")]),e._v(" will work under any unix-like system")]),e._v(" "),t("li",[e._v("Requires "),t("code",[e._v("curl")]),e._v(" and "),t("code",[e._v("unzip")])])]),e._v(" "),t("h3",{attrs:{id:"new"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[e._v("#")]),e._v(" New")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/chevereto/vps/blob/4.2/common/new.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("new.sh"),t("OutboundLink")],1),e._v(" script downloads Chevereto and configures Apache HTTP Web server, MySQL, CRON and FFmpeg. Its purpose is to prepare for "),t("a",{attrs:{href:"https://v4-docs.chevereto.com/application/installing/installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto Installation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("This is intended to brand new installations and it should run after "),t("a",{attrs:{href:"#prepare"}},[e._v("prepare")]),e._v(" as it assumes that the system stack is ready.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" https://raw.githubusercontent.com/chevereto/vps/4.2/common/new.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h4",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("On the server:")]),e._v(" "),t("ul",[t("li",[e._v("The web root is located at "),t("code",[e._v("/var/www/html")])]),e._v(" "),t("li",[e._v("The MySQL root password is saved at "),t("code",[e._v("/root/.mysql_password")])]),e._v(" "),t("li",[e._v("Logs are at "),t("code",[e._v("/var/log/apache2")])])]),e._v(" "),t("p",[e._v("IMPORTANT:")]),e._v(" "),t("ul",[t("li",[e._v("Secure your database by running "),t("code",[e._v("mysql_secure_installation")])])]),e._v(" "),t("h3",{attrs:{id:"get"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" Get")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/chevereto/vps/blob/4.2/common/get.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("get.sh"),t("OutboundLink")],1),e._v(" script download and extracts Chevereto in the "),t("strong",[e._v("current working folder")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("cd")]),e._v(" into the website project folder (for example "),t("code",[e._v("/var/www/html")]),e._v(")")]),e._v(" "),t("li",[e._v("Run the following command")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" https://raw.githubusercontent.com/chevereto/vps/4.2/common/get.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h3",{attrs:{id:"cloudflare-remote-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-remote-ip"}},[e._v("#")]),e._v(" Cloudflare remote IP")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/chevereto/vps/blob/4.2/common/cf-remoteip.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("cf-remoteip.sh"),t("OutboundLink")],1),e._v(" script syncs the known IPs for CloudFlare remote IP. This "),t("strong",[e._v("must")]),e._v(" be used if you are using CloudFlare.")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Warning")]),e._v(": If you use CloudFlare and not complete this setup your Chevereto installation won't be able to retrieve real visitors IP.")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" https://raw.githubusercontent.com/chevereto/vps/4.2/common/cf-remoteip.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("ul",[t("li",[e._v("To save the above script in your VPS:")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-SOJL")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --output-dir /etc/apache2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    https://raw.githubusercontent.com/chevereto/vps/4.2/common/cf-remoteip.sh\n")])])]),t("ul",[t("li",[e._v("To add the above script to CRON (cron.d) to keep these IP ranges auto updated:")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/etc/cron.d/cf-remoteip "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOM\n30 3 * * * /etc/apache2/cf-remoteip.sh >/dev/null 2>&1\nEOM")]),e._v("\n")])])]),t("h2",{attrs:{id:"https-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-setup"}},[e._v("#")]),e._v(" HTTPS setup")]),e._v(" "),t("p",[e._v("Run the following command to get automatic renewable HTTPS thanks to certbot. Mind to change "),t("code",[e._v("example.com")]),e._v(" with the target domain(s).")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("certbot "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--apache")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com\n")])])]),t("p",[e._v("If you are using "),t("code",[e._v("www.")]),e._v(" subdomain you can add it like this:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("certbot "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--apache")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" www.example.com\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);