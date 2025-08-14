(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const iS=()=>{};var Rp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(n,e){if(!n)throw us(e)},us=function(n){return new Error("Firebase Database ("+fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],f=n[t++],h=((o&7)<<18|(a&63)<<12|(u&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const a=n[t++],u=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,f=u?n[o+1]:0,h=o+2<n.length,g=h?n[o+2]:0,E=a>>2,T=(a&3)<<4|f>>4;let b=(f&15)<<2|g>>6,O=g&63;h||(O=64,u||(b=64)),i.push(t[E],t[T],t[b],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const g=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||f==null||g==null||T==null)throw new oS;const b=a<<2|f>>4;if(i.push(b),g!==64){const O=f<<4&240|g>>2;if(i.push(O),T!==64){const F=g<<6&192|T;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pg=function(n){const e=dg(n);return Ll.encodeByteArray(e,!0)},cl=function(n){return pg(n).replace(/\./g,"")},hl=function(n){try{return Ll.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(n){return _g(void 0,n)}function _g(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lS(t)||(n[t]=_g(n[t],e[t]));return n}function lS(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=()=>uS().__FIREBASE_DEFAULTS__,hS=()=>{if(typeof process>"u"||typeof Rp>"u")return;const n=Rp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hl(n[1]);return e&&JSON.parse(e)},Dh=()=>{try{return iS()||cS()||hS()||fS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gg=n=>{var e,t;return(t=(e=Dh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dS=n=>{const e=gg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},mg=()=>{var n;return(n=Dh())===null||n===void 0?void 0:n.config},vg=n=>{var e;return(e=Dh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cl(JSON.stringify(t)),cl(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function _S(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mS(){const n=At();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vS(){return fg.NODE_ADMIN===!0}function Ig(){try{return typeof indexedDB=="object"}catch{return!1}}function yS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="FirebaseError";class Ir extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=IS,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?ES(a,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new Ir(o,f,i)}}function ES(n,e){return n.replace(wS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const wS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=function(n){let e={},t={},i={},o="";try{const a=n.split(".");e=wo(hl(a[0])||""),t=wo(hl(a[1])||""),o=a[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:o}},TS=function(n){const e=Eg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},SS=function(n){const e=Eg(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ns(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fl(n,e,t){const i={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=e.call(t,n[o],o,n));return i}function Xr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],u=e[o];if(Np(a)&&Np(u)){if(!Xr(a,u))return!1}else if(a!==u)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Np(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)i[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)i[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=i[T-3]^i[T-8]^i[T-14]^i[T-16];i[T]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],g,E;for(let T=0;T<80;T++){T<40?T<20?(g=f^a&(u^f),E=1518500249):(g=a^u^f,E=1859775393):T<60?(g=a&u|f&(a|u),E=2400959708):(g=a^u^f,E=3395469782);const b=(o<<5|o>>>27)+g+h+E+i[T]&4294967295;h=f,f=u,u=(a<<30|a>>>2)&4294967295,a=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let o=0;const a=this.buf_;let u=this.inbuf_;for(;o<t;){if(u===0)for(;o<=i;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}else for(;o<t;)if(a[u]=e[o],++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[o]>>a&255,++i;return e}}function bS(n,e){const t=new AS(n,e);return t.subscribe.bind(t)}class AS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");RS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Mc),o.error===void 0&&(o.error=Mc),o.complete===void 0&&(o.complete=Mc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mc(){}function Ml(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);if(o>=55296&&o<=56319){const a=o-55296;i++,z(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;o=65536+(a<<10)+u}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},xl=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){return n.endsWith(".cloudworkstations.dev")}async function wg(n){return(await fetch(n,{credentials:"include"})).ok}class $n{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Qr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DS(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);i===f&&u.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:OS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OS(n){return n===Gr?void 0:n}function DS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new PS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const LS={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},MS=Be.INFO,xS={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},FS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=xS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=MS,this._logHandler=FS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const US=(n,e)=>e.some(t=>n instanceof t);let Pp,Op;function BS(){return Pp||(Pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WS(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tg=new WeakMap,sh=new WeakMap,Sg=new WeakMap,xc=new WeakMap,Lh=new WeakMap;function HS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(pr(n.result)),o()},u=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Tg.set(t,n)}).catch(()=>{}),Lh.set(e,n),e}function VS(n){if(sh.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});sh.set(n,e)}let oh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qS(n){oh=n(oh)}function $S(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fc(this),e,...t);return Sg.set(i,e.sort?e.sort():[e]),pr(i)}:WS().includes(n)?function(...e){return n.apply(Fc(this),e),pr(Tg.get(this))}:function(...e){return pr(n.apply(Fc(this),e))}}function GS(n){return typeof n=="function"?$S(n):(n instanceof IDBTransaction&&VS(n),US(n,BS())?new Proxy(n,oh):n)}function pr(n){if(n instanceof IDBRequest)return HS(n);if(xc.has(n))return xc.get(n);const e=GS(n);return e!==n&&(xc.set(n,e),Lh.set(e,n)),e}const Fc=n=>Lh.get(n);function zS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),f=pr(u);return i&&u.addEventListener("upgradeneeded",h=>{i(pr(u.result),h.oldVersion,h.newVersion,pr(u.transaction),h)}),t&&u.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),f.then(h=>{a&&h.addEventListener("close",()=>a()),o&&h.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const KS=["get","getKey","getAll","getAllKeys","count"],jS=["put","add","delete","clear"],Uc=new Map;function Dp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=jS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||KS.includes(t)))return;const a=async function(u,...f){const h=this.transaction(u,o?"readwrite":"readonly");let g=h.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),o&&h.done]))[0]};return Uc.set(e,a),a}qS(n=>({...n,get:(e,t,i)=>Dp(e,t)||n.get(e,t,i),has:(e,t)=>!!Dp(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(JS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function JS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",kp="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Ul("@firebase/app"),QS="@firebase/app-compat",XS="@firebase/analytics-compat",ZS="@firebase/analytics",eC="@firebase/app-check-compat",tC="@firebase/app-check",nC="@firebase/auth",rC="@firebase/auth-compat",iC="@firebase/database",sC="@firebase/data-connect",oC="@firebase/database-compat",aC="@firebase/functions",lC="@firebase/functions-compat",uC="@firebase/installations",cC="@firebase/installations-compat",hC="@firebase/messaging",fC="@firebase/messaging-compat",dC="@firebase/performance",pC="@firebase/performance-compat",_C="@firebase/remote-config",gC="@firebase/remote-config-compat",mC="@firebase/storage",vC="@firebase/storage-compat",yC="@firebase/firestore",IC="@firebase/vertexai",EC="@firebase/firestore-compat",wC="firebase",TC="11.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="[DEFAULT]",SC={[ah]:"fire-core",[QS]:"fire-core-compat",[ZS]:"fire-analytics",[XS]:"fire-analytics-compat",[tC]:"fire-app-check",[eC]:"fire-app-check-compat",[nC]:"fire-auth",[rC]:"fire-auth-compat",[iC]:"fire-rtdb",[sC]:"fire-data-connect",[oC]:"fire-rtdb-compat",[aC]:"fire-fn",[lC]:"fire-fn-compat",[uC]:"fire-iid",[cC]:"fire-iid-compat",[hC]:"fire-fcm",[fC]:"fire-fcm-compat",[dC]:"fire-perf",[pC]:"fire-perf-compat",[_C]:"fire-rc",[gC]:"fire-rc-compat",[mC]:"fire-gcs",[vC]:"fire-gcs-compat",[yC]:"fire-fst",[EC]:"fire-fst-compat",[IC]:"fire-vertex","fire-js":"fire-js",[wC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map,CC=new Map,uh=new Map;function Lp(n,e){try{n.container.addComponent(e)}catch(t){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mr(n){const e=n.name;if(uh.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,n);for(const t of dl.values())Lp(t,n);for(const t of CC.values())Lp(t,n);return!0}function Mh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function on(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new cs("app","Firebase",bC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=TC;function Cg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw _r.create("bad-app-name",{appName:String(o)});if(t||(t=mg()),!t)throw _r.create("no-options");const a=dl.get(o);if(a){if(Xr(t,a.options)&&Xr(i,a.config))return a;throw _r.create("duplicate-app",{appName:o})}const u=new kS(o);for(const h of uh.values())u.addComponent(h);const f=new AC(t,i,u);return dl.set(o,f),f}function bg(n=lh){const e=dl.get(n);if(!e&&n===lh&&mg())return Cg();if(!e)throw _r.create("no-app",{appName:n});return e}function Vn(n,e,t){var i;let o=(i=SC[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const f=[`Unable to register library "${o}" with version "${e}":`];a&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(f.join(" "));return}mr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="firebase-heartbeat-database",NC=1,To="firebase-heartbeat-store";let Bc=null;function Ag(){return Bc||(Bc=zS(RC,NC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(To)}catch(t){console.warn(t)}}}}).catch(n=>{throw _r.create("idb-open",{originalErrorMessage:n.message})})),Bc}async function PC(n){try{const t=(await Ag()).transaction(To),i=await t.objectStore(To).get(Rg(n));return await t.done,i}catch(e){if(e instanceof Ir)Gn.warn(e.message);else{const t=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(t.message)}}}async function Mp(n,e){try{const i=(await Ag()).transaction(To,"readwrite");await i.objectStore(To).put(e,Rg(n)),await i.done}catch(t){if(t instanceof Ir)Gn.warn(t.message);else{const i=_r.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gn.warn(i.message)}}}function Rg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=1024,DC=30;class kC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MC(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>DC){const u=xC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Gn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xp(),{heartbeatsToSend:i,unsentEntries:o}=LC(this._heartbeatsCache.heartbeats),a=cl(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Gn.warn(t),""}}}function xp(){return new Date().toISOString().substring(0,10)}function LC(n,e=OC){const t=[];let i=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Fp(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fp(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class MC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ig()?yS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fp(n){return cl(JSON.stringify({version:2,heartbeats:n})).length}function xC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n){mr(new $n("platform-logger",e=>new YS(e),"PRIVATE")),mr(new $n("heartbeat",e=>new kC(e),"PRIVATE")),Vn(ah,kp,n),Vn(ah,kp,"esm2017"),Vn("fire-js","")}FC("");var UC="firebase",BC="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(UC,BC,"app");function xh(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Ng(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WC=Ng,Pg=new cs("auth","Firebase",Ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Ul("@firebase/auth");function HC(n,...e){pl.logLevel<=Be.WARN&&pl.warn(`Auth (${fs}): ${n}`,...e)}function il(n,...e){pl.logLevel<=Be.ERROR&&pl.error(`Auth (${fs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n,...e){throw Uh(n,...e)}function cn(n,...e){return Uh(n,...e)}function Fh(n,e,t){const i=Object.assign(Object.assign({},WC()),{[e]:t});return new cs("auth","Firebase",i).create(e,{appName:n.name})}function Yr(n){return Fh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function VC(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&wn(n,"argument-error"),Fh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uh(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pg.create(n,...e)}function fe(n,e,...t){if(!n)throw Uh(e,...t)}function Bn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw il(e),new Error(e)}function zn(n,e){n||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qC(){return Up()==="http:"||Up()==="https:"}function Up(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qC()||gS()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this.shortDelay=e,this.longDelay=t,zn(t>e,"Short delay should be less than long delay!"),this.isMobile=kh()||yg()}get(){return $C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,e){zn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jC=new Do(3e4,6e4);function Wh(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ds(n,e,t,i,o={}){return Dg(n,o,async()=>{let a={},u={};i&&(e==="GET"?u=i:a={body:JSON.stringify(i)});const f=hs(Object.assign({key:n.config.apiKey},u)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:h},a);return _S()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Fl(n.emulatorConfig.host)&&(g.credentials="include"),Og.fetch()(await kg(n,n.config.apiHost,t,f),g)})}async function Dg(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},zC),e);try{const o=new JC(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ja(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const f=a.ok?u.errorMessage:u.error.message,[h,g]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(n,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw ja(n,"email-already-in-use",u);if(h==="USER_DISABLED")throw ja(n,"user-disabled",u);const E=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Fh(n,E,g);wn(n,E)}}catch(o){if(o instanceof Ir)throw o;wn(n,"network-request-failed",{message:String(o)})}}async function YC(n,e,t,i,o={}){const a=await ds(n,e,t,i,o);return"mfaPendingCredential"in a&&wn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function kg(n,e,t,i){const o=`${e}${t}?${i}`,a=n,u=a.config.emulator?Bh(n.config,o):`${n.config.apiScheme}://${o}`;return KC.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class JC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(cn(this.auth,"network-request-failed")),jC.get())})}}function ja(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=cn(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(n,e){return ds(n,"POST","/v1/accounts:delete",e)}async function _l(n,e){return ds(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XC(n,e=!1){const t=Rt(n),i=await t.getIdToken(e),o=Hh(i);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:_o(Wc(o.auth_time)),issuedAtTime:_o(Wc(o.iat)),expirationTime:_o(Wc(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Wc(n){return Number(n)*1e3}function Hh(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const o=hl(t);return o?JSON.parse(o):(il("Failed to decode base64 JWT payload"),null)}catch(o){return il("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Bp(n){const e=Hh(n);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ir&&ZC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ZC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(n){var e;const t=n.auth,i=await n.getIdToken(),o=await So(n,_l(t,{idToken:i}));fe(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Lg(a.providerUserInfo):[],f=nb(n.providerData,u),h=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(f!=null&&f.length),E=h?g:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new hh(a.createdAt,a.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function tb(n){const e=Rt(n);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nb(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Lg(n){return n.map(e=>{var{providerId:t}=e,i=xh(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(n,e){const t=await Dg(n,{},async()=>{const i=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await kg(n,o,"/v1/token",`key=${a}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Og.fetch()(u,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ib(n,e){return ds(n,"POST","/v2/accounts:revokeToken",Wh(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=Bp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await rb(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,u=new Yi;return i&&(fe(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(fe(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(fe(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n,e){fe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=xh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new hh(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await So(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XC(this,e)}reload(){return tb(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await gl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Yr(this.auth));const e=await this.getIdToken();return await So(this,QC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,u,f,h,g,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,b=(o=t.email)!==null&&o!==void 0?o:void 0,O=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,F=(u=t.photoURL)!==null&&u!==void 0?u:void 0,W=(f=t.tenantId)!==null&&f!==void 0?f:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,M=(g=t.createdAt)!==null&&g!==void 0?g:void 0,q=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:ie,isAnonymous:ge,providerData:$e,stsTokenManager:Oe}=t;fe(te&&Oe,e,"internal-error");const Re=Yi.fromJSON(this.name,Oe);fe(typeof te=="string",e,"internal-error"),sr(T,e.name),sr(b,e.name),fe(typeof ie=="boolean",e,"internal-error"),fe(typeof ge=="boolean",e,"internal-error"),sr(O,e.name),sr(F,e.name),sr(W,e.name),sr(D,e.name),sr(M,e.name),sr(q,e.name);const nt=new ln({uid:te,auth:e,email:b,emailVerified:ie,displayName:T,isAnonymous:ge,photoURL:F,phoneNumber:O,tenantId:W,stsTokenManager:Re,createdAt:M,lastLoginAt:q});return $e&&Array.isArray($e)&&(nt.providerData=$e.map(_t=>Object.assign({},_t))),D&&(nt._redirectEventId=D),nt}static async _fromIdTokenResponse(e,t,i=!1){const o=new Yi;o.updateFromServerResponse(t);const a=new ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await gl(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Lg(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),f=new Yi;f.updateFromIdToken(i);const h=new ln({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new hh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,g),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Map;function Wn(n){zn(n instanceof Function,"Expected a class definition");let e=Wp.get(n);return e?(zn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wp.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mg.type="NONE";const Hp=Mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n,e,t){return`firebase:${n}:${e}:${t}`}class Ji{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=sl(this.userKey,o.apiKey,a),this.fullPersistenceKey=sl("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _l(this.auth,{idToken:e}).catch(()=>{});return t?ln._fromGetAccountInfoResponse(this.auth,t,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ji(Wn(Hp),e,i);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=o[0]||Wn(Hp);const u=sl(i,e.config.apiKey,e.name);let f=null;for(const g of t)try{const E=await g._get(u);if(E){let T;if(typeof E=="string"){const b=await _l(e,{idToken:E}).catch(()=>{});if(!b)break;T=await ln._fromGetAccountInfoResponse(e,b,E)}else T=ln._fromJSON(e,E);g!==a&&(f=T),a=g;break}}catch{}const h=o.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new Ji(a,e,i):(a=h[0],f&&await a._set(u,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new Ji(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hg(e))return"Blackberry";if(Vg(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||Ug(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xg(n=At()){return/firefox\//i.test(n)}function Fg(n=At()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ug(n=At()){return/crios\//i.test(n)}function Bg(n=At()){return/iemobile/i.test(n)}function Wg(n=At()){return/android/i.test(n)}function Hg(n=At()){return/blackberry/i.test(n)}function Vg(n=At()){return/webos/i.test(n)}function Vh(n=At()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sb(n=At()){var e;return Vh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ob(){return mS()&&document.documentMode===10}function qg(n=At()){return Vh(n)||Wg(n)||Vg(n)||Hg(n)||/windows phone/i.test(n)||Bg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n,e=[]){let t;switch(n){case"Browser":t=Vp(At());break;case"Worker":t=`${Vp(At())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((u,f)=>{try{const h=e(a);u(h)}catch(h){f(h)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(n,e={}){return ds(n,"GET","/v2/passwordPolicy",Wh(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=6;class cb{constructor(e){var t,i,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:ub,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,u,f;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsLowercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsUppercaseLetter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNumericCharacter)!==null&&u!==void 0?u:!0),h.isValid&&(h.isValid=(f=h.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),h}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wn(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _l(this,{idToken:e}),i=await ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(on(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,h=await this.tryRedirectSignIn(e);(!u||u===f)&&(h!=null&&h.user)&&(o=h.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Yr(this));const t=e?Rt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lb(this),t=new cb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ib(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wn(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[Wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(f,this,"internal-error"),f.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,i,o);return()=>{u=!0,h()}}else{const h=e.addObserver(t);return()=>{u=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&HC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bl(n){return Rt(n)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=bS(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fb(n){qh=n}function db(n){return qh.loadJS(n)}function pb(){return qh.gapiScript}function _b(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n,e){const t=Mh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Xr(a,e??{}))return o;wn(o,"already-initialized")}return t.initialize({options:e})}function mb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Wn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function vb(n,e,t){const i=Bl(n);fe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=Gg(e),{host:u,port:f}=yb(e),h=f===null?"":`:${f}`,g={url:`${a}//${u}${h}/`},E=Object.freeze({host:u,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){fe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),fe(Xr(g,i.config.emulator)&&Xr(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Ib(),Fl(u)&&wg(`${a}//${u}${h}`)}function Gg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yb(n){const e=Gg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:$p(i.substr(a.length+1))}}else{const[a,u]=i.split(":");return{host:a,port:$p(u)}}}function $p(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ib(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,t){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(n,e){return YC(n,"POST","/v1/accounts:signInWithIdp",Wh(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="http://localhost";class Zr extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=xh(t,["providerId","signInMethod"]);if(!i||!o)return null;const u=new Zr(i,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Qi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Qi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qi(e,t)}buildRequest(){const e={requestUri:Eb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ko{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Un.credential(t,i)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ko{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ko{constructor(){super("twitter.com")}static credential(e,t){return Zr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return hr.credential(t,i)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await ln._fromIdTokenResponse(e,i,o),u=Gp(i);return new rs({user:a,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Gp(i);return new rs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Gp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Ir{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new ml(e,t,i,o)}}function Kg(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(n,a,e,i):a})}async function wb(n,e,t=!1){const i=await So(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(n,e,t=!1){const{auth:i}=n;if(on(i.app))return Promise.reject(Yr(i));const o="reauthenticate";try{const a=await So(n,Kg(i,o,e,n),t);fe(a.idToken,i,"internal-error");const u=Hh(a.idToken);fe(u,i,"internal-error");const{sub:f}=u;return fe(n.uid===f,i,"user-mismatch"),rs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&wn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(n,e,t=!1){if(on(n.app))return Promise.reject(Yr(n));const i="signIn",o=await Kg(n,i,e),a=await rs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(n,e){return Rt(n).setPersistence(e)}function bb(n,e,t,i){return Rt(n).onIdTokenChanged(e,t,i)}function Ab(n,e,t){return Rt(n).beforeAuthStateChanged(e,t)}function Rb(n,e,t,i){return Rt(n).onAuthStateChanged(e,t,i)}function Nb(n){return Rt(n).signOut()}const vl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=1e3,Ob=10;class Yg extends jg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},a=this.storage.getItem(i);ob()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Ob):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yg.type="LOCAL";const Db=Yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends jg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jg.type="SESSION";const Gh=Jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Wl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async g=>g(t.origin,a)),h=await kb(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((f,h)=>{const g=zh("",20);o.port1.start();const E=setTimeout(()=>{h(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(E),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(b.data.response);break;default:clearTimeout(E),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function Mb(n){En().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function xb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ub(){return Qg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="firebaseLocalStorageDb",Bb=1,yl="firebaseLocalStorage",Zg="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hl(n,e){return n.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function Wb(){const n=indexedDB.deleteDatabase(Xg);return new Lo(n).toPromise()}function fh(){const n=indexedDB.open(Xg,Bb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(yl,{keyPath:Zg})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(yl)?e(i):(i.close(),await Wb(),e(await fh()))})})}async function zp(n,e,t){const i=Hl(n,!0).put({[Zg]:e,value:t});return new Lo(i).toPromise()}async function Hb(n,e){const t=Hl(n,!1).get(e),i=await new Lo(t).toPromise();return i===void 0?null:i.value}function Kp(n,e){const t=Hl(n,!0).delete(e);return new Lo(t).toPromise()}const Vb=800,qb=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>qb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(Ub()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xb(),!this.activeServiceWorker)return;this.sender=new Lb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fh();return await zp(e,vl,"1"),await Kp(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>zp(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Hb(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Hl(o,!1).getAll();return new Lo(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const $b=em;new Do(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e){return e?Wn(e):(fe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gb(n){return Sb(n.auth,new Kh(n),n.bypassAuthState)}function zb(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),Tb(t,new Kh(n),n.bypassAuthState)}async function Kb(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),wb(t,new Kh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:u,type:f}=e;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gb;case"linkViaPopup":case"linkViaRedirect":return Kb;case"reauthViaPopup":case"reauthViaRedirect":return zb;default:wn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new Do(2e3,1e4);async function Yb(n,e,t){if(on(n.app))return Promise.reject(cn(n,"operation-not-supported-in-this-environment"));const i=Bl(n);VC(n,e,$h);const o=tm(i,t);return new Kr(i,"signInViaPopup",e,o).executeNotNull()}class Kr extends nm{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=zh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jb.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="pendingRedirect",ol=new Map;class Qb extends nm{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const i=await Xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xb(n,e){const t=tA(e),i=eA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function Zb(n,e){ol.set(n._key(),e)}function eA(n){return Wn(n._redirectPersistence)}function tA(n){return sl(Jb,n.config.apiKey,n.name)}async function nA(n,e,t=!1){if(on(n.app))return Promise.reject(Yr(n));const i=Bl(n),o=tm(i,e),u=await new Qb(i,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=10*60*1e3;class iA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!rm(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(cn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rA&&this.cachedEventUids.clear(),this.cachedEventUids.has(jp(e))}saveEventToCache(e){this.cachedEventUids.add(jp(e)),this.lastProcessedEventTime=Date.now()}}function jp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(n,e={}){return ds(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lA=/^https?/;async function uA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await oA(n);for(const t of e)try{if(cA(t))return}catch{}wn(n,"unauthorized-domain")}function cA(n){const e=ch(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!lA.test(t))return!1;if(aA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Do(3e4,6e4);function Yp(){const n=En().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fA(n){return new Promise((e,t)=>{var i,o,a;function u(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),t(cn(n,"network-request-failed"))},timeout:hA.get()})}if(!((o=(i=En().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=En().gapi)===null||a===void 0)&&a.load)u();else{const f=_b("iframefcb");return En()[f]=()=>{gapi.load?u():t(cn(n,"network-request-failed"))},db(`${pb()}?onload=${f}`).catch(h=>t(h))}}).catch(e=>{throw al=null,e})}let al=null;function dA(n){return al=al||fA(n),al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Do(5e3,15e3),_A="__/auth/iframe",gA="emulator/auth/iframe",mA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(n){const e=n.config;fe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bh(e,gA):`https://${n.config.authDomain}/${_A}`,i={apiKey:e.apiKey,appName:n.name,v:fs},o=vA.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${hs(i).slice(1)}`}async function IA(n){const e=await dA(n),t=En().gapi;return fe(t,n,"internal-error"),e.open({where:document.body,url:yA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mA,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const u=cn(n,"network-request-failed"),f=En().setTimeout(()=>{a(u)},pA.get());function h(){En().clearTimeout(f),o(i)}i.ping(h).then(h,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wA=500,TA=600,SA="_blank",CA="http://localhost";class Jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bA(n,e,t,i=wA,o=TA){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h=Object.assign(Object.assign({},EA),{width:i.toString(),height:o.toString(),top:a,left:u}),g=At().toLowerCase();t&&(f=Ug(g)?SA:t),xg(g)&&(e=e||CA,h.scrollbars="yes");const E=Object.entries(h).reduce((b,[O,F])=>`${b}${O}=${F},`,"");if(sb(g)&&f!=="_self")return AA(e||"",f),new Jp(null);const T=window.open(e||"",f,E);fe(T,n,"popup-blocked");try{T.focus()}catch{}return new Jp(T)}function AA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="__/auth/handler",NA="emulator/auth/handler",PA=encodeURIComponent("fac");async function Qp(n,e,t,i,o,a){fe(n.config.authDomain,n,"auth-domain-config-required"),fe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:fs,eventId:o};if(e instanceof $h){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",ih(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))u[E]=T}if(e instanceof ko){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const h=await n._getAppCheckToken(),g=h?`#${PA}=${encodeURIComponent(h)}`:"";return`${OA(n)}?${hs(f).slice(1)}${g}`}function OA({config:n}){return n.emulator?Bh(n,NA):`https://${n.authDomain}/${RA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gh,this._completeRedirectFn=nA,this._overrideRedirectResult=Zb}async _openPopup(e,t,i,o){var a;zn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Qp(e,t,i,ch(),o);return bA(e,u,zh())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await Qp(e,t,i,ch(),o);return Mb(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(zn(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await IA(e),i=new iA(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hc,{type:Hc},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Hc];u!==void 0&&t(!!u),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qg()||Fg()||Vh()}}const kA=DA;var Xp="@firebase/auth",Zp="1.10.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(n){mr(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;fe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$g(n)},g=new hb(i,o,a,h);return mb(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),mr(new $n("auth-internal",e=>{const t=Bl(e.getProvider("auth").getImmediate());return(i=>new LA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(Xp,Zp,MA(n)),Vn(Xp,Zp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=5*60,UA=vg("authIdTokenMaxAge")||FA;let e_=null;const BA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>UA)return;const o=t==null?void 0:t.token;e_!==o&&(e_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function WA(n=bg()){const e=Mh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gb(n,{popupRedirectResolver:kA,persistence:[$b,Db,Gh]}),i=vg("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const u=BA(a.toString());Ab(t,u,()=>u(t.currentUser)),bb(t,f=>u(f))}}const o=gg("auth");return o&&vb(t,`http://${o}`),t}function HA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}fb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=cn("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",HA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");var t_={};const n_="@firebase/database",r_="1.0.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im="";function VA(n){im=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:wo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qA(e)}}catch{}return new $A},jr=sm("localStorage"),GA=sm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Ul("@firebase/database"),zA=function(){let n=1;return function(){return n++}}(),om=function(n){const e=NS(n),t=new CS;t.update(e);const i=t.digest();return Ll.encodeByteArray(i)},Mo=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Mo.apply(null,i):typeof i=="object"?e+=ct(i):e+=i,e+=" "}return e};let go=null,i_=!0;const KA=function(n,e){z(!0,"Can't turn on custom loggers persistently."),Xi.logLevel=Be.VERBOSE,go=Xi.log.bind(Xi)},dt=function(...n){if(i_===!0&&(i_=!1,go===null&&GA.get("logging_enabled")===!0&&KA()),go){const e=Mo.apply(null,n);go(e)}},xo=function(n){return function(...e){dt(n,...e)}},dh=function(...n){const e="FIREBASE INTERNAL ERROR: "+Mo(...n);Xi.error(e)},Kn=function(...n){const e=`FIREBASE FATAL ERROR: ${Mo(...n)}`;throw Xi.error(e),new Error(e)},bt=function(...n){const e="FIREBASE WARNING: "+Mo(...n);Xi.warn(e)},jA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jh=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},YA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},is="[MIN_NAME]",ei="[MAX_NAME]",ii=function(n,e){if(n===e)return 0;if(n===is||e===ei)return-1;if(e===is||n===ei)return 1;{const t=s_(n),i=s_(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},JA=function(n,e){return n===e?0:n<e?-1:1},oo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ct(e))},Yh=function(n){if(typeof n!="object"||n===null)return ct(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ct(e[i]),t+=":",t+=Yh(n[e[i]]);return t+="}",t},am=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let o=0;o<t;o+=e)o+e>t?i.push(n.substring(o,t)):i.push(n.substring(o,o+e));return i};function pt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lm=function(n){z(!jh(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let o,a,u,f,h;n===0?(a=0,u=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),i),a=f+i,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-i-t))));const g=[];for(h=t;h;h-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(h=e;h;h-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(o?1:0),g.reverse();const E=g.join("");let T="";for(h=0;h<64;h+=8){let b=parseInt(E.substr(h,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},QA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ZA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const eR=new RegExp("^-?(0*)\\d{1,10}$"),tR=-2147483648,nR=2147483647,s_=function(n){if(eR.test(n)){const e=Number(n);if(e>=tR&&e<=nR)return e}return null},ps=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw bt("Exception was thrown by user callback.",t),e},Math.floor(0))}},rR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,on(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class ll{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ll.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="5",um="v",cm="s",hm="r",fm="f",dm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pm="ls",_m="p",ph="ac",gm="websocket",mm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,i,o,a=!1,u="",f=!1,h=!1,g=null){this.secure=t,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function oR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ym(n,e,t){z(typeof e=="string","typeof type must == string"),z(typeof t=="object","typeof params must == object");let i;if(e===gm)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===mm)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oR(n)&&(t.ns=n.namespace);const o=[];return pt(t,(a,u)=>{o.push(a+"="+u)}),i+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.counters_={}}incrementCounter(e,t=1){Tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return aS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={},qc={};function Qh(n){const e=n.toString();return Vc[e]||(Vc[e]=new aR),Vc[e]}function lR(n,e){const t=n.toString();return qc[t]||(qc[t]=e()),qc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&ps(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="start",cR="close",hR="pLPCommand",fR="pRTLPCB",Im="id",Em="pw",wm="ser",dR="cb",pR="seg",_R="ts",gR="d",mR="dframe",Tm=1870,Sm=30,vR=Tm-Sm,yR=25e3,IR=3e4;class ji{constructor(e,t,i,o,a,u,f){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xo(e),this.stats_=Qh(t),this.urlFn=h=>(this.appCheckToken&&(h[ph]=this.appCheckToken),ym(t,mm,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IR)),YA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xh((...a)=>{const[u,f,h,g,E]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===o_)this.id=f,this.password=h;else if(u===cR)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[o_]="t",i[wm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[dR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[um]=Jh,this.transportSessionId&&(i[cm]=this.transportSessionId),this.lastSessionId&&(i[pm]=this.lastSessionId),this.applicationId&&(i[_m]=this.applicationId),this.appCheckToken&&(i[ph]=this.appCheckToken),typeof location<"u"&&location.hostname&&dm.test(location.hostname)&&(i[hm]=fm);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ji.forceAllow_=!0}static forceDisallow(){ji.forceDisallow_=!0}static isAvailable(){return ji.forceAllow_?!0:!ji.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QA()&&!XA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=pg(t),o=am(i,vR);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[mR]="t",i[Im]=e,i[Em]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xh{constructor(e,t,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zA(),window[hR+this.uniqueCallbackIdentifier]=e,window[fR+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xh.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){dt("frame writing exception"),f.stack&&dt(f.stack),dt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Im]=this.myID,e[Em]=this.myPW,e[wm]=this.currentSerial;let t=this.urlFn(e),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sm+i.length<=Tm;){const u=this.pendingSegs.shift();i=i+"&"+pR+o+"="+u.seg+"&"+_R+o+"="+u.ts+"&"+gR+o+"="+u.d,o++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(i,Math.floor(yR)),a=()=>{clearTimeout(o),i()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=16384,wR=45e3;let Il=null;typeof MozWebSocket<"u"?Il=MozWebSocket:typeof WebSocket<"u"&&(Il=WebSocket);class an{constructor(e,t,i,o,a,u,f){this.connId=e,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xo(this.connId),this.stats_=Qh(t),this.connURL=an.connectionURL_(t,u,f,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,o,a){const u={};return u[um]=Jh,typeof location<"u"&&location.hostname&&dm.test(location.hostname)&&(u[hm]=fm),t&&(u[cm]=t),i&&(u[pm]=i),o&&(u[ph]=o),a&&(u[_m]=a),ym(e,gm,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jr.set("previous_websocket_failure",!0);try{let i;vS(),this.mySock=new Il(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Il!==null&&!an.forceDisallow_}static previouslyFailed(){return jr.isInMemoryStorage||jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=wo(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=am(t,ER);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{static get ALL_TRANSPORTS(){return[ji,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=an&&an.isAvailable();let i=t&&!an.previouslyFailed();if(e.webSocketOnly&&(t||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[an];else{const o=this.transports_=[];for(const a of Co.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=6e4,SR=5e3,CR=10*1024,bR=100*1024,$c="t",a_="d",AR="s",l_="r",RR="e",u_="o",c_="a",h_="n",f_="p",NR="h";class PR{constructor(e,t,i,o,a,u,f,h,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xo("c:"+this.id+":"),this.transportManager_=new Co(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($c in e){const t=e[$c];t===c_?this.upgradeIfSecondaryHealthy_():t===l_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===u_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=oo("t",e),i=oo("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:f_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:c_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:h_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=oo("t",e),i=oo("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=oo($c,e);if(a_ in e){const i=e[a_];if(t===NR){const o=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===h_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===AR?this.onConnectionShutdown_(i):t===l_?this.onReset_(i):t===RR?dh("Server Error: "+i):t===u_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Jh!==i&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:f_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{put(e,t,i,o){}merge(e,t,i,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const o=this.getInitialEvent(e);o&&t.apply(i,o)}off(e,t,i){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!i||i===o[a].context)){o.splice(a,1);return}}validateEventType_(e){z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends bm{static getInstance(){return new El}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=32,p_=768;class We{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Pe(){return new We("")}function we(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function vr(n){return n.pieces_.length-n.pieceNum_}function qe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new We(n.pieces_,e)}function Zh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function OR(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Am(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new We(e,0)}function Ye(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof We)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&t.push(i[o])}return new We(t,0)}function Ce(n){return n.pieceNum_>=n.pieces_.length}function Lt(n,e){const t=we(n),i=we(e);if(t===null)return e;if(t===i)return Lt(qe(n),qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function DR(n,e){const t=bo(n,0),i=bo(e,0);for(let o=0;o<t.length&&o<i.length;o++){const a=ii(t[o],i[o]);if(a!==0)return a}return t.length===i.length?0:t.length<i.length?-1:1}function ef(n,e){if(vr(n)!==vr(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Zt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(vr(n)>vr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class kR{constructor(e,t){this.errorPrefix_=t,this.parts_=bo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=xl(this.parts_[i]);Rm(this)}}function LR(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=xl(e),Rm(n)}function MR(n){const e=n.parts_.pop();n.byteLength_-=xl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Rm(n){if(n.byteLength_>p_)throw new Error(n.errorPrefix_+"has a key path longer than "+p_+" bytes ("+n.byteLength_+").");if(n.parts_.length>d_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d_+") or object contains a cycle "+zr(n))}function zr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends bm{static getInstance(){return new tf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1e3,xR=60*5*1e3,__=30*1e3,FR=1.3,UR=3e4,BR="server_kill",g_=3;class qn extends Cm{constructor(e,t,i,o,a,u,f,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=qn.nextPersistentConnectionId_++,this.log_=xo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=xR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(ct(a)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[o]=i)}get(e){this.initConnection_();const t=new Qr,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,i,o){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:t,query:e,tag:i};this.listens.get(u).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+i+" for "+o);const a={p:i},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,f=>{const h=f.d,g=f.s;qn.warnOnListenWarnings_(h,t),(this.listens.get(i)&&this.listens.get(i).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(i,o),e.onComplete&&e.onComplete(g,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Tn(e,"w")){const i=ns(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=__)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=TS(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,o=>{const a=o.s,u=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,e._queryObject,t)}sendUnlisten_(e,t,i,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";o&&(a.q=i,a.t=o),this.sendRequest(u,a)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,o){const a={p:t,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,t,i,o){this.putInternal("p",e,t,i,o)}merge(e,t,i,o){this.putInternal("m",e,t,i,o)}putInternal(e,t,i,o,a){this.initConnection_();const u={p:t,d:i};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):dh("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UR&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+qn.nextConnectionId_++,a=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,i())},g=function(T){z(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(T)};this.realtime_={close:h,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);u?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,f=new PR(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,O=>{bt(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(BR)},a))}catch(T){this.log_("Failed to get token: "+T),u||(this.repoInfo_.nodeAdmin&&bt(T),h())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ih(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(a=>Yh(a)).join("$"):i="default";const o=this.removeListen_(e,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const i=new We(e).toString();let o;if(this.listens.has(i)){const a=this.listens.get(i);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(e,t){dt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=g_&&(this.reconnectDelay_=__,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){dt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=g_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+im.replace(/\./g,"-")]=1,kh()?e["framework.cordova"]=1:yg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return ih(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Te(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Te(is,e),o=new Te(is,t);return this.compare(i,o)!==0}minPost(){return Te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;class Nm extends Vl{static get __EMPTY_NODE(){return Ya}static set __EMPTY_NODE(e){Ya=e}compare(e,t){return ii(e.name,t.name)}isDefinedOn(e){throw us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Te.MIN}maxPost(){return new Te(ei,Ya)}makePost(e,t){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,Ya)}toString(){return".key"}}const Zi=new Nm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??lt.RED,this.left=o??Mt.EMPTY_NODE,this.right=a??Mt.EMPTY_NODE}copy(e,t,i,o,a){return new lt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,o;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Mt.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class WR{copy(e,t,i,o,a){return this}insert(e,t,i){return new lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,t=Mt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Mt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,o=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ja(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ja(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ja(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ja(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new WR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(n,e){return ii(n.name,e.name)}function nf(n,e){return ii(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;function VR(n){_h=n}const Pm=function(n){return typeof n=="number"?"number:"+lm(n):"string:"+n},Om=function(n){if(n.isLeafNode()){const e=n.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tn(e,".sv"),"Priority must be a string or number.")}else z(n===_h||n.isEmpty(),"priority of unexpected type.");z(n===_h||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m_;class at{static set __childrenNodeConstructor(e){m_=e}static get __childrenNodeConstructor(){return m_}constructor(e,t=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Om(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:we(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=we(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(z(i!==".priority"||vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lm(this.value_):e+=this.value_,this.lazyHash_=om(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,o=at.VALUE_TYPE_ORDER.indexOf(t),a=at.VALUE_TYPE_ORDER.indexOf(i);return z(o>=0,"Unknown leaf type: "+t),z(a>=0,"Unknown leaf type: "+i),o===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dm,km;function qR(n){Dm=n}function $R(n){km=n}class GR extends Vl{compare(e,t){const i=e.node.getPriority(),o=t.node.getPriority(),a=i.compareTo(o);return a===0?ii(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(ei,new at("[PRIORITY-POST]",km))}makePost(e,t){const i=Dm(e);return new Te(t,new at("[PRIORITY-POST]",i))}toString(){return".priority"}}const Je=new GR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=Math.log(2);class KR{constructor(e){const t=a=>parseInt(Math.log(a)/zR,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=i(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wl=function(n,e,t,i){n.sort(e);const o=function(h,g){const E=g-h;let T,b;if(E===0)return null;if(E===1)return T=n[h],b=t?t(T):T,new lt(b,T.node,lt.BLACK,null,null);{const O=parseInt(E/2,10)+h,F=o(h,O),W=o(O+1,g);return T=n[O],b=t?t(T):T,new lt(b,T.node,lt.BLACK,F,W)}},a=function(h){let g=null,E=null,T=n.length;const b=function(F,W){const D=T-F,M=T;T-=F;const q=o(D+1,M),te=n[D],ie=t?t(te):te;O(new lt(ie,te.node,W,null,q))},O=function(F){g?(g.left=F,g=F):(E=F,g=F)};for(let F=0;F<h.count;++F){const W=h.nextBitIsOne(),D=Math.pow(2,h.count-(F+1));W?b(D,lt.BLACK):(b(D,lt.BLACK),b(D,lt.RED))}return E},u=new KR(n.length),f=a(u);return new Mt(i||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;const Wi={};class Hn{static get Default(){return z(Wi&&Je,"ChildrenNode.ts has not been loaded"),Gc=Gc||new Hn({".priority":Wi},{".priority":Je}),Gc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ns(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Mt?t:null}hasIndex(e){return Tn(this.indexSet_,e.toString())}addIndex(e,t){z(e!==Zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const a=t.getIterator(Te.Wrap);let u=a.getNext();for(;u;)o=o||e.isDefinedOn(u.node),i.push(u),u=a.getNext();let f;o?f=wl(i,e.getCompare()):f=Wi;const h=e.toString(),g=Object.assign({},this.indexSet_);g[h]=e;const E=Object.assign({},this.indexes_);return E[h]=f,new Hn(E,g)}addToIndexes(e,t){const i=fl(this.indexes_,(o,a)=>{const u=ns(this.indexSet_,a);if(z(u,"Missing index implementation for "+a),o===Wi)if(u.isDefinedOn(e.node)){const f=[],h=t.getIterator(Te.Wrap);let g=h.getNext();for(;g;)g.name!==e.name&&f.push(g),g=h.getNext();return f.push(e),wl(f,u.getCompare())}else return Wi;else{const f=t.get(e.name);let h=o;return f&&(h=h.remove(new Te(e.name,f))),h.insert(e,e.node)}});return new Hn(i,this.indexSet_)}removeFromIndexes(e,t){const i=fl(this.indexes_,o=>{if(o===Wi)return o;{const a=t.get(e.name);return a?o.remove(new Te(e.name,a)):o}});return new Hn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;class he{static get EMPTY_NODE(){return lo||(lo=new he(new Mt(nf),null,Hn.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Om(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?lo:t}}getChild(e){const t=we(e);return t===null?this:this.getImmediateChild(t).getChild(qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Te(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?lo:this.priorityNode_;return new he(o,u,a)}}updateChild(e,t){const i=we(e);if(i===null)return t;{z(we(e)!==".priority"||vr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(qe(e),t);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,o=0,a=!0;if(this.forEachChild(Je,(u,f)=>{t[u]=f.val(e),i++,a&&he.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):a=!1}),!e&&a&&o<2*i){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pm(this.getPriority().val())+":"),this.forEachChild(Je,(t,i)=>{const o=i.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":om(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const o=this.resolveIndex_(i);if(o){const a=o.getPredecessorKey(new Te(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Te(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Te(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,Te.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fo?-1:0}withIndex(e){if(e===Zi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Je),o=t.getIterator(Je);let a=i.getNext(),u=o.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=i.getNext(),u=o.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Zi?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jR extends he{constructor(){super(new Mt(nf),he.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const Fo=new jR;Object.defineProperties(Te,{MIN:{value:new Te(is,he.EMPTY_NODE)},MAX:{value:new Te(ei,Fo)}});Nm.__EMPTY_NODE=he.EMPTY_NODE;at.__childrenNodeConstructor=he;VR(Fo);$R(Fo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=!0;function ut(n,e=null){if(n===null)return he.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new at(t,ut(e))}if(!(n instanceof Array)&&YR){const t=[];let i=!1;if(pt(n,(u,f)=>{if(u.substring(0,1)!=="."){const h=ut(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),t.push(new Te(u,h)))}}),t.length===0)return he.EMPTY_NODE;const a=wl(t,HR,u=>u.name,nf);if(i){const u=wl(t,Je.getCompare());return new he(a,ut(e),new Hn({".priority":u},{".priority":Je}))}else return new he(a,ut(e),Hn.Default)}else{let t=he.EMPTY_NODE;return pt(n,(i,o)=>{if(Tn(n,i)&&i.substring(0,1)!=="."){const a=ut(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(i,a))}}),t.updatePriority(ut(e))}}qR(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR extends Vl{constructor(e){super(),this.indexPath_=e,z(!Ce(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),o=this.extractChild(t.node),a=i.compareTo(o);return a===0?ii(e.name,t.name):a}makePost(e,t){const i=ut(e),o=he.EMPTY_NODE.updateChild(this.indexPath_,i);return new Te(t,o)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,Fo);return new Te(ei,e)}toString(){return bo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR extends Vl{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ii(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,t){const i=ut(e);return new Te(t,i)}toString(){return".value"}}const XR=new QR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){return{type:"value",snapshotNode:n}}function ss(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ao(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ro(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ZR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.index_=e}updateChild(e,t,i,o,a,u){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(t)?u.trackChildChange(Ao(t,f)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(ss(t,i)):u.trackChildChange(Ro(t,i,f))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Je,(o,a)=>{t.hasChild(o)||i.trackChildChange(Ao(o,a))}),t.isLeafNode()||t.forEachChild(Je,(o,a)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(a)||i.trackChildChange(Ro(o,a,u))}else i.trackChildChange(ss(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?he.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.indexedFilter_=new rf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=No.getStartPost_(e),this.endPost_=No.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,o,a,u){return this.matches(new Te(t,i))||(i=he.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,o,a,u)}updateFullNode(e,t,i){t.isLeafNode()&&(t=he.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(he.EMPTY_NODE);const a=this;return t.forEachChild(Je,(u,f)=>{a.matches(new Te(u,f))||(o=o.updateImmediateChild(u,he.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new No(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,o,a,u){return this.rangedFilter_.matches(new Te(t,i))||(i=he.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,o,a,u):this.fullLimitUpdateChild_(e,t,i,a,u)}updateFullNode(e,t,i){let o;if(t.isLeafNode()||t.isEmpty())o=he.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=he.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(he.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let u=0;for(;a.hasNext();){const f=a.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,he.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,o,a){let u;if(this.reverse_){const T=this.index_.getCompare();u=(b,O)=>T(O,b)}else u=this.index_.getCompare();const f=e;z(f.numChildren()===this.limit_,"");const h=new Te(t,i),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(h);if(f.hasChild(t)){const T=f.getImmediateChild(t);let b=o.getChildAfterChild(this.index_,g,this.reverse_);for(;b!=null&&(b.name===t||f.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const O=b==null?1:u(b,h);if(E&&!i.isEmpty()&&O>=0)return a!=null&&a.trackChildChange(Ro(t,i,T)),f.updateImmediateChild(t,i);{a!=null&&a.trackChildChange(Ao(t,T));const W=f.updateImmediateChild(t,he.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(a!=null&&a.trackChildChange(ss(b.name,b.node)),W.updateImmediateChild(b.name,b.node)):W}}else return i.isEmpty()?e:E&&u(g,h)>=0?(a!=null&&(a.trackChildChange(Ao(g.name,g.node)),a.trackChildChange(ss(t,i))),f.updateImmediateChild(t,i).updateImmediateChild(g.name,he.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:is}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new sf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function t1(n){return n.loadsAllData()?new rf(n.getIndex()):n.hasLimit()?new e1(n):new No(n)}function v_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Je?t="$priority":n.index_===XR?t="$value":n.index_===Zi?t="$key":(z(n.index_ instanceof JR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ct(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ct(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ct(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ct(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function y_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Je&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Cm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=xo("p:rest:"),this.listens_={}}listen(e,t,i,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Tl.getListenId_(e,i),f={};this.listens_[u]=f;const h=v_(e._queryParams);this.restRequest_(a+".json",h,(g,E)=>{let T=E;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(a,T,!1,i),ns(this.listens_,u)===f){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",o(b,null)}})}unlisten(e,t){const i=Tl.getListenId_(e,t);delete this.listens_[i]}get(e){const t=v_(e._queryParams),i=e._path.toString(),o=new Qr;return this.restRequest_(i+".json",t,(a,u)=>{let f=u;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hs(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=wo(f.responseText)}catch{bt("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&bt("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return{value:null,children:new Map}}function Mm(n,e,t){if(Ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=we(e);n.children.has(i)||n.children.set(i,Sl());const o=n.children.get(i);e=qe(e),Mm(o,e,t)}}function gh(n,e,t){n.value!==null?t(e,n.value):r1(n,(i,o)=>{const a=new We(e.toString()+"/"+i);gh(o,a,t)})}function r1(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&pt(this.last_,(i,o)=>{t[i]=t[i]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=10*1e3,s1=30*1e3,o1=5*60*1e3;class a1{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new i1(e);const i=I_+(s1-I_)*Math.random();mo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;pt(e,(o,a)=>{a>0&&Tn(this.statsToReport_,o)&&(t[o]=a,i=!0)}),i&&this.server_.reportStats(t),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*o1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function of(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function af(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=un.ACK_USER_WRITE,this.source=of()}operationForChild(e){if(Ce(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new We(e));return new Cl(Pe(),t,this.revert)}}else return z(we(this.path)===e,"operationForChild called for unrelated child."),new Cl(qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.source=e,this.path=t,this.type=un.LISTEN_COMPLETE}operationForChild(e){return Ce(this.path)?new Po(this.source,Pe()):new Po(this.source,qe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=un.OVERWRITE}operationForChild(e){return Ce(this.path)?new ti(this.source,Pe(),this.snap.getImmediateChild(e)):new ti(this.source,qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=un.MERGE}operationForChild(e){if(Ce(this.path)){const t=this.children.subtree(new We(e));return t.isEmpty()?null:t.value?new ti(this.source,Pe(),t.value):new os(this.source,Pe(),t)}else return z(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=we(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function u1(n,e,t,i){const o=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(ZR(u.childName,u.snapshotNode))}),uo(n,o,"child_removed",e,i,t),uo(n,o,"child_added",e,i,t),uo(n,o,"child_moved",a,i,t),uo(n,o,"child_changed",e,i,t),uo(n,o,"value",e,i,t),o}function uo(n,e,t,i,o,a){const u=i.filter(f=>f.type===t);u.sort((f,h)=>h1(n,f,h)),u.forEach(f=>{const h=c1(n,f,a);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(h,n.query_))})})}function c1(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function h1(n,e,t){if(e.childName==null||t.childName==null)throw us("Should only compare child_ events.");const i=new Te(e.childName,e.snapshotNode),o=new Te(t.childName,t.snapshotNode);return n.index_.compare(i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n,e){return{eventCache:n,serverCache:e}}function vo(n,e,t,i){return ql(new ni(e,t,i),n.serverCache)}function xm(n,e,t,i){return ql(n.eventCache,new ni(e,t,i))}function mh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ri(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;const f1=()=>(zc||(zc=new Mt(JA)),zc);class Ve{static fromObject(e){let t=new Ve(null);return pt(e,(i,o)=>{t=t.set(new We(i),o)}),t}constructor(e,t=f1()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Pe(),value:this.value};if(Ce(e))return null;{const i=we(e),o=this.children.get(i);if(o!==null){const a=o.findRootMostMatchingPathAndValue(qe(e),t);return a!=null?{path:Ye(new We(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ce(e))return this;{const t=we(e),i=this.children.get(t);return i!==null?i.subtree(qe(e)):new Ve(null)}}set(e,t){if(Ce(e))return new Ve(t,this.children);{const i=we(e),a=(this.children.get(i)||new Ve(null)).set(qe(e),t),u=this.children.insert(i,a);return new Ve(this.value,u)}}remove(e){if(Ce(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const t=we(e),i=this.children.get(t);if(i){const o=i.remove(qe(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new Ve(null):new Ve(this.value,a)}else return this}}get(e){if(Ce(e))return this.value;{const t=we(e),i=this.children.get(t);return i?i.get(qe(e)):null}}setTree(e,t){if(Ce(e))return t;{const i=we(e),a=(this.children.get(i)||new Ve(null)).setTree(qe(e),t);let u;return a.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,a),new Ve(this.value,u)}}fold(e){return this.fold_(Pe(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((o,a)=>{i[o]=a.fold_(Ye(e,o),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Pe(),t)}findOnPath_(e,t,i){const o=this.value?i(t,this.value):!1;if(o)return o;if(Ce(e))return null;{const a=we(e),u=this.children.get(a);return u?u.findOnPath_(qe(e),Ye(t,a),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Pe(),t)}foreachOnPath_(e,t,i){if(Ce(e))return this;{this.value&&i(t,this.value);const o=we(e),a=this.children.get(o);return a?a.foreachOnPath_(qe(e),Ye(t,o),i):new Ve(null)}}foreach(e){this.foreach_(Pe(),e)}foreach_(e,t){this.children.inorderTraversal((i,o)=>{o.foreach_(Ye(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new Ve(null))}}function yo(n,e,t){if(Ce(e))return new hn(new Ve(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const o=i.path;let a=i.value;const u=Lt(o,e);return a=a.updateChild(u,t),new hn(n.writeTree_.set(o,a))}else{const o=new Ve(t),a=n.writeTree_.setTree(e,o);return new hn(a)}}}function vh(n,e,t){let i=n;return pt(t,(o,a)=>{i=yo(i,Ye(e,o),a)}),i}function E_(n,e){if(Ce(e))return hn.empty();{const t=n.writeTree_.setTree(e,new Ve(null));return new hn(t)}}function yh(n,e){return si(n,e)!=null}function si(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Lt(t.path,e)):null}function w_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Je,(i,o)=>{e.push(new Te(i,o))}):n.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&e.push(new Te(i,o.value))}),e}function gr(n,e){if(Ce(e))return n;{const t=si(n,e);return t!=null?new hn(new Ve(t)):new hn(n.writeTree_.subtree(e))}}function Ih(n){return n.writeTree_.isEmpty()}function as(n,e){return Fm(Pe(),n.writeTree_,e)}function Fm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(z(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):t=Fm(Ye(n,o),a,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ye(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n,e){return Hm(e,n)}function d1(n,e,t,i,o){z(i>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:o}),o&&(n.visibleWrites=yo(n.visibleWrites,e,t)),n.lastWriteId=i}function p1(n,e,t,i){z(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=vh(n.visibleWrites,e,t),n.lastWriteId=i}function _1(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function g1(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);z(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let o=i.visible,a=!1,u=n.allWrites.length-1;for(;o&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&m1(f,i.path)?o=!1:Zt(i.path,f.path)&&(a=!0)),u--}if(o){if(a)return v1(n),!0;if(i.snap)n.visibleWrites=E_(n.visibleWrites,i.path);else{const f=i.children;pt(f,h=>{n.visibleWrites=E_(n.visibleWrites,Ye(i.path,h))})}return!0}else return!1}function m1(n,e){if(n.snap)return Zt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Zt(Ye(n.path,t),e))return!0;return!1}function v1(n){n.visibleWrites=Um(n.allWrites,y1,Pe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function y1(n){return n.visible}function Um(n,e,t){let i=hn.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const u=a.path;let f;if(a.snap)Zt(t,u)?(f=Lt(t,u),i=yo(i,f,a.snap)):Zt(u,t)&&(f=Lt(u,t),i=yo(i,Pe(),a.snap.getChild(f)));else if(a.children){if(Zt(t,u))f=Lt(t,u),i=vh(i,f,a.children);else if(Zt(u,t))if(f=Lt(u,t),Ce(f))i=vh(i,Pe(),a.children);else{const h=ns(a.children,we(f));if(h){const g=h.getChild(qe(f));i=yo(i,Pe(),g)}}}else throw us("WriteRecord should have .snap or .children")}}return i}function Bm(n,e,t,i,o){if(!i&&!o){const a=si(n.visibleWrites,e);if(a!=null)return a;{const u=gr(n.visibleWrites,e);if(Ih(u))return t;if(t==null&&!yh(u,Pe()))return null;{const f=t||he.EMPTY_NODE;return as(u,f)}}}else{const a=gr(n.visibleWrites,e);if(!o&&Ih(a))return t;if(!o&&t==null&&!yh(a,Pe()))return null;{const u=function(g){return(g.visible||o)&&(!i||!~i.indexOf(g.writeId))&&(Zt(g.path,e)||Zt(e,g.path))},f=Um(n.allWrites,u,e),h=t||he.EMPTY_NODE;return as(f,h)}}}function I1(n,e,t){let i=he.EMPTY_NODE;const o=si(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Je,(a,u)=>{i=i.updateImmediateChild(a,u)}),i;if(t){const a=gr(n.visibleWrites,e);return t.forEachChild(Je,(u,f)=>{const h=as(gr(a,new We(u)),f);i=i.updateImmediateChild(u,h)}),w_(a).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const a=gr(n.visibleWrites,e);return w_(a).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function E1(n,e,t,i,o){z(i||o,"Either existingEventSnap or existingServerSnap must exist");const a=Ye(e,t);if(yh(n.visibleWrites,a))return null;{const u=gr(n.visibleWrites,a);return Ih(u)?o.getChild(t):as(u,o.getChild(t))}}function w1(n,e,t,i){const o=Ye(e,t),a=si(n.visibleWrites,o);if(a!=null)return a;if(i.isCompleteForChild(t)){const u=gr(n.visibleWrites,o);return as(u,i.getNode().getImmediateChild(t))}else return null}function T1(n,e){return si(n.visibleWrites,e)}function S1(n,e,t,i,o,a,u){let f;const h=gr(n.visibleWrites,e),g=si(h,Pe());if(g!=null)f=g;else if(t!=null)f=as(h,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const E=[],T=u.getCompare(),b=a?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let O=b.getNext();for(;O&&E.length<o;)T(O,i)!==0&&E.push(O),O=b.getNext();return E}else return[]}function C1(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function bl(n,e,t,i){return Bm(n.writeTree,n.treePath,e,t,i)}function cf(n,e){return I1(n.writeTree,n.treePath,e)}function T_(n,e,t,i){return E1(n.writeTree,n.treePath,e,t,i)}function Al(n,e){return T1(n.writeTree,Ye(n.treePath,e))}function b1(n,e,t,i,o,a){return S1(n.writeTree,n.treePath,e,t,i,o,a)}function hf(n,e,t){return w1(n.writeTree,n.treePath,e,t)}function Wm(n,e){return Hm(Ye(n.treePath,e),n.writeTree)}function Hm(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),z(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(i,Ro(i,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(i,Ao(i,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(i,ss(i,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(i,Ro(i,e.snapshotNode,o.oldSnap));else throw us("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Vm=new R1;class ff{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hf(this.writes_,e,i)}}getChildAfterChild(e,t,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ri(this.viewCache_),a=b1(this.writes_,o,t,1,i,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){return{filter:n}}function P1(n,e){z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function O1(n,e,t,i,o){const a=new A1;let u,f;if(t.type===un.OVERWRITE){const g=t;g.source.fromUser?u=Eh(n,e,g.path,g.snap,i,o,a):(z(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Ce(g.path),u=Rl(n,e,g.path,g.snap,i,o,f,a))}else if(t.type===un.MERGE){const g=t;g.source.fromUser?u=k1(n,e,g.path,g.children,i,o,a):(z(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=wh(n,e,g.path,g.children,i,o,f,a))}else if(t.type===un.ACK_USER_WRITE){const g=t;g.revert?u=x1(n,e,g.path,i,o,a):u=L1(n,e,g.path,g.affectedTree,i,o,a)}else if(t.type===un.LISTEN_COMPLETE)u=M1(n,e,t.path,i,a);else throw us("Unknown operation type: "+t.type);const h=a.getChanges();return D1(e,u,h),{viewCache:u,changes:h}}function D1(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=mh(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&t.push(Lm(mh(e)))}}function qm(n,e,t,i,o,a){const u=e.eventCache;if(Al(i,t)!=null)return e;{let f,h;if(Ce(t))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ri(e),E=g instanceof he?g:he.EMPTY_NODE,T=cf(i,E);f=n.filter.updateFullNode(e.eventCache.getNode(),T,a)}else{const g=bl(i,ri(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=we(t);if(g===".priority"){z(vr(t)===1,"Can't have a priority with additional path components");const E=u.getNode();h=e.serverCache.getNode();const T=T_(i,t,E,h);T!=null?f=n.filter.updatePriority(E,T):f=u.getNode()}else{const E=qe(t);let T;if(u.isCompleteForChild(g)){h=e.serverCache.getNode();const b=T_(i,t,u.getNode(),h);b!=null?T=u.getNode().getImmediateChild(g).updateChild(E,b):T=u.getNode().getImmediateChild(g)}else T=hf(i,g,e.serverCache);T!=null?f=n.filter.updateChild(u.getNode(),g,T,E,o,a):f=u.getNode()}}return vo(e,f,u.isFullyInitialized()||Ce(t),n.filter.filtersNodes())}}function Rl(n,e,t,i,o,a,u,f){const h=e.serverCache;let g;const E=u?n.filter:n.filter.getIndexedFilter();if(Ce(t))g=E.updateFullNode(h.getNode(),i,null);else if(E.filtersNodes()&&!h.isFiltered()){const O=h.getNode().updateChild(t,i);g=E.updateFullNode(h.getNode(),O,null)}else{const O=we(t);if(!h.isCompleteForPath(t)&&vr(t)>1)return e;const F=qe(t),D=h.getNode().getImmediateChild(O).updateChild(F,i);O===".priority"?g=E.updatePriority(h.getNode(),D):g=E.updateChild(h.getNode(),O,D,F,Vm,null)}const T=xm(e,g,h.isFullyInitialized()||Ce(t),E.filtersNodes()),b=new ff(o,T,a);return qm(n,T,t,o,b,f)}function Eh(n,e,t,i,o,a,u){const f=e.eventCache;let h,g;const E=new ff(o,e,a);if(Ce(t))g=n.filter.updateFullNode(e.eventCache.getNode(),i,u),h=vo(e,g,!0,n.filter.filtersNodes());else{const T=we(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),i),h=vo(e,g,f.isFullyInitialized(),f.isFiltered());else{const b=qe(t),O=f.getNode().getImmediateChild(T);let F;if(Ce(b))F=i;else{const W=E.getCompleteChild(T);W!=null?Zh(b)===".priority"&&W.getChild(Am(b)).isEmpty()?F=W:F=W.updateChild(b,i):F=he.EMPTY_NODE}if(O.equals(F))h=e;else{const W=n.filter.updateChild(f.getNode(),T,F,b,E,u);h=vo(e,W,f.isFullyInitialized(),n.filter.filtersNodes())}}}return h}function S_(n,e){return n.eventCache.isCompleteForChild(e)}function k1(n,e,t,i,o,a,u){let f=e;return i.foreach((h,g)=>{const E=Ye(t,h);S_(e,we(E))&&(f=Eh(n,f,E,g,o,a,u))}),i.foreach((h,g)=>{const E=Ye(t,h);S_(e,we(E))||(f=Eh(n,f,E,g,o,a,u))}),f}function C_(n,e,t){return t.foreach((i,o)=>{e=e.updateChild(i,o)}),e}function wh(n,e,t,i,o,a,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,g;Ce(t)?g=i:g=new Ve(null).setTree(t,i);const E=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(E.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),F=C_(n,O,b);h=Rl(n,h,new We(T),F,o,a,u,f)}}),g.children.inorderTraversal((T,b)=>{const O=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!E.hasChild(T)&&!O){const F=e.serverCache.getNode().getImmediateChild(T),W=C_(n,F,b);h=Rl(n,h,new We(T),W,o,a,u,f)}}),h}function L1(n,e,t,i,o,a,u){if(Al(o,t)!=null)return e;const f=e.serverCache.isFiltered(),h=e.serverCache;if(i.value!=null){if(Ce(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return Rl(n,e,t,h.getNode().getChild(t),o,a,f,u);if(Ce(t)){let g=new Ve(null);return h.getNode().forEachChild(Zi,(E,T)=>{g=g.set(new We(E),T)}),wh(n,e,t,g,o,a,f,u)}else return e}else{let g=new Ve(null);return i.foreach((E,T)=>{const b=Ye(t,E);h.isCompleteForPath(b)&&(g=g.set(E,h.getNode().getChild(b)))}),wh(n,e,t,g,o,a,f,u)}}function M1(n,e,t,i,o){const a=e.serverCache,u=xm(e,a.getNode(),a.isFullyInitialized()||Ce(t),a.isFiltered());return qm(n,u,t,i,Vm,o)}function x1(n,e,t,i,o,a){let u;if(Al(i,t)!=null)return e;{const f=new ff(i,e,o),h=e.eventCache.getNode();let g;if(Ce(t)||we(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=bl(i,ri(e));else{const T=e.serverCache.getNode();z(T instanceof he,"serverChildren would be complete if leaf node"),E=cf(i,T)}E=E,g=n.filter.updateFullNode(h,E,a)}else{const E=we(t);let T=hf(i,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=h.getImmediateChild(E)),T!=null?g=n.filter.updateChild(h,E,T,qe(t),f,a):e.eventCache.getNode().hasChild(E)?g=n.filter.updateChild(h,E,he.EMPTY_NODE,qe(t),f,a):g=h,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=bl(i,ri(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,a)))}return u=e.serverCache.isFullyInitialized()||Al(i,Pe())!=null,vo(e,g,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new rf(i.getIndex()),a=t1(i);this.processor_=N1(a);const u=t.serverCache,f=t.eventCache,h=o.updateFullNode(he.EMPTY_NODE,u.getNode(),null),g=a.updateFullNode(he.EMPTY_NODE,f.getNode(),null),E=new ni(h,u.isFullyInitialized(),o.filtersNodes()),T=new ni(g,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=ql(T,E),this.eventGenerator_=new l1(this.query_)}get query(){return this.query_}}function U1(n){return n.viewCache_.serverCache.getNode()}function B1(n,e){const t=ri(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ce(e)&&!t.getImmediateChild(we(e)).isEmpty())?t.getChild(e):null}function b_(n){return n.eventRegistrations_.length===0}function W1(n,e){n.eventRegistrations_.push(e)}function A_(n,e,t){const i=[];if(t){z(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,o);u&&i.push(u)})}if(e){let o=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return i}function R_(n,e,t,i){e.type===un.MERGE&&e.source.queryId!==null&&(z(ri(n.viewCache_),"We should always have a full cache before handling merges"),z(mh(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=O1(n.processor_,o,e,t,i);return P1(n.processor_,a.viewCache),z(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,$m(n,a.changes,a.viewCache.eventCache.getNode(),null)}function H1(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Je,(a,u)=>{i.push(ss(a,u))}),t.isFullyInitialized()&&i.push(Lm(t.getNode())),$m(n,i,t.getNode(),e)}function $m(n,e,t,i){const o=i?[i]:n.eventRegistrations_;return u1(n.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;class V1{constructor(){this.views=new Map}}function q1(n){z(!Nl,"__referenceConstructor has already been defined"),Nl=n}function $1(){return z(Nl,"Reference.ts has not been loaded"),Nl}function G1(n){return n.views.size===0}function df(n,e,t,i){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return z(a!=null,"SyncTree gave us an op for an invalid query."),R_(a,e,t,i)}else{let a=[];for(const u of n.views.values())a=a.concat(R_(u,e,t,i));return a}}function z1(n,e,t,i,o){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let f=bl(t,o?i:null),h=!1;f?h=!0:i instanceof he?(f=cf(t,i),h=!1):(f=he.EMPTY_NODE,h=!1);const g=ql(new ni(f,h,!1),new ni(i,o,!1));return new F1(e,g)}return u}function K1(n,e,t,i,o,a){const u=z1(n,e,i,o,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),W1(u,t),H1(u,t)}function j1(n,e,t,i){const o=e._queryIdentifier,a=[];let u=[];const f=yr(n);if(o==="default")for(const[h,g]of n.views.entries())u=u.concat(A_(g,t,i)),b_(g)&&(n.views.delete(h),g.query._queryParams.loadsAllData()||a.push(g.query));else{const h=n.views.get(o);h&&(u=u.concat(A_(h,t,i)),b_(h)&&(n.views.delete(o),h.query._queryParams.loadsAllData()||a.push(h.query)))}return f&&!yr(n)&&a.push(new($1())(e._repo,e._path)),{removed:a,events:u}}function Gm(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function es(n,e){let t=null;for(const i of n.views.values())t=t||B1(i,e);return t}function zm(n,e){if(e._queryParams.loadsAllData())return $l(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Km(n,e){return zm(n,e)!=null}function yr(n){return $l(n)!=null}function $l(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;function Y1(n){z(!Pl,"__referenceConstructor has already been defined"),Pl=n}function J1(){return z(Pl,"Reference.ts has not been loaded"),Pl}let Q1=1;class N_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=C1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jm(n,e,t,i,o){return d1(n.pendingWriteTree_,e,t,i,o),o?_s(n,new ti(of(),e,t)):[]}function X1(n,e,t,i){p1(n.pendingWriteTree_,e,t,i);const o=Ve.fromObject(t);return _s(n,new os(of(),e,o))}function fr(n,e,t=!1){const i=_1(n.pendingWriteTree_,e);if(g1(n.pendingWriteTree_,e)){let a=new Ve(null);return i.snap!=null?a=a.set(Pe(),!0):pt(i.children,u=>{a=a.set(new We(u),!0)}),_s(n,new Cl(i.path,a,t))}else return[]}function Gl(n,e,t){return _s(n,new ti(af(),e,t))}function Z1(n,e,t){const i=Ve.fromObject(t);return _s(n,new os(af(),e,i))}function eN(n,e){return _s(n,new Po(af(),e))}function tN(n,e,t){const i=_f(n,t);if(i){const o=gf(i),a=o.path,u=o.queryId,f=Lt(a,e),h=new Po(lf(u),f);return mf(n,a,h)}else return[]}function Th(n,e,t,i,o=!1){const a=e._path,u=n.syncPointTree_.get(a);let f=[];if(u&&(e._queryIdentifier==="default"||Km(u,e))){const h=j1(u,e,t,i);G1(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const g=h.removed;if(f=h.events,!o){const E=g.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(a,(b,O)=>yr(O));if(E&&!T){const b=n.syncPointTree_.subtree(a);if(!b.isEmpty()){const O=iN(b);for(let F=0;F<O.length;++F){const W=O[F],D=W.query,M=Qm(n,W);n.listenProvider_.startListening(Io(D),Ol(n,D),M.hashFn,M.onComplete)}}}!T&&g.length>0&&!i&&(E?n.listenProvider_.stopListening(Io(e),null):g.forEach(b=>{const O=n.queryToTagMap.get(zl(b));n.listenProvider_.stopListening(Io(b),O)}))}sN(n,g)}return f}function nN(n,e,t,i){const o=_f(n,i);if(o!=null){const a=gf(o),u=a.path,f=a.queryId,h=Lt(u,e),g=new ti(lf(f),h,t);return mf(n,u,g)}else return[]}function rN(n,e,t,i){const o=_f(n,i);if(o){const a=gf(o),u=a.path,f=a.queryId,h=Lt(u,e),g=Ve.fromObject(t),E=new os(lf(f),h,g);return mf(n,u,E)}else return[]}function P_(n,e,t,i=!1){const o=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(o,(b,O)=>{const F=Lt(b,o);a=a||es(O,F),u=u||yr(O)});let f=n.syncPointTree_.get(o);f?(u=u||yr(f),a=a||es(f,Pe())):(f=new V1,n.syncPointTree_=n.syncPointTree_.set(o,f));let h;a!=null?h=!0:(h=!1,a=he.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((O,F)=>{const W=es(F,Pe());W&&(a=a.updateImmediateChild(O,W))}));const g=Km(f,e);if(!g&&!e._queryParams.loadsAllData()){const b=zl(e);z(!n.queryToTagMap.has(b),"View does not exist, but we have a tag");const O=oN();n.queryToTagMap.set(b,O),n.tagToQueryMap.set(O,b)}const E=uf(n.pendingWriteTree_,o);let T=K1(f,e,t,E,a,h);if(!g&&!u&&!i){const b=zm(f,e);T=T.concat(aN(n,e,b))}return T}function pf(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,f)=>{const h=Lt(u,e),g=es(f,h);if(g)return g});return Bm(o,e,a,t,!0)}function _s(n,e){return Ym(e,n.syncPointTree_,null,uf(n.pendingWriteTree_,Pe()))}function Ym(n,e,t,i){if(Ce(n.path))return Jm(n,e,t,i);{const o=e.get(Pe());t==null&&o!=null&&(t=es(o,Pe()));let a=[];const u=we(n.path),f=n.operationForChild(u),h=e.children.get(u);if(h&&f){const g=t?t.getImmediateChild(u):null,E=Wm(i,u);a=a.concat(Ym(f,h,g,E))}return o&&(a=a.concat(df(o,n,i,t))),a}}function Jm(n,e,t,i){const o=e.get(Pe());t==null&&o!=null&&(t=es(o,Pe()));let a=[];return e.children.inorderTraversal((u,f)=>{const h=t?t.getImmediateChild(u):null,g=Wm(i,u),E=n.operationForChild(u);E&&(a=a.concat(Jm(E,f,h,g)))}),o&&(a=a.concat(df(o,n,i,t))),a}function Qm(n,e){const t=e.query,i=Ol(n,t);return{hashFn:()=>(U1(e)||he.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?tN(n,t._path,i):eN(n,t._path);{const a=ZA(o,t);return Th(n,t,null,a)}}}}function Ol(n,e){const t=zl(e);return n.queryToTagMap.get(t)}function zl(n){return n._path.toString()+"$"+n._queryIdentifier}function _f(n,e){return n.tagToQueryMap.get(e)}function gf(n){const e=n.indexOf("$");return z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new We(n.substr(0,e))}}function mf(n,e,t){const i=n.syncPointTree_.get(e);z(i,"Missing sync point for query tag that we're tracking");const o=uf(n.pendingWriteTree_,e);return df(i,t,o,null)}function iN(n){return n.fold((e,t,i)=>{if(t&&yr(t))return[$l(t)];{let o=[];return t&&(o=Gm(t)),pt(i,(a,u)=>{o=o.concat(u)}),o}})}function Io(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(J1())(n._repo,n._path):n}function sN(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const o=zl(i),a=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(a)}}}function oN(){return Q1++}function aN(n,e,t){const i=e._path,o=Ol(n,e),a=Qm(n,t),u=n.listenProvider_.startListening(Io(e),o,a.hashFn,a.onComplete),f=n.syncPointTree_.subtree(i);if(o)z(!yr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((g,E,T)=>{if(!Ce(g)&&E&&yr(E))return[$l(E).query];{let b=[];return E&&(b=b.concat(Gm(E).map(O=>O.query))),pt(T,(O,F)=>{b=b.concat(F)}),b}});for(let g=0;g<h.length;++g){const E=h[g];n.listenProvider_.stopListening(Io(E),Ol(n,E))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vf(t)}node(){return this.node_}}class yf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ye(this.path_,e);return new yf(this.syncTree_,t)}node(){return pf(this.syncTree_,this.path_)}}const lN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},O_=function(n,e,t){if(!n||typeof n!="object")return n;if(z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return uN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return cN(n[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},uN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:z(!1,"Unexpected server value: "+n)}},cN=function(n,e,t){n.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&z(!1,"Unexpected increment value: "+i);const o=e.node();if(z(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},Xm=function(n,e,t,i){return If(e,new yf(t,n),i)},Zm=function(n,e,t){return If(n,new vf(e),t)};function If(n,e,t){const i=n.getPriority().val(),o=O_(i,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,f=O_(u.getValue(),e,t);return f!==u.getValue()||o!==u.getPriority().val()?new at(f,ut(o)):n}else{const u=n;return a=u,o!==u.getPriority().val()&&(a=a.updatePriority(new at(o))),u.forEachChild(Je,(f,h)=>{const g=If(h,e.getImmediateChild(f),t);g!==h&&(a=a.updateImmediateChild(f,g))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function wf(n,e){let t=e instanceof We?e:new We(e),i=n,o=we(t);for(;o!==null;){const a=ns(i.node.children,o)||{children:{},childCount:0};i=new Ef(o,i,a),t=qe(t),o=we(t)}return i}function gs(n){return n.node.value}function ev(n,e){n.node.value=e,Sh(n)}function tv(n){return n.node.childCount>0}function hN(n){return gs(n)===void 0&&!tv(n)}function Kl(n,e){pt(n.node.children,(t,i)=>{e(new Ef(t,n,i))})}function nv(n,e,t,i){t&&e(n),Kl(n,o=>{nv(o,e,!0)})}function fN(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Uo(n){return new We(n.parent===null?n.name:Uo(n.parent)+"/"+n.name)}function Sh(n){n.parent!==null&&dN(n.parent,n.name,n)}function dN(n,e,t){const i=hN(t),o=Tn(n.node.children,e);i&&o?(delete n.node.children[e],n.node.childCount--,Sh(n)):!i&&!o&&(n.node.children[e]=t.node,n.node.childCount++,Sh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=/[\[\].#$\/\u0000-\u001F\u007F]/,_N=/[\[\].#$\u0000-\u001F\u007F]/,Kc=10*1024*1024,Tf=function(n){return typeof n=="string"&&n.length!==0&&!pN.test(n)},rv=function(n){return typeof n=="string"&&n.length!==0&&!_N.test(n)},gN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rv(n)},mN=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!jh(n)||n&&typeof n=="object"&&Tn(n,".sv")},iv=function(n,e,t,i){i&&e===void 0||jl(Ml(n,"value"),e,t)},jl=function(n,e,t){const i=t instanceof We?new kR(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+zr(i));if(typeof e=="function")throw new Error(n+"contains a function "+zr(i)+" with contents = "+e.toString());if(jh(e))throw new Error(n+"contains "+e.toString()+" "+zr(i));if(typeof e=="string"&&e.length>Kc/3&&xl(e)>Kc)throw new Error(n+"contains a string greater than "+Kc+" utf8 bytes "+zr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(pt(e,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!Tf(u)))throw new Error(n+" contains an invalid key ("+u+") "+zr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LR(i,u),jl(n,f,i),MR(i)}),o&&a)throw new Error(n+' contains ".value" child '+zr(i)+" in addition to actual children.")}},vN=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const a=bo(i);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!Tf(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(DR);let o=null;for(t=0;t<e.length;t++){if(i=e[t],o!==null&&Zt(o,i))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},yN=function(n,e,t,i){const o=Ml(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const a=[];pt(e,(u,f)=>{const h=new We(u);if(jl(o,f,Ye(t,h)),Zh(h)===".priority"&&!mN(f))throw new Error(o+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(h)}),vN(o,a)},sv=function(n,e,t,i){if(!rv(t))throw new Error(Ml(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IN=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sv(n,e,t)},Sf=function(n,e){if(we(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},EN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!gN(t))throw new Error(Ml(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yl(n,e){let t=null;for(let i=0;i<e.length;i++){const o=e[i],a=o.getPath();t!==null&&!ef(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function ov(n,e,t){Yl(n,t),av(n,i=>ef(i,e))}function fn(n,e,t){Yl(n,t),av(n,i=>Zt(i,e)||Zt(e,i))}function av(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const o=n.eventLists_[i];if(o){const a=o.path;e(a)?(TN(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();go&&dt("event: "+t.toString()),ps(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="repo_interrupt",CN=25;class bN{constructor(e,t,i,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new Ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AN(n,e,t){if(n.stats_=Qh(n.repoInfo_),n.forceRestClient_||rR())n.server_=new Tl(n.repoInfo_,(i,o,a,u)=>{D_(n,i,o,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>k_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new qn(n.repoInfo_,e,(i,o,a,u)=>{D_(n,i,o,a,u)},i=>{k_(n,i)},i=>{RN(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=lR(n.repoInfo_,()=>new a1(n.stats_,n.server_)),n.infoData_=new n1,n.infoSyncTree_=new N_({startListening:(i,o,a,u)=>{let f=[];const h=n.infoData_.getNode(i._path);return h.isEmpty()||(f=Gl(n.infoSyncTree_,i._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Cf(n,"connected",!1),n.serverSyncTree_=new N_({startListening:(i,o,a,u)=>(n.server_.listen(i,a,o,(f,h)=>{const g=u(f,h);fn(n.eventQueue_,i._path,g)}),[]),stopListening:(i,o)=>{n.server_.unlisten(i,o)}})}function lv(n){const t=n.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jl(n){return lN({timestamp:lv(n)})}function D_(n,e,t,i,o){n.dataUpdateCount++;const a=new We(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(o)if(i){const h=fl(t,g=>ut(g));u=rN(n.serverSyncTree_,a,h,o)}else{const h=ut(t);u=nN(n.serverSyncTree_,a,h,o)}else if(i){const h=fl(t,g=>ut(g));u=Z1(n.serverSyncTree_,a,h)}else{const h=ut(t);u=Gl(n.serverSyncTree_,a,h)}let f=a;u.length>0&&(f=ls(n,a)),fn(n.eventQueue_,f,u)}function k_(n,e){Cf(n,"connected",e),e===!1&&ON(n)}function RN(n,e){pt(e,(t,i)=>{Cf(n,t,i)})}function Cf(n,e,t){const i=new We("/.info/"+e),o=ut(t);n.infoData_.updateSnapshot(i,o);const a=Gl(n.infoSyncTree_,i,o);fn(n.eventQueue_,i,a)}function bf(n){return n.nextWriteId_++}function NN(n,e,t,i,o){Ql(n,"set",{path:e.toString(),value:t,priority:i});const a=Jl(n),u=ut(t,i),f=pf(n.serverSyncTree_,e),h=Zm(u,f,a),g=bf(n),E=jm(n.serverSyncTree_,e,h,g,!0);Yl(n.eventQueue_,E),n.server_.put(e.toString(),u.val(!0),(b,O)=>{const F=b==="ok";F||bt("set at "+e+" failed: "+b);const W=fr(n.serverSyncTree_,g,!F);fn(n.eventQueue_,e,W),Ch(n,o,b,O)});const T=Rf(n,e);ls(n,T),fn(n.eventQueue_,T,[])}function PN(n,e,t,i){Ql(n,"update",{path:e.toString(),value:t});let o=!0;const a=Jl(n),u={};if(pt(t,(f,h)=>{o=!1,u[f]=Xm(Ye(e,f),ut(h),n.serverSyncTree_,a)}),o)dt("update() called with empty data.  Don't do anything."),Ch(n,i,"ok",void 0);else{const f=bf(n),h=X1(n.serverSyncTree_,e,u,f);Yl(n.eventQueue_,h),n.server_.merge(e.toString(),t,(g,E)=>{const T=g==="ok";T||bt("update at "+e+" failed: "+g);const b=fr(n.serverSyncTree_,f,!T),O=b.length>0?ls(n,e):e;fn(n.eventQueue_,O,b),Ch(n,i,g,E)}),pt(t,g=>{const E=Rf(n,Ye(e,g));ls(n,E)}),fn(n.eventQueue_,e,[])}}function ON(n){Ql(n,"onDisconnectEvents");const e=Jl(n),t=Sl();gh(n.onDisconnect_,Pe(),(o,a)=>{const u=Xm(o,a,n.serverSyncTree_,e);Mm(t,o,u)});let i=[];gh(t,Pe(),(o,a)=>{i=i.concat(Gl(n.serverSyncTree_,o,a));const u=Rf(n,o);ls(n,u)}),n.onDisconnect_=Sl(),fn(n.eventQueue_,Pe(),i)}function DN(n,e,t){let i;we(e._path)===".info"?i=P_(n.infoSyncTree_,e,t):i=P_(n.serverSyncTree_,e,t),ov(n.eventQueue_,e._path,i)}function uv(n,e,t){let i;we(e._path)===".info"?i=Th(n.infoSyncTree_,e,t):i=Th(n.serverSyncTree_,e,t),ov(n.eventQueue_,e._path,i)}function kN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(SN)}function Ql(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),dt(t,...e)}function Ch(n,e,t,i){e&&ps(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;i&&(a+=": "+i);const u=new Error(a);u.code=o,e(u)}})}function cv(n,e,t){return pf(n.serverSyncTree_,e,t)||he.EMPTY_NODE}function Af(n,e=n.transactionQueueTree_){if(e||Xl(n,e),gs(e)){const t=fv(n,e);z(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&LN(n,Uo(e),t)}else tv(e)&&Kl(e,t=>{Af(n,t)})}function LN(n,e,t){const i=t.map(g=>g.currentWriteId),o=cv(n,e,i);let a=o;const u=o.hash();for(let g=0;g<t.length;g++){const E=t[g];z(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=Lt(e,E.path);a=a.updateChild(T,E.currentOutputSnapshotRaw)}const f=a.val(!0),h=e;n.server_.put(h.toString(),f,g=>{Ql(n,"transaction put response",{path:h.toString(),status:g});let E=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,E=E.concat(fr(n.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();Xl(n,wf(n.transactionQueueTree_,e)),Af(n,n.transactionQueueTree_),fn(n.eventQueue_,e,E);for(let b=0;b<T.length;b++)ps(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{bt("transaction at "+h.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}ls(n,e)}},u)}function ls(n,e){const t=hv(n,e),i=Uo(t),o=fv(n,t);return MN(n,o,i),i}function MN(n,e,t){if(e.length===0)return;const i=[];let o=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const h=e[f],g=Lt(t,h.path);let E=!1,T;if(z(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)E=!0,T=h.abortReason,o=o.concat(fr(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=CN)E=!0,T="maxretry",o=o.concat(fr(n.serverSyncTree_,h.currentWriteId,!0));else{const b=cv(n,h.path,u);h.currentInputSnapshot=b;const O=e[f].update(b.val());if(O!==void 0){jl("transaction failed: Data returned ",O,h.path);let F=ut(O);typeof O=="object"&&O!=null&&Tn(O,".priority")||(F=F.updatePriority(b.getPriority()));const D=h.currentWriteId,M=Jl(n),q=Zm(F,b,M);h.currentOutputSnapshotRaw=F,h.currentOutputSnapshotResolved=q,h.currentWriteId=bf(n),u.splice(u.indexOf(D),1),o=o.concat(jm(n.serverSyncTree_,h.path,q,h.currentWriteId,h.applyLocally)),o=o.concat(fr(n.serverSyncTree_,D,!0))}else E=!0,T="nodata",o=o.concat(fr(n.serverSyncTree_,h.currentWriteId,!0))}fn(n.eventQueue_,t,o),o=[],E&&(e[f].status=2,function(b){setTimeout(b,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(T==="nodata"?i.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):i.push(()=>e[f].onComplete(new Error(T),!1,null))))}Xl(n,n.transactionQueueTree_);for(let f=0;f<i.length;f++)ps(i[f]);Af(n,n.transactionQueueTree_)}function hv(n,e){let t,i=n.transactionQueueTree_;for(t=we(e);t!==null&&gs(i)===void 0;)i=wf(i,t),e=qe(e),t=we(e);return i}function fv(n,e){const t=[];return dv(n,e,t),t.sort((i,o)=>i.order-o.order),t}function dv(n,e,t){const i=gs(e);if(i)for(let o=0;o<i.length;o++)t.push(i[o]);Kl(e,o=>{dv(n,o,t)})}function Xl(n,e){const t=gs(e);if(t){let i=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[i]=t[o],i++);t.length=i,ev(e,t.length>0?t:void 0)}Kl(e,i=>{Xl(n,i)})}function Rf(n,e){const t=Uo(hv(n,e)),i=wf(n.transactionQueueTree_,e);return fN(i,o=>{jc(n,o)}),jc(n,i),nv(i,o=>{jc(n,o)}),t}function jc(n,e){const t=gs(e);if(t){const i=[];let o=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(z(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(z(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),o=o.concat(fr(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?ev(e,void 0):t.length=a+1,fn(n.eventQueue_,Uo(e),o);for(let u=0;u<i.length;u++)ps(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let o=t[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function FN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):bt(`Invalid query segment '${t}' in query '${n}'`)}return e}const L_=function(n,e){const t=UN(n),i=t.namespace;t.domain==="firebase.com"&&Kn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jA();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new vm(t.host,t.secure,i,o,e,"",i!==t.subdomain),path:new We(t.pathString)}},UN=function(n){let e="",t="",i="",o="",a="",u=!0,f="https",h=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let E=n.indexOf("/");E===-1&&(E=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(E,T)),E<T&&(o=xN(n.substring(E,T)));const b=FN(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",h=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const F=e.indexOf(".");i=e.substring(0,F).toLowerCase(),t=e.substring(F+1),a=i}"ns"in b&&(a=b.ns)}return{host:e,port:h,domain:t,subdomain:i,secure:u,scheme:f,pathString:o,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",BN=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let o;const a=new Array(8);for(o=7;o>=0;o--)a[o]=M_.charAt(t%64),t=Math.floor(t/64);z(t===0,"Cannot push at time == 0");let u=a.join("");if(i){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=M_.charAt(e[o]);return z(u.length===20,"nextPushId: Length should be 20."),u}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t,i,o){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class HN{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,i,o){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=o}get key(){return Ce(this._path)?null:Zh(this._path)}get ref(){return new Er(this._repo,this._path)}get _queryIdentifier(){const e=y_(this._queryParams),t=Yh(e);return t==="{}"?"default":t}get _queryObject(){return y_(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Nf))return!1;const t=this._repo===e._repo,i=ef(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+OR(this._path)}}class Er extends Nf{constructor(e,t){super(e,t,new sf,!1)}get parent(){const e=Am(this._path);return e===null?null:new Er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Dl{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new We(e),i=Oo(this.ref,e);return new Dl(this._node.getChild(t),i,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>e(new Dl(o,Oo(this.ref,i),Je)))}hasChild(e){const t=new We(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wr(n,e){return n=Rt(n),n._checkNotDeleted("ref"),e!==void 0?Oo(n._root,e):n._root}function Oo(n,e){return n=Rt(n),we(n._path)===null?IN("child","path",e):sv("child","path",e),new Er(n._repo,Ye(n._path,e))}function pv(n,e){n=Rt(n),Sf("push",n._path),iv("push",e,n._path,!0);const t=lv(n._repo),i=BN(t),o=Oo(n,i),a=Oo(n,i);let u;return e!=null?u=gv(a,e).then(()=>a):u=Promise.resolve(a),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function _v(n){return Sf("remove",n._path),gv(n,null)}function gv(n,e){n=Rt(n),Sf("set",n._path),iv("set",e,n._path,!1);const t=new Qr;return NN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function mv(n,e){yN("update",e,n._path);const t=new Qr;return PN(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Pf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new WN("value",this,new Dl(e.snapshotNode,new Er(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new HN(this,e,t):null}matches(e){return e instanceof Pf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qN(n,e,t,i,o){const a=new VN(t,void 0),u=new Pf(a);return DN(n._repo,n,u),()=>uv(n._repo,n,u)}function vv(n,e,t,i){return qN(n,"value",e)}function $N(n,e,t){uv(n._repo,n,null)}q1(Er);Y1(Er);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="FIREBASE_DATABASE_EMULATOR_HOST",bh={};let zN=!1;function KN(n,e,t,i){const o=e.lastIndexOf(":"),a=e.substring(0,o),u=Fl(a);n.repoInfo_=new vm(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function jN(n,e,t,i,o){let a=i||n.options.databaseURL;a===void 0&&(n.options.projectId||Kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=L_(a,o),f=u.repoInfo,h;typeof process<"u"&&t_&&(h=t_[GN]),h?(a=`http://${h}?ns=${f.namespace}`,u=L_(a,o),f=u.repoInfo):u.repoInfo.secure;const g=new sR(n.name,n.options,e);EN("Invalid Firebase Database URL",u),Ce(u.path)||Kn("Database URL must point to the root of a Firebase Database (not including a child path).");const E=JN(f,n,g,new iR(n,t));return new QN(E,n)}function YN(n,e){const t=bh[e];(!t||t[n.key]!==n)&&Kn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),kN(n),delete t[n.key]}function JN(n,e,t,i){let o=bh[e.name];o||(o={},bh[e.name]=o);let a=o[n.toURLString()];return a&&Kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new bN(n,zN,t,i),o[n.toURLString()]=a,a}class QN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Er(this._repo,Pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kn("Cannot call "+e+" on a deleted database.")}}function XN(n=bg(),e){const t=Mh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=dS("database");i&&ZN(t,...i)}return t}function ZN(n,e,t,i={}){n=Rt(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&Xr(i,a.repoInfo_.emulatorOptions))return;Kn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&Kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ll(ll.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:pS(i.mockUserToken,n.app.options.projectId);u=new ll(f)}Fl(e)&&wg(e),KN(a,o,i,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n){VA(fs),mr(new $n("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return jN(i,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Vn(n_,r_,n),Vn(n_,r_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={".sv":"timestamp"};function yv(){return tP}qn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};qn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};eP();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new Map,rP={activated:!1,tokenObservers:[]};function dn(n){return nP.get(n)||Object.assign({},rP)}const x_={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,i,o,a){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=o,this.upperBound=a,this.pending=null,this.nextErrorWaitInterval=o,o>a)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Qr,this.pending.promise.catch(t=>{}),await sP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Qr,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function sP(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},kl=new cs("appCheck","AppCheck",oP);function Iv(n){if(!dn(n).activated)throw kl.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="firebase-app-check-database",lP=1,Ah="firebase-app-check-store";let Qa=null;function uP(){return Qa||(Qa=new Promise((n,e)=>{try{const t=indexedDB.open(aP,lP);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var o;e(kl.create("storage-open",{originalErrorMessage:(o=i.target.error)===null||o===void 0?void 0:o.message}))},t.onupgradeneeded=i=>{const o=i.target.result;switch(i.oldVersion){case 0:o.createObjectStore(Ah,{keyPath:"compositeKey"})}}}catch(t){e(kl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Qa)}function cP(n,e){return hP(fP(n),e)}async function hP(n,e){const i=(await uP()).transaction(Ah,"readwrite"),a=i.objectStore(Ah).put({compositeKey:n,value:e});return new Promise((u,f)=>{a.onsuccess=h=>{u()},i.onerror=h=>{var g;f(kl.create("storage-set",{originalErrorMessage:(g=h.target.error)===null||g===void 0?void 0:g.message}))}})}function fP(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Ul("@firebase/app-check");function F_(n,e){return Ig()?cP(n,e).catch(t=>{Rh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP={error:"UNKNOWN_ERROR"};function pP(n){return Ll.encodeString(JSON.stringify(n),!1)}async function Nh(n,e=!1,t=!1){const i=n.app;Iv(i);const o=dn(i);let a=o.token,u;if(a&&!ho(a)&&(o.token=void 0,a=void 0),!a){const g=await o.cachedTokenPromise;g&&(ho(g)?a=g:await F_(i,void 0))}if(!e&&a&&ho(a))return{token:a.token};let f=!1;try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),f=!0),a=await dn(i).exchangeTokenPromise}catch(g){g.code==="appCheck/throttled"||g.code==="appCheck/initial-throttle"?Rh.warn(g.message):t&&Rh.error(g),u=g}let h;return a?u?ho(a)?h={token:a.token,internalError:u}:h=B_(u):(h={token:a.token},o.token=a,await F_(i,a)):h=B_(u),f&&vP(i,h),h}async function _P(n){const e=n.app;Iv(e);const{provider:t}=dn(e);{const{token:i}=await t.getToken();return{token:i}}}function gP(n,e,t,i){const{app:o}=n,a=dn(o),u={next:t,error:i,type:e};if(a.tokenObservers=[...a.tokenObservers,u],a.token&&ho(a.token)){const f=a.token;Promise.resolve().then(()=>{t({token:f.token}),U_(n)}).catch(()=>{})}a.cachedTokenPromise.then(()=>U_(n))}function Ev(n,e){const t=dn(n),i=t.tokenObservers.filter(o=>o.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function U_(n){const{app:e}=n,t=dn(e);let i=t.tokenRefresher;i||(i=mP(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function mP(n){const{app:e}=n;return new iP(async()=>{const t=dn(e);let i;if(t.token?i=await Nh(n,!0):i=await Nh(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=dn(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const o=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,o),Math.max(0,i-Date.now())}else return 0},x_.RETRIAL_MIN_WAIT,x_.RETRIAL_MAX_WAIT)}function vP(n,e){const t=dn(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ho(n){return n.expireTimeMillis-Date.now()>0}function B_(n){return{token:pP(dP),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=dn(this.app);for(const t of e)Ev(this.app,t.next);return Promise.resolve()}}function IP(n,e){return new yP(n,e)}function EP(n){return{getToken:e=>Nh(n,e),getLimitedUseToken:()=>_P(n),addTokenListener:e=>gP(n,"INTERNAL",e),removeTokenListener:e=>Ev(n.app,e)}}const wP="@firebase/app-check",TP="0.9.1",SP="app-check",W_="app-check-internal";function CP(){mr(new $n(SP,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return IP(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(W_).initialize()})),mr(new $n(W_,n=>{const e=n.getProvider("app-check").getImmediate();return EP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Vn(wP,TP)}CP();const bP={apiKey:"AIzaSyDHhEExzVDJHlzwOjQSJka9qLfLpsjgNHA",authDomain:"testpage-ad7e1.firebaseapp.com",databaseURL:"https://testpage-ad7e1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testpage-ad7e1",storageBucket:"testpage-ad7e1.firebasestorage.app",messagingSenderId:"338672007872",appId:"1:338672007872:web:d657aa205706bb37ee4b25",measurementId:"G-DDTH2KFQ5T"};var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function AP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function wv(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var o=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:function(){return n[i]}})}),t}var po={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var RP=po.exports,H_;function Bo(){return H_||(H_=1,function(n,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",g=500,E="__lodash_placeholder__",T=1,b=2,O=4,F=1,W=2,D=1,M=2,q=4,te=8,ie=16,ge=32,$e=64,Oe=128,Re=256,nt=512,_t=30,G="...",ee=800,j=16,X=1,oe=2,me=3,ye=1/0,et=9007199254740991,pn=17976931348623157e292,jn=NaN,Gt=4294967295,ru=Gt-1,iu=Gt>>>1,su=[["ary",Oe],["bind",D],["bindKey",M],["curry",te],["curryRight",ie],["flip",nt],["partial",ge],["partialRight",$e],["rearg",Re]],Yn="[object Arguments]",ai="[object Array]",ou="[object AsyncFunction]",Cr="[object Boolean]",br="[object Date]",au="[object DOMException]",li="[object Error]",Ar="[object Function]",Vo="[object GeneratorFunction]",Nt="[object Map]",Rr="[object Number]",lu="[object Null]",en="[object Object]",qo="[object Promise]",uu="[object Proxy]",Nr="[object RegExp]",Ft="[object Set]",Pr="[object String]",Or="[object Symbol]",cu="[object Undefined]",ui="[object WeakMap]",L="[object WeakSet]",ce="[object ArrayBuffer]",Sn="[object DataView]",ci="[object Float32Array]",ms="[object Float64Array]",Dr="[object Int8Array]",hi="[object Int16Array]",fi="[object Int32Array]",vs="[object Uint8Array]",ys="[object Uint8ClampedArray]",Jn="[object Uint16Array]",di="[object Uint32Array]",Is=/\b__p \+= '';/g,$o=/\b(__p \+=) '' \+/g,hu=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Es=/&(?:amp|lt|gt|quot|#39);/g,Go=/[&<>"']/g,zo=RegExp(Es.source),Ko=RegExp(Go.source),fu=/<%-([\s\S]+?)%>/g,du=/<%([\s\S]+?)%>/g,jo=/<%=([\s\S]+?)%>/g,pu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ws=/^\w*$/,Ts=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ss=/[\\^$.*+?()[\]{}|]/g,_u=RegExp(Ss.source),Cs=/^\s+/,gu=/\s/,st=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,mu=/\{\n\/\* \[wrapped with (.+)\] \*/,vu=/,? & /,yu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Yo=/[()=,{}\[\]\/\s]/,Iu=/\\(\\)?/g,bs=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pi=/\w*$/,Eu=/^[-+]0x[0-9a-f]+$/i,wu=/^0b[01]+$/i,Jo=/^\[object .+?Constructor\]$/,kr=/^0o[0-7]+$/i,_i=/^(?:0|[1-9]\d*)$/,Tu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,gi=/($^)/,As=/['\n\r\u2028\u2029\\]/g,mi="\\ud800-\\udfff",Su="\\u0300-\\u036f",vi="\\ufe20-\\ufe2f",Ut="\\u20d0-\\u20ff",yi=Su+vi+Ut,Rs="\\u2700-\\u27bf",Cn="a-z\\xdf-\\xf6\\xf8-\\xff",Qo="\\xac\\xb1\\xd7\\xf7",Cu="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",bu="\\u2000-\\u206f",Au=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Lr="A-Z\\xc0-\\xd6\\xd8-\\xde",Ns="\\ufe0e\\ufe0f",Ps=Qo+Cu+bu+Au,Os="['’]",Ru="["+mi+"]",Xo="["+Ps+"]",Ii="["+yi+"]",Ds="\\d+",Zo="["+Rs+"]",_n="["+Cn+"]",ks="[^"+mi+Ps+Ds+Rs+Cn+Lr+"]",ea="\\ud83c[\\udffb-\\udfff]",Nu="(?:"+Ii+"|"+ea+")",Pu="[^"+mi+"]",Ls="(?:\\ud83c[\\udde6-\\uddff]){2}",Ms="[\\ud800-\\udbff][\\udc00-\\udfff]",Qn="["+Lr+"]",ta="\\u200d",xs="(?:"+_n+"|"+ks+")",Ei="(?:"+Qn+"|"+ks+")",Fs="(?:"+Os+"(?:d|ll|m|re|s|t|ve))?",na="(?:"+Os+"(?:D|LL|M|RE|S|T|VE))?",Us=Nu+"?",ra="["+Ns+"]?",ia="(?:"+ta+"(?:"+[Pu,Ls,Ms].join("|")+")"+ra+Us+")*",Bs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",wi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sa=ra+Us+ia,Ou="(?:"+[Zo,Ls,Ms].join("|")+")"+sa,Du="(?:"+[Pu+Ii+"?",Ii,Ls,Ms,Ru].join("|")+")",Ws=RegExp(Os,"g"),oa=RegExp(Ii,"g"),Hs=RegExp(ea+"(?="+ea+")|"+Du+sa,"g"),aa=RegExp([Qn+"?"+_n+"+"+Fs+"(?="+[Xo,Qn,"$"].join("|")+")",Ei+"+"+na+"(?="+[Xo,Qn+xs,"$"].join("|")+")",Qn+"?"+xs+"+"+Fs,Qn+"+"+na,wi,Bs,Ds,Ou].join("|"),"g"),Vs=RegExp("["+ta+mi+yi+Ns+"]"),la=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ua=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ti=-1,xe={};xe[ci]=xe[ms]=xe[Dr]=xe[hi]=xe[fi]=xe[vs]=xe[ys]=xe[Jn]=xe[di]=!0,xe[Yn]=xe[ai]=xe[ce]=xe[Cr]=xe[Sn]=xe[br]=xe[li]=xe[Ar]=xe[Nt]=xe[Rr]=xe[en]=xe[Nr]=xe[Ft]=xe[Pr]=xe[ui]=!1;var Fe={};Fe[Yn]=Fe[ai]=Fe[ce]=Fe[Sn]=Fe[Cr]=Fe[br]=Fe[ci]=Fe[ms]=Fe[Dr]=Fe[hi]=Fe[fi]=Fe[Nt]=Fe[Rr]=Fe[en]=Fe[Nr]=Fe[Ft]=Fe[Pr]=Fe[Or]=Fe[vs]=Fe[ys]=Fe[Jn]=Fe[di]=!0,Fe[li]=Fe[Ar]=Fe[ui]=!1;var Si={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ci={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bi={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},qs=parseFloat,ku=parseInt,ca=typeof fo=="object"&&fo&&fo.Object===Object&&fo,Lu=typeof self=="object"&&self&&self.Object===Object&&self,Qe=ca||Lu||Function("return this")(),$s=e&&!e.nodeType&&e,gn=$s&&!0&&n&&!n.nodeType&&n,Ge=gn&&gn.exports===$s,d=Ge&&ca.process,p=function(){try{var A=gn&&gn.require&&gn.require("util").types;return A||d&&d.binding&&d.binding("util")}catch{}}(),y=p&&p.isArrayBuffer,I=p&&p.isDate,S=p&&p.isMap,N=p&&p.isRegExp,P=p&&p.isSet,H=p&&p.isTypedArray;function Q(A,x,k){switch(k.length){case 0:return A.call(x);case 1:return A.call(x,k[0]);case 2:return A.call(x,k[0],k[1]);case 3:return A.call(x,k[0],k[1],k[2])}return A.apply(x,k)}function K(A,x,k,Z){for(var pe=-1,Ne=A==null?0:A.length;++pe<Ne;){var rt=A[pe];x(Z,rt,k(rt),A)}return Z}function $(A,x){for(var k=-1,Z=A==null?0:A.length;++k<Z&&x(A[k],k,A)!==!1;);return A}function se(A,x){for(var k=A==null?0:A.length;k--&&x(A[k],k,A)!==!1;);return A}function De(A,x){for(var k=-1,Z=A==null?0:A.length;++k<Z;)if(!x(A[k],k,A))return!1;return!0}function Ue(A,x){for(var k=-1,Z=A==null?0:A.length,pe=0,Ne=[];++k<Z;){var rt=A[k];x(rt,k,A)&&(Ne[pe++]=rt)}return Ne}function re(A,x){var k=A==null?0:A.length;return!!k&&Ai(A,x,0)>-1}function de(A,x,k){for(var Z=-1,pe=A==null?0:A.length;++Z<pe;)if(k(x,A[Z]))return!0;return!1}function Y(A,x){for(var k=-1,Z=A==null?0:A.length,pe=Array(Z);++k<Z;)pe[k]=x(A[k],k,A);return pe}function ke(A,x){for(var k=-1,Z=x.length,pe=A.length;++k<Z;)A[pe+k]=x[k];return A}function ze(A,x,k,Z){var pe=-1,Ne=A==null?0:A.length;for(Z&&Ne&&(k=A[++pe]);++pe<Ne;)k=x(k,A[pe],pe,A);return k}function tt(A,x,k,Z){var pe=A==null?0:A.length;for(Z&&pe&&(k=A[--pe]);pe--;)k=x(k,A[pe],pe,A);return k}function Bt(A,x){for(var k=-1,Z=A==null?0:A.length;++k<Z;)if(x(A[k],k,A))return!0;return!1}var gt=Mu("length");function mn(A){return A.split("")}function bn(A){return A.match(yu)||[]}function Mr(A,x,k){var Z;return k(A,function(pe,Ne,rt){if(x(pe,Ne,rt))return Z=Ne,!1}),Z}function xr(A,x,k,Z){for(var pe=A.length,Ne=k+(Z?1:-1);Z?Ne--:++Ne<pe;)if(x(A[Ne],Ne,A))return Ne;return-1}function Ai(A,x,k){return x===x?$v(A,x,k):xr(A,Of,k)}function kv(A,x,k,Z){for(var pe=k-1,Ne=A.length;++pe<Ne;)if(Z(A[pe],x))return pe;return-1}function Of(A){return A!==A}function Df(A,x){var k=A==null?0:A.length;return k?Fu(A,x)/k:jn}function Mu(A){return function(x){return x==null?t:x[A]}}function xu(A){return function(x){return A==null?t:A[x]}}function kf(A,x,k,Z,pe){return pe(A,function(Ne,rt,He){k=Z?(Z=!1,Ne):x(k,Ne,rt,He)}),k}function Lv(A,x){var k=A.length;for(A.sort(x);k--;)A[k]=A[k].value;return A}function Fu(A,x){for(var k,Z=-1,pe=A.length;++Z<pe;){var Ne=x(A[Z]);Ne!==t&&(k=k===t?Ne:k+Ne)}return k}function Uu(A,x){for(var k=-1,Z=Array(A);++k<A;)Z[k]=x(k);return Z}function Mv(A,x){return Y(x,function(k){return[k,A[k]]})}function Lf(A){return A&&A.slice(0,Uf(A)+1).replace(Cs,"")}function Wt(A){return function(x){return A(x)}}function Bu(A,x){return Y(x,function(k){return A[k]})}function Gs(A,x){return A.has(x)}function Mf(A,x){for(var k=-1,Z=A.length;++k<Z&&Ai(x,A[k],0)>-1;);return k}function xf(A,x){for(var k=A.length;k--&&Ai(x,A[k],0)>-1;);return k}function xv(A,x){for(var k=A.length,Z=0;k--;)A[k]===x&&++Z;return Z}var Fv=xu(Si),Uv=xu(zt);function Bv(A){return"\\"+bi[A]}function Wv(A,x){return A==null?t:A[x]}function Ri(A){return Vs.test(A)}function Hv(A){return la.test(A)}function Vv(A){for(var x,k=[];!(x=A.next()).done;)k.push(x.value);return k}function Wu(A){var x=-1,k=Array(A.size);return A.forEach(function(Z,pe){k[++x]=[pe,Z]}),k}function Ff(A,x){return function(k){return A(x(k))}}function Xn(A,x){for(var k=-1,Z=A.length,pe=0,Ne=[];++k<Z;){var rt=A[k];(rt===x||rt===E)&&(A[k]=E,Ne[pe++]=k)}return Ne}function ha(A){var x=-1,k=Array(A.size);return A.forEach(function(Z){k[++x]=Z}),k}function qv(A){var x=-1,k=Array(A.size);return A.forEach(function(Z){k[++x]=[Z,Z]}),k}function $v(A,x,k){for(var Z=k-1,pe=A.length;++Z<pe;)if(A[Z]===x)return Z;return-1}function Gv(A,x,k){for(var Z=k+1;Z--;)if(A[Z]===x)return Z;return Z}function Ni(A){return Ri(A)?Kv(A):gt(A)}function tn(A){return Ri(A)?jv(A):mn(A)}function Uf(A){for(var x=A.length;x--&&gu.test(A.charAt(x)););return x}var zv=xu(Ci);function Kv(A){for(var x=Hs.lastIndex=0;Hs.test(A);)++x;return x}function jv(A){return A.match(Hs)||[]}function Yv(A){return A.match(aa)||[]}var Jv=function A(x){x=x==null?Qe:Pi.defaults(Qe.Object(),x,Pi.pick(Qe,ua));var k=x.Array,Z=x.Date,pe=x.Error,Ne=x.Function,rt=x.Math,He=x.Object,Hu=x.RegExp,Qv=x.String,Kt=x.TypeError,fa=k.prototype,Xv=Ne.prototype,Oi=He.prototype,da=x["__core-js_shared__"],pa=Xv.toString,Me=Oi.hasOwnProperty,Zv=0,Bf=function(){var r=/[^.]+$/.exec(da&&da.keys&&da.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),_a=Oi.toString,ey=pa.call(He),ty=Qe._,ny=Hu("^"+pa.call(Me).replace(Ss,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ga=Ge?x.Buffer:t,Zn=x.Symbol,ma=x.Uint8Array,Wf=ga?ga.allocUnsafe:t,va=Ff(He.getPrototypeOf,He),Hf=He.create,Vf=Oi.propertyIsEnumerable,ya=fa.splice,qf=Zn?Zn.isConcatSpreadable:t,zs=Zn?Zn.iterator:t,Fr=Zn?Zn.toStringTag:t,Ia=function(){try{var r=Vr(He,"defineProperty");return r({},"",{}),r}catch{}}(),ry=x.clearTimeout!==Qe.clearTimeout&&x.clearTimeout,iy=Z&&Z.now!==Qe.Date.now&&Z.now,sy=x.setTimeout!==Qe.setTimeout&&x.setTimeout,Ea=rt.ceil,wa=rt.floor,Vu=He.getOwnPropertySymbols,oy=ga?ga.isBuffer:t,$f=x.isFinite,ay=fa.join,ly=Ff(He.keys,He),it=rt.max,mt=rt.min,uy=Z.now,cy=x.parseInt,Gf=rt.random,hy=fa.reverse,qu=Vr(x,"DataView"),Ks=Vr(x,"Map"),$u=Vr(x,"Promise"),Di=Vr(x,"Set"),js=Vr(x,"WeakMap"),Ys=Vr(He,"create"),Ta=js&&new js,ki={},fy=qr(qu),dy=qr(Ks),py=qr($u),_y=qr(Di),gy=qr(js),Sa=Zn?Zn.prototype:t,Js=Sa?Sa.valueOf:t,zf=Sa?Sa.toString:t;function m(r){if(je(r)&&!_e(r)&&!(r instanceof be)){if(r instanceof jt)return r;if(Me.call(r,"__wrapped__"))return Kd(r)}return new jt(r)}var Li=function(){function r(){}return function(s){if(!Ke(s))return{};if(Hf)return Hf(s);r.prototype=s;var l=new r;return r.prototype=t,l}}();function Ca(){}function jt(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}m.templateSettings={escape:fu,evaluate:du,interpolate:jo,variable:"",imports:{_:m}},m.prototype=Ca.prototype,m.prototype.constructor=m,jt.prototype=Li(Ca.prototype),jt.prototype.constructor=jt;function be(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Gt,this.__views__=[]}function my(){var r=new be(this.__wrapped__);return r.__actions__=Pt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Pt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Pt(this.__views__),r}function vy(){if(this.__filtered__){var r=new be(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function yy(){var r=this.__wrapped__.value(),s=this.__dir__,l=_e(r),c=s<0,_=l?r.length:0,v=O0(0,_,this.__views__),w=v.start,C=v.end,R=C-w,U=c?C:w-1,B=this.__iteratees__,V=B.length,J=0,ne=mt(R,this.__takeCount__);if(!l||!c&&_==R&&ne==R)return gd(r,this.__actions__);var le=[];e:for(;R--&&J<ne;){U+=s;for(var Ie=-1,ue=r[U];++Ie<V;){var Se=B[Ie],Ae=Se.iteratee,qt=Se.type,Ct=Ae(ue);if(qt==oe)ue=Ct;else if(!Ct){if(qt==X)continue e;break e}}le[J++]=ue}return le}be.prototype=Li(Ca.prototype),be.prototype.constructor=be;function Ur(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var c=r[s];this.set(c[0],c[1])}}function Iy(){this.__data__=Ys?Ys(null):{},this.size=0}function Ey(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function wy(r){var s=this.__data__;if(Ys){var l=s[r];return l===h?t:l}return Me.call(s,r)?s[r]:t}function Ty(r){var s=this.__data__;return Ys?s[r]!==t:Me.call(s,r)}function Sy(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Ys&&s===t?h:s,this}Ur.prototype.clear=Iy,Ur.prototype.delete=Ey,Ur.prototype.get=wy,Ur.prototype.has=Ty,Ur.prototype.set=Sy;function An(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var c=r[s];this.set(c[0],c[1])}}function Cy(){this.__data__=[],this.size=0}function by(r){var s=this.__data__,l=ba(s,r);if(l<0)return!1;var c=s.length-1;return l==c?s.pop():ya.call(s,l,1),--this.size,!0}function Ay(r){var s=this.__data__,l=ba(s,r);return l<0?t:s[l][1]}function Ry(r){return ba(this.__data__,r)>-1}function Ny(r,s){var l=this.__data__,c=ba(l,r);return c<0?(++this.size,l.push([r,s])):l[c][1]=s,this}An.prototype.clear=Cy,An.prototype.delete=by,An.prototype.get=Ay,An.prototype.has=Ry,An.prototype.set=Ny;function Rn(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var c=r[s];this.set(c[0],c[1])}}function Py(){this.size=0,this.__data__={hash:new Ur,map:new(Ks||An),string:new Ur}}function Oy(r){var s=Ua(this,r).delete(r);return this.size-=s?1:0,s}function Dy(r){return Ua(this,r).get(r)}function ky(r){return Ua(this,r).has(r)}function Ly(r,s){var l=Ua(this,r),c=l.size;return l.set(r,s),this.size+=l.size==c?0:1,this}Rn.prototype.clear=Py,Rn.prototype.delete=Oy,Rn.prototype.get=Dy,Rn.prototype.has=ky,Rn.prototype.set=Ly;function Br(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new Rn;++s<l;)this.add(r[s])}function My(r){return this.__data__.set(r,h),this}function xy(r){return this.__data__.has(r)}Br.prototype.add=Br.prototype.push=My,Br.prototype.has=xy;function nn(r){var s=this.__data__=new An(r);this.size=s.size}function Fy(){this.__data__=new An,this.size=0}function Uy(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function By(r){return this.__data__.get(r)}function Wy(r){return this.__data__.has(r)}function Hy(r,s){var l=this.__data__;if(l instanceof An){var c=l.__data__;if(!Ks||c.length<o-1)return c.push([r,s]),this.size=++l.size,this;l=this.__data__=new Rn(c)}return l.set(r,s),this.size=l.size,this}nn.prototype.clear=Fy,nn.prototype.delete=Uy,nn.prototype.get=By,nn.prototype.has=Wy,nn.prototype.set=Hy;function Kf(r,s){var l=_e(r),c=!l&&$r(r),_=!l&&!c&&ir(r),v=!l&&!c&&!_&&Ui(r),w=l||c||_||v,C=w?Uu(r.length,Qv):[],R=C.length;for(var U in r)(s||Me.call(r,U))&&!(w&&(U=="length"||_&&(U=="offset"||U=="parent")||v&&(U=="buffer"||U=="byteLength"||U=="byteOffset")||Dn(U,R)))&&C.push(U);return C}function jf(r){var s=r.length;return s?r[tc(0,s-1)]:t}function Vy(r,s){return Ba(Pt(r),Wr(s,0,r.length))}function qy(r){return Ba(Pt(r))}function Gu(r,s,l){(l!==t&&!rn(r[s],l)||l===t&&!(s in r))&&Nn(r,s,l)}function Qs(r,s,l){var c=r[s];(!(Me.call(r,s)&&rn(c,l))||l===t&&!(s in r))&&Nn(r,s,l)}function ba(r,s){for(var l=r.length;l--;)if(rn(r[l][0],s))return l;return-1}function $y(r,s,l,c){return er(r,function(_,v,w){s(c,_,l(_),w)}),c}function Yf(r,s){return r&&yn(s,ot(s),r)}function Gy(r,s){return r&&yn(s,Dt(s),r)}function Nn(r,s,l){s=="__proto__"&&Ia?Ia(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function zu(r,s){for(var l=-1,c=s.length,_=k(c),v=r==null;++l<c;)_[l]=v?t:bc(r,s[l]);return _}function Wr(r,s,l){return r===r&&(l!==t&&(r=r<=l?r:l),s!==t&&(r=r>=s?r:s)),r}function Yt(r,s,l,c,_,v){var w,C=s&T,R=s&b,U=s&O;if(l&&(w=_?l(r,c,_,v):l(r)),w!==t)return w;if(!Ke(r))return r;var B=_e(r);if(B){if(w=k0(r),!C)return Pt(r,w)}else{var V=vt(r),J=V==Ar||V==Vo;if(ir(r))return yd(r,C);if(V==en||V==Yn||J&&!_){if(w=R||J?{}:Ud(r),!C)return R?w0(r,Gy(w,r)):E0(r,Yf(w,r))}else{if(!Fe[V])return _?r:{};w=L0(r,V,C)}}v||(v=new nn);var ne=v.get(r);if(ne)return ne;v.set(r,w),dp(r)?r.forEach(function(ue){w.add(Yt(ue,s,l,ue,r,v))}):hp(r)&&r.forEach(function(ue,Se){w.set(Se,Yt(ue,s,l,Se,r,v))});var le=U?R?fc:hc:R?Dt:ot,Ie=B?t:le(r);return $(Ie||r,function(ue,Se){Ie&&(Se=ue,ue=r[Se]),Qs(w,Se,Yt(ue,s,l,Se,r,v))}),w}function zy(r){var s=ot(r);return function(l){return Jf(l,r,s)}}function Jf(r,s,l){var c=l.length;if(r==null)return!c;for(r=He(r);c--;){var _=l[c],v=s[_],w=r[_];if(w===t&&!(_ in r)||!v(w))return!1}return!0}function Qf(r,s,l){if(typeof r!="function")throw new Kt(u);return io(function(){r.apply(t,l)},s)}function Xs(r,s,l,c){var _=-1,v=re,w=!0,C=r.length,R=[],U=s.length;if(!C)return R;l&&(s=Y(s,Wt(l))),c?(v=de,w=!1):s.length>=o&&(v=Gs,w=!1,s=new Br(s));e:for(;++_<C;){var B=r[_],V=l==null?B:l(B);if(B=c||B!==0?B:0,w&&V===V){for(var J=U;J--;)if(s[J]===V)continue e;R.push(B)}else v(s,V,c)||R.push(B)}return R}var er=Sd(vn),Xf=Sd(ju,!0);function Ky(r,s){var l=!0;return er(r,function(c,_,v){return l=!!s(c,_,v),l}),l}function Aa(r,s,l){for(var c=-1,_=r.length;++c<_;){var v=r[c],w=s(v);if(w!=null&&(C===t?w===w&&!Vt(w):l(w,C)))var C=w,R=v}return R}function jy(r,s,l,c){var _=r.length;for(l=ve(l),l<0&&(l=-l>_?0:_+l),c=c===t||c>_?_:ve(c),c<0&&(c+=_),c=l>c?0:_p(c);l<c;)r[l++]=s;return r}function Zf(r,s){var l=[];return er(r,function(c,_,v){s(c,_,v)&&l.push(c)}),l}function ht(r,s,l,c,_){var v=-1,w=r.length;for(l||(l=x0),_||(_=[]);++v<w;){var C=r[v];s>0&&l(C)?s>1?ht(C,s-1,l,c,_):ke(_,C):c||(_[_.length]=C)}return _}var Ku=Cd(),ed=Cd(!0);function vn(r,s){return r&&Ku(r,s,ot)}function ju(r,s){return r&&ed(r,s,ot)}function Ra(r,s){return Ue(s,function(l){return kn(r[l])})}function Hr(r,s){s=nr(s,r);for(var l=0,c=s.length;r!=null&&l<c;)r=r[In(s[l++])];return l&&l==c?r:t}function td(r,s,l){var c=s(r);return _e(r)?c:ke(c,l(r))}function Tt(r){return r==null?r===t?cu:lu:Fr&&Fr in He(r)?P0(r):q0(r)}function Yu(r,s){return r>s}function Yy(r,s){return r!=null&&Me.call(r,s)}function Jy(r,s){return r!=null&&s in He(r)}function Qy(r,s,l){return r>=mt(s,l)&&r<it(s,l)}function Ju(r,s,l){for(var c=l?de:re,_=r[0].length,v=r.length,w=v,C=k(v),R=1/0,U=[];w--;){var B=r[w];w&&s&&(B=Y(B,Wt(s))),R=mt(B.length,R),C[w]=!l&&(s||_>=120&&B.length>=120)?new Br(w&&B):t}B=r[0];var V=-1,J=C[0];e:for(;++V<_&&U.length<R;){var ne=B[V],le=s?s(ne):ne;if(ne=l||ne!==0?ne:0,!(J?Gs(J,le):c(U,le,l))){for(w=v;--w;){var Ie=C[w];if(!(Ie?Gs(Ie,le):c(r[w],le,l)))continue e}J&&J.push(le),U.push(ne)}}return U}function Xy(r,s,l,c){return vn(r,function(_,v,w){s(c,l(_),v,w)}),c}function Zs(r,s,l){s=nr(s,r),r=Vd(r,s);var c=r==null?r:r[In(Qt(s))];return c==null?t:Q(c,r,l)}function nd(r){return je(r)&&Tt(r)==Yn}function Zy(r){return je(r)&&Tt(r)==ce}function e0(r){return je(r)&&Tt(r)==br}function eo(r,s,l,c,_){return r===s?!0:r==null||s==null||!je(r)&&!je(s)?r!==r&&s!==s:t0(r,s,l,c,eo,_)}function t0(r,s,l,c,_,v){var w=_e(r),C=_e(s),R=w?ai:vt(r),U=C?ai:vt(s);R=R==Yn?en:R,U=U==Yn?en:U;var B=R==en,V=U==en,J=R==U;if(J&&ir(r)){if(!ir(s))return!1;w=!0,B=!1}if(J&&!B)return v||(v=new nn),w||Ui(r)?Md(r,s,l,c,_,v):R0(r,s,R,l,c,_,v);if(!(l&F)){var ne=B&&Me.call(r,"__wrapped__"),le=V&&Me.call(s,"__wrapped__");if(ne||le){var Ie=ne?r.value():r,ue=le?s.value():s;return v||(v=new nn),_(Ie,ue,l,c,v)}}return J?(v||(v=new nn),N0(r,s,l,c,_,v)):!1}function n0(r){return je(r)&&vt(r)==Nt}function Qu(r,s,l,c){var _=l.length,v=_,w=!c;if(r==null)return!v;for(r=He(r);_--;){var C=l[_];if(w&&C[2]?C[1]!==r[C[0]]:!(C[0]in r))return!1}for(;++_<v;){C=l[_];var R=C[0],U=r[R],B=C[1];if(w&&C[2]){if(U===t&&!(R in r))return!1}else{var V=new nn;if(c)var J=c(U,B,R,r,s,V);if(!(J===t?eo(B,U,F|W,c,V):J))return!1}}return!0}function rd(r){if(!Ke(r)||U0(r))return!1;var s=kn(r)?ny:Jo;return s.test(qr(r))}function r0(r){return je(r)&&Tt(r)==Nr}function i0(r){return je(r)&&vt(r)==Ft}function s0(r){return je(r)&&Ga(r.length)&&!!xe[Tt(r)]}function id(r){return typeof r=="function"?r:r==null?kt:typeof r=="object"?_e(r)?ad(r[0],r[1]):od(r):bp(r)}function Xu(r){if(!ro(r))return ly(r);var s=[];for(var l in He(r))Me.call(r,l)&&l!="constructor"&&s.push(l);return s}function o0(r){if(!Ke(r))return V0(r);var s=ro(r),l=[];for(var c in r)c=="constructor"&&(s||!Me.call(r,c))||l.push(c);return l}function Zu(r,s){return r<s}function sd(r,s){var l=-1,c=Ot(r)?k(r.length):[];return er(r,function(_,v,w){c[++l]=s(_,v,w)}),c}function od(r){var s=pc(r);return s.length==1&&s[0][2]?Wd(s[0][0],s[0][1]):function(l){return l===r||Qu(l,r,s)}}function ad(r,s){return gc(r)&&Bd(s)?Wd(In(r),s):function(l){var c=bc(l,r);return c===t&&c===s?Ac(l,r):eo(s,c,F|W)}}function Na(r,s,l,c,_){r!==s&&Ku(s,function(v,w){if(_||(_=new nn),Ke(v))a0(r,s,w,l,Na,c,_);else{var C=c?c(vc(r,w),v,w+"",r,s,_):t;C===t&&(C=v),Gu(r,w,C)}},Dt)}function a0(r,s,l,c,_,v,w){var C=vc(r,l),R=vc(s,l),U=w.get(R);if(U){Gu(r,l,U);return}var B=v?v(C,R,l+"",r,s,w):t,V=B===t;if(V){var J=_e(R),ne=!J&&ir(R),le=!J&&!ne&&Ui(R);B=R,J||ne||le?_e(C)?B=C:Xe(C)?B=Pt(C):ne?(V=!1,B=yd(R,!0)):le?(V=!1,B=Id(R,!0)):B=[]:so(R)||$r(R)?(B=C,$r(C)?B=gp(C):(!Ke(C)||kn(C))&&(B=Ud(R))):V=!1}V&&(w.set(R,B),_(B,R,c,v,w),w.delete(R)),Gu(r,l,B)}function ld(r,s){var l=r.length;if(l)return s+=s<0?l:0,Dn(s,l)?r[s]:t}function ud(r,s,l){s.length?s=Y(s,function(v){return _e(v)?function(w){return Hr(w,v.length===1?v[0]:v)}:v}):s=[kt];var c=-1;s=Y(s,Wt(ae()));var _=sd(r,function(v,w,C){var R=Y(s,function(U){return U(v)});return{criteria:R,index:++c,value:v}});return Lv(_,function(v,w){return I0(v,w,l)})}function l0(r,s){return cd(r,s,function(l,c){return Ac(r,c)})}function cd(r,s,l){for(var c=-1,_=s.length,v={};++c<_;){var w=s[c],C=Hr(r,w);l(C,w)&&to(v,nr(w,r),C)}return v}function u0(r){return function(s){return Hr(s,r)}}function ec(r,s,l,c){var _=c?kv:Ai,v=-1,w=s.length,C=r;for(r===s&&(s=Pt(s)),l&&(C=Y(r,Wt(l)));++v<w;)for(var R=0,U=s[v],B=l?l(U):U;(R=_(C,B,R,c))>-1;)C!==r&&ya.call(C,R,1),ya.call(r,R,1);return r}function hd(r,s){for(var l=r?s.length:0,c=l-1;l--;){var _=s[l];if(l==c||_!==v){var v=_;Dn(_)?ya.call(r,_,1):ic(r,_)}}return r}function tc(r,s){return r+wa(Gf()*(s-r+1))}function c0(r,s,l,c){for(var _=-1,v=it(Ea((s-r)/(l||1)),0),w=k(v);v--;)w[c?v:++_]=r,r+=l;return w}function nc(r,s){var l="";if(!r||s<1||s>et)return l;do s%2&&(l+=r),s=wa(s/2),s&&(r+=r);while(s);return l}function Ee(r,s){return yc(Hd(r,s,kt),r+"")}function h0(r){return jf(Bi(r))}function f0(r,s){var l=Bi(r);return Ba(l,Wr(s,0,l.length))}function to(r,s,l,c){if(!Ke(r))return r;s=nr(s,r);for(var _=-1,v=s.length,w=v-1,C=r;C!=null&&++_<v;){var R=In(s[_]),U=l;if(R==="__proto__"||R==="constructor"||R==="prototype")return r;if(_!=w){var B=C[R];U=c?c(B,R,C):t,U===t&&(U=Ke(B)?B:Dn(s[_+1])?[]:{})}Qs(C,R,U),C=C[R]}return r}var fd=Ta?function(r,s){return Ta.set(r,s),r}:kt,d0=Ia?function(r,s){return Ia(r,"toString",{configurable:!0,enumerable:!1,value:Nc(s),writable:!0})}:kt;function p0(r){return Ba(Bi(r))}function Jt(r,s,l){var c=-1,_=r.length;s<0&&(s=-s>_?0:_+s),l=l>_?_:l,l<0&&(l+=_),_=s>l?0:l-s>>>0,s>>>=0;for(var v=k(_);++c<_;)v[c]=r[c+s];return v}function _0(r,s){var l;return er(r,function(c,_,v){return l=s(c,_,v),!l}),!!l}function Pa(r,s,l){var c=0,_=r==null?c:r.length;if(typeof s=="number"&&s===s&&_<=iu){for(;c<_;){var v=c+_>>>1,w=r[v];w!==null&&!Vt(w)&&(l?w<=s:w<s)?c=v+1:_=v}return _}return rc(r,s,kt,l)}function rc(r,s,l,c){var _=0,v=r==null?0:r.length;if(v===0)return 0;s=l(s);for(var w=s!==s,C=s===null,R=Vt(s),U=s===t;_<v;){var B=wa((_+v)/2),V=l(r[B]),J=V!==t,ne=V===null,le=V===V,Ie=Vt(V);if(w)var ue=c||le;else U?ue=le&&(c||J):C?ue=le&&J&&(c||!ne):R?ue=le&&J&&!ne&&(c||!Ie):ne||Ie?ue=!1:ue=c?V<=s:V<s;ue?_=B+1:v=B}return mt(v,ru)}function dd(r,s){for(var l=-1,c=r.length,_=0,v=[];++l<c;){var w=r[l],C=s?s(w):w;if(!l||!rn(C,R)){var R=C;v[_++]=w===0?0:w}}return v}function pd(r){return typeof r=="number"?r:Vt(r)?jn:+r}function Ht(r){if(typeof r=="string")return r;if(_e(r))return Y(r,Ht)+"";if(Vt(r))return zf?zf.call(r):"";var s=r+"";return s=="0"&&1/r==-1/0?"-0":s}function tr(r,s,l){var c=-1,_=re,v=r.length,w=!0,C=[],R=C;if(l)w=!1,_=de;else if(v>=o){var U=s?null:b0(r);if(U)return ha(U);w=!1,_=Gs,R=new Br}else R=s?[]:C;e:for(;++c<v;){var B=r[c],V=s?s(B):B;if(B=l||B!==0?B:0,w&&V===V){for(var J=R.length;J--;)if(R[J]===V)continue e;s&&R.push(V),C.push(B)}else _(R,V,l)||(R!==C&&R.push(V),C.push(B))}return C}function ic(r,s){return s=nr(s,r),r=Vd(r,s),r==null||delete r[In(Qt(s))]}function _d(r,s,l,c){return to(r,s,l(Hr(r,s)),c)}function Oa(r,s,l,c){for(var _=r.length,v=c?_:-1;(c?v--:++v<_)&&s(r[v],v,r););return l?Jt(r,c?0:v,c?v+1:_):Jt(r,c?v+1:0,c?_:v)}function gd(r,s){var l=r;return l instanceof be&&(l=l.value()),ze(s,function(c,_){return _.func.apply(_.thisArg,ke([c],_.args))},l)}function sc(r,s,l){var c=r.length;if(c<2)return c?tr(r[0]):[];for(var _=-1,v=k(c);++_<c;)for(var w=r[_],C=-1;++C<c;)C!=_&&(v[_]=Xs(v[_]||w,r[C],s,l));return tr(ht(v,1),s,l)}function md(r,s,l){for(var c=-1,_=r.length,v=s.length,w={};++c<_;){var C=c<v?s[c]:t;l(w,r[c],C)}return w}function oc(r){return Xe(r)?r:[]}function ac(r){return typeof r=="function"?r:kt}function nr(r,s){return _e(r)?r:gc(r,s)?[r]:zd(Le(r))}var g0=Ee;function rr(r,s,l){var c=r.length;return l=l===t?c:l,!s&&l>=c?r:Jt(r,s,l)}var vd=ry||function(r){return Qe.clearTimeout(r)};function yd(r,s){if(s)return r.slice();var l=r.length,c=Wf?Wf(l):new r.constructor(l);return r.copy(c),c}function lc(r){var s=new r.constructor(r.byteLength);return new ma(s).set(new ma(r)),s}function m0(r,s){var l=s?lc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function v0(r){var s=new r.constructor(r.source,pi.exec(r));return s.lastIndex=r.lastIndex,s}function y0(r){return Js?He(Js.call(r)):{}}function Id(r,s){var l=s?lc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function Ed(r,s){if(r!==s){var l=r!==t,c=r===null,_=r===r,v=Vt(r),w=s!==t,C=s===null,R=s===s,U=Vt(s);if(!C&&!U&&!v&&r>s||v&&w&&R&&!C&&!U||c&&w&&R||!l&&R||!_)return 1;if(!c&&!v&&!U&&r<s||U&&l&&_&&!c&&!v||C&&l&&_||!w&&_||!R)return-1}return 0}function I0(r,s,l){for(var c=-1,_=r.criteria,v=s.criteria,w=_.length,C=l.length;++c<w;){var R=Ed(_[c],v[c]);if(R){if(c>=C)return R;var U=l[c];return R*(U=="desc"?-1:1)}}return r.index-s.index}function wd(r,s,l,c){for(var _=-1,v=r.length,w=l.length,C=-1,R=s.length,U=it(v-w,0),B=k(R+U),V=!c;++C<R;)B[C]=s[C];for(;++_<w;)(V||_<v)&&(B[l[_]]=r[_]);for(;U--;)B[C++]=r[_++];return B}function Td(r,s,l,c){for(var _=-1,v=r.length,w=-1,C=l.length,R=-1,U=s.length,B=it(v-C,0),V=k(B+U),J=!c;++_<B;)V[_]=r[_];for(var ne=_;++R<U;)V[ne+R]=s[R];for(;++w<C;)(J||_<v)&&(V[ne+l[w]]=r[_++]);return V}function Pt(r,s){var l=-1,c=r.length;for(s||(s=k(c));++l<c;)s[l]=r[l];return s}function yn(r,s,l,c){var _=!l;l||(l={});for(var v=-1,w=s.length;++v<w;){var C=s[v],R=c?c(l[C],r[C],C,l,r):t;R===t&&(R=r[C]),_?Nn(l,C,R):Qs(l,C,R)}return l}function E0(r,s){return yn(r,_c(r),s)}function w0(r,s){return yn(r,xd(r),s)}function Da(r,s){return function(l,c){var _=_e(l)?K:$y,v=s?s():{};return _(l,r,ae(c,2),v)}}function Mi(r){return Ee(function(s,l){var c=-1,_=l.length,v=_>1?l[_-1]:t,w=_>2?l[2]:t;for(v=r.length>3&&typeof v=="function"?(_--,v):t,w&&St(l[0],l[1],w)&&(v=_<3?t:v,_=1),s=He(s);++c<_;){var C=l[c];C&&r(s,C,c,v)}return s})}function Sd(r,s){return function(l,c){if(l==null)return l;if(!Ot(l))return r(l,c);for(var _=l.length,v=s?_:-1,w=He(l);(s?v--:++v<_)&&c(w[v],v,w)!==!1;);return l}}function Cd(r){return function(s,l,c){for(var _=-1,v=He(s),w=c(s),C=w.length;C--;){var R=w[r?C:++_];if(l(v[R],R,v)===!1)break}return s}}function T0(r,s,l){var c=s&D,_=no(r);function v(){var w=this&&this!==Qe&&this instanceof v?_:r;return w.apply(c?l:this,arguments)}return v}function bd(r){return function(s){s=Le(s);var l=Ri(s)?tn(s):t,c=l?l[0]:s.charAt(0),_=l?rr(l,1).join(""):s.slice(1);return c[r]()+_}}function xi(r){return function(s){return ze(Sp(Tp(s).replace(Ws,"")),r,"")}}function no(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Li(r.prototype),c=r.apply(l,s);return Ke(c)?c:l}}function S0(r,s,l){var c=no(r);function _(){for(var v=arguments.length,w=k(v),C=v,R=Fi(_);C--;)w[C]=arguments[C];var U=v<3&&w[0]!==R&&w[v-1]!==R?[]:Xn(w,R);if(v-=U.length,v<l)return Od(r,s,ka,_.placeholder,t,w,U,t,t,l-v);var B=this&&this!==Qe&&this instanceof _?c:r;return Q(B,this,w)}return _}function Ad(r){return function(s,l,c){var _=He(s);if(!Ot(s)){var v=ae(l,3);s=ot(s),l=function(C){return v(_[C],C,_)}}var w=r(s,l,c);return w>-1?_[v?s[w]:w]:t}}function Rd(r){return On(function(s){var l=s.length,c=l,_=jt.prototype.thru;for(r&&s.reverse();c--;){var v=s[c];if(typeof v!="function")throw new Kt(u);if(_&&!w&&Fa(v)=="wrapper")var w=new jt([],!0)}for(c=w?c:l;++c<l;){v=s[c];var C=Fa(v),R=C=="wrapper"?dc(v):t;R&&mc(R[0])&&R[1]==(Oe|te|ge|Re)&&!R[4].length&&R[9]==1?w=w[Fa(R[0])].apply(w,R[3]):w=v.length==1&&mc(v)?w[C]():w.thru(v)}return function(){var U=arguments,B=U[0];if(w&&U.length==1&&_e(B))return w.plant(B).value();for(var V=0,J=l?s[V].apply(this,U):B;++V<l;)J=s[V].call(this,J);return J}})}function ka(r,s,l,c,_,v,w,C,R,U){var B=s&Oe,V=s&D,J=s&M,ne=s&(te|ie),le=s&nt,Ie=J?t:no(r);function ue(){for(var Se=arguments.length,Ae=k(Se),qt=Se;qt--;)Ae[qt]=arguments[qt];if(ne)var Ct=Fi(ue),$t=xv(Ae,Ct);if(c&&(Ae=wd(Ae,c,_,ne)),v&&(Ae=Td(Ae,v,w,ne)),Se-=$t,ne&&Se<U){var Ze=Xn(Ae,Ct);return Od(r,s,ka,ue.placeholder,l,Ae,Ze,C,R,U-Se)}var sn=V?l:this,Mn=J?sn[r]:r;return Se=Ae.length,C?Ae=$0(Ae,C):le&&Se>1&&Ae.reverse(),B&&R<Se&&(Ae.length=R),this&&this!==Qe&&this instanceof ue&&(Mn=Ie||no(Mn)),Mn.apply(sn,Ae)}return ue}function Nd(r,s){return function(l,c){return Xy(l,r,s(c),{})}}function La(r,s){return function(l,c){var _;if(l===t&&c===t)return s;if(l!==t&&(_=l),c!==t){if(_===t)return c;typeof l=="string"||typeof c=="string"?(l=Ht(l),c=Ht(c)):(l=pd(l),c=pd(c)),_=r(l,c)}return _}}function uc(r){return On(function(s){return s=Y(s,Wt(ae())),Ee(function(l){var c=this;return r(s,function(_){return Q(_,c,l)})})})}function Ma(r,s){s=s===t?" ":Ht(s);var l=s.length;if(l<2)return l?nc(s,r):s;var c=nc(s,Ea(r/Ni(s)));return Ri(s)?rr(tn(c),0,r).join(""):c.slice(0,r)}function C0(r,s,l,c){var _=s&D,v=no(r);function w(){for(var C=-1,R=arguments.length,U=-1,B=c.length,V=k(B+R),J=this&&this!==Qe&&this instanceof w?v:r;++U<B;)V[U]=c[U];for(;R--;)V[U++]=arguments[++C];return Q(J,_?l:this,V)}return w}function Pd(r){return function(s,l,c){return c&&typeof c!="number"&&St(s,l,c)&&(l=c=t),s=Ln(s),l===t?(l=s,s=0):l=Ln(l),c=c===t?s<l?1:-1:Ln(c),c0(s,l,c,r)}}function xa(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Xt(s),l=Xt(l)),r(s,l)}}function Od(r,s,l,c,_,v,w,C,R,U){var B=s&te,V=B?w:t,J=B?t:w,ne=B?v:t,le=B?t:v;s|=B?ge:$e,s&=~(B?$e:ge),s&q||(s&=-4);var Ie=[r,s,_,ne,V,le,J,C,R,U],ue=l.apply(t,Ie);return mc(r)&&qd(ue,Ie),ue.placeholder=c,$d(ue,r,s)}function cc(r){var s=rt[r];return function(l,c){if(l=Xt(l),c=c==null?0:mt(ve(c),292),c&&$f(l)){var _=(Le(l)+"e").split("e"),v=s(_[0]+"e"+(+_[1]+c));return _=(Le(v)+"e").split("e"),+(_[0]+"e"+(+_[1]-c))}return s(l)}}var b0=Di&&1/ha(new Di([,-0]))[1]==ye?function(r){return new Di(r)}:Dc;function Dd(r){return function(s){var l=vt(s);return l==Nt?Wu(s):l==Ft?qv(s):Mv(s,r(s))}}function Pn(r,s,l,c,_,v,w,C){var R=s&M;if(!R&&typeof r!="function")throw new Kt(u);var U=c?c.length:0;if(U||(s&=-97,c=_=t),w=w===t?w:it(ve(w),0),C=C===t?C:ve(C),U-=_?_.length:0,s&$e){var B=c,V=_;c=_=t}var J=R?t:dc(r),ne=[r,s,l,c,_,B,V,v,w,C];if(J&&H0(ne,J),r=ne[0],s=ne[1],l=ne[2],c=ne[3],_=ne[4],C=ne[9]=ne[9]===t?R?0:r.length:it(ne[9]-U,0),!C&&s&(te|ie)&&(s&=-25),!s||s==D)var le=T0(r,s,l);else s==te||s==ie?le=S0(r,s,C):(s==ge||s==(D|ge))&&!_.length?le=C0(r,s,l,c):le=ka.apply(t,ne);var Ie=J?fd:qd;return $d(Ie(le,ne),r,s)}function kd(r,s,l,c){return r===t||rn(r,Oi[l])&&!Me.call(c,l)?s:r}function Ld(r,s,l,c,_,v){return Ke(r)&&Ke(s)&&(v.set(s,r),Na(r,s,t,Ld,v),v.delete(s)),r}function A0(r){return so(r)?t:r}function Md(r,s,l,c,_,v){var w=l&F,C=r.length,R=s.length;if(C!=R&&!(w&&R>C))return!1;var U=v.get(r),B=v.get(s);if(U&&B)return U==s&&B==r;var V=-1,J=!0,ne=l&W?new Br:t;for(v.set(r,s),v.set(s,r);++V<C;){var le=r[V],Ie=s[V];if(c)var ue=w?c(Ie,le,V,s,r,v):c(le,Ie,V,r,s,v);if(ue!==t){if(ue)continue;J=!1;break}if(ne){if(!Bt(s,function(Se,Ae){if(!Gs(ne,Ae)&&(le===Se||_(le,Se,l,c,v)))return ne.push(Ae)})){J=!1;break}}else if(!(le===Ie||_(le,Ie,l,c,v))){J=!1;break}}return v.delete(r),v.delete(s),J}function R0(r,s,l,c,_,v,w){switch(l){case Sn:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case ce:return!(r.byteLength!=s.byteLength||!v(new ma(r),new ma(s)));case Cr:case br:case Rr:return rn(+r,+s);case li:return r.name==s.name&&r.message==s.message;case Nr:case Pr:return r==s+"";case Nt:var C=Wu;case Ft:var R=c&F;if(C||(C=ha),r.size!=s.size&&!R)return!1;var U=w.get(r);if(U)return U==s;c|=W,w.set(r,s);var B=Md(C(r),C(s),c,_,v,w);return w.delete(r),B;case Or:if(Js)return Js.call(r)==Js.call(s)}return!1}function N0(r,s,l,c,_,v){var w=l&F,C=hc(r),R=C.length,U=hc(s),B=U.length;if(R!=B&&!w)return!1;for(var V=R;V--;){var J=C[V];if(!(w?J in s:Me.call(s,J)))return!1}var ne=v.get(r),le=v.get(s);if(ne&&le)return ne==s&&le==r;var Ie=!0;v.set(r,s),v.set(s,r);for(var ue=w;++V<R;){J=C[V];var Se=r[J],Ae=s[J];if(c)var qt=w?c(Ae,Se,J,s,r,v):c(Se,Ae,J,r,s,v);if(!(qt===t?Se===Ae||_(Se,Ae,l,c,v):qt)){Ie=!1;break}ue||(ue=J=="constructor")}if(Ie&&!ue){var Ct=r.constructor,$t=s.constructor;Ct!=$t&&"constructor"in r&&"constructor"in s&&!(typeof Ct=="function"&&Ct instanceof Ct&&typeof $t=="function"&&$t instanceof $t)&&(Ie=!1)}return v.delete(r),v.delete(s),Ie}function On(r){return yc(Hd(r,t,Jd),r+"")}function hc(r){return td(r,ot,_c)}function fc(r){return td(r,Dt,xd)}var dc=Ta?function(r){return Ta.get(r)}:Dc;function Fa(r){for(var s=r.name+"",l=ki[s],c=Me.call(ki,s)?l.length:0;c--;){var _=l[c],v=_.func;if(v==null||v==r)return _.name}return s}function Fi(r){var s=Me.call(m,"placeholder")?m:r;return s.placeholder}function ae(){var r=m.iteratee||Pc;return r=r===Pc?id:r,arguments.length?r(arguments[0],arguments[1]):r}function Ua(r,s){var l=r.__data__;return F0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function pc(r){for(var s=ot(r),l=s.length;l--;){var c=s[l],_=r[c];s[l]=[c,_,Bd(_)]}return s}function Vr(r,s){var l=Wv(r,s);return rd(l)?l:t}function P0(r){var s=Me.call(r,Fr),l=r[Fr];try{r[Fr]=t;var c=!0}catch{}var _=_a.call(r);return c&&(s?r[Fr]=l:delete r[Fr]),_}var _c=Vu?function(r){return r==null?[]:(r=He(r),Ue(Vu(r),function(s){return Vf.call(r,s)}))}:kc,xd=Vu?function(r){for(var s=[];r;)ke(s,_c(r)),r=va(r);return s}:kc,vt=Tt;(qu&&vt(new qu(new ArrayBuffer(1)))!=Sn||Ks&&vt(new Ks)!=Nt||$u&&vt($u.resolve())!=qo||Di&&vt(new Di)!=Ft||js&&vt(new js)!=ui)&&(vt=function(r){var s=Tt(r),l=s==en?r.constructor:t,c=l?qr(l):"";if(c)switch(c){case fy:return Sn;case dy:return Nt;case py:return qo;case _y:return Ft;case gy:return ui}return s});function O0(r,s,l){for(var c=-1,_=l.length;++c<_;){var v=l[c],w=v.size;switch(v.type){case"drop":r+=w;break;case"dropRight":s-=w;break;case"take":s=mt(s,r+w);break;case"takeRight":r=it(r,s-w);break}}return{start:r,end:s}}function D0(r){var s=r.match(mu);return s?s[1].split(vu):[]}function Fd(r,s,l){s=nr(s,r);for(var c=-1,_=s.length,v=!1;++c<_;){var w=In(s[c]);if(!(v=r!=null&&l(r,w)))break;r=r[w]}return v||++c!=_?v:(_=r==null?0:r.length,!!_&&Ga(_)&&Dn(w,_)&&(_e(r)||$r(r)))}function k0(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Me.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function Ud(r){return typeof r.constructor=="function"&&!ro(r)?Li(va(r)):{}}function L0(r,s,l){var c=r.constructor;switch(s){case ce:return lc(r);case Cr:case br:return new c(+r);case Sn:return m0(r,l);case ci:case ms:case Dr:case hi:case fi:case vs:case ys:case Jn:case di:return Id(r,l);case Nt:return new c;case Rr:case Pr:return new c(r);case Nr:return v0(r);case Ft:return new c;case Or:return y0(r)}}function M0(r,s){var l=s.length;if(!l)return r;var c=l-1;return s[c]=(l>1?"& ":"")+s[c],s=s.join(l>2?", ":" "),r.replace(st,`{
/* [wrapped with `+s+`] */
`)}function x0(r){return _e(r)||$r(r)||!!(qf&&r&&r[qf])}function Dn(r,s){var l=typeof r;return s=s??et,!!s&&(l=="number"||l!="symbol"&&_i.test(r))&&r>-1&&r%1==0&&r<s}function St(r,s,l){if(!Ke(l))return!1;var c=typeof s;return(c=="number"?Ot(l)&&Dn(s,l.length):c=="string"&&s in l)?rn(l[s],r):!1}function gc(r,s){if(_e(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||Vt(r)?!0:ws.test(r)||!pu.test(r)||s!=null&&r in He(s)}function F0(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function mc(r){var s=Fa(r),l=m[s];if(typeof l!="function"||!(s in be.prototype))return!1;if(r===l)return!0;var c=dc(l);return!!c&&r===c[0]}function U0(r){return!!Bf&&Bf in r}var B0=da?kn:Lc;function ro(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Oi;return r===l}function Bd(r){return r===r&&!Ke(r)}function Wd(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==t||r in He(l))}}function W0(r){var s=qa(r,function(c){return l.size===g&&l.clear(),c}),l=s.cache;return s}function H0(r,s){var l=r[1],c=s[1],_=l|c,v=_<(D|M|Oe),w=c==Oe&&l==te||c==Oe&&l==Re&&r[7].length<=s[8]||c==(Oe|Re)&&s[7].length<=s[8]&&l==te;if(!(v||w))return r;c&D&&(r[2]=s[2],_|=l&D?0:q);var C=s[3];if(C){var R=r[3];r[3]=R?wd(R,C,s[4]):C,r[4]=R?Xn(r[3],E):s[4]}return C=s[5],C&&(R=r[5],r[5]=R?Td(R,C,s[6]):C,r[6]=R?Xn(r[5],E):s[6]),C=s[7],C&&(r[7]=C),c&Oe&&(r[8]=r[8]==null?s[8]:mt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=_,r}function V0(r){var s=[];if(r!=null)for(var l in He(r))s.push(l);return s}function q0(r){return _a.call(r)}function Hd(r,s,l){return s=it(s===t?r.length-1:s,0),function(){for(var c=arguments,_=-1,v=it(c.length-s,0),w=k(v);++_<v;)w[_]=c[s+_];_=-1;for(var C=k(s+1);++_<s;)C[_]=c[_];return C[s]=l(w),Q(r,this,C)}}function Vd(r,s){return s.length<2?r:Hr(r,Jt(s,0,-1))}function $0(r,s){for(var l=r.length,c=mt(s.length,l),_=Pt(r);c--;){var v=s[c];r[c]=Dn(v,l)?_[v]:t}return r}function vc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var qd=Gd(fd),io=sy||function(r,s){return Qe.setTimeout(r,s)},yc=Gd(d0);function $d(r,s,l){var c=s+"";return yc(r,M0(c,G0(D0(c),l)))}function Gd(r){var s=0,l=0;return function(){var c=uy(),_=j-(c-l);if(l=c,_>0){if(++s>=ee)return arguments[0]}else s=0;return r.apply(t,arguments)}}function Ba(r,s){var l=-1,c=r.length,_=c-1;for(s=s===t?c:s;++l<s;){var v=tc(l,_),w=r[v];r[v]=r[l],r[l]=w}return r.length=s,r}var zd=W0(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Ts,function(l,c,_,v){s.push(_?v.replace(Iu,"$1"):c||l)}),s});function In(r){if(typeof r=="string"||Vt(r))return r;var s=r+"";return s=="0"&&1/r==-1/0?"-0":s}function qr(r){if(r!=null){try{return pa.call(r)}catch{}try{return r+""}catch{}}return""}function G0(r,s){return $(su,function(l){var c="_."+l[0];s&l[1]&&!re(r,c)&&r.push(c)}),r.sort()}function Kd(r){if(r instanceof be)return r.clone();var s=new jt(r.__wrapped__,r.__chain__);return s.__actions__=Pt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function z0(r,s,l){(l?St(r,s,l):s===t)?s=1:s=it(ve(s),0);var c=r==null?0:r.length;if(!c||s<1)return[];for(var _=0,v=0,w=k(Ea(c/s));_<c;)w[v++]=Jt(r,_,_+=s);return w}function K0(r){for(var s=-1,l=r==null?0:r.length,c=0,_=[];++s<l;){var v=r[s];v&&(_[c++]=v)}return _}function j0(){var r=arguments.length;if(!r)return[];for(var s=k(r-1),l=arguments[0],c=r;c--;)s[c-1]=arguments[c];return ke(_e(l)?Pt(l):[l],ht(s,1))}var Y0=Ee(function(r,s){return Xe(r)?Xs(r,ht(s,1,Xe,!0)):[]}),J0=Ee(function(r,s){var l=Qt(s);return Xe(l)&&(l=t),Xe(r)?Xs(r,ht(s,1,Xe,!0),ae(l,2)):[]}),Q0=Ee(function(r,s){var l=Qt(s);return Xe(l)&&(l=t),Xe(r)?Xs(r,ht(s,1,Xe,!0),t,l):[]});function X0(r,s,l){var c=r==null?0:r.length;return c?(s=l||s===t?1:ve(s),Jt(r,s<0?0:s,c)):[]}function Z0(r,s,l){var c=r==null?0:r.length;return c?(s=l||s===t?1:ve(s),s=c-s,Jt(r,0,s<0?0:s)):[]}function eI(r,s){return r&&r.length?Oa(r,ae(s,3),!0,!0):[]}function tI(r,s){return r&&r.length?Oa(r,ae(s,3),!0):[]}function nI(r,s,l,c){var _=r==null?0:r.length;return _?(l&&typeof l!="number"&&St(r,s,l)&&(l=0,c=_),jy(r,s,l,c)):[]}function jd(r,s,l){var c=r==null?0:r.length;if(!c)return-1;var _=l==null?0:ve(l);return _<0&&(_=it(c+_,0)),xr(r,ae(s,3),_)}function Yd(r,s,l){var c=r==null?0:r.length;if(!c)return-1;var _=c-1;return l!==t&&(_=ve(l),_=l<0?it(c+_,0):mt(_,c-1)),xr(r,ae(s,3),_,!0)}function Jd(r){var s=r==null?0:r.length;return s?ht(r,1):[]}function rI(r){var s=r==null?0:r.length;return s?ht(r,ye):[]}function iI(r,s){var l=r==null?0:r.length;return l?(s=s===t?1:ve(s),ht(r,s)):[]}function sI(r){for(var s=-1,l=r==null?0:r.length,c={};++s<l;){var _=r[s];c[_[0]]=_[1]}return c}function Qd(r){return r&&r.length?r[0]:t}function oI(r,s,l){var c=r==null?0:r.length;if(!c)return-1;var _=l==null?0:ve(l);return _<0&&(_=it(c+_,0)),Ai(r,s,_)}function aI(r){var s=r==null?0:r.length;return s?Jt(r,0,-1):[]}var lI=Ee(function(r){var s=Y(r,oc);return s.length&&s[0]===r[0]?Ju(s):[]}),uI=Ee(function(r){var s=Qt(r),l=Y(r,oc);return s===Qt(l)?s=t:l.pop(),l.length&&l[0]===r[0]?Ju(l,ae(s,2)):[]}),cI=Ee(function(r){var s=Qt(r),l=Y(r,oc);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===r[0]?Ju(l,t,s):[]});function hI(r,s){return r==null?"":ay.call(r,s)}function Qt(r){var s=r==null?0:r.length;return s?r[s-1]:t}function fI(r,s,l){var c=r==null?0:r.length;if(!c)return-1;var _=c;return l!==t&&(_=ve(l),_=_<0?it(c+_,0):mt(_,c-1)),s===s?Gv(r,s,_):xr(r,Of,_,!0)}function dI(r,s){return r&&r.length?ld(r,ve(s)):t}var pI=Ee(Xd);function Xd(r,s){return r&&r.length&&s&&s.length?ec(r,s):r}function _I(r,s,l){return r&&r.length&&s&&s.length?ec(r,s,ae(l,2)):r}function gI(r,s,l){return r&&r.length&&s&&s.length?ec(r,s,t,l):r}var mI=On(function(r,s){var l=r==null?0:r.length,c=zu(r,s);return hd(r,Y(s,function(_){return Dn(_,l)?+_:_}).sort(Ed)),c});function vI(r,s){var l=[];if(!(r&&r.length))return l;var c=-1,_=[],v=r.length;for(s=ae(s,3);++c<v;){var w=r[c];s(w,c,r)&&(l.push(w),_.push(c))}return hd(r,_),l}function Ic(r){return r==null?r:hy.call(r)}function yI(r,s,l){var c=r==null?0:r.length;return c?(l&&typeof l!="number"&&St(r,s,l)?(s=0,l=c):(s=s==null?0:ve(s),l=l===t?c:ve(l)),Jt(r,s,l)):[]}function II(r,s){return Pa(r,s)}function EI(r,s,l){return rc(r,s,ae(l,2))}function wI(r,s){var l=r==null?0:r.length;if(l){var c=Pa(r,s);if(c<l&&rn(r[c],s))return c}return-1}function TI(r,s){return Pa(r,s,!0)}function SI(r,s,l){return rc(r,s,ae(l,2),!0)}function CI(r,s){var l=r==null?0:r.length;if(l){var c=Pa(r,s,!0)-1;if(rn(r[c],s))return c}return-1}function bI(r){return r&&r.length?dd(r):[]}function AI(r,s){return r&&r.length?dd(r,ae(s,2)):[]}function RI(r){var s=r==null?0:r.length;return s?Jt(r,1,s):[]}function NI(r,s,l){return r&&r.length?(s=l||s===t?1:ve(s),Jt(r,0,s<0?0:s)):[]}function PI(r,s,l){var c=r==null?0:r.length;return c?(s=l||s===t?1:ve(s),s=c-s,Jt(r,s<0?0:s,c)):[]}function OI(r,s){return r&&r.length?Oa(r,ae(s,3),!1,!0):[]}function DI(r,s){return r&&r.length?Oa(r,ae(s,3)):[]}var kI=Ee(function(r){return tr(ht(r,1,Xe,!0))}),LI=Ee(function(r){var s=Qt(r);return Xe(s)&&(s=t),tr(ht(r,1,Xe,!0),ae(s,2))}),MI=Ee(function(r){var s=Qt(r);return s=typeof s=="function"?s:t,tr(ht(r,1,Xe,!0),t,s)});function xI(r){return r&&r.length?tr(r):[]}function FI(r,s){return r&&r.length?tr(r,ae(s,2)):[]}function UI(r,s){return s=typeof s=="function"?s:t,r&&r.length?tr(r,t,s):[]}function Ec(r){if(!(r&&r.length))return[];var s=0;return r=Ue(r,function(l){if(Xe(l))return s=it(l.length,s),!0}),Uu(s,function(l){return Y(r,Mu(l))})}function Zd(r,s){if(!(r&&r.length))return[];var l=Ec(r);return s==null?l:Y(l,function(c){return Q(s,t,c)})}var BI=Ee(function(r,s){return Xe(r)?Xs(r,s):[]}),WI=Ee(function(r){return sc(Ue(r,Xe))}),HI=Ee(function(r){var s=Qt(r);return Xe(s)&&(s=t),sc(Ue(r,Xe),ae(s,2))}),VI=Ee(function(r){var s=Qt(r);return s=typeof s=="function"?s:t,sc(Ue(r,Xe),t,s)}),qI=Ee(Ec);function $I(r,s){return md(r||[],s||[],Qs)}function GI(r,s){return md(r||[],s||[],to)}var zI=Ee(function(r){var s=r.length,l=s>1?r[s-1]:t;return l=typeof l=="function"?(r.pop(),l):t,Zd(r,l)});function ep(r){var s=m(r);return s.__chain__=!0,s}function KI(r,s){return s(r),r}function Wa(r,s){return s(r)}var jI=On(function(r){var s=r.length,l=s?r[0]:0,c=this.__wrapped__,_=function(v){return zu(v,r)};return s>1||this.__actions__.length||!(c instanceof be)||!Dn(l)?this.thru(_):(c=c.slice(l,+l+(s?1:0)),c.__actions__.push({func:Wa,args:[_],thisArg:t}),new jt(c,this.__chain__).thru(function(v){return s&&!v.length&&v.push(t),v}))});function YI(){return ep(this)}function JI(){return new jt(this.value(),this.__chain__)}function QI(){this.__values__===t&&(this.__values__=pp(this.value()));var r=this.__index__>=this.__values__.length,s=r?t:this.__values__[this.__index__++];return{done:r,value:s}}function XI(){return this}function ZI(r){for(var s,l=this;l instanceof Ca;){var c=Kd(l);c.__index__=0,c.__values__=t,s?_.__wrapped__=c:s=c;var _=c;l=l.__wrapped__}return _.__wrapped__=r,s}function eE(){var r=this.__wrapped__;if(r instanceof be){var s=r;return this.__actions__.length&&(s=new be(this)),s=s.reverse(),s.__actions__.push({func:Wa,args:[Ic],thisArg:t}),new jt(s,this.__chain__)}return this.thru(Ic)}function tE(){return gd(this.__wrapped__,this.__actions__)}var nE=Da(function(r,s,l){Me.call(r,l)?++r[l]:Nn(r,l,1)});function rE(r,s,l){var c=_e(r)?De:Ky;return l&&St(r,s,l)&&(s=t),c(r,ae(s,3))}function iE(r,s){var l=_e(r)?Ue:Zf;return l(r,ae(s,3))}var sE=Ad(jd),oE=Ad(Yd);function aE(r,s){return ht(Ha(r,s),1)}function lE(r,s){return ht(Ha(r,s),ye)}function uE(r,s,l){return l=l===t?1:ve(l),ht(Ha(r,s),l)}function tp(r,s){var l=_e(r)?$:er;return l(r,ae(s,3))}function np(r,s){var l=_e(r)?se:Xf;return l(r,ae(s,3))}var cE=Da(function(r,s,l){Me.call(r,l)?r[l].push(s):Nn(r,l,[s])});function hE(r,s,l,c){r=Ot(r)?r:Bi(r),l=l&&!c?ve(l):0;var _=r.length;return l<0&&(l=it(_+l,0)),za(r)?l<=_&&r.indexOf(s,l)>-1:!!_&&Ai(r,s,l)>-1}var fE=Ee(function(r,s,l){var c=-1,_=typeof s=="function",v=Ot(r)?k(r.length):[];return er(r,function(w){v[++c]=_?Q(s,w,l):Zs(w,s,l)}),v}),dE=Da(function(r,s,l){Nn(r,l,s)});function Ha(r,s){var l=_e(r)?Y:sd;return l(r,ae(s,3))}function pE(r,s,l,c){return r==null?[]:(_e(s)||(s=s==null?[]:[s]),l=c?t:l,_e(l)||(l=l==null?[]:[l]),ud(r,s,l))}var _E=Da(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function gE(r,s,l){var c=_e(r)?ze:kf,_=arguments.length<3;return c(r,ae(s,4),l,_,er)}function mE(r,s,l){var c=_e(r)?tt:kf,_=arguments.length<3;return c(r,ae(s,4),l,_,Xf)}function vE(r,s){var l=_e(r)?Ue:Zf;return l(r,$a(ae(s,3)))}function yE(r){var s=_e(r)?jf:h0;return s(r)}function IE(r,s,l){(l?St(r,s,l):s===t)?s=1:s=ve(s);var c=_e(r)?Vy:f0;return c(r,s)}function EE(r){var s=_e(r)?qy:p0;return s(r)}function wE(r){if(r==null)return 0;if(Ot(r))return za(r)?Ni(r):r.length;var s=vt(r);return s==Nt||s==Ft?r.size:Xu(r).length}function TE(r,s,l){var c=_e(r)?Bt:_0;return l&&St(r,s,l)&&(s=t),c(r,ae(s,3))}var SE=Ee(function(r,s){if(r==null)return[];var l=s.length;return l>1&&St(r,s[0],s[1])?s=[]:l>2&&St(s[0],s[1],s[2])&&(s=[s[0]]),ud(r,ht(s,1),[])}),Va=iy||function(){return Qe.Date.now()};function CE(r,s){if(typeof s!="function")throw new Kt(u);return r=ve(r),function(){if(--r<1)return s.apply(this,arguments)}}function rp(r,s,l){return s=l?t:s,s=r&&s==null?r.length:s,Pn(r,Oe,t,t,t,t,s)}function ip(r,s){var l;if(typeof s!="function")throw new Kt(u);return r=ve(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=t),l}}var wc=Ee(function(r,s,l){var c=D;if(l.length){var _=Xn(l,Fi(wc));c|=ge}return Pn(r,c,s,l,_)}),sp=Ee(function(r,s,l){var c=D|M;if(l.length){var _=Xn(l,Fi(sp));c|=ge}return Pn(s,c,r,l,_)});function op(r,s,l){s=l?t:s;var c=Pn(r,te,t,t,t,t,t,s);return c.placeholder=op.placeholder,c}function ap(r,s,l){s=l?t:s;var c=Pn(r,ie,t,t,t,t,t,s);return c.placeholder=ap.placeholder,c}function lp(r,s,l){var c,_,v,w,C,R,U=0,B=!1,V=!1,J=!0;if(typeof r!="function")throw new Kt(u);s=Xt(s)||0,Ke(l)&&(B=!!l.leading,V="maxWait"in l,v=V?it(Xt(l.maxWait)||0,s):v,J="trailing"in l?!!l.trailing:J);function ne(Ze){var sn=c,Mn=_;return c=_=t,U=Ze,w=r.apply(Mn,sn),w}function le(Ze){return U=Ze,C=io(Se,s),B?ne(Ze):w}function Ie(Ze){var sn=Ze-R,Mn=Ze-U,Ap=s-sn;return V?mt(Ap,v-Mn):Ap}function ue(Ze){var sn=Ze-R,Mn=Ze-U;return R===t||sn>=s||sn<0||V&&Mn>=v}function Se(){var Ze=Va();if(ue(Ze))return Ae(Ze);C=io(Se,Ie(Ze))}function Ae(Ze){return C=t,J&&c?ne(Ze):(c=_=t,w)}function qt(){C!==t&&vd(C),U=0,c=R=_=C=t}function Ct(){return C===t?w:Ae(Va())}function $t(){var Ze=Va(),sn=ue(Ze);if(c=arguments,_=this,R=Ze,sn){if(C===t)return le(R);if(V)return vd(C),C=io(Se,s),ne(R)}return C===t&&(C=io(Se,s)),w}return $t.cancel=qt,$t.flush=Ct,$t}var bE=Ee(function(r,s){return Qf(r,1,s)}),AE=Ee(function(r,s,l){return Qf(r,Xt(s)||0,l)});function RE(r){return Pn(r,nt)}function qa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new Kt(u);var l=function(){var c=arguments,_=s?s.apply(this,c):c[0],v=l.cache;if(v.has(_))return v.get(_);var w=r.apply(this,c);return l.cache=v.set(_,w)||v,w};return l.cache=new(qa.Cache||Rn),l}qa.Cache=Rn;function $a(r){if(typeof r!="function")throw new Kt(u);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function NE(r){return ip(2,r)}var PE=g0(function(r,s){s=s.length==1&&_e(s[0])?Y(s[0],Wt(ae())):Y(ht(s,1),Wt(ae()));var l=s.length;return Ee(function(c){for(var _=-1,v=mt(c.length,l);++_<v;)c[_]=s[_].call(this,c[_]);return Q(r,this,c)})}),Tc=Ee(function(r,s){var l=Xn(s,Fi(Tc));return Pn(r,ge,t,s,l)}),up=Ee(function(r,s){var l=Xn(s,Fi(up));return Pn(r,$e,t,s,l)}),OE=On(function(r,s){return Pn(r,Re,t,t,t,s)});function DE(r,s){if(typeof r!="function")throw new Kt(u);return s=s===t?s:ve(s),Ee(r,s)}function kE(r,s){if(typeof r!="function")throw new Kt(u);return s=s==null?0:it(ve(s),0),Ee(function(l){var c=l[s],_=rr(l,0,s);return c&&ke(_,c),Q(r,this,_)})}function LE(r,s,l){var c=!0,_=!0;if(typeof r!="function")throw new Kt(u);return Ke(l)&&(c="leading"in l?!!l.leading:c,_="trailing"in l?!!l.trailing:_),lp(r,s,{leading:c,maxWait:s,trailing:_})}function ME(r){return rp(r,1)}function xE(r,s){return Tc(ac(s),r)}function FE(){if(!arguments.length)return[];var r=arguments[0];return _e(r)?r:[r]}function UE(r){return Yt(r,O)}function BE(r,s){return s=typeof s=="function"?s:t,Yt(r,O,s)}function WE(r){return Yt(r,T|O)}function HE(r,s){return s=typeof s=="function"?s:t,Yt(r,T|O,s)}function VE(r,s){return s==null||Jf(r,s,ot(s))}function rn(r,s){return r===s||r!==r&&s!==s}var qE=xa(Yu),$E=xa(function(r,s){return r>=s}),$r=nd(function(){return arguments}())?nd:function(r){return je(r)&&Me.call(r,"callee")&&!Vf.call(r,"callee")},_e=k.isArray,GE=y?Wt(y):Zy;function Ot(r){return r!=null&&Ga(r.length)&&!kn(r)}function Xe(r){return je(r)&&Ot(r)}function zE(r){return r===!0||r===!1||je(r)&&Tt(r)==Cr}var ir=oy||Lc,KE=I?Wt(I):e0;function jE(r){return je(r)&&r.nodeType===1&&!so(r)}function YE(r){if(r==null)return!0;if(Ot(r)&&(_e(r)||typeof r=="string"||typeof r.splice=="function"||ir(r)||Ui(r)||$r(r)))return!r.length;var s=vt(r);if(s==Nt||s==Ft)return!r.size;if(ro(r))return!Xu(r).length;for(var l in r)if(Me.call(r,l))return!1;return!0}function JE(r,s){return eo(r,s)}function QE(r,s,l){l=typeof l=="function"?l:t;var c=l?l(r,s):t;return c===t?eo(r,s,t,l):!!c}function Sc(r){if(!je(r))return!1;var s=Tt(r);return s==li||s==au||typeof r.message=="string"&&typeof r.name=="string"&&!so(r)}function XE(r){return typeof r=="number"&&$f(r)}function kn(r){if(!Ke(r))return!1;var s=Tt(r);return s==Ar||s==Vo||s==ou||s==uu}function cp(r){return typeof r=="number"&&r==ve(r)}function Ga(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=et}function Ke(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function je(r){return r!=null&&typeof r=="object"}var hp=S?Wt(S):n0;function ZE(r,s){return r===s||Qu(r,s,pc(s))}function ew(r,s,l){return l=typeof l=="function"?l:t,Qu(r,s,pc(s),l)}function tw(r){return fp(r)&&r!=+r}function nw(r){if(B0(r))throw new pe(a);return rd(r)}function rw(r){return r===null}function iw(r){return r==null}function fp(r){return typeof r=="number"||je(r)&&Tt(r)==Rr}function so(r){if(!je(r)||Tt(r)!=en)return!1;var s=va(r);if(s===null)return!0;var l=Me.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&pa.call(l)==ey}var Cc=N?Wt(N):r0;function sw(r){return cp(r)&&r>=-9007199254740991&&r<=et}var dp=P?Wt(P):i0;function za(r){return typeof r=="string"||!_e(r)&&je(r)&&Tt(r)==Pr}function Vt(r){return typeof r=="symbol"||je(r)&&Tt(r)==Or}var Ui=H?Wt(H):s0;function ow(r){return r===t}function aw(r){return je(r)&&vt(r)==ui}function lw(r){return je(r)&&Tt(r)==L}var uw=xa(Zu),cw=xa(function(r,s){return r<=s});function pp(r){if(!r)return[];if(Ot(r))return za(r)?tn(r):Pt(r);if(zs&&r[zs])return Vv(r[zs]());var s=vt(r),l=s==Nt?Wu:s==Ft?ha:Bi;return l(r)}function Ln(r){if(!r)return r===0?r:0;if(r=Xt(r),r===ye||r===-1/0){var s=r<0?-1:1;return s*pn}return r===r?r:0}function ve(r){var s=Ln(r),l=s%1;return s===s?l?s-l:s:0}function _p(r){return r?Wr(ve(r),0,Gt):0}function Xt(r){if(typeof r=="number")return r;if(Vt(r))return jn;if(Ke(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=Ke(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Lf(r);var l=wu.test(r);return l||kr.test(r)?ku(r.slice(2),l?2:8):Eu.test(r)?jn:+r}function gp(r){return yn(r,Dt(r))}function hw(r){return r?Wr(ve(r),-9007199254740991,et):r===0?r:0}function Le(r){return r==null?"":Ht(r)}var fw=Mi(function(r,s){if(ro(s)||Ot(s)){yn(s,ot(s),r);return}for(var l in s)Me.call(s,l)&&Qs(r,l,s[l])}),mp=Mi(function(r,s){yn(s,Dt(s),r)}),Ka=Mi(function(r,s,l,c){yn(s,Dt(s),r,c)}),dw=Mi(function(r,s,l,c){yn(s,ot(s),r,c)}),pw=On(zu);function _w(r,s){var l=Li(r);return s==null?l:Yf(l,s)}var gw=Ee(function(r,s){r=He(r);var l=-1,c=s.length,_=c>2?s[2]:t;for(_&&St(s[0],s[1],_)&&(c=1);++l<c;)for(var v=s[l],w=Dt(v),C=-1,R=w.length;++C<R;){var U=w[C],B=r[U];(B===t||rn(B,Oi[U])&&!Me.call(r,U))&&(r[U]=v[U])}return r}),mw=Ee(function(r){return r.push(t,Ld),Q(vp,t,r)});function vw(r,s){return Mr(r,ae(s,3),vn)}function yw(r,s){return Mr(r,ae(s,3),ju)}function Iw(r,s){return r==null?r:Ku(r,ae(s,3),Dt)}function Ew(r,s){return r==null?r:ed(r,ae(s,3),Dt)}function ww(r,s){return r&&vn(r,ae(s,3))}function Tw(r,s){return r&&ju(r,ae(s,3))}function Sw(r){return r==null?[]:Ra(r,ot(r))}function Cw(r){return r==null?[]:Ra(r,Dt(r))}function bc(r,s,l){var c=r==null?t:Hr(r,s);return c===t?l:c}function bw(r,s){return r!=null&&Fd(r,s,Yy)}function Ac(r,s){return r!=null&&Fd(r,s,Jy)}var Aw=Nd(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=_a.call(s)),r[s]=l},Nc(kt)),Rw=Nd(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=_a.call(s)),Me.call(r,s)?r[s].push(l):r[s]=[l]},ae),Nw=Ee(Zs);function ot(r){return Ot(r)?Kf(r):Xu(r)}function Dt(r){return Ot(r)?Kf(r,!0):o0(r)}function Pw(r,s){var l={};return s=ae(s,3),vn(r,function(c,_,v){Nn(l,s(c,_,v),c)}),l}function Ow(r,s){var l={};return s=ae(s,3),vn(r,function(c,_,v){Nn(l,_,s(c,_,v))}),l}var Dw=Mi(function(r,s,l){Na(r,s,l)}),vp=Mi(function(r,s,l,c){Na(r,s,l,c)}),kw=On(function(r,s){var l={};if(r==null)return l;var c=!1;s=Y(s,function(v){return v=nr(v,r),c||(c=v.length>1),v}),yn(r,fc(r),l),c&&(l=Yt(l,T|b|O,A0));for(var _=s.length;_--;)ic(l,s[_]);return l});function Lw(r,s){return yp(r,$a(ae(s)))}var Mw=On(function(r,s){return r==null?{}:l0(r,s)});function yp(r,s){if(r==null)return{};var l=Y(fc(r),function(c){return[c]});return s=ae(s),cd(r,l,function(c,_){return s(c,_[0])})}function xw(r,s,l){s=nr(s,r);var c=-1,_=s.length;for(_||(_=1,r=t);++c<_;){var v=r==null?t:r[In(s[c])];v===t&&(c=_,v=l),r=kn(v)?v.call(r):v}return r}function Fw(r,s,l){return r==null?r:to(r,s,l)}function Uw(r,s,l,c){return c=typeof c=="function"?c:t,r==null?r:to(r,s,l,c)}var Ip=Dd(ot),Ep=Dd(Dt);function Bw(r,s,l){var c=_e(r),_=c||ir(r)||Ui(r);if(s=ae(s,4),l==null){var v=r&&r.constructor;_?l=c?new v:[]:Ke(r)?l=kn(v)?Li(va(r)):{}:l={}}return(_?$:vn)(r,function(w,C,R){return s(l,w,C,R)}),l}function Ww(r,s){return r==null?!0:ic(r,s)}function Hw(r,s,l){return r==null?r:_d(r,s,ac(l))}function Vw(r,s,l,c){return c=typeof c=="function"?c:t,r==null?r:_d(r,s,ac(l),c)}function Bi(r){return r==null?[]:Bu(r,ot(r))}function qw(r){return r==null?[]:Bu(r,Dt(r))}function $w(r,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Xt(l),l=l===l?l:0),s!==t&&(s=Xt(s),s=s===s?s:0),Wr(Xt(r),s,l)}function Gw(r,s,l){return s=Ln(s),l===t?(l=s,s=0):l=Ln(l),r=Xt(r),Qy(r,s,l)}function zw(r,s,l){if(l&&typeof l!="boolean"&&St(r,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof r=="boolean"&&(l=r,r=t)),r===t&&s===t?(r=0,s=1):(r=Ln(r),s===t?(s=r,r=0):s=Ln(s)),r>s){var c=r;r=s,s=c}if(l||r%1||s%1){var _=Gf();return mt(r+_*(s-r+qs("1e-"+((_+"").length-1))),s)}return tc(r,s)}var Kw=xi(function(r,s,l){return s=s.toLowerCase(),r+(l?wp(s):s)});function wp(r){return Rc(Le(r).toLowerCase())}function Tp(r){return r=Le(r),r&&r.replace(Tu,Fv).replace(oa,"")}function jw(r,s,l){r=Le(r),s=Ht(s);var c=r.length;l=l===t?c:Wr(ve(l),0,c);var _=l;return l-=s.length,l>=0&&r.slice(l,_)==s}function Yw(r){return r=Le(r),r&&Ko.test(r)?r.replace(Go,Uv):r}function Jw(r){return r=Le(r),r&&_u.test(r)?r.replace(Ss,"\\$&"):r}var Qw=xi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),Xw=xi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),Zw=bd("toLowerCase");function eT(r,s,l){r=Le(r),s=ve(s);var c=s?Ni(r):0;if(!s||c>=s)return r;var _=(s-c)/2;return Ma(wa(_),l)+r+Ma(Ea(_),l)}function tT(r,s,l){r=Le(r),s=ve(s);var c=s?Ni(r):0;return s&&c<s?r+Ma(s-c,l):r}function nT(r,s,l){r=Le(r),s=ve(s);var c=s?Ni(r):0;return s&&c<s?Ma(s-c,l)+r:r}function rT(r,s,l){return l||s==null?s=0:s&&(s=+s),cy(Le(r).replace(Cs,""),s||0)}function iT(r,s,l){return(l?St(r,s,l):s===t)?s=1:s=ve(s),nc(Le(r),s)}function sT(){var r=arguments,s=Le(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var oT=xi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function aT(r,s,l){return l&&typeof l!="number"&&St(r,s,l)&&(s=l=t),l=l===t?Gt:l>>>0,l?(r=Le(r),r&&(typeof s=="string"||s!=null&&!Cc(s))&&(s=Ht(s),!s&&Ri(r))?rr(tn(r),0,l):r.split(s,l)):[]}var lT=xi(function(r,s,l){return r+(l?" ":"")+Rc(s)});function uT(r,s,l){return r=Le(r),l=l==null?0:Wr(ve(l),0,r.length),s=Ht(s),r.slice(l,l+s.length)==s}function cT(r,s,l){var c=m.templateSettings;l&&St(r,s,l)&&(s=t),r=Le(r),s=Ka({},s,c,kd);var _=Ka({},s.imports,c.imports,kd),v=ot(_),w=Bu(_,v),C,R,U=0,B=s.interpolate||gi,V="__p += '",J=Hu((s.escape||gi).source+"|"+B.source+"|"+(B===jo?bs:gi).source+"|"+(s.evaluate||gi).source+"|$","g"),ne="//# sourceURL="+(Me.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ti+"]")+`
`;r.replace(J,function(ue,Se,Ae,qt,Ct,$t){return Ae||(Ae=qt),V+=r.slice(U,$t).replace(As,Bv),Se&&(C=!0,V+=`' +
__e(`+Se+`) +
'`),Ct&&(R=!0,V+=`';
`+Ct+`;
__p += '`),Ae&&(V+=`' +
((__t = (`+Ae+`)) == null ? '' : __t) +
'`),U=$t+ue.length,ue}),V+=`';
`;var le=Me.call(s,"variable")&&s.variable;if(!le)V=`with (obj) {
`+V+`
}
`;else if(Yo.test(le))throw new pe(f);V=(R?V.replace(Is,""):V).replace($o,"$1").replace(hu,"$1;"),V="function("+(le||"obj")+`) {
`+(le?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(R?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Ie=Cp(function(){return Ne(v,ne+"return "+V).apply(t,w)});if(Ie.source=V,Sc(Ie))throw Ie;return Ie}function hT(r){return Le(r).toLowerCase()}function fT(r){return Le(r).toUpperCase()}function dT(r,s,l){if(r=Le(r),r&&(l||s===t))return Lf(r);if(!r||!(s=Ht(s)))return r;var c=tn(r),_=tn(s),v=Mf(c,_),w=xf(c,_)+1;return rr(c,v,w).join("")}function pT(r,s,l){if(r=Le(r),r&&(l||s===t))return r.slice(0,Uf(r)+1);if(!r||!(s=Ht(s)))return r;var c=tn(r),_=xf(c,tn(s))+1;return rr(c,0,_).join("")}function _T(r,s,l){if(r=Le(r),r&&(l||s===t))return r.replace(Cs,"");if(!r||!(s=Ht(s)))return r;var c=tn(r),_=Mf(c,tn(s));return rr(c,_).join("")}function gT(r,s){var l=_t,c=G;if(Ke(s)){var _="separator"in s?s.separator:_;l="length"in s?ve(s.length):l,c="omission"in s?Ht(s.omission):c}r=Le(r);var v=r.length;if(Ri(r)){var w=tn(r);v=w.length}if(l>=v)return r;var C=l-Ni(c);if(C<1)return c;var R=w?rr(w,0,C).join(""):r.slice(0,C);if(_===t)return R+c;if(w&&(C+=R.length-C),Cc(_)){if(r.slice(C).search(_)){var U,B=R;for(_.global||(_=Hu(_.source,Le(pi.exec(_))+"g")),_.lastIndex=0;U=_.exec(B);)var V=U.index;R=R.slice(0,V===t?C:V)}}else if(r.indexOf(Ht(_),C)!=C){var J=R.lastIndexOf(_);J>-1&&(R=R.slice(0,J))}return R+c}function mT(r){return r=Le(r),r&&zo.test(r)?r.replace(Es,zv):r}var vT=xi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Rc=bd("toUpperCase");function Sp(r,s,l){return r=Le(r),s=l?t:s,s===t?Hv(r)?Yv(r):bn(r):r.match(s)||[]}var Cp=Ee(function(r,s){try{return Q(r,t,s)}catch(l){return Sc(l)?l:new pe(l)}}),yT=On(function(r,s){return $(s,function(l){l=In(l),Nn(r,l,wc(r[l],r))}),r});function IT(r){var s=r==null?0:r.length,l=ae();return r=s?Y(r,function(c){if(typeof c[1]!="function")throw new Kt(u);return[l(c[0]),c[1]]}):[],Ee(function(c){for(var _=-1;++_<s;){var v=r[_];if(Q(v[0],this,c))return Q(v[1],this,c)}})}function ET(r){return zy(Yt(r,T))}function Nc(r){return function(){return r}}function wT(r,s){return r==null||r!==r?s:r}var TT=Rd(),ST=Rd(!0);function kt(r){return r}function Pc(r){return id(typeof r=="function"?r:Yt(r,T))}function CT(r){return od(Yt(r,T))}function bT(r,s){return ad(r,Yt(s,T))}var AT=Ee(function(r,s){return function(l){return Zs(l,r,s)}}),RT=Ee(function(r,s){return function(l){return Zs(r,l,s)}});function Oc(r,s,l){var c=ot(s),_=Ra(s,c);l==null&&!(Ke(s)&&(_.length||!c.length))&&(l=s,s=r,r=this,_=Ra(s,ot(s)));var v=!(Ke(l)&&"chain"in l)||!!l.chain,w=kn(r);return $(_,function(C){var R=s[C];r[C]=R,w&&(r.prototype[C]=function(){var U=this.__chain__;if(v||U){var B=r(this.__wrapped__),V=B.__actions__=Pt(this.__actions__);return V.push({func:R,args:arguments,thisArg:r}),B.__chain__=U,B}return R.apply(r,ke([this.value()],arguments))})}),r}function NT(){return Qe._===this&&(Qe._=ty),this}function Dc(){}function PT(r){return r=ve(r),Ee(function(s){return ld(s,r)})}var OT=uc(Y),DT=uc(De),kT=uc(Bt);function bp(r){return gc(r)?Mu(In(r)):u0(r)}function LT(r){return function(s){return r==null?t:Hr(r,s)}}var MT=Pd(),xT=Pd(!0);function kc(){return[]}function Lc(){return!1}function FT(){return{}}function UT(){return""}function BT(){return!0}function WT(r,s){if(r=ve(r),r<1||r>et)return[];var l=Gt,c=mt(r,Gt);s=ae(s),r-=Gt;for(var _=Uu(c,s);++l<r;)s(l);return _}function HT(r){return _e(r)?Y(r,In):Vt(r)?[r]:Pt(zd(Le(r)))}function VT(r){var s=++Zv;return Le(r)+s}var qT=La(function(r,s){return r+s},0),$T=cc("ceil"),GT=La(function(r,s){return r/s},1),zT=cc("floor");function KT(r){return r&&r.length?Aa(r,kt,Yu):t}function jT(r,s){return r&&r.length?Aa(r,ae(s,2),Yu):t}function YT(r){return Df(r,kt)}function JT(r,s){return Df(r,ae(s,2))}function QT(r){return r&&r.length?Aa(r,kt,Zu):t}function XT(r,s){return r&&r.length?Aa(r,ae(s,2),Zu):t}var ZT=La(function(r,s){return r*s},1),eS=cc("round"),tS=La(function(r,s){return r-s},0);function nS(r){return r&&r.length?Fu(r,kt):0}function rS(r,s){return r&&r.length?Fu(r,ae(s,2)):0}return m.after=CE,m.ary=rp,m.assign=fw,m.assignIn=mp,m.assignInWith=Ka,m.assignWith=dw,m.at=pw,m.before=ip,m.bind=wc,m.bindAll=yT,m.bindKey=sp,m.castArray=FE,m.chain=ep,m.chunk=z0,m.compact=K0,m.concat=j0,m.cond=IT,m.conforms=ET,m.constant=Nc,m.countBy=nE,m.create=_w,m.curry=op,m.curryRight=ap,m.debounce=lp,m.defaults=gw,m.defaultsDeep=mw,m.defer=bE,m.delay=AE,m.difference=Y0,m.differenceBy=J0,m.differenceWith=Q0,m.drop=X0,m.dropRight=Z0,m.dropRightWhile=eI,m.dropWhile=tI,m.fill=nI,m.filter=iE,m.flatMap=aE,m.flatMapDeep=lE,m.flatMapDepth=uE,m.flatten=Jd,m.flattenDeep=rI,m.flattenDepth=iI,m.flip=RE,m.flow=TT,m.flowRight=ST,m.fromPairs=sI,m.functions=Sw,m.functionsIn=Cw,m.groupBy=cE,m.initial=aI,m.intersection=lI,m.intersectionBy=uI,m.intersectionWith=cI,m.invert=Aw,m.invertBy=Rw,m.invokeMap=fE,m.iteratee=Pc,m.keyBy=dE,m.keys=ot,m.keysIn=Dt,m.map=Ha,m.mapKeys=Pw,m.mapValues=Ow,m.matches=CT,m.matchesProperty=bT,m.memoize=qa,m.merge=Dw,m.mergeWith=vp,m.method=AT,m.methodOf=RT,m.mixin=Oc,m.negate=$a,m.nthArg=PT,m.omit=kw,m.omitBy=Lw,m.once=NE,m.orderBy=pE,m.over=OT,m.overArgs=PE,m.overEvery=DT,m.overSome=kT,m.partial=Tc,m.partialRight=up,m.partition=_E,m.pick=Mw,m.pickBy=yp,m.property=bp,m.propertyOf=LT,m.pull=pI,m.pullAll=Xd,m.pullAllBy=_I,m.pullAllWith=gI,m.pullAt=mI,m.range=MT,m.rangeRight=xT,m.rearg=OE,m.reject=vE,m.remove=vI,m.rest=DE,m.reverse=Ic,m.sampleSize=IE,m.set=Fw,m.setWith=Uw,m.shuffle=EE,m.slice=yI,m.sortBy=SE,m.sortedUniq=bI,m.sortedUniqBy=AI,m.split=aT,m.spread=kE,m.tail=RI,m.take=NI,m.takeRight=PI,m.takeRightWhile=OI,m.takeWhile=DI,m.tap=KI,m.throttle=LE,m.thru=Wa,m.toArray=pp,m.toPairs=Ip,m.toPairsIn=Ep,m.toPath=HT,m.toPlainObject=gp,m.transform=Bw,m.unary=ME,m.union=kI,m.unionBy=LI,m.unionWith=MI,m.uniq=xI,m.uniqBy=FI,m.uniqWith=UI,m.unset=Ww,m.unzip=Ec,m.unzipWith=Zd,m.update=Hw,m.updateWith=Vw,m.values=Bi,m.valuesIn=qw,m.without=BI,m.words=Sp,m.wrap=xE,m.xor=WI,m.xorBy=HI,m.xorWith=VI,m.zip=qI,m.zipObject=$I,m.zipObjectDeep=GI,m.zipWith=zI,m.entries=Ip,m.entriesIn=Ep,m.extend=mp,m.extendWith=Ka,Oc(m,m),m.add=qT,m.attempt=Cp,m.camelCase=Kw,m.capitalize=wp,m.ceil=$T,m.clamp=$w,m.clone=UE,m.cloneDeep=WE,m.cloneDeepWith=HE,m.cloneWith=BE,m.conformsTo=VE,m.deburr=Tp,m.defaultTo=wT,m.divide=GT,m.endsWith=jw,m.eq=rn,m.escape=Yw,m.escapeRegExp=Jw,m.every=rE,m.find=sE,m.findIndex=jd,m.findKey=vw,m.findLast=oE,m.findLastIndex=Yd,m.findLastKey=yw,m.floor=zT,m.forEach=tp,m.forEachRight=np,m.forIn=Iw,m.forInRight=Ew,m.forOwn=ww,m.forOwnRight=Tw,m.get=bc,m.gt=qE,m.gte=$E,m.has=bw,m.hasIn=Ac,m.head=Qd,m.identity=kt,m.includes=hE,m.indexOf=oI,m.inRange=Gw,m.invoke=Nw,m.isArguments=$r,m.isArray=_e,m.isArrayBuffer=GE,m.isArrayLike=Ot,m.isArrayLikeObject=Xe,m.isBoolean=zE,m.isBuffer=ir,m.isDate=KE,m.isElement=jE,m.isEmpty=YE,m.isEqual=JE,m.isEqualWith=QE,m.isError=Sc,m.isFinite=XE,m.isFunction=kn,m.isInteger=cp,m.isLength=Ga,m.isMap=hp,m.isMatch=ZE,m.isMatchWith=ew,m.isNaN=tw,m.isNative=nw,m.isNil=iw,m.isNull=rw,m.isNumber=fp,m.isObject=Ke,m.isObjectLike=je,m.isPlainObject=so,m.isRegExp=Cc,m.isSafeInteger=sw,m.isSet=dp,m.isString=za,m.isSymbol=Vt,m.isTypedArray=Ui,m.isUndefined=ow,m.isWeakMap=aw,m.isWeakSet=lw,m.join=hI,m.kebabCase=Qw,m.last=Qt,m.lastIndexOf=fI,m.lowerCase=Xw,m.lowerFirst=Zw,m.lt=uw,m.lte=cw,m.max=KT,m.maxBy=jT,m.mean=YT,m.meanBy=JT,m.min=QT,m.minBy=XT,m.stubArray=kc,m.stubFalse=Lc,m.stubObject=FT,m.stubString=UT,m.stubTrue=BT,m.multiply=ZT,m.nth=dI,m.noConflict=NT,m.noop=Dc,m.now=Va,m.pad=eT,m.padEnd=tT,m.padStart=nT,m.parseInt=rT,m.random=zw,m.reduce=gE,m.reduceRight=mE,m.repeat=iT,m.replace=sT,m.result=xw,m.round=eS,m.runInContext=A,m.sample=yE,m.size=wE,m.snakeCase=oT,m.some=TE,m.sortedIndex=II,m.sortedIndexBy=EI,m.sortedIndexOf=wI,m.sortedLastIndex=TI,m.sortedLastIndexBy=SI,m.sortedLastIndexOf=CI,m.startCase=lT,m.startsWith=uT,m.subtract=tS,m.sum=nS,m.sumBy=rS,m.template=cT,m.times=WT,m.toFinite=Ln,m.toInteger=ve,m.toLength=_p,m.toLower=hT,m.toNumber=Xt,m.toSafeInteger=hw,m.toString=Le,m.toUpper=fT,m.trim=dT,m.trimEnd=pT,m.trimStart=_T,m.truncate=gT,m.unescape=mT,m.uniqueId=VT,m.upperCase=vT,m.upperFirst=Rc,m.each=tp,m.eachRight=np,m.first=Qd,Oc(m,function(){var r={};return vn(m,function(s,l){Me.call(m.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),m.VERSION=i,$(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){m[r].placeholder=m}),$(["drop","take"],function(r,s){be.prototype[r]=function(l){l=l===t?1:it(ve(l),0);var c=this.__filtered__&&!s?new be(this):this.clone();return c.__filtered__?c.__takeCount__=mt(l,c.__takeCount__):c.__views__.push({size:mt(l,Gt),type:r+(c.__dir__<0?"Right":"")}),c},be.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),$(["filter","map","takeWhile"],function(r,s){var l=s+1,c=l==X||l==me;be.prototype[r]=function(_){var v=this.clone();return v.__iteratees__.push({iteratee:ae(_,3),type:l}),v.__filtered__=v.__filtered__||c,v}}),$(["head","last"],function(r,s){var l="take"+(s?"Right":"");be.prototype[r]=function(){return this[l](1).value()[0]}}),$(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");be.prototype[r]=function(){return this.__filtered__?new be(this):this[l](1)}}),be.prototype.compact=function(){return this.filter(kt)},be.prototype.find=function(r){return this.filter(r).head()},be.prototype.findLast=function(r){return this.reverse().find(r)},be.prototype.invokeMap=Ee(function(r,s){return typeof r=="function"?new be(this):this.map(function(l){return Zs(l,r,s)})}),be.prototype.reject=function(r){return this.filter($a(ae(r)))},be.prototype.slice=function(r,s){r=ve(r);var l=this;return l.__filtered__&&(r>0||s<0)?new be(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==t&&(s=ve(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},be.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},be.prototype.toArray=function(){return this.take(Gt)},vn(be.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),c=/^(?:head|last)$/.test(s),_=m[c?"take"+(s=="last"?"Right":""):s],v=c||/^find/.test(s);_&&(m.prototype[s]=function(){var w=this.__wrapped__,C=c?[1]:arguments,R=w instanceof be,U=C[0],B=R||_e(w),V=function(Se){var Ae=_.apply(m,ke([Se],C));return c&&J?Ae[0]:Ae};B&&l&&typeof U=="function"&&U.length!=1&&(R=B=!1);var J=this.__chain__,ne=!!this.__actions__.length,le=v&&!J,Ie=R&&!ne;if(!v&&B){w=Ie?w:new be(this);var ue=r.apply(w,C);return ue.__actions__.push({func:Wa,args:[V],thisArg:t}),new jt(ue,J)}return le&&Ie?r.apply(this,C):(ue=this.thru(V),le?c?ue.value()[0]:ue.value():ue)})}),$(["pop","push","shift","sort","splice","unshift"],function(r){var s=fa[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",c=/^(?:pop|shift)$/.test(r);m.prototype[r]=function(){var _=arguments;if(c&&!this.__chain__){var v=this.value();return s.apply(_e(v)?v:[],_)}return this[l](function(w){return s.apply(_e(w)?w:[],_)})}}),vn(be.prototype,function(r,s){var l=m[s];if(l){var c=l.name+"";Me.call(ki,c)||(ki[c]=[]),ki[c].push({name:s,func:l})}}),ki[ka(t,M).name]=[{name:"wrapper",func:t}],be.prototype.clone=my,be.prototype.reverse=vy,be.prototype.value=yy,m.prototype.at=jI,m.prototype.chain=YI,m.prototype.commit=JI,m.prototype.next=QI,m.prototype.plant=ZI,m.prototype.reverse=eE,m.prototype.toJSON=m.prototype.valueOf=m.prototype.value=tE,m.prototype.first=m.prototype.head,zs&&(m.prototype[zs]=XI),m},Pi=Jv();gn?((gn.exports=Pi)._=Pi,$s._=Pi):Qe._=Pi}).call(RP)}(po,po.exports)),po.exports}var Xa={},V_;function oi(){return V_||(V_=1,Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.default={MANDATORY_INITIALIZATION_MISSING:{message:"Missing publicKey or privateKey or urlEndpoint during ImageKit initialization",help:""},MANDATORY_PUBLIC_KEY_MISSING:{message:"Missing publicKey during ImageKit initialization",help:""},MANDATORY_PRIVATE_KEY_MISSING:{message:"Missing privateKey during ImageKit initialization",help:""},MANDATORY_URL_ENDPOINT_KEY_MISSING:{message:"Missing urlEndpoint during ImageKit initialization",help:""},INVALID_TRANSFORMATION_POSITION:{message:"Invalid transformationPosition parameter",help:""},CACHE_PURGE_URL_MISSING:{message:"Missing URL parameter for this request",help:""},CACHE_PURGE_STATUS_ID_MISSING:{message:"Missing Request ID parameter for this request",help:""},FILE_ID_MISSING:{message:"Missing fileId parameter for this request",help:""},FILE_VERSION_ID_MISSING:{message:"Missing versionId parameter for this request",help:""},FILE_ID_OR_URL_MISSING:{message:"Pass either fileId or remote URL of the image as first parameter",help:""},INVALID_LIST_OPTIONS:{message:"Pass a valid JSON list options e.g. {skip: 10, limit: 100}.",help:""},UPDATE_DATA_MISSING:{message:"Missing file update data for this request",help:""},UPDATE_DATA_TAGS_INVALID:{message:"Invalid tags parameter for this request",help:"tags should be passed as null or an array like ['tag1', 'tag2']"},UPDATE_DATA_COORDS_INVALID:{message:"Invalid customCoordinates parameter for this request",help:"customCoordinates should be passed as null or a string like 'x,y,width,height'"},LIST_FILES_INPUT_MISSING:{message:"Missing options for list files",help:"If you do not want to pass any parameter for listing, pass an empty object"},MISSING_UPLOAD_DATA:{message:"Missing data for upload",help:""},MISSING_UPLOAD_FILE_PARAMETER:{message:"Missing file parameter for upload",help:""},MISSING_UPLOAD_FILENAME_PARAMETER:{message:"Missing fileName parameter for upload",help:""},JOB_ID_MISSING:{message:"Missing jobId parameter",help:""},INVALID_DESTINATION_FOLDER_PATH:{message:"Invalid destinationPath value",help:"It should be a string like '/path/to/folder'"},INVALID_INCLUDE_VERSION:{message:"Invalid includeFileVersions value",help:"It should be a boolean"},INVALID_SOURCE_FILE_PATH:{message:"Invalid sourceFilePath value",help:"It should be a string like /path/to/file.jpg'"},INVALID_SOURCE_FOLDER_PATH:{message:"Invalid sourceFolderPath value",help:"It should be a string like '/path/to/folder'"},INVALID_FOLDER_NAME:{message:"Invalid folderName value",help:""},INVALID_PARENT_FOLDER_PATH:{message:"Invalid parentFolderPath value",help:"It should be a string like '/path/to/folder'"},INVALID_FOLDER_PATH:{message:"Invalid folderPath value",help:"It should be a string like '/path/to/folder'"},INVALID_PHASH_VALUE:{message:"Invalid pHash value",help:"Both pHash strings must be valid hexadecimal numbers"},MISSING_PHASH_VALUE:{message:"Missing pHash value",help:"Please pass two pHash values"},UNEQUAL_STRING_LENGTH:{message:"Unequal pHash string length",help:"For distance calucation, the two pHash strings must have equal length"},INVALID_FILEIDS_VALUE:{message:"Invalid value for fileIds",help:"fileIds should be an array of fileId of the files. The array should have atleast one fileId."},BULK_ADD_TAGS_INVALID:{message:"Invalid value for tags",help:"tags should be a non empty array of string like ['tag1', 'tag2']."},BULK_AI_TAGS_INVALID:{message:"Invalid value for AITags",help:"AITags should be a non empty array of string like ['tag1', 'tag2']."},CMF_NAME_MISSING:{message:"Missing name parameter for this request",help:""},CMF_LABEL_MISSING:{message:"Missing label parameter for this request",help:""},CMF_SCHEMA_MISSING:{message:"Missing schema parameter for this request",help:""},CMF_SCHEMA_INVALID:{message:"Invalid value for schema",help:"schema should have a mandatory type field."},CMF_LABEL_SCHEMA_MISSING:{message:"Both label and schema is missing",help:""},CMF_FIELD_ID_MISSING:{message:"Missing fieldId parameter for this request",help:""},INVALID_FILE_PATH:{message:"Invalid value for filePath",help:"Pass the full path of the file. For example - /path/to/file.jpg"},INVALID_NEW_FILE_NAME:{message:"Invalid value for newFileName. It should be a string.",help:""},INVALID_PURGE_CACHE:{message:"Invalid value for purgeCache. It should be boolean.",help:""},VERIFY_WEBHOOK_EVENT_SIGNATURE_INCORRECT:{message:"Incorrect signature",help:"Please pass x-ik-signature header as utf8 string"},VERIFY_WEBHOOK_EVENT_SIGNATURE_MISSING:{message:"Signature missing",help:"Please pass x-ik-signature header as utf8 string"},VERIFY_WEBHOOK_EVENT_TIMESTAMP_MISSING:{message:"Timestamp missing",help:"Please pass x-ik-signature header as utf8 string"},VERIFY_WEBHOOK_EVENT_TIMESTAMP_INVALID:{message:"Timestamp invalid",help:"Please pass x-ik-signature header as utf8 string"},INVALID_TRANSFORMATION:{message:"Invalid transformation parameter. Please include at least pre, post, or both.",help:""},INVALID_PRE_TRANSFORMATION:{message:"Invalid pre transformation parameter.",help:""},INVALID_POST_TRANSFORMATION:{message:"Invalid post transformation parameter.",help:""}}),Xa}var Hi={},Vi={},Za={},q_;function Wo(){if(q_)return Za;q_=1,Object.defineProperty(Za,"__esModule",{value:!0});function n(e,t,i){typeof i=="function"&&(e?i(t,null):i(null,t))}return Za.default=n,Za}var or={};/*! Axios v1.11.0 Copyright (c) 2025 Matt Zabriskie and contributors */var Yc,$_;function NP(){if($_)return Yc;$_=1;function n(d,p){return function(){return d.apply(p,arguments)}}const{toString:e}=Object.prototype,{getPrototypeOf:t}=Object,{iterator:i,toStringTag:o}=Symbol,a=(d=>p=>{const y=e.call(p);return d[y]||(d[y]=y.slice(8,-1).toLowerCase())})(Object.create(null)),u=d=>(d=d.toLowerCase(),p=>a(p)===d),f=d=>p=>typeof p===d,{isArray:h}=Array,g=f("undefined");function E(d){return d!==null&&!g(d)&&d.constructor!==null&&!g(d.constructor)&&F(d.constructor.isBuffer)&&d.constructor.isBuffer(d)}const T=u("ArrayBuffer");function b(d){let p;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?p=ArrayBuffer.isView(d):p=d&&d.buffer&&T(d.buffer),p}const O=f("string"),F=f("function"),W=f("number"),D=d=>d!==null&&typeof d=="object",M=d=>d===!0||d===!1,q=d=>{if(a(d)!=="object")return!1;const p=t(d);return(p===null||p===Object.prototype||Object.getPrototypeOf(p)===null)&&!(o in d)&&!(i in d)},te=d=>{if(!D(d)||E(d))return!1;try{return Object.keys(d).length===0&&Object.getPrototypeOf(d)===Object.prototype}catch{return!1}},ie=u("Date"),ge=u("File"),$e=u("Blob"),Oe=u("FileList"),Re=d=>D(d)&&F(d.pipe),nt=d=>{let p;return d&&(typeof FormData=="function"&&d instanceof FormData||F(d.append)&&((p=a(d))==="formdata"||p==="object"&&F(d.toString)&&d.toString()==="[object FormData]"))},_t=u("URLSearchParams"),[G,ee,j,X]=["ReadableStream","Request","Response","Headers"].map(u),oe=d=>d.trim?d.trim():d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function me(d,p,{allOwnKeys:y=!1}={}){if(d===null||typeof d>"u")return;let I,S;if(typeof d!="object"&&(d=[d]),h(d))for(I=0,S=d.length;I<S;I++)p.call(null,d[I],I,d);else{if(E(d))return;const N=y?Object.getOwnPropertyNames(d):Object.keys(d),P=N.length;let H;for(I=0;I<P;I++)H=N[I],p.call(null,d[H],H,d)}}function ye(d,p){if(E(d))return null;p=p.toLowerCase();const y=Object.keys(d);let I=y.length,S;for(;I-- >0;)if(S=y[I],p===S.toLowerCase())return S;return null}const et=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:fo,pn=d=>!g(d)&&d!==et;function jn(){const{caseless:d}=pn(this)&&this||{},p={},y=(I,S)=>{const N=d&&ye(p,S)||S;q(p[N])&&q(I)?p[N]=jn(p[N],I):q(I)?p[N]=jn({},I):h(I)?p[N]=I.slice():p[N]=I};for(let I=0,S=arguments.length;I<S;I++)arguments[I]&&me(arguments[I],y);return p}const Gt=(d,p,y,{allOwnKeys:I}={})=>(me(p,(S,N)=>{y&&F(S)?d[N]=n(S,y):d[N]=S},{allOwnKeys:I}),d),ru=d=>(d.charCodeAt(0)===65279&&(d=d.slice(1)),d),iu=(d,p,y,I)=>{d.prototype=Object.create(p.prototype,I),d.prototype.constructor=d,Object.defineProperty(d,"super",{value:p.prototype}),y&&Object.assign(d.prototype,y)},su=(d,p,y,I)=>{let S,N,P;const H={};if(p=p||{},d==null)return p;do{for(S=Object.getOwnPropertyNames(d),N=S.length;N-- >0;)P=S[N],(!I||I(P,d,p))&&!H[P]&&(p[P]=d[P],H[P]=!0);d=y!==!1&&t(d)}while(d&&(!y||y(d,p))&&d!==Object.prototype);return p},Yn=(d,p,y)=>{d=String(d),(y===void 0||y>d.length)&&(y=d.length),y-=p.length;const I=d.indexOf(p,y);return I!==-1&&I===y},ai=d=>{if(!d)return null;if(h(d))return d;let p=d.length;if(!W(p))return null;const y=new Array(p);for(;p-- >0;)y[p]=d[p];return y},ou=(d=>p=>d&&p instanceof d)(typeof Uint8Array<"u"&&t(Uint8Array)),Cr=(d,p)=>{const I=(d&&d[i]).call(d);let S;for(;(S=I.next())&&!S.done;){const N=S.value;p.call(d,N[0],N[1])}},br=(d,p)=>{let y;const I=[];for(;(y=d.exec(p))!==null;)I.push(y);return I},au=u("HTMLFormElement"),li=d=>d.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(y,I,S){return I.toUpperCase()+S}),Ar=(({hasOwnProperty:d})=>(p,y)=>d.call(p,y))(Object.prototype),Vo=u("RegExp"),Nt=(d,p)=>{const y=Object.getOwnPropertyDescriptors(d),I={};me(y,(S,N)=>{let P;(P=p(S,N,d))!==!1&&(I[N]=P||S)}),Object.defineProperties(d,I)},Rr=d=>{Nt(d,(p,y)=>{if(F(d)&&["arguments","caller","callee"].indexOf(y)!==-1)return!1;const I=d[y];if(F(I)){if(p.enumerable=!1,"writable"in p){p.writable=!1;return}p.set||(p.set=()=>{throw Error("Can not rewrite read-only method '"+y+"'")})}})},lu=(d,p)=>{const y={},I=S=>{S.forEach(N=>{y[N]=!0})};return h(d)?I(d):I(String(d).split(p)),y},en=()=>{},qo=(d,p)=>d!=null&&Number.isFinite(d=+d)?d:p;function uu(d){return!!(d&&F(d.append)&&d[o]==="FormData"&&d[i])}const Nr=d=>{const p=new Array(10),y=(I,S)=>{if(D(I)){if(p.indexOf(I)>=0)return;if(E(I))return I;if(!("toJSON"in I)){p[S]=I;const N=h(I)?[]:{};return me(I,(P,H)=>{const Q=y(P,S+1);!g(Q)&&(N[H]=Q)}),p[S]=void 0,N}}return I};return y(d,0)},Ft=u("AsyncFunction"),Pr=d=>d&&(D(d)||F(d))&&F(d.then)&&F(d.catch),Or=((d,p)=>d?setImmediate:p?((y,I)=>(et.addEventListener("message",({source:S,data:N})=>{S===et&&N===y&&I.length&&I.shift()()},!1),S=>{I.push(S),et.postMessage(y,"*")}))(`axios@${Math.random()}`,[]):y=>setTimeout(y))(typeof setImmediate=="function",F(et.postMessage)),cu=typeof queueMicrotask<"u"?queueMicrotask.bind(et):typeof process<"u"&&process.nextTick||Or;var L={isArray:h,isArrayBuffer:T,isBuffer:E,isFormData:nt,isArrayBufferView:b,isString:O,isNumber:W,isBoolean:M,isObject:D,isPlainObject:q,isEmptyObject:te,isReadableStream:G,isRequest:ee,isResponse:j,isHeaders:X,isUndefined:g,isDate:ie,isFile:ge,isBlob:$e,isRegExp:Vo,isFunction:F,isStream:Re,isURLSearchParams:_t,isTypedArray:ou,isFileList:Oe,forEach:me,merge:jn,extend:Gt,trim:oe,stripBOM:ru,inherits:iu,toFlatObject:su,kindOf:a,kindOfTest:u,endsWith:Yn,toArray:ai,forEachEntry:Cr,matchAll:br,isHTMLForm:au,hasOwnProperty:Ar,hasOwnProp:Ar,reduceDescriptors:Nt,freezeMethods:Rr,toObjectSet:lu,toCamelCase:li,noop:en,toFiniteNumber:qo,findKey:ye,global:et,isContextDefined:pn,isSpecCompliantForm:uu,toJSONObject:Nr,isAsyncFn:Ft,isThenable:Pr,setImmediate:Or,asap:cu,isIterable:d=>d!=null&&F(d[i])};function ce(d,p,y,I,S){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=d,this.name="AxiosError",p&&(this.code=p),y&&(this.config=y),I&&(this.request=I),S&&(this.response=S,this.status=S.status?S.status:null)}L.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const Sn=ce.prototype,ci={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(d=>{ci[d]={value:d}}),Object.defineProperties(ce,ci),Object.defineProperty(Sn,"isAxiosError",{value:!0}),ce.from=(d,p,y,I,S,N)=>{const P=Object.create(Sn);return L.toFlatObject(d,P,function(Q){return Q!==Error.prototype},H=>H!=="isAxiosError"),ce.call(P,d.message,p,y,I,S),P.cause=d,P.name=d.name,N&&Object.assign(P,N),P};var ms=null;function Dr(d){return L.isPlainObject(d)||L.isArray(d)}function hi(d){return L.endsWith(d,"[]")?d.slice(0,-2):d}function fi(d,p,y){return d?d.concat(p).map(function(S,N){return S=hi(S),!y&&N?"["+S+"]":S}).join(y?".":""):p}function vs(d){return L.isArray(d)&&!d.some(Dr)}const ys=L.toFlatObject(L,{},null,function(p){return/^is[A-Z]/.test(p)});function Jn(d,p,y){if(!L.isObject(d))throw new TypeError("target must be an object");p=p||new FormData,y=L.toFlatObject(y,{metaTokens:!0,dots:!1,indexes:!1},!1,function(de,Y){return!L.isUndefined(Y[de])});const I=y.metaTokens,S=y.visitor||$,N=y.dots,P=y.indexes,Q=(y.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(p);if(!L.isFunction(S))throw new TypeError("visitor must be a function");function K(re){if(re===null)return"";if(L.isDate(re))return re.toISOString();if(L.isBoolean(re))return re.toString();if(!Q&&L.isBlob(re))throw new ce("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(re)||L.isTypedArray(re)?Q&&typeof Blob=="function"?new Blob([re]):Buffer.from(re):re}function $(re,de,Y){let ke=re;if(re&&!Y&&typeof re=="object"){if(L.endsWith(de,"{}"))de=I?de:de.slice(0,-2),re=JSON.stringify(re);else if(L.isArray(re)&&vs(re)||(L.isFileList(re)||L.endsWith(de,"[]"))&&(ke=L.toArray(re)))return de=hi(de),ke.forEach(function(tt,Bt){!(L.isUndefined(tt)||tt===null)&&p.append(P===!0?fi([de],Bt,N):P===null?de:de+"[]",K(tt))}),!1}return Dr(re)?!0:(p.append(fi(Y,de,N),K(re)),!1)}const se=[],De=Object.assign(ys,{defaultVisitor:$,convertValue:K,isVisitable:Dr});function Ue(re,de){if(!L.isUndefined(re)){if(se.indexOf(re)!==-1)throw Error("Circular reference detected in "+de.join("."));se.push(re),L.forEach(re,function(ke,ze){(!(L.isUndefined(ke)||ke===null)&&S.call(p,ke,L.isString(ze)?ze.trim():ze,de,De))===!0&&Ue(ke,de?de.concat(ze):[ze])}),se.pop()}}if(!L.isObject(d))throw new TypeError("data must be an object");return Ue(d),p}function di(d){const p={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(d).replace(/[!'()~]|%20|%00/g,function(I){return p[I]})}function Is(d,p){this._pairs=[],d&&Jn(d,this,p)}const $o=Is.prototype;$o.append=function(p,y){this._pairs.push([p,y])},$o.toString=function(p){const y=p?function(I){return p.call(this,I,di)}:di;return this._pairs.map(function(S){return y(S[0])+"="+y(S[1])},"").join("&")};function hu(d){return encodeURIComponent(d).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Es(d,p,y){if(!p)return d;const I=y&&y.encode||hu;L.isFunction(y)&&(y={serialize:y});const S=y&&y.serialize;let N;if(S?N=S(p,y):N=L.isURLSearchParams(p)?p.toString():new Is(p,y).toString(I),N){const P=d.indexOf("#");P!==-1&&(d=d.slice(0,P)),d+=(d.indexOf("?")===-1?"?":"&")+N}return d}class Go{constructor(){this.handlers=[]}use(p,y,I){return this.handlers.push({fulfilled:p,rejected:y,synchronous:I?I.synchronous:!1,runWhen:I?I.runWhen:null}),this.handlers.length-1}eject(p){this.handlers[p]&&(this.handlers[p]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(p){L.forEach(this.handlers,function(I){I!==null&&p(I)})}}var zo=Go,Ko={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fu=typeof URLSearchParams<"u"?URLSearchParams:Is,du=typeof FormData<"u"?FormData:null,jo=typeof Blob<"u"?Blob:null,pu={isBrowser:!0,classes:{URLSearchParams:fu,FormData:du,Blob:jo},protocols:["http","https","file","blob","url","data"]};const ws=typeof window<"u"&&typeof document<"u",Ts=typeof navigator=="object"&&navigator||void 0,Ss=ws&&(!Ts||["ReactNative","NativeScript","NS"].indexOf(Ts.product)<0),_u=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Cs=ws&&window.location.href||"http://localhost";var gu=Object.freeze({__proto__:null,hasBrowserEnv:ws,hasStandardBrowserWebWorkerEnv:_u,hasStandardBrowserEnv:Ss,navigator:Ts,origin:Cs}),st={...gu,...pu};function mu(d,p){return Jn(d,new st.classes.URLSearchParams,{visitor:function(y,I,S,N){return st.isNode&&L.isBuffer(y)?(this.append(I,y.toString("base64")),!1):N.defaultVisitor.apply(this,arguments)},...p})}function vu(d){return L.matchAll(/\w+|\[(\w*)]/g,d).map(p=>p[0]==="[]"?"":p[1]||p[0])}function yu(d){const p={},y=Object.keys(d);let I;const S=y.length;let N;for(I=0;I<S;I++)N=y[I],p[N]=d[N];return p}function Yo(d){function p(y,I,S,N){let P=y[N++];if(P==="__proto__")return!0;const H=Number.isFinite(+P),Q=N>=y.length;return P=!P&&L.isArray(S)?S.length:P,Q?(L.hasOwnProp(S,P)?S[P]=[S[P],I]:S[P]=I,!H):((!S[P]||!L.isObject(S[P]))&&(S[P]=[]),p(y,I,S[P],N)&&L.isArray(S[P])&&(S[P]=yu(S[P])),!H)}if(L.isFormData(d)&&L.isFunction(d.entries)){const y={};return L.forEachEntry(d,(I,S)=>{p(vu(I),S,y,0)}),y}return null}function Iu(d,p,y){if(L.isString(d))try{return(p||JSON.parse)(d),L.trim(d)}catch(I){if(I.name!=="SyntaxError")throw I}return(y||JSON.stringify)(d)}const bs={transitional:Ko,adapter:["xhr","http","fetch"],transformRequest:[function(p,y){const I=y.getContentType()||"",S=I.indexOf("application/json")>-1,N=L.isObject(p);if(N&&L.isHTMLForm(p)&&(p=new FormData(p)),L.isFormData(p))return S?JSON.stringify(Yo(p)):p;if(L.isArrayBuffer(p)||L.isBuffer(p)||L.isStream(p)||L.isFile(p)||L.isBlob(p)||L.isReadableStream(p))return p;if(L.isArrayBufferView(p))return p.buffer;if(L.isURLSearchParams(p))return y.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();let H;if(N){if(I.indexOf("application/x-www-form-urlencoded")>-1)return mu(p,this.formSerializer).toString();if((H=L.isFileList(p))||I.indexOf("multipart/form-data")>-1){const Q=this.env&&this.env.FormData;return Jn(H?{"files[]":p}:p,Q&&new Q,this.formSerializer)}}return N||S?(y.setContentType("application/json",!1),Iu(p)):p}],transformResponse:[function(p){const y=this.transitional||bs.transitional,I=y&&y.forcedJSONParsing,S=this.responseType==="json";if(L.isResponse(p)||L.isReadableStream(p))return p;if(p&&L.isString(p)&&(I&&!this.responseType||S)){const P=!(y&&y.silentJSONParsing)&&S;try{return JSON.parse(p)}catch(H){if(P)throw H.name==="SyntaxError"?ce.from(H,ce.ERR_BAD_RESPONSE,this,null,this.response):H}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:st.classes.FormData,Blob:st.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],d=>{bs.headers[d]={}});var pi=bs;const Eu=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var wu=d=>{const p={};let y,I,S;return d&&d.split(`
`).forEach(function(P){S=P.indexOf(":"),y=P.substring(0,S).trim().toLowerCase(),I=P.substring(S+1).trim(),!(!y||p[y]&&Eu[y])&&(y==="set-cookie"?p[y]?p[y].push(I):p[y]=[I]:p[y]=p[y]?p[y]+", "+I:I)}),p};const Jo=Symbol("internals");function kr(d){return d&&String(d).trim().toLowerCase()}function _i(d){return d===!1||d==null?d:L.isArray(d)?d.map(_i):String(d)}function Tu(d){const p=Object.create(null),y=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let I;for(;I=y.exec(d);)p[I[1]]=I[2];return p}const gi=d=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(d.trim());function As(d,p,y,I,S){if(L.isFunction(I))return I.call(this,p,y);if(S&&(p=y),!!L.isString(p)){if(L.isString(I))return p.indexOf(I)!==-1;if(L.isRegExp(I))return I.test(p)}}function mi(d){return d.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(p,y,I)=>y.toUpperCase()+I)}function Su(d,p){const y=L.toCamelCase(" "+p);["get","set","has"].forEach(I=>{Object.defineProperty(d,I+y,{value:function(S,N,P){return this[I].call(this,p,S,N,P)},configurable:!0})})}class vi{constructor(p){p&&this.set(p)}set(p,y,I){const S=this;function N(H,Q,K){const $=kr(Q);if(!$)throw new Error("header name must be a non-empty string");const se=L.findKey(S,$);(!se||S[se]===void 0||K===!0||K===void 0&&S[se]!==!1)&&(S[se||Q]=_i(H))}const P=(H,Q)=>L.forEach(H,(K,$)=>N(K,$,Q));if(L.isPlainObject(p)||p instanceof this.constructor)P(p,y);else if(L.isString(p)&&(p=p.trim())&&!gi(p))P(wu(p),y);else if(L.isObject(p)&&L.isIterable(p)){let H={},Q,K;for(const $ of p){if(!L.isArray($))throw TypeError("Object iterator must return a key-value pair");H[K=$[0]]=(Q=H[K])?L.isArray(Q)?[...Q,$[1]]:[Q,$[1]]:$[1]}P(H,y)}else p!=null&&N(y,p,I);return this}get(p,y){if(p=kr(p),p){const I=L.findKey(this,p);if(I){const S=this[I];if(!y)return S;if(y===!0)return Tu(S);if(L.isFunction(y))return y.call(this,S,I);if(L.isRegExp(y))return y.exec(S);throw new TypeError("parser must be boolean|regexp|function")}}}has(p,y){if(p=kr(p),p){const I=L.findKey(this,p);return!!(I&&this[I]!==void 0&&(!y||As(this,this[I],I,y)))}return!1}delete(p,y){const I=this;let S=!1;function N(P){if(P=kr(P),P){const H=L.findKey(I,P);H&&(!y||As(I,I[H],H,y))&&(delete I[H],S=!0)}}return L.isArray(p)?p.forEach(N):N(p),S}clear(p){const y=Object.keys(this);let I=y.length,S=!1;for(;I--;){const N=y[I];(!p||As(this,this[N],N,p,!0))&&(delete this[N],S=!0)}return S}normalize(p){const y=this,I={};return L.forEach(this,(S,N)=>{const P=L.findKey(I,N);if(P){y[P]=_i(S),delete y[N];return}const H=p?mi(N):String(N).trim();H!==N&&delete y[N],y[H]=_i(S),I[H]=!0}),this}concat(...p){return this.constructor.concat(this,...p)}toJSON(p){const y=Object.create(null);return L.forEach(this,(I,S)=>{I!=null&&I!==!1&&(y[S]=p&&L.isArray(I)?I.join(", "):I)}),y}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([p,y])=>p+": "+y).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(p){return p instanceof this?p:new this(p)}static concat(p,...y){const I=new this(p);return y.forEach(S=>I.set(S)),I}static accessor(p){const I=(this[Jo]=this[Jo]={accessors:{}}).accessors,S=this.prototype;function N(P){const H=kr(P);I[H]||(Su(S,P),I[H]=!0)}return L.isArray(p)?p.forEach(N):N(p),this}}vi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),L.reduceDescriptors(vi.prototype,({value:d},p)=>{let y=p[0].toUpperCase()+p.slice(1);return{get:()=>d,set(I){this[y]=I}}}),L.freezeMethods(vi);var Ut=vi;function yi(d,p){const y=this||pi,I=p||y,S=Ut.from(I.headers);let N=I.data;return L.forEach(d,function(H){N=H.call(y,N,S.normalize(),p?p.status:void 0)}),S.normalize(),N}function Rs(d){return!!(d&&d.__CANCEL__)}function Cn(d,p,y){ce.call(this,d??"canceled",ce.ERR_CANCELED,p,y),this.name="CanceledError"}L.inherits(Cn,ce,{__CANCEL__:!0});function Qo(d,p,y){const I=y.config.validateStatus;!y.status||!I||I(y.status)?d(y):p(new ce("Request failed with status code "+y.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(y.status/100)-4],y.config,y.request,y))}function Cu(d){const p=/^([-+\w]{1,25})(:?\/\/|:)/.exec(d);return p&&p[1]||""}function bu(d,p){d=d||10;const y=new Array(d),I=new Array(d);let S=0,N=0,P;return p=p!==void 0?p:1e3,function(Q){const K=Date.now(),$=I[N];P||(P=K),y[S]=Q,I[S]=K;let se=N,De=0;for(;se!==S;)De+=y[se++],se=se%d;if(S=(S+1)%d,S===N&&(N=(N+1)%d),K-P<p)return;const Ue=$&&K-$;return Ue?Math.round(De*1e3/Ue):void 0}}function Au(d,p){let y=0,I=1e3/p,S,N;const P=(K,$=Date.now())=>{y=$,S=null,N&&(clearTimeout(N),N=null),d(...K)};return[(...K)=>{const $=Date.now(),se=$-y;se>=I?P(K,$):(S=K,N||(N=setTimeout(()=>{N=null,P(S)},I-se)))},()=>S&&P(S)]}const Lr=(d,p,y=3)=>{let I=0;const S=bu(50,250);return Au(N=>{const P=N.loaded,H=N.lengthComputable?N.total:void 0,Q=P-I,K=S(Q),$=P<=H;I=P;const se={loaded:P,total:H,progress:H?P/H:void 0,bytes:Q,rate:K||void 0,estimated:K&&H&&$?(H-P)/K:void 0,event:N,lengthComputable:H!=null,[p?"download":"upload"]:!0};d(se)},y)},Ns=(d,p)=>{const y=d!=null;return[I=>p[0]({lengthComputable:y,total:d,loaded:I}),p[1]]},Ps=d=>(...p)=>L.asap(()=>d(...p));var Os=st.hasStandardBrowserEnv?((d,p)=>y=>(y=new URL(y,st.origin),d.protocol===y.protocol&&d.host===y.host&&(p||d.port===y.port)))(new URL(st.origin),st.navigator&&/(msie|trident)/i.test(st.navigator.userAgent)):()=>!0,Ru=st.hasStandardBrowserEnv?{write(d,p,y,I,S,N){const P=[d+"="+encodeURIComponent(p)];L.isNumber(y)&&P.push("expires="+new Date(y).toGMTString()),L.isString(I)&&P.push("path="+I),L.isString(S)&&P.push("domain="+S),N===!0&&P.push("secure"),document.cookie=P.join("; ")},read(d){const p=document.cookie.match(new RegExp("(^|;\\s*)("+d+")=([^;]*)"));return p?decodeURIComponent(p[3]):null},remove(d){this.write(d,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Xo(d){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(d)}function Ii(d,p){return p?d.replace(/\/?\/$/,"")+"/"+p.replace(/^\/+/,""):d}function Ds(d,p,y){let I=!Xo(p);return d&&(I||y==!1)?Ii(d,p):p}const Zo=d=>d instanceof Ut?{...d}:d;function _n(d,p){p=p||{};const y={};function I(K,$,se,De){return L.isPlainObject(K)&&L.isPlainObject($)?L.merge.call({caseless:De},K,$):L.isPlainObject($)?L.merge({},$):L.isArray($)?$.slice():$}function S(K,$,se,De){if(L.isUndefined($)){if(!L.isUndefined(K))return I(void 0,K,se,De)}else return I(K,$,se,De)}function N(K,$){if(!L.isUndefined($))return I(void 0,$)}function P(K,$){if(L.isUndefined($)){if(!L.isUndefined(K))return I(void 0,K)}else return I(void 0,$)}function H(K,$,se){if(se in p)return I(K,$);if(se in d)return I(void 0,K)}const Q={url:N,method:N,data:N,baseURL:P,transformRequest:P,transformResponse:P,paramsSerializer:P,timeout:P,timeoutMessage:P,withCredentials:P,withXSRFToken:P,adapter:P,responseType:P,xsrfCookieName:P,xsrfHeaderName:P,onUploadProgress:P,onDownloadProgress:P,decompress:P,maxContentLength:P,maxBodyLength:P,beforeRedirect:P,transport:P,httpAgent:P,httpsAgent:P,cancelToken:P,socketPath:P,responseEncoding:P,validateStatus:H,headers:(K,$,se)=>S(Zo(K),Zo($),se,!0)};return L.forEach(Object.keys({...d,...p}),function($){const se=Q[$]||S,De=se(d[$],p[$],$);L.isUndefined(De)&&se!==H||(y[$]=De)}),y}var ks=d=>{const p=_n({},d);let{data:y,withXSRFToken:I,xsrfHeaderName:S,xsrfCookieName:N,headers:P,auth:H}=p;p.headers=P=Ut.from(P),p.url=Es(Ds(p.baseURL,p.url,p.allowAbsoluteUrls),d.params,d.paramsSerializer),H&&P.set("Authorization","Basic "+btoa((H.username||"")+":"+(H.password?unescape(encodeURIComponent(H.password)):"")));let Q;if(L.isFormData(y)){if(st.hasStandardBrowserEnv||st.hasStandardBrowserWebWorkerEnv)P.setContentType(void 0);else if((Q=P.getContentType())!==!1){const[K,...$]=Q?Q.split(";").map(se=>se.trim()).filter(Boolean):[];P.setContentType([K||"multipart/form-data",...$].join("; "))}}if(st.hasStandardBrowserEnv&&(I&&L.isFunction(I)&&(I=I(p)),I||I!==!1&&Os(p.url))){const K=S&&N&&Ru.read(N);K&&P.set(S,K)}return p},Nu=typeof XMLHttpRequest<"u"&&function(d){return new Promise(function(y,I){const S=ks(d);let N=S.data;const P=Ut.from(S.headers).normalize();let{responseType:H,onUploadProgress:Q,onDownloadProgress:K}=S,$,se,De,Ue,re;function de(){Ue&&Ue(),re&&re(),S.cancelToken&&S.cancelToken.unsubscribe($),S.signal&&S.signal.removeEventListener("abort",$)}let Y=new XMLHttpRequest;Y.open(S.method.toUpperCase(),S.url,!0),Y.timeout=S.timeout;function ke(){if(!Y)return;const tt=Ut.from("getAllResponseHeaders"in Y&&Y.getAllResponseHeaders()),gt={data:!H||H==="text"||H==="json"?Y.responseText:Y.response,status:Y.status,statusText:Y.statusText,headers:tt,config:d,request:Y};Qo(function(bn){y(bn),de()},function(bn){I(bn),de()},gt),Y=null}"onloadend"in Y?Y.onloadend=ke:Y.onreadystatechange=function(){!Y||Y.readyState!==4||Y.status===0&&!(Y.responseURL&&Y.responseURL.indexOf("file:")===0)||setTimeout(ke)},Y.onabort=function(){Y&&(I(new ce("Request aborted",ce.ECONNABORTED,d,Y)),Y=null)},Y.onerror=function(){I(new ce("Network Error",ce.ERR_NETWORK,d,Y)),Y=null},Y.ontimeout=function(){let Bt=S.timeout?"timeout of "+S.timeout+"ms exceeded":"timeout exceeded";const gt=S.transitional||Ko;S.timeoutErrorMessage&&(Bt=S.timeoutErrorMessage),I(new ce(Bt,gt.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,d,Y)),Y=null},N===void 0&&P.setContentType(null),"setRequestHeader"in Y&&L.forEach(P.toJSON(),function(Bt,gt){Y.setRequestHeader(gt,Bt)}),L.isUndefined(S.withCredentials)||(Y.withCredentials=!!S.withCredentials),H&&H!=="json"&&(Y.responseType=S.responseType),K&&([De,re]=Lr(K,!0),Y.addEventListener("progress",De)),Q&&Y.upload&&([se,Ue]=Lr(Q),Y.upload.addEventListener("progress",se),Y.upload.addEventListener("loadend",Ue)),(S.cancelToken||S.signal)&&($=tt=>{Y&&(I(!tt||tt.type?new Cn(null,d,Y):tt),Y.abort(),Y=null)},S.cancelToken&&S.cancelToken.subscribe($),S.signal&&(S.signal.aborted?$():S.signal.addEventListener("abort",$)));const ze=Cu(S.url);if(ze&&st.protocols.indexOf(ze)===-1){I(new ce("Unsupported protocol "+ze+":",ce.ERR_BAD_REQUEST,d));return}Y.send(N||null)})},Ls=(d,p)=>{const{length:y}=d=d?d.filter(Boolean):[];if(p||y){let I=new AbortController,S;const N=function(K){if(!S){S=!0,H();const $=K instanceof Error?K:this.reason;I.abort($ instanceof ce?$:new Cn($ instanceof Error?$.message:$))}};let P=p&&setTimeout(()=>{P=null,N(new ce(`timeout ${p} of ms exceeded`,ce.ETIMEDOUT))},p);const H=()=>{d&&(P&&clearTimeout(P),P=null,d.forEach(K=>{K.unsubscribe?K.unsubscribe(N):K.removeEventListener("abort",N)}),d=null)};d.forEach(K=>K.addEventListener("abort",N));const{signal:Q}=I;return Q.unsubscribe=()=>L.asap(H),Q}};const Ms=function*(d,p){let y=d.byteLength;if(y<p){yield d;return}let I=0,S;for(;I<y;)S=I+p,yield d.slice(I,S),I=S},Qn=async function*(d,p){for await(const y of ta(d))yield*Ms(y,p)},ta=async function*(d){if(d[Symbol.asyncIterator]){yield*d;return}const p=d.getReader();try{for(;;){const{done:y,value:I}=await p.read();if(y)break;yield I}}finally{await p.cancel()}},xs=(d,p,y,I)=>{const S=Qn(d,p);let N=0,P,H=Q=>{P||(P=!0,I&&I(Q))};return new ReadableStream({async pull(Q){try{const{done:K,value:$}=await S.next();if(K){H(),Q.close();return}let se=$.byteLength;if(y){let De=N+=se;y(De)}Q.enqueue(new Uint8Array($))}catch(K){throw H(K),K}},cancel(Q){return H(Q),S.return()}},{highWaterMark:2})},Ei=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Fs=Ei&&typeof ReadableStream=="function",na=Ei&&(typeof TextEncoder=="function"?(d=>p=>d.encode(p))(new TextEncoder):async d=>new Uint8Array(await new Response(d).arrayBuffer())),Us=(d,...p)=>{try{return!!d(...p)}catch{return!1}},ra=Fs&&Us(()=>{let d=!1;const p=new Request(st.origin,{body:new ReadableStream,method:"POST",get duplex(){return d=!0,"half"}}).headers.has("Content-Type");return d&&!p}),ia=64*1024,Bs=Fs&&Us(()=>L.isReadableStream(new Response("").body)),wi={stream:Bs&&(d=>d.body)};Ei&&(d=>{["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!wi[p]&&(wi[p]=L.isFunction(d[p])?y=>y[p]():(y,I)=>{throw new ce(`Response type '${p}' is not supported`,ce.ERR_NOT_SUPPORT,I)})})})(new Response);const sa=async d=>{if(d==null)return 0;if(L.isBlob(d))return d.size;if(L.isSpecCompliantForm(d))return(await new Request(st.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(L.isArrayBufferView(d)||L.isArrayBuffer(d))return d.byteLength;if(L.isURLSearchParams(d)&&(d=d+""),L.isString(d))return(await na(d)).byteLength},Ou=async(d,p)=>{const y=L.toFiniteNumber(d.getContentLength());return y??sa(p)};var Du=Ei&&(async d=>{let{url:p,method:y,data:I,signal:S,cancelToken:N,timeout:P,onDownloadProgress:H,onUploadProgress:Q,responseType:K,headers:$,withCredentials:se="same-origin",fetchOptions:De}=ks(d);K=K?(K+"").toLowerCase():"text";let Ue=Ls([S,N&&N.toAbortSignal()],P),re;const de=Ue&&Ue.unsubscribe&&(()=>{Ue.unsubscribe()});let Y;try{if(Q&&ra&&y!=="get"&&y!=="head"&&(Y=await Ou($,I))!==0){let gt=new Request(p,{method:"POST",body:I,duplex:"half"}),mn;if(L.isFormData(I)&&(mn=gt.headers.get("content-type"))&&$.setContentType(mn),gt.body){const[bn,Mr]=Ns(Y,Lr(Ps(Q)));I=xs(gt.body,ia,bn,Mr)}}L.isString(se)||(se=se?"include":"omit");const ke="credentials"in Request.prototype;re=new Request(p,{...De,signal:Ue,method:y.toUpperCase(),headers:$.normalize().toJSON(),body:I,duplex:"half",credentials:ke?se:void 0});let ze=await fetch(re,De);const tt=Bs&&(K==="stream"||K==="response");if(Bs&&(H||tt&&de)){const gt={};["status","statusText","headers"].forEach(xr=>{gt[xr]=ze[xr]});const mn=L.toFiniteNumber(ze.headers.get("content-length")),[bn,Mr]=H&&Ns(mn,Lr(Ps(H),!0))||[];ze=new Response(xs(ze.body,ia,bn,()=>{Mr&&Mr(),de&&de()}),gt)}K=K||"text";let Bt=await wi[L.findKey(wi,K)||"text"](ze,d);return!tt&&de&&de(),await new Promise((gt,mn)=>{Qo(gt,mn,{data:Bt,headers:Ut.from(ze.headers),status:ze.status,statusText:ze.statusText,config:d,request:re})})}catch(ke){throw de&&de(),ke&&ke.name==="TypeError"&&/Load failed|fetch/i.test(ke.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,d,re),{cause:ke.cause||ke}):ce.from(ke,ke&&ke.code,d,re)}});const Ws={http:ms,xhr:Nu,fetch:Du};L.forEach(Ws,(d,p)=>{if(d){try{Object.defineProperty(d,"name",{value:p})}catch{}Object.defineProperty(d,"adapterName",{value:p})}});const oa=d=>`- ${d}`,Hs=d=>L.isFunction(d)||d===null||d===!1;var aa={getAdapter:d=>{d=L.isArray(d)?d:[d];const{length:p}=d;let y,I;const S={};for(let N=0;N<p;N++){y=d[N];let P;if(I=y,!Hs(y)&&(I=Ws[(P=String(y)).toLowerCase()],I===void 0))throw new ce(`Unknown adapter '${P}'`);if(I)break;S[P||"#"+N]=I}if(!I){const N=Object.entries(S).map(([H,Q])=>`adapter ${H} `+(Q===!1?"is not supported by the environment":"is not available in the build"));let P=p?N.length>1?`since :
`+N.map(oa).join(`
`):" "+oa(N[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+P,"ERR_NOT_SUPPORT")}return I},adapters:Ws};function Vs(d){if(d.cancelToken&&d.cancelToken.throwIfRequested(),d.signal&&d.signal.aborted)throw new Cn(null,d)}function la(d){return Vs(d),d.headers=Ut.from(d.headers),d.data=yi.call(d,d.transformRequest),["post","put","patch"].indexOf(d.method)!==-1&&d.headers.setContentType("application/x-www-form-urlencoded",!1),aa.getAdapter(d.adapter||pi.adapter)(d).then(function(I){return Vs(d),I.data=yi.call(d,d.transformResponse,I),I.headers=Ut.from(I.headers),I},function(I){return Rs(I)||(Vs(d),I&&I.response&&(I.response.data=yi.call(d,d.transformResponse,I.response),I.response.headers=Ut.from(I.response.headers))),Promise.reject(I)})}const ua="1.11.0",Ti={};["object","boolean","number","function","string","symbol"].forEach((d,p)=>{Ti[d]=function(I){return typeof I===d||"a"+(p<1?"n ":" ")+d}});const xe={};Ti.transitional=function(p,y,I){function S(N,P){return"[Axios v"+ua+"] Transitional option '"+N+"'"+P+(I?". "+I:"")}return(N,P,H)=>{if(p===!1)throw new ce(S(P," has been removed"+(y?" in "+y:"")),ce.ERR_DEPRECATED);return y&&!xe[P]&&(xe[P]=!0,console.warn(S(P," has been deprecated since v"+y+" and will be removed in the near future"))),p?p(N,P,H):!0}},Ti.spelling=function(p){return(y,I)=>(console.warn(`${I} is likely a misspelling of ${p}`),!0)};function Fe(d,p,y){if(typeof d!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const I=Object.keys(d);let S=I.length;for(;S-- >0;){const N=I[S],P=p[N];if(P){const H=d[N],Q=H===void 0||P(H,N,d);if(Q!==!0)throw new ce("option "+N+" must be "+Q,ce.ERR_BAD_OPTION_VALUE);continue}if(y!==!0)throw new ce("Unknown option "+N,ce.ERR_BAD_OPTION)}}var Si={assertOptions:Fe,validators:Ti};const zt=Si.validators;class Ci{constructor(p){this.defaults=p||{},this.interceptors={request:new zo,response:new zo}}async request(p,y){try{return await this._request(p,y)}catch(I){if(I instanceof Error){let S={};Error.captureStackTrace?Error.captureStackTrace(S):S=new Error;const N=S.stack?S.stack.replace(/^.+\n/,""):"";try{I.stack?N&&!String(I.stack).endsWith(N.replace(/^.+\n.+\n/,""))&&(I.stack+=`
`+N):I.stack=N}catch{}}throw I}}_request(p,y){typeof p=="string"?(y=y||{},y.url=p):y=p||{},y=_n(this.defaults,y);const{transitional:I,paramsSerializer:S,headers:N}=y;I!==void 0&&Si.assertOptions(I,{silentJSONParsing:zt.transitional(zt.boolean),forcedJSONParsing:zt.transitional(zt.boolean),clarifyTimeoutError:zt.transitional(zt.boolean)},!1),S!=null&&(L.isFunction(S)?y.paramsSerializer={serialize:S}:Si.assertOptions(S,{encode:zt.function,serialize:zt.function},!0)),y.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?y.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:y.allowAbsoluteUrls=!0),Si.assertOptions(y,{baseUrl:zt.spelling("baseURL"),withXsrfToken:zt.spelling("withXSRFToken")},!0),y.method=(y.method||this.defaults.method||"get").toLowerCase();let P=N&&L.merge(N.common,N[y.method]);N&&L.forEach(["delete","get","head","post","put","patch","common"],re=>{delete N[re]}),y.headers=Ut.concat(P,N);const H=[];let Q=!0;this.interceptors.request.forEach(function(de){typeof de.runWhen=="function"&&de.runWhen(y)===!1||(Q=Q&&de.synchronous,H.unshift(de.fulfilled,de.rejected))});const K=[];this.interceptors.response.forEach(function(de){K.push(de.fulfilled,de.rejected)});let $,se=0,De;if(!Q){const re=[la.bind(this),void 0];for(re.unshift(...H),re.push(...K),De=re.length,$=Promise.resolve(y);se<De;)$=$.then(re[se++],re[se++]);return $}De=H.length;let Ue=y;for(se=0;se<De;){const re=H[se++],de=H[se++];try{Ue=re(Ue)}catch(Y){de.call(this,Y);break}}try{$=la.call(this,Ue)}catch(re){return Promise.reject(re)}for(se=0,De=K.length;se<De;)$=$.then(K[se++],K[se++]);return $}getUri(p){p=_n(this.defaults,p);const y=Ds(p.baseURL,p.url,p.allowAbsoluteUrls);return Es(y,p.params,p.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(p){Ci.prototype[p]=function(y,I){return this.request(_n(I||{},{method:p,url:y,data:(I||{}).data}))}}),L.forEach(["post","put","patch"],function(p){function y(I){return function(N,P,H){return this.request(_n(H||{},{method:p,headers:I?{"Content-Type":"multipart/form-data"}:{},url:N,data:P}))}}Ci.prototype[p]=y(),Ci.prototype[p+"Form"]=y(!0)});var bi=Ci;class qs{constructor(p){if(typeof p!="function")throw new TypeError("executor must be a function.");let y;this.promise=new Promise(function(N){y=N});const I=this;this.promise.then(S=>{if(!I._listeners)return;let N=I._listeners.length;for(;N-- >0;)I._listeners[N](S);I._listeners=null}),this.promise.then=S=>{let N;const P=new Promise(H=>{I.subscribe(H),N=H}).then(S);return P.cancel=function(){I.unsubscribe(N)},P},p(function(N,P,H){I.reason||(I.reason=new Cn(N,P,H),y(I.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(p){if(this.reason){p(this.reason);return}this._listeners?this._listeners.push(p):this._listeners=[p]}unsubscribe(p){if(!this._listeners)return;const y=this._listeners.indexOf(p);y!==-1&&this._listeners.splice(y,1)}toAbortSignal(){const p=new AbortController,y=I=>{p.abort(I)};return this.subscribe(y),p.signal.unsubscribe=()=>this.unsubscribe(y),p.signal}static source(){let p;return{token:new qs(function(S){p=S}),cancel:p}}}var ku=qs;function ca(d){return function(y){return d.apply(null,y)}}function Lu(d){return L.isObject(d)&&d.isAxiosError===!0}const Qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qe).forEach(([d,p])=>{Qe[p]=d});var $s=Qe;function gn(d){const p=new bi(d),y=n(bi.prototype.request,p);return L.extend(y,bi.prototype,p,{allOwnKeys:!0}),L.extend(y,p,null,{allOwnKeys:!0}),y.create=function(S){return gn(_n(d,S))},y}const Ge=gn(pi);return Ge.Axios=bi,Ge.CanceledError=Cn,Ge.CancelToken=ku,Ge.isCancel=Rs,Ge.VERSION=ua,Ge.toFormData=Jn,Ge.AxiosError=ce,Ge.Cancel=Ge.CanceledError,Ge.all=function(p){return Promise.all(p)},Ge.spread=ca,Ge.isAxiosError=Lu,Ge.mergeConfig=_n,Ge.AxiosHeaders=Ut,Ge.formToJSON=d=>Yo(L.isHTMLForm(d)?new FormData(d):d),Ge.getAdapter=aa.getAdapter,Ge.HttpStatusCode=$s,Ge.default=Ge,Yc=Ge,Yc}var G_;function Zl(){if(G_)return or;G_=1;var n=or&&or.__assign||function(){return n=Object.assign||function(u){for(var f,h=1,g=arguments.length;h<g;h++){f=arguments[h];for(var E in f)Object.prototype.hasOwnProperty.call(f,E)&&(u[E]=f[E])}return u},n.apply(this,arguments)},e=or&&or.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(or,"__esModule",{value:!0});var t=e(Wo()),i=e(NP()),o="Unknown error occured";function a(u,f,h){var g={method:u.method,url:u.url,auth:{username:f.privateKey||"",password:""},maxBodyLength:1/0};typeof u.json=="object"?g.data=u.json:typeof u.formData=="object"&&(g.data=u.formData),typeof u.qs=="object"&&(g.params=u.qs),typeof u.headers=="object"&&(g.headers=u.headers),(0,i.default)(g).then(function(E){if(typeof h=="function"){var T=E.data,b=E.status,O=E.headers,F={statusCode:b,headers:O.toJSON()},W=T||{};Object.defineProperty(W,"$ResponseMetadata",{value:F,enumerable:!1,writable:!1}),(0,t.default)(!1,W,h)}},function(E){if(typeof h=="function")if(E.response){var T={statusCode:E.response.status,headers:E.response.headers.toJSON()},b={};E.response.data&&typeof E.response.data=="object"?b=E.response.data:E.response.data&&typeof E.response.data=="string"&&(b={help:E.response.data}),E.response.status===429&&(b=n(n({},b),{"X-RateLimit-Limit":parseInt(E.response.headers["x-ratelimit-limit"],10),"X-RateLimit-Reset":parseInt(E.response.headers["x-ratelimit-reset"],10),"X-RateLimit-Interval":parseInt(E.response.headers["x-ratelimit-interval"],10)})),Object.defineProperty(b,"$ResponseMetadata",{value:T,enumerable:!1,writable:!1}),(0,t.default)(!0,b,h)}else E?(0,t.default)(!0,E,h):(0,t.default)(!0,new Error(o),h)})}return or.default=a,or}var z_;function PP(){if(z_)return Vi;z_=1;var n=Vi&&Vi.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(Vi,"__esModule",{value:!0});var e=n(oi()),t=n(Wo()),i=n(Zl()),o=function(u,f,h){if(!u&&!u.length){(0,t.default)(!0,e.default.CACHE_PURGE_URL_MISSING,h);return}var g={url:"https://api.imagekit.io/v1/files/purge",method:"POST",json:{url:u}};(0,i.default)(g,f,h)},a=function(u,f,h){if(!u&&!u.length){(0,t.default)(!0,e.default.CACHE_PURGE_STATUS_ID_MISSING,h);return}var g={url:"https://api.imagekit.io/v1/files/purge/"+u,method:"GET"};(0,i.default)(g,f,h)};return Vi.default={purgeCache:o,getPurgeCacheStatus:a},Vi}var ar={},K_;function OP(){if(K_)return ar;K_=1;var n=ar&&ar.__assign||function(){return n=Object.assign||function(G){for(var ee,j=1,X=arguments.length;j<X;j++){ee=arguments[j];for(var oe in ee)Object.prototype.hasOwnProperty.call(ee,oe)&&(G[oe]=ee[oe])}return G},n.apply(this,arguments)},e=ar&&ar.__importDefault||function(G){return G&&G.__esModule?G:{default:G}};Object.defineProperty(ar,"__esModule",{value:!0});var t=Bo(),i=e(oi()),o=e(Wo()),a=e(Zl()),u=function(G,ee,j){if(!G){(0,o.default)(!0,i.default.FILE_ID_MISSING,j);return}var X={url:"https://api.imagekit.io/v1/files/"+G,method:"DELETE"};(0,a.default)(X,ee,j)},f=function(G,ee,j){var X=G||{},oe=X.fileId,me=X.versionId;if(!oe){(0,o.default)(!0,i.default.FILE_ID_MISSING,j);return}if(!me){(0,o.default)(!0,i.default.FILE_VERSION_ID_MISSING,j);return}var ye={url:"https://api.imagekit.io/v1/files/".concat(oe,"/versions/").concat(me),method:"DELETE"};(0,a.default)(ye,ee,j)},h=function(G,ee,j){var X=G||{},oe=X.fileId,me=X.versionId;if(!oe){(0,o.default)(!0,i.default.FILE_ID_MISSING,j);return}if(!me){(0,o.default)(!0,i.default.FILE_VERSION_ID_MISSING,j);return}var ye={url:"https://api.imagekit.io/v1/files/".concat(oe,"/versions/").concat(me,"/restore"),method:"PUT"};(0,a.default)(ye,ee,j)},g=function(G,ee,j){if(!G||G.trim()==""){(0,o.default)(!0,i.default.FILE_ID_OR_URL_MISSING,j);return}var X={url:"https://api.imagekit.io/v1/files/"+G+"/metadata",method:"GET"};G.indexOf("http")===0&&(X={url:"https://api.imagekit.io/v1/metadata?url=".concat(G),method:"GET"}),(0,a.default)(X,ee,j)},E=function(G,ee,j){if(!G){(0,o.default)(!0,i.default.FILE_ID_MISSING,j);return}var X={url:"https://api.imagekit.io/v1/files/"+G+"/details",method:"GET"};(0,a.default)(X,ee,j)},T=function(G,ee,j){var X=G||{},oe=X.fileId,me=X.versionId;if(!oe){(0,o.default)(!0,i.default.FILE_ID_MISSING,j);return}if(!me){(0,o.default)(!0,i.default.FILE_VERSION_ID_MISSING,j);return}var ye={url:"https://api.imagekit.io/v1/files/".concat(oe,"/versions/").concat(me),method:"GET"};(0,a.default)(ye,ee,j)},b=function(G,ee,j,X){if(!G){(0,o.default)(!0,i.default.FILE_ID_MISSING,X);return}if(!(0,t.isObject)(ee)){(0,o.default)(!0,i.default.UPDATE_DATA_MISSING,X);return}var oe={};oe={tags:ee.tags,customCoordinates:ee.customCoordinates,extensions:ee.extensions,webhookUrl:ee.webhookUrl,customMetadata:ee.customMetadata},ee.publish&&(oe=n(n({},oe),{publish:ee.publish}));var me={url:"https://api.imagekit.io/v1/files/"+G+"/details",method:"PATCH",json:oe};(0,a.default)(me,j,X)},O=function(G,ee,j){if(G&&!(0,t.isObject)(G)){(0,o.default)(!0,i.default.INVALID_LIST_OPTIONS,j);return}G&&G.tags&&Array.isArray(G.tags)&&G.tags.length&&(G.tags=G.tags.join(","));var X={url:"https://api.imagekit.io/v1/files/",method:"GET",qs:G||{}};(0,a.default)(X,ee,j)},F=function(G,ee,j){if(!G){(0,o.default)(!0,i.default.FILE_ID_MISSING,j);return}var X={url:"https://api.imagekit.io/v1/files/".concat(G,"/versions"),method:"GET"};(0,a.default)(X,ee,j)},W=function(G,ee,j){if(!Array.isArray(G)||G.length===0||G.filter(function(me){return typeof me!="string"}).length>0){(0,o.default)(!0,i.default.INVALID_FILEIDS_VALUE,j);return}var X={fileIds:G},oe={url:"https://api.imagekit.io/v1/files/batch/deleteByFileIds",method:"POST",json:X};(0,a.default)(oe,ee,j)},D=function(G,ee,j,X){if(!Array.isArray(G)||G.length===0||G.filter(function(ye){return typeof ye!="string"}).length>0){(0,o.default)(!0,i.default.INVALID_FILEIDS_VALUE,X);return}if(!Array.isArray(ee)||ee.length===0||ee.filter(function(ye){return typeof ye!="string"}).length>0){(0,o.default)(!0,i.default.BULK_ADD_TAGS_INVALID,X);return}var oe={fileIds:G,tags:ee},me={url:"https://api.imagekit.io/v1/files/addTags",method:"POST",json:oe};(0,a.default)(me,j,X)},M=function(G,ee,j,X){if(!Array.isArray(G)||G.length===0||G.filter(function(ye){return typeof ye!="string"}).length>0){(0,o.default)(!0,i.default.INVALID_FILEIDS_VALUE,X);return}if(!Array.isArray(ee)||ee.length===0||ee.filter(function(ye){return typeof ye!="string"}).length>0){(0,o.default)(!0,i.default.BULK_ADD_TAGS_INVALID,X);return}var oe={fileIds:G,tags:ee},me={url:"https://api.imagekit.io/v1/files/removeTags",method:"POST",json:oe};(0,a.default)(me,j,X)},q=function(G,ee,j,X){if(!Array.isArray(G)||G.length===0||G.filter(function(ye){return typeof ye!="string"}).length>0){(0,o.default)(!0,i.default.INVALID_FILEIDS_VALUE,X);return}if(!Array.isArray(ee)||ee.length===0||ee.filter(function(ye){return typeof ye!="string"}).length>0){(0,o.default)(!0,i.default.BULK_ADD_TAGS_INVALID,X);return}var oe={fileIds:G,AITags:ee},me={url:"https://api.imagekit.io/v1/files/removeAITags",method:"POST",json:oe};(0,a.default)(me,j,X)},te=function(G,ee,j){var X=G.sourceFilePath,oe=G.destinationPath,me=G.includeFileVersions,ye=me===void 0?!1:me;if(typeof X!="string"||X.length===0){(0,o.default)(!0,i.default.INVALID_SOURCE_FILE_PATH,j);return}if(typeof oe!="string"||oe.length===0){(0,o.default)(!0,i.default.INVALID_DESTINATION_FOLDER_PATH,j);return}if(typeof ye!="boolean"){(0,o.default)(!0,i.default.INVALID_INCLUDE_VERSION,j);return}var et={sourceFilePath:X,destinationPath:oe,includeFileVersions:ye},pn={url:"https://api.imagekit.io/v1/files/copy",method:"POST",json:et};(0,a.default)(pn,ee,j)},ie=function(G,ee,j){var X=G.sourceFilePath,oe=G.destinationPath;if(typeof X!="string"||X.length===0){(0,o.default)(!0,i.default.INVALID_SOURCE_FILE_PATH,j);return}if(typeof oe!="string"||oe.length===0){(0,o.default)(!0,i.default.INVALID_DESTINATION_FOLDER_PATH,j);return}var me={sourceFilePath:X,destinationPath:oe},ye={url:"https://api.imagekit.io/v1/files/move",method:"POST",json:me};(0,a.default)(ye,ee,j)},ge=function(G,ee,j){var X=G.filePath,oe=G.newFileName,me=G.purgeCache,ye=me===void 0?!1:me;if(typeof X!="string"||X.length===0){(0,o.default)(!0,i.default.INVALID_FILE_PATH,j);return}if(typeof oe!="string"||oe.length===0){(0,o.default)(!0,i.default.INVALID_NEW_FILE_NAME,j);return}if(typeof ye!="boolean"){(0,o.default)(!0,i.default.INVALID_PURGE_CACHE,j);return}var et={filePath:X,newFileName:oe,purgeCache:ye},pn={url:"https://api.imagekit.io/v1/files/rename",method:"PUT",json:et};(0,a.default)(pn,ee,j)},$e=function(G,ee,j){var X=G.sourceFolderPath,oe=G.destinationPath,me=G.includeFileVersions,ye=me===void 0?!1:me;if(typeof X!="string"||X.length===0){(0,o.default)(!0,i.default.INVALID_SOURCE_FOLDER_PATH,j);return}if(typeof oe!="string"||oe.length===0){(0,o.default)(!0,i.default.INVALID_DESTINATION_FOLDER_PATH,j);return}if(typeof ye!="boolean"){(0,o.default)(!0,i.default.INVALID_INCLUDE_VERSION,j);return}var et={sourceFolderPath:X,destinationPath:oe,includeFileVersions:ye},pn={url:"https://api.imagekit.io/v1/bulkJobs/copyFolder",method:"POST",json:et};(0,a.default)(pn,ee,j)},Oe=function(G,ee,j){var X=G.sourceFolderPath,oe=G.destinationPath;if(typeof X!="string"||X.length===0){(0,o.default)(!0,i.default.INVALID_SOURCE_FOLDER_PATH,j);return}if(typeof oe!="string"||oe.length===0){(0,o.default)(!0,i.default.INVALID_DESTINATION_FOLDER_PATH,j);return}var me={sourceFolderPath:X,destinationPath:oe},ye={url:"https://api.imagekit.io/v1/bulkJobs/moveFolder",method:"POST",json:me};(0,a.default)(ye,ee,j)},Re=function(G,ee,j){var X=G.folderName,oe=G.parentFolderPath;if(typeof X!="string"||X.length===0){(0,o.default)(!0,i.default.INVALID_FOLDER_NAME,j);return}if(typeof oe!="string"||oe.length===0){(0,o.default)(!0,i.default.INVALID_PARENT_FOLDER_PATH,j);return}var me={folderName:X,parentFolderPath:oe},ye={url:"https://api.imagekit.io/v1/folder",method:"POST",json:me};(0,a.default)(ye,ee,j)},nt=function(G,ee,j){if(typeof G!="string"||G.length===0){(0,o.default)(!0,i.default.INVALID_FOLDER_PATH,j);return}var X={folderPath:G},oe={url:"https://api.imagekit.io/v1/folder",method:"DELETE",json:X};(0,a.default)(oe,ee,j)},_t=function(G,ee,j){if(!G){(0,o.default)(!0,i.default.JOB_ID_MISSING,j);return}var X={url:"https://api.imagekit.io/v1/bulkJobs/"+G,method:"GET"};(0,a.default)(X,ee,j)};return ar.default={deleteFile:u,getMetadata:g,getDetails:E,getFileVersionDetails:T,updateDetails:b,listFiles:O,getFilesVersions:F,bulkDeleteFiles:W,deleteFileVersion:f,restoreFileVersion:h,bulkAddTags:D,bulkRemoveTags:M,bulkRemoveAITags:q,copyFile:te,moveFile:ie,renameFile:ge,copyFolder:$e,moveFolder:Oe,createFolder:Re,deleteFolder:nt,getBulkJobStatus:_t},ar}var qi={},j_;function Tv(){if(j_)return qi;j_=1;var n=qi&&qi.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(qi,"__esModule",{value:!0});var e=n(oi()),t=n(Wo()),i=n(Zl()),o=function(h,g,E){var T=h.name,b=h.label,O=h.schema;if(!T||!T.length){(0,t.default)(!0,e.default.CMF_NAME_MISSING,E);return}if(!b||!b.length){(0,t.default)(!0,e.default.CMF_LABEL_MISSING,E);return}if(!O){(0,t.default)(!0,e.default.CMF_SCHEMA_MISSING,E);return}if(!O.type){(0,t.default)(!0,e.default.CMF_SCHEMA_INVALID,E);return}var F={url:"https://api.imagekit.io/v1/customMetadataFields",method:"POST",json:{name:T,label:b,schema:O}};(0,i.default)(F,g,E)},a=function(h,g,E){var T=(h||{}).includeDeleted,b=T===void 0?!1:T,O={url:"https://api.imagekit.io/v1/customMetadataFields",method:"GET",qs:{includeDeleted:b}};(0,i.default)(O,g,E)},u=function(h,g,E,T){if(!h||typeof h!="string"||!h.length){(0,t.default)(!0,e.default.CMF_FIELD_ID_MISSING,T);return}var b=g.label,O=g.schema;if(!b&&!O){(0,t.default)(!0,e.default.CMF_LABEL_SCHEMA_MISSING,T);return}var F={};b&&(F.label=b),O&&(F.schema=O);var W={url:"https://api.imagekit.io/v1/customMetadataFields/".concat(h),method:"PATCH",json:F};(0,i.default)(W,E,T)},f=function(h,g,E){if(!h||typeof h!="string"||!h.length){(0,t.default)(!0,e.default.CMF_FIELD_ID_MISSING,E);return}var T={url:"https://api.imagekit.io/v1/customMetadataFields/".concat(h),method:"DELETE"};(0,i.default)(T,g,E)};return qi.default={create:o,list:a,update:u,deleteField:f},qi}var Y_;function DP(){if(Y_)return Hi;Y_=1;var n=Hi&&Hi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Hi,"__esModule",{value:!0});var e=n(PP()),t=n(OP()),i=n(Tv());return Hi.default={listFiles:t.default.listFiles,getFileDetails:t.default.getDetails,getFileVersions:t.default.getFilesVersions,getFileVersionDetails:t.default.getFileVersionDetails,updateFileDetails:t.default.updateDetails,getFileMetadata:t.default.getMetadata,deleteFile:t.default.deleteFile,bulkDeleteFiles:t.default.bulkDeleteFiles,deleteFileVersion:t.default.deleteFileVersion,restoreFileVersion:t.default.restoreFileVersion,bulkAddTags:t.default.bulkAddTags,bulkRemoveTags:t.default.bulkRemoveTags,bulkRemoveAITags:t.default.bulkRemoveAITags,copyFile:t.default.copyFile,moveFile:t.default.moveFile,renameFile:t.default.renameFile,copyFolder:t.default.copyFolder,moveFolder:t.default.moveFolder,createFolder:t.default.createFolder,deleteFolder:t.default.deleteFolder,getBulkJobStatus:t.default.getBulkJobStatus,purgeCache:e.default.purgeCache,getPurgeCacheStatus:e.default.getPurgeCacheStatus,createCustomMetadataField:i.default.create,getCustomMetadataFields:i.default.list,updateCustomMetadataField:i.default.update,deleteCustomMetadataField:i.default.deleteField},Hi}var $i={},el,kP=new Uint8Array(16);function Sv(){if(!el&&(el=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!el))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return el(kP)}const LP=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function eu(n){return typeof n=="string"&&LP.test(n)}var ft=[];for(var Jc=0;Jc<256;++Jc)ft.push((Jc+256).toString(16).substr(1));function tu(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(ft[n[e+0]]+ft[n[e+1]]+ft[n[e+2]]+ft[n[e+3]]+"-"+ft[n[e+4]]+ft[n[e+5]]+"-"+ft[n[e+6]]+ft[n[e+7]]+"-"+ft[n[e+8]]+ft[n[e+9]]+"-"+ft[n[e+10]]+ft[n[e+11]]+ft[n[e+12]]+ft[n[e+13]]+ft[n[e+14]]+ft[n[e+15]]).toLowerCase();if(!eu(t))throw TypeError("Stringified UUID is invalid");return t}var J_,Qc,Xc=0,Zc=0;function MP(n,e,t){var i=e&&t||0,o=e||new Array(16);n=n||{};var a=n.node||J_,u=n.clockseq!==void 0?n.clockseq:Qc;if(a==null||u==null){var f=n.random||(n.rng||Sv)();a==null&&(a=J_=[f[0]|1,f[1],f[2],f[3],f[4],f[5]]),u==null&&(u=Qc=(f[6]<<8|f[7])&16383)}var h=n.msecs!==void 0?n.msecs:Date.now(),g=n.nsecs!==void 0?n.nsecs:Zc+1,E=h-Xc+(g-Zc)/1e4;if(E<0&&n.clockseq===void 0&&(u=u+1&16383),(E<0||h>Xc)&&n.nsecs===void 0&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Xc=h,Zc=g,Qc=u,h+=122192928e5;var T=((h&268435455)*1e4+g)%4294967296;o[i++]=T>>>24&255,o[i++]=T>>>16&255,o[i++]=T>>>8&255,o[i++]=T&255;var b=h/4294967296*1e4&268435455;o[i++]=b>>>8&255,o[i++]=b&255,o[i++]=b>>>24&15|16,o[i++]=b>>>16&255,o[i++]=u>>>8|128,o[i++]=u&255;for(var O=0;O<6;++O)o[i+O]=a[O];return e||tu(o)}function Cv(n){if(!eu(n))throw TypeError("Invalid UUID");var e,t=new Uint8Array(16);return t[0]=(e=parseInt(n.slice(0,8),16))>>>24,t[1]=e>>>16&255,t[2]=e>>>8&255,t[3]=e&255,t[4]=(e=parseInt(n.slice(9,13),16))>>>8,t[5]=e&255,t[6]=(e=parseInt(n.slice(14,18),16))>>>8,t[7]=e&255,t[8]=(e=parseInt(n.slice(19,23),16))>>>8,t[9]=e&255,t[10]=(e=parseInt(n.slice(24,36),16))/1099511627776&255,t[11]=e/4294967296&255,t[12]=e>>>24&255,t[13]=e>>>16&255,t[14]=e>>>8&255,t[15]=e&255,t}function xP(n){n=unescape(encodeURIComponent(n));for(var e=[],t=0;t<n.length;++t)e.push(n.charCodeAt(t));return e}var FP="6ba7b810-9dad-11d1-80b4-00c04fd430c8",UP="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function bv(n,e,t){function i(o,a,u,f){if(typeof o=="string"&&(o=xP(o)),typeof a=="string"&&(a=Cv(a)),a.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var h=new Uint8Array(16+o.length);if(h.set(a),h.set(o,a.length),h=t(h),h[6]=h[6]&15|e,h[8]=h[8]&63|128,u){f=f||0;for(var g=0;g<16;++g)u[f+g]=h[g];return u}return tu(h)}try{i.name=n}catch{}return i.DNS=FP,i.URL=UP,i}function BP(n){if(typeof n=="string"){var e=unescape(encodeURIComponent(n));n=new Uint8Array(e.length);for(var t=0;t<e.length;++t)n[t]=e.charCodeAt(t)}return WP(HP(VP(n),n.length*8))}function WP(n){for(var e=[],t=n.length*32,i="0123456789abcdef",o=0;o<t;o+=8){var a=n[o>>5]>>>o%32&255,u=parseInt(i.charAt(a>>>4&15)+i.charAt(a&15),16);e.push(u)}return e}function Av(n){return(n+64>>>9<<4)+14+1}function HP(n,e){n[e>>5]|=128<<e%32,n[Av(e)-1]=e;for(var t=1732584193,i=-271733879,o=-1732584194,a=271733878,u=0;u<n.length;u+=16){var f=t,h=i,g=o,E=a;t=yt(t,i,o,a,n[u],7,-680876936),a=yt(a,t,i,o,n[u+1],12,-389564586),o=yt(o,a,t,i,n[u+2],17,606105819),i=yt(i,o,a,t,n[u+3],22,-1044525330),t=yt(t,i,o,a,n[u+4],7,-176418897),a=yt(a,t,i,o,n[u+5],12,1200080426),o=yt(o,a,t,i,n[u+6],17,-1473231341),i=yt(i,o,a,t,n[u+7],22,-45705983),t=yt(t,i,o,a,n[u+8],7,1770035416),a=yt(a,t,i,o,n[u+9],12,-1958414417),o=yt(o,a,t,i,n[u+10],17,-42063),i=yt(i,o,a,t,n[u+11],22,-1990404162),t=yt(t,i,o,a,n[u+12],7,1804603682),a=yt(a,t,i,o,n[u+13],12,-40341101),o=yt(o,a,t,i,n[u+14],17,-1502002290),i=yt(i,o,a,t,n[u+15],22,1236535329),t=It(t,i,o,a,n[u+1],5,-165796510),a=It(a,t,i,o,n[u+6],9,-1069501632),o=It(o,a,t,i,n[u+11],14,643717713),i=It(i,o,a,t,n[u],20,-373897302),t=It(t,i,o,a,n[u+5],5,-701558691),a=It(a,t,i,o,n[u+10],9,38016083),o=It(o,a,t,i,n[u+15],14,-660478335),i=It(i,o,a,t,n[u+4],20,-405537848),t=It(t,i,o,a,n[u+9],5,568446438),a=It(a,t,i,o,n[u+14],9,-1019803690),o=It(o,a,t,i,n[u+3],14,-187363961),i=It(i,o,a,t,n[u+8],20,1163531501),t=It(t,i,o,a,n[u+13],5,-1444681467),a=It(a,t,i,o,n[u+2],9,-51403784),o=It(o,a,t,i,n[u+7],14,1735328473),i=It(i,o,a,t,n[u+12],20,-1926607734),t=Et(t,i,o,a,n[u+5],4,-378558),a=Et(a,t,i,o,n[u+8],11,-2022574463),o=Et(o,a,t,i,n[u+11],16,1839030562),i=Et(i,o,a,t,n[u+14],23,-35309556),t=Et(t,i,o,a,n[u+1],4,-1530992060),a=Et(a,t,i,o,n[u+4],11,1272893353),o=Et(o,a,t,i,n[u+7],16,-155497632),i=Et(i,o,a,t,n[u+10],23,-1094730640),t=Et(t,i,o,a,n[u+13],4,681279174),a=Et(a,t,i,o,n[u],11,-358537222),o=Et(o,a,t,i,n[u+3],16,-722521979),i=Et(i,o,a,t,n[u+6],23,76029189),t=Et(t,i,o,a,n[u+9],4,-640364487),a=Et(a,t,i,o,n[u+12],11,-421815835),o=Et(o,a,t,i,n[u+15],16,530742520),i=Et(i,o,a,t,n[u+2],23,-995338651),t=wt(t,i,o,a,n[u],6,-198630844),a=wt(a,t,i,o,n[u+7],10,1126891415),o=wt(o,a,t,i,n[u+14],15,-1416354905),i=wt(i,o,a,t,n[u+5],21,-57434055),t=wt(t,i,o,a,n[u+12],6,1700485571),a=wt(a,t,i,o,n[u+3],10,-1894986606),o=wt(o,a,t,i,n[u+10],15,-1051523),i=wt(i,o,a,t,n[u+1],21,-2054922799),t=wt(t,i,o,a,n[u+8],6,1873313359),a=wt(a,t,i,o,n[u+15],10,-30611744),o=wt(o,a,t,i,n[u+6],15,-1560198380),i=wt(i,o,a,t,n[u+13],21,1309151649),t=wt(t,i,o,a,n[u+4],6,-145523070),a=wt(a,t,i,o,n[u+11],10,-1120210379),o=wt(o,a,t,i,n[u+2],15,718787259),i=wt(i,o,a,t,n[u+9],21,-343485551),t=dr(t,f),i=dr(i,h),o=dr(o,g),a=dr(a,E)}return[t,i,o,a]}function VP(n){if(n.length===0)return[];for(var e=n.length*8,t=new Uint32Array(Av(e)),i=0;i<e;i+=8)t[i>>5]|=(n[i/8]&255)<<i%32;return t}function dr(n,e){var t=(n&65535)+(e&65535),i=(n>>16)+(e>>16)+(t>>16);return i<<16|t&65535}function qP(n,e){return n<<e|n>>>32-e}function nu(n,e,t,i,o,a){return dr(qP(dr(dr(e,n),dr(i,a)),o),t)}function yt(n,e,t,i,o,a,u){return nu(e&t|~e&i,n,e,o,a,u)}function It(n,e,t,i,o,a,u){return nu(e&i|t&~i,n,e,o,a,u)}function Et(n,e,t,i,o,a,u){return nu(e^t^i,n,e,o,a,u)}function wt(n,e,t,i,o,a,u){return nu(t^(e|~i),n,e,o,a,u)}var $P=bv("v3",48,BP);function GP(n,e,t){n=n||{};var i=n.random||(n.rng||Sv)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=i[o];return e}return tu(i)}function zP(n,e,t,i){switch(n){case 0:return e&t^~e&i;case 1:return e^t^i;case 2:return e&t^e&i^t&i;case 3:return e^t^i}}function eh(n,e){return n<<e|n>>>32-e}function KP(n){var e=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof n=="string"){var i=unescape(encodeURIComponent(n));n=[];for(var o=0;o<i.length;++o)n.push(i.charCodeAt(o))}else Array.isArray(n)||(n=Array.prototype.slice.call(n));n.push(128);for(var a=n.length/4+2,u=Math.ceil(a/16),f=new Array(u),h=0;h<u;++h){for(var g=new Uint32Array(16),E=0;E<16;++E)g[E]=n[h*64+E*4]<<24|n[h*64+E*4+1]<<16|n[h*64+E*4+2]<<8|n[h*64+E*4+3];f[h]=g}f[u-1][14]=(n.length-1)*8/Math.pow(2,32),f[u-1][14]=Math.floor(f[u-1][14]),f[u-1][15]=(n.length-1)*8&4294967295;for(var T=0;T<u;++T){for(var b=new Uint32Array(80),O=0;O<16;++O)b[O]=f[T][O];for(var F=16;F<80;++F)b[F]=eh(b[F-3]^b[F-8]^b[F-14]^b[F-16],1);for(var W=t[0],D=t[1],M=t[2],q=t[3],te=t[4],ie=0;ie<80;++ie){var ge=Math.floor(ie/20),$e=eh(W,5)+zP(ge,D,M,q)+te+e[ge]+b[ie]>>>0;te=q,q=M,M=eh(D,30)>>>0,D=W,W=$e}t[0]=t[0]+W>>>0,t[1]=t[1]+D>>>0,t[2]=t[2]+M>>>0,t[3]=t[3]+q>>>0,t[4]=t[4]+te>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,t[0]&255,t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,t[1]&255,t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,t[2]&255,t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,t[3]&255,t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,t[4]&255]}var jP=bv("v5",80,KP);const YP="00000000-0000-0000-0000-000000000000";function JP(n){if(!eu(n))throw TypeError("Invalid UUID");return parseInt(n.substr(14,1),16)}const QP=Object.freeze(Object.defineProperty({__proto__:null,NIL:YP,parse:Cv,stringify:tu,v1:MP,v3:$P,v4:GP,v5:jP,validate:eu,version:JP},Symbol.toStringTag,{value:"Module"})),XP=wv(QP),ZP={},eO=Object.freeze(Object.defineProperty({__proto__:null,default:ZP},Symbol.toStringTag,{value:"Module"})),ts=wv(eO);var Q_;function tO(){if(Q_)return $i;Q_=1;var n=$i&&$i.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty($i,"__esModule",{value:!0});var e=XP,t=n(ts),i=60*30,o=function(a,u,f){var h=parseInt(String(new Date().getTime()/1e3),10)+i,g={token:a||"",expire:u||0,signature:""};if(!f||!f.privateKey)return g;a=a||(0,e.v4)(),u=u||h;var E=t.default.createHmac("sha1",f.privateKey).update(a+u).digest("hex");return g.token=a,g.expire=u,g.signature=E,g};return $i.default={getAuthenticationParameters:o},$i}var lr={},th,X_;function nO(){return X_||(X_=1,th=typeof self=="object"?self.FormData:window.FormData),th}var Z_;function rO(){if(Z_)return lr;Z_=1;var n=lr&&lr.__values||function(h){var g=typeof Symbol=="function"&&Symbol.iterator,E=g&&h[g],T=0;if(E)return E.call(h);if(h&&typeof h.length=="number")return{next:function(){return h&&T>=h.length&&(h=void 0),{value:h&&h[T++],done:!h}}};throw new TypeError(g?"Object is not iterable.":"Symbol.iterator is not defined.")},e=lr&&lr.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(lr,"__esModule",{value:!0});var t=e(Bo()),i=e(oi()),o=e(Wo()),a=e(Zl()),u=e(nO());function f(h,g,E){var T,b;if(!t.default.isObject(h)){(0,o.default)(!0,i.default.MISSING_UPLOAD_DATA,E);return}if(!h.file){(0,o.default)(!0,i.default.MISSING_UPLOAD_FILE_PARAMETER,E);return}if(!h.fileName){(0,o.default)(!0,i.default.MISSING_UPLOAD_FILENAME_PARAMETER,E);return}if(h.transformation){if(!(Object.keys(h.transformation).includes("pre")||Object.keys(h.transformation).includes("post"))){(0,o.default)(!0,i.default.INVALID_TRANSFORMATION,E);return}if(Object.keys(h.transformation).includes("pre")&&!h.transformation.pre){(0,o.default)(!0,i.default.INVALID_PRE_TRANSFORMATION,E);return}if(Object.keys(h.transformation).includes("post"))if(Array.isArray(h.transformation.post))try{for(var O=n(h.transformation.post),F=O.next();!F.done;F=O.next()){var W=F.value;if(W.type==="abs"&&!(W.protocol||W.value)){(0,o.default)(!0,i.default.INVALID_POST_TRANSFORMATION,E);return}else if(W.type==="transformation"&&!W.value){(0,o.default)(!0,i.default.INVALID_POST_TRANSFORMATION,E);return}}}catch(te){T={error:te}}finally{try{F&&!F.done&&(b=O.return)&&b.call(O)}finally{if(T)throw T.error}}else{(0,o.default)(!0,i.default.INVALID_POST_TRANSFORMATION,E);return}}var D=new u.default,M;for(M in h)M&&(M=="file"&&typeof h.file!="string"?D.append("file",h.file,String(h.fileName)):M=="tags"&&Array.isArray(h.tags)?D.append("tags",h.tags.join(",")):M=="responseFields"&&Array.isArray(h.responseFields)?D.append("responseFields",h.responseFields.join(",")):M=="extensions"&&Array.isArray(h.extensions)?D.append("extensions",JSON.stringify(h.extensions)):M==="customMetadata"&&typeof h.customMetadata=="object"&&!Array.isArray(h.customMetadata)&&h.customMetadata!==null?D.append("customMetadata",JSON.stringify(h.customMetadata)):M==="transformation"&&typeof h.transformation=="object"&&h.transformation!==null?D.append(M,JSON.stringify(h.transformation)):M==="checks"&&h.checks?D.append(M,h.checks):D.append(M,String(h[M])));var q={url:g.uploadEndpoint||"https://upload.imagekit.io/api/v1/files/upload",method:"POST",formData:D};(0,a.default)(q,g,E)}return lr.default=f,lr}var xn={},eg;function iO(){if(eg)return xn;eg=1;var n=xn&&xn.__read||function(E,T){var b=typeof Symbol=="function"&&E[Symbol.iterator];if(!b)return E;var O=b.call(E),F,W=[],D;try{for(;(T===void 0||T-- >0)&&!(F=O.next()).done;)W.push(F.value)}catch(M){D={error:M}}finally{try{F&&!F.done&&(b=O.return)&&b.call(O)}finally{if(D)throw D.error}}return W},e=xn&&xn.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(xn,"__esModule",{value:!0}),xn.verify=void 0;var t=ts,i=Bo(),o=e(oi()),a;(function(E){E.Timestamp="t",E.V1="v1"})(a||(a={}));var u="sha256",f=function(E,T,b){var O="".concat(E.getTime(),".").concat(T);return(0,t.createHmac)(u,b).update(O).digest("hex")},h=function(E){var T,b,O=E.split(","),F=O.map(function(q){return q.split("=")}),W=(T=F.find(function(q){var te=n(q,1),ie=te[0];return ie===a.Timestamp}))===null||T===void 0?void 0:T[1];if(W===void 0)throw new Error(o.default.VERIFY_WEBHOOK_EVENT_TIMESTAMP_MISSING.message);var D=parseInt(W,10);if((0,i.isNaN)(D)||D<0)throw new Error(o.default.VERIFY_WEBHOOK_EVENT_TIMESTAMP_INVALID.message);var M=(b=F.find(function(q){var te=n(q,1),ie=te[0];return ie===a.V1}))===null||b===void 0?void 0:b[1];if(M===void 0)throw new Error(o.default.VERIFY_WEBHOOK_EVENT_SIGNATURE_MISSING.message);return{timestamp:D,v1:M}},g=function(E,T,b){var O=h(T),F=O.timestamp,W=O.v1,D=typeof E=="string"?E:Buffer.from(E).toString("utf8"),M=f(new Date(F),D,b);if(W!==M)throw new Error(o.default.VERIFY_WEBHOOK_EVENT_SIGNATURE_INCORRECT.message);return{timestamp:F,event:JSON.parse(D)}};return xn.verify=g,xn}var Gi={},co={},zi={},tl={},tg;function sO(){if(tg)return tl;tg=1,Object.defineProperty(tl,"__esModule",{value:!0});var n={width:"w",height:"h",aspectRatio:"ar",quality:"q",crop:"c",cropMode:"cm",focus:"fo",x:"x",y:"y",format:"f",radius:"r",background:"bg",border:"b",rotation:"rt",rotate:"rt",blur:"bl",named:"n",progressive:"pr",lossless:"lo",trim:"t",metadata:"md",colorProfile:"cp",defaultImage:"di",dpr:"dpr",effectSharpen:"e-sharpen",effectUSM:"e-usm",effectContrast:"e-contrast",effectGray:"e-grayscale",effectShadow:"e-shadow",effectGradient:"e-gradient",original:"orig"};return tl.default=n,tl}var ng;function Rv(){if(ng)return zi;ng=1;var n=zi&&zi.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(zi,"__esModule",{value:!0});var e=n(sO()),t="path",i="query",o=":",a=",",u="-",f=function(){return t},h=function(O){return O.transformationPosition===i},g=function(O){return O&&(e.default[O]||e.default[O.toLowerCase()])||""},E=function(){return o},T=function(){return a},b=function(){return u};return zi.default={getDefault:f,addAsQueryParameter:h,getTransformKey:g,getChainTransformDelimiter:E,getTransformDelimiter:T,getTransformKeyValueDelimiter:b},zi}var nl={},rg;function oO(){if(rg)return nl;rg=1,Object.defineProperty(nl,"__esModule",{value:!0});var n=function(o){return typeof o=="string"&&o[0]!=="/"&&(o="/"+o),o},e=function(o){return typeof o=="string"&&o[0]==="/"&&(o=o.substring(1)),o},t=function(o){return typeof o=="string"&&o[o.length-1]==="/"&&(o=o.substring(0,o.length-1)),o},i=function(o){return typeof o=="string"&&o[o.length-1]!=="/"&&(o=o+"/"),o};return nl.default={addLeadingSlash:n,removeLeadingSlash:e,removeTrailingSlash:t,addTrailingSlash:i},nl}var ig;function aO(){return ig||(ig=1,function(n){var e=co&&co.__importDefault||function(q){return q&&q.__esModule?q:{default:q}};Object.defineProperty(n,"__esModule",{value:!0}),n.getSignature=n.encodeStringIfRequired=void 0;var t=ts,i=e(ts),o=e(ts),a=e(Rv()),u=e(oO()),f="tr",h="ik-s",g="ik-t",E="9999999999",T=function(q){return q.split("").some(function(te){return te.charCodeAt(0)>127})},b=function(q){return q.includes("?")?"".concat(encodeURI(q.split("?")[0]),"?").concat(q.split("?")[1]):encodeURI(q)},O=function(q){return T(q)?b(q):q};n.encodeStringIfRequired=O;var F=function(q){var te=!1,ie;if(q.path)ie=new t.URL(q.urlEndpoint);else if(q.src)te=!0,ie=new t.URL(q.src);else return"";var ge=new t.URLSearchParams(ie.search||"");for(var $e in q.queryParameters)ge.set($e,q.queryParameters[$e]);var Oe=W(q.transformation);Oe?a.default.addAsQueryParameter(q)||te?(ge.set(f,Oe),ie.pathname="".concat(ie.pathname).concat(q.path||"")):ie.pathname=i.default.posix.join(ie.pathname,[f,Oe].join(a.default.getChainTransformDelimiter()),q.path||""):ie.pathname="".concat(ie.pathname).concat(q.path||""),ie.host=u.default.removeTrailingSlash(ie.host),ie.pathname=u.default.addLeadingSlash(ie.pathname),ie.search=ge.toString();var Re;if(q.signed===!0){q.expireSeconds?Re=D(q.expireSeconds):Re=E;var nt=ie.href,_t=M({privateKey:q.privateKey,url:nt,urlEndpoint:q.urlEndpoint,expiryTimestamp:Re});Re&&Re!=E&&ge.set(g,Re),ge.set(h,_t),ie.search=ge.toString()}return ie.href};function W(q){var te=q;if(!Array.isArray(te))return"";for(var ie=[],ge=0,$e=te.length;ge<$e;ge++){var Oe=[];for(var Re in te[ge])if(!(te[ge][Re]===void 0||te[ge][Re]===null)){var nt=a.default.getTransformKey(Re);if(nt||(nt=Re),te[ge][Re]==="-")Oe.push(nt);else if(Re==="raw")Oe.push(te[ge][Re]);else{var _t=String(te[ge][Re]);nt==="di"&&(_t=u.default.removeTrailingSlash(u.default.removeLeadingSlash(_t)),_t&&(_t=_t.replace(/\//g,"@@"))),Oe.push([nt,_t].join(a.default.getTransformKeyValueDelimiter()))}}ie.push(Oe.join(a.default.getTransformDelimiter()))}return ie.join(a.default.getChainTransformDelimiter())}function D(q){if(!q)return E;var te=parseInt(String(q),10);if(!te)return E;var ie=parseInt(String(new Date().getTime()/1e3),10);return String(ie+te)}function M(q){if(!q.privateKey||!q.url||!q.urlEndpoint)return"";var te=q.url.replace(u.default.addTrailingSlash(q.urlEndpoint),"")+q.expiryTimestamp;return te=(0,n.encodeStringIfRequired)(te),o.default.createHmac("sha1",q.privateKey).update(te).digest("hex")}n.getSignature=M,n.default={buildURL:F,getSignature:M}}(co)),co}var sg;function lO(){if(sg)return Gi;sg=1;var n=Gi&&Gi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Gi,"__esModule",{value:!0});var e=n(Bo()),t=n(aO());function i(o,a){var u=e.default.extend({},a,o);return t.default.buildURL(u)}return Gi.default=i,Gi}var Ki={},nh,og;function uO(){if(og)return nh;og=1;var n=ts;nh=e;function e(a,u){return a=i(a),u=i(u),n.equal(a.length,u.length,"Argument must have equal lengths."),o(a,u)}var t={0:"0000",1:"0001",2:"0010",3:"0011",4:"0100",5:"0101",6:"0110",7:"0111",8:"1000",9:"1001",a:"1010",b:"1011",c:"1100",d:"1101",e:"1110",f:"1111",A:"1010",B:"1011",C:"1100",D:"1101",E:"1110",F:"1111"};function i(a){Buffer.isBuffer(a)&&(a=a.toString("hex")),a=a.replace(/^0x/,""),n(/^[0-9a-fA-F]+$/.test(a));for(var u="",f=0;f<a.length;f++)u+=t[a[f]];return u}function o(a,u){a=i(a),u=i(u);for(var f=0,h=0;h<a.length;h++)a[h]!==u[h]&&f++;return f}return nh}var ag;function cO(){if(ag)return Ki;ag=1;var n=Ki&&Ki.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(Ki,"__esModule",{value:!0});var e=n(uO()),t=n(oi()),i=new RegExp(/^[0-9a-fA-F]+$/,"i"),o=function(u){return new Error("".concat(u.message,": ").concat(u.help))},a=function(u,f){if(!u||!f)return o(t.default.MISSING_PHASH_VALUE);if(!i.test(u)||!i.test(f))return o(t.default.INVALID_PHASH_VALUE);var h=u.toString(),g=f.toString();if(h.length!==g.length)return o(t.default.UNEQUAL_STRING_LENGTH);var E=(0,e.default)(h,g);return E};return Ki.default={pHashDistance:a},Ki}var Fn,lg;function hO(){if(lg)return Fn;lg=1;var n=Fn&&Fn.__read||function(W,D){var M=typeof Symbol=="function"&&W[Symbol.iterator];if(!M)return W;var q=M.call(W),te,ie=[],ge;try{for(;(D===void 0||D-- >0)&&!(te=q.next()).done;)ie.push(te.value)}catch($e){ge={error:$e}}finally{try{te&&!te.done&&(M=q.return)&&M.call(q)}finally{if(ge)throw ge.error}}return ie},e=Fn&&Fn.__spreadArray||function(W,D,M){if(M||arguments.length===2)for(var q=0,te=D.length,ie;q<te;q++)(ie||!(q in D))&&(ie||(ie=Array.prototype.slice.call(D,0,q)),ie[q]=D[q]);return W.concat(ie||Array.prototype.slice.call(D))},t=Fn&&Fn.__importDefault||function(W){return W&&W.__esModule?W:{default:W}},i=t(Bo()),o=t(oi()),a=t(DP()),u=t(tO()),f=t(rO()),h=iO(),g=t(Tv()),E=t(lO()),T=t(cO()),b=t(Rv()),O=function(W,D){return function(){for(var M=[],q=0;q<arguments.length;q++)M[q]=arguments[q];if(M.length===D.length&&typeof M[M.length-1]<"u"){if(typeof M[M.length-1]!="function")throw new Error("Callback must be a function.");D.call.apply(D,e([W],n(M),!1))}else return new Promise(function(te,ie){var ge=function($e){for(var Oe=[],Re=1;Re<arguments.length;Re++)Oe[Re-1]=arguments[Re];if($e)return ie($e);te(Oe.length>1?Oe:Oe[0])};M.pop(),M.push(ge),D.call.apply(D,e([W],n(M),!1))})}},F=function(){function W(D){if(D===void 0&&(D={}),this.options={uploadEndpoint:"https://upload.imagekit.io/api/v1/files/upload",publicKey:"",privateKey:"",urlEndpoint:"",transformationPosition:b.default.getDefault()},this.verifyWebhookEvent=h.verify,this.options=i.default.extend(this.options,D),!this.options.publicKey)throw new Error(o.default.MANDATORY_PUBLIC_KEY_MISSING.message);if(!this.options.privateKey)throw new Error(o.default.MANDATORY_PRIVATE_KEY_MISSING.message);if(!this.options.urlEndpoint)throw new Error(o.default.MANDATORY_URL_ENDPOINT_KEY_MISSING.message)}return W.prototype.url=function(D){return(0,E.default)(D,this.options)},W.prototype.upload=function(D,M){return O(this,f.default)(D,this.options,M)},W.prototype.listFiles=function(D,M){return O(this,a.default.listFiles)(D,this.options,M)},W.prototype.getFileDetails=function(D,M){return O(this,a.default.getFileDetails)(D,this.options,M)},W.prototype.getFileVersions=function(D,M){return O(this,a.default.getFileVersions)(D,this.options,M)},W.prototype.getFileVersionDetails=function(D,M){return O(this,a.default.getFileVersionDetails)(D,this.options,M)},W.prototype.getFileMetadata=function(D,M){return O(this,a.default.getFileMetadata)(D,this.options,M)},W.prototype.updateFileDetails=function(D,M,q){return O(this,a.default.updateFileDetails)(D,M,this.options,q)},W.prototype.bulkAddTags=function(D,M,q){return O(this,a.default.bulkAddTags)(D,M,this.options,q)},W.prototype.bulkRemoveTags=function(D,M,q){return O(this,a.default.bulkRemoveTags)(D,M,this.options,q)},W.prototype.bulkRemoveAITags=function(D,M,q){return O(this,a.default.bulkRemoveAITags)(D,M,this.options,q)},W.prototype.deleteFile=function(D,M){return O(this,a.default.deleteFile)(D,this.options,M)},W.prototype.deleteFileVersion=function(D,M){return O(this,a.default.deleteFileVersion)(D,this.options,M)},W.prototype.restoreFileVersion=function(D,M){return O(this,a.default.restoreFileVersion)(D,this.options,M)},W.prototype.purgeCache=function(D,M){return O(this,a.default.purgeCache)(D,this.options,M)},W.prototype.getPurgeCacheStatus=function(D,M){return O(this,a.default.getPurgeCacheStatus)(D,this.options,M)},W.prototype.bulkDeleteFiles=function(D,M){return O(this,a.default.bulkDeleteFiles)(D,this.options,M)},W.prototype.copyFile=function(D,M){return O(this,a.default.copyFile)(D,this.options,M)},W.prototype.moveFile=function(D,M){return O(this,a.default.moveFile)(D,this.options,M)},W.prototype.renameFile=function(D,M){return O(this,a.default.renameFile)(D,this.options,M)},W.prototype.createFolder=function(D,M){return O(this,a.default.createFolder)(D,this.options,M)},W.prototype.deleteFolder=function(D,M){return O(this,a.default.deleteFolder)(D,this.options,M)},W.prototype.copyFolder=function(D,M){return O(this,a.default.copyFolder)(D,this.options,M)},W.prototype.moveFolder=function(D,M){return O(this,a.default.moveFolder)(D,this.options,M)},W.prototype.getAuthenticationParameters=function(D,M){return u.default.getAuthenticationParameters(D,M,this.options)},W.prototype.getBulkJobStatus=function(D,M){return O(this,a.default.getBulkJobStatus)(D,this.options,M)},W.prototype.createCustomMetadataField=function(D,M){return O(this,g.default.create)(D,this.options,M)},W.prototype.getCustomMetadataFields=function(D,M){return O(this,g.default.list)(D,this.options,M)},W.prototype.updateCustomMetadataField=function(D,M,q){return O(this,g.default.update)(D,M,this.options,q)},W.prototype.deleteCustomMetadataField=function(D,M){return O(this,g.default.deleteField)(D,this.options,M)},W.prototype.pHashDistance=function(D,M){return T.default.pHashDistance(D,M)},W}();return Fn=F,Fn}var fO=hO();const dO=AP(fO),Nv=Cg(bP),xt=WA(Nv),Tr=XN(Nv),pO=new Un,_O=new dO({publicKey:"public_nlaLJjT4YJ94UMgjgp62jAPmkVo",urlEndpoint:"https://ik.imagekit.io/natka/"}),gO=document.getElementById("test"),Ph=document.getElementById("login"),mO=document.getElementById("messageButton"),Oh=document.getElementById("messageInput"),Pv=document.getElementById("titleInput"),ug=document.getElementById("profile"),Ov=document.getElementById("uploadImage"),rl=Ov.querySelector('button[type="submit"]'),Ho=document.querySelector('#uploadImage input[name="file"]'),ul=document.getElementById("preview"),vO=document.getElementById("showMessages"),yO=document.getElementById("showImages"),Jr=document.getElementById("displayData"),cg=document.getElementById("editImageInput");let Eo=null,hg=null;function Dv(){Eo&&($N(Eo),Eo=null)}async function IO(){try{await Cb(xt,Gh)}catch(n){console.error("❌ Failed to set persistence:",n)}}async function EO(){let n=xt.currentUser;Sr(n);const e=await n.getIdToken(),t=await fetch("https://backend-five-alpha-26.vercel.app/api/getSignature",{method:"GET",headers:{Authorization:`Bearer ${e}`}}),i=await t.json();if(!t.ok)throw new Error(i.error||"Failed to get ImageKit auth");return i.data}function wO(n){n?(console.log("✅ User signed in:",n.displayName),ug.src=n.photoURL||"",Ph.textContent="Log out"):(console.log("❌ No user signed in."),ug.src="",Ph.textContent="Login with Google")}function Sr(n){n?n.uid!="wgDE9laS5FaN6FCwDGK467xlkXB2"&&alert("Premission denied"):alert("Not logged in")}function TO(n){Jr.innerHTML="Loading messages...",Dv();const e=wr(Tr,`users/${n.uid}/messages`);Eo=e,vv(e,t=>{const i=t.val();if(!i){Jr.innerHTML="No messages found.";return}let o=Object.entries(i).map(([a,{message:u,timestamp:f}])=>`
      <div>
        <button class="delete-message-button" data-key="${a}">🗑️</button>
        <br>
        <span><strong>Message:</strong> ${u}</span>
        <button class="edit-message-button" data-key="${a}" data-message="${u}">🖊️</button>
        <br>
        <span><strong>Time:</strong> ${new Date(f).toLocaleString()}</span>
        <hr>
      </div>
    `).reverse().join("");Jr.innerHTML=o})}function SO(n){Jr.innerHTML="Loading images...",Dv();const e=wr(Tr,`users/${n.uid}/images`);Eo=e,vv(e,t=>{const i=t.val();if(!i){Jr.innerHTML="No images found.";return}let o=Object.entries(i).map(([a,{image:u,title:f,timestamp:h}])=>`
      <div style="margin-bottom: 20px;">
        <button class="delete-image-button" data-key="${a}">🗑️</button>
        <br>
        <span><strong>Title:</strong> ${f}<span>
        <button class="edit-title-button" data-key="${a}" data-title="${f}">🖊️</button>
        <br>
        <span><strong>Time:</strong> ${new Date(h).toLocaleString()}</span>
        <br>
        <span><strong>Image ↓</strong></span>
        <button class="edit-image-button" data-key="${a}" data-image="${u}">🖊️</button>
        <br>
        <img src="${u}" alt="${f}" style="max-width: 300px; display: block; margin-top: 10px;">
        <hr>
        </div>
    `).reverse().join("");Jr.innerHTML=o})}function CO(n){const e=xt.currentUser;Sr(e);const t=wr(Tr,`users/${e.uid}/messages`);return pv(t,{message:n,timestamp:yv()})}function bO(n,e){const t=xt.currentUser;if(!t)return Promise.reject("Not logged in");const i=wr(Tr,`users/${t.uid}/images`);return pv(i,{image:n,title:e,timestamp:yv()})}function AO(n){const e=xt.currentUser;Sr(e);const t=wr(Tr,`users/${e.uid}/messages/${n}`);return _v(t)}function RO(n){const e=xt.currentUser;Sr(e);const t=wr(Tr,`users/${e.uid}/images/${n}`);return _v(t)}function NO(n,e){const t=xt.currentUser;Sr(t);const i=wr(Tr,`users/${t.uid}/messages/${n}`);return mv(i,{"/message":e})}function PO(n,e){const t=xt.currentUser;Sr(t);const i=wr(Tr,`users/${t.uid}/images/${n}`);return mv(i,{"/title":e})}function rh(){Oh.value="",Ho.value="",ul.innerHTML="",Pv.value=""}function OO(n){if(!n.type.startsWith("image/")){ul.innerHTML="Please select a valid image.";return}const e=new FileReader;e.onload=t=>{ul.innerHTML="";const i=document.createElement("img");i.src=t.target.result,i.style.maxWidth="300px",i.style.maxHeight="300px",i.style.marginTop="10px",ul.appendChild(i),Ho.dataset.base64=t.target.result},e.readAsDataURL(n)}function DO(){xt.currentUser?Nb(xt).catch(console.error):Yb(xt,pO).catch(console.error)}function kO(){const n=Oh.value.trim();if(!n)return alert("Please enter a message.");CO(n).then(()=>Oh.value="")}function LO(){const n=Ho.files[0];n&&OO(n)}async function MO(){const n=Ho.files[0],e=Pv.value.trim();if(!n||!e)return alert("Please select a file and provide a title.");try{const t=`${n.name}_${Date.now()}`,i=await EO(user),o=await _O.upload({file:n,fileName:t,token:i.token,expire:i.expire,signature:i.signature});console.log("✅ Got URL:",o),await bO(o,e),console.log("✅ Metadata written")}catch(t){console.error("❌ Something went wrong: "+t.message)}}function xO(){const n=xt.currentUser;Sr(n),n&&TO(n)}function FO(){const n=xt.currentUser;Sr(n),n&&SO(n)}async function UO(){Ph.addEventListener("click",DO),mO.addEventListener("click",kO),Ho.addEventListener("change",LO),vO.addEventListener("click",xO),yO.addEventListener("click",FO),Jr.addEventListener("click",n=>{const e=n.target,t=e.dataset.key,i=e.dataset.message,o=e.dataset.title;if(e.dataset.image,e.matches(".delete-message-button"))confirm("Confirm delete?")&&AO(t).then(e.parentElement.remove());else if(e.matches(".delete-image-button"))confirm("Confirm delete?")&&RO(t).then(e.parentElement.remove());else if(e.matches(".edit-message-button")){const a=prompt("Enter new message:",i);a!=null&&a!=""&&NO(t,a).then(console.log("message Eddited"))}else if(e.matches(".edit-title-button")){const a=prompt("Enter new title:",o);a!=null&&a!=""&&PO(t,a).then(console.log("Title eddited"))}else e.matches(".edit-image-button")&&(hg=t,cg.click())}),cg.addEventListener("change",async n=>{n.target.files[0]}),Ov.addEventListener("submit",n=>{n.preventDefault(),rl.disabled=!0,rl.textContent="Uploading...",MO().then(()=>{rh(),rl.disabled=!1,rl.textContent="Upload"})}),gO.addEventListener("click",()=>{rh(),console.log("Test button clicked")}),window.addEventListener("DOMContentLoaded",rh)}async function BO(){await IO(),Rb(xt,wO),UO()}BO();
