import{r as E,R as ii}from"./chunks/chunk.5a7dbf18.js";/* empty css                     */import"./chunks/chunk.725317a4.js";/**
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
 *//**
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
 */const Uc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ad=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ad(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new Rd;const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const w=u<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xd=function(t){const e=Uc(t);return Fc.encodeByteArray(e,!0)},ks=function(t){return xd(t).replace(/\./g,"")},jc=function(t){try{return Fc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nd=()=>Dd().__FIREBASE_DEFAULTS__,Od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ld=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jc(t[1]);return e&&JSON.parse(e)},$i=()=>{try{return Nd()||Od()||Ld()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vc=t=>{var e,n;return(n=(e=$i())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$c=t=>{const e=Vc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Pd=()=>{var t;return(t=$i())===null||t===void 0?void 0:t.config},Bc=t=>{var e;return(e=$i())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ks(JSON.stringify(n)),ks(JSON.stringify(o)),a].join(".")}/**
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function Fd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vd(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function Bd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const qd="FirebaseError";class Oe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qd,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?zd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Oe(r,a,s)}}function zd(t,e){return t.replace(Hd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hd=/\{\$([^}]+)}/g;function Gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function As(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ia(i)&&ia(o)){if(!As(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ia(t){return t!==null&&typeof t=="object"}/**
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
 */function Wt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Kd(t,e){const n=new Wd(t,e);return n.subscribe.bind(n)}class Wd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Qd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Mr),r.error===void 0&&(r.error=Mr),r.complete===void 0&&(r.complete=Mr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mr(){}/**
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
 */function $(t){return t&&t._delegate?t._delegate:t}class Ze{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lt="[DEFAULT]";/**
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
 */class Yd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Md;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xd(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(t){return t===lt?void 0:t}function Xd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const ef={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},tf=L.INFO,nf={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},sf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=nf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bi{constructor(e){this.name=e,this._logLevel=tf,this._logHandler=sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ef[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const rf=(t,e)=>e.some(n=>t instanceof n);let oa,aa;function of(){return oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function af(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zc=new WeakMap,oi=new WeakMap,Hc=new WeakMap,Ur=new WeakMap,qi=new WeakMap;function cf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ye(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zc.set(n,t)}).catch(()=>{}),qi.set(e,t),e}function uf(t){if(oi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oi.set(t,e)}let ai={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lf(t){ai=t(ai)}function hf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fr(this),e,...n);return Hc.set(s,e.sort?e.sort():[e]),Ye(s)}:af().includes(t)?function(...e){return t.apply(Fr(this),e),Ye(zc.get(this))}:function(...e){return Ye(t.apply(Fr(this),e))}}function df(t){return typeof t=="function"?hf(t):(t instanceof IDBTransaction&&uf(t),rf(t,of())?new Proxy(t,ai):t)}function Ye(t){if(t instanceof IDBRequest)return cf(t);if(Ur.has(t))return Ur.get(t);const e=df(t);return e!==t&&(Ur.set(t,e),qi.set(e,t)),e}const Fr=t=>qi.get(t);function ff(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ye(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ye(o.result),c.oldVersion,c.newVersion,Ye(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const pf=["get","getKey","getAll","getAllKeys","count"],mf=["put","add","delete","clear"],jr=new Map;function ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=mf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return jr.set(e,i),i}lf(t=>({...t,get:(e,n,s)=>ca(e,n)||t.get(e,n,s),has:(e,n)=>!!ca(e,n)||t.has(e,n)}));/**
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
 */class gf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yf(t){const e=t.getComponent();return e?.type==="VERSION"}const ci="@firebase/app",ua="0.9.7";/**
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
 */const Et=new Bi("@firebase/app"),vf="@firebase/app-compat",wf="@firebase/analytics-compat",Ef="@firebase/analytics",_f="@firebase/app-check-compat",If="@firebase/app-check",Tf="@firebase/auth",bf="@firebase/auth-compat",Sf="@firebase/database",Cf="@firebase/database-compat",kf="@firebase/functions",Af="@firebase/functions-compat",Rf="@firebase/installations",xf="@firebase/installations-compat",Df="@firebase/messaging",Nf="@firebase/messaging-compat",Of="@firebase/performance",Lf="@firebase/performance-compat",Pf="@firebase/remote-config",Mf="@firebase/remote-config-compat",Uf="@firebase/storage",Ff="@firebase/storage-compat",jf="@firebase/firestore",Vf="@firebase/firestore-compat",$f="firebase",Bf="9.19.1";/**
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
 */const ui="[DEFAULT]",qf={[ci]:"fire-core",[vf]:"fire-core-compat",[Ef]:"fire-analytics",[wf]:"fire-analytics-compat",[If]:"fire-app-check",[_f]:"fire-app-check-compat",[Tf]:"fire-auth",[bf]:"fire-auth-compat",[Sf]:"fire-rtdb",[Cf]:"fire-rtdb-compat",[kf]:"fire-fn",[Af]:"fire-fn-compat",[Rf]:"fire-iid",[xf]:"fire-iid-compat",[Df]:"fire-fcm",[Nf]:"fire-fcm-compat",[Of]:"fire-perf",[Lf]:"fire-perf-compat",[Pf]:"fire-rc",[Mf]:"fire-rc-compat",[Uf]:"fire-gcs",[Ff]:"fire-gcs-compat",[jf]:"fire-fst",[Vf]:"fire-fst-compat","fire-js":"fire-js",[$f]:"fire-js-all"};/**
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
 */const Rs=new Map,li=new Map;function zf(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(li.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,t);for(const n of Rs.values())zf(n,t);return!0}function Ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Je=new Fn("app","Firebase",Hf);/**
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
 */class Gf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
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
 */const Qt=Bf;function Gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Je.create("bad-app-name",{appName:String(r)});if(n||(n=Pd()),!n)throw Je.create("no-options");const i=Rs.get(r);if(i){if(As(n,i.options)&&As(s,i.config))return i;throw Je.create("duplicate-app",{appName:r})}const o=new Zd(r);for(const c of li.values())o.addComponent(c);const a=new Gf(n,s,o);return Rs.set(r,a),a}function zi(t=ui){const e=Rs.get(t);if(!e&&t===ui)return Gc();if(!e)throw Je.create("no-app",{appName:t});return e}function Ae(t,e,n){var s;let r=(s=qf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(a.join(" "));return}_t(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Kf="firebase-heartbeat-database",Wf=1,En="firebase-heartbeat-store";let Vr=null;function Kc(){return Vr||(Vr=ff(Kf,Wf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(En)}}}).catch(t=>{throw Je.create("idb-open",{originalErrorMessage:t.message})})),Vr}async function Qf(t){try{return(await Kc()).transaction(En).objectStore(En).get(Wc(t))}catch(e){if(e instanceof Oe)Et.warn(e.message);else{const n=Je.create("idb-get",{originalErrorMessage:e?.message});Et.warn(n.message)}}}async function la(t,e){try{const s=(await Kc()).transaction(En,"readwrite");return await s.objectStore(En).put(e,Wc(t)),s.done}catch(n){if(n instanceof Oe)Et.warn(n.message);else{const s=Je.create("idb-set",{originalErrorMessage:n?.message});Et.warn(s.message)}}}function Wc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yf=1024,Jf=30*24*60*60*1e3;class Xf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ep(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ha();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Jf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ha(),{heartbeatsToSend:n,unsentEntries:s}=Zf(this._heartbeatsCache.heartbeats),r=ks(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ha(){return new Date().toISOString().substring(0,10)}function Zf(t,e=Yf){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),da(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),da(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ep{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?Bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function da(t){return ks(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tp(t){_t(new Ze("platform-logger",e=>new gf(e),"PRIVATE")),_t(new Ze("heartbeat",e=>new Xf(e),"PRIVATE")),Ae(ci,ua,t),Ae(ci,ua,"esm2017"),Ae("fire-js","")}tp("");function Hi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Qc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const np=Qc,Yc=new Fn("auth","Firebase",Qc());/**
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
 */const fa=new Bi("@firebase/auth");function ws(t,...e){fa.logLevel<=L.ERROR&&fa.error(`Auth (${Qt}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw Gi(t,...e)}function _e(t,...e){return Gi(t,...e)}function Jc(t,e,n){const s=Object.assign(Object.assign({},np()),{[e]:n});return new Fn("auth","Firebase",s).create(e,{appName:t.name})}function Xc(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&xe(t,"argument-error"),Jc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yc.create(t,...e)}function I(t,e,...n){if(!t)throw Gi(e,...n)}function Ue(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ws(e),new Error(e)}function $e(t,e){t||Ue(e)}/**
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
 */const pa=new Map;function Fe(t){$e(t instanceof Function,"Expected a class definition");let e=pa.get(t);return e?($e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pa.set(t,e),e)}/**
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
 */function sp(t,e){const n=Ys(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(As(i,e??{}))return r;xe(r,"already-initialized")}return n.initialize({options:e})}function rp(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Fe);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}/**
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
 */function hi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zc(){return ma()==="http:"||ma()==="https:"}function ma(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ip(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zc()||Fd()||"connection"in navigator)?navigator.onLine:!0}function op(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,$e(n>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||jd()}get(){return ip()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ki(t,e){$e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ap={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const cp=new jn(3e4,6e4);function kt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function st(t,e,n,s,r={}){return tu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Wt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),eu.fetch()(nu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ap),e);try{const r=new up(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw cn(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jc(t,l,u);xe(t,l)}}catch(r){if(r instanceof Oe)throw r;xe(t,"network-request-failed",{message:String(r)})}}async function Js(t,e,n,s,r={}){const i=await st(t,e,n,s,r);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ki(t.config,r):`${t.config.apiScheme}://${r}`}class up{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_e(this.auth,"network-request-failed")),cp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=_e(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function lp(t,e){return st(t,"POST","/v1/accounts:delete",e)}async function hp(t,e){return st(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dp(t,e=!1){const n=$(t),s=await n.getIdToken(e),r=Wi(s);I(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:fn($r(r.auth_time)),issuedAtTime:fn($r(r.iat)),expirationTime:fn($r(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function $r(t){return Number(t)*1e3}function Wi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ws("JWT malformed, contained fewer than 3 sections"),null;try{const r=jc(n);return r?JSON.parse(r):(ws("Failed to decode base64 JWT payload"),null)}catch(r){return ws("Caught error parsing JWT payload as JSON",r?.toString()),null}}function fp(t){const e=Wi(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Oe&&pp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function pp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fn(this.lastLoginAt),this.creationTime=fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function In(t){var e;const n=t.auth,s=await t.getIdToken(),r=await _n(t,hp(n,{idToken:s}));I(r?.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vp(i.providerUserInfo):[],a=yp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!a?.length,l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new su(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function gp(t){const e=$(t);await In(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function vp(t){return t.map(e=>{var{providerId:n}=e,s=Hi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function wp(t,e){const n=await tu(t,{},async()=>{const s=Wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=nu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await wp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Tn;return s&&(I(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(I(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(I(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
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
 */function Ge(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Hi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dp(this,e)}reload(){return gp(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await In(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,lp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:U,emailVerified:P,isAnonymous:q,providerData:Te,stsTokenManager:ut}=n;I(U&&ut,e,"internal-error");const Le=Tn.fromJSON(this.name,ut);I(typeof U=="string",e,"internal-error"),Ge(h,e.name),Ge(d,e.name),I(typeof P=="boolean",e,"internal-error"),I(typeof q=="boolean",e,"internal-error"),Ge(p,e.name),Ge(w,e.name),Ge(v,e.name),Ge(g,e.name),Ge(S,e.name),Ge(k,e.name);const as=new mt({uid:U,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:q,photoURL:w,phoneNumber:p,tenantId:v,stsTokenManager:Le,createdAt:S,lastLoginAt:k});return Te&&Array.isArray(Te)&&(as.providerData=Te.map(Pr=>Object.assign({},Pr))),g&&(as._redirectEventId=g),as}static async _fromIdTokenResponse(e,n,s=!1){const r=new Tn;r.updateFromServerResponse(n);const i=new mt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await In(i),i}}/**
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
 */class ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ru.type="NONE";const ga=ru;/**
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
 */function Es(t,e,n){return`firebase:${t}:${e}:${n}`}class Pt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Es(this.userKey,r.apiKey,i),this.fullPersistenceKey=Es("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Pt(Fe(ga),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Fe(ga);const o=Es(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=mt._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Pt(i,e,s))}}/**
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
 */function ya(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(au(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uu(e))return"Blackberry";if(lu(e))return"Webos";if(Qi(e))return"Safari";if((e.includes("chrome/")||ou(e))&&!e.includes("edge/"))return"Chrome";if(cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function iu(t=he()){return/firefox\//i.test(t)}function Qi(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ou(t=he()){return/crios\//i.test(t)}function au(t=he()){return/iemobile/i.test(t)}function cu(t=he()){return/android/i.test(t)}function uu(t=he()){return/blackberry/i.test(t)}function lu(t=he()){return/webos/i.test(t)}function Xs(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ep(t=he()){var e;return Xs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _p(){return Vd()&&document.documentMode===10}function hu(t=he()){return Xs(t)||cu(t)||lu(t)||uu(t)||/windows phone/i.test(t)||au(t)}function Ip(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function du(t,e=[]){let n;switch(t){case"Browser":n=ya(he());break;case"Worker":n=`${ya(he())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qt}/${s}`}/**
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
 */class Tp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */class bp{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new va(this),this.idTokenSubscription=new va(this),this.beforeStateQueue=new Tp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fe(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Pt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await In(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fe(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[Fe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Yt(t){return $(t)}class va{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kd(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Sp(t,e,n){const s=Yt(t);I(s._canInitEmulator,s,"emulator-config-failed"),I(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!n?.disableWarnings,i=fu(e),{host:o,port:a}=Cp(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||kp()}function fu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cp(t){const e=fu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:wa(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:wa(o)}}}function wa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,n){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}/**
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
 */async function Mt(t,e){return Js(t,"POST","/v1/accounts:signInWithIdp",kt(t,e))}/**
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
 */const Ap="http://localhost";class It extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Hi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new It(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Mt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mt(e,n)}buildRequest(){const e={requestUri:Ap,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wt(n)}return e}}/**
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
 */async function Rp(t,e){return st(t,"POST","/v1/accounts:sendVerificationCode",kt(t,e))}async function xp(t,e){return Js(t,"POST","/v1/accounts:signInWithPhoneNumber",kt(t,e))}async function Dp(t,e){const n=await Js(t,"POST","/v1/accounts:signInWithPhoneNumber",kt(t,e));if(n.temporaryProof)throw cn(t,"account-exists-with-different-credential",n);return n}const Np={USER_NOT_FOUND:"user-not-found"};async function Op(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Js(t,"POST","/v1/accounts:signInWithPhoneNumber",kt(t,n),Np)}/**
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
 */class pn extends Yi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new pn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new pn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xp(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Dp(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Op(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!n&&!r&&!i?null:new pn({verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
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
 */class Zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends Zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ke extends Vn{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ke.PROVIDER_ID="facebook.com";/**
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
 */class Pe extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return It._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Pe.credential(n,s)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
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
 */class Me extends Vn{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
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
 */class We extends Vn{constructor(){super("twitter.com")}static credential(e,n){return It._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return We.credential(n,s)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await mt._fromIdTokenResponse(e,s,r),o=Ea(s);return new jt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ea(s);return new jt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ea(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xs extends Oe{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new xs(e,n,s,r)}}function pu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(t,i,e,s):i})}/**
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
 */function Lp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function mu(t,e,n=!1){const s=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",s)}async function gu(t,e,n){await In(e);const s=Lp(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";I(s.has(n)===t,e.auth,r)}/**
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
 */async function Pp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await _n(t,pu(s,r,e,t),n);I(i.idToken,s,"internal-error");const o=Wi(i.idToken);I(o,s,"internal-error");const{sub:a}=o;return I(t.uid===a,s,"user-mismatch"),jt._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&xe(s,"user-mismatch"),i}}/**
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
 */async function Mp(t,e,n=!1){const s="signIn",r=await pu(t,s,e),i=await jt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Up(t,e){const n=$(t);return await gu(!1,n,e.providerId),mu(n,e)}function Fp(t,e,n,s){return $(t).onIdTokenChanged(e,n,s)}function jp(t,e,n){return $(t).beforeAuthStateChanged(e,n)}function yu(t,e,n,s){return $(t).onAuthStateChanged(e,n,s)}function Vp(t){return $(t).signOut()}/**
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
 */function $p(t,e){return st(t,"POST","/v2/accounts/mfaEnrollment:start",kt(t,e))}const Ds="__sak";/**
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
 */class vu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Bp(){const t=he();return Qi(t)||Xs(t)}const qp=1e3,zp=10;class wu extends vu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bp()&&Ip(),this.fallbackToPolling=hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_p()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,zp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wu.type="LOCAL";const Hp=wu;/**
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
 */class Eu extends vu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eu.type="SESSION";const _u=Eu;/**
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
 */function Gp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new er(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Gp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
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
 */function Ji(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ji("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function K(){return window}function Wp(t){K().location.href=t}/**
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
 */function Xi(){return typeof K().WorkerGlobalScope<"u"&&typeof K().importScripts=="function"}async function Qp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yp(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jp(){return Xi()?self:null}/**
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
 */const Iu="firebaseLocalStorageDb",Xp=1,Ns="firebaseLocalStorage",Tu="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tr(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function Zp(){const t=indexedDB.deleteDatabase(Iu);return new $n(t).toPromise()}function di(){const t=indexedDB.open(Iu,Xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ns,{keyPath:Tu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ns)?e(s):(s.close(),await Zp(),e(await di()))})})}async function _a(t,e,n){const s=tr(t,!0).put({[Tu]:e,value:n});return new $n(s).toPromise()}async function em(t,e){const n=tr(t,!1).get(e),s=await new $n(n).toPromise();return s===void 0?null:s.value}function Ia(t,e){const n=tr(t,!0).delete(e);return new $n(n).toPromise()}const tm=800,nm=3;class bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await di(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(Jp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qp(),!this.activeServiceWorker)return;this.sender=new Kp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await di();return await _a(e,Ds,"1"),await Ia(e,Ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_a(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>em(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ia(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=tr(r,!1).getAll();return new $n(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bu.type="LOCAL";const sm=bu;/**
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
 */function rm(t,e){return st(t,"POST","/v2/accounts/mfaSignIn:start",kt(t,e))}/**
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
 */async function im(t){return(await st(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function om(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Su(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=_e("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",om().appendChild(s)})}function Cu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const am=500,cm=6e4,cs=1e12;class um{constructor(e){this.auth=e,this.counter=cs,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new lm(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||cs;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||cs;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||cs;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class lm{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;I(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=hm(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cm)},am))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function hm(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Br=Cu("rcb"),dm=new jn(3e4,6e4),fm="https://www.google.com/recaptcha/api.js?";class pm{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=K().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(mm(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(K().grecaptcha):new Promise((s,r)=>{const i=K().setTimeout(()=>{r(_e(e,"network-request-failed"))},dm.get());K()[Br]=()=>{K().clearTimeout(i),delete K()[Br];const a=K().grecaptcha;if(!a){r(_e(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,s(a)};const o=`${fm}?${Wt({onload:Br,render:"explicit",hl:n})}`;Su(o).catch(()=>{clearTimeout(i),r(_e(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=K().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mm(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class gm{async load(e){return new um(e)}clearedOneInstance(){}}/**
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
 */const ku="recaptcha",ym={theme:"light",type:"image"};class vm{constructor(e,n=Object.assign({},ym),s){this.parameters=n,this.type=ku,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Yt(s),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gm:new pm,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(r=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=K()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Zc()&&!Xi(),this.auth,"internal-error"),await wm(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await im(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function wm(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Em{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=pn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function _m(t,e,n){const s=$(t);await gu(!1,s,"phone");const r=await Im(s.auth,e,$(n));return new Em(r,i=>Up(s,i))}async function Im(t,e,n){var s;const r=await n.verify();try{I(typeof r=="string",t,"argument-error"),I(n.type===ku,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return I(o.type==="enroll",t,"internal-error"),(await $p(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{I(o.type==="signin",t,"internal-error");const a=((s=i.multiFactorHint)===null||s===void 0?void 0:s.uid)||i.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await rm(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Rp(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}/**
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
 */function Zi(t,e){return e?Fe(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eo extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Tm(t){return Mp(t.auth,new eo(t),t.bypassAuthState)}function bm(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Pp(n,new eo(t),t.bypassAuthState)}async function Sm(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),mu(n,new eo(t),t.bypassAuthState)}/**
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
 */class Au{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tm;case"linkViaPopup":case"linkViaRedirect":return Sm;case"reauthViaPopup":case"reauthViaRedirect":return bm;default:xe(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Cm=new jn(2e3,1e4);async function km(t,e,n){const s=Yt(t);Xc(t,e,Zs);const r=Zi(s,n);return new ht(s,"signInViaPopup",e,r).executeNotNull()}class ht extends Au{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_e(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cm.get())};e()}}ht.currentPopupAction=null;/**
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
 */const Am="pendingRedirect",_s=new Map;class Rm extends Au{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const s=await xm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xm(t,e){const n=xu(e),s=Ru(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function Dm(t,e){return Ru(t)._set(xu(e),"true")}function Nm(t,e){_s.set(t._key(),e)}function Ru(t){return Fe(t._redirectPersistence)}function xu(t){return Es(Am,t.config.apiKey,t.name)}/**
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
 */function Om(t,e,n){return Lm(t,e,n)}async function Lm(t,e,n){const s=Yt(t);Xc(t,e,Zs),await s._initializationPromise;const r=Zi(s,n);return await Dm(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Pm(t,e,n=!1){const s=Yt(t),r=Zi(s,e),o=await new Rm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Mm=10*60*1e3;class Um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Du(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(_e(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}}function Ta(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Du({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Fm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Du(t);default:return!1}}/**
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
 */async function jm(t,e={}){return st(t,"GET","/v1/projects",e)}/**
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
 */const Vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$m=/^https?/;async function Bm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jm(t);for(const n of e)try{if(qm(n))return}catch{}xe(t,"unauthorized-domain")}function qm(t){const e=hi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!$m.test(n))return!1;if(Vm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const zm=new jn(3e4,6e4);function ba(){const t=K().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hm(t){return new Promise((e,n)=>{var s,r,i;function o(){ba(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ba(),n(_e(t,"network-request-failed"))},timeout:zm.get()})}if(!((r=(s=K().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=K().gapi)===null||i===void 0)&&i.load)o();else{const a=Cu("iframefcb");return K()[a]=()=>{gapi.load?o():n(_e(t,"network-request-failed"))},Su(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Is=null,e})}let Is=null;function Gm(t){return Is=Is||Hm(t),Is}/**
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
 */const Km=new jn(5e3,15e3),Wm="__/auth/iframe",Qm="emulator/auth/iframe",Ym={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xm(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ki(e,Qm):`https://${t.config.authDomain}/${Wm}`,s={apiKey:e.apiKey,appName:t.name,v:Qt},r=Jm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Wt(s).slice(1)}`}async function Zm(t){const e=await Gm(t),n=K().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:Xm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ym,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=_e(t,"network-request-failed"),a=K().setTimeout(()=>{i(o)},Km.get());function c(){K().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tg=500,ng=600,sg="_blank",rg="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ig(t,e,n,s=tg,r=ng){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eg),{width:s.toString(),height:r.toString(),top:i,left:o}),u=he().toLowerCase();n&&(a=ou(u)?sg:n),iu(u)&&(e=e||rg,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if(Ep(u)&&a!=="_self")return og(e||"",a),new Sa(null);const h=window.open(e||"",a,l);I(h,t,"popup-blocked");try{h.focus()}catch{}return new Sa(h)}function og(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ag="__/auth/handler",cg="emulator/auth/handler";function Ca(t,e,n,s,r,i){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qt,eventId:r};if(e instanceof Zs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Vn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ug(t)}?${Wt(a).slice(1)}`}function ug({config:t}){return t.emulator?Ki(t,cg):`https://${t.authDomain}/${ag}`}/**
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
 */const qr="webStorageSupport";class lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_u,this._completeRedirectFn=Pm,this._overrideRedirectResult=Nm}async _openPopup(e,n,s,r){var i;$e((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ca(e,n,s,hi(),r);return ig(e,o,Ji())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Wp(Ca(e,n,s,hi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):($e(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Zm(e),s=new Um(e);return n.register("authEvent",r=>(I(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qr,{type:qr},r=>{var i;const o=(i=r?.[0])===null||i===void 0?void 0:i[qr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hu()||Qi()||Xs()}}const hg=lg;var ka="@firebase/auth",Aa="0.22.0";/**
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
 */class dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pg(t){_t(new Ze("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),I(!o?.includes(":"),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:du(t)},l=new bp(a,c,u);return rp(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_t(new Ze("auth-internal",e=>{const n=Yt(e.getProvider("auth").getImmediate());return(s=>new dg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(ka,Aa,fg(t)),Ae(ka,Aa,"esm2017")}/**
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
 */const mg=5*60,gg=Bc("authIdTokenMaxAge")||mg;let Ra=null;const yg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gg)return;const r=n?.token;Ra!==r&&(Ra=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function to(t=zi()){const e=Ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sp(t,{popupRedirectResolver:hg,persistence:[sm,Hp,_u]}),s=Bc("authTokenSyncURL");if(s){const i=yg(s);jp(n,i,()=>i(n.currentUser)),Fp(n,o=>i(o))}const r=Vc("auth");return r&&Sp(n,`http://${r}`),n}pg("Browser");var vg="firebase",wg="9.19.1";/**
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
 */Ae(vg,wg,"app");/**
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
 */const Nu="firebasestorage.googleapis.com",Ou="storageBucket",Eg=2*60*1e3,_g=10*60*1e3;/**
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
 */class te extends Oe{constructor(e,n,s=0){super(zr(e),`Firebase Storage: ${n} (${zr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Z;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Z||(Z={}));function zr(t){return"storage/"+t}function Lu(){const t="An unknown error occurred, please check the error payload for server response.";return new te(Z.UNKNOWN,t)}function Ig(t){return new te(Z.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Tg(t){return new te(Z.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bg(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new te(Z.UNAUTHENTICATED,t)}function Sg(){return new te(Z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Cg(t){return new te(Z.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function kg(){return new te(Z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ag(){return new te(Z.CANCELED,"User canceled the upload/download.")}function Rg(t){return new te(Z.INVALID_URL,"Invalid URL '"+t+"'.")}function xg(t){return new te(Z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Dg(){return new te(Z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ou+"' property when initializing the app?")}function Ng(){return new te(Z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fi(t){return new te(Z.INVALID_ARGUMENT,t)}function Pu(){return new te(Z.APP_DELETED,"The Firebase app was deleted.")}function Og(t){return new te(Z.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function on(t){throw new te(Z.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class we{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=we.makeFromUrl(e,n)}catch{return new we(e,"")}if(s.path==="")return s;throw xg(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),w={bucket:1,path:3},v=n===Nu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",S=new RegExp(`^https?://${v}/${r}/${g}`,"i"),U=[{regex:a,indices:c,postModify:i},{regex:p,indices:w,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<U.length;P++){const q=U[P],Te=q.regex.exec(e);if(Te){const ut=Te[q.indices.bucket];let Le=Te[q.indices.path];Le||(Le=""),s=new we(ut,Le),q.postModify(s);break}}if(s==null)throw Rg(e);return s}}class Lg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Pg(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...g){u||(u=!0,e.apply(null,g))}function h(g){r=setTimeout(()=>{r=null,t(p,c())},g)}function d(){i&&clearTimeout(i)}function p(g,...S){if(u){d();return}if(g){d(),l.call(null,g,...S);return}if(c()||o){d(),l.call(null,g,...S);return}s<64&&(s*=2);let U;a===1?(a=2,U=0):U=(s+Math.random())*1e3,h(U)}let w=!1;function v(g){w||(w=!0,d(),!u&&(r!==null?(g||(a=2),clearTimeout(r),h(0)):g||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function Mg(t){t(!1)}/**
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
 */function Ug(t){return t!==void 0}function Fg(t){return typeof t=="object"&&!Array.isArray(t)}function Mu(t){return typeof t=="string"||t instanceof String}function xa(t,e,n,s){if(s<e)throw fi(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw fi(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Uu(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Fu(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var gt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gt||(gt={}));/**
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
 */function jg(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class Vg{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,w)=>{this.resolve_=p,this.reject_=w,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new us(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gt.NO_ERROR,c=i.getStatus();if(!a||jg(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===gt.ABORT;s(!1,new us(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new us(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Ug(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Lu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Pu():Ag();o(c)}else{const c=kg();o(c)}};this.canceled_?n(!1,new us(!1,null,!0)):this.backoffId_=Pg(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class us{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function $g(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Bg(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qg(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zg(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Hg(t,e,n,s,r,i,o=!0){const a=Fu(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return qg(u,e),$g(u,n),Bg(u,i),zg(u,s),new Vg(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function ju(t){let e;try{e=JSON.parse(t)}catch{return null}return Fg(e)?e:null}/**
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
 */function Gg(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Kg(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Vu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wg(t,e){return e}class fe{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Wg}}let ls=null;function Qg(t){return!Mu(t)||t.length<2?t:Vu(t)}function Yg(){if(ls)return ls;const t=[];t.push(new fe("bucket")),t.push(new fe("generation")),t.push(new fe("metageneration")),t.push(new fe("name","fullPath",!0));function e(i,o){return Qg(o)}const n=new fe("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new fe("size");return r.xform=s,t.push(r),t.push(new fe("timeCreated")),t.push(new fe("updated")),t.push(new fe("md5Hash",null,!0)),t.push(new fe("cacheControl",null,!0)),t.push(new fe("contentDisposition",null,!0)),t.push(new fe("contentEncoding",null,!0)),t.push(new fe("contentLanguage",null,!0)),t.push(new fe("contentType",null,!0)),t.push(new fe("metadata","customMetadata",!0)),ls=t,ls}function Jg(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new we(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Xg(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Jg(s,t),s}function Zg(t,e,n){const s=ju(e);return s===null?null:Xg(t,s,n)}function ey(t,e,n,s){const r=ju(e);if(r===null||!Mu(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Uu(d,n,s),w=Fu({alt:"media",token:u});return p+w})[0]}class ty{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ny(t){if(!t)throw Lu()}function sy(t,e){function n(s,r){const i=Zg(t,r,e);return ny(i!==null),ey(i,r,t.host,t._protocol)}return n}function ry(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Sg():r=bg():n.getStatus()===402?r=Tg(t.bucket):n.getStatus()===403?r=Cg(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function iy(t){const e=ry(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Ig(t.path)),i.serverResponse=r.serverResponse,i}return n}function oy(t,e,n){const s=e.fullServerUrl(),r=Uu(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ty(r,i,sy(t,n),o);return a.errorHandler=iy(e),a}class ay{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw on("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw on("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw on("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw on("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw on("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cy extends ay{initXhr(){this.xhr_.responseType="text"}}function uy(){return new cy}/**
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
 */class Tt{constructor(e,n){this._service=e,n instanceof we?this._location=n:this._location=we.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tt(e,n)}get root(){const e=new we(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vu(this._location.path)}get storage(){return this._service}get parent(){const e=Gg(this._location.path);if(e===null)return null;const n=new we(this._location.bucket,e);return new Tt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Og(e)}}function ly(t){t._throwIfRoot("getDownloadURL");const e=oy(t.storage,t._location,Yg());return t.storage.makeRequestWithTokens(e,uy).then(n=>{if(n===null)throw Ng();return n})}function hy(t,e){const n=Kg(t._location.path,e),s=new we(t._location.bucket,n);return new Tt(t.storage,s)}/**
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
 */function dy(t){return/^[A-Za-z]+:\/\//.test(t)}function fy(t,e){return new Tt(t,e)}function $u(t,e){if(t instanceof no){const n=t;if(n._bucket==null)throw Dg();const s=new Tt(n,n._bucket);return e!=null?$u(s,e):s}else return e!==void 0?hy(t,e):t}function py(t,e){if(e&&dy(e)){if(t instanceof no)return fy(t,e);throw fi("To use ref(service, url), the first argument must be a Storage instance.")}else return $u(t,e)}function Da(t,e){const n=e?.[Ou];return n==null?null:we.makeFromBucketSpec(n,t)}function my(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:qc(r,t.app.options.projectId))}class no{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Nu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Eg,this._maxUploadRetryTime=_g,this._requests=new Set,r!=null?this._bucket=we.makeFromBucketSpec(r,this._host):this._bucket=Da(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=we.makeFromBucketSpec(this._url,e):this._bucket=Da(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xa("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xa("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tt(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Lg(Pu());{const o=Hg(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Na="@firebase/storage",Oa="0.11.2";/**
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
 */const Bu="storage";function gy(t){return t=$(t),ly(t)}function yy(t,e){return t=$(t),py(t,e)}function vy(t=zi(),e){t=$(t);const s=Ys(t,Bu).getImmediate({identifier:e}),r=$c("storage");return r&&wy(s,...r),s}function wy(t,e,n,s={}){my(t,e,n,s)}function Ey(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new no(n,s,r,e,Qt)}function _y(){_t(new Ze(Bu,Ey,"PUBLIC").setMultipleInstances(!0)),Ae(Na,Oa,""),Ae(Na,Oa,"esm2017")}_y();var Iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,so=so||{},R=Iy||self;function Os(){}function nr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ty(t){return Object.prototype.hasOwnProperty.call(t,Hr)&&t[Hr]||(t[Hr]=++by)}var Hr="closure_uid_"+(1e9*Math.random()>>>0),by=0;function Sy(t,e,n){return t.call.apply(t.bind,arguments)}function Cy(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ue=Sy:ue=Cy,ue.apply(null,arguments)}function hs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function re(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function rt(){this.s=this.s,this.o=this.o}var ky=0;rt.prototype.s=!1;rt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ky!=0)&&Ty(this)};rt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ro(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function La(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(nr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ay=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{R.addEventListener("test",Os,e),R.removeEventListener("test",Os,e)}catch{}return t}();function Ls(t){return/^[\s\xa0]*$/.test(t)}var Pa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Gr(t,e){return t<e?-1:t>e?1:0}function sr(){var t=R.navigator;return t&&(t=t.userAgent)?t:""}function ke(t){return sr().indexOf(t)!=-1}function io(t){return io[" "](t),t}io[" "]=Os;function Ry(t){var e=Ny;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xy=ke("Opera"),Vt=ke("Trident")||ke("MSIE"),zu=ke("Edge"),pi=zu||Vt,Hu=ke("Gecko")&&!(sr().toLowerCase().indexOf("webkit")!=-1&&!ke("Edge"))&&!(ke("Trident")||ke("MSIE"))&&!ke("Edge"),Dy=sr().toLowerCase().indexOf("webkit")!=-1&&!ke("Edge");function Gu(){var t=R.document;return t?t.documentMode:void 0}var Ps;e:{var Kr="",Wr=function(){var t=sr();if(Hu)return/rv:([^\);]+)(\)|;)/.exec(t);if(zu)return/Edge\/([\d\.]+)/.exec(t);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Dy)return/WebKit\/(\S+)/.exec(t);if(xy)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wr&&(Kr=Wr?Wr[1]:""),Vt){var Qr=Gu();if(Qr!=null&&Qr>parseFloat(Kr)){Ps=String(Qr);break e}}Ps=Kr}var Ny={};function Oy(){return Ry(function(){let t=0;const e=Pa(String(Ps)).split("."),n=Pa("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Gr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Gr(r[2].length==0,i[2].length==0)||Gr(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var mi;if(R.document&&Vt){var Ma=Gu();mi=Ma||parseInt(Ps,10)||void 0}else mi=void 0;var Ly=mi;function bn(t,e){if(le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hu){e:{try{io(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Py[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bn.X.h.call(this)}}re(bn,le);var Py={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),My=0;function Uy(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++My,this.ba=this.ea=!1}function rr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function oo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ku(t){const e={};for(const n in t)e[n]=t[n];return e}const Ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ua.length;i++)n=Ua[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ir(t){this.src=t,this.g={},this.h=0}ir.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yi(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Uy(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function gi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=qu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(rr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yi(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ao="closure_lm_"+(1e6*Math.random()|0),Yr={};function Qu(t,e,n,s,r){if(s&&s.once)return Ju(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qu(t,e[i],n,s,r);return null}return n=lo(n),t&&t[qn]?t.N(e,n,Bn(s)?!!s.capture:!!s,r):Yu(t,e,n,!1,s,r)}function Yu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Bn(r)?!!r.capture:!!r,a=uo(t);if(a||(t[ao]=a=new ir(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Fy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ay||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fy(){function t(n){return e.call(t.src,t.listener,n)}const e=jy;return t}function Ju(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ju(t,e[i],n,s,r);return null}return n=lo(n),t&&t[qn]?t.O(e,n,Bn(s)?!!s.capture:!!s,r):Yu(t,e,n,!0,s,r)}function Xu(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Xu(t,e[i],n,s,r);else s=Bn(s)?!!s.capture:!!s,n=lo(n),t&&t[qn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yi(i,n,s,r),-1<n&&(rr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=uo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yi(e,n,s,r)),(n=-1<t?e[t]:null)&&co(n))}function co(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qn])gi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=uo(e))?(gi(n,t),n.h==0&&(n.src=null,e[ao]=null)):rr(t)}}}function Zu(t){return t in Yr?Yr[t]:Yr[t]="on"+t}function jy(t,e){if(t.ba)t=!0;else{e=new bn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&co(t),t=n.call(s,e)}return t}function uo(t){return t=t[ao],t instanceof ir?t:null}var Jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function lo(t){return typeof t=="function"?t:(t[Jr]||(t[Jr]=function(e){return t.handleEvent(e)}),t[Jr])}function ee(){rt.call(this),this.i=new ir(this),this.P=this,this.I=null}re(ee,rt);ee.prototype[qn]=!0;ee.prototype.removeEventListener=function(t,e,n,s){Xu(this,t,e,n,s)};function se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new le(e,t);else if(e instanceof le)e.target=e.target||t;else{var r=e;e=new le(s,t),Wu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ds(o,s,!0,e)&&r}if(o=e.g=t,r=ds(o,s,!0,e)&&r,r=ds(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ds(o,s,!1,e)&&r}ee.prototype.M=function(){if(ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)rr(n[s]);delete t.g[e],t.h--}}this.I=null};ee.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ee.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ds(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&gi(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ho=R.JSON.stringify;function Vy(){var t=nl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $y{constructor(){this.h=this.g=null}add(e,n){const s=el.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var el=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new By,t=>t.reset());class By{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qy(t){R.setTimeout(()=>{throw t},0)}function tl(t,e){vi||zy(),wi||(vi(),wi=!0),nl.add(t,e)}var vi;function zy(){var t=R.Promise.resolve(void 0);vi=function(){t.then(Hy)}}var wi=!1,nl=new $y;function Hy(){for(var t;t=Vy();){try{t.h.call(t.g)}catch(n){qy(n)}var e=el;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wi=!1}function or(t,e){ee.call(this),this.h=t||1,this.g=e||R,this.j=ue(this.lb,this),this.l=Date.now()}re(or,ee);T=or.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),se(this,"tick"),this.ca&&(fo(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}T.M=function(){or.X.M.call(this),fo(this),delete this.g};function po(t,e,n){if(typeof t=="function")n&&(t=ue(t,n));else if(t&&typeof t.handleEvent=="function")t=ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function sl(t){t.g=po(()=>{t.g=null,t.i&&(t.i=!1,sl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Gy extends rt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sl(this)}M(){super.M(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(t){rt.call(this),this.h=t,this.g={}}re(Sn,rt);var Fa=[];function rl(t,e,n,s){Array.isArray(n)||(n&&(Fa[0]=n.toString()),n=Fa);for(var r=0;r<n.length;r++){var i=Qu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function il(t){oo(t.g,function(e,n){this.g.hasOwnProperty(n)&&co(e)},t),t.g={}}Sn.prototype.M=function(){Sn.X.M.call(this),il(this)};Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ar(){this.g=!0}ar.prototype.Aa=function(){this.g=!1};function Ky(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Wy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Lt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yy(t,n)+(s?" "+s:"")})}function Qy(t,e){t.info(function(){return"TIMEOUT: "+e})}ar.prototype.info=function(){};function Yy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ho(n)}catch{return e}}var At={},ja=null;function cr(){return ja=ja||new ee}At.Pa="serverreachability";function ol(t){le.call(this,At.Pa,t)}re(ol,le);function Cn(t){const e=cr();se(e,new ol(e))}At.STAT_EVENT="statevent";function al(t,e){le.call(this,At.STAT_EVENT,t),this.stat=e}re(al,le);function pe(t){const e=cr();se(e,new al(e,t))}At.Qa="timingevent";function cl(t,e){le.call(this,At.Qa,t),this.size=e}re(cl,le);function zn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var ur={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ul={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mo(){}mo.prototype.h=null;function Va(t){return t.h||(t.h=t.i())}function ll(){}var Hn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function go(){le.call(this,"d")}re(go,le);function yo(){le.call(this,"c")}re(yo,le);var Ei;function lr(){}re(lr,mo);lr.prototype.g=function(){return new XMLHttpRequest};lr.prototype.i=function(){return{}};Ei=new lr;function Gn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Sn(this),this.O=Jy,t=pi?125:void 0,this.T=new or(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var Jy=45e3,_i={},Ms={};T=Gn.prototype;T.setTimeout=function(t){this.O=t};function Ii(t,e,n){t.K=1,t.v=dr(Be(e)),t.s=n,t.P=!0,dl(t,null)}function dl(t,e){t.F=Date.now(),Kn(t),t.A=Be(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),El(n.i,"t",s),t.C=0,n=t.l.H,t.h=new hl,t.g=$l(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gy(ue(t.La,t,t.g),t.N)),rl(t.S,t.g,"readystatechange",t.ib),e=t.H?Ku(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cn(),Ky(t.j,t.u,t.A,t.m,t.U,t.s)}T.ib=function(t){t=t.target;const e=this.L;e&&je(t)==3?e.l():this.La(t)};T.La=function(t){try{if(t==this.g)e:{const l=je(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||pi||this.g&&(this.h.h||this.g.fa()||za(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Cn(3):Cn(2)),hr(this);var n=this.g.aa();this.Y=n;t:if(fl(this)){var s=za(this.g);t="";var r=s.length,i=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dt(this),mn(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Wy(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ls(a)){var u=a;break t}}u=null}if(n=u)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ti(this,n);else{this.i=!1,this.o=3,pe(12),dt(this),mn(this);break e}}this.P?(pl(this,l,o),pi&&this.i&&l==3&&(rl(this.S,this.T,"tick",this.hb),this.T.start())):(Lt(this.j,this.m,o,null),Ti(this,o)),l==4&&dt(this),this.i&&!this.I&&(l==4?Ul(this.l,this):(this.i=!1,Kn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pe(12)):(this.o=0,pe(13)),dt(this),mn(this)}}}catch{}finally{}};function fl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function pl(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Xy(t,n),r==Ms){e==4&&(t.o=4,pe(14),s=!1),Lt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==_i){t.o=4,pe(15),Lt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Lt(t.j,t.m,r,null),Ti(t,r);fl(t)&&r!=Ms&&r!=_i&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),bo(e),e.K=!0,pe(11))):(Lt(t.j,t.m,n,"[Invalid Chunked Response]"),dt(t),mn(t))}T.hb=function(){if(this.g){var t=je(this.g),e=this.g.fa();this.C<e.length&&(hr(this),pl(this,t,e),this.i&&t!=4&&Kn(this))}};function Xy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ms:(n=Number(e.substring(n,s)),isNaN(n)?_i:(s+=1,s+n>e.length?Ms:(e=e.substr(s,n),t.C=s+n,e)))}T.cancel=function(){this.I=!0,dt(this)};function Kn(t){t.V=Date.now()+t.O,ml(t,t.O)}function ml(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zn(ue(t.gb,t),e)}function hr(t){t.B&&(R.clearTimeout(t.B),t.B=null)}T.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qy(this.j,this.A),this.K!=2&&(Cn(),pe(17)),dt(this),this.o=2,mn(this)):ml(this,this.V-t)};function mn(t){t.l.G==0||t.I||Ul(t.l,t)}function dt(t){hr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fo(t.T),il(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ti(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bi(n.h,t))){if(!t.J&&bi(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)js(n),mr(n);else break e;To(n),pe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=zn(ue(n.cb,n),6e3));if(1>=Tl(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ft(n,11)}else if((t.J||n.g==t)&&js(n),!Ls(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vo(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,V(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Vl(s,s.H?s.ka:null,s.V),o.J){bl(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(hr(a),Kn(a)),s.g=o}else Pl(s);0<n.i.length&&gr(n)}else u[0]!="stop"&&u[0]!="close"||ft(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ft(n,7):Io(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Cn(4)}catch{}}function Zy(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(nr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ev(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(nr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(nr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ev(t),s=Zy(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function yt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yt){this.h=e!==void 0?e:t.h,Us(this,t.j),this.s=t.s,this.g=t.g,Fs(this,t.m),this.l=t.l,e=t.i;var n=new kn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$a(this,n),this.o=t.o}else t&&(n=String(t).match(yl))?(this.h=!!e,Us(this,n[1]||"",!0),this.s=un(n[2]||""),this.g=un(n[3]||"",!0),Fs(this,n[4]),this.l=un(n[5]||"",!0),$a(this,n[6]||"",!0),this.o=un(n[7]||"")):(this.h=!!e,this.i=new kn(null,this.h))}yt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ln(e,Ba,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ln(e,Ba,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ln(n,n.charAt(0)=="/"?rv:sv,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ln(n,ov)),t.join("")};function Be(t){return new yt(t)}function Us(t,e,n){t.j=n?un(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $a(t,e,n){e instanceof kn?(t.i=e,av(t.i,t.h)):(n||(e=ln(e,iv)),t.i=new kn(e,t.h))}function V(t,e,n){t.i.set(e,n)}function dr(t){return V(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function un(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ln(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ba=/[#\/\?@]/g,sv=/[#\?:]/g,rv=/[#\?]/g,iv=/[#\?@]/g,ov=/#/g;function kn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function it(t){t.g||(t.g=new Map,t.h=0,t.i&&tv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=kn.prototype;T.add=function(t,e){it(this),this.i=null,t=Jt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vl(t,e){it(t),e=Jt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wl(t,e){return it(t),e=Jt(t,e),t.g.has(e)}T.forEach=function(t,e){it(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};T.oa=function(){it(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};T.W=function(t){it(this);let e=[];if(typeof t=="string")wl(this,t)&&(e=e.concat(this.g.get(Jt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return it(this),this.i=null,t=Jt(this,t),wl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function El(t,e,n){vl(t,e),0<n.length&&(t.i=null,t.g.set(Jt(t,e),ro(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Jt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function av(t,e){e&&!t.j&&(it(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vl(this,s),El(this,r,n))},t)),t.j=e}var cv=class{constructor(e,n){this.h=e,this.g=n}};function _l(t){this.l=t||uv,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ga&&R.g.Ga()&&R.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uv=10;function Il(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Tl(t){return t.h?1:t.g?t.g.size:0}function bi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vo(t,e){t.g?t.g.add(e):t.h=e}function bl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_l.prototype.cancel=function(){if(this.i=Sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sl(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ro(t.i)}function wo(){}wo.prototype.stringify=function(t){return R.JSON.stringify(t,void 0)};wo.prototype.parse=function(t){return R.JSON.parse(t,void 0)};function lv(){this.g=new wo}function hv(t,e,n){const s=n||"";try{gl(t,function(r,i){let o=r;Bn(r)&&(o=ho(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function dv(t,e){const n=new ar;if(R.Image){const s=new Image;s.onload=hs(fs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=hs(fs,n,s,"TestLoadImage: error",!1,e),s.onabort=hs(fs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=hs(fs,n,s,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function fs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Wn(t){this.l=t.ac||null,this.j=t.jb||!1}re(Wn,mo);Wn.prototype.g=function(){return new fr(this.l,this.j)};Wn.prototype.i=function(t){return function(){return t}}({});function fr(t,e){ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Eo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}re(fr,ee);var Eo=0;T=fr.prototype;T.open=function(t,e){if(this.readyState!=Eo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,An(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||R).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=Eo};T.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cl(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Cl(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}T.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qn(this):An(this),this.readyState==3&&Cl(this)}};T.Va=function(t){this.g&&(this.response=this.responseText=t,Qn(this))};T.Ua=function(t){this.g&&(this.response=t,Qn(this))};T.ga=function(){this.g&&Qn(this)};function Qn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,An(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function An(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fv=R.JSON.parse;function B(t){ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kl,this.K=this.L=!1}re(B,ee);var kl="",pv=/^https?$/i,mv=["POST","PUT"];T=B.prototype;T.Ka=function(t){this.L=t};T.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ei.g(),this.C=this.u?Va(this.u):Va(Ei),this.g.onreadystatechange=ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qa(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=R.FormData&&t instanceof R.FormData,!(0<=qu(mv,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xl(this),0<this.B&&((this.K=gv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.qa,this)):this.A=po(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qa(this,i)}};function gv(t){return Vt&&Oy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.qa=function(){typeof so<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,se(this,"timeout"),this.abort(8))};function qa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Al(t),pr(t)}function Al(t){t.D||(t.D=!0,se(t,"complete"),se(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,se(this,"complete"),se(this,"abort"),pr(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pr(this,!0)),B.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?Rl(this):this.fb())};T.fb=function(){Rl(this)};function Rl(t){if(t.h&&typeof so<"u"&&(!t.C[1]||je(t)!=4||t.aa()!=2)){if(t.v&&je(t)==4)po(t.Ha,0,t);else if(se(t,"readystatechange"),je(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(yl)[1]||null;if(!r&&R.self&&R.self.location){var i=R.self.location.protocol;r=i.substr(0,i.length-1)}s=!pv.test(r?r.toLowerCase():"")}n=s}if(n)se(t,"complete"),se(t,"success");else{t.m=6;try{var o=2<je(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Al(t)}}finally{pr(t)}}}}function pr(t,e){if(t.g){xl(t);const n=t.g,s=t.C[0]?Os:null;t.g=null,t.C=null,e||se(t,"ready");try{n.onreadystatechange=s}catch{}}}function xl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}function je(t){return t.g?t.g.readyState:0}T.aa=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fv(e)}};function za(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dl(t){let e="";return oo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function _o(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dl(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):V(t,e,n))}function an(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nl(t){this.Ca=0,this.i=[],this.j=new ar,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=an("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=an("baseRetryDelayMs",5e3,t),this.bb=an("retryDelaySeedMs",1e4,t),this.$a=an("forwardChannelMaxRetries",2,t),this.ta=an("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new _l(t&&t.concurrentRequestLimit),this.Fa=new lv,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=Nl.prototype;T.ma=8;T.G=1;function Io(t){if(Ol(t),t.G==3){var e=t.U++,n=Be(t.F);V(n,"SID",t.I),V(n,"RID",e),V(n,"TYPE","terminate"),Yn(t,n),e=new Gn(t,t.j,e,void 0),e.K=2,e.v=dr(Be(n)),n=!1,R.navigator&&R.navigator.sendBeacon&&(n=R.navigator.sendBeacon(e.v.toString(),"")),!n&&R.Image&&(new Image().src=e.v,n=!0),n||(e.g=$l(e.l,null),e.g.da(e.v)),e.F=Date.now(),Kn(e)}jl(t)}function mr(t){t.g&&(bo(t),t.g.cancel(),t.g=null)}function Ol(t){mr(t),t.u&&(R.clearTimeout(t.u),t.u=null),js(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function gr(t){Il(t.h)||t.m||(t.m=!0,tl(t.Ja,t),t.C=0)}function yv(t,e){return Tl(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zn(ue(t.Ja,t,e),Fl(t,t.C)),t.C++,!0)}T.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Gn(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ku(i),Wu(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ll(this,r,e),n=Be(this.F),V(n,"RID",t),V(n,"CVER",22),this.D&&V(n,"X-HTTP-Session-Id",this.D),Yn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Dl(i)))+"&"+e:this.o&&_o(n,this.o,i)),vo(this.h,r),this.Ya&&V(n,"TYPE","init"),this.O?(V(n,"$req",e),V(n,"SID","null"),r.Z=!0,Ii(r,n,null)):Ii(r,n,e),this.G=2}}else this.G==3&&(t?Ha(this,t):this.i.length==0||Il(this.h)||Ha(this))};function Ha(t,e){var n;e?n=e.m:n=t.U++;const s=Be(t.F);V(s,"SID",t.I),V(s,"RID",n),V(s,"AID",t.T),Yn(t,s),t.o&&t.s&&_o(s,t.o,t.s),n=new Gn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ll(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),vo(t.h,n),Ii(n,s,e)}function Yn(t,e){t.ia&&oo(t.ia,function(n,s){V(e,s,n)}),t.l&&gl({},function(n,s){V(e,s,n)})}function Ll(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ue(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{hv(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Pl(t){t.g||t.u||(t.Z=1,tl(t.Ia,t),t.A=0)}function To(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zn(ue(t.Ia,t),Fl(t,t.A)),t.A++,!0)}T.Ia=function(){if(this.u=null,Ml(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zn(ue(this.eb,this),t)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pe(10),mr(this),Ml(this))};function bo(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function Ml(t){t.g=new Gn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Be(t.sa);V(e,"RID","rpc"),V(e,"SID",t.I),V(e,"CI",t.L?"0":"1"),V(e,"AID",t.T),V(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&_o(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=dr(Be(e)),n.s=null,n.P=!0,dl(n,t)}T.cb=function(){this.v!=null&&(this.v=null,mr(this),To(this),pe(19))};function js(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function Ul(t,e){var n=null;if(t.g==e){js(t),bo(t),t.g=null;var s=2}else if(bi(t.h,e))n=e.D,bl(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=cr(),se(s,new cl(s,n)),gr(t)}else Pl(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&yv(t,e)||s==2&&To(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ft(t,5);break;case 4:ft(t,10);break;case 3:ft(t,6);break;default:ft(t,2)}}}function Fl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ft(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ue(t.kb,t);n||(n=new yt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Us(n,"https"),dr(n)),dv(n.toString(),s)}else pe(2);t.G=0,t.l&&t.l.va(e),jl(t),Ol(t)}T.kb=function(t){t?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function jl(t){if(t.G=0,t.la=[],t.l){const e=Sl(t.h);(e.length!=0||t.i.length!=0)&&(La(t.la,e),La(t.la,t.i),t.h.i.length=0,ro(t.i),t.i.length=0),t.l.ua()}}function Vl(t,e,n){var s=n instanceof yt?Be(n):new yt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Fs(s,s.m);else{var r=R.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new yt(null,void 0);s&&Us(i,s),e&&(i.g=e),r&&Fs(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&V(s,n,e),V(s,"VER",t.ma),Yn(t,s),s}function $l(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new B(new Wn({jb:!0})):new B(t.ra),e.Ka(t.H),e}function Bl(){}T=Bl.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function Vs(){if(Vt&&!(10<=Number(Ly)))throw Error("Environmental error: no available transport.")}Vs.prototype.g=function(t,e){return new Ie(t,e)};function Ie(t,e){ee.call(this),this.g=new Nl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ls(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ls(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xt(this)}re(Ie,ee);Ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;pe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vl(t,null,t.V),gr(t)};Ie.prototype.close=function(){Io(this.g)};Ie.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ho(t),t=n);e.i.push(new cv(e.ab++,t)),e.G==3&&gr(e)};Ie.prototype.M=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,Ie.X.M.call(this)};function ql(t){go.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}re(ql,go);function zl(){yo.call(this),this.status=1}re(zl,yo);function Xt(t){this.g=t}re(Xt,Bl);Xt.prototype.xa=function(){se(this.g,"a")};Xt.prototype.wa=function(t){se(this.g,new ql(t))};Xt.prototype.va=function(t){se(this.g,new zl)};Xt.prototype.ua=function(){se(this.g,"b")};Vs.prototype.createWebChannel=Vs.prototype.g;Ie.prototype.send=Ie.prototype.u;Ie.prototype.open=Ie.prototype.m;Ie.prototype.close=Ie.prototype.close;ur.NO_ERROR=0;ur.TIMEOUT=8;ur.HTTP_ERROR=6;ul.COMPLETE="complete";ll.EventType=Hn;Hn.OPEN="a";Hn.CLOSE="b";Hn.ERROR="c";Hn.MESSAGE="d";ee.prototype.listen=ee.prototype.N;B.prototype.listenOnce=B.prototype.O;B.prototype.getLastError=B.prototype.Oa;B.prototype.getLastErrorCode=B.prototype.Ea;B.prototype.getStatus=B.prototype.aa;B.prototype.getResponseJson=B.prototype.Sa;B.prototype.getResponseText=B.prototype.fa;B.prototype.send=B.prototype.da;B.prototype.setWithCredentials=B.prototype.Ka;var vv=function(){return new Vs},wv=function(){return cr()},Xr=ur,Ev=ul,_v=At,Ga={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Iv=Wn,ps=ll,Tv=B;const Ka="@firebase/firestore";/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let Zt="9.19.0";/**
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
 */const bt=new Bi("@firebase/firestore");function Wa(){return bt.logLevel}function b(t,...e){if(bt.logLevel<=L.DEBUG){const n=e.map(So);bt.debug(`Firestore (${Zt}): ${t}`,...n)}}function qe(t,...e){if(bt.logLevel<=L.ERROR){const n=e.map(So);bt.error(`Firestore (${Zt}): ${t}`,...n)}}function $s(t,...e){if(bt.logLevel<=L.WARN){const n=e.map(So);bt.warn(`Firestore (${Zt}): ${t}`,...n)}}function So(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function A(t="Unexpected state"){const e=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+t;throw qe(e),new Error(e)}function j(t,e){t||A()}function D(t,e){return t}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Oe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */let Ve=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
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
 */class Hl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(oe.UNAUTHENTICATED))}shutdown(){}}class Sv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cv{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ve;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ve,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ve)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(j(typeof s.accessToken=="string"),new Hl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new oe(e)}}class kv{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Av{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new kv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xv{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.T=n.token,new Rv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Dv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Gl{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Dv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function M(t,e){return t<e?-1:t>e?1:0}function $t(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class W{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return W.fromMillis(Date.now())}static fromDate(e){return W.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new W(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new W(0,0))}static max(){return new x(new W(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rn{constructor(e,n,s){n===void 0?n=0:n>e.length&&A(),s===void 0?s=e.length-n:s>e.length-n&&A(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class F extends Rn{construct(e,n,s){return new F(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new F(n)}static emptyPath(){return new F([])}}const Nv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Rn{construct(e,n,s){return new ce(e,n,s)}static isValidIdentifier(e){return Nv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new _(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new _(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new _(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(n)}static emptyPath(){return new ce([])}}/**
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
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(F.fromString(e))}static fromName(e){return new C(F.fromString(e).popFirst(5))}static empty(){return new C(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return F.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new F(e.slice()))}}function Ov(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=x.fromTimestamp(s===1e9?new W(n+1,0):new W(n,s));return new et(r,C.empty(),e)}function Lv(t){return new et(t.readTime,t.key,-1)}class et{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new et(x.min(),C.empty(),-1)}static max(){return new et(x.max(),C.empty(),-1)}}function Pv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=C.comparator(t.documentKey,e.documentKey),n!==0?n:M(t.largestBatchId,e.largestBatchId))}/**
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
 */const Mv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Jn(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Mv)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(r=>r?y.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new y((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new y((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Xn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Co{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Co.ct=-1;function yr(t){return t==null}function Bs(t){return t===0&&1/t==-1/0}function Fv(t){return typeof t=="number"&&Number.isInteger(t)&&!Bs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Y{constructor(e,n){this.comparator=e,this.root=n||ne.EMPTY}insert(e,n){return new Y(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ne.RED,this.left=r??ne.EMPTY,this.right=i??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ne(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Q{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(e){return new Ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Q(this.comparator);return n.data=e,n}}class Ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ee{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Ee([])}unionWith(e){let n=new Q(ce.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ee(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $t(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jv("Invalid base64 string: "+r):r}}(e);return new de(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new de(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Vv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tt(t){if(j(!!t),typeof t=="string"){let e=0;const n=Vv.exec(t);if(j(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bt(t){return typeof t=="string"?de.fromBase64String(t):de.fromUint8Array(t)}/**
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
 */function Wl(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ql(t){const e=t.mapValue.fields.__previous_value__;return Wl(e)?Ql(e):e}function xn(t){const e=tt(t.mapValue.fields.__local_write_time__.timestampValue);return new W(e.seconds,e.nanos)}/**
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
 */class $v{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Dn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wl(t)?4:Bv(t)?9007199254740991:10:A()}function De(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xn(t).isEqual(xn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=tt(s.timestampValue),o=tt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Bt(s.bytesValue).isEqual(Bt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return H(s.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return H(s.integerValue)===H(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=H(s.doubleValue),o=H(r.doubleValue);return i===o?Bs(i)===Bs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return $t(t.arrayValue.values||[],e.arrayValue.values||[],De);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Qa(i)!==Qa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!De(i[a],o[a])))return!1;return!0}(t,e);default:return A()}}function Nn(t,e){return(t.values||[]).find(n=>De(n,e))!==void 0}function qt(t,e){if(t===e)return 0;const n=St(t),s=St(e);if(n!==s)return M(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=H(r.integerValue||r.doubleValue),a=H(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ja(t.timestampValue,e.timestampValue);case 4:return Ja(xn(t),xn(e));case 5:return M(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Bt(r),a=Bt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=M(o[c],a[c]);if(u!==0)return u}return M(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=M(H(r.latitude),H(i.latitude));return o!==0?o:M(H(r.longitude),H(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=qt(o[c],a[c]);if(u)return u}return M(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===gs.mapValue&&i===gs.mapValue)return 0;if(r===gs.mapValue)return 1;if(i===gs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=M(a[l],u[l]);if(h!==0)return h;const d=qt(o[a[l]],c[u[l]]);if(d!==0)return d}return M(a.length,u.length)}(t.mapValue,e.mapValue);default:throw A()}}function Ja(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return M(t,e);const n=tt(t),s=tt(e),r=M(n.seconds,s.seconds);return r!==0?r:M(n.nanos,s.nanos)}function zt(t){return Si(t)}function Si(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=tt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,C.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Si(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Si(s.fields[a])}`;return i+"}"}(t.mapValue):A();var e,n}function Xa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ci(t){return!!t&&"integerValue"in t}function ko(t){return!!t&&"arrayValue"in t}function Za(t){return!!t&&"nullValue"in t}function ec(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ts(t){return!!t&&"mapValue"in t}function gn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=gn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ge{constructor(e){this.value=e}static empty(){return new ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ts(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gn(n)}setAll(e){let n=ce.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=gn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ts(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return De(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Rt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ge(gn(this.value))}}function Yl(t){const e=[];return Rt(t.fields,(n,s)=>{const r=new ce([n]);if(Ts(s)){const i=Yl(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ee(e)}/**
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
 */class ae{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ae(e,0,x.min(),x.min(),x.min(),ge.empty(),0)}static newFoundDocument(e,n,s,r){return new ae(e,1,n,x.min(),s,r,0)}static newNoDocument(e,n){return new ae(e,2,n,x.min(),x.min(),ge.empty(),0)}static newUnknownDocument(e,n){return new ae(e,3,n,x.min(),x.min(),ge.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qs{constructor(e,n){this.position=e,this.inclusive=n}}function tc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=C.comparator(C.fromName(o.referenceValue),n.key):s=qt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!De(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yn{constructor(e,n="asc"){this.field=e,this.dir=n}}function qv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jl{}class G extends Jl{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Hv(e,n,s):n==="array-contains"?new Wv(e,s):n==="in"?new Qv(e,s):n==="not-in"?new Yv(e,s):n==="array-contains-any"?new Jv(e,s):new G(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Gv(e,s):new Kv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qt(n,this.value)):n!==null&&St(this.value)===St(n)&&this.matchesComparison(qt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Se extends Jl{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Se(e,n)}matches(e){return Xl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xl(t){return t.op==="and"}function Zl(t){return zv(t)&&Xl(t)}function zv(t){for(const e of t.filters)if(e instanceof Se)return!1;return!0}function ki(t){if(t instanceof G)return t.field.canonicalString()+t.op.toString()+zt(t.value);if(Zl(t))return t.filters.map(e=>ki(e)).join(",");{const e=t.filters.map(n=>ki(n)).join(",");return`${t.op}(${e})`}}function eh(t,e){return t instanceof G?function(n,s){return s instanceof G&&n.op===s.op&&n.field.isEqual(s.field)&&De(n.value,s.value)}(t,e):t instanceof Se?function(n,s){return s instanceof Se&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&eh(i,s.filters[o]),!0):!1}(t,e):void A()}function th(t){return t instanceof G?function(e){return`${e.field.canonicalString()} ${e.op} ${zt(e.value)}`}(t):t instanceof Se?function(e){return e.op.toString()+" {"+e.getFilters().map(th).join(" ,")+"}"}(t):"Filter"}class Hv extends G{constructor(e,n,s){super(e,n,s),this.key=C.fromName(s.referenceValue)}matches(e){const n=C.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gv extends G{constructor(e,n){super(e,"in",n),this.keys=nh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kv extends G{constructor(e,n){super(e,"not-in",n),this.keys=nh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>C.fromName(s.referenceValue))}class Wv extends G{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ko(n)&&Nn(n.arrayValue,this.value)}}class Qv extends G{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Nn(this.value.arrayValue,n)}}class Yv extends G{constructor(e,n){super(e,"not-in",n)}matches(e){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Nn(this.value.arrayValue,n)}}class Jv extends G{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ko(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Nn(this.value.arrayValue,s))}}/**
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
 */class Xv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function sc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Xv(t,e,n,s,r,i,o)}function Ao(t){const e=D(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ki(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),yr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>zt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>zt(s)).join(",")),e.ft=n}return e.ft}function Ro(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qv(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nc(t.startAt,e.startAt)&&nc(t.endAt,e.endAt)}function Ai(t){return C.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Zv(t,e,n,s,r,i,o,a){return new Zn(t,e,n,s,r,i,o,a)}function xo(t){return new Zn(t)}function rc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Do(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rh(t){return t.collectionGroup!==null}function Ut(t){const e=D(t);if(e.dt===null){e.dt=[];const n=Do(e),s=sh(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new yn(n)),e.dt.push(new yn(ce.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new yn(ce.keyField(),i))}}}return e.dt}function ze(t){const e=D(t);if(!e.wt)if(e.limitType==="F")e.wt=sc(e.path,e.collectionGroup,Ut(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ut(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new yn(i.field,o))}const s=e.endAt?new qs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qs(e.startAt.position,e.startAt.inclusive):null;e.wt=sc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Ri(t,e){e.getFirstInequalityField(),Do(t);const n=t.filters.concat([e]);return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xi(t,e,n){return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vr(t,e){return Ro(ze(t),ze(e))&&t.limitType===e.limitType}function ih(t){return`${Ao(ze(t))}|lt:${t.limitType}`}function Di(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>th(s)).join(", ")}]`),yr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>zt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>zt(s)).join(",")),`Target(${n})`}(ze(t))}; limitType=${t.limitType})`}function wr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):C.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Ut(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=tc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ut(n),s)||n.endAt&&!function(r,i,o){const a=tc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ut(n),s))}(t,e)}function ew(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oh(t){return(e,n)=>{let s=!1;for(const r of Ut(t)){const i=tw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function tw(t,e,n){const s=t.field.isKeyField()?C.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?qt(a,c):A()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return A()}}/**
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
 */class en{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Rt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
 */const nw=new Y(C.comparator);function He(){return nw}const ah=new Y(C.comparator);function hn(...t){let e=ah;for(const n of t)e=e.insert(n.key,n);return e}function ch(t){let e=ah;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function pt(){return vn()}function uh(){return vn()}function vn(){return new en(t=>t.toString(),(t,e)=>t.isEqual(e))}const sw=new Y(C.comparator),rw=new Q(C.comparator);function N(...t){let e=rw;for(const n of t)e=e.add(n);return e}const iw=new Q(M);function lh(){return iw}/**
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
 */function hh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bs(e)?"-0":e}}function dh(t){return{integerValue:""+t}}function ow(t,e){return Fv(e)?dh(e):hh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Er{constructor(){this._=void 0}}function aw(t,e,n){return t instanceof zs?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof On?ph(t,e):t instanceof Ln?mh(t,e):function(s,r){const i=fh(s,r),o=ic(i)+ic(s._t);return Ci(i)&&Ci(s._t)?dh(o):hh(s.serializer,o)}(t,e)}function cw(t,e,n){return t instanceof On?ph(t,e):t instanceof Ln?mh(t,e):n}function fh(t,e){return t instanceof Hs?Ci(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class zs extends Er{}class On extends Er{constructor(e){super(),this.elements=e}}function ph(t,e){const n=gh(e);for(const s of t.elements)n.some(r=>De(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ln extends Er{constructor(e){super(),this.elements=e}}function mh(t,e){let n=gh(e);for(const s of t.elements)n=n.filter(r=>!De(r,s));return{arrayValue:{values:n}}}class Hs extends Er{constructor(e,n){super(),this.serializer=e,this._t=n}}function ic(t){return H(t.integerValue||t.doubleValue)}function gh(t){return ko(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof On&&s instanceof On||n instanceof Ln&&s instanceof Ln?$t(n.elements,s.elements,De):n instanceof Hs&&s instanceof Hs?De(n._t,s._t):n instanceof zs&&s instanceof zs}(t.transform,e.transform)}class lw{constructor(e,n){this.version=e,this.transformResults=n}}class be{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new be}static exists(e){return new be(void 0,e)}static updateTime(e){return new be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _r{}function yh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wh(t.key,be.none()):new es(t.key,t.data,be.none());{const n=t.data,s=ge.empty();let r=new Q(ce.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ot(t.key,s,new Ee(r.toArray()),be.none())}}function hw(t,e,n){t instanceof es?function(s,r,i){const o=s.value.clone(),a=ac(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ot?function(s,r,i){if(!bs(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ac(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function wn(t,e,n,s){return t instanceof es?function(r,i,o,a){if(!bs(r.precondition,i))return o;const c=r.value.clone(),u=cc(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ot?function(r,i,o,a){if(!bs(r.precondition,i))return o;const c=cc(r.fieldTransforms,a,i),u=i.data;return u.setAll(vh(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return bs(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function dw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=fh(s.transform,r||null);i!=null&&(n===null&&(n=ge.empty()),n.set(s.field,i))}return n||null}function oc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$t(n,s,(r,i)=>uw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class es extends _r{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ot extends _r{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ac(t,e,n){const s=new Map;j(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,cw(o,a,n[r]))}return s}function cc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,aw(i,o,e))}return s}class wh extends _r{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fw extends _r{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&hw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=wn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=wn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=uh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=yh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),N())}isEqual(e){return this.batchId===e.batchId&&$t(this.mutations,e.mutations,(n,s)=>oc(n,s))&&$t(this.baseMutations,e.baseMutations,(n,s)=>oc(n,s))}}class No{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){j(e.mutations.length===s.length);let r=sw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new No(e,n,s,r)}}/**
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
 */class mw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class gw{constructor(e){this.count=e}}/**
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
 */var z,O;function yw(t){switch(t){default:return A();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Eh(t){if(t===void 0)return qe("GRPC error has no .code"),m.UNKNOWN;switch(t){case z.OK:return m.OK;case z.CANCELLED:return m.CANCELLED;case z.UNKNOWN:return m.UNKNOWN;case z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case z.INTERNAL:return m.INTERNAL;case z.UNAVAILABLE:return m.UNAVAILABLE;case z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case z.NOT_FOUND:return m.NOT_FOUND;case z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case z.ABORTED:return m.ABORTED;case z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case z.DATA_LOSS:return m.DATA_LOSS;default:return A()}}(O=z||(z={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Oo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ys}static getOrCreateInstance(){return ys===null&&(ys=new Oo),ys}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ys=null;/**
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
 */class Ir{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ts.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ir(x.min(),r,lh(),He(),N())}}class ts{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ts(s,n,N(),N(),N())}}/**
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
 */class Ss{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class _h{constructor(e,n){this.targetId=e,this.Et=n}}class Ih{constructor(e,n,s=de.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class uc{constructor(){this.At=0,this.Rt=hc(),this.vt=de.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=N(),n=N(),s=N();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:A()}}),new ts(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=hc()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class vw{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=He(),this.qt=lc(),this.Ut=new Q(M)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:A()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Ai(o))if(r===0){const a=new C(o.path);this.Qt(s,a,ae.newNoDocument(a,x.min()))}else j(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Oo.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ai(a.target)){const c=new C(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ae.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=N();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ir(e,n,this.Ut,this.Lt,s);return this.Lt=He(),this.qt=lc(),this.Ut=new Q(M),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new uc,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Q(M),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new uc),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function lc(){return new Y(C.comparator)}function hc(){return new Y(C.comparator)}/**
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
 */const ww=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ew=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_w=(()=>({and:"AND",or:"OR"}))();class Iw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Th(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tw(t,e){return Gs(t,e.toTimestamp())}function Re(t){return j(!!t),x.fromTimestamp(function(e){const n=tt(e);return new W(n.seconds,n.nanos)}(t))}function Lo(t,e){return function(n){return new F(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function bh(t){const e=F.fromString(t);return j(Ah(e)),e}function Ni(t,e){return Lo(t.databaseId,e.path)}function Zr(t,e){const n=bh(e);if(n.get(1)!==t.databaseId.projectId)throw new _(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new C(Sh(n))}function Oi(t,e){return Lo(t.databaseId,e)}function bw(t){const e=bh(t);return e.length===4?F.emptyPath():Sh(e)}function Li(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sh(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dc(t,e,n){return{name:Ni(t,e),fields:n.value.mapValue.fields}}function Sw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(j(u===void 0||typeof u=="string"),de.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),de.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Eh(c.code);return new _(u,c.message||"")}(o);n=new Ih(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Zr(t,s.document.name),i=Re(s.document.updateTime),o=s.document.createTime?Re(s.document.createTime):x.min(),a=new ge({mapValue:{fields:s.document.fields}}),c=ae.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Ss(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Zr(t,s.document),i=s.readTime?Re(s.readTime):x.min(),o=ae.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ss([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Zr(t,s.document),i=s.removedTargetIds||[];n=new Ss([],i,r,null)}else{if(!("filter"in e))return A();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new gw(r),o=s.targetId;n=new _h(o,i)}}return n}function Cw(t,e){let n;if(e instanceof es)n={update:dc(t,e.key,e.value)};else if(e instanceof wh)n={delete:Ni(t,e.key)};else if(e instanceof ot)n={update:dc(t,e.key,e.data),updateMask:Pw(e.fieldMask)};else{if(!(e instanceof fw))return A();n={verify:Ni(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof zs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof On)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ln)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hs)return{fieldPath:i.field.canonicalString(),increment:o._t};throw A()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Tw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:A()}(t,e.precondition)),n}function kw(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Re(s.updateTime):Re(r);return i.isEqual(x.min())&&(i=Re(r)),new lw(i,s.transformResults||[])}(n,e))):[]}function Aw(t,e){return{documents:[Oi(t,e.path)]}}function Rw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Oi(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Oi(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return kh(Se.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Nt(l.field),direction:Nw(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||yr(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function xw(t){let e=bw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){j(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Ch(l);return h instanceof Se&&Zl(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new yn(Ot(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,yr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new qs(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new qs(d,h)}(n.endAt)),Zv(e,r,o,i,a,"F",c,u)}function Dw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return A()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ch(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ot(e.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ot(e.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ot(e.unaryFilter.field);return G.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ot(e.unaryFilter.field);return G.create(i,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(t):t.fieldFilter!==void 0?function(e){return G.create(Ot(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Se.create(e.compositeFilter.filters.map(n=>Ch(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(t):A()}function Nw(t){return ww[t]}function Ow(t){return Ew[t]}function Lw(t){return _w[t]}function Nt(t){return{fieldPath:t.canonicalString()}}function Ot(t){return ce.fromServerFormat(t.fieldPath)}function kh(t){return t instanceof G?function(e){if(e.op==="=="){if(ec(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NAN"}};if(Za(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ec(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NOT_NAN"}};if(Za(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(e.field),op:Ow(e.op),value:e.value}}}(t):t instanceof Se?function(e){const n=e.getFilters().map(s=>kh(s));return n.length===1?n[0]:{compositeFilter:{op:Lw(e.op),filters:n}}}(t):A()}function Pw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ah(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vt{constructor(e,n,s,r,i=x.min(),o=x.min(),a=de.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Mw{constructor(e){this.se=e}}function Uw(t){const e=xw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xi(e,e.limit,"L"):e}/**
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
 */class Fw{constructor(){this.He=new jw}addToCollectionParentIndex(e,n){return this.He.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(et.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(et.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class jw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Q(F.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Q(F.comparator)).toArray()}}/**
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
 */class Ht{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ht(0)}static bn(){return new Ht(-1)}}/**
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
 */class Vw{constructor(){this.changes=new en(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $w{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&wn(s.mutation,r,Ee.empty(),W.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,n,s=N()){const r=pt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=hn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=pt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,N()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=He();const o=vn(),a=vn();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ot)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),wn(l.mutation,u,l.mutation.getFieldMask(),W.now())):o.set(u.key,Ee.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new $w(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=vn();let r=new Y((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ee.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||N()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=uh();l.forEach(d=>{if(!i.has(d)){const p=yh(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return C.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):y.resolve(pt());let a=-1,c=i;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,N())).next(l=>({batchId:a,changes:ch(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new C(n)).next(s=>{let r=hn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=hn();return this.indexManager.getCollectionParents(e,r).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Zn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ae.newInvalidDocument(u)))});let o=hn();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&wn(u.mutation,c,Ee.empty(),W.now()),wr(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class qw{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Re(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Uw(s.bundledQuery),readTime:Re(s.readTime)}}(n)),y.resolve()}}/**
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
 */class zw{constructor(){this.overlays=new Y(C.comparator),this.ts=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=pt();return y.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const r=pt(),i=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return y.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Y((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=pt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=pt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return y.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mw(n,s));let i=this.ts.get(n);i===void 0&&(i=N(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class Po{constructor(){this.es=new Q(J.ns),this.ss=new Q(J.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new J(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new J(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new C(new F([])),s=new J(n,e),r=new J(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new C(new F([])),s=new J(n,e),r=new J(n,e+1);let i=N();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new J(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class J{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return C.comparator(e.key,n.key)||M(e.ds,n.ds)}static rs(e,n){return M(e.ds,n.ds)||C.comparator(e.key,n.key)}}/**
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
 */class Hw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Q(J.ns)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new J(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new J(n,0),r=new J(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Q(M);return n.forEach(r=>{const i=new J(r,0),o=new J(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),y.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;C.isDocumentKey(i)||(i=i.child(""));const o=new J(new C(i),0);let a=new Q(M);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){j(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return y.forEach(n.mutations,r=>{const i=new J(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new J(n,0),r=this._s.firstAfterOrEqual(s);return y.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Gw{constructor(e){this.Ts=e,this.docs=new Y(C.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(e,n){let s=He();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ae.newInvalidDocument(r))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=He();const o=n.path,a=new C(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pv(Lv(l),s)<=0||(r.has(l.key)||wr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,n,s,r){A()}Es(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Kw(this)}getSize(e){return y.resolve(this.size)}}class Kw extends Vw{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class Ww{constructor(e){this.persistence=e,this.As=new en(n=>Ao(n),Ro),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Po,this.targetCount=0,this.bs=Ht.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),y.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ht(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Sn(n),y.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),y.waitFor(i).next(()=>r)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.vs.containsKey(n))}}/**
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
 */class Qw{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Co(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Ww(this),this.indexManager=new Fw,this.remoteDocumentCache=function(s){return new Gw(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Mw(n),this.xs=new qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new Hw(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){b("MemoryPersistence","Starting transaction:",e);const r=new Yw(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return y.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class Yw extends Uv{constructor(e){super(),this.currentSequenceNumber=e}}class Mo{constructor(e){this.persistence=e,this.$s=new Po,this.Ms=null}static Fs(e){return new Mo(e)}get Bs(){if(this.Ms)return this.Ms;throw A()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),y.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,s=>{const r=C.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,x.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return y.or([()=>y.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Uo{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=N(),r=N();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Uo(e,n.fromCache,s,r)}}/**
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
 */class Jw{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(rc(n))return y.resolve(null);let s=ze(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=xi(n,null,"F"),s=ze(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,xi(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,r){return rc(n)||r.isEqual(x.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Wa()<=L.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Di(n)),this.Fi(e,o,n,Ov(r,-1)))})}$i(e,n){let s=new Q(oh(e));return n.forEach((r,i)=>{wr(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Wa()<=L.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Di(n)),this.xi.getDocumentsMatchingQuery(e,n,et.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Xw{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Y(M),this.qi=new en(i=>Ao(i),Ro),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bw(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Zw(t,e,n,s){return new Xw(t,e,n,s)}async function Rh(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=N();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function e0(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(w=>{const v=c.docVersions.get(p);j(v!==null),w.version.compareTo(v)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function xh(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function t0(t,e){const n=D(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(de.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(w,v,g){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,l)&&a.push(n.Ds.updateTargetData(i,p))});let c=He(),u=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(n0(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(x.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function n0(t,e,n){let s=N(),r=N();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=He();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function s0(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function r0(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,y.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new vt(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Pi(t,e,n){const s=D(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Xn(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function fc(t,e,n){const s=D(t);let r=x.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=D(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,ze(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:x.min(),n?i:N())).next(a=>(i0(s,ew(e),a),{documents:a,Wi:i})))}function i0(t,e,n){let s=t.Ui.get(e)||x.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class pc{constructor(){this.activeTargetIds=lh()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o0{constructor(){this.Br=new pc,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new pc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a0{qr(e){}shutdown(){}}/**
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
 */class mc{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vs=null;function ei(){return vs===null?vs=268435456+Math.round(2147483648*Math.random()):vs++,"0x"+vs.toString(16)}/**
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
 */const c0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class u0{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const ie="WebChannelConnection";class l0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=ei(),a=this.ao(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw $s("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=c0[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=ei();return new Promise((o,a)=>{const c=new Tv;c.setWithCredentials(!0),c.listenOnce(Ev.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xr.NO_ERROR:const l=c.getResponseJson();b(ie,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Xr.TIMEOUT:b(ie,`RPC '${e}' ${i} timed out`),a(new _(m.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const h=c.getStatus();if(b(ie,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d?.error;if(p&&p.status&&p.message){const w=function(v){const g=v.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(g)>=0?g:m.UNKNOWN}(p.status);a(new _(w,p.message))}else a(new _(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(m.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{b(ie,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);b(ie,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(e,n,s){const r=ei(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vv(),a=wv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Iv({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");b(ie,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const p=new u0({Wr:v=>{d?b(ie,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(b(ie,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),b(ie,`RPC '${e}' stream ${r} sending:`,v),l.send(v))},Hr:()=>l.close()}),w=(v,g,S)=>{v.listen(g,k=>{try{S(k)}catch(U){setTimeout(()=>{throw U},0)}})};return w(l,ps.EventType.OPEN,()=>{d||b(ie,`RPC '${e}' stream ${r} transport opened.`)}),w(l,ps.EventType.CLOSE,()=>{d||(d=!0,b(ie,`RPC '${e}' stream ${r} transport closed`),p.so())}),w(l,ps.EventType.ERROR,v=>{d||(d=!0,$s(ie,`RPC '${e}' stream ${r} transport errored:`,v),p.so(new _(m.UNAVAILABLE,"The operation could not be completed")))}),w(l,ps.EventType.MESSAGE,v=>{var g;if(!d){const S=v.data[0];j(!!S);const k=S,U=k.error||((g=k[0])===null||g===void 0?void 0:g.error);if(U){b(ie,`RPC '${e}' stream ${r} received error:`,U);const P=U.status;let q=function(ut){const Le=z[ut];if(Le!==void 0)return Eh(Le)}(P),Te=U.message;q===void 0&&(q=m.INTERNAL,Te="Unknown error status: "+P+" with message "+U.message),d=!0,p.so(new _(q,Te)),l.close()}else b(ie,`RPC '${e}' stream ${r} received:`,S),p.io(S)}}),w(a,_v.STAT_EVENT,v=>{v.stat===Ga.PROXY?b(ie,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Ga.NOPROXY&&b(ie,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function ti(){return typeof document<"u"?document:null}/**
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
 */function Tr(t){return new Iw(t,!0)}/**
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
 */class Dh{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Nh{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Dh(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(qe(n.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new _(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h0 extends Nh{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Sw(this.serializer,e),s=function(r){if(!("targetChange"in r))return x.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?x.min():i.readTime?Re(i.readTime):x.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Li(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Ai(a)?{documents:Aw(r,a)}:{query:Rw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Th(r,i.resumeToken):i.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Gs(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Dw(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Li(this.serializer),n.removeTarget=e,this.Fo(n)}}class d0 extends Nh{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=kw(e.writeResults,e.commitTime),s=Re(e.commitTime);return this.listener.Zo(s,n)}return j(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Li(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Cw(this.serializer,s))};this.Fo(n)}}/**
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
 */class f0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new _(m.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(m.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(m.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class p0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(qe(n),this.ru=!1):b("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class m0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{xt(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.du.add(4),await ns(c),c.mu.set("Unknown"),c.du.delete(4),await br(c)}(this))})}),this.mu=new p0(s,r)}}async function br(t){if(xt(t))for(const e of t.wu)await e(!0)}async function ns(t){for(const e of t.wu)await e(!1)}function Oh(t,e){const n=D(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Vo(n)?jo(n):tn(n).No()&&Fo(n,e))}function Lh(t,e){const n=D(t),s=tn(n);n.fu.delete(e),s.No()&&Ph(n,e),n.fu.size===0&&(s.No()?s.$o():xt(n)&&n.mu.set("Unknown"))}function Fo(t,e){t.gu.Ot(e.targetId),tn(t).jo(e)}function Ph(t,e){t.gu.Ot(e),tn(t).Wo(e)}function jo(t){t.gu=new vw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),tn(t).start(),t.mu.ou()}function Vo(t){return xt(t)&&!tn(t).xo()&&t.fu.size>0}function xt(t){return D(t).du.size===0}function Mh(t){t.gu=void 0}async function g0(t){t.fu.forEach((e,n)=>{Fo(t,e)})}async function y0(t,e){Mh(t),Vo(t)?(t.mu.au(e),jo(t)):t.mu.set("Unknown")}async function v0(t,e,n){if(t.mu.set("Online"),e instanceof Ih&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ks(t,s)}else if(e instanceof Ss?t.gu.Kt(e):e instanceof _h?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(x.min()))try{const s=await xh(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(de.EMPTY_BYTE_STRING,c.snapshotVersion)),Ph(r,a);const u=new vt(c.target,a,1,c.sequenceNumber);Fo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){b("RemoteStore","Failed to raise snapshot:",s),await Ks(t,s)}}async function Ks(t,e,n){if(!Xn(e))throw e;t.du.add(1),await ns(t),t.mu.set("Offline"),n||(n=()=>xh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await br(t)})}function Uh(t,e){return e().catch(n=>Ks(t,n,e))}async function Sr(t){const e=D(t),n=nt(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;w0(e);)try{const r=await s0(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,E0(e,r)}catch(r){await Ks(e,r)}Fh(e)&&jh(e)}function w0(t){return xt(t)&&t.lu.length<10}function E0(t,e){t.lu.push(e);const n=nt(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Fh(t){return xt(t)&&!nt(t).xo()&&t.lu.length>0}function jh(t){nt(t).start()}async function _0(t){nt(t).tu()}async function I0(t){const e=nt(t);for(const n of t.lu)e.Yo(n.mutations)}async function T0(t,e,n){const s=t.lu.shift(),r=No.from(s,e,n);await Uh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Sr(t)}async function b0(t,e){e&&nt(t).Jo&&await async function(n,s){if(r=s.code,yw(r)&&r!==m.ABORTED){const i=n.lu.shift();nt(n).Oo(),await Uh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Sr(n)}var r}(t,e),Fh(t)&&jh(t)}async function gc(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const s=xt(n);n.du.add(3),await ns(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await br(n)}async function S0(t,e){const n=D(t);e?(n.du.delete(2),await br(n)):e||(n.du.add(2),await ns(n),n.mu.set("Unknown"))}function tn(t){return t.yu||(t.yu=function(e,n,s){const r=D(e);return r.nu(),new h0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:g0.bind(null,t),Zr:y0.bind(null,t),zo:v0.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Vo(t)?jo(t):t.mu.set("Unknown")):(await t.yu.stop(),Mh(t))})),t.yu}function nt(t){return t.pu||(t.pu=function(e,n,s){const r=D(e);return r.nu(),new d0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:_0.bind(null,t),Zr:b0.bind(null,t),Xo:I0.bind(null,t),Zo:T0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Sr(t)):(await t.pu.stop(),t.lu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class $o{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new $o(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bo(t,e){if(qe("AsyncQueue",`${e}: ${t}`),Xn(t))return new _(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ft{constructor(e){this.comparator=e?(n,s)=>e(n,s)||C.comparator(n.key,s.key):(n,s)=>C.comparator(n.key,s.key),this.keyedMap=hn(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new Ft(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ft;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class yc{constructor(){this.Iu=new Y(C.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):A():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gt{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gt(e,n,Ft.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class C0{constructor(){this.Eu=void 0,this.listeners=[]}}class k0{constructor(){this.queries=new en(e=>ih(e),vr),this.onlineState="Unknown",this.Au=new Set}}async function Vh(t,e){const n=D(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new C0),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Bo(o,`Initialization of query '${Di(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&qo(n)}async function $h(t,e){const n=D(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function A0(t,e){const n=D(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&qo(n)}function R0(t,e,n){const s=D(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function qo(t){t.Au.forEach(e=>{e.next()})}class Bh{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Gt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class qh{constructor(e){this.key=e}}class zh{constructor(e){this.key=e}}class x0{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=N(),this.mutatedKeys=N(),this.Ku=oh(e),this.Gu=new Ft(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new yc,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=wr(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let g=!1;d&&p?d.data.isEqual(p.data)?w!==v&&(s.track({type:3,doc:p}),g=!0):this.Wu(d,p)||(s.track({type:2,doc:p}),g=!0,(c&&this.Ku(p,c)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),g=!0):d&&!p&&(s.track({type:1,doc:d}),g=!0,(c||u)&&(a=!0)),g&&(p?(o=o.add(p),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const p=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return p(h)-p(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Gt(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new yc,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=N(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new zh(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new qh(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=N();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Gt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class D0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class N0{constructor(e){this.key=e,this.ec=!1}}class O0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new en(a=>ih(a),vr),this.ic=new Map,this.rc=new Set,this.oc=new Y(C.comparator),this.uc=new Map,this.cc=new Po,this.ac={},this.hc=new Map,this.lc=Ht.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function L0(t,e){const n=z0(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await r0(n.localStore,ze(e));n.isPrimaryClient&&Oh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await P0(n,e,s,a==="current",o.resumeToken)}return r}async function P0(t,e,n,s,r){t.dc=(h,d,p)=>async function(w,v,g,S){let k=v.view.zu(g);k.Mi&&(k=await fc(w.localStore,v.query,!1).then(({documents:q})=>v.view.zu(q,k)));const U=S&&S.targetChanges.get(v.targetId),P=v.view.applyChanges(k,w.isPrimaryClient,U);return wc(w,v.targetId,P.Yu),P.snapshot}(t,h,d,p);const i=await fc(t.localStore,e,!0),o=new x0(e,i.Wi),a=o.zu(i.documents),c=ts.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);wc(t,n,u.Yu);const l=new D0(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function M0(t,e){const n=D(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!vr(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Lh(n.remoteStore,s.targetId),Mi(n,s.targetId)}).catch(Jn)):(Mi(n,s.targetId),await Pi(n.localStore,s.targetId,!0))}async function U0(t,e,n){const s=H0(t);try{const r=await function(i,o){const a=D(i),c=W.now(),u=o.reduce((d,p)=>d.add(p.key),N());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=He(),w=N();return a.Ki.getEntries(d,u).next(v=>{p=v,p.forEach((g,S)=>{S.isValidDocument()||(w=w.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{l=v;const g=[];for(const S of o){const k=dw(S,l.get(S.key).overlayedDocument);k!=null&&g.push(new ot(S.key,k,Yl(k.value.mapValue),be.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(v=>{h=v;const g=v.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,v.batchId,g)})}).then(()=>({batchId:h.batchId,changes:ch(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Y(M)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await ss(s,r.changes),await Sr(s.remoteStore)}catch(r){const i=Bo(r,"Failed to persist write");n.reject(i)}}async function Hh(t,e){const n=D(t);try{const s=await t0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(j(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?j(o.ec):r.removedDocuments.size>0&&(j(o.ec),o.ec=!1))}),await ss(n,s,e)}catch(s){await Jn(s)}}function vc(t,e,n){const s=D(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=D(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&qo(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function F0(t,e,n){const s=D(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Y(C.comparator);o=o.insert(i,ae.newNoDocument(i,x.min()));const a=N().add(i),c=new Ir(x.min(),new Map,new Q(M),o,a);await Hh(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),zo(s)}else await Pi(s.localStore,e,!1).then(()=>Mi(s,e,n)).catch(Jn)}async function j0(t,e){const n=D(t),s=e.batch.batchId;try{const r=await e0(n.localStore,e);Kh(n,s,null),Gh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ss(n,r)}catch(r){await Jn(r)}}async function V0(t,e,n){const s=D(t);try{const r=await function(i,o){const a=D(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Kh(s,e,n),Gh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ss(s,r)}catch(r){await Jn(r)}}function Gh(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Kh(t,e,n){const s=D(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Mi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Wh(t,s)})}function Wh(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Lh(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),zo(t))}function wc(t,e,n){for(const s of n)s instanceof qh?(t.cc.addReference(s.key,e),$0(t,s)):s instanceof zh?(b("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Wh(t,s.key)):A()}function $0(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(b("SyncEngine","New document in limbo: "+n),t.rc.add(s),zo(t))}function zo(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new C(F.fromString(e)),s=t.lc.next();t.uc.set(s,new N0(n)),t.oc=t.oc.insert(n,s),Oh(t.remoteStore,new vt(ze(xo(n.path)),s,2,Co.ct))}}async function ss(t,e,n){const s=D(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){r.push(u);const l=Uo.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Xn(l))throw l;b("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,w)}}}(s.localStore,i))}async function B0(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const s=await Rh(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new _(m.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ss(n,s.Qi)}}function q0(t,e){const n=D(t),s=n.uc.get(e);if(s&&s.ec)return N().add(s.key);{let r=N();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function z0(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F0.bind(null,e),e.nc.zo=A0.bind(null,e.eventManager),e.nc.wc=R0.bind(null,e.eventManager),e}function H0(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V0.bind(null,e),e}class Ec{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Zw(this.persistence,new Jw,e.initialUser,this.serializer)}createPersistence(e){return new Qw(Mo.Fs,this.serializer)}createSharedClientState(e){return new o0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class G0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=B0.bind(null,this.syncEngine),await S0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new k0}createDatastore(e){const n=Tr(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new l0(r));var r;return function(i,o,a,c){return new f0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>vc(this.syncEngine,a,0),o=mc.D()?new mc:new a0,new m0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new O0(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=D(e);b("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ns(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class Qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):qe("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class K0{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=Gl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ni(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Rh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _c(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Q0(t);b("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>gc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gc(e.remoteStore,i)),t._onlineComponents=e}function W0(t){return t.name==="FirebaseError"?t.code===m.FAILED_PRECONDITION||t.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Q0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await ni(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!W0(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await ni(t,new Ec)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await ni(t,new Ec);return t._offlineComponents}async function Yh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await _c(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await _c(t,new G0))),t._onlineComponents}function Y0(t){return Yh(t).then(e=>e.syncEngine)}async function Jh(t){const e=await Yh(t),n=e.eventManager;return n.onListen=L0.bind(null,e.syncEngine),n.onUnlisten=M0.bind(null,e.syncEngine),n}function J0(t,e,n={}){const s=new Ve;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Qh({next:h=>{i.enqueueAndForget(()=>$h(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new _(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new _(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Bh(xo(o.path),u,{includeMetadataChanges:!0,xu:!0});return Vh(r,l)}(await Jh(t),t.asyncQueue,e,n,s)),s.promise}function X0(t,e,n={}){const s=new Ve;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Qh({next:h=>{i.enqueueAndForget(()=>$h(r,l)),h.fromCache&&a.source==="server"?c.reject(new _(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Bh(o,u,{includeMetadataChanges:!0,xu:!0});return Vh(r,l)}(await Jh(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Ic=new Map;/**
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
 */function Xh(t,e,n){if(!n)throw new _(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Z0(t,e,n,s){if(e===!0&&s===!0)throw new _(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tc(t){if(!C.isDocumentKey(t))throw new _(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bc(t){if(C.isDocumentKey(t))throw new _(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":A()}function Ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cr(t);throw new _(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Sc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Z0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class kr{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bv;switch(n.type){case"firstParty":return new Av(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ic.get(e);n&&(b("ComponentProvider","Removing Datastore"),Ic.delete(e),n.terminate())}(this),Promise.resolve()}}function eE(t,e,n,s={}){var r;const i=(t=Ne(t,kr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&$s("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=oe.MOCK_USER;else{o=qc(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new oe(c)}t._authCredentials=new Sv(new Hl(o,a))}}/**
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
 */class me{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}}class nn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nn(this.firestore,e,this._query)}}class Xe extends nn{constructor(e,n,s){super(e,n,xo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new C(e))}withConverter(e){return new Xe(this.firestore,e,this._path)}}function Ho(t,e,...n){if(t=$(t),Xh("collection","path",e),t instanceof kr){const s=F.fromString(e,...n);return bc(s),new Xe(t,null,s)}{if(!(t instanceof me||t instanceof Xe))throw new _(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(F.fromString(e,...n));return bc(s),new Xe(t.firestore,null,s)}}function Pn(t,e,...n){if(t=$(t),arguments.length===1&&(e=Gl.A()),Xh("doc","path",e),t instanceof kr){const s=F.fromString(e,...n);return Tc(s),new me(t,null,new C(s))}{if(!(t instanceof me||t instanceof Xe))throw new _(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(F.fromString(e,...n));return Tc(s),new me(t.firestore,t instanceof Xe?t.converter:null,new C(s))}}/**
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
 */class tE{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Dh(this,"async_queue_retry"),this.qc=()=>{const n=ti();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Ve;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Xn(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw qe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=$o.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&A()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class sn extends kr{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new tE,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zh(this),this._firestoreClient.terminate()}}function nE(t,e){const n=typeof t=="object"?t:zi(),s=typeof t=="string"?t:e||"(default)",r=Ys(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=$c("firestore");i&&eE(r,...i)}return r}function Go(t){return t._firestoreClient||Zh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zh(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new $v(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new K0(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(de.fromBase64String(e))}catch(n){throw new _(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ar{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ko{constructor(e){this._methodName=e}}/**
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
 */class Wo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}/**
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
 */const sE=/^__.*__$/;class rE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ot(e,this.data,this.fieldMask,n,this.fieldTransforms):new es(e,this.data,n,this.fieldTransforms)}}class ed{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ot(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function td(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Qo{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ws(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(td(this.Yc)&&sE.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class iE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Tr(e)}ua(e,n,s,r=!1){return new Qo({Yc:e,methodName:n,oa:s,path:ce.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rr(t){const e=t._freezeSettings(),n=Tr(t._databaseId);return new iE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nd(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);Yo("Data must be an object, but it was:",o,s);const a=sd(s,o);let c,u;if(i.merge)c=new Ee(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Ui(e,h,n);if(!o.contains(d))throw new _(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);id(l,d)||l.push(d)}c=new Ee(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new rE(new ge(a),c,u)}class xr extends Ko{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xr}}function oE(t,e,n,s){const r=t.ua(1,e,n);Yo("Data must be an object, but it was:",r,s);const i=[],o=ge.empty();Rt(s,(c,u)=>{const l=Jo(e,c,n);u=$(u);const h=r.na(l);if(u instanceof xr)i.push(l);else{const d=rs(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Ee(i);return new ed(o,a,r.fieldTransforms)}function aE(t,e,n,s,r,i){const o=t.ua(1,e,n),a=[Ui(e,s,n)],c=[r];if(i.length%2!=0)throw new _(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ui(e,i[d])),c.push(i[d+1]);const u=[],l=ge.empty();for(let d=a.length-1;d>=0;--d)if(!id(u,a[d])){const p=a[d];let w=c[d];w=$(w);const v=o.na(p);if(w instanceof xr)u.push(p);else{const g=rs(w,v);g!=null&&(u.push(p),l.set(p,g))}}const h=new Ee(u);return new ed(l,h,o.fieldTransforms)}function cE(t,e,n,s=!1){return rs(n,t.ua(s?4:3,e))}function rs(t,e){if(rd(t=$(t)))return Yo("Unsupported field value:",e,t),sd(t,e);if(t instanceof Ko)return function(n,s){if(!td(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=rs(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=$(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ow(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=W.fromDate(n);return{timestampValue:Gs(s.serializer,r)}}if(n instanceof W){const r=new W(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gs(s.serializer,r)}}if(n instanceof Wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kt)return{bytesValue:Th(s.serializer,n._byteString)};if(n instanceof me){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Lo(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Cr(n)}`)}(t,e)}function sd(t,e){const n={};return Kl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rt(t,(s,r)=>{const i=rs(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function rd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof W||t instanceof Wo||t instanceof Kt||t instanceof me||t instanceof Ko)}function Yo(t,e,n){if(!rd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Cr(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Ui(t,e,n){if((e=$(e))instanceof Ar)return e._internalPath;if(typeof e=="string")return Jo(t,e);throw Ws("Field path arguments must be of type string or ",t,!1,void 0,n)}const uE=new RegExp("[~\\*/\\[\\]]");function Jo(t,e,n){if(e.search(uE)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ar(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ws(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new _(m.INVALID_ARGUMENT,a+t+c)}function id(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class od{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lE extends od{data(){return super.data()}}function Xo(t,e){return typeof e=="string"?Jo(t,e):e instanceof Ar?e._internalPath:e._delegate._internalPath}/**
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
 */function hE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zo{}class dE extends Zo{}function ad(t,e,...n){let s=[];e instanceof Zo&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof ea).length,o=r.filter(a=>a instanceof Dr).length;if(i>1||i>0&&o>0)throw new _(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Dr extends dE{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Dr(e,n,s)}_apply(e){const n=this._parse(e);return ud(e._query,n),new nn(e.firestore,e.converter,Ri(e._query,n))}_parse(e){const n=Rr(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new _(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){kc(l,u);const d=[];for(const p of l)d.push(Cc(a,r,p));h={arrayValue:{values:d}}}else h=Cc(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||kc(l,u),h=cE(o,i,l,u==="in"||u==="not-in");return G.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cd(t,e,n){const s=e,r=Xo("where",t);return Dr._create(r,s,n)}class ea extends Zo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ea(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Se.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ud(i,a),i=Ri(i,a)}(e._query,n),new nn(e.firestore,e.converter,Ri(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cc(t,e,n){if(typeof(n=$(n))=="string"){if(n==="")throw new _(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rh(e)&&n.indexOf("/")!==-1)throw new _(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(F.fromString(n));if(!C.isDocumentKey(s))throw new _(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xa(t,new C(s))}if(n instanceof me)return Xa(t,n._key);throw new _(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cr(n)}.`)}function kc(t,e){if(!Array.isArray(t)||t.length===0)throw new _(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ud(t,e){if(e.isInequality()){const s=Do(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new _(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=sh(t);i!==null&&fE(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fE(t,e,n){if(!n.isEqual(e))throw new _(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pE{convertValue(e,n="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw A()}}convertObject(e,n){const s={};return Rt(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Wo(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ql(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xn(e));default:return null}}convertTimestamp(e){const n=tt(e);return new W(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=F.fromString(e);j(Ah(s));const r=new Dn(s.get(1),s.get(3)),i=new C(s.popFirst(5));return r.isEqual(n)||qe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ld(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class dn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hd extends od{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Xo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cs extends hd{data(e={}){return super.data(e)}}class mE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new dn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Cs(this._firestore,this._userDataWriter,s.key,s,new dn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new dn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new dn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:gE(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
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
 */function yE(t){t=Ne(t,me);const e=Ne(t.firestore,sn);return J0(Go(e),t._key).then(n=>EE(e,t,n))}class dd extends pE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}function fd(t){t=Ne(t,nn);const e=Ne(t.firestore,sn),n=Go(e),s=new dd(e);return hE(t._query),X0(n,t._query).then(r=>new mE(e,s,t,r))}function vE(t,e,n){t=Ne(t,me);const s=Ne(t.firestore,sn),r=ld(t.converter,e,n);return ta(s,[nd(Rr(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,be.none())])}function pd(t,e,n,...s){t=Ne(t,me);const r=Ne(t.firestore,sn),i=Rr(r);let o;return o=typeof(e=$(e))=="string"||e instanceof Ar?aE(i,"updateDoc",t._key,e,n,s):oE(i,"updateDoc",t._key,e),ta(r,[o.toMutation(t._key,be.exists(!0))])}function wE(t,e){const n=Ne(t.firestore,sn),s=Pn(t),r=ld(t.converter,e);return ta(n,[nd(Rr(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,be.exists(!1))]).then(()=>s)}function ta(t,e){return function(n,s){const r=new Ve;return n.asyncQueue.enqueueAndForget(async()=>U0(await Y0(n),s,r)),r.promise}(Go(t),e)}function EE(t,e,n){const s=n.docs.get(e._key),r=new dd(t);return new hd(t,r,e._key,s,new dn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Zt=n})(Qt),_t(new Ze("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new sn(new Cv(n.getProvider("auth-internal")),new xv(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ae(Ka,"3.10.0",t),Ae(Ka,"3.10.0","esm2017")})();const _E={apiKey:"AIzaSyBGEAyqCeN85wuSreyz7zFANUEdm-lsAQg",authDomain:"richi-coder.firebaseapp.com",projectId:"richi-coder",storageBucket:"richi-coder.appspot.com",messagingSenderId:"499101163141",appId:"1:499101163141:web:9ca61c8735be7e59c713ec"},na=Gc(_E),Ct=nE(na),Mn=to(na),IE=vy(),TE=async t=>{const e=await wE(Ho(Ct,"pageLoads"),t);window.localStorage.setItem("uSaLsFiAf",e.id),await pd(Pn(Ct,"pageLoads",e.id),{id:e.id})},bE=async(t,e)=>{const n=ad(Ho(Ct,"jobContacts"),cd("firebaseUser.uid","==",e.uid)),s=await fd(n);let r;if(s.docs.length>0){console.log("Document data:");const i=s.docs[0].data();window.localStorage.removeItem("uSaLsFiAf"),r=i}else console.log("No such document!"),SE(t,e),r={formLocation:!1};return r},SE=async(t,e)=>{const n=Pn(Ct,"pageLoads",t),s=await yE(n);console.log(s.data(),"ver");const r={firebaseUser:{accessToken:e.accessToken,displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,phoneNumber:e.phoneNumber,photoURL:e.photoURL,providerData:e.providerData,uid:e.uid,registrationTime:Date()},...s.data(),formData:wd};await vE(Pn(Ct,"jobContacts",s.data().id),r),window.localStorage.removeItem("uSaLsFiAf"),console.log("User created at jobContacts")},CE=async(t,e)=>{const n=ad(Ho(Ct,"jobContacts"),cd("firebaseUser.uid","==",t));return(await fd(n)).docs[0].id},md=()=>{Vp(Mn).then(()=>{window.localStorage.removeItem("uSaLsFiAf"),window.location.replace("/contact")}).catch(t=>{console.log("Error while signin out...")})},kE=async()=>{const t=yy(IE,"richishopfigmamobile-Rgpib2lfG-transformed 1.png");return await gy(t)};var f={},AE={get exports(){return f},set exports(t){f=t}},Nr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE=E,xE=Symbol.for("react.element"),DE=Symbol.for("react.fragment"),NE=Object.prototype.hasOwnProperty,OE=RE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LE={key:!0,ref:!0,__self:!0,__source:!0};function gd(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)NE.call(e,s)&&!LE.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:xE,type:t,key:i,ref:o,props:r,_owner:OE.current}}Nr.Fragment=DE;Nr.jsx=gd;Nr.jsxs=gd;(function(t){t.exports=Nr})(AE);const yd=E.createContext(),vd=E.createContext(),at=()=>E.useContext(yd),Dt=()=>E.useContext(vd),ve={name:"text",company:"text",position:"text",companyURL:"url",city:"text",email:"email",telephone:"tel",contactMethod:"text",contactDate:"date",phoneCode:"text"};let wd={name:"",company:"",position:"",companyURL:"",city:"",email:"",telephone:"",contactMethod:"",contactDate:"",resumeDownload:{downloadDate:""}};function PE({children:t}){const[e,n]=E.useState({...wd,formLocation:"/contact/",formComplete:!1,isLoading:!0,inputShow:"translate-x-[100vw] opacity-0",buttonsLoading:!1,phoneTest:!1,inputErrorMessage:"",signOutButtonClicked:!1,scheme:{"/contact/inputA":"name","/contact/inputB":"company","/contact/inputC":"position","/contact/inputD":"companyURL","/contact/inputE":"city","/contact/inputF":"email","/contact/inputG":"telephone","/contact/inputH":"contactMethod","/contact/inputI":"contactDate","/contact/inputJ":"phoneCode"}}),s={name(i){n({...e,name:i})},lastname(i){n({...e,lastname:i})},company(i){n({...e,company:i})},position(i){n({...e,position:i})},companyURL(i){n({...e,companyURL:i})},city(i){n({...e,city:i})},services(i){n({...e,services:i})},role(i){n({...e,role:i})},workMode(i){n({...e,workMode:i})},email(i){n({...e,email:i})},telephone(i){n({...e,telephone:i})},contactMethod(i){n({...e,contactMethod:i})},contactDate(i){n({...e,contactDate:i})},formLocation(i){n({...e,formLocation:i})},formComplete(i){n({...e,formComplete:i})},buttonsLoading(i){n({...e,buttonsLoading:i})},updateServerDataAtContext(i){n({...e,...i})},isLoading(i){n({...e,isLoading:i})},inputShow(i){n({...e,inputShow:i})}},r=(i,o)=>{s[i](o)};return f.jsx(yd.Provider,{value:e,children:f.jsx(vd.Provider,{value:r,children:t})})}/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Un(){return Un=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Un.apply(this,arguments)}var Qe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qe||(Qe={}));const Ac="popstate";function ME(t){t===void 0&&(t={});function e(s,r){let{pathname:i,search:o,hash:a}=s.location;return Fi("",{pathname:i,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(s,r){return typeof r=="string"?r:Ed(r)}return FE(e,n,null,t)}function X(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sa(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UE(){return Math.random().toString(36).substr(2,8)}function Rc(t,e){return{usr:t.state,key:t.key,idx:e}}function Fi(t,e,n,s){return n===void 0&&(n=null),Un({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?rn(e):e,{state:n,key:e&&e.key||s||UE()})}function Ed(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function rn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function FE(t,e,n,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,o=r.history,a=Qe.Pop,c=null,u=l();u==null&&(u=0,o.replaceState(Un({},o.state,{idx:u}),""));function l(){return(o.state||{idx:null}).idx}function h(){a=Qe.Pop;let g=l(),S=g==null?null:g-u;u=g,c&&c({action:a,location:v.location,delta:S})}function d(g,S){a=Qe.Push;let k=Fi(v.location,g,S);n&&n(k,g),u=l()+1;let U=Rc(k,u),P=v.createHref(k);try{o.pushState(U,"",P)}catch{r.location.assign(P)}i&&c&&c({action:a,location:v.location,delta:1})}function p(g,S){a=Qe.Replace;let k=Fi(v.location,g,S);n&&n(k,g),u=l();let U=Rc(k,u),P=v.createHref(k);o.replaceState(U,"",P),i&&c&&c({action:a,location:v.location,delta:0})}function w(g){let S=r.location.origin!=="null"?r.location.origin:r.location.href,k=typeof g=="string"?g:Ed(g);return X(S,"No window.location.(origin|href) available to create URL for href: "+k),new URL(k,S)}let v={get action(){return a},get location(){return t(r,o)},listen(g){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Ac,h),c=g,()=>{r.removeEventListener(Ac,h),c=null}},createHref(g){return e(r,g)},createURL:w,encodeLocation(g){let S=w(g);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:d,replace:p,go(g){return o.go(g)}};return v}var xc;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xc||(xc={}));function jE(t,e,n){n===void 0&&(n="/");let s=typeof e=="string"?rn(e):e,r=Td(s.pathname||"/",n);if(r==null)return null;let i=_d(t);VE(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=QE(i[a],XE(r));return o}function _d(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let r=(i,o,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(X(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let u=wt([s,c.relativePath]),l=n.concat(c);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_d(i.children,e,l,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:KE(u,i.index),routesMeta:l})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,o);else for(let c of Id(i.path))r(i,o,c)}),e}function Id(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let o=Id(s.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function VE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WE(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const $E=/^:\w+$/,BE=3,qE=2,zE=1,HE=10,GE=-2,Dc=t=>t==="*";function KE(t,e){let n=t.split("/"),s=n.length;return n.some(Dc)&&(s+=GE),e&&(s+=qE),n.filter(r=>!Dc(r)).reduce((r,i)=>r+($E.test(i)?BE:i===""?zE:HE),s)}function WE(t,e){return t.length===e.length&&t.slice(0,-1).every((s,r)=>s===e[r])?t[t.length-1]-e[e.length-1]:0}function QE(t,e){let{routesMeta:n}=t,s={},r="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],c=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",l=YE({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!l)return null;Object.assign(s,l.params);let h=a.route;i.push({params:s,pathname:wt([r,l.pathname]),pathnameBase:r_(wt([r,l.pathnameBase])),route:h}),l.pathnameBase!=="/"&&(r=wt([r,l.pathnameBase]))}return i}function YE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=JE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:s.reduce((u,l,h)=>{if(l==="*"){let d=a[h]||"";o=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return u[l]=ZE(a[h]||"",l),u},{}),pathname:i,pathnameBase:o,pattern:t}}function JE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sa(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(s.push(a),"/([^\\/]+)"));return t.endsWith("*")?(s.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),s]}function XE(t){try{return decodeURI(t)}catch(e){return sa(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ZE(t,e){try{return decodeURIComponent(t)}catch(n){return sa(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Td(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}function e_(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:r=""}=typeof t=="string"?rn(t):t;return{pathname:n?n.startsWith("/")?n:t_(n,e):e,search:i_(s),hash:o_(r)}}function t_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function si(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function s_(t,e,n,s){s===void 0&&(s=!1);let r;typeof t=="string"?r=rn(t):(r=Un({},t),X(!r.pathname||!r.pathname.includes("?"),si("?","pathname","search",r)),X(!r.pathname||!r.pathname.includes("#"),si("#","pathname","hash",r)),X(!r.search||!r.search.includes("#"),si("#","search","hash",r)));let i=t===""||r.pathname==="",o=i?"/":r.pathname,a;if(s||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}a=h>=0?e[h]:"/"}let c=e_(r,a),u=o&&o!=="/"&&o.endsWith("/"),l=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||l)&&(c.pathname+="/"),c}const wt=t=>t.join("/").replace(/\/\/+/g,"/"),r_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),i_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,o_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function a_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const u_=typeof Object.is=="function"?Object.is:c_,{useState:l_,useEffect:h_,useLayoutEffect:d_,useDebugValue:f_}=ii;function p_(t,e,n){const s=e(),[{inst:r},i]=l_({inst:{value:s,getSnapshot:e}});return d_(()=>{r.value=s,r.getSnapshot=e,ri(r)&&i({inst:r})},[t,s,e]),h_(()=>(ri(r)&&i({inst:r}),t(()=>{ri(r)&&i({inst:r})})),[t]),f_(s),s}function ri(t){const e=t.getSnapshot,n=t.value;try{const s=e();return!u_(n,s)}catch{return!0}}function m_(t,e,n){return e()}const g_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y_=!g_,v_=y_?m_:p_;"useSyncExternalStore"in ii&&(t=>t.useSyncExternalStore)(ii);const bd=E.createContext(null),Sd=E.createContext(null),ra=E.createContext(null),Or=E.createContext(null),is=E.createContext({outlet:null,matches:[]}),Cd=E.createContext(null);function ji(){return ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ji.apply(this,arguments)}function Lr(){return E.useContext(Or)!=null}function ct(){return Lr()||X(!1),E.useContext(Or).location}function os(){Lr()||X(!1);let{basename:t,navigator:e}=E.useContext(ra),{matches:n}=E.useContext(is),{pathname:s}=ct(),r=JSON.stringify(n_(n).map(a=>a.pathnameBase)),i=E.useRef(!1);return E.useEffect(()=>{i.current=!0}),E.useCallback(function(a,c){if(c===void 0&&(c={}),!i.current)return;if(typeof a=="number"){e.go(a);return}let u=s_(a,JSON.parse(r),s,c.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:wt([t,u.pathname])),(c.replace?e.replace:e.push)(u,c.state,c)},[t,e,r,s])}function w_(t,e){Lr()||X(!1);let{navigator:n}=E.useContext(ra),s=E.useContext(Sd),{matches:r}=E.useContext(is),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let c=ct(),u;if(e){var l;let v=typeof e=="string"?rn(e):e;a==="/"||(l=v.pathname)!=null&&l.startsWith(a)||X(!1),u=v}else u=c;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=jE(t,{pathname:d}),w=T_(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:wt([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:wt([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,s||void 0);return e&&w?E.createElement(Or.Provider,{value:{location:ji({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qe.Pop}},w):w}function E_(){let t=k_(),e=a_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:r},n):null,i)}class __ extends E.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(is.Provider,{value:this.props.routeContext},E.createElement(Cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I_(t){let{routeContext:e,match:n,children:s}=t,r=E.useContext(bd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(is.Provider,{value:e},s)}function T_(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let s=t,r=n?.errors;if(r!=null){let i=s.findIndex(o=>o.route.id&&r?.[o.route.id]);i>=0||X(!1),s=s.slice(0,Math.min(s.length,i+1))}return s.reduceRight((i,o,a)=>{let c=o.route.id?r?.[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=E.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=E.createElement(E_,null));let l=e.concat(s.slice(0,a+1)),h=()=>{let d=i;return c?d=u:o.route.Component?d=E.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),E.createElement(I_,{match:o,routeContext:{outlet:i,matches:l},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?E.createElement(__,{location:n.location,component:u,error:c,children:h(),routeContext:{outlet:null,matches:l}}):h()},null)}var Nc;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Nc||(Nc={}));var Qs;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Qs||(Qs={}));function b_(t){let e=E.useContext(Sd);return e||X(!1),e}function S_(t){let e=E.useContext(is);return e||X(!1),e}function C_(t){let e=S_(),n=e.matches[e.matches.length-1];return n.route.id||X(!1),n.route.id}function k_(){var t;let e=E.useContext(Cd),n=b_(Qs.UseRouteError),s=C_(Qs.UseRouteError);return e||((t=n.errors)==null?void 0:t[s])}function ye(t){X(!1)}function A_(t){let{basename:e="/",children:n=null,location:s,navigationType:r=Qe.Pop,navigator:i,static:o=!1}=t;Lr()&&X(!1);let a=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof s=="string"&&(s=rn(s));let{pathname:u="/",search:l="",hash:h="",state:d=null,key:p="default"}=s,w=E.useMemo(()=>{let v=Td(u,a);return v==null?null:{location:{pathname:v,search:l,hash:h,state:d,key:p},navigationType:r}},[a,u,l,h,d,p,r]);return w==null?null:E.createElement(ra.Provider,{value:c},E.createElement(Or.Provider,{children:n,value:w}))}function R_(t){let{children:e,location:n}=t,s=E.useContext(bd),r=s&&!e?s.router.routes:Vi(e);return w_(r,n)}var Oc;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Oc||(Oc={}));new Promise(()=>{});function Vi(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(s,r)=>{if(!E.isValidElement(s))return;let i=[...e,r];if(s.type===E.Fragment){n.push.apply(n,Vi(s.props.children,i));return}s.type!==ye&&X(!1),!s.props.index||!s.props.children||X(!1);let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Vi(s.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x_(t){let{basename:e,children:n,window:s}=t,r=E.useRef();r.current==null&&(r.current=ME({window:s,v5Compat:!0}));let i=r.current,[o,a]=E.useState({action:i.action,location:i.location});return E.useLayoutEffect(()=>i.listen(a),[i]),E.createElement(A_,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}var Lc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Lc||(Lc={}));var Pc;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pc||(Pc={}));function D_({inputProps:t}){const e=os(),{inputName:n,color:s,value:r,id:i,inputType:o,dataType:a,message:c}=t,u=at();let l;const[h,d]=E.useState({codeColor:"bg-blue-600",inputCodeColor:"text-black",enterCode:!1,recaptchaMessage:"Let' verify your phone!",loading:!1,buttonMessage:"Send code to my phone!",confirmationResult:"",buttonDisabled:!1,recaptchaResult:"",codeInputDisabled:!1});function p(g){d({...h,...g})}E.useEffect(()=>{console.log("USSSSSSEEEFEFFECT")},[]);function w(g){if(g.target.value.length>6){g.target.value=g.target.value.slice(0,6);return}p({codeColor:"bg-blue-700"}),g.target.value.length===6&&(console.log("TRYING AUTH",h.confirmationResult),p({codeInputDisabled:!0,inputCodeColor:"text-gray-300"}),h.confirmationResult.confirm(g.target.value).then(S=>{S.user,p({codeColor:"bg-green-600",inputCodeColor:"text-gray-300",codeInputDisabled:!0}),setTimeout(()=>{e("/contact/formend")},1e3)}).catch(S=>{if(console.log("TEST ERROR ARRAY",Object.values(S)),Object.values(S)[0]==="auth/code-expired"){p({codeColor:"bg-red-900",inputCodeColor:"text-black"}),window.location.replace("/contact/inputJ");return}if(Object.values(S)[0]==="auth/invalid-verification-code"){p({codeColor:"bg-red-700",codeInputDisabled:!1,inputCodeColor:"text-black"});return}if(Object.values(S)[0]==="auth/account-exists-with-different-credential"){p({codeColor:"bg-red-600"});return}}))}function v(){window.recaptchaVerifier=new vm("sign-in-button",{size:"invisible",callback:g=>{console.log("SUCCEEDED",g)},"expired-callback":()=>{console.log("FAILED")}},Mn),l=window.recaptchaVerifier,p({recaptchaMessage:"Sending code to your phone!",loading:!0,buttonDisabled:!0}),console.log("linking ..."),_m(Mn.currentUser,u.telephone,l).then(g=>{console.log("MESSAGE SENT!",g),p({enterCode:!0,recaptchaMessage:"Code sent!",confirmationResult:g,buttonMessage:"Waiting code!"})}).catch(g=>{console.log(Object.values(g),"ERRORRRCITO"),Object.values(g)[0]==="auth/too-many-requests"&&(p({recaptchaMessage:"You have made too many requests. Try later!",loading:!1,buttonDisabled:!0,buttonMessage:"Signing out!"}),setTimeout(()=>{md()},3e3)),Object.values(g)[0]==="auth/quota-exceeded"&&p({recaptchaMessage:"Service not available!",loading:!1,buttonMessage:"Try later!",buttonDisabled:!0}),Object.values(g)[0]==="auth/invalid-phone-number"&&p({recaptchaMessage:"Invalid phone number!",loading:!1,buttonMessage:"Incorrect number!",recaptchaResult:Object.values(g)[0]}),Object.values(g)[0]==="auth/invalid-app-credential"&&(p({recaptchaMessage:"You are doing wrong!",loading:!1,buttonMessage:"Try well!",recaptchaResult:Object.values(g)[0]}),window.location.replace("/contact/inputJ")),l.render().then(function(S){grecaptcha.reset(S)})})}return f.jsxs(f.Fragment,{children:[f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"text-xl w-full mb-1 text-center",children:h.recaptchaMessage}),f.jsx("button",{id:"sign-in-button",disabled:h.buttonDisabled,className:`px-4 py-2 rounded-md hover:bg-blue-600 bg-[#00407c] text-white text-2xl mb-2 ${h.buttonDisabled?"hidden":""}`,onClick:v,children:h.loading?"CARGANDO":h.buttonMessage})]}),h.enterCode||h.recaptchaResult==="auth/invalid-phone-number"?f.jsx(f.Fragment,{children:h.recaptchaResult!=="auth/invalid-phone-number"?f.jsxs("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 show w-[150%] py-10 flex flex-col items-center gap-10 rounded-xl ${h.codeColor} z-10`,children:[f.jsxs("div",{className:"pl-2 text-3xl text-center w-full animate-pulse",children:[c," ",f.jsx("br",{}),u.telephone," "]}),f.jsxs("div",{className:"flex flex-col items-center w-fit bg-white h-full rounded relative",children:[f.jsx("div",{className:"text-xl w-full mb-1 text-center text-white absolute top-0 left-1/2 -translate-y-full -translate-x-1/2",children:h.codeColor==="bg-red-700"?"Incorrect code!":h.codeColor==="bg-green-600"?"Succeeded!":h.codeColor==="bg-red-900"?"Code expired!":h.codeColor==="bg-red-600"?"Unavailable number...":"Enter the code!"}),f.jsx("input",{onChange:w,autoFocus:!0,className:`text-center text-[2rem] w-[12rem] h-2/3 bg-transparent m-0 p-0 border-none outline-none ${h.inputCodeColor}`,type:o,placeholder:`Enter ${n}`,disabled:h.codeInputDisabled})]})]}):f.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 show w-[120%] py-10 flex flex-col items-center gap-10  rounded-xl bg-blue-800",children:[f.jsx("div",{className:"text-xl w-full mb-1 text-center",children:"Invalid telephone. Go modify it!"}),f.jsx("button",{onClick:()=>e("/contact/"),className:"px-4 py-2 rounded-md hover:bg-blue-600 bg-[#00407c] text-white text-2xl",children:"MODIFY TEL!"})]})}):null]})}function Ce({inputName:t,color:e,value:n,id:s,inputType:r,dataType:i,message:o}){const a=at(),c=a.inputShow,u=Dt(),l=os(),h=ct(),d=h.pathname.split(""),p=a.formLocation.split(""),w=d[d.length-1],v=p[p.length-1];Object.values(a).slice(0);const S=a.formLocation==="/contact/"&&w!=="A"&&w!=="J"?!1:a[a.scheme[`/contact/input${String.fromCharCode(w.charCodeAt(0)-1)}`]]!=="";E.useEffect(()=>{if(a.phoneTest){l("/contact/formend");return}if(!S){setTimeout(()=>{l("/contact/")},3e3);return}w==="A"&&a.formLocation==="/contact/"?u("updateServerDataAtContext",{formLocation:h.pathname,inputShow:"translate-x-[100vw] opacity-0"}):h.pathname!=="/contact/"&&(w>v&&u("updateServerDataAtContext",{formLocation:h.pathname,inputShow:"translate-x-[100vw] opacity-0"}),v>w&&u("updateServerDataAtContext",{formLocation:h.pathname,inputShow:"-translate-x-[100vw] opacity-0"}))},[h,a.formComplete]);const k=P=>{P.key==="Enter"&&(document.querySelector(".fa-chevron-right")?.parentElement).click()},U=P=>{let{value:q}=P.target;(i==="string"&&s==="name"||s==="position"||s==="city")&&(/\d/.test(q)||!/[a-zA-Z\s{1}]$|^$/.test(q)||/^\s+|\s{2,}/.test(q))||u("updateServerDataAtContext",{[s]:q,inputErrorMessage:""})};return f.jsx("div",{className:"w-full h-1/3",children:S?f.jsx("div",{className:`${e} transition-transform ease-in-out duration-200 ${c} flex flex-col w-full sm:w-1/2 items-center justify-end mx-auto rounded-lg h-3/4 relative`,children:h.pathname!=="/contact/inputJ"?f.jsxs(f.Fragment,{children:[f.jsx("label",{htmlFor:s,className:"pl-2 text-3xl w-full mb-1",children:o}),f.jsx("input",{id:s,onChange:U,onKeyDown:k,className:"text-black pl-2 py-1 text-4xl w-full",type:r,value:n,placeholder:`Enter ${t}`,autoFocus:!0}),f.jsx("div",{className:"w-full text-center absolute bottom-0 left-1/2 translate-y-[110%] -translate-x-1/2 text-red-500 text-xl animate-pulse",children:a.inputErrorMessage})]}):f.jsx(D_,{inputProps:{inputName:t,color:e,value:n,id:s,inputType:r,dataType:i,message:o}})}):f.jsx("div",{className:"flex flex-col w-full h-3/4 items-center justify-center",children:f.jsx("div",{className:"text-4xl",children:"Please complete the form step by step!"})})})}function Mc({direction:t,user:e}){const n=os(),s=ct().pathname,r=s.split("");r[r.length-1];const i=s.split(""),o=at(),a=Dt(),c="J",u=s==="/contact/"&&t==="forward",[l,h]=E.useState(!0);let d=i[i.length-1];E.useEffect(()=>{s!=="/contact/"&&s!=="/contact/formend"&&o[o.scheme[s]]===""?h(!0):h(!1)},[s,o[o.scheme[s]]]);const p=()=>{if(s===`/contact/input${c}`){n("/contact/formend");return}n(s==="/contact/"?"/contact/inputA":`/contact/input${String.fromCharCode(d.charCodeAt(0)+1)}`)},w=()=>{const{formLocation:S,formComplete:k,isLoading:U,inputShow:P,scheme:q,buttonsLoading:Te,phoneTest:ut,inputErrorMessage:Le,signOutButtonClicked:as,...Pr}=o;CE(e.uid).then(async kd=>{await pd(Pn(Ct,"jobContacts",kd),{formData:Pr}),p()})},v=()=>{const S=o.scheme[s],k=o[o.scheme[s]];if(s!=="/contact/formend"){if(S==="name"&&!(/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(k)||/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(k)||/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(k)||/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(k))||S==="company"&&!(/^[\w]{3,}$/.test(k)||/^[\w]{3,}\s[\w]{3,}$/.test(k)||/^[\w]{3,}\s[\w]{3,}\s[\w]{3,}$/.test(k)||/^[\w]{3,}\s[\w]{3,}\s[\w]{3,}\s[\w]{3,}$/.test(k)||/^[\w]{3,}\s[\w]{3,}\s[\w]{3,}\s[\w]{3,}\s[\w]{3,}$/.test(k))||(S==="position"||S==="city")&&!(/^[a-zA-Z]{5,}$/.test(k)||/^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(k)||/^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(k)||/^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(k)||/^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(k))||ve[S]==="url"&&(console.log("URL ENTRANCE"),!/^[a-z\d.\-]{5,}\.[a-z]+$/.test(k))||ve[S]==="email"&&(console.log("EMAIL ENTRANCE"),!/^[\w\D]{2,}@[a-z\d]+\.[a-z]+$/.test(k))||ve[S]==="tel"&&(console.log("TELEPHONE ENTRANCE"),!/^[+]([\d]{2}|[\d]{1})[\d]{10}$/.test(k)))return null;w()}s==="/contact/"&&p()},g=()=>{t==="backward"&&(s==="/contact/inputA"?(a("updateServerDataAtContext",{inputShow:"translate-x-[100vw]",buttonsLoading:!1}),setTimeout(()=>{n("/contact/")},500)):(a("updateServerDataAtContext",{inputShow:"translate-x-[100vw]",buttonsLoading:!0}),setTimeout(()=>{n(`/contact/input${String.fromCharCode(d.charCodeAt(0)-1)}`)},500))),t==="forward"&&(s==="/contact/"?(a("updateServerDataAtContext",{inputShow:"opacity-0",buttonsLoading:!0}),p()):(a("updateServerDataAtContext",{inputShow:"-translate-x-[100vw]",buttonsLoading:!0}),v()===null&&setTimeout(()=>{a("updateServerDataAtContext",{inputShow:"",buttonsLoading:!1,inputErrorMessage:`Invalid ${o.scheme[s]==="companyURL"?"website URL":o.scheme[s]==="telephone"?"number. Please use this format: +001234567890":o.scheme[s]}`})},1e3)))};return f.jsx(f.Fragment,{children:s==="/contact/"&&t==="backward"?null:f.jsx(f.Fragment,{children:s==="/contact/inputJ"&&t==="forward"?null:f.jsx("button",{onClick:g,className:u?"bg-blue-700 px-6 py-3 rounded-lg sm:hover:bg-blue-300 font-bold  transition-all ladder":`transition-all ${!l&&t==="forward"?"sm:hover:scale-110":""} ${t==="backward"?"sm:hover:scale-110":""}`,disabled:t==="backward"?!1:l,children:u?"Let's go!":f.jsxs("div",{className:"flex flex-row items-center gap-5 text-4xl",children:[f.jsx("div",{className:t==="backward"?"order-2 -mt-[3%]":"-mt-[3%]",children:t==="forward"?"Next":"Back"}),f.jsx("i",{className:t==="forward"?"fa fa-chevron-right":"fa fa-chevron-left"})]})})})})}function N_({user:t}){const e=ct().pathname,n=at();Object.values(n);const s=!(n.phoneTest||e==="/contact/formend"),r=e.split(""),i=r[r.length-2],o=!(e!=="/contact/"&&n.formLocation==="/contact/"&&i!=="A");return console.log(e,"locooocation"),f.jsx(f.Fragment,{children:n.buttonsLoading?f.jsx("div",{className:"w-full flex flex-col items-center",children:f.jsxs("div",{className:"lds-ring",children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}):f.jsx(f.Fragment,{children:o?f.jsx("div",{className:`text-5xl transition-all ${e==="/contact/"?"show":"showButton"} flex-grow relative`,children:s?f.jsxs("div",{className:"flex flex-row items-center gap-7 justify-center sm:justify-around w-1/2 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:[f.jsx(Mc,{direction:"backward"}),f.jsx(Mc,{direction:"forward",user:t})]}):null}):null})})}function O_(){to();const t=ct().pathname,e=at();Dt();const n=()=>{md()};return E.useEffect(()=>{console.log("DOING NOTHING")},[e.formComplete]),f.jsx("div",{className:"show flex-grow flex flex-col items-center justify-center",children:t==="/contact/"||t==="/contact/formend"?f.jsx("button",{onClick:n,className:"bg-purple-700  text-white font-bold py-2 px-4 rounded text-2xl transition-all ladder",children:"Use another account"}):null})}function L_({user:t}){const e=ct().pathname,n=os(),s=at(),r=Dt();Object.values(s);const i=s.phoneTest!==!0,[o,a]=E.useState("Please let me know how to contact you!");return window.addEventListener("popstate",c=>{n("/contact/")}),E.useEffect(()=>{if(r("formLocation",e),s.phoneTest){setTimeout(()=>{n("/contact/formend")},7e3);return}else if(s.formComplete){a("Please verify your phone number! Redirecting!"),setTimeout(()=>{n("/contact/inputJ")},4e3);return}window.addEventListener("popstate",()=>{n("/contact/")})},[s.formComplete]),f.jsx("div",{className:"w-full text-2xl text-center py-8 show",children:i?f.jsx("div",{children:o}):f.jsxs(f.Fragment,{children:[f.jsx("div",{children:"You already contacted me"}),f.jsx("br",{}),f.jsx("div",{children:"I hope to talk to you soon!"})]})})}function P_(){E.useRef();const t=os(),e=at(),n=Dt(),s=ct(),r=Object.values(e);r.slice(0),r.indexOf("");const[i,o]=E.useState(!0);E.useEffect(()=>{n("formLocation",s.pathname),yu(Mn,c=>{setTimeout(()=>{o(!1)},2e3),c.phoneNumber===null&&setTimeout(()=>{t("/contact/")},3e3)}),window.addEventListener("popstate",c=>{t("/contact/")})},[e.formLocation]);function a(){kE().then(c=>{console.log("Succesful"),fetch(c,{method:"GET",referrerPolicy:"no-referrer"}).then(u=>u.blob()).then(u=>{const l=document.createElement("a");l.setAttribute("download","richiPDF.png");const h=URL.createObjectURL(u);l.href=h,l.setAttribute("target","_blank"),l.click(),URL.revokeObjectURL(h)}).catch(u=>alert("Download failed...!"))}).catch(c=>console.log("ERROR",c))}return f.jsx(f.Fragment,{children:i?f.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center",children:f.jsxs("div",{className:"lds-ring",children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}):f.jsx("div",{className:"w-full text-5xl show text-center py-2",children:e.phoneTest?f.jsxs("div",{className:"show flex flex-col items-center justify-center gap-5",children:[f.jsx("div",{children:"Thank you very much!"}),f.jsx("button",{className:"px-6 py-3 bg-blue-500 transition-all ladder rounded-lg",onClick:a,children:"DOWNLOAD RESUME"})]}):f.jsx("div",{className:"show",children:"Please complete the form!"})})})}const M_=()=>{U_()},U_=async()=>{let e=await(await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=156366be41c444e2a45d6a3126fd9855")).json();const n={registerTime:Date(),pageLoad:{...e,navigatorLanguage:navigator.language}};TE(n)};function F_(){const t=to(na),e=Dt(),[n,s]=E.useState(""),[r,i]=E.useState(""),[o,a]=E.useState("");let c=function(d){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(d)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(d.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);E.useEffect(()=>{s("ladderAnim"),setTimeout(()=>{i("ladderAnim"),setTimeout(()=>{a("ladderAnim")},500)},500)},[]);const u=d=>{c?Om(t,d).then(p=>{console.log("Signed via Mobile"),p.user,alert("Signed via Mobile"),e("isLoading",!0),window.location.replace("/contact/")}).catch(p=>{alert(p)}):km(t,d).then(p=>{console.log("Signed via Desktop"),p.user,e("isLoading",!0),window.location.replace("/contact/")}).catch(p=>{console.log("ERROR:",p)})},l=()=>{const d=new Pe;u(d)},h=()=>{const d=new Me;u(d)};return f.jsxs("div",{className:"text-2xl md:text-3xl flex-grow lg:flex-grow-0 flex flex-col lg:flex-row items-center justify-around lg:justify-center lg:gap-[7vw] w-2/3 md:w-full lg:pt-28",children:[f.jsx("button",{onClick:l,className:`bg-blue-700 hover:bg-blue-500 transition-all text-white font-bold py-3 w-52 rounded opacity-0 ladder ${n} jump`,children:"Google"}),f.jsx("button",{onClick:h,className:`bg-gray-700 hover:bg-gray-500 transition-all text-white font-bold py-3 w-52 rounded opacity-0 ladder ${r}`,children:"Github"}),f.jsx("button",{onClick:h,disabled:!0,className:`bg-green-500 hover:bg-green-500 transition-all text-white font-bold py-3 w-52 rounded opacity-0 ladder ${o}`,children:"Microsoft"})]})}function j_(){return f.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-around lg:justify-center relative",children:[f.jsxs("div",{className:"absolute top-0 -translate-y-full text-5xl flex flex-col items-center show",children:[f.jsx("p",{children:"Contact"}),f.jsxs("h1",{className:"p-0 m-0 contactFormLogo",style:{fontFamily:"Orbitron"},children:["richi",f.jsx("span",{className:"text-gradient",children:"Coder"})]})]}),f.jsx("div",{className:"text-2xl show",children:"Please select an access method"}),f.jsx(F_,{})]})}function V_(){const t=at(),e=Dt(),[n,s]=E.useState(null),[r,i]=E.useState("block"),a=(()=>{try{const u=window.localStorage.getItem("uSaLsFiAf");return u||null}catch(u){return u}})();E.useEffect(()=>{console.log("Checking AUTH"),yu(Mn,u=>{u?(u.uid,s(u),bE(a,u).then(l=>{l.formData!==!1&&l.formData!==null&&l.formData!==void 0?Object.values(l.formData).every(d=>d!=="")&&u.phoneNumber!==null?(console.log("USER READY"),e("updateServerDataAtContext",{...l.formData,formComplete:!0,isLoading:!1,inputShow:"x",buttonsLoading:!1,phoneTest:!0})):(console.log("USER NOT READY"),e("updateServerDataAtContext",{...l.formData,isLoading:!1,inputShow:"x",buttonsLoading:!1,phoneTest:!1})):(console.log("DATA NOT CREATED YET!"),setTimeout(()=>{e("updateServerDataAtContext",{formComplete:!1,isLoading:!1,inputShow:"x",buttonsLoading:!1})},1e3))})):(console.log("user Offline!"),setTimeout(()=>{e("isLoading",!1)},500)),!a&&!u&&M_()})},[t.formLocation]);const c=u=>i("hidden");return f.jsxs("div",{className:"w-full h-full relative text-white z-10 bg-black",children:[f.jsx("div",{className:"h-1/3 w-full relative",children:n?f.jsxs("div",{className:"user-details h-full w-full flex flex-col items-center justify-around show",children:[f.jsxs("div",{className:"h-3/4 aspect-square relative object-cover rounded-full",children:[f.jsx("img",{onLoad:c,src:n.photoURL,alt:n.displayName,className:"rounded-full h-5/6 absolute bottom-0 left-1/2 -translate-x-1/2"}),f.jsx("img",{src:"/userProfile.png",alt:n.displayName,className:`rounded-full h-5/6 absolute bottom-0 left-1/2 -translate-x-1/2 z-10 ${r}`})]}),f.jsx("div",{className:"h-1/4 flex flex-col justify-center",children:t.formLocation==="/contact/"?f.jsxs("div",{className:"text-green-500 text-md",children:["Hello ",n.displayName,"!"]}):null})]}):null}),t.isLoading===!0?f.jsx("div",{className:"w-full h-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 text-white",children:f.jsxs("div",{className:"lds-ring",children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}):f.jsx("div",{className:"h-2/3 flex flex-col",children:n?f.jsxs(x_,{children:[f.jsx("br",{}),f.jsxs(R_,{children:[f.jsx(ye,{path:"/contact/",element:f.jsx(L_,{user:n})}),f.jsx(ye,{path:"/contact/inputA",element:f.jsx(Ce,{message:"Your full name",id:"name",inputName:"full name",color:"bg-gradient-to-r from-indigo-500",value:t.name,inputType:ve.name,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputB",element:f.jsx(Ce,{message:"The company you work in",id:"company",inputName:"company",color:"bg-gradient-to-r from-blue-500",value:t.company,inputType:ve.company,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputC",element:f.jsx(Ce,{message:`Your position at ${t.company}`,id:"position",inputName:"your position",color:"bg-gradient-to-r from-purple-500",value:t.position,inputType:ve.position,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputD",element:f.jsx(Ce,{message:`${t.company} website`,id:"companyURL",inputName:"the company URL",color:"bg-gradient-to-r from-indigo-500",value:t.companyURL,inputType:ve.companyURL,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputE",element:f.jsx(Ce,{message:`${t.company} is located in`,id:"city",inputName:"a city",color:"bg-gradient-to-r from-purple-500",value:t.city,inputType:ve.city,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputF",element:f.jsx(Ce,{message:`Your email at ${t.company}`,id:"email",inputName:`email@${t.company}.com`,color:"bg-gradient-to-r from-indigo-500",value:t.email,inputType:ve.email,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputG",element:f.jsx(Ce,{message:"Your telephone (with prefix)",id:"telephone",inputName:"a valid phone number",color:"bg-gradient-to-r from-indigo-500",value:t.telephone,inputType:ve.telephone,dataType:"number"})}),f.jsx(ye,{path:"/contact/inputH",element:f.jsx(Ce,{message:"How should I contact you?",id:"contactMethod",inputName:"How",color:"bg-gradient-to-r from-blue-500",value:t.contactMethod,inputType:ve.contactMethod,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputI",element:f.jsx(Ce,{message:"When should I contact you?",id:"contactDate",inputName:"When",color:"bg-gradient-to-r from-purple-500",value:t.contactDate,inputType:ve.contactDate,dataType:"string"})}),f.jsx(ye,{path:"/contact/inputJ",element:f.jsx(Ce,{message:"Enter code sent to",id:"phoneTest",inputName:"Code",color:"bg-gradient-to-r from-indigo-500",value:"nuuull",inputType:ve.phoneCode,dataType:"number"})}),f.jsx(ye,{path:"/contact/formend",element:f.jsx(P_,{})})]}),f.jsx(N_,{user:n}),f.jsx(O_,{})]}):f.jsx(j_,{})}),f.jsxs("svg",{viewBox:"0 0 1024 1024",className:"absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2","aria-hidden":"true",children:[f.jsx("circle",{cx:"512",cy:"512",r:"512",fill:"url(#759c1415-0410-454c-8f7c-9a820de03641)",fillOpacity:"0.7"}),f.jsx("defs",{children:f.jsxs("radialGradient",{id:"759c1415-0410-454c-8f7c-9a820de03641",children:[f.jsx("stop",{stopColor:"#7775D6"}),f.jsx("stop",{offset:"1",stopColor:"blue"})]})})]})]})}function G_(){return f.jsx(PE,{children:f.jsx(V_,{})})}export{G_ as default};
