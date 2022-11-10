import{o as R}from"./iframe.aac892c2.js";function F(l,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in l)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(l,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var a={};Object.defineProperty(a,"__esModule",{value:!0});var w=a.spyOn=I=a.mocked=S=a.fn=E=a.ModuleMocker=void 0;function h(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}const d="mockConstructor",C=/[\s!-\/:-@\[-`{-~]/,A=new RegExp(C.source,"g"),D=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function x(l,e){let t;switch(e){case 1:t=function(r){return l.apply(this,arguments)};break;case 2:t=function(r,o){return l.apply(this,arguments)};break;case 3:t=function(r,o,i){return l.apply(this,arguments)};break;case 4:t=function(r,o,i,s){return l.apply(this,arguments)};break;case 5:t=function(r,o,i,s,n){return l.apply(this,arguments)};break;case 6:t=function(r,o,i,s,n,c){return l.apply(this,arguments)};break;case 7:t=function(r,o,i,s,n,c,u){return l.apply(this,arguments)};break;case 8:t=function(r,o,i,s,n,c,u,f){return l.apply(this,arguments)};break;case 9:t=function(r,o,i,s,n,c,u,f,p){return l.apply(this,arguments)};break;default:t=function(){return l.apply(this,arguments)};break}return t}function O(l){return Object.prototype.toString.apply(l).slice(8,-1)}function G(l){const e=O(l);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"?"function":Array.isArray(l)?"array":e==="Object"?"object":e==="Number"||e==="String"||e==="Boolean"||e==="Symbol"?"constant":e==="Map"||e==="WeakMap"||e==="Set"?"collection":e==="RegExp"?"regexp":l===void 0?"undefined":l===null?"null":null}function V(l,e){if(e==="arguments"||e==="caller"||e==="callee"||e==="name"||e==="length"){const t=O(l);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"}return e==="source"||e==="global"||e==="ignoreCase"||e==="multiline"?O(l)==="RegExp":!1}class v{constructor(e){h(this,"_environmentGlobal",void 0),h(this,"_mockState",void 0),h(this,"_mockConfigRegistry",void 0),h(this,"_spyState",void 0),h(this,"_invocationCallCounter",void 0),this._environmentGlobal=e,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(e){if(!e)return[];const t=new Set,r=this._environmentGlobal.Object.prototype,o=this._environmentGlobal.Function.prototype,i=this._environmentGlobal.RegExp.prototype,s=Object.prototype,n=Function.prototype,c=RegExp.prototype;for(;e!=null&&e!==r&&e!==o&&e!==i&&e!==s&&e!==n&&e!==c;){const u=Object.getOwnPropertyNames(e);for(let f=0;f<u.length;f++){const p=u[f];if(!V(e,p)){const k=Object.getOwnPropertyDescriptor(e,p);(k!==void 0&&!k.get||e.__esModule)&&t.add(p)}}e=Object.getPrototypeOf(e)}return Array.from(t)}_ensureMockConfig(e){let t=this._mockConfigRegistry.get(e);return t||(t=this._defaultMockConfig(),this._mockConfigRegistry.set(e,t)),t}_ensureMockState(e){let t=this._mockState.get(e);return t||(t=this._defaultMockState(),this._mockState.set(e,t)),t.calls.length>0&&(t.lastCall=t.calls[t.calls.length-1]),t}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(e,t){if(e.type==="object")return new this._environmentGlobal.Object;if(e.type==="array")return new this._environmentGlobal.Array;if(e.type==="regexp")return new this._environmentGlobal.RegExp("");if(e.type==="constant"||e.type==="collection"||e.type==="null"||e.type==="undefined")return e.value;if(e.type==="function"){const r=e.members&&e.members.prototype&&e.members.prototype.members||{},o=this._getSlots(r),i=this,s=x(function(...c){const u=i._ensureMockState(n),f=i._ensureMockConfig(n);u.instances.push(this),u.calls.push(c);const p={type:"incomplete",value:void 0};u.results.push(p),u.invocationCallOrder.push(i._invocationCallCounter++);let k,M,y=!1;try{k=(()=>{if(this instanceof n){o.forEach(g=>{if(r[g].type==="function"){const P=this[g];this[g]=i.generateFromMetadata(r[g]),this[g]._protoImpl=P}});const b=f.specificMockImpls.length?f.specificMockImpls.shift():f.mockImpl;return b&&b.apply(this,arguments)}let m=f.specificMockImpls.shift();if(m===void 0&&(m=f.mockImpl),m)return m.apply(this,arguments);if(n._protoImpl)return n._protoImpl.apply(this,arguments)})()}catch(m){throw M=m,y=!0,m}finally{p.type=y?"throw":"return",p.value=y?M:k}return k},e.length||0),n=this._createMockFunction(e,s);return n._isMockFunction=!0,n.getMockImplementation=()=>this._ensureMockConfig(n).mockImpl,typeof t=="function"&&this._spyState.add(t),this._mockState.set(n,this._defaultMockState()),this._mockConfigRegistry.set(n,this._defaultMockConfig()),Object.defineProperty(n,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(n),set:c=>this._mockState.set(n,c)}),n.mockClear=()=>(this._mockState.delete(n),n),n.mockReset=()=>(n.mockClear(),this._mockConfigRegistry.delete(n),n),n.mockRestore=()=>(n.mockReset(),t?t():void 0),n.mockReturnValueOnce=c=>n.mockImplementationOnce(()=>c),n.mockResolvedValueOnce=c=>n.mockImplementationOnce(()=>Promise.resolve(c)),n.mockRejectedValueOnce=c=>n.mockImplementationOnce(()=>Promise.reject(c)),n.mockReturnValue=c=>n.mockImplementation(()=>c),n.mockResolvedValue=c=>n.mockImplementation(()=>Promise.resolve(c)),n.mockRejectedValue=c=>n.mockImplementation(()=>Promise.reject(c)),n.mockImplementationOnce=c=>(this._ensureMockConfig(n).specificMockImpls.push(c),n),n.mockImplementation=c=>{const u=this._ensureMockConfig(n);return u.mockImpl=c,n},n.mockReturnThis=()=>n.mockImplementation(function(){return this}),n.mockName=c=>{if(c){const u=this._ensureMockConfig(n);u.mockName=c}return n},n.getMockName=()=>this._ensureMockConfig(n).mockName||"jest.fn()",e.mockImpl&&n.mockImplementation(e.mockImpl),n}else{const r=e.type||"undefined type";throw new Error("Unrecognized type "+r)}}_createMockFunction(e,t){let r=e.name;if(!r)return t;const o="bound ";let i="";if(r&&r.startsWith(o))do r=r.substring(o.length),i=".bind(null)";while(r&&r.startsWith(o));if(r===d)return t;(D.has(r)||/^\d/.test(r))&&(r="$"+r),C.test(r)&&(r=r.replace(A,"$"));const s="return function "+r+"() {return "+d+".apply(this,arguments);}"+i;return new this._environmentGlobal.Function(d,s)(t)}_generateMock(e,t,r){const o=this._makeComponent(e);return e.refID!=null&&(r[e.refID]=o),this._getSlots(e.members).forEach(i=>{const s=e.members&&e.members[i]||{};s.ref!=null?t.push(function(n){return()=>o[i]=r[n]}(s.ref)):o[i]=this._generateMock(s,t,r)}),e.type!=="undefined"&&e.type!=="null"&&o.prototype&&typeof o.prototype=="object"&&(o.prototype.constructor=o),o}generateFromMetadata(e){const t=[],r={},o=this._generateMock(e,t,r);return t.forEach(i=>i()),o}getMetadata(e,t){const r=t||new Map,o=r.get(e);if(o!=null)return{ref:o};const i=G(e);if(!i)return null;const s={type:i};if(i==="constant"||i==="collection"||i==="undefined"||i==="null")return s.value=e,s;i==="function"&&(s.name=e.name,e._isMockFunction===!0&&(s.mockImpl=e.getMockImplementation())),s.refID=r.size,r.set(e,s.refID);let n=null;return i!=="array"&&this._getSlots(e).forEach(c=>{if(i==="function"&&e._isMockFunction===!0&&c.match(/^mock/))return;const u=this.getMetadata(e[c],r);u&&(n||(n={}),n[c]=u)}),n&&(s.members=n),s}isMockFunction(e){return!!e&&e._isMockFunction===!0}fn(e){const t=e?e.length:0,r=this._makeComponent({length:t,type:"function"});return e&&r.mockImplementation(e),r}spyOn(e,t,r){if(r)return this._spyOnProperty(e,t,r);if(typeof e!="object"&&typeof e!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(e)+" given");const o=e[t];if(!this.isMockFunction(o)){if(typeof o!="function")throw new Error("Cannot spy the "+t+" property because it is not a function; "+this._typeOf(o)+" given instead");const i=Object.prototype.hasOwnProperty.call(e,t);let s=Object.getOwnPropertyDescriptor(e,t),n=Object.getPrototypeOf(e);for(;!s&&n!==null;)s=Object.getOwnPropertyDescriptor(n,t),n=Object.getPrototypeOf(n);let c;if(s&&s.get){const u=s.get;c=this._makeComponent({type:"function"},()=>{s.get=u,Object.defineProperty(e,t,s)}),s.get=()=>c,Object.defineProperty(e,t,s)}else c=this._makeComponent({type:"function"},()=>{i?e[t]=o:delete e[t]}),e[t]=c;c.mockImplementation(function(){return o.apply(this,arguments)})}return e[t]}_spyOnProperty(e,t,r="get"){if(typeof e!="object"&&typeof e!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(e)+" given");if(!e)throw new Error("spyOn could not find an object to spy upon for "+t);if(!t)throw new Error("No property name supplied");let o=Object.getOwnPropertyDescriptor(e,t),i=Object.getPrototypeOf(e);for(;!o&&i!==null;)o=Object.getOwnPropertyDescriptor(i,t),i=Object.getPrototypeOf(i);if(!o)throw new Error(t+" property does not exist");if(!o.configurable)throw new Error(t+" is not declared configurable");if(!o[r])throw new Error("Property "+t+" does not have access type "+r);const s=o[r];if(!this.isMockFunction(s)){if(typeof s!="function")throw new Error("Cannot spy the "+t+" property because it is not a function; "+this._typeOf(s)+" given instead");o[r]=this._makeComponent({type:"function"},()=>{o[r]=s,Object.defineProperty(e,t,o)}),o[r].mockImplementation(function(){return s.apply(this,arguments)})}return Object.defineProperty(e,t,o),o[r]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(e=>e()),this._spyState=new Set}_typeOf(e){return e==null?""+e:typeof e}mocked(e,t=!1){return e}}var E=a.ModuleMocker=v;const _=new v(R),W=_.fn.bind(_);var S=a.fn=W;const j=_.spyOn.bind(_);w=a.spyOn=j;const T=_.mocked.bind(_);var I=a.mocked=T;const z=F({__proto__:null,get spyOn(){return w},get mocked(){return I},get fn(){return S},get ModuleMocker(){return E},default:a},[a]);export{E as M,z as m};
//# sourceMappingURL=index.2599347d.js.map
