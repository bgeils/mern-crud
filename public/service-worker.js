"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","61f3126ddfe0af6fdce65135b552a4e6"],["/static/css/main.1426742e.css","d91df986cb84235b5556cb3d73e9d477"],["/static/media/AlecDorenkamp.bf17183b.jpg","bf17183b11ef3a5e23d8f888d154464b"],["/static/media/bgeils.f7ba3de1.jpg","f7ba3de1e2022852851704145a4cfd67"],["/static/media/checkbox-01.7e720020.png","7e72002067c9047c205fdb3521176196"],["/static/media/checkbox-01@2x.d5554fe4.png","d5554fe41aed23e1e49f249f2f6bcfaa"],["/static/media/checkbox-sign-in-widget@2x.c8c02700.png","c8c027005764d43d83566d88f53844c9"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/montserrat-light-webfont.6225f3ca.woff","6225f3ca44b83090833064727a09cc95"],["/static/media/montserrat-light-webfont.70df5da6.ttf","70df5da69722ec23336c227bf131d5ab"],["/static/media/montserrat-light-webfont.8cde2a0e.svg","8cde2a0e8a4a698a32a3b1c295b9fa8b"],["/static/media/montserrat-light-webfont.a11330db.eot","a11330db59d1e0d7b0935e86754b86be"],["/static/media/montserrat-regular-webfont.362ffe72.eot","362ffe720ba40be359302cab7f83c517"],["/static/media/montserrat-regular-webfont.69eac499.ttf","69eac499e9311b03ed69199e62ea962e"],["/static/media/montserrat-regular-webfont.6fedfc64.svg","6fedfc64a7bfbbb272c4e4d3b8597244"],["/static/media/montserrat-regular-webfont.8f2822b7.woff","8f2822b73b5f9c106c6f2e0db820bcbb"],["/static/media/okticon.243cd7ee.woff","243cd7ee2a2a856732c4f08f01c10f2c"],["/static/media/okticon.29829fe2.eot","29829fe24f3e733e970b05481ccc2305"],["/static/media/okticon.39aa3da8.svg","39aa3da8c027f0a2bceb8f26b4f5ad93"],["/static/media/okticon.51cc1de0.ttf","51cc1de00c0b9b83a649ad3cb5b15175"],["/static/media/radiobutton-01.c837a09b.png","c837a09b25ad85d682483da65dd6420e"],["/static/media/radiobutton-01@2x.dc47af40.png","dc47af40165cadf418a95b6a06964b2e"],["/static/media/redblur.de596ac3.png","de596ac3aeb6d448ccc5464922e7f25b"],["/static/media/sign-on-widget-spinner.eea28db2.gif","eea28db2b98f4df40b5608a54d0b9131"],["/static/media/u2f_usb.591cc98f.png","591cc98f43cbb68c10ddf345cb2d164e"],["/static/media/yubikeyDemo.f10c9db1.png","f10c9db1d9eb441f0bdaffce5bb672a1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});