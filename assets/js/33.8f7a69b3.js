(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{297:function(e,t,a){e.exports=a.p+"assets/img/ffmpeg-folder.1ef2e021.png"},394:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cpanel-ffmpeg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpanel-ffmpeg"}},[e._v("#")]),e._v(" cPanel FFmpeg")]),e._v(" "),t("p",[e._v("To get video uploads to work on cPanel you need to install FFmpeg and configure Chevereto to use it.")]),e._v(" "),t("h2",{attrs:{id:"download-ffmpeg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-ffmpeg"}},[e._v("#")]),e._v(" Download FFmpeg")]),e._v(" "),t("p",[e._v("Download FFmpeg static build from the official website at "),t("a",{attrs:{href:"https://ffmpeg.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ffmpeg.org/download.html"),t("OutboundLink")],1),e._v(". Double check that you are downloading the static build, and that it is compatible with your server's architecture.")]),e._v(" "),t("p",[e._v('You can check your cPanel server architecture under the "Server Information" section.')]),e._v(" "),t("h2",{attrs:{id:"upload-ffmpeg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-ffmpeg"}},[e._v("#")]),e._v(" Upload FFmpeg")]),e._v(" "),t("p",[e._v("The FFmpeg distribution comes in a compressed file, you need to extract it and upload the folder containing the binaries to your server.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(297),alt:"FFmpeg folder"}})]),e._v(" "),t("p",[e._v("You can upload these to any directory long as it is visible for your cPanel user. For example, you can use "),t("code",[e._v("/home/user/bin/")]),e._v(" and ending up with:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("/home/user/bin/ffmpeg-7.0.2-amd64-static\n")])])]),t("h2",{attrs:{id:"configure-chevereto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-chevereto"}},[e._v("#")]),e._v(" Configure Chevereto")]),e._v(" "),t("p",[e._v("After installing Chevereto you can configure it to use custom FFmpeg binaries. You need to "),t("RouterLink",{attrs:{to:"/application/configuration/configuring.html#using-app-env-php"}},[e._v("configure")]),e._v(" to use the following environment variables matching to the paths where you uploaded the binaries:")],1),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'CHEVERETO_BINARY_FFMPEG'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/home/user/bin/ffmpeg-7.0.2-amd64-static/ffmpeg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'CHEVERETO_BINARY_FFPROBE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/home/user/bin/ffmpeg-7.0.2-amd64-static/ffprobe'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),t("p",[e._v("You can check if this worked by going to "),t("code",[e._v("/dashboard")]),e._v(" where you will see the report on detected FFmpeg and FFPROBE.")])])}),[],!1,null,null,null);t.default=n.exports}}]);