(function(e){function t(t){for(var r,l,o=t[0],s=t[1],c=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},i=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[e._m(0),a("div",{staticClass:"content"},[a("main",[a("article",{staticClass:"detail"},[e._m(1),a("div",{staticClass:"entry-content"},[a("h2",[e._v("デモ")]),a("VueImageBase64",{attrs:{maxFileSize:10485760,thumbnailSize:100,drop:!0,dropText:"ファイルをドラッグ＆ドロップもしくは",capture:"environment",multiple:!0},on:{handleChange:e.handleChange}}),a("div",[a("table",{attrs:{id:"select-image"}},[e._m(2),a("tbody",e._l(e.images.data,(function(t){return a("tr",{key:t.fileName},[a("td",[e._v(e._s(t.fileName))]),a("td",[a("img",{attrs:{src:t.ofileData}})]),a("td",[a("img",{attrs:{src:t.fileData}})]),a("td",[e._v(e._s(t.ofileSize))]),a("td",[e._v(e._s(t.fileSize))]),a("td",[e._v(e._s(t.fileType))])])})),0)])])],1)])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"header-image"},[a("div",{staticClass:"logo"},[e._v("VUE IMAGE BASE64")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"entry-header"},[a("h1",{staticClass:"entry-title"},[a("a",{attrs:{href:"#"}},[e._v("画像ファイルをBase64に変換するVue.js用コンポーネントです")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("ファイル名")]),a("th",[e._v("元の画像")]),a("th",[e._v("リサイズ後画像")]),a("th",[e._v("元のサイズ")]),a("th",[e._v("リサイズ後サイズ")]),a("th",[e._v("タイプ")])])])}],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.drop?a("div",[a("div",{class:[e.isHover?"hover":""],attrs:{id:"drop-zone"},on:{dragover:e.handleDragEnter,dragleave:e.handleDragLeave,drop:e.handleDrop}},[a("p",[e._v(e._s(e.dropText))]),a("input",{attrs:{type:"file",id:e.id,accept:e.accept,capture:e.capture,multiple:e.multiple},on:{change:e.handleFileChange}})])]):a("div",[a("input",{attrs:{type:"file",id:e.id,accept:e.accept,capture:e.capture,multiple:e.multiple},on:{change:e.handleFileChange}})])},o=[],s=a("5530"),c=a("53ca"),u=a("b85c"),d=(a("a9e3"),a("b0c0"),a("fb6a"),a("ac1f"),a("1276"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("4c45")),f=a.n(d),h={data:function(){return{isHover:!1}},props:{maxFileSize:{type:Number,require:!1,default:10485760},thumbnailSize:{type:Number,require:!1,default:500},drop:{type:Boolean,require:!1,default:!1},dropText:{type:String,require:!1,default:"image drop here !!"},id:{type:String,require:!1,default:"js-image-base64"},accept:{type:String,require:!1,default:"image/*"},capture:{type:String,require:!1,default:void 0},multiple:{type:Boolean,require:!1,default:void 0}},created:function(){},computed:{},methods:{handleFileChange:function(e){var t,a=this,r=this,n=Object(u["a"])(e.target.files);try{var i=function(){var e=t.value,n=a.getExt(e.name).toLowerCase();if("heic"===n)f()({blob:e,toType:"image/jpeg",quality:1}).then((function(t){var a=t,n=r.validate(a);0<n.length?this.errorCallback(n):r.resize(e.name,a,(function(t){t.fileName=e.name,r.successCallback(Object(s["a"])(Object(s["a"])({},t),{},{result:!0,messages:["正常終了"]}))}),(function(e){r.errorCallback(e)}))}));else{var i=a.validate(e);if(0<i.length)return a.errorCallback(i),{v:void 0};a.resize(e.name,e,(function(e){r.successCallback(Object(s["a"])(Object(s["a"])({},e),{},{result:!0,messages:["正常終了"]}))}),(function(e){r.errorCallback(e)}))}};for(n.s();!(t=n.n()).done;){var l=i();if("object"===Object(c["a"])(l))return l.v}}catch(o){n.e(o)}finally{n.f()}},getExt:function(e){var t=e.lastIndexOf(".");return-1===t?"":e.slice(t+1)},validate:function(e){var t=[];return this.maxFileSize<e.size&&t.push("画像ファイルのファイルサイズが最大値("+Math.floor(this.maxFileSize/1e6)+"MB)を超えています。"),t},errorCallback:function(e){this.$emit("handleChange",{result:!1,messages:e})},successCallback:function(e){this.$emit("handleChange",Object(s["a"])({},e))},resize:function(e,t,a){var r=this,n=new Image,i=new FileReader;i.onload=function(i){n.onload=function(){var l,o;if(n.width>n.height){var s=n.height/n.width;l=r.thumbnailSize,o=r.thumbnailSize*s}else{var c=n.width/n.height;l=r.thumbnailSize*c,o=r.thumbnailSize}var u=document.createElement("canvas");u.id="canvas",u.width=l,u.height=o;var d=u.getContext("2d");d&&(d.clearRect(0,0,l,o),d.drawImage(n,0,0,n.width,n.height,0,0,l,o));var f=u.toDataURL("image/jpeg"),h=atob(f.split("base64,")[1]),p=h.length,v=new Uint8Array(p),g=0;while(g<p)v[g]=h.charCodeAt(g),g++;var m=new Blob([v],{type:"image/jpeg"});a({fileName:e,ofileData:i.target?i.target.result:null,fileData:f,ofileSize:t.size,fileSize:m.size,fileType:m.type})},n.onerror=function(){this.errorCallback(["選択されたファイルをロードできません。"])},n.src=i.target?i.target.result+"":""},i.readAsDataURL(t)},handleDragEnter:function(e){e.preventDefault(),e.stopPropagation(),this.setIsHover(!0)},handleDragLeave:function(e){e.preventDefault(),e.stopPropagation(),this.setIsHover(!1)},handleDragOver:function(e){e.preventDefault(),e.stopPropagation()},handleDrop:function(e){e.preventDefault(),e.stopPropagation(),this.setIsHover(!1);var t=e.dataTransfer.files;0!==t.length&&this.handleFileChange({target:{files:t}})},setIsHover:function(e){this.isHover=e}}},p=h,v=a("0c7c"),g=Object(v["a"])(p,l,o,!1,null,null,null),m=g.exports,b={name:"App",components:{VueImageBase64:m},data:function(){return{images:{data:[]},errors:[]}},methods:{handleChange:function(e){if(console.log(e),e.result){var t=this.images.data;t.push(e),this.images={data:t}}else this.errors=e.messages}}},y=b,_=Object(v["a"])(y,n,i,!1,null,null,null),C=_.exports;a("7d05");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(C)}}).$mount("#app")},"7d05":function(e,t,a){}});
//# sourceMappingURL=app.9791760a.js.map