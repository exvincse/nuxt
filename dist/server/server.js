module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"2707a46e454245b3fe98",2:"674f9492bb4aa3b5fa43"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=25)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,f){var d,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=d):o&&(d=f?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(h.functional){h._injectStyles=d;var x=h.render;h.render=function(t,e){return d.call(e),x(t,e)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,d):[d]}return{exports:t,options:h}}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=require("axios")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(source," */")}));return[content].concat(o).concat([r]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(content,"}"):content})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var f=[].concat(t[l]);r&&o[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),e.push(f))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var content=n(45);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(4).default;t.exports.__inject__=function(t){r("72daabed",content,!0,t)}},function(t,e,n){var content=n(47);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(4).default;t.exports.__inject__=function(t){r("3191d5ad",content,!0,t)}},function(t,e,n){var content=n(51);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(4).default;t.exports.__inject__=function(t){r("1922bf88",content,!0,t)}},function(t,e,n){var content=n(53);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(4).default;t.exports.__inject__=function(t){r("146d4da4",content,!0,t)}},function(t,e,n){var content=n(55);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(4).default;t.exports.__inject__=function(t){r("75f920f2",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=require("vuex")},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("vue-router")},function(t,e,n){var r=n(28),o=n(33);t.exports=n(15)?function(object,t,e){return r.f(object,t,o(1,e))}:function(object,t,e){return object[t]=e,object}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("defu")},function(t,e,n){t.exports=n(57)},function(t,e,n){"use strict";var r=n(27),o=n(20),c=n(41),l=n(6),f=[].sort,d=[1,2,3];r(r.P+r.F*(l((function(){d.sort(void 0)}))||!l((function(){d.sort(null)}))||!n(43)(f)),"Array",{sort:function(t){return void 0===t?f.call(c(this)):f.call(c(this),o(t))}})},function(t,e,n){var r=n(5),o=n(13),c=n(19),l=n(34),f=n(40),d=function(t,e,source){var n,h,x,m,y=t&d.F,v=t&d.G,_=t&d.S,w=t&d.P,j=t&d.B,C=v?r:_?r[e]||(r[e]={}):(r[e]||{}).prototype,k=v?o:o[e]||(o[e]={}),$=k.prototype||(k.prototype={});for(n in v&&(source=e),source)x=((h=!y&&C&&void 0!==C[n])?C:source)[n],m=j&&h?f(x,r):w&&"function"==typeof x?f(Function.call,x):x,C&&l(C,n,x,t&d.U),k[n]!=x&&c(k,n,m),w&&$[n]!=x&&($[n]=x)};r.core=o,d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,t.exports=d},function(t,e,n){var r=n(29),o=n(30),c=n(32),l=Object.defineProperty;e.f=n(15)?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),o)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(14);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(15)&&!n(6)((function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(14),o=n(5).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},function(t,e,n){var r=n(14);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(5),o=n(19),c=n(35),l=n(36)("src"),f=n(37),d=(""+f).split("toString");n(13).inspectSource=function(t){return f.call(t)},(t.exports=function(t,e,n,f){var h="function"==typeof n;h&&(c(n,"name")||o(n,"name",e)),t[e]!==n&&(h&&(c(n,l)||o(n,l,t[e]?""+t[e]:d.join(String(e)))),t===r?t[e]=n:f?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[l]||f.call(this)}))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){t.exports=n(38)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(13),o=n(5),c=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(39)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(20);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(a){return t.call(e,a)};case 2:return function(a,b){return t.call(e,a,b)};case 3:return function(a,b,n){return t.call(e,a,b,n)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(42);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(3)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(3)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:red;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},function(t,e,n){var content=n(49);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(4).default("41fdcf84",content,!0)},function(t,e,n){(e=n(3)(!1)).push([t.i,"",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(3)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(10),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(3)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(11),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(3)(!1)).push([t.i,".green{background:green}html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return l})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return d}));var r=n(2),o=n.n(r);const c=()=>({message:[]}),l={},f={SET_MESSAGE(t,e){t.message=e||[]}},d={async setStars({commit:t}){t("SET_MESSAGE",(await o.a.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=96dg4kGqji5E3SrmGkeAQfq1OAXOBAMD")).data.results)}}},function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(0),c=n.n(o),l=n(22),f=n.n(l);var d={};n(26);function h(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function x(t,e=!1,n="components"){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t[n]).map(o=>(e&&e.push(r),t[n][o]))))}function m(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=h(t),"function"==typeof e?e(t,n,r,o):t)))}async function y(t){if(t)return await m(t),{...t,meta:x(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function v(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");c=path.split("#"),2===c.length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:"",l}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([y(e.route),y(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():w(t[0],e).then(()=>_(t.slice(1),e))}function w(t,e){let n;return n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e),n&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function j(t,e){return function(t,e){const n=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",E(e)));return function(e,r){let path="";const data=e||{},o=(r||{}).pretty?k:encodeURIComponent;for(let i=0;i<t.length;i++){const e=t[i];if("string"==typeof e){path+=e;continue}const r=data[e.name||"pathMatch"];let c;if(null==r){if(e.optional){e.partial&&(path+=e.prefix);continue}throw new TypeError('Expected "'+e.name+'" to be defined')}if(Array.isArray(r)){if(!e.repeat)throw new TypeError('Expected "'+e.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(e.optional)continue;throw new TypeError('Expected "'+e.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!n[i].test(c))throw new TypeError('Expected all "'+e.name+'" to match "'+e.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?e.prefix:e.delimiter)+c}}else{if(c=e.asterisk?k(r,!0):o(r),!n[i].test(c))throw new TypeError('Expected "'+e.name+'" to match "'+e.pattern+'", but received "'+c+'"');path+=e.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=C.exec(t));){const e=l[0],f=l[1],d=l.index;if(path+=t.slice(o,d),o=d+e.length,f){path+=f[1];continue}const h=t[o],x=l[2],m=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const j=null!=x&&null!=h&&h!==x,C="+"===_||"*"===_,k="?"===_||"*"===_,E=l[2]||c,pattern=y||v;n.push({name:m||r++,prefix:x||"",delimiter:E,optional:k,repeat:C,partial:j,asterisk:Boolean(w),pattern:pattern?S(pattern):w?".*":"[^"+$(E)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e),e)}const C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t,e){const n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function $(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$/()])/g,"\\$1")}function E(t){return t&&t.sensitive?"":"i"}var O=n(23),T=n.n(O),N=n(17),P=n.n(N),R=n(12),A=n.n(R),M=n(18),z=n.n(M);c.a.use(z.a);const U=[{path:"/",name:"index",component:()=>n.e(1).then(n.bind(null,68)).then(t=>t.default)},{path:"/people",name:"people",component:()=>n.e(2).then(n.bind(null,69)).then(t=>t.default)},{path:"*",redirect:"/"}];function F(t){return new z.a({mode:"history",routes:U})}var L={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const f=o[l]||c,d={};D.forEach(t=>{void 0!==f[t]&&(d[t]=f[t])});const h={};B.forEach(t=>{"function"==typeof f[t]&&(h[t]=f[t].bind(r))});const x=h.beforeEnter;if(h.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),x)return x.call(r,t)},!1===f.css){const t=h.leave;(!t||t.length<2)&&(h.leave=(e,n)=>{t&&t.call(r,e),r.$nextTick(n)})}let m=t("routerView",data);return n.keepAlive&&(m=t("keep-alive",{props:n.keepAliveProps},[m])),t("transition",{props:d,on:h},[m])}};const D=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],B=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var I={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},H=n(1);var V=Object(H.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(44);e.__inject__&&e.__inject__(t)}),null,"5451fb3d").exports,G={name:"Nuxt",components:{NuxtChild:L,NuxtError:V},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||j(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p",`Error details: ${this.errorFromNuxtError.toString()}`),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(V,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},K={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100||this.percent<=0)&&(this.skipTimerCount=1,this.reversed=!this.reversed))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var X=Object(H.a)(K,void 0,void 0,!1,(function(t){var e=n(46);e.__inject__&&e.__inject__(t)}),null,"03d1c59e").exports;n(48);const J={_blue:Object(H.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"blue"}},[e("nuxt")],1)}),[],!1,(function(t){var e=n(50);e.__inject__&&e.__inject__(t)}),null,"be357dbc").exports,_default:Object(H.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,(function(t){var e=n(52);e.__inject__&&e.__inject__(t)}),null,"5d7b5729").exports,_green:Object(H.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"green"},[e("nuxt")],1)}),[],!1,(function(t){var e=n(54);e.__inject__&&e.__inject__(t)}),null,"f53cda2a").exports};var W={head:{title:"nuxtjs",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My premium Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return x(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];return t.$options.fetch&&p.push(w(t.$options.fetch,this.context)),t.$options.asyncData&&p.push(w(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&J["_"+t]||(t="default"),this.layoutName=t,this.layout=J["_"+t],this.layout},loadLayout:t=>(t&&J["_"+t]||(t="default"),Promise.resolve(J["_"+t]))},components:{NuxtLoading:X}},Q=n(16),Y=n.n(Q);c.a.use(Y.a);let Z={};Z=function(t,e){if((t=t.default||t).commit)throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);return"function"!=typeof t&&(t=Object.assign({},t)),function(t,e){if(t.state&&"function"!=typeof t.state){console.warn(`'state' should be a method that returns an object in ${e}`);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}(t,e)}(n(56),"store/index.js"),Z.modules=Z.modules||{};const tt=Z instanceof Function?Z:()=>new Y.a.Store(Object.assign({strict:!1},Z));var et=n(2),nt=n.n(et),ot=n(24),it=n.n(ot);const st={setBaseURL(t){this.defaults.baseURL=t},setHeader(t,e,n="common"){for(let r of Array.isArray(n)?n:[n]){if(!e)return void delete this.defaults.headers[r][t];this.defaults.headers[r][t]=e}},setToken(t,e,n="common"){const r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest(t){this.interceptors.request.use(e=>t(e)||e)},onResponse(t){this.interceptors.response.use(e=>t(e)||e)},onRequestError(t){this.interceptors.request.use(void 0,e=>t(e)||Promise.reject(e))},onResponseError(t){this.interceptors.response.use(void 0,e=>t(e)||Promise.reject(e))},onError(t){this.onRequestError(t),this.onResponseError(t)},create(t){return at(it()(t,this.defaults))}};for(let t of["request","delete","get","head","options","post","put","patch"])st["$"+t]=function(){return this[t].apply(this,arguments).then(t=>t&&t.data)};const at=t=>{const e=nt.a.create(t);return e.CancelToken=nt.a.CancelToken,e.isCancel=nt.a.isCancel,(t=>{for(let e in st)t[e]=st[e].bind(t)})(e),ct(e),e},ct=t=>{};var ut=(t,e)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],delete n.headers.common["content-length"],delete n.headers.common["content-md5"],delete n.headers.common["content-type"],n.headers.common["accept-encoding"]="gzip, deflate";const r=at(n);t.$axios=r,e("axios",r)};c.a.component(P.a.name,P.a),c.a.component(A.a.name,{...A.a,render:(t,e)=>A.a.render(t,e)}),c.a.component(L.name,L),c.a.component("NChild",L),c.a.component(G.name,G),c.a.use(T.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const lt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function pt(t){const e=await F(),n=tt(t);n.$router=e;const r=n.registerModule;n.registerModule=(path,t,e)=>r.call(n,path,t,Object.assign({preserveState:!1},e));const o={store:n,router:e,nuxt:{defaultTransition:lt,transitions:[lt],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},lt,{name:t}):Object.assign({},lt,t):lt),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...W};n.app=o;const l=t?t.next:t=>o.router.push(t);let f;if(t)f=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base,e.options.mode);f=e.resolve(path).route}await v(o,{store:n,route:f,next:l,error:o.nuxt.error.bind(o),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,n[t]=o[t];const r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{Object.prototype.hasOwnProperty.call(c.a,t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return await ut(o.context,d),t&&t.url&&await new Promise((n,r)=>{e.push(t.url,n,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,o.context.route=await y(e),o.context.params=e.params||{},o.context.query=e.query||{},r(),n()})})}),{store:n,app:o,router:e}}var ft={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.component(ft.name,ft),c.a.component("NLink",ft),global.fetch||(global.fetch=f.a);const ht=()=>new c.a({render:t=>t("div")});const xt=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=xt(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:e,router:n,store:r}=await pt(t),o=new c.a(e);t.meta=o.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>w(e,{Components:y,nuxtState:t.nuxt}))),t.rendered=()=>{t.nuxt.state=r.state}},f=async()=>{const n=(V.options||V).layout,r="function"==typeof n?n.call(V,e.context):n;return t.nuxt.layout=r||"default",await o.loadLayout(r),o.setLayout(r),await l(),o},m=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),f()),y=x(n.match(t.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",e.context)}catch(t){throw console.debug("Error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return ht();if(t.nuxt.error)return f();let v=[];if(v=v.map(t=>"function"==typeof t?t:("function"!=typeof d[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),d[t])),await _(v,e.context),t.redirected)return ht();if(t.nuxt.error)return f();let j=y.length?y[0].options.layout:V.layout;if("function"==typeof j&&(j=j(e.context)),await o.loadLayout(j),t.nuxt.error)return f();if(j=o.setLayout(j),t.nuxt.layout=o.layoutName,v=[],j=h(j),j.options.middleware&&(v=v.concat(j.options.middleware)),y.forEach(t=>{t.options.middleware&&(v=v.concat(t.options.middleware))}),v=v.map(t=>"function"==typeof t?t:("function"!=typeof d[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),d[t])),await _(v,e.context),t.redirected)return ht();if(t.nuxt.error)return f();let C=!0;try{for(const t of y)if("function"==typeof t.options.validate&&(C=await t.options.validate(e.context),!C))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),f()}if(!C)return t._generate&&(t.nuxt.serverRendered=!1),m();if(!y.length)return m();const k=await Promise.all(y.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=w(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=k.map(t=>t[0]||{}),t.redirected?ht():t.nuxt.error?f():(await l(),o)}}]);