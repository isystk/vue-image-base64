(function(e){function t(t){for(var n,l,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},i=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=c;i.push(["0339","chunk-vendors"]),r()})({"0339":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={key:0},i=["id","accept","capture","multiple"],l={key:1},o=["id","accept","capture","multiple"];function c(e,t,r,c,u,s){return r.drop?(Object(n["g"])(),Object(n["c"])("div",a,[Object(n["d"])("div",{id:"drop-zone",class:Object(n["f"])([u.isHover?"hover":""]),onDragover:t[1]||(t[1]=function(){return s.handleDragEnter&&s.handleDragEnter.apply(s,arguments)}),onDragleave:t[2]||(t[2]=function(){return s.handleDragLeave&&s.handleDragLeave.apply(s,arguments)}),onDrop:t[3]||(t[3]=function(){return s.handleDrop&&s.handleDrop.apply(s,arguments)})},[Object(n["d"])("p",null,Object(n["j"])(r.dropText),1),Object(n["d"])("input",{type:"file",id:r.id,accept:r.accept,capture:r.capture,multiple:r.multiple,onChange:t[0]||(t[0]=function(){return s.handleFileChange&&s.handleFileChange.apply(s,arguments)})},null,40,i)],34)])):(Object(n["g"])(),Object(n["c"])("div",l,[Object(n["d"])("input",{type:"file",id:r.id,accept:r.accept,capture:r.capture,multiple:r.multiple,onChange:t[4]||(t[4]=function(){return s.handleFileChange&&s.handleFileChange.apply(s,arguments)})},null,40,o)]))}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=b(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw i}}}}function b(e,t){if(e){if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g={data:function(){return{isHover:!1}},props:{maxFileSize:{type:Number,require:!1,default:10485760},thumbnailSize:{type:Number,require:!1,default:500},drop:{type:Boolean,require:!1,default:!1},dropText:{type:String,require:!1,default:"image drop here !!"},id:{type:String,require:!1,default:"js-image-base64"},accept:{type:String,require:!1,default:"image/*"},capture:{type:String,require:!1,default:void 0},multiple:{type:Boolean,require:!1,default:void 0}},methods:{handleFileChange:function(e){var t,n=this,a=this,i=p(e.target.files);try{var l=function(){var e=t.value,i=n.getExt(e.name).toLowerCase();if("heic"===i){var l=r("4c45");"undefined"!==typeof window&&fetch("https://alexcorvi.github.io/heic2any/demo/14.heic").then((function(e){return e.blob()})).then((function(t){return l({blob:t,toType:"image/jpeg",quality:1}).then((function(t){var r=t,n=a.validate(r);0<n.length?a.errorCallback(n):a.resize(e.name,r,(function(t){t.fileName=e.name,a.successCallback(Object.assign(Object.assign({},t),{result:!0,messages:["正常終了"]}))}),(function(e){a.errorCallback(e)}))}))}))}else{var o=a.validate(e);if(0<o.length)return n.errorCallback(o),{v:void 0};a.resize(e.name,e,(function(e){a.successCallback(s(s({},e),{},{result:!0,messages:["正常終了"]}))}),(function(e){a.errorCallback(e)}))}};for(i.s();!(t=i.n()).done;){var o=l();if("object"===f(o))return o.v}}catch(c){i.e(c)}finally{i.f()}},getExt:function(e){var t=e.lastIndexOf(".");return-1===t?"":e.slice(t+1)},validate:function(e){var t=[];return this.maxFileSize<e.size&&t.push("画像ファイルのファイルサイズが最大値("+Math.floor(this.maxFileSize/1e6)+"MB)を超えています。"),t},errorCallback:function(e){this.$emit("handleChange",{result:!1,messages:e})},successCallback:function(e){this.$emit("handleChange",s({},e))},resize:function(e,t,r){var n=this,a=new Image,i=new FileReader;i.onload=function(i){a.onload=function(){var l,o;if(a.width>a.height){var c=a.height/a.width;l=n.thumbnailSize,o=n.thumbnailSize*c}else{var u=a.width/a.height;l=n.thumbnailSize*u,o=n.thumbnailSize}var s=document.createElement("canvas");s.id="canvas",s.width=l,s.height=o;var d=s.getContext("2d");d&&(d.clearRect(0,0,l,o),d.drawImage(a,0,0,a.width,a.height,0,0,l,o));var f=s.toDataURL("image/jpeg"),p=atob(f.split("base64,")[1]),b=p.length,h=new Uint8Array(b),g=0;while(g<b)h[g]=p.charCodeAt(g),g++;var v=new Blob([h],{type:"image/jpeg"});r({fileName:e,ofileData:i.target?i.target.result:null,fileData:f,ofileSize:t.size,fileSize:v.size,fileType:v.type})},a.onerror=function(){this.errorCallback(["選択されたファイルをロードできません。"])},a.src=i.target?i.target.result+"":""},i.readAsDataURL(t)},handleDragEnter:function(e){e.preventDefault(),e.stopPropagation(),this.setIsHover(!0)},handleDragLeave:function(e){e.preventDefault(),e.stopPropagation(),this.setIsHover(!1)},handleDragOver:function(e){e.preventDefault(),e.stopPropagation()},handleDrop:function(e){e.preventDefault(),e.stopPropagation(),this.setIsHover(!1);var t=e.dataTransfer.files;0!==t.length&&this.handleFileChange({target:{files:t}})},setIsHover:function(e){this.isHover=e}}},v=r("6b0d"),j=r.n(v);const y=j()(g,[["render",c]]);var O=y,m={class:"wrap"},w=Object(n["d"])("header",null,[Object(n["d"])("div",{class:"header-image"},[Object(n["d"])("div",{class:"logo"},"VUE3 IMAGE BASE64")])],-1),S={class:"content"},D={class:"detail"},C=Object(n["d"])("div",{class:"entry-header"},[Object(n["d"])("h1",{class:"entry-title"},[Object(n["d"])("a",{href:"#"},"画像ファイルをBase64に変換するVue.js用コンポーネントです")])],-1),z={class:"entry-content"},P=Object(n["d"])("h2",null,"デモ",-1),x={id:"select-image"},k=Object(n["d"])("thead",null,[Object(n["d"])("tr",null,[Object(n["d"])("th",null,"ファイル名"),Object(n["d"])("th",null,"元の画像"),Object(n["d"])("th",null,"リサイズ後画像"),Object(n["d"])("th",null,"元のサイズ"),Object(n["d"])("th",null,"リサイズ後サイズ"),Object(n["d"])("th",null,"タイプ")])],-1),E=["src"],A=["src"],F={name:"serve",setup:function(e){var t=Object(n["h"])({images:{data:[]},errors:[]}),r=function(e){if(e.result){var r=t.images.data;r.push(e),t.images={data:r}}else t.errors=e.messages};return function(e,a){return Object(n["g"])(),Object(n["c"])("div",m,[w,Object(n["d"])("div",S,[Object(n["d"])("main",null,[Object(n["d"])("article",D,[C,Object(n["d"])("div",z,[P,Object(n["e"])(O,{maxFileSize:10485760,thumbnailSize:100,drop:!0,dropText:"ファイルをドラッグ＆ドロップもしくは",capture:"environment",accept:"*",multiple:!0,onHandleChange:r}),Object(n["d"])("div",null,[Object(n["d"])("table",x,[k,Object(n["d"])("tbody",null,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(t.images.data,(function(e){return Object(n["g"])(),Object(n["c"])("tr",{key:e.fileName},[Object(n["d"])("td",null,Object(n["j"])(e.fileName),1),Object(n["d"])("td",null,[Object(n["d"])("img",{src:e.ofileData},null,8,E)]),Object(n["d"])("td",null,[Object(n["d"])("img",{src:e.fileData},null,8,A)]),Object(n["d"])("td",null,Object(n["j"])(e.ofileSize),1),Object(n["d"])("td",null,Object(n["j"])(e.fileSize),1),Object(n["d"])("td",null,Object(n["j"])(e.fileType),1)])})),128))])])])])])])])])}}};const I=F;var T=I,q=Object(n["b"])(T);q.mount("#app")}});
//# sourceMappingURL=app.1b77ae07.js.map