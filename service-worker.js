"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-form/index.html","3a039a89ffd890521dfe9860d4233373"],["/react-form/static/css/main.dc5febbc.css","ccb5fa276b248630b97b1f86c86c991d"],["/react-form/static/js/main.57aaed98.js","1c4fe08ffbe4dbb94742782de4a1db73"],["/react-form/static/media/roboto.0f7fb3f8.woff","0f7fb3f830134f46529807a2baa3eb5e"],["/react-form/static/media/roboto.1ffc52ae.woff2","1ffc52aee7d9b8f87ccdb7f3d2189951"],["/react-form/static/media/roboto.cf55a1d7.ttf","cf55a1d7e6ac44f8abad4edf7c5ca20d"],["/react-form/static/media/robotoblack.191b60e1.ttf","191b60e1c020d17cb21f1af53aac3c1d"],["/react-form/static/media/robotoblack.996d4322.woff","996d432298916d6685d3fc9910b3a623"],["/react-form/static/media/robotoblack.ef468579.woff2","ef468579fc95e880fba72e7dc246b28b"],["/react-form/static/media/robotoblackitalic.545170ad.woff","545170ad7ec43cb69eb24393fc456fe3"],["/react-form/static/media/robotoblackitalic.dc841d8b.woff2","dc841d8bed773f2a82244eb9fc925bd9"],["/react-form/static/media/robotoblackitalic.fb88977f.ttf","fb88977fc003919f48a340e8855689f6"],["/react-form/static/media/robotobold.0dba604b.woff2","0dba604b7e9ae7588049675cf5ab5f7c"],["/react-form/static/media/robotobold.1f8f574a.ttf","1f8f574abb64aa6c2a1290e9b6d00ea8"],["/react-form/static/media/robotobold.741313d7.woff","741313d7739cec544023aba65e031c9d"],["/react-form/static/media/robotobolditalic.631e3621.ttf","631e3621be5c8b6612caa6bfc2493827"],["/react-form/static/media/robotobolditalic.95564a03.woff2","95564a03d7c3d5a8f4fc5db734d3e9c9"],["/react-form/static/media/robotobolditalic.b08d3f31.woff","b08d3f31c14ba42c23d5beedbf75e68d"],["/react-form/static/media/robotoitalic.3d6f1a9a.ttf","3d6f1a9aac58af8ce560c4139396ef99"],["/react-form/static/media/robotoitalic.5dfcc8d4.woff2","5dfcc8d45441c4c2bebb4549bc2fe1d1"],["/react-form/static/media/robotoitalic.8965fdf7.woff","8965fdf7788cba2d58f40f343b710785"],["/react-form/static/media/robotolight.28c7cb3c.woff","28c7cb3cd9807ad30f98e2de2438e3a2"],["/react-form/static/media/robotolight.9d1a2bfc.woff2","9d1a2bfca3ac335c2a0362ec6af3ac91"],["/react-form/static/media/robotolight.ded0d357.ttf","ded0d357b4d0a53375d188883d326d37"],["/react-form/static/media/robotolightitalic.3ec9fb1d.woff","3ec9fb1d237dcaa97159db0237227b6b"],["/react-form/static/media/robotolightitalic.5f7a5366.ttf","5f7a5366871c577c988ad1ce10800b85"],["/react-form/static/media/robotolightitalic.9fb3969e.woff2","9fb3969e6d3237cf36de14eeb8fda13b"],["/react-form/static/media/robotomedium.400c1454.woff2","400c14541b7297a097e57cc8f271f8a5"],["/react-form/static/media/robotomedium.f524bf1c.ttf","f524bf1c79b24869af4050b6347bc0d6"],["/react-form/static/media/robotomedium.f6be901f.woff","f6be901fde0e25b6dd433e5a423ae955"],["/react-form/static/media/robotomediumitalic.03125dd9.woff","03125dd99bc786c69ca0294ac42ec35c"],["/react-form/static/media/robotomediumitalic.bab6e9e2.ttf","bab6e9e21edc57de1b6008e9bd00c2f2"],["/react-form/static/media/robotomediumitalic.c994b61f.woff2","c994b61f87db407db2abc337e624161e"],["/react-form/static/media/robotothin.0faeacbe.ttf","0faeacbe46e18ca5ba5a56ee8f9d97f0"],["/react-form/static/media/robotothin.5be0a3f7.woff","5be0a3f75d80c40852e9905d93b2c572"],["/react-form/static/media/robotothin.c9496726.woff2","c94967264b19ee87fd1274bb5ee4001f"],["/react-form/static/media/robotothinitalic.26062cce.ttf","26062cce8d0c383a7524468d147b404e"],["/react-form/static/media/robotothinitalic.9b557051.woff2","9b557051d93524b35c3d76c7ef3a8538"],["/react-form/static/media/robotothinitalic.d1c3b38f.woff","d1c3b38fac60f9b93c3ceca810115766"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/react-form/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});