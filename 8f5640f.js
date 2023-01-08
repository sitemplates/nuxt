/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{297:function(t,e,r){"use strict";var o=r(298),n=r.n(o),c=r(0);e.a={data:function(){return{observer:null}},mounted:function(){var t=this;this.$nextTick((function(){t.observer=n()(".lozad",{threshold:0,loaded:function(t){t.classList.add("loaded"),c.a.to(t,{duration:.75,opacity:1,delay:.35,ease:"power3.out"})}}),t.observer.observe(),setTimeout((function(){document.querySelectorAll(".lozad-load-first").forEach((function(element){t.observer.triggerLoad(element)}))}),300),setTimeout((function(){t.observer.observe()}),1e3)}))},updated:function(){this.observer.observe()}}},298:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(n),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},o=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var n,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,d),i=l.root,f=l.rootMargin,m=l.threshold,u=l.load,g=l.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((n=u,a=g,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),r(t.target)||(n(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:f,threshold:m}));for(var h,v=o(c,i),b=0;b<v.length;b++)(h=v[b]).getAttribute("data-placeholder-background")&&(h.style.background=h.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=o(c,i),n=0;n<t.length;n++)r(t[n])||(s?s.observe(t[n]):(u(t[n]),e(t[n]),g(t[n])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},328:function(t,e,r){var content=r(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("736d01ca",content,!0,{sourceMap:!1})},400:function(t,e,r){"use strict";r(328)},401:function(t,e,r){(e=r(11)(!1)).push([t.i,".block-bg-cover[data-v-fb5a1006]{position:absolute;left:0;top:0;z-index:0;width:100%;height:100%;overflow:hidden}.block-bg-cover .element-cover[data-v-fb5a1006]{position:relative;display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;overflow:hidden}",""]),t.exports=e},440:function(t,e,r){"use strict";r.r(e);r(45),r(46);var o={mixins:[r(297).a],props:{image:{type:Object,required:!0},isCover:{type:Boolean,default:function(){return!1}},isLazy:{type:Boolean,default:function(){return!1}},isLazyFirst:{type:Boolean,default:function(){return!1}},sizes:{type:Array,default:function(){return[]},required:!0}},computed:{src:function(){return this.image.url},srcsets:function(){return"".concat(this.image.url," ").concat(this.image.width,"w,")+(this.sizes.includes("large")?"".concat(this.image.sizes.large," ").concat(this.image.sizes["large-width"],"w,"):"")+(this.sizes.includes("medium-large")?"".concat(this.image.sizes.medium_large," ").concat(this.image.sizes["medium_large-width"],"w,"):"")+(this.sizes.includes("medium")?"".concat(this.image.sizes.medium," ").concat(this.image.sizes["medium-width"],"w,"):"")+(this.sizes.includes("thumbnail")?"".concat(this.image.sizes.thumbnail," ").concat(this.image.sizes["thumbnail-width"],"w"):"")},alt:function(){return this.image.alt}}},n=(r(400),r(4)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLazy?r("div",[t.isCover?r("div",{staticClass:"block-bg-cover"},[r("img",{class:["element-cover","lozad",{"lozad-load-first":t.isLazyFirst}],attrs:{"data-src":t.src,"data-srcset":t.srcsets,sizes:"auto",alt:t.alt}})]):r("img",{class:["lozad",{"lozad-load-first":t.isLazyFirst}],attrs:{"data-src":t.src,"data-srcset":t.srcsets,sizes:"auto",alt:t.alt}})]):r("div",[t.isCover?r("div",{staticClass:"block-bg-cover"},[r("img",{staticClass:"element-cover",attrs:{src:t.src,srcset:t.srcsets,sizes:"auto",alt:t.alt}})]):r("img",{attrs:{src:t.src,srcset:t.srcsets,sizes:"auto",alt:t.alt}})])}),[],!1,null,"fb5a1006",null);e.default=component.exports}}]);