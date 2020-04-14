/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${r}`);class s{constructor(t,e){this.parts=[],this.element=e;const r=[],s=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,p=0;const{strings:h,values:{length:m}}=t;for(;p<m;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=h[p],i=c.exec(e)[2],r=i.toLowerCase()+"$lit$",s=t.getAttribute(r);t.removeAttribute(r);const a=s.split(n);this.parts.push({type:"attribute",index:u,name:i,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(n),o=s.length-1;for(let e=0;e<o;e++){let r,n=s[e];if(""===n)r=d();else{const t=c.exec(n);null!==t&&a(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(n)}i.insertBefore(r,t),this.parts.push({type:"node",index:++u})}""===s[o]?(i.insertBefore(d(),t),r.push(t)):t.data=s[o],p+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(d(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(r.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=s.pop()}for(const t of r)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},o=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,e){const{element:{content:i},parts:r}=t,n=document.createTreeWalker(i,133,null,!1);let s=p(r),a=r[s],o=-1,d=0;const c=[];let l=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&d++;void 0!==a&&a.index===o;)a.index=null!==l?-1:a.index-d,s=p(r,s),a=r[s]}c.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(o(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=new WeakMap,m=t=>(...e)=>{const i=t(...e);return h.set(i,!0),i},_=t=>"function"==typeof t&&h.has(t),f={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let s,a=0,d=0,c=n.nextNode();for(;a<r.length;)if(s=r[a],o(s)){for(;d<s.index;)d++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${i} `;class b{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],a=t.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===t.indexOf("--\x3e",a+1);const o=c.exec(t);e+=null===o?t+(n?y:r):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new A(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let r=0;r<e;r++){i+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(w(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||w(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const n of t)i=e[r],void 0===i&&(i=new k(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(n),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class T extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends A{}let I=!1;(()=>{try{const t={get capture(){return I=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=R(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const R=t=>t&&(I?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function N(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(i);return r=e.keyString.get(n),void 0===r&&(r=new s(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const O=new Map,H=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,r){const n=e[0];if("."===n){return new T(t,e.slice(1),i).parts}return"@"===n?[new P(t,e.slice(1),r.eventContext)]:"?"===n?[new C(t,e.slice(1),i)]:new x(t,e,i).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(t,...e)=>new b(t,e,"html",V)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,M=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const L=t=>e=>{const r=M(e.type,t);let n=O.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(r,n));let a=n.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(i);if(a=n.keyString.get(o),void 0===a){const i=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(i,t),a=new s(e,i),n.keyString.set(o,a)}return n.stringsArray.set(e.strings,a),a},U=["html","svg"],z=new Set,$=(t,e,i)=>{z.add(t);const r=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{U.forEach(e=>{const i=O.get(M(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),l(t,i)})})})(t);const o=r.content;i?function(t,e,i=null){const{element:{content:r},parts:n}=t;if(null==i)return void r.appendChild(e);const s=document.createTreeWalker(r,133,null,!1);let a=p(n),o=0,d=-1;for(;s.nextNode();){for(d++,s.currentNode===i&&(o=u(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===d;){if(o>0){for(;-1!==a;)n[a].index+=o,a=p(n,a);return}a=p(n,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const d=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),l(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},j=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:j};class q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||G}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=j){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||B,n="function"==typeof r?r:r.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||B.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=G){const r=this.constructor,n=r._attributeNameForProperty(t,i);if(void 0!==n){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const r=this.constructor,n=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),W=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function K(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):W(t,e)}function J(t){return(e,i)=>{const r={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?Y(r,e,i):Q(r,e)}}const Y=(t,e,i)=>{Object.defineProperty(e,i,t)},Q=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const it=(t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof et)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new et(i,tt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const rt={};class nt extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==rt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return rt}}nt.finalized=!0,nt.render=(t,i,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,s=H.has(i),a=D&&11===i.nodeType&&!!i.host,o=a&&!z.has(n),d=o?document.createDocumentFragment():i;if(((t,i,r)=>{let n=H.get(i);void 0===n&&(e(i,i.firstChild),H.set(i,n=new k(Object.assign({templateFactory:N},r))),n.appendInto(i)),n.setValue(t),n.commit()})(t,d,Object.assign({templateFactory:L(n)},r)),o){const t=H.get(d);H.delete(d);const r=t.value instanceof v?t.value.template:void 0;$(n,d,r),e(i,i.firstChild),i.appendChild(d),H.set(i,t)}!s&&a&&window.ShadyCSS.styleElement(i.host)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var st=function(t,e){return(st=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function at(t,e){function i(){this.constructor=t}st(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var ot=function(){return(ot=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function dt(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */}function ct(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},r=function(){};t.document.addEventListener("test",r,i),t.document.removeEventListener("test",r,i)}catch(t){e=!1}return e}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t)&&{passive:!0}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var lt,ut=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),pt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},ht={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},mt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _t=["touchstart","pointerdown","mousedown","keydown"],ft=["touchend","pointerup","mouseup","contextmenu"],gt=[],vt=function(t){function e(i){var r=t.call(this,ot({},e.defaultAdapter,i))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return at(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return pt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ht},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return mt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var r=e.cssClasses,n=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(n),t.adapter_.isUnbounded()&&(t.adapter_.addClass(s),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(r),t.adapter_.removeClass(n),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(_t.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):ft.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;_t.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),ft.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&gt.length>0&&gt.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(gt.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){gt=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,s=e.cssClasses,a=s.FG_DEACTIVATION,o=s.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var u=this.getFgTranslationCoordinates_(),p=u.startPoint,h=u.endPoint;c=p.x+"px, "+p.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(r,c),this.adapter_.updateCssVariable(n,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),d)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,n,s=e.x,a=e.y,o=s+i.left,d=a+i.top;if("touchstart"===t.type){var c=t;r=c.changedTouches[0].pageX-o,n=c.changedTouches[0].pageY-d}else{var l=t;r=l.pageX-o,n=l.pageY-d}return{x:r,y:n}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,n=r.hasDeactivationUXRun,s=r.isActivated;(n||!s)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(i)}),mt.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=ot({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&r%2!=0?this.initialSize_=r-1:this.initialSize_=r,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(n,this.unboundedCoords_.top+"px"))},e}(ut);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const yt=it`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/,bt=function(t,e){void 0===e&&(e=!1);var i,r=t.CSS;if("boolean"==typeof lt&&!e)return lt;if(!(r&&"function"==typeof r.supports))return!1;var n=r.supports("--css-vars","yes"),s=r.supports("(--css-vars: yes)")&&r.supports("color","#00000000");return i=n||s,e||(lt=i),i}(window),wt=navigator.userAgent.match(/Safari/);let St=!1;const xt=t=>{wt&&!St&&(()=>{St=!0;const t=document.createElement("style"),e=new k({templateFactory:N});e.appendInto(t),e.setValue(yt),e.commit(),document.head.appendChild(t)})();const e=t.surfaceNode,i=t.interactionNode||e;i.getRootNode()!==e.getRootNode()&&""===i.style.position&&(i.style.position="relative");const r=new vt({browserSupportsCssVars:()=>bt,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>{return e=":active",((t=i).matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);var t,e},isSurfaceDisabled:()=>Boolean(i.hasAttribute("disabled")),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>i.contains(t),registerInteractionHandler:(t,e)=>i.addEventListener(t,e,ct()),deregisterInteractionHandler:(t,e)=>i.removeEventListener(t,e,ct()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,ct()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,ct()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return r.init(),r},At=new WeakMap,kt=m((t={})=>e=>{const i=e.committer.element,r=t.interactionNode||i;let n=e.value;const s=At.get(n);void 0!==s&&s!==r&&(n.destroy(),n=f),n===f?(n=xt(Object.assign({},t,{surfaceNode:i})),At.set(n,r),e.setValue(n)):(void 0!==t.unbounded&&n.setUnbounded(t.unbounded),void 0!==t.disabled&&n.setUnbounded(t.disabled)),!0===t.active?n.activate():!1===t.active&&n.deactivate()});class Ct extends nt{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return F`<button
    .ripple="${kt()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}dt([K({type:Boolean,reflect:!0})],Ct.prototype,"disabled",void 0),dt([K({type:String})],Ct.prototype,"icon",void 0),dt([K({type:String})],Ct.prototype,"label",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Tt=it`.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Et=class extends Ct{};Et.styles=Tt,Et=dt([X("mwc-icon-button")],Et);var It,Pt="playing",Rt="paused",Nt="stopped";function Ot(){this.promise=new Promise((t,e)=>{this.resolve=t});return this}class Ht{constructor(t,e){this.settings=t,this.callback=e,this.setState(Nt)}setState(t){this.state=t,this.callback("state",t),this.deferred&&(this.deferred.resolve(),delete this.deferred)}play(){this.state==Nt&&this._run(1),this.setState(Pt)}pause(){this.setState(Rt)}stop(){this.setState(Nt)}async _run(t){if(t>this.settings.repetitions)return;const e=1==t?5:this.settings.restLength;this.callback("active",!1);try{await this._countDown(e)}catch(t){return}this.callback("active",!0);const i=this._countDown(this.settings.intervalLength),r=this._randomIndex(this.settings.intervalLength);try{await Promise.all([i,r])}catch(t){return}this._run(t+1)}async _countDown(t){for(var e=0;e<=t;++e)this.callback("time",t-e),await this._delay(1e3)}async _randomIndex(t){for(var e=0;e<t;e+=2.8)this.callback("index",Math.floor(6*Math.random())),await this._delay(1400),this.callback("index",-1),await this._delay(1400)}async _delay(t){for(await new Promise(e=>setTimeout(e,t));this.state==Rt;)this.deferred||(this.deferred=new Ot),await this.deferred.promise;if(this.state==Nt)throw void 0}}X("court-ui")(It=class extends nt{static get properties(){return{index:{type:Number}}}static get styles(){return[it`
      svg {
        display: block;
        object-fit: contain;
        height: 100vh;
        width: 100vw;
      }
      .line {
        stroke: red;
        stroke-width: 5;
      }
      .arrow {
        fill: transparent;
        marker-end: url(#triangle);
        stroke: black;
        stroke-width: 10;
        visibility: hidden;
      }
      .visible {
        visibility: visible !important;
      }
    `]}render(){return F`
      <svg viewbox="0 0 640 975">
        <defs>
          <linearGradient id="woodGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#DEB887"/>
            <stop offset="100%" stop-color="#EEC591"/>
          </linearGradient>
          <pattern id="woodPattern" x="0" y="0" width="20" height="120" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="120" fill="url(#woodGradient)"/>
            <rect x="10" y="-60" width="10" height="120" fill="url(#woodGradient)"/>
            <rect x="10" y="60" width="10" height="120" fill="url(#woodGradient)"/>
          </pattern>
          <marker id="triangle" viewBox="0 0 10 10" refX="1" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>

        <rect width="100%" height="100%" fill="url(#woodPattern)"/>

        <line x1="0" y1="545" x2="640" y2="545" class="line"/>
        <line x1="0" y1="705" x2="160" y2="705" class="line"/>
        <line x1="480" y1="705" x2="640" y2="705" class="line"/>
        <line x1="160" y1="545" x2="160" y2="705" class="line"/>
        <line x1="480" y1="545" x2="480" y2="705" class="line"/>
        <line x1="320" y1="545" x2="320" y2="975" class="line"/>

        <path d="M300 400 Q 250 175 125 125" class="arrow ${0==this.index?"visible":""}"/>
        <path d="M340 400 Q 390 175 515 125" class="arrow ${1==this.index?"visible":""}"/>
        <line x1="300" y1="575" x2="100" y2="575" class="arrow ${2==this.index?"visible":""}"/>
        <line x1="340" y1="575" x2="540" y2="575" class="arrow ${3==this.index?"visible":""}"/>
        <path d="M300 600 Q 250 800 125 850" class="arrow ${4==this.index?"visible":""}"/>
        <path d="M340 600 Q 390 800 515 850" class="arrow ${5==this.index?"visible":""}"/>
      </svg>
    `}});var Vt;X("court-page")(Vt=class extends nt{static get properties(){return{active:{type:Boolean},index:{type:Number},state:{type:String},time:{type:Number}}}static get styles(){return[it`
      :host > div {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      #time {
        font-size: 30px;
        margin: auto;
      }
      .green {color: green;}
      .red {color: red;}
      mwc-icon-button {
        background-color: #000;
        border-radius: 50%;
        color: #FFF;
        margin: 1px;
        --mdc-icon-button-size: 40px;
      }
    `]}render(){return F`
      <div>
        <div id="time" class="${this.active?"green":"red"}">${this.formatTime(this.time)}</div>
        <div>
          <mwc-icon-button icon="${"playing"==this.state?"pause":"play_arrow"}"
                           @click="${"playing"==this.state?this.pause:this.play}">
          </mwc-icon-button>
          <mwc-icon-button icon="stop" @click="${this.stop}"></mwc-icon-button>
        </div>
      </div>
      <court-ui index="${this.index}"></court-ui>
    `}init(t){this.courtApp=new Ht(t,(t,e)=>{this[t]=e})}play(){this.courtApp.play()}pause(){this.courtApp.pause()}stop(){this.courtApp.stop(),delete this.courtApp,this.dispatchEvent(new CustomEvent("stop"))}formatTime(t){var e="0"+t%60;return("0"+Math.floor(t/60)).slice(-2)+":"+e.slice(-2)}});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const Ft=()=>{},Mt={get passive(){return!1}};document.addEventListener("x",Ft,Mt),document.removeEventListener("x",Ft);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Dt extends nt{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class Lt extends Dt{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}const Ut=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var zt={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},$t={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function Bt(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jt={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},Gt={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},qt={PAGE_FACTOR:4},Xt=["mousedown","pointerdown","touchstart"],Wt=["mouseup","pointerup","touchend"],Kt={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},Jt="ArrowDown",Yt="ArrowLeft",Qt="ArrowRight",Zt="ArrowUp",te="End",ee="Home",ie="PageDown",re="PageUp",ne=function(t){function e(i){var r=t.call(this,ot({},e.defaultAdapter,i))||this;return r.savedTabIndex_=NaN,r.active_=!1,r.inTransit_=!1,r.isDiscrete_=!1,r.hasTrackMarker_=!1,r.handlingThumbTargetEvt_=!1,r.min_=0,r.max_=100,r.step_=0,r.value_=0,r.disabled_=!1,r.preventFocusState_=!1,r.thumbContainerPointerHandler_=function(){return r.handlingThumbTargetEvt_=!0},r.interactionStartHandler_=function(t){return r.handleDown_(t)},r.keydownHandler_=function(t){return r.handleKeydown_(t)},r.focusHandler_=function(){return r.handleFocus_()},r.blurHandler_=function(){return r.handleBlur_()},r.resizeHandler_=function(){return r.layout()},r}return at(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return jt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Gt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return qt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.isDiscrete_=this.adapter_.hasClass(jt.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(jt.HAS_TRACK_MARKER),Xt.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionStartHandler_),t.adapter_.registerThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},e.prototype.destroy=function(){var t=this;Xt.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionStartHandler_),t.adapter_.deregisterThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},e.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},e.prototype.getValue=function(){return this.value_},e.prototype.setValue=function(t){this.setValue_(t,!1)},e.prototype.getMax=function(){return this.max_},e.prototype.setMax=function(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Gt.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},e.prototype.getMin=function(){return this.min_},e.prototype.setMin=function(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Gt.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},e.prototype.getStep=function(){return this.step_},e.prototype.setStep=function(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},e.prototype.isDisabled=function(){return this.disabled_},e.prototype.setDisabled=function(t){this.disabled_=t,this.toggleClass_(jt.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(Gt.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(Gt.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},e.prototype.handleDown_=function(t){var e=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(t){e.handleMove_(t)},r=Kt[t.type],n=function(){e.handleUp_(),e.adapter_.deregisterBodyInteractionHandler(r,i),Wt.forEach((function(t){return e.adapter_.deregisterBodyInteractionHandler(t,n)}))};this.adapter_.registerBodyInteractionHandler(r,i),Wt.forEach((function(t){return e.adapter_.registerBodyInteractionHandler(t,n)})),this.setValueFromEvt_(t)}},e.prototype.handleMove_=function(t){t.preventDefault(),this.setValueFromEvt_(t)},e.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},e.prototype.getClientX_=function(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].clientX:t.clientX},e.prototype.setValueFromEvt_=function(t){var e=this.getClientX_(t),i=this.computeValueFromClientX_(e);this.setValue_(i,!0)},e.prototype.computeValueFromClientX_=function(t){var e=this.max_,i=this.min_,r=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(r=1-r),i+r*(e-i)},e.prototype.handleKeydown_=function(t){var e=this.getKeyId_(t),i=this.getValueForKeyId_(e);isNaN(i)||(t.preventDefault(),this.adapter_.addClass(jt.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())},e.prototype.getKeyId_=function(t){return t.key===Yt||37===t.keyCode?Yt:t.key===Qt||39===t.keyCode?Qt:t.key===Zt||38===t.keyCode?Zt:t.key===Jt||40===t.keyCode?Jt:t.key===ee||36===t.keyCode?ee:t.key===te||35===t.keyCode?te:t.key===re||33===t.keyCode?re:t.key===ie||34===t.keyCode?ie:""},e.prototype.getValueForKeyId_=function(t){var e=this.max_,i=this.min_,r=this.step_||(e-i)/100;switch(this.adapter_.isRTL()&&(t===Yt||t===Qt)&&(r=-r),t){case Yt:case Jt:return this.value_-r;case Qt:case Zt:return this.value_+r;case ee:return this.min_;case te:return this.max_;case re:return this.value_+r*qt.PAGE_FACTOR;case ie:return this.value_-r*qt.PAGE_FACTOR;default:return NaN}},e.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(jt.FOCUS)},e.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(jt.FOCUS)},e.prototype.setValue_=function(t,e,i){if(void 0===i&&(i=!1),t!==this.value_||i){var r=this.min_,n=this.max_,s=t===r||t===n;this.step_&&!s&&(t=this.quantize_(t)),t<r?t=r:t>n&&(t=n),t=t||0,this.value_=t,this.adapter_.setAttribute(Gt.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}},e.prototype.quantize_=function(t){return Math.round(t/this.step_)*this.step_},e.prototype.updateUIForCurrentValue_=function(){var t=this,e=this.max_,i=this.min_,r=(this.value_-i)/(e-i),n=r*this.rect_.width;this.adapter_.isRTL()&&(n=this.rect_.width-n);var s=function(t,e){if(Bt(t)&&e in zt){var i=t.document.createElement("div"),r=zt[e],n=r.standard,s=r.prefixed;return n in i.style?n:s}return e}(window,"transform"),a=function(t,e){if(Bt(t)&&e in $t){var i=t.document.createElement("div"),r=$t[e],n=r.standard,s=r.prefixed;return r.cssProperty in i.style?n:s}return e}(window,"transitionend");if(this.inTransit_){var o=function(){t.setInTransit_(!1),t.adapter_.deregisterThumbContainerInteractionHandler(a,o)};this.adapter_.registerThumbContainerInteractionHandler(a,o)}requestAnimationFrame((function(){t.adapter_.setThumbContainerStyleProperty(s,"translateX("+n+"px) translateX(-50%)"),t.adapter_.setTrackStyleProperty(s,"scaleX("+r+")")}))},e.prototype.setActive_=function(t){this.active_=t,this.toggleClass_(jt.ACTIVE,this.active_)},e.prototype.setInTransit_=function(t){this.inTransit_=t,this.toggleClass_(jt.IN_TRANSIT,this.inTransit_)},e.prototype.toggleClass_=function(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},e}(ut);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class se{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const ae=new WeakMap,oe=m(t=>e=>{if(!(e instanceof A)||e instanceof E||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:r}=i;let n=ae.get(e);void 0===n&&(r.setAttribute("class",i.strings.join(" ")),ae.set(e,n=new Set));const s=r.classList||new se(r);n.forEach(e=>{e in t||(s.remove(e),n.delete(e))});for(const e in t){const i=t[e];i!=n.has(e)&&(i?(s.add(e),n.add(e)):(s.remove(e),n.delete(e)))}"function"==typeof s.commit&&s.commit()}),de=new WeakMap,ce=m(t=>e=>{if(!(e instanceof A)||e instanceof E||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let n=de.get(e);void 0===n&&(r.cssText=i.strings.join(" "),de.set(e,n=new Set)),n.forEach(e=>{e in t||(n.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))});for(const e in t)n.add(e),-1===e.indexOf("-")?r[e]=t[e]:r.setProperty(e,t[e])});class le extends Lt{constructor(){super(...arguments),this.mdcFoundationClass=ne,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const t=0!==this.step,e={"mdc-slider--discrete":t,"mdc-slider--display-markers":this.markers&&t};let i="";t&&this.markers&&(i=F`
        <div
            class="mdc-slider__track-marker-container"
            style="${ce(this.trackMarkerContainerStyles)}">
        </div>`);let r="";return this.pin&&(r=F`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),F`
      <div class="mdc-slider ${oe(e)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${ce(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${ce(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${r}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},(t=this.mdcRoot,{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)})),{getAttribute:t=>this.mdcRoot.getAttribute(t),setAttribute:(t,e)=>this.mdcRoot.setAttribute(t,e),removeAttribute:t=>this.mdcRoot.removeAttribute(t),computeBoundingRect:()=>{const t=this.mdcRoot.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left+window.pageXOffset,right:t.right,top:t.top,width:t.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(t,e)=>{const i="touchstart"===t?ct():void 0;this.mdcRoot.addEventListener(t,e,i)},deregisterInteractionHandler:(t,e)=>this.mdcRoot.removeEventListener(t,e),registerThumbContainerInteractionHandler:(t,e)=>{const i="touchstart"===t?ct():void 0;this.thumbContainer.addEventListener(t,e,i)},deregisterThumbContainerInteractionHandler:(t,e)=>this.thumbContainer.removeEventListener(t,e),registerBodyInteractionHandler:(t,e)=>document.body.addEventListener(t,e),deregisterBodyInteractionHandler:(t,e)=>document.body.removeEventListener(t,e),registerResizeHandler:t=>window.addEventListener("resize",t,ct()),deregisterResizeHandler:t=>window.removeEventListener("resize",t),notifyInput:()=>{const t=this.mdcFoundation.getValue();t!==this.value&&(this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(t,e)=>{this.thumbContainerStyles[t]=e,this.requestUpdate()},setTrackStyleProperty:(t,e)=>{this.trackStyles[t]=e,this.requestUpdate()},setMarkerValue:t=>this.pinMarkerText=t.toLocaleString(),setTrackMarkers:(t,e,i)=>{const r=t.toLocaleString(),n="linear-gradient(to right, currentColor 2px, transparent 0) "+`0 center / calc((100% - 2px) / ${`((${e.toLocaleString()} - ${i.toLocaleString()}) / ${r})`}) 100% repeat-x`;this.trackMarkerContainerStyles.background=n,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction});var t}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}var ue;dt([J(".mdc-slider")],le.prototype,"mdcRoot",void 0),dt([J(".mdc-slider")],le.prototype,"formElement",void 0),dt([J(".mdc-slider__thumb-container")],le.prototype,"thumbContainer",void 0),dt([J(".mdc-slider__pin-value-marker")],le.prototype,"pinMarker",void 0),dt([K({type:Number}),Ut((function(t){this.mdcFoundation.setValue(t)}))],le.prototype,"value",void 0),dt([K({type:Number}),Ut((function(t){this.mdcFoundation.setMin(t)}))],le.prototype,"min",void 0),dt([K({type:Number}),Ut((function(t){this.mdcFoundation.setMax(t)}))],le.prototype,"max",void 0),dt([K({type:Number}),Ut((function(t,e){0!==e!==(0!==t)&&this.resetFoundation(),this.mdcFoundation.setStep(t)}))],le.prototype,"step",void 0),dt([K({type:Boolean,reflect:!0}),Ut((function(t){this.mdcFoundation.setDisabled(t)}))],le.prototype,"disabled",void 0),dt([K({type:Boolean,reflect:!0})],le.prototype,"pin",void 0),dt([K({type:Boolean,reflect:!0}),Ut((function(){this.mdcFoundation.setupTrackMarker()}))],le.prototype,"markers",void 0),dt([K({type:String})],le.prototype,"pinMarkerText",void 0),dt([K({type:Object})],le.prototype,"trackMarkerContainerStyles",void 0),dt([K({type:Object})],le.prototype,"thumbContainerStyles",void 0),dt([K({type:Object})],le.prototype,"trackStyles",void 0),dt([(ue={capture:!0,passive:!0},(t,e)=>void 0!==e?((t,e,i)=>{Object.assign(e[i],t)})(ue,t,e):((t,e)=>Object.assign(Object.assign({},e),{finisher(i){Object.assign(i.prototype[e.key],t)}}))(ue,t))],le.prototype,"layout",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const pe=it`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let he=class extends le{};var me;he.styles=pe,he=dt([X("mwc-slider")],he);X("settings-page")(me=class extends nt{static get properties(){return{difficulty:{type:Number},intervalLength:{type:Number},restLength:{type:Number},repetitions:{type:Number}}}constructor(){super(),this.difficulty=this.repetitions=1,this.intervalLength=this.restLength=10}static get styles(){return[it`
      :host > div {
        box-shadow: 1px 1px 2px 2px #CCC;
        margin: 5px auto;
        max-width: 500px;
        padding: 10px;
      }
      mwc-slider {
        width: 100%;
      }
      mwc-icon-button {
        background-color: #000;
        border-radius: 50%;
        color: #FFF;
        --mdc-icon-button-size: 40px;
      }
    `]}render(){return F`
      <div>
        <div>Difficulty = ${this.difficulty}</div>
        <mwc-slider min="1" max="20" step="1" markers @input="${t=>this.handleInput(t,"difficulty")}"></mwc-slider>
        <div>Interval Length = ${this.intervalLength}s</div>
        <mwc-slider min="10" max="180" step="10" markers @input="${t=>this.handleInput(t,"intervalLength")}"></mwc-slider>
        <div>Rest Length = ${this.restLength}s</div>
        <mwc-slider min="10" max="180" step="10" markers @input="${t=>this.handleInput(t,"restLength")}"></mwc-slider>
        <div>Repetitions = ${this.repetitions}</div>
        <mwc-slider min="1" max="20" step="1" markers @input="${t=>this.handleInput(t,"repetitions")}"></mwc-slider>
        <mwc-icon-button icon="play_arrow" @click="${this.handlePlay}"></mwc-icon-button>
      </div>
    `}handleInput(t,e){this[e]=t.target.value}handlePlay(){const t={difficulty:this.difficulty,intervalLength:this.intervalLength,restLength:this.restLength,repetitions:this.repetitions};this.dispatchEvent(new CustomEvent("play",{detail:t}))}});var _e;X("glencoe-app")(_e=class extends nt{static get properties(){return{page:{type:String},settings:{type:Object}}}constructor(){super(),this.page="settings",this.settings={}}render(){return"settings"==this.page?F`<settings-page @play="${this.handlePlay}"></settings-page> `:F`<court-page @stop="${this.handleStop}"></court-page> `}async handlePlay(t){this.page="court",await this.updateComplete;const e=this.shadowRoot.querySelector("court-page");e.init(t.detail),e.play()}handleStop(){this.page="settings"}});
