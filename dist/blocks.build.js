!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(5),o=r(6);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t,r){var n=r(7);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),l=r(1),a=r.n(l),i=r(2),u=r.n(i),c=r(3),f=r.n(c),m=r(4),p=r.n(m),s=wp.element.Component,b=wp.components.Button,d=wp.editor.MediaUpload,g=function(e){function t(){return o()(this,t),u()(this,f()(t).apply(this,arguments))}return p()(t,e),a()(t,[{key:"render",value:function(){var e=this;return wp.element.createElement(d,{onSelect:function(t){console.log("selected: "),console.log(t),e.props.onSelected(t)},type:"image",value:this.props.imageId,render:function(t){var r,n=t.open;return r=n,e.props.imagePreviewUrl?wp.element.createElement("img",{src:e.props.imagePreviewUrl,onClick:r,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(b,{onClick:r,className:"button button-large"},"Pick an image"))}})}}]),t}(s);(0,wp.blocks.registerBlockType)("demo/before-after",{title:"Before-After Slider",icon:"format-gallery",category:"demo",attributes:{beforeImagePreviewUrl:{type:"string",default:null},beforeImageUrl:{type:"string",default:null},beforeImageMediaId:{type:"number",default:null},afterImagePreviewUrl:{type:"string",default:null},afterImageUrl:{type:"string",default:null},afterImageMediaId:{type:"number",default:null}},edit:function(e){var t=e.attributes,r=e.setAttributes;return wp.element.createElement("div",null,wp.element.createElement("h2",null,"Before After Slider"),wp.element.createElement("div",{className:"ba-image-list"},wp.element.createElement("div",{className:"ba-editor-image ba-editor-image-before"},wp.element.createElement("p",null,"Before image:"),wp.element.createElement(g,{onSelected:function(e){r({beforeImageMediaId:e.id,beforeImagePreviewUrl:e.sizes.thumbnail.url,beforeImageUrl:e.url})},imagePreviewUrl:t.beforeImagePreviewUrl,imageId:t.beforeImageMediaId})),wp.element.createElement("div",{className:"ba-editor-image ba-editor-image-after"},wp.element.createElement("p",null,"After image:"),wp.element.createElement(g,{onSelected:function(e){r({afterImageMediaId:e.id,afterImagePreviewUrl:e.sizes.thumbnail.url,afterImageUrl:e.url})},imagePreviewUrl:t.afterImagePreviewUrl,imageId:t.afterImageMediaId}))))},save:function(e){var t=e.attributes;return t.beforeImageMediaId&&t.afterImageMediaId?wp.element.createElement("div",{className:"ba-wrap"},wp.element.createElement("img",{src:t.beforeImageUrl,alt:"Before"}),wp.element.createElement("img",{src:t.afterImageUrl,alt:"After"})):wp.element.createElement("div",{"data-error":"Error: block is missing content"})}})}]);