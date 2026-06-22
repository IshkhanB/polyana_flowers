const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B7YkLShC.js","./error-404.C-Ezrlz-.css","./CpT7LBSK.js","./error-500.DBWf9FGj.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Tt={},zs=[],ei=()=>{},Qd=()=>!1,Wr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),aa=t=>t.startsWith("onUpdate:"),Qt=Object.assign,jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},km=Object.prototype.hasOwnProperty,ht=(t,e)=>km.call(t,e),je=Array.isArray,Vs=t=>Xr(t)==="[object Map]",eh=t=>Xr(t)==="[object Set]",Yu=t=>Xr(t)==="[object Date]",qe=t=>typeof t=="function",wt=t=>typeof t=="string",Rn=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",Yc=t=>(pt(t)||qe(t))&&qe(t.then)&&qe(t.catch),th=Object.prototype.toString,Xr=t=>th.call(t),Hm=t=>Xr(t).slice(8,-1),nh=t=>Xr(t)==="[object Object]",la=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Gm=/-\w/g,pn=ca(t=>t.replace(Gm,e=>e.slice(1).toUpperCase())),zm=/\B([A-Z])/g,ys=ca(t=>t.replace(zm,"-$1").toLowerCase()),ua=ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=ca(t=>t?`on${ua(t)}`:""),Yn=(t,e)=>!Object.is(t,e),Ca=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ih=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Vm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Wm=t=>{const e=wt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ku;const fa=()=>Ku||(Ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sr(t){if(je(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=wt(i)?jm(i):sr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(t)||pt(t))return t}const Xm=/;(?![^(]*\))/g,$m=/:([^]+)/,qm=/\/\*[^]*?\*\//g;function jm(t){const e={};return t.replace(qm,"").split(Xm).forEach(n=>{if(n){const i=n.split($m);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Si(t){let e="";if(wt(t))e=t;else if(je(t))for(let n=0;n<t.length;n++){const i=Si(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ym(t){if(!t)return null;let{class:e,style:n}=t;return e&&!wt(e)&&(t.class=Si(e)),n&&(t.style=sr(n)),t}const Km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zm=qc(Km);function sh(t){return!!t||t===""}function Jm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Kc(t[i],e[i]);return n}function Kc(t,e){if(t===e)return!0;let n=Yu(t),i=Yu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Rn(t),i=Rn(e),n||i)return t===e;if(n=je(t),i=je(e),n||i)return n&&i?Jm(t,e):!1;if(n=pt(t),i=pt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Kc(t[o],e[o]))return!1}}return String(t)===String(e)}const rh=t=>!!(t&&t.__v_isRef===!0),kt=t=>wt(t)?t:t==null?"":je(t)||pt(t)&&(t.toString===th||!qe(t.toString))?rh(t)?kt(t.value):JSON.stringify(t,oh,2):String(t),oh=(t,e)=>rh(e)?oh(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Pa(i,r)+" =>"]=s,n),{})}:eh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pa(n))}:Rn(e)?Pa(e):pt(e)&&!je(e)&&!nh(e)?String(e):e,Pa=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let zt;class ah{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&zt&&(zt.active?(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){if(this._on>0&&--this._on===0){if(zt===this)zt=this.prevScope;else{let e=zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qm(t){return new ah(t)}function Zc(){return zt}function eg(t,e=!1){zt&&zt.cleanups.push(t)}let bt;const La=new WeakSet;class lh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&(zt.active?zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zu(this),fh(this);const e=bt,n=kn;bt=this,kn=!0;try{return this.fn()}finally{dh(this),bt=e,kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,Zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let ch=0,wr,Rr;function uh(t,e=!1){if(t.flags|=8,e){t.next=Rr,Rr=t;return}t.next=wr,wr=t}function Jc(){ch++}function Qc(){if(--ch>0)return;if(Rr){let e=Rr;for(Rr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wr;){let e=wr;for(wr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function fh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dh(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),eu(i),tg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ur)||(t.globalVersion=Ur,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Il(t))))return;t.flags|=2;const e=t.dep,n=bt,i=kn;bt=t,kn=!0;try{fh(t);const s=t.fn(t._value);(e.version===0||Yn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=n,kn=i,dh(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function tg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kn=!0;const ph=[];function Mi(){ph.push(kn),kn=!1}function Ei(){const t=ph.pop();kn=t===void 0?!0:t}function Zu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=bt;bt=void 0;try{e()}finally{bt=n}}}let Ur=0;class ng{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!kn||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new ng(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,mh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=i)}return n}trigger(e){this.version++,Ur++,this.notify(e)}notify(e){Jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qc()}}}function mh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)mh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Go=new WeakMap,fs=Symbol(""),Ul=Symbol(""),Nr=Symbol("");function sn(t,e,n){if(kn&&bt){let i=Go.get(t);i||Go.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new tu),s.map=i,s.key=n),s.track()}}function gi(t,e,n,i,s,r){const o=Go.get(t);if(!o){Ur++;return}const a=l=>{l&&l.trigger()};if(Jc(),e==="clear")o.forEach(a);else{const l=je(t),u=l&&la(n);if(l&&n==="length"){const c=Number(i);o.forEach((d,f)=>{(f==="length"||f===Nr||!Rn(f)&&f>=c)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Nr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(fs)),Vs(t)&&a(o.get(Ul)));break;case"delete":l||(a(o.get(fs)),Vs(t)&&a(o.get(Ul)));break;case"set":Vs(t)&&a(o.get(fs));break}}Qc()}function ig(t,e){const n=Go.get(t);return n&&n.get(e)}function bs(t){const e=ft(t);return e===t?e:(sn(e,"iterate",Nr),wn(t)?e:e.map(Hn))}function da(t){return sn(t=ft(t),"iterate",Nr),t}function qn(t,e){return si(t)?Ys(zi(t)?Hn(e):e):Hn(e)}const sg={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,t=>qn(this,t))},concat(...t){return bs(this).concat(...t.map(e=>je(e)?bs(e):e))},entries(){return Da(this,"entries",t=>(t[1]=qn(this,t[1]),t))},every(t,e){return li(this,"every",t,e,void 0,arguments)},filter(t,e){return li(this,"filter",t,e,n=>n.map(i=>qn(this,i)),arguments)},find(t,e){return li(this,"find",t,e,n=>qn(this,n),arguments)},findIndex(t,e){return li(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return li(this,"findLast",t,e,n=>qn(this,n),arguments)},findLastIndex(t,e){return li(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return li(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ia(this,"includes",t)},indexOf(...t){return Ia(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return Ia(this,"lastIndexOf",t)},map(t,e){return li(this,"map",t,e,void 0,arguments)},pop(){return hr(this,"pop")},push(...t){return hr(this,"push",t)},reduce(t,...e){return Ju(this,"reduce",t,e)},reduceRight(t,...e){return Ju(this,"reduceRight",t,e)},shift(){return hr(this,"shift")},some(t,e){return li(this,"some",t,e,void 0,arguments)},splice(...t){return hr(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return hr(this,"unshift",t)},values(){return Da(this,"values",t=>qn(this,t))}};function Da(t,e,n){const i=da(t),s=i[e]();return i!==t&&!wn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const rg=Array.prototype;function li(t,e,n,i,s,r){const o=da(t),a=o!==t&&!wn(t),l=o[e];if(l!==rg[e]){const d=l.apply(t,r);return a?Hn(d):d}let u=n;o!==t&&(a?u=function(d,f){return n.call(this,qn(t,d),f,t)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,t)}));const c=l.call(o,u,i);return a&&s?s(c):c}function Ju(t,e,n,i){const s=da(t),r=s!==t&&!wn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(u,c,d){return a&&(a=!1,u=qn(t,u)),n.call(this,u,qn(t,c),d,t)}):n.length>3&&(o=function(u,c,d){return n.call(this,u,c,d,t)}));const l=s[e](o,...i);return a?qn(t,l):l}function Ia(t,e,n){const i=ft(t);sn(i,"iterate",Nr);const s=i[e](...n);return(s===-1||s===!1)&&ha(n[0])?(n[0]=ft(n[0]),i[e](...n)):s}function hr(t,e,n=[]){Mi(),Jc();const i=ft(t)[e].apply(t,n);return Qc(),Ei(),i}const og=qc("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn));function ag(t){Rn(t)||(t=String(t));const e=ft(this);return sn(e,"has",t),e.hasOwnProperty(t)}class _h{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?_g:Sh:r?yh:xh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!s){let l;if(o&&(l=sg[n]))return l;if(n==="hasOwnProperty")return ag}const a=Reflect.get(e,n,Gt(e)?e:i);if((Rn(n)?gh.has(n):og(n))||(s||sn(e,"get",n),r))return a;if(Gt(a)){const l=o&&la(n)?a:a.value;return s&&pt(l)?Ct(l):l}return pt(a)?s?Ct(a):Wi(a):a}}class vh extends _h{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=je(e)&&la(n);if(!this._isShallow){const u=si(r);if(!wn(i)&&!si(i)&&(r=ft(r),i=ft(i)),!o&&Gt(r)&&!Gt(i))return u||(r.value=i),!0}const a=o?Number(n)<e.length:ht(e,n),l=Reflect.set(e,n,i,Gt(e)?e:s);return e===ft(s)&&(a?Yn(i,r)&&gi(e,"set",n,i):gi(e,"add",n,i)),l}deleteProperty(e,n){const i=ht(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&gi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Rn(n)||!gh.has(n))&&sn(e,"has",n),i}ownKeys(e){return sn(e,"iterate",je(e)?"length":fs),Reflect.ownKeys(e)}}class lg extends _h{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cg=new vh,ug=new lg,fg=new vh(!0);const Nl=t=>t,Qr=t=>Reflect.getPrototypeOf(t);function dg(t,e,n){return function(...i){const s=this.__v_raw,r=ft(s),o=Vs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...i),c=n?Nl:e?Ys:Hn;return!e&&sn(r,"iterate",l?Ul:fs),Qt(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hg(t,e){const n={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);t||(Yn(s,a)&&sn(o,"get",s),sn(o,"get",a));const{has:l}=Qr(o),u=e?Nl:t?Ys:Hn;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&sn(ft(s),"iterate",fs),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return t||(Yn(s,a)&&sn(o,"has",s),sn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),u=e?Nl:t?Ys:Hn;return!t&&sn(l,"iterate",fs),a.forEach((c,d)=>s.call(r,u(c),u(d),o))}};return Qt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(s){const r=ft(this),o=Qr(r),a=ft(s),l=!e&&!wn(s)&&!si(s)?a:s;return o.has.call(r,l)||Yn(s,l)&&o.has.call(r,s)||Yn(a,l)&&o.has.call(r,a)||(r.add(l),gi(r,"add",l,l)),this},set(s,r){!e&&!wn(r)&&!si(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Qr(o);let u=a.call(o,s);u||(s=ft(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?Yn(r,c)&&gi(o,"set",s,r):gi(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Qr(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&gi(r,"delete",s,void 0),u},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&gi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=dg(s,t,e)}),n}function nu(t,e){const n=hg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ht(n,s)&&s in i?n:i,s,r)}const pg={get:nu(!1,!1)},mg={get:nu(!1,!0)},gg={get:nu(!0,!1)};const xh=new WeakMap,yh=new WeakMap,Sh=new WeakMap,_g=new WeakMap;function vg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xg(t){return t.__v_skip||!Object.isExtensible(t)?0:vg(Hm(t))}function Wi(t){return si(t)?t:iu(t,!1,cg,pg,xh)}function ss(t){return iu(t,!1,fg,mg,yh)}function Ct(t){return iu(t,!0,ug,gg,Sh)}function iu(t,e,n,i,s){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=xg(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function zi(t){return si(t)?zi(t.__v_raw):!!(t&&t.__v_isReactive)}function si(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function ha(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function yg(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&ih(t,"__v_skip",!0),t}const Hn=t=>pt(t)?Wi(t):t,Ys=t=>pt(t)?Ct(t):t;function Gt(t){return t?t.__v_isRef===!0:!1}function Dt(t){return Mh(t,!1)}function Jt(t){return Mh(t,!0)}function Mh(t,e){return Gt(t)?t:new Sg(t,e)}class Sg{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:Hn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||si(e);e=i?e:ft(e),Yn(e,n)&&(this._rawValue=e,this._value=i?e:Hn(e),this.dep.trigger())}}function Mt(t){return Gt(t)?t.value:t}function Mg(t){return qe(t)?t():Mt(t)}const Eg={get:(t,e,n)=>e==="__v_raw"?t:Mt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Gt(s)&&!Gt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Eh(t){return zi(t)?t:new Proxy(t,Eg)}class bg{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Rn(n)?n:String(n),this._raw=ft(e);let s=!0,r=e;if(!je(e)||Rn(this._key)||!la(this._key))do s=!ha(r)||wn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Mt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Gt(this._raw[this._key])){const n=this._object[this._key];if(Gt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return ig(this._raw,this._key)}}class Tg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ag(t,e,n){return Gt(t)?t:qe(t)?new Tg(t):pt(t)&&arguments.length>1?wg(t,e,n):Dt(t)}function wg(t,e,n){return new bg(t,e,n)}class Rg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return uh(this,!0),!0}get value(){const e=this.dep.track();return hh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cg(t,e,n=!1){let i,s;return qe(t)?i=t:(i=t.get,s=t.set),new Rg(i,s,n)}const to={},zo=new WeakMap;let ns;function Pg(t,e=!1,n=ns){if(n){let i=zo.get(n);i||zo.set(n,i=[]),i.push(t)}}function Lg(t,e,n=Tt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,u=S=>s?S:wn(S)||s===!1||s===0?Oi(S,1):Oi(S);let c,d,f,h,p=!1,g=!1;if(Gt(t)?(d=()=>t.value,p=wn(t)):zi(t)?(d=()=>u(t),p=!0):je(t)?(g=!0,p=t.some(S=>zi(S)||wn(S)),d=()=>t.map(S=>{if(Gt(S))return S.value;if(zi(S))return u(S);if(qe(S))return l?l(S,2):S()})):qe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Mi();try{f()}finally{Ei()}}const S=ns;ns=c;try{return l?l(t,3,[h]):t(h)}finally{ns=S}}:d=ei,e&&s){const S=d,A=s===!0?1/0:s;d=()=>Oi(S(),A)}const _=Zc(),m=()=>{c.stop(),_&&_.active&&jc(_.effects,c)};if(r&&e){const S=e;e=(...A)=>{S(...A),m()}}let M=g?new Array(t.length).fill(to):to;const x=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(e){const A=c.run();if(s||p||(g?A.some((T,P)=>Yn(T,M[P])):Yn(A,M))){f&&f();const T=ns;ns=c;try{const P=[A,M===to?void 0:g&&M[0]===to?[]:M,h];M=A,l?l(e,3,P):e(...P)}finally{ns=T}}}else c.run()};return a&&a(x),c=new lh(d),c.scheduler=o?()=>o(x,!1):x,h=S=>Pg(S,!1,c),f=c.onStop=()=>{const S=zo.get(c);if(S){if(l)l(S,4);else for(const A of S)A();zo.delete(c)}},e?i?x(!0):M=c.run():o?o(x.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function Oi(t,e=1/0,n){if(e<=0||!pt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Gt(t))Oi(t.value,e,n);else if(je(t))for(let i=0;i<t.length;i++)Oi(t[i],e,n);else if(eh(t)||Vs(t))t.forEach(i=>{Oi(i,e,n)});else if(nh(t)){for(const i in t)Oi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Oi(t[i],e,n)}return t}function $r(t,e,n,i){try{return i?t(...i):t()}catch(s){rr(s,e,n)}}function ri(t,e,n,i){if(qe(t)){const s=$r(t,e,n,i);return s&&Yc(s)&&s.catch(r=>{rr(r,e,n)}),s}if(je(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ri(t[r],e,n,i));return s}}function rr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,l,u)===!1)return}a=a.parent}if(r){Mi(),$r(r,null,10,[t,l,u]),Ei();return}}Dg(t,n,s,i,o)}function Dg(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const dn=[];let Xn=-1;const Ws=[];let Fi=null,Hs=0;const bh=Promise.resolve();let Vo=null;function su(t){const e=Vo||bh;return t?e.then(this?t.bind(this):t):e}function Ig(t){let e=Xn+1,n=dn.length;for(;e<n;){const i=e+n>>>1,s=dn[i],r=Fr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function ru(t){if(!(t.flags&1)){const e=Fr(t),n=dn[dn.length-1];!n||!(t.flags&2)&&e>=Fr(n)?dn.push(t):dn.splice(Ig(e),0,t),t.flags|=1,Th()}}function Th(){Vo||(Vo=bh.then(Ah))}function Fl(t){je(t)?Ws.push(...t):Fi&&t.id===-1?Fi.splice(Hs+1,0,t):t.flags&1||(Ws.push(t),t.flags|=1),Th()}function Qu(t,e,n=Xn+1){for(;n<dn.length;n++){const i=dn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;dn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wo(t){if(Ws.length){const e=[...new Set(Ws)].sort((n,i)=>Fr(n)-Fr(i));if(Ws.length=0,Fi){Fi.push(...e);return}for(Fi=e,Hs=0;Hs<Fi.length;Hs++){const n=Fi[Hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,Hs=0}}const Fr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ah(t){try{for(Xn=0;Xn<dn.length;Xn++){const e=dn[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<dn.length;Xn++){const e=dn[Xn];e&&(e.flags&=-2)}Xn=-1,dn.length=0,Wo(),Vo=null,(dn.length||Ws.length)&&Ah()}}let hn=null,wh=null;function Xo(t){const e=hn;return hn=t,wh=t&&t.type.__scopeId||null,e}function ou(t,e=hn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&jo(-1);const r=Xo(e);let o;try{o=t(...s)}finally{Xo(r),i._d&&jo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function $n(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Mi(),ri(l,n,8,[t.el,a,t,e]),Ei())}}function Rh(t,e){if(Kt){let n=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===n&&(n=Kt.provides=Object.create(i)),n[t]=e}}function ds(t,e,n=!1){const i=qr();if(i||ps){let s=ps?ps._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function pa(){return!!(qr()||ps)}const Ug=Symbol.for("v-scx"),Ng=()=>ds(Ug);function Fg(t,e){return au(t,null,e)}function Ua(t,e,n){return au(t,e,n)}function au(t,e,n=Tt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Qt({},n),l=e&&i||!e&&r!=="post";let u;if(Qs){if(r==="sync"){const h=Ng();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ei,h.resume=ei,h.pause=ei,h}}const c=Kt;a.call=(h,p,g)=>ri(h,c,p,g);let d=!1;r==="post"?a.scheduler=h=>{cn(h,c&&c.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,p)=>{p?h():ru(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Lg(t,e,a);return Qs&&(u?u.push(f):l&&f()),f}function Og(t,e,n){const i=this.proxy,s=wt(t)?t.includes(".")?Ch(i,t):()=>i[t]:t.bind(i,i);let r;qe(e)?r=e:(r=e.handler,n=e);const o=jr(this),a=au(s,r.bind(i),n);return o(),a}function Ch(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Bg=Symbol("_vte"),kg=t=>t.__isTeleport,Hg=Symbol("_leaveCb");function lu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qi(t,e){return qe(t)?Qt({name:t.name},e,{setup:t}):t}function cu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ef(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $o=new WeakMap;function Xs(t,e,n,i,s=!1){if(je(t)){t.forEach((g,_)=>Xs(g,e&&(je(e)?e[_]:e),n,i,s));return}if(hs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xs(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?pu(i.component):i.el,o=s?null:r,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Tt?a.refs={}:a.refs,d=a.setupState,f=ft(d),h=d===Tt?Qd:g=>ef(c,g)?!1:ht(f,g),p=(g,_)=>!(_&&ef(c,_));if(u!=null&&u!==l){if(tf(e),wt(u))c[u]=null,h(u)&&(d[u]=null);else if(Gt(u)){const g=e;p(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(qe(l))$r(l,a,12,[o,c]);else{const g=wt(l),_=Gt(l);if(g||_){const m=()=>{if(t.f){const M=g?h(l)?d[l]:c[l]:p()||!t.k?l.value:c[t.k];if(s)je(M)&&jc(M,r);else if(je(M))M.includes(r)||M.push(r);else if(g)c[l]=[r],h(l)&&(d[l]=c[l]);else{const x=[r];p(l,t.k)&&(l.value=x),t.k&&(c[t.k]=x)}}else g?(c[l]=o,h(l)&&(d[l]=o)):_&&(p(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const M=()=>{m(),$o.delete(t)};M.id=-1,$o.set(t,M),cn(M,n)}else tf(t),m()}}}function tf(t){const e=$o.get(t);e&&(e.flags|=8,$o.delete(t))}let nf=!1;const Ts=()=>{nf||(console.error("Hydration completed but contains mismatches."),nf=!0)},Gg=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",zg=t=>t.namespaceURI.includes("MathML"),no=t=>{if(t.nodeType===1){if(Gg(t))return"svg";if(zg(t))return"mathml"}},Gs=t=>t.nodeType===8;function Vg(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:u}}=t,c=(x,S)=>{if(!S.hasChildNodes()){n(null,x,S),Wo(),S._vnode=x;return}d(S.firstChild,x,null,null,null),Wo(),S._vnode=x},d=(x,S,A,T,P,y=!1)=>{y=y||!!S.dynamicChildren;const w=Gs(x)&&x.data==="[",D=()=>g(x,S,A,T,P,w),{type:L,ref:F,shapeFlag:z,patchFlag:X}=S;let O=x.nodeType;S.el=x,X===-2&&(y=!1,S.dynamicChildren=null);let N=null;switch(L){case ms:O!==3?S.children===""?(l(S.el=s(""),o(x),x),N=x):N=D():(x.data!==S.children&&(Ts(),x.data=S.children),N=r(x));break;case In:M(x)?(N=r(x),m(S.el=x.content.firstChild,x,A)):O!==8||w?N=D():N=r(x);break;case Pr:if(w&&(x=r(x),O=x.nodeType),O===1||O===3){N=x;const k=!S.children.length;for(let V=0;V<S.staticCount;V++)k&&(S.children+=N.nodeType===1?N.outerHTML:N.data),V===S.staticCount-1&&(S.anchor=N),N=r(N);return w?r(N):N}else D();break;case jt:w?N=p(x,S,A,T,P,y):N=D();break;default:if(z&1)(O!==1||S.type.toLowerCase()!==x.tagName.toLowerCase())&&!M(x)?N=D():N=f(x,S,A,T,P,y);else if(z&6){S.slotScopeIds=P;const k=o(x);if(w?N=_(x):Gs(x)&&x.data==="teleport start"?N=_(x,x.data,"teleport end"):N=r(x),e(S,k,null,A,T,no(k),y),hs(S)&&!S.type.__asyncResolved){let V;w?(V=At(jt),V.anchor=N?N.previousSibling:k.lastChild):V=x.nodeType===3?Br(""):At("div"),V.el=x,S.component.subTree=V}}else z&64?O!==8?N=D():N=S.type.hydrate(x,S,A,T,P,y,t,h):z&128&&(N=S.type.hydrate(x,S,A,T,no(o(x)),P,y,t,d))}return F!=null&&Xs(F,null,T,S),N},f=(x,S,A,T,P,y)=>{y=y||!!S.dynamicChildren;const{type:w,props:D,patchFlag:L,shapeFlag:F,dirs:z,transition:X}=S,O=w==="input"||w==="option";if(O||L!==-1){z&&$n(S,null,A,"created");let N=!1;if(M(x)){N=Qh(null,X)&&A&&A.vnode.props&&A.vnode.props.appear;const V=x.content.firstChild;if(N){const oe=V.getAttribute("class");oe&&(V.$cls=oe),X.beforeEnter(V)}m(V,x,A),S.el=x=V}if(F&16&&!(D&&(D.innerHTML||D.textContent))){let V=h(x.firstChild,S,x,A,T,P,y);for(;V;){io(x,1)||Ts();const oe=V;V=V.nextSibling,a(oe)}}else if(F&8){let V=S.children;V[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(V=V.slice(1));const{textContent:oe}=x;oe!==V&&oe!==V.replace(/\r\n|\r/g,`
`)&&(io(x,0)||Ts(),x.textContent=S.children)}if(D){if(O||!y||L&48){const V=x.tagName.includes("-");for(const oe in D)(O&&(oe.endsWith("value")||oe==="indeterminate")||Wr(oe)&&!us(oe)||oe[0]==="."||V&&!us(oe))&&i(x,oe,null,D[oe],void 0,A)}else if(D.onClick)i(x,"onClick",null,D.onClick,void 0,A);else if(L&4&&zi(D.style))for(const V in D.style)D.style[V]}let k;(k=D&&D.onVnodeBeforeMount)&&Ln(k,A,S),z&&$n(S,null,A,"beforeMount"),((k=D&&D.onVnodeMounted)||z||N)&&rp(()=>{k&&Ln(k,A,S),N&&X.enter(x),z&&$n(S,null,A,"mounted")},T)}return x.nextSibling},h=(x,S,A,T,P,y,w)=>{w=w||!!S.dynamicChildren;const D=S.children,L=D.length;for(let F=0;F<L;F++){const z=w?D[F]:D[F]=bn(D[F]),X=z.type===ms;x?(X&&!w&&F+1<L&&bn(D[F+1]).type===ms&&(l(s(x.data.slice(z.children.length)),A,r(x)),x.data=z.children),x=d(x,z,T,P,y,w)):X&&!z.children?l(z.el=s(""),A):(io(A,1)||Ts(),n(null,z,A,null,T,P,no(A),y))}return x},p=(x,S,A,T,P,y)=>{const{slotScopeIds:w}=S;w&&(P=P?P.concat(w):w);const D=o(x),L=h(r(x),S,D,A,T,P,y);return L&&Gs(L)&&L.data==="]"?r(S.anchor=L):(Ts(),l(S.anchor=u("]"),D,L),L)},g=(x,S,A,T,P,y)=>{if(io(x.parentElement,1)||Ts(),S.el=null,y){const L=_(x);for(;;){const F=r(x);if(F&&F!==L)a(F);else break}}const w=r(x),D=o(x);return a(x),n(null,S,D,w,A,T,no(D),P),A&&(A.vnode.el=S.el,_a(A,S.el)),w},_=(x,S="[",A="]")=>{let T=0;for(;x;)if(x=r(x),x&&Gs(x)&&(x.data===S&&T++,x.data===A)){if(T===0)return r(x);T--}return x},m=(x,S,A)=>{const T=S.parentNode;T&&T.replaceChild(x,S);let P=A;for(;P;)P.vnode.el===S&&(P.vnode.el=P.subTree.el=x),P=P.parent},M=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[c,d]}const sf="data-allow-mismatch",Wg={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function io(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(sf);)t=t.parentElement;const n=t&&t.getAttribute(sf);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(Wg[e])}}fa().requestIdleCallback;fa().cancelIdleCallback;function Xg(t,e){if(Gs(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Gs(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const hs=t=>!!t.type.__asyncLoader;function rf(t){qe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,c,d=0;const f=()=>(d++,u=null,h()),h=()=>{let p;return u||(p=u=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((_,m)=>{l(g,()=>_(f()),()=>m(g),d+1)});throw g}).then(g=>p!==u&&u?u:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return qi({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(p,g,_){let m=!1;(g.bu||(g.bu=[])).push(()=>m=!0);const M=()=>{m||_()},x=r?()=>{const S=r(M,A=>Xg(p,A));S&&(g.bum||(g.bum=[])).push(S)}:M;c?x():h().then(()=>!g.isUnmounted&&x())},get __asyncResolved(){return c},setup(){const p=Kt;if(cu(p),c)return()=>so(c,p);const g=x=>{u=null,rr(x,p,13,!i)};if(a&&p.suspense||Qs)return h().then(x=>()=>so(x,p)).catch(x=>(g(x),()=>i?At(i,{error:x}):null));const _=Dt(!1),m=Dt(),M=Dt(!!s);return s&&setTimeout(()=>{M.value=!1},s),o!=null&&setTimeout(()=>{if(!_.value&&!m.value){const x=new Error(`Async component timed out after ${o}ms.`);g(x),m.value=x}},o),h().then(()=>{_.value=!0,p.parent&&uu(p.parent.vnode)&&p.parent.update()}).catch(x=>{g(x),m.value=x}),()=>{if(_.value&&c)return so(c,p);if(m.value&&i)return At(i,{error:m.value});if(n&&!M.value)return so(n,p)}}})}function so(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=At(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const uu=t=>t.type.__isKeepAlive;function Ph(t,e){Dh(t,"a",e)}function Lh(t,e){Dh(t,"da",e)}function Dh(t,e,n=Kt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ma(e,i,n),n){let s=n.parent;for(;s&&s.parent;)uu(s.parent.vnode)&&$g(i,e,n,s),s=s.parent}}function $g(t,e,n,i){const s=ma(e,t,i,!0);or(()=>{jc(i[e],s)},n)}function ma(t,e,n=Kt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mi();const a=jr(n),l=ri(e,n,t,o);return a(),Ei(),l});return i?s.unshift(r):s.push(r),r}}const Ai=t=>(e,n=Kt)=>{(!Qs||t==="sp")&&ma(t,(...i)=>e(...i),n)},qg=Ai("bm"),Ks=Ai("m"),jg=Ai("bu"),Yg=Ai("u"),Ih=Ai("bum"),or=Ai("um"),Kg=Ai("sp"),Zg=Ai("rtg"),Jg=Ai("rtc");function Uh(t,e=Kt){ma("ec",t,e)}const Nh="components";function iR(t,e){return Oh(Nh,t,!0,e)||t}const Fh=Symbol.for("v-ndc");function Qg(t){return wt(t)?Oh(Nh,t,!1)||t:t||Fh}function Oh(t,e,n=!0,i=!1){const s=hn||Kt;if(s){const r=s.type;{const a=V_(r,!1);if(a&&(a===e||a===pn(e)||a===ua(pn(e))))return r}const o=of(s[t]||r[t],e)||of(s.appContext[t],e);return!o&&i?r:o}}function of(t,e){return t&&(t[e]||t[pn(e)]||t[ua(pn(e))])}function e_(t,e,n,i){let s;const r=n,o=je(t);if(o||wt(t)){const a=o&&zi(t);let l=!1,u=!1;a&&(l=!wn(t),u=si(t),t=da(t)),s=new Array(t.length);for(let c=0,d=t.length;c<d;c++)s[c]=e(l?u?Ys(Hn(t[c])):Hn(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(pt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=e(t[c],c,l,r)}}else s=[];return s}function t_(t,e,n={},i,s){if(hn.ce||hn.parent&&hs(hn.parent)&&hn.parent.ce){const u=Object.keys(n).length>0;return xt(),Kn(jt,null,[At("slot",n,i)],u?-2:64)}let r=t[e];r&&r._c&&(r._d=!1),xt();const o=r&&Bh(r(n)),a=n.key||o&&o.key,l=Kn(jt,{key:(a&&!Rn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Bh(t){return t.some(e=>Js(e)?!(e.type===In||e.type===jt&&!Bh(e.children)):!0)?t:null}const Ol=t=>t?up(t)?pu(t):Ol(t.parent):null,Cr=Qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ol(t.parent),$root:t=>Ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hh(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=su.bind(t.proxy)),$watch:t=>Og.bind(t)}),Na=(t,e)=>t!==Tt&&!t.__isScriptSetup&&ht(t,e),n_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Na(i,e))return o[e]=1,i[e];if(s!==Tt&&ht(s,e))return o[e]=2,s[e];if(ht(r,e))return o[e]=3,r[e];if(n!==Tt&&ht(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=Cr[e];let c,d;if(u)return e==="$attrs"&&sn(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Tt&&ht(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Na(s,e)?(s[e]=n,!0):i!==Tt&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Tt&&a[0]!=="$"&&ht(t,a)||Na(e,a)||ht(r,a)||ht(i,a)||ht(Cr,a)||ht(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function af(t){return je(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bl=!0;function i_(t){const e=Hh(t),n=t.proxy,i=t.ctx;Bl=!1,e.beforeCreate&&lf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:g,deactivated:_,beforeDestroy:m,beforeUnmount:M,destroyed:x,unmounted:S,render:A,renderTracked:T,renderTriggered:P,errorCaptured:y,serverPrefetch:w,expose:D,inheritAttrs:L,components:F,directives:z,filters:X}=e;if(u&&s_(u,i,null),o)for(const k in o){const V=o[k];qe(V)&&(i[k]=V.bind(n))}if(s){const k=s.call(n,n);pt(k)&&(t.data=Wi(k))}if(Bl=!0,r)for(const k in r){const V=r[k],oe=qe(V)?V.bind(n,n):qe(V.get)?V.get.bind(n,n):ei,ve=!qe(V)&&qe(V.set)?V.set.bind(n):ei,we=un({get:oe,set:ve});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>we.value,set:be=>we.value=be})}if(a)for(const k in a)kh(a[k],i,n,k);if(l){const k=qe(l)?l.call(n):l;Reflect.ownKeys(k).forEach(V=>{Rh(V,k[V])})}c&&lf(c,t,"c");function N(k,V){je(V)?V.forEach(oe=>k(oe.bind(n))):V&&k(V.bind(n))}if(N(qg,d),N(Ks,f),N(jg,h),N(Yg,p),N(Ph,g),N(Lh,_),N(Uh,y),N(Jg,T),N(Zg,P),N(Ih,M),N(or,S),N(Kg,w),je(D))if(D.length){const k=t.exposed||(t.exposed={});D.forEach(V=>{Object.defineProperty(k,V,{get:()=>n[V],set:oe=>n[V]=oe,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===ei&&(t.render=A),L!=null&&(t.inheritAttrs=L),F&&(t.components=F),z&&(t.directives=z),w&&cu(t)}function s_(t,e,n=ei){je(t)&&(t=kl(t));for(const i in t){const s=t[i];let r;pt(s)?"default"in s?r=ds(s.from||i,s.default,!0):r=ds(s.from||i):r=ds(s),Gt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lf(t,e,n){ri(je(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function kh(t,e,n,i){let s=i.includes(".")?Ch(n,i):()=>n[i];if(wt(t)){const r=e[t];qe(r)&&Ua(s,r)}else if(qe(t))Ua(s,t.bind(n));else if(pt(t))if(je(t))t.forEach(r=>kh(r,e,n,i));else{const r=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(r)&&Ua(s,r,t)}}function Hh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(u=>qo(l,u,o,!0)),qo(l,e,o)),pt(e)&&r.set(e,l),l}function qo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&qo(t,r,n,!0),s&&s.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=r_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const r_={data:cf,props:uf,emits:uf,methods:Er,computed:Er,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Er,directives:Er,watch:a_,provide:cf,inject:o_};function cf(t,e){return e?t?function(){return Qt(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function o_(t,e){return Er(kl(t),kl(e))}function kl(t){if(je(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function Er(t,e){return t?Qt(Object.create(null),t,e):e}function uf(t,e){return t?je(t)&&je(e)?[...new Set([...t,...e])]:Qt(Object.create(null),af(t),af(e??{})):e}function a_(t,e){if(!t)return e;if(!e)return t;const n=Qt(Object.create(null),t);for(const i in e)n[i]=an(t[i],e[i]);return n}function Gh(){return{app:null,config:{isNativeTag:Qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l_=0;function c_(t,e){return function(i,s=null){qe(i)||(i=Qt({},i)),s!=null&&!pt(s)&&(s=null);const r=Gh(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:l_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:X_,get config(){return r.config},set config(c){},use(c,...d){return o.has(c)||(c&&qe(c.install)?(o.add(c),c.install(u,...d)):qe(c)&&(o.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||At(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(h,c):t(h,c,f),l=!0,u._container=c,c.__vue_app__=u,pu(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ri(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=ps;ps=u;try{return c()}finally{ps=d}}};return u}}let ps=null;const u_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${ys(e)}Modifiers`];function f_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Tt;let s=n;const r=e.startsWith("update:"),o=r&&u_(i,e.slice(7));o&&(o.trim&&(s=n.map(c=>wt(c)?c.trim():c)),o.number&&(s=n.map(Vm)));let a,l=i[a=Ra(e)]||i[a=Ra(pn(e))];!l&&r&&(l=i[a=Ra(ys(e))]),l&&ri(l,t,6,s);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ri(u,t,6,s)}}const d_=new WeakMap;function zh(t,e,n=!1){const i=n?d_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!qe(t)){const l=u=>{const c=zh(u,e,!0);c&&(a=!0,Qt(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pt(t)&&i.set(t,null),null):(je(r)?r.forEach(l=>o[l]=null):Qt(o,r),pt(t)&&i.set(t,o),o)}function ga(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,ys(e))||ht(t,e))}function Fa(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:p,inheritAttrs:g}=t,_=Xo(t);let m,M;try{if(n.shapeFlag&4){const S=s||i,A=S;m=bn(u.call(A,S,c,d,h,f,p)),M=a}else{const S=e;m=bn(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),M=e.props?a:p_(a)}}catch(S){Lr.length=0,rr(S,t,1),m=At(In)}let x=m;if(M&&g!==!1){const S=Object.keys(M),{shapeFlag:A}=x;S.length&&A&7&&(r&&S.some(aa)&&(M=m_(M,r)),x=vi(x,M,!1,!0))}return n.dirs&&(x=vi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&lu(x,n.transition),m=x,Xo(_),m}function h_(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(Js(s)){if(s.type!==In||s.children==="v-if"){if(n)return;n=s}}else return}return n}const p_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},m_=(t,e)=>{const n={};for(const i in t)(!aa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function g_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ff(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(Vh(o,i,f)&&!ga(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ff(i,o,u):!0:!!o;return!1}function ff(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Vh(e,t,r)&&!ga(n,r))return!0}return!1}function Vh(t,e,n){const i=t[n],s=e[n];return n==="style"&&pt(i)&&pt(s)?!Kc(i,s):i!==s}function _a({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Wh={},Xh=()=>Object.create(Wh),$h=t=>Object.getPrototypeOf(t)===Wh;function __(t,e,n,i=!1){const s={},r=Xh();t.propsDefaults=Object.create(null),qh(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:ss(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function v_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ft(s),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(ga(t.emitsOptions,f))continue;const h=e[f];if(l)if(ht(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const p=pn(f);s[p]=Hl(l,a,p,h,t,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{qh(t,e,s,r)&&(u=!0);let c;for(const d in a)(!e||!ht(e,d)&&((c=ys(d))===d||!ht(e,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(s[d]=Hl(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],u=!0)}u&&gi(t.attrs,"set","")}function qh(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(us(l))continue;const u=e[l];let c;s&&ht(s,c=pn(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:ga(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=ft(n),u=a||Tt;for(let c=0;c<r.length;c++){const d=r[c];n[d]=Hl(s,l,d,u[d],t,!ht(u,d))}}return o}function Hl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const c=jr(s);i=u[n]=l.call(null,e),c()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ys(n))&&(i=!0))}return i}const x_=new WeakMap;function jh(t,e,n=!1){const i=n?x_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!qe(t)){const c=d=>{l=!0;const[f,h]=jh(d,e,!0);Qt(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!r&&!l)return pt(t)&&i.set(t,zs),zs;if(je(r))for(let c=0;c<r.length;c++){const d=pn(r[c]);df(d)&&(o[d]=Tt)}else if(r)for(const c in r){const d=pn(c);if(df(d)){const f=r[c],h=o[d]=je(f)||qe(f)?{type:f}:Qt({},f),p=h.type;let g=!1,_=!0;if(je(p))for(let m=0;m<p.length;++m){const M=p[m],x=qe(M)&&M.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(_=!1)}else g=qe(p)&&p.name==="Boolean";h[0]=g,h[1]=_,(g||ht(h,"default"))&&a.push(d)}}const u=[o,a];return pt(t)&&i.set(t,u),u}function df(t){return t[0]!=="$"&&!us(t)}const fu=t=>t==="_"||t==="_ctx"||t==="$stable",du=t=>je(t)?t.map(bn):[bn(t)],y_=(t,e,n)=>{if(e._n)return e;const i=ou((...s)=>du(e(...s)),n);return i._c=!1,i},Yh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(fu(s))continue;const r=t[s];if(qe(r))e[s]=y_(s,r,i);else if(r!=null){const o=du(r);e[s]=()=>o}}},Kh=(t,e)=>{const n=du(e);t.slots.default=()=>n},Zh=(t,e,n)=>{for(const i in e)(n||!fu(i))&&(t[i]=e[i])},S_=(t,e,n)=>{const i=t.slots=Xh();if(t.vnode.shapeFlag&32){const s=e._;s?(Zh(i,e,n),n&&ih(i,"_",s,!0)):Yh(e,i)}else e&&Kh(t,e)},M_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Zh(s,e,n):(r=!e.$stable,Yh(e,s)),o=e}else e&&(Kh(t,e),o={default:1});if(r)for(const a in s)!fu(a)&&o[a]==null&&delete s[a]},cn=rp;function E_(t){return Jh(t)}function b_(t){return Jh(t,Vg)}function Jh(t,e){const n=fa();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=ei,insertStaticContent:p}=t,g=(R,U,$,Q=null,ae=null,se=null,_e=void 0,C=null,le=!!U.dynamicChildren)=>{if(R===U)return;R&&!Bi(R,U)&&(Q=xe(R),be(R,ae,se,!0),R=null),U.patchFlag===-2&&(le=!1,U.dynamicChildren=null);const{type:ee,ref:Ee,shapeFlag:Y}=U;switch(ee){case ms:_(R,U,$,Q);break;case In:m(R,U,$,Q);break;case Pr:R==null&&M(U,$,Q,_e);break;case jt:F(R,U,$,Q,ae,se,_e,C,le);break;default:Y&1?A(R,U,$,Q,ae,se,_e,C,le):Y&6?z(R,U,$,Q,ae,se,_e,C,le):(Y&64||Y&128)&&ee.process(R,U,$,Q,ae,se,_e,C,le,Ve)}Ee!=null&&ae?Xs(Ee,R&&R.ref,se,U||R,!U):Ee==null&&R&&R.ref!=null&&Xs(R.ref,null,se,R,!0)},_=(R,U,$,Q)=>{if(R==null)i(U.el=a(U.children),$,Q);else{const ae=U.el=R.el;U.children!==R.children&&u(ae,U.children)}},m=(R,U,$,Q)=>{R==null?i(U.el=l(U.children||""),$,Q):U.el=R.el},M=(R,U,$,Q)=>{[R.el,R.anchor]=p(R.children,U,$,Q,R.el,R.anchor)},x=({el:R,anchor:U},$,Q)=>{let ae;for(;R&&R!==U;)ae=f(R),i(R,$,Q),R=ae;i(U,$,Q)},S=({el:R,anchor:U})=>{let $;for(;R&&R!==U;)$=f(R),s(R),R=$;s(U)},A=(R,U,$,Q,ae,se,_e,C,le)=>{if(U.type==="svg"?_e="svg":U.type==="math"&&(_e="mathml"),R==null)T(U,$,Q,ae,se,_e,C,le);else{const ee=R.el&&R.el._isVueCE?R.el:null;try{ee&&ee._beginPatch(),w(R,U,ae,se,_e,C,le)}finally{ee&&ee._endPatch()}}},T=(R,U,$,Q,ae,se,_e,C)=>{let le,ee;const{props:Ee,shapeFlag:Y,transition:Se,dirs:b}=R;if(le=R.el=o(R.type,se,Ee&&Ee.is,Ee),Y&8?c(le,R.children):Y&16&&y(R.children,le,null,Q,ae,Oa(R,se),_e,C),b&&$n(R,null,Q,"created"),P(le,R,R.scopeId,_e,Q),Ee){for(const B in Ee)B!=="value"&&!us(B)&&r(le,B,null,Ee[B],se,Q);"value"in Ee&&r(le,"value",null,Ee.value,se),(ee=Ee.onVnodeBeforeMount)&&Ln(ee,Q,R)}b&&$n(R,null,Q,"beforeMount");const v=Qh(ae,Se);v&&Se.beforeEnter(le),i(le,U,$),((ee=Ee&&Ee.onVnodeMounted)||v||b)&&cn(()=>{ee&&Ln(ee,Q,R),v&&Se.enter(le),b&&$n(R,null,Q,"mounted")},ae)},P=(R,U,$,Q,ae)=>{if($&&h(R,$),Q)for(let se=0;se<Q.length;se++)h(R,Q[se]);if(ae){let se=ae.subTree;if(U===se||ip(se.type)&&(se.ssContent===U||se.ssFallback===U)){const _e=ae.vnode;P(R,_e,_e.scopeId,_e.slotScopeIds,ae.parent)}}},y=(R,U,$,Q,ae,se,_e,C,le=0)=>{for(let ee=le;ee<R.length;ee++){const Ee=R[ee]=C?mi(R[ee]):bn(R[ee]);g(null,Ee,U,$,Q,ae,se,_e,C)}},w=(R,U,$,Q,ae,se,_e)=>{const C=U.el=R.el;let{patchFlag:le,dynamicChildren:ee,dirs:Ee}=U;le|=R.patchFlag&16;const Y=R.props||Tt,Se=U.props||Tt;let b;if($&&Ki($,!1),(b=Se.onVnodeBeforeUpdate)&&Ln(b,$,U,R),Ee&&$n(U,R,$,"beforeUpdate"),$&&Ki($,!0),(Y.innerHTML&&Se.innerHTML==null||Y.textContent&&Se.textContent==null)&&c(C,""),ee?D(R.dynamicChildren,ee,C,$,Q,Oa(U,ae),se):_e||V(R,U,C,null,$,Q,Oa(U,ae),se,!1),le>0){if(le&16)L(C,Y,Se,$,ae);else if(le&2&&Y.class!==Se.class&&r(C,"class",null,Se.class,ae),le&4&&r(C,"style",Y.style,Se.style,ae),le&8){const v=U.dynamicProps;for(let B=0;B<v.length;B++){const K=v[B],ce=Y[K],de=Se[K];(de!==ce||K==="value")&&r(C,K,ce,de,ae,$)}}le&1&&R.children!==U.children&&c(C,U.children)}else!_e&&ee==null&&L(C,Y,Se,$,ae);((b=Se.onVnodeUpdated)||Ee)&&cn(()=>{b&&Ln(b,$,U,R),Ee&&$n(U,R,$,"updated")},Q)},D=(R,U,$,Q,ae,se,_e)=>{for(let C=0;C<U.length;C++){const le=R[C],ee=U[C],Ee=le.el&&(le.type===jt||!Bi(le,ee)||le.shapeFlag&198)?d(le.el):$;g(le,ee,Ee,null,Q,ae,se,_e,!0)}},L=(R,U,$,Q,ae)=>{if(U!==$){if(U!==Tt)for(const se in U)!us(se)&&!(se in $)&&r(R,se,U[se],null,ae,Q);for(const se in $){if(us(se))continue;const _e=$[se],C=U[se];_e!==C&&se!=="value"&&r(R,se,C,_e,ae,Q)}"value"in $&&r(R,"value",U.value,$.value,ae)}},F=(R,U,$,Q,ae,se,_e,C,le)=>{const ee=U.el=R?R.el:a(""),Ee=U.anchor=R?R.anchor:a("");let{patchFlag:Y,dynamicChildren:Se,slotScopeIds:b}=U;b&&(C=C?C.concat(b):b),R==null?(i(ee,$,Q),i(Ee,$,Q),y(U.children||[],$,Ee,ae,se,_e,C,le)):Y>0&&Y&64&&Se&&R.dynamicChildren&&R.dynamicChildren.length===Se.length?(D(R.dynamicChildren,Se,$,ae,se,_e,C),(U.key!=null||ae&&U===ae.subTree)&&ep(R,U,!0)):V(R,U,$,Ee,ae,se,_e,C,le)},z=(R,U,$,Q,ae,se,_e,C,le)=>{U.slotScopeIds=C,R==null?U.shapeFlag&512?ae.ctx.activate(U,$,Q,_e,le):X(U,$,Q,ae,se,_e,le):O(R,U,le)},X=(R,U,$,Q,ae,se,_e)=>{const C=R.component=B_(R,Q,ae);if(uu(R)&&(C.ctx.renderer=Ve),k_(C,!1,_e),C.asyncDep){if(ae&&ae.registerDep(C,N,_e),!R.el){const le=C.subTree=At(In);m(null,le,U,$),R.placeholder=le.el}}else N(C,R,U,$,ae,se,_e)},O=(R,U,$)=>{const Q=U.component=R.component;if(g_(R,U,$))if(Q.asyncDep&&!Q.asyncResolved){k(Q,U,$);return}else Q.next=U,Q.update();else U.el=R.el,Q.vnode=U},N=(R,U,$,Q,ae,se,_e)=>{const C=()=>{if(R.isMounted){let{next:Y,bu:Se,u:b,parent:v,vnode:B}=R;{const J=tp(R);if(J){Y&&(Y.el=B.el,k(R,Y,_e)),J.asyncDep.then(()=>{cn(()=>{R.isUnmounted||ee()},ae)});return}}let K=Y,ce;Ki(R,!1),Y?(Y.el=B.el,k(R,Y,_e)):Y=B,Se&&Ca(Se),(ce=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ln(ce,v,Y,B),Ki(R,!0);const de=Fa(R),me=R.subTree;R.subTree=de,g(me,de,d(me.el),xe(me),R,ae,se),Y.el=de.el,K===null&&_a(R,de.el),b&&cn(b,ae),(ce=Y.props&&Y.props.onVnodeUpdated)&&cn(()=>Ln(ce,v,Y,B),ae)}else{let Y;const{el:Se,props:b}=U,{bm:v,m:B,parent:K,root:ce,type:de}=R,me=hs(U);if(Ki(R,!1),v&&Ca(v),!me&&(Y=b&&b.onVnodeBeforeMount)&&Ln(Y,K,U),Ki(R,!0),Se&&rt){const J=()=>{R.subTree=Fa(R),rt(Se,R.subTree,R,ae,null)};me&&de.__asyncHydrate?de.__asyncHydrate(Se,R,J):J()}else{ce.ce&&ce.ce._hasShadowRoot()&&ce.ce._injectChildStyle(de,R.parent?R.parent.type:void 0);const J=R.subTree=Fa(R);g(null,J,$,Q,R,ae,se),U.el=J.el}if(B&&cn(B,ae),!me&&(Y=b&&b.onVnodeMounted)){const J=U;cn(()=>Ln(Y,K,J),ae)}(U.shapeFlag&256||K&&hs(K.vnode)&&K.vnode.shapeFlag&256)&&R.a&&cn(R.a,ae),R.isMounted=!0,U=$=Q=null}};R.scope.on();const le=R.effect=new lh(C);R.scope.off();const ee=R.update=le.run.bind(le),Ee=R.job=le.runIfDirty.bind(le);Ee.i=R,Ee.id=R.uid,le.scheduler=()=>ru(Ee),Ki(R,!0),ee()},k=(R,U,$)=>{U.component=R;const Q=R.vnode.props;R.vnode=U,R.next=null,v_(R,U.props,Q,$),M_(R,U.children,$),Mi(),Qu(R),Ei()},V=(R,U,$,Q,ae,se,_e,C,le=!1)=>{const ee=R&&R.children,Ee=R?R.shapeFlag:0,Y=U.children,{patchFlag:Se,shapeFlag:b}=U;if(Se>0){if(Se&128){ve(ee,Y,$,Q,ae,se,_e,C,le);return}else if(Se&256){oe(ee,Y,$,Q,ae,se,_e,C,le);return}}b&8?(Ee&16&&te(ee,ae,se),Y!==ee&&c($,Y)):Ee&16?b&16?ve(ee,Y,$,Q,ae,se,_e,C,le):te(ee,ae,se,!0):(Ee&8&&c($,""),b&16&&y(Y,$,Q,ae,se,_e,C,le))},oe=(R,U,$,Q,ae,se,_e,C,le)=>{R=R||zs,U=U||zs;const ee=R.length,Ee=U.length,Y=Math.min(ee,Ee);let Se;for(Se=0;Se<Y;Se++){const b=U[Se]=le?mi(U[Se]):bn(U[Se]);g(R[Se],b,$,null,ae,se,_e,C,le)}ee>Ee?te(R,ae,se,!0,!1,Y):y(U,$,Q,ae,se,_e,C,le,Y)},ve=(R,U,$,Q,ae,se,_e,C,le)=>{let ee=0;const Ee=U.length;let Y=R.length-1,Se=Ee-1;for(;ee<=Y&&ee<=Se;){const b=R[ee],v=U[ee]=le?mi(U[ee]):bn(U[ee]);if(Bi(b,v))g(b,v,$,null,ae,se,_e,C,le);else break;ee++}for(;ee<=Y&&ee<=Se;){const b=R[Y],v=U[Se]=le?mi(U[Se]):bn(U[Se]);if(Bi(b,v))g(b,v,$,null,ae,se,_e,C,le);else break;Y--,Se--}if(ee>Y){if(ee<=Se){const b=Se+1,v=b<Ee?U[b].el:Q;for(;ee<=Se;)g(null,U[ee]=le?mi(U[ee]):bn(U[ee]),$,v,ae,se,_e,C,le),ee++}}else if(ee>Se)for(;ee<=Y;)be(R[ee],ae,se,!0),ee++;else{const b=ee,v=ee,B=new Map;for(ee=v;ee<=Se;ee++){const fe=U[ee]=le?mi(U[ee]):bn(U[ee]);fe.key!=null&&B.set(fe.key,ee)}let K,ce=0;const de=Se-v+1;let me=!1,J=0;const H=new Array(de);for(ee=0;ee<de;ee++)H[ee]=0;for(ee=b;ee<=Y;ee++){const fe=R[ee];if(ce>=de){be(fe,ae,se,!0);continue}let ue;if(fe.key!=null)ue=B.get(fe.key);else for(K=v;K<=Se;K++)if(H[K-v]===0&&Bi(fe,U[K])){ue=K;break}ue===void 0?be(fe,ae,se,!0):(H[ue-v]=ee+1,ue>=J?J=ue:me=!0,g(fe,U[ue],$,null,ae,se,_e,C,le),ce++)}const ie=me?T_(H):zs;for(K=ie.length-1,ee=de-1;ee>=0;ee--){const fe=v+ee,ue=U[fe],ne=U[fe+1],Te=fe+1<Ee?ne.el||np(ne):Q;H[ee]===0?g(null,ue,$,Te,ae,se,_e,C,le):me&&(K<0||ee!==ie[K]?we(ue,$,Te,2):K--)}}},we=(R,U,$,Q,ae=null)=>{const{el:se,type:_e,transition:C,children:le,shapeFlag:ee}=R;if(ee&6){we(R.component.subTree,U,$,Q);return}if(ee&128){R.suspense.move(U,$,Q);return}if(ee&64){_e.move(R,U,$,Ve);return}if(_e===jt){i(se,U,$);for(let Y=0;Y<le.length;Y++)we(le[Y],U,$,Q);i(R.anchor,U,$);return}if(_e===Pr){x(R,U,$);return}if(Q!==2&&ee&1&&C)if(Q===0)C.beforeEnter(se),i(se,U,$),cn(()=>C.enter(se),ae);else{const{leave:Y,delayLeave:Se,afterLeave:b}=C,v=()=>{R.ctx.isUnmounted?s(se):i(se,U,$)},B=()=>{se._isLeaving&&se[Hg](!0),Y(se,()=>{v(),b&&b()})};Se?Se(se,v,B):B()}else i(se,U,$)},be=(R,U,$,Q=!1,ae=!1)=>{const{type:se,props:_e,ref:C,children:le,dynamicChildren:ee,shapeFlag:Ee,patchFlag:Y,dirs:Se,cacheIndex:b,memo:v}=R;if(Y===-2&&(ae=!1),C!=null&&(Mi(),Xs(C,null,$,R,!0),Ei()),b!=null&&(U.renderCache[b]=void 0),Ee&256){U.ctx.deactivate(R);return}const B=Ee&1&&Se,K=!hs(R);let ce;if(K&&(ce=_e&&_e.onVnodeBeforeUnmount)&&Ln(ce,U,R),Ee&6)We(R.component,$,Q);else{if(Ee&128){R.suspense.unmount($,Q);return}B&&$n(R,null,U,"beforeUnmount"),Ee&64?R.type.remove(R,U,$,Ve,Q):ee&&!ee.hasOnce&&(se!==jt||Y>0&&Y&64)?te(ee,U,$,!1,!0):(se===jt&&Y&384||!ae&&Ee&16)&&te(le,U,$),Q&&$e(R)}const de=v!=null&&b==null;(K&&(ce=_e&&_e.onVnodeUnmounted)||B||de)&&cn(()=>{ce&&Ln(ce,U,R),B&&$n(R,null,U,"unmounted"),de&&(R.el=null)},$)},$e=R=>{const{type:U,el:$,anchor:Q,transition:ae}=R;if(U===jt){Qe($,Q);return}if(U===Pr){S(R);return}const se=()=>{s($),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(R.shapeFlag&1&&ae&&!ae.persisted){const{leave:_e,delayLeave:C}=ae,le=()=>_e($,se);C?C(R.el,se,le):le()}else se()},Qe=(R,U)=>{let $;for(;R!==U;)$=f(R),s(R),R=$;s(U)},We=(R,U,$)=>{const{bum:Q,scope:ae,job:se,subTree:_e,um:C,m:le,a:ee}=R;hf(le),hf(ee),Q&&Ca(Q),ae.stop(),se&&(se.flags|=8,be(_e,R,U,$)),C&&cn(C,U),cn(()=>{R.isUnmounted=!0},U)},te=(R,U,$,Q=!1,ae=!1,se=0)=>{for(let _e=se;_e<R.length;_e++)be(R[_e],U,$,Q,ae)},xe=R=>{if(R.shapeFlag&6)return xe(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=f(R.anchor||R.el),$=U&&U[Bg];return $?f($):U};let ge=!1;const Oe=(R,U,$)=>{let Q;R==null?U._vnode&&(be(U._vnode,null,null,!0),Q=U._vnode.component):g(U._vnode||null,R,U,null,null,null,$),U._vnode=R,ge||(ge=!0,Qu(Q),Wo(),ge=!1)},Ve={p:g,um:be,m:we,r:$e,mt:X,mc:y,pc:V,pbc:D,n:xe,o:t};let He,rt;return e&&([He,rt]=e(Ve)),{render:Oe,hydrate:He,createApp:c_(Oe,He)}}function Oa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ki({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ep(t,e,n=!1){const i=t.children,s=e.children;if(je(i)&&je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=mi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&ep(o,a)),a.type===ms&&(a.patchFlag===-1&&(a=s[r]=mi(a)),a.el=o.el),a.type===In&&!a.el&&(a.el=o.el)}}function T_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function tp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tp(e)}function hf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function np(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?np(e.subTree):null}const ip=t=>t.__isSuspense;let Gl=0;const A_={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,u){if(t==null)R_(e,n,i,s,r,o,a,l,u);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}C_(t,e,n,i,s,o,a,l,u)}},hydrate:P_,normalize:L_},w_=A_;function Or(t,e){const n=t.props&&t.props[e];qe(n)&&n()}function R_(t,e,n,i,s,r,o,a,l){const{p:u,o:{createElement:c}}=l,d=c("div"),f=t.suspense=sp(t,s,i,e,d,n,r,o,a,l);u(null,f.pendingBranch=t.ssContent,d,null,i,f,r,o),f.deps>0?(Or(t,"onPending"),Or(t,"onFallback"),u(null,t.ssFallback,e,n,i,null,r,o),$s(f,t.ssFallback)):f.resolve(!1,!0)}function C_(t,e,n,i,s,r,o,a,{p:l,um:u,o:{createElement:c}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const f=e.ssContent,h=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:_,isHydrating:m}=d;if(g)d.pendingBranch=f,Bi(g,f)?(l(g,f,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0?d.resolve():_&&(m||(l(p,h,n,i,s,null,r,o,a),$s(d,h)))):(d.pendingId=Gl++,m?(d.isHydrating=!1,d.activeBranch=g):u(g,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=c("div"),_?(l(null,f,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0?d.resolve():(l(p,h,n,i,s,null,r,o,a),$s(d,h))):p&&Bi(p,f)?(l(p,f,n,i,s,d,r,o,a),d.resolve(!0)):(l(null,f,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0&&d.resolve()));else if(p&&Bi(p,f))l(p,f,n,i,s,d,r,o,a),$s(d,f);else if(Or(e,"onPending"),d.pendingBranch=f,f.shapeFlag&512?d.pendingId=f.component.suspenseId:d.pendingId=Gl++,l(null,f,d.hiddenContainer,null,s,d,r,o,a),d.deps<=0)d.resolve();else{const{timeout:M,pendingId:x}=d;M>0?setTimeout(()=>{d.pendingId===x&&d.fallback(h)},M):M===0&&d.fallback(h)}}function sp(t,e,n,i,s,r,o,a,l,u,c=!1){const{p:d,m:f,um:h,n:p,o:{parentNode:g,remove:_}}=u;let m;const M=D_(t);M&&e&&e.pendingBranch&&(m=e.pendingId,e.deps++);const x=t.props?Wm(t.props.timeout):void 0,S=r,A={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Gl++,timeout:typeof x=="number"?x:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(T=!1,P=!1){const{vnode:y,activeBranch:w,pendingBranch:D,pendingId:L,effects:F,parentComponent:z,container:X,isInFallback:O}=A;let N=!1;if(A.isHydrating)A.isHydrating=!1;else if(!T){N=w&&D.transition&&D.transition.mode==="out-in";let oe=!1;N&&(w.transition.afterLeave=()=>{L===A.pendingId&&(f(D,X,r===S&&!oe?p(w):r,0),Fl(F),O&&y.ssFallback&&(y.ssFallback.el=null))}),w&&!A.isFallbackMountPending&&(g(w.el)===X&&(r=p(w),oe=!0),h(w,z,A,!0),!N&&O&&y.ssFallback&&cn(()=>y.ssFallback.el=null,A)),N||f(D,X,r,0)}A.isFallbackMountPending=!1,$s(A,D),A.pendingBranch=null,A.isInFallback=!1;let k=A.parent,V=!1;for(;k;){if(k.pendingBranch){k.effects.push(...F),V=!0;break}k=k.parent}!V&&!N&&Fl(F),A.effects=[],M&&e&&e.pendingBranch&&m===e.pendingId&&(e.deps--,e.deps===0&&!P&&e.resolve()),Or(y,"onResolve")},fallback(T){if(!A.pendingBranch)return;const{vnode:P,activeBranch:y,parentComponent:w,container:D,namespace:L}=A;Or(P,"onFallback");const F=p(y),z=()=>{A.isFallbackMountPending=!1,A.isInFallback&&(d(null,T,D,F,w,null,L,a,l),$s(A,T))},X=T.transition&&T.transition.mode==="out-in";X&&(A.isFallbackMountPending=!0,y.transition.afterLeave=z),A.isInFallback=!0,h(y,w,null,!0),X||z()},move(T,P,y){A.activeBranch&&f(A.activeBranch,T,P,y),A.container=T},next(){return A.activeBranch&&p(A.activeBranch)},registerDep(T,P,y){const w=!!A.pendingBranch;w&&A.deps++;const D=T.vnode.el;T.asyncDep.catch(L=>{rr(L,T,0)}).then(L=>{if(T.isUnmounted||A.isUnmounted||A.pendingId!==T.suspenseId)return;Vl(),T.asyncResolved=!0;const{vnode:F}=T;Wl(T,L),D&&(F.el=D);const z=!D&&T.subTree.el;P(T,F,g(D||T.subTree.el),D?null:p(T.subTree),A,o,y),z&&(F.placeholder=null,_(z)),_a(T,F.el),w&&--A.deps===0&&A.resolve()})},unmount(T,P){A.isUnmounted=!0,A.activeBranch&&h(A.activeBranch,n,T,P),A.pendingBranch&&h(A.pendingBranch,n,T,P)}};return A}function P_(t,e,n,i,s,r,o,a,l){const u=e.suspense=sp(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),c=l(t,u.pendingBranch=e.ssContent,n,u,r,o);return u.deps===0&&u.resolve(!1,!0),c}function L_(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=pf(i?n.default:n),t.ssFallback=i?pf(n.fallback):At(In)}function pf(t){let e;if(qe(t)){const n=Zs&&t._c;n&&(t._d=!1,xt()),t=t(),n&&(t._d=!0,e=vn,op())}return je(t)&&(t=h_(t)),t=bn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function rp(t,e){e&&e.pendingBranch?je(t)?e.effects.push(...t):e.effects.push(t):Fl(t)}function $s(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,_a(i,s))}function D_(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const jt=Symbol.for("v-fgt"),ms=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),Lr=[];let vn=null;function xt(t=!1){Lr.push(vn=t?null:[])}function op(){Lr.pop(),vn=Lr[Lr.length-1]||null}let Zs=1;function jo(t,e=!1){Zs+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function ap(t){return t.dynamicChildren=Zs>0?vn||zs:null,op(),Zs>0&&vn&&vn.push(t),t}function Yt(t,e,n,i,s,r){return ap(ze(t,e,n,i,s,r,!0))}function Kn(t,e,n,i,s){return ap(At(t,e,n,i,s,!0))}function Js(t){return t?t.__v_isVNode===!0:!1}function Bi(t,e){return t.type===e.type&&t.key===e.key}const lp=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||Gt(t)||qe(t)?{i:hn,r:t,k:e,f:!!n}:t:null);function ze(t,e=null,n=null,i=0,s=null,r=t===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lp(e),ref:e&&Do(e),scopeId:wh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(hu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),Zs>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const At=I_;function I_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Fh)&&(t=In),Js(t)){const a=vi(t,e,!0);return n&&hu(a,n),Zs>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(W_(t)&&(t=t.__vccOpts),e){e=cp(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Si(a)),pt(l)&&(ha(l)&&!je(l)&&(l=Qt({},l)),e.style=sr(l))}const o=wt(t)?1:ip(t)?128:kg(t)?64:pt(t)?4:qe(t)?2:0;return ze(t,e,n,i,s,o,r,!0)}function cp(t){return t?ha(t)||$h(t)?Qt({},t):t:null}function vi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,u=e?N_(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&lp(u),ref:e&&e.ref?n&&r?je(r)?r.concat(Do(e)):[r,Do(e)]:Do(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==jt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vi(t.ssContent),ssFallback:t.ssFallback&&vi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&lu(c,l.clone(c)),c}function Br(t=" ",e=0){return At(ms,null,t,e)}function U_(t,e){const n=At(Pr,null,t);return n.staticCount=e,n}function gs(t="",e=!1){return e?(xt(),Kn(In,null,t)):At(In,null,t)}function bn(t){return t==null||typeof t=="boolean"?At(In):je(t)?At(jt,null,t.slice()):Js(t)?mi(t):At(ms,null,String(t))}function mi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vi(t)}function hu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(je(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),hu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$h(e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:hn},n=32):(e=String(e),i&64?(n=16,e=[Br(e)]):n=8);t.children=e,t.shapeFlag|=n}function N_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Si([e.class,i.class]));else if(s==="style")e.style=sr([e.style,i.style]);else if(Wr(s)){const r=e[s],o=i[s];o&&r!==o&&!(je(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!aa(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Ln(t,e,n,i=null){ri(t,e,7,[n,i])}const F_=Gh();let O_=0;function B_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||F_,r={uid:O_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jh(i,s),emitsOptions:zh(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=f_.bind(null,r),t.ce&&t.ce(r),r}let Kt=null;const qr=()=>Kt||hn;let Yo,zl;{const t=fa(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),zl=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const jr=t=>{const e=Kt;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},Vl=()=>{Kt&&Kt.scope.off(),Yo(null)};function up(t){return t.vnode.shapeFlag&4}let Qs=!1;function k_(t,e=!1,n=!1){e&&zl(e);const{props:i,children:s}=t.vnode,r=up(t);__(t,i,r,e),S_(t,s,n||e);const o=r?H_(t,e):void 0;return e&&zl(!1),o}function H_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,n_);const{setup:i}=n;if(i){Mi();const s=t.setupContext=i.length>1?z_(t):null,r=jr(t),o=$r(i,t,0,[t.props,s]),a=Yc(o);if(Ei(),r(),(a||t.sp)&&!hs(t)&&cu(t),a){if(o.then(Vl,Vl),e)return o.then(l=>{Wl(t,l)}).catch(l=>{rr(l,t,0)});t.asyncDep=o}else Wl(t,o)}else fp(t)}function Wl(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=Eh(e)),fp(t)}function fp(t,e,n){const i=t.type;t.render||(t.render=i.render||ei);{const s=jr(t);Mi();try{i_(t)}finally{Ei(),s()}}}const G_={get(t,e){return sn(t,"get",""),t[e]}};function z_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,G_),slots:t.slots,emit:t.emit,expose:e}}function pu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Eh(yg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}})):t.proxy}function V_(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function W_(t){return qe(t)&&"__vccOpts"in t}const un=(t,e)=>Cg(t,e,Qs);function Vi(t,e,n){try{jo(-1);const i=arguments.length;return i===2?pt(e)&&!je(e)?Js(e)?At(t,null,[e]):At(t,e):At(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Js(n)&&(n=[n]),At(t,e,n))}finally{jo(1)}}const X_="3.5.34";let Xl;const mf=typeof window<"u"&&window.trustedTypes;if(mf)try{Xl=mf.createPolicy("vue",{createHTML:t=>t})}catch{}const dp=Xl?t=>Xl.createHTML(t):t=>t,$_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,gf=pi&&pi.createElement("template"),j_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?pi.createElementNS($_,t):e==="mathml"?pi.createElementNS(q_,t):n?pi.createElement(t,{is:n}):pi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>pi.createTextNode(t),createComment:t=>pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{gf.innerHTML=dp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=gf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y_=Symbol("_vtc");function K_(t,e,n){const i=t[Y_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _f=Symbol("_vod"),Z_=Symbol("_vsh"),J_=Symbol(""),Q_=/(?:^|;)\s*display\s*:/;function e0(t,e,n){const i=t.style,s=wt(n);let r=!1;if(n&&!s){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&br(i,a,"")}else for(const o in e)n[o]==null&&br(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?n0(t,o,!wt(e)&&e?e[o]:void 0,a)||br(i,o,a):br(i,o,"")}}else if(s){if(e!==n){const o=i[J_];o&&(n+=";"+o),i.cssText=n,r=Q_.test(n)}}else e&&t.removeAttribute("style");_f in t&&(t[_f]=r?i.display:"",t[Z_]&&(i.display="none"))}const vf=/\s*!important$/;function br(t,e,n){if(je(n))n.forEach(i=>br(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=t0(t,e);vf.test(n)?t.setProperty(ys(i),n.replace(vf,""),"important"):t[i]=n}}const xf=["Webkit","Moz","ms"],Ba={};function t0(t,e){const n=Ba[e];if(n)return n;let i=pn(e);if(i!=="filter"&&i in t)return Ba[e]=i;i=ua(i);for(let s=0;s<xf.length;s++){const r=xf[s]+i;if(r in t)return Ba[e]=r}return e}function n0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&wt(i)&&n===i}const yf="http://www.w3.org/1999/xlink";function Sf(t,e,n,i,s,r=Zm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yf,e.slice(6,e.length)):t.setAttributeNS(yf,e,n):n==null||r&&!sh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Rn(n)?String(n):n)}function Mf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function i0(t,e,n,i){t.addEventListener(e,n,i)}function s0(t,e,n,i){t.removeEventListener(e,n,i)}const Ef=Symbol("_vei");function r0(t,e,n,i,s=null){const r=t[Ef]||(t[Ef]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=o0(e);if(i){const u=r[e]=c0(i,s);i0(t,a,u,l)}else o&&(s0(t,a,o,l),r[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function o0(t){let e;if(bf.test(t)){e={};let i;for(;i=t.match(bf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ys(t.slice(2)),e]}let ka=0;const a0=Promise.resolve(),l0=()=>ka||(a0.then(()=>ka=0),ka=Date.now());function c0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ri(u0(i,n.value),e,5,[i])};return n.value=t,n.attached=l0(),n}function u0(t,e){if(je(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,f0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?K_(t,i,o):e==="style"?e0(t,n,i):Wr(e)?aa(e)||r0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):d0(t,e,i,o))?(Mf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sf(t,e,i,o,r,e!=="value")):t._isVueCE&&(h0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!wt(i)))?Mf(t,pn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Sf(t,e,i,o))};function d0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(e)&&wt(n)?!1:e in t}function h0(t,e){const n=t._def.props;if(!n)return!1;const i=pn(e);return Array.isArray(n)?n.some(s=>pn(s)===i):Object.keys(n).some(s=>pn(s)===i)}const p0=["ctrl","shift","alt","meta"],m0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>p0.some(n=>t[`${n}Key`]&&!e.includes(n))},g0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=m0[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},hp=Qt({patchProp:f0},j_);let Dr,Af=!1;function _0(){return Dr||(Dr=E_(hp))}function v0(){return Dr=Af?Dr:b_(hp),Af=!0,Dr}const x0=((...t)=>{const e=_0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=mp(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,pp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e}),y0=((...t)=>{const e=v0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=mp(i);if(s)return n(s,!0,pp(s))},e});function pp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mp(t){return wt(t)?document.querySelector(t):t}const S0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,M0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,E0=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function b0(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){T0(t);return}return e}function T0(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function A0(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!E0.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(S0.test(t)||M0.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,b0)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const gp=/#/g,_p=/&/g,w0=/\//g,R0=/=/g,C0=/\?/g,va=/\+/g,P0=/%5e/gi,L0=/%60/gi,D0=/%7c/gi,I0=/%20/gi,U0=/%2f/gi,N0=/%252f/gi;function vp(t){return encodeURI(""+t).replace(D0,"|")}function $l(t){return vp(typeof t=="string"?t:JSON.stringify(t)).replace(va,"%2B").replace(I0,"+").replace(gp,"%23").replace(_p,"%26").replace(L0,"`").replace(P0,"^").replace(w0,"%2F")}function Ha(t){return $l(t).replace(R0,"%3D")}function F0(t){return vp(t).replace(gp,"%23").replace(C0,"%3F").replace(N0,"%2F").replace(_p,"%26").replace(va,"%2B")}function kr(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function O0(t){return kr(t.replace(U0,"%252F"))}function B0(t){return kr(t.replace(va," "))}function k0(t){return kr(t.replace(va," "))}function mu(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const s=B0(i[1]);if(s==="__proto__"||s==="constructor")continue;const r=k0(i[2]||"");e[s]===void 0?e[s]=r:Array.isArray(e[s])?e[s].push(r):e[s]=[e[s],r]}return e}function H0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ha(t)}=${$l(n)}`).join("&"):`${Ha(t)}=${$l(e)}`:Ha(t)}function xp(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>H0(e,t[e])).filter(Boolean).join("&")}const G0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,z0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,V0=/^([/\\]\s*){2,}[^/\\]/,W0=/^[\s\0]*(blob|data|javascript|vbscript):$/i,X0=/\/$|\/\?|\/#/,$0=/^\.?\//;function ar(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?G0.test(t):z0.test(t)||(e.acceptRelative?V0.test(t):!1)}function q0(t){return!!t&&W0.test(t)}function ql(t="",e){return e?X0.test(t):t.endsWith("/")}function yp(t="",e){if(!e)return(ql(t)?t.slice(0,-1):t)||"/";if(!ql(t,!0))return t||"/";let n=t,i="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),i=t.slice(s));const[r,...o]=n.split("?");return((r.endsWith("/")?r.slice(0,-1):r)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function jl(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ql(t,!0))return t||"/";let n=t,i="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),i=t.slice(s),!n))return i;const[r,...o]=n.split("?");return r+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function j0(t=""){return t.startsWith("/")}function wf(t=""){return j0(t)?t:"/"+t}function Y0(t,e){if(Mp(e)||ar(t))return t;const n=yp(e);if(t.startsWith(n)){const i=t[n.length];if(!i||i==="/"||i==="?")return t}return xa(n,t)}function K0(t,e){if(Mp(e))return t;const n=yp(e);if(!t.startsWith(n))return t;const i=t[n.length];return i&&i!=="/"&&i!=="?"?t:"/"+t.slice(n.length).replace(/^\/+/,"")}function Sp(t,e){const n=gu(t),i={...mu(n.search),...e};return n.search=xp(i),Tp(n)}function Mp(t){return!t||t==="/"}function Z0(t){return t&&t!=="/"}function xa(t,...e){let n=t||"";for(const i of e.filter(s=>Z0(s)))if(n){const s=i.replace($0,"");n=jl(n)+s}else n=i;return n}function Ep(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&ar(i[0]))continue;i.pop(),s--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),s++}}let r=i.join("/");return s>=0?n[0]?.startsWith("/")&&!r.startsWith("/")?r="/"+r:n[0]?.startsWith("./")&&!r.startsWith("./")&&(r="./"+r):r="../".repeat(-1*s)+r,n[n.length-1]?.endsWith("/")&&!r.endsWith("/")&&(r+="/"),r}function J0(t,e,n={}){return n.trailingSlash||(t=jl(t),e=jl(e)),n.leadingSlash||(t=wf(t),e=wf(e)),n.encoding||(t=kr(t),e=kr(e)),t===e}const bp=Symbol.for("ufo:protocolRelative");function gu(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,f=""]=n;return{protocol:d.toLowerCase(),pathname:f,href:d+f,auth:"",host:"",search:"",hash:""}}if(!ar(t,{acceptRelative:!0}))return Rf(t);const[,i="",s,r=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=r.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=Rf(a);return{protocol:i.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:c,[bp]:!i}}function Rf(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function Tp(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",s=t.auth?t.auth+"@":"",r=t.host||"";return(t.protocol||t[bp]?(t.protocol||"")+"//":"")+s+r+e+n+i}class Q0 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function ev(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",i=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(i)}`,r=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${r}${e?` ${e}`:""}`,a=new Q0(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[u]}});return a}const tv=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Cf(t="GET"){return tv.has(t.toUpperCase())}function nv(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer||t instanceof FormData||t instanceof URLSearchParams?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const iv=new Set(["image/svg","application/xml","application/xhtml","application/html"]),sv=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function rv(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return sv.test(e)?"json":e==="text/event-stream"?"stream":iv.has(e)||e.startsWith("text/")?"text":"blob"}function ov(t,e,n,i){const s=av(e?.headers??t?.headers,n?.headers,i);let r;return(n?.query||n?.params||e?.params||e?.query)&&(r={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:r,params:r,headers:s}}function av(t,e,n){if(!e)return new n(t);const i=new n(e);if(t)for(const[s,r]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))i.set(s,r);return i}async function ro(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const lv=new Set([408,409,425,429,500,502,503,504]),cv=new Set([101,204,205,304]);function Ap(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=Cf(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):lv.has(d))){const f=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return f>0&&await new Promise(h=>setTimeout(h,f)),r(a.request,{...a.options,retry:c-1})}}const u=ev(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}const r=async function(l,u={}){const c={request:l,options:ov(l,u,t.defaults,n),response:void 0,error:void 0};if(c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&(await ro(c,c.options.onRequest),c.options.headers instanceof n||(c.options.headers=new n(c.options.headers||{}))),typeof c.request=="string"&&(c.options.baseURL&&(c.request=Y0(c.request,c.options.baseURL)),c.options.query&&(c.request=Sp(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Cf(c.options.method))if(nv(c.options.body)){const h=c.options.headers.get("content-type");typeof c.options.body!="string"&&(c.options.body=h==="application/x-www-form-urlencoded"?new URLSearchParams(c.options.body).toString():JSON.stringify(c.options.body)),h||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")}else("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"));let d;if(!c.options.signal&&c.options.timeout){const h=new i;d=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,h.abort(p)},c.options.timeout),c.options.signal=h.signal}try{c.response=await e(c.request,c.options)}catch(h){return c.error=h,c.options.onRequestError&&await ro(c,c.options.onRequestError),await s(c)}finally{d&&clearTimeout(d)}if((c.response.body||c.response._bodyInit)&&!cv.has(c.response.status)&&c.options.method!=="HEAD"){const h=(c.options.parseResponse?"json":c.options.responseType)||rv(c.response.headers.get("content-type")||"");switch(h){case"json":{const p=await c.response.text(),g=c.options.parseResponse||A0;c.response._data=g(p);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[h]()}}return c.options.onResponse&&await ro(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await ro(c,c.options.onResponseError),await s(c)):c.response},o=async function(l,u){return(await r(l,u))._data};return o.raw=r,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Ap({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Ko=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),uv=Ko.fetch?(...t)=>Ko.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),fv=Ko.Headers,dv=Ko.AbortController,hv=Ap({fetch:uv,Headers:fv,AbortController:dv}),pv=hv,mv=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,_u=()=>mv().app,gv=()=>_u().baseURL,_v=()=>_u().buildAssetsDir,vu=(...t)=>Ep(wp(),_v(),...t),wp=(...t)=>{const e=_u(),n=e.cdnURL||e.baseURL;return t.length?Ep(n,...t):n};globalThis.__buildAssetsURL=vu,globalThis.__publicAssetsURL=wp;globalThis.$fetch||(globalThis.$fetch=pv.create({baseURL:gv()}));"global"in globalThis||(globalThis.global=globalThis);function Yl(t,e={},n){for(const i in t){const s=t[i],r=n?`${n}:${i}`:i;typeof s=="object"&&s!==null?Yl(s,e,r):typeof s=="function"&&(e[r]=s)}return e}const Rp=(()=>{if(console.createTask)return console.createTask;const t={run:e=>e()};return()=>t})();function Cp(t,e,n,i){for(let s=n;s<t.length;s+=1)try{const r=i?i.run(()=>t[s](...e)):t[s](...e);if(r&&typeof r.then=="function")return Promise.resolve(r).then(()=>Cp(t,e,s+1,i))}catch(r){return Promise.reject(r)}}function vv(t,e,n){if(t.length>0)return Cp(t,e,0,Rp(n))}function xv(t,e,n){if(t.length>0){const i=Rp(n);return Promise.all(t.map(s=>i.run(()=>s(...e))))}}function Ga(t,e){for(const n of[...t])n(e)}var yv=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,n={}){if(!t||typeof e!="function")return()=>{};const i=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!n.allowDeprecated){let r=s.message;r||(r=`${i} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let n,i=(...s)=>(typeof n=="function"&&n(),n=void 0,i=void 0,e(...s));return n=this.hook(t,i),n}removeHook(t,e){const n=this._hooks[t];if(n){const i=n.indexOf(e);i!==-1&&n.splice(i,1),n.length===0&&(this._hooks[t]=void 0)}}clearHook(t){this._hooks[t]=void 0}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const n=this._hooks[t]||[];this._hooks[t]=void 0;for(const i of n)this.hook(t,i)}deprecateHooks(t){for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=Yl(t),n=Object.keys(e).map(i=>this.hook(i,e[i]));return()=>{for(const i of n)i();n.length=0}}removeHooks(t){const e=Yl(t);for(const n in e)this.removeHook(n,e[n])}removeAllHooks(){this._hooks={}}callHook(t,...e){return this.callHookWith(vv,t,e)}callHookParallel(t,...e){return this.callHookWith(xv,t,e)}callHookWith(t,e,n){const i=this._before||this._after?{name:e,args:n,context:{}}:void 0;this._before&&Ga(this._before,i);const s=t(this._hooks[e]?[...this._hooks[e]]:[],n,e);return s instanceof Promise?s.finally(()=>{this._after&&i&&Ga(this._after,i)}):(this._after&&i&&Ga(this._after,i),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}};function Pp(){return new yv}function Sv(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=r();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>r(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Kl.add(u);try{const c=s?s.run(o,a):a();return n||(e=void 0),await c}finally{Kl.delete(u)}}}}function Mv(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=Sv({...t,...i})),e[n]}}}const Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Pf="__unctx__",Ev=Zo[Pf]||(Zo[Pf]=Mv()),bv=(t,e={})=>Ev.get(t,e),Lf="__unctx_async_handlers__",Kl=Zo[Lf]||(Zo[Lf]=new Set);function Tv(t){const e=[];for(const s of Kl){const r=s();r&&e.push(r)}const n=()=>{for(const s of e)s()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(s=>{throw n(),s})),[i,n]}const Df={id:"__nuxt-loader"},Av=!0,sR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},wv="#__nuxt",Lp="nuxt-app",If=36e5,Rv="vite:preloadError";function Dp(t=Lp){return bv(t,{asyncContext:!1})}const Cv="__nuxt_plugin";function Pv(t){let e=0;const n={_id:t.id||Lp||"nuxt-app",_scope:Qm(),provide:void 0,versions:{get nuxt(){return"4.4.4"},get vue(){return n.vueApp.version}},payload:ss({...t.ssrContext?.payload||{},data:ss({}),state:Wi({}),once:new Set,_errors:ss({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Zc()?n._scope.run(()=>Uf(n,s)):Uf(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:ss({}),_state:ss({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const r in s)switch(r){case"data":case"state":case"_errors":Object.assign(n.payload[r],s[r]);break;default:n.payload[r]=s[r]}}n.hooks=Pp(),n.hook=n.hooks.hook;{const s=n.hooks.callHook;n.hooks.callHook=(r,...o)=>Promise.resolve().then(()=>s(r,...o))}n.callHook=n.hooks.callHook,n.provide=(s,r)=>{const o="$"+s;oo(n,o,r),oo(n.vueApp.config.globalProperties,o,r)},oo(n.vueApp,"$nuxt",n),oo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(Rv,r=>{n.callHook("app:chunkError",{error:r.payload}),r.payload.message.includes("Unable to preload CSS")&&r.preventDefault()}),window.useNuxtApp||=qt;const s=n.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});n.hook("app:mounted",s)}const i=n.payload.config;return n.provide("config",i),n}function Lv(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Dv(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function Iv(t,e){const n=new Set,i=[],s=[];let r,o=0;async function a(l){const u=l.dependsOn?.filter(c=>e.some(d=>d._name===c)&&!n.has(c))??[];if(u.length>0)i.push([new Set(u),l]);else{const c=Dv(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(i.map(async([d,f])=>{d.has(l._name)&&(d.delete(l._name),d.size===0&&(o++,await a(f)))})))}).catch(d=>{if(!l.parallel&&!t.payload.error)throw d;r||=d});l.parallel?s.push(c):await c}}for(const l of e)Lv(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(r)throw t.payload.error||r}function ji(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[Cv]:!0,_name:e})}function Uf(t,e,n){const i=()=>e();return Dp(t._id).set(t),t.vueApp.runWithContext(i)}function Uv(t){let e;return pa()&&(e=qr()?.appContext.app.$nuxt),e||=Dp(t).tryUse(),e||null}function qt(t){const e=Uv(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Hr(t){return qt().$config}function oo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function za(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Zl(t,e,n=".",i){if(!za(e))return Zl(t,{},n,i);const s={...e};for(const r of Object.keys(t)){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(i&&i(s,r,o,n)||(Array.isArray(o)&&Array.isArray(s[r])?s[r]=[...o,...s[r]]:za(o)&&za(s[r])?s[r]=Zl(o,s[r],(n?`${n}.`:"")+r.toString(),i):s[r]=o))}return s}function Nv(t){return(...e)=>e.reduce((n,i)=>Zl(n,i,"",t),{})}const Fv=Nv();function Ov(t,e){try{return e in t}catch{return!1}}class Nf extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Jl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Ip(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function Bv(t){if(typeof t=="string")return new Nf(t);if(kv(t))return t;const e=new Nf(t.message??t.statusMessage??"",{cause:t.cause||t});if(Ov(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Jl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Jl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Ip(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function kv(t){return t?.constructor?.__h3_error__===!0}const Hv=/[^\u0009\u0020-\u007E]/g;function Ip(t=""){return t.replace(Hv,"")}function Jl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Up=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const _s=()=>qt()?.$router,xu=()=>pa()?ds(Up,qt()._route):qt()._route;const Gv=()=>{try{if(qt()._processingMiddleware)return!0}catch{return!1}return!1},zv=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?Vv(t):_s().resolve(t).href;if(e?.open){const{target:u="_blank",windowFeatures:c={}}=e.open,d=[];for(const[f,h]of Object.entries(c))h!==void 0&&d.push(`${f.toLowerCase()}=${h}`);return open(n,u,d.join(", ")),Promise.resolve()}const i=ar(n,{acceptRelative:!0}),s=e?.external||i;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:u}=new URL(n,window.location.href);if(u&&q0(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)}const r=Gv();if(!s&&r){if(e?.replace){if(typeof t=="string"){const{pathname:u,search:c,hash:d}=gu(t);return{path:u,...c&&{query:mu(c)},...d&&{hash:d},replace:!0}}return{...t,replace:!0}}return t}const o=_s(),a=qt();if(s)return a._scope.stop(),e?.replace?location.replace(n):location.href=n,r?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve();const l=typeof t=="string"?Wv(t):t;return e?.replace?o.replace(l):o.push(l)};function Vv(t){return Sp(t.path||"",t.query||{})+(t.hash||"")}function Wv(t){const e=gu(t);return F0(O0(e.pathname))+e.search+e.hash}const Np="__nuxt_error",yu=()=>Ag(qt().payload,"error"),Xv=t=>{const e=Su(t);try{const n=yu();qt().hooks.callHook("app:error",e),n.value||=e}catch{throw e}return e},$v=async(t={})=>{const e=qt(),n=yu();e.callHook("app:error:cleared",t),t.redirect&&await _s().replace(t.redirect),n.value=void 0},qv=t=>!!t&&typeof t=="object"&&Np in t,Su=t=>{typeof t!="string"&&t.statusText&&(t.message??=t.statusText);const e=Bv(t);return Object.defineProperty(e,Np,{value:!0,configurable:!1,writable:!1}),Object.defineProperty(e,"status",{get:()=>e.statusCode,configurable:!0}),Object.defineProperty(e,"statusText",{get:()=>e.statusMessage,configurable:!0}),e};function jv(t){return Uint8Array.fromBase64(t).buffer}function Yv(t){return Uint8Array.from(Buffer.from(t,"base64")).buffer}function Kv(t){const e=atob(t),n=e.length,i=new Uint8Array(n);for(let s=0;s<n;s++)i[s]=e.charCodeAt(s);return i.buffer}const Zv=typeof Uint8Array.fromBase64=="function",Jv=typeof process=="object"&&process.versions?.node!==void 0,Qv=Zv?jv:Jv?Yv:Kv,ex=-1,tx=-2,nx=-3,ix=-4,sx=-5,rx=-6,ox=-7;function ax(t,e){return lx(JSON.parse(t),e)}function lx(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);let s=null;function r(o,a=!1){if(o===ex)return;if(o===nx)return NaN;if(o===ix)return 1/0;if(o===sx)return-1/0;if(o===rx)return-0;if(a||typeof o!="number")throw new Error("Invalid input");if(o in i)return i[o];const l=n[o];if(!l||typeof l!="object")i[o]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const u=l[0],c=e&&Object.hasOwn(e,u)?e[u]:void 0;if(c){let d=l[1];if(typeof d!="number"&&(d=n.push(l[1])-1),s??=new Set,s.has(d))throw new Error("Invalid circular reference");return s.add(d),i[o]=c(r(d)),s.delete(d),i[o]}switch(u){case"Date":i[o]=new Date(l[1]);break;case"Set":const d=new Set;i[o]=d;for(let p=1;p<l.length;p+=1)d.add(r(l[p]));break;case"Map":const f=new Map;i[o]=f;for(let p=1;p<l.length;p+=2)f.set(r(l[p]),r(l[p+1]));break;case"RegExp":i[o]=new RegExp(l[1],l[2]);break;case"Object":{const p=l[1];if(typeof n[p]=="object"&&n[p][0]!=="BigInt")throw new Error("Invalid input");i[o]=Object(r(p));break}case"BigInt":i[o]=BigInt(l[1]);break;case"null":const h=Object.create(null);i[o]=h;for(let p=1;p<l.length;p+=2){if(l[p]==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");h[l[p]]=r(l[p+1])}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(n[l[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const p=globalThis[u],g=r(l[1]);i[o]=l[2]!==void 0?new p(g,l[2],l[3]):new p(g);break}case"ArrayBuffer":{const p=l[1];if(typeof p!="string")throw new Error("Invalid ArrayBuffer encoding");const g=Qv(p);i[o]=g;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const p=u.slice(9);i[o]=Temporal[p].from(l[1]);break}case"URL":{const p=new URL(l[1]);i[o]=p;break}case"URLSearchParams":{const p=new URLSearchParams(l[1]);i[o]=p;break}default:throw new Error(`Unknown type ${u}`)}}else if(l[0]===ox){const u=l[1];if(!Number.isInteger(u)||u<0)throw new Error("Invalid input");const c=new Array(u);i[o]=c;for(let d=2;d<l.length;d+=2){const f=l[d];if(!Number.isInteger(f)||f<0||f>=u)throw new Error("Invalid input");c[f]=r(l[d+1])}}else{const u=new Array(l.length);i[o]=u;for(let c=0;c<l.length;c+=1){const d=l[c];d!==tx&&(u[c]=r(d))}}else{const u={};i[o]=u;for(const c of Object.keys(l)){if(c==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const d=l[c];u[c]=r(d)}}return i[o]}return r(0)}const cx=new Set(["link","style","script","noscript"]),ux=new Set(["title","titleTemplate","script","style","noscript"]),Ql=new Set(["base","meta","link","style","script","noscript"]),fx=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),dx=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),hx=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),px=new Set(["templateParams","htmlAttrs","bodyAttrs"]),mx=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),gx=["name","property","http-equiv"],_x=new Set(["viewport","description","keywords","robots"]);function Fp(t){const e=t.split(":");return e.length?mx.has(e[1]):!1}function ec(t){const{props:e,tag:n}=t;if(dx.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(n==="link"&&e.rel==="alternate"){if(e.hreflang)return`alternate:${e.hreflang}`;if(e.type)return`alternate:${e.type}:${e.href||""}`}if(e.charset)return"charset";if(t.tag==="meta"){for(const i of gx)if(e[i]!==void 0){const s=e[i],r=s&&typeof s=="string"&&s.includes(":"),o=s&&_x.has(s),l=!(r||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(n==="link"&&e.rel==="alternate")return`alternate:${e.href||""}`;if(ux.has(n)){const i=t.textContent||t.innerHTML;if(i)return`${n}:content:${i}`}}function Op(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([i,s])=>`${i}:${String(s)}`).join(",")}`}function Jo(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());const s=e?e(n,t):t;if(Array.isArray(s))return s.map(r=>Jo(r,e));if(s?.constructor===Object){const r={};for(const o of Object.keys(s))r[o]=Jo(s[o],e,o);return r}return s}function vx(t,e){const n=t==="style"?new Map:new Set;function i(s){if(s==null||s===void 0)return;const r=String(s).trim();if(r)if(t==="style"){const[o,...a]=r.split(":").map(l=>l?l.trim():"");o&&a.length&&n.set(o,a.join(":"))}else r.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(s=>i(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,r])=>{r&&r!=="false"&&(t==="style"?n.set(String(s).trim(),String(r)):i(s))}),n}function Bp(t,e){if(t.props=t.props||{},!e)return t;if(t.tag==="templateParams")return t.props=e,t;const n=Ql.has(t.tag)||t.tag==="htmlAttrs"||t.tag==="bodyAttrs";return Object.entries(e).forEach(([i,s])=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;if(s===null){t.props[i]=null;return}if(i==="class"||i==="style"){t.props[i]=vx(i,s);return}if(hx.has(i)){if((i==="textContent"||i==="innerHTML")&&typeof s=="object"){let u=e.type;if(e.type||(u="application/json"),!u?.endsWith("json")&&u!=="speculationrules")return;e.type=u,t.props.type=u,t[i]=JSON.stringify(s)}else t[i]=s;return}const r=i.startsWith("data-"),o=n&&!r?i.toLowerCase():i,a=String(s),l=t.tag==="meta"&&o==="content";a==="true"||a===""?t.props[o]=r||l?a:!0:!s&&r&&a==="false"?t.props[o]="false":s!==void 0&&(t.props[o]=s)}),t}function xx(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},i=Bp({tag:t,props:{}},n);return i.key&&cx.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(s=>({...i,props:{...i.props,content:s}})):i}function yx(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,r)=>{for(let o=0;o<e.length;o++)r=e[o](s,r);return r};t=n(void 0,t);const i=[];return t=Jo(t,n),Object.entries(t||{}).forEach(([s,r])=>{if(r!==void 0)for(const o of Array.isArray(r)?r:[r])i.push(xx(s,o))}),i.flat()}const Ff=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Of={base:-10,title:10},Sx={critical:-8,high:-1,low:2},Bf={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Mx=/@import/,pr=t=>t===""||t===!0;function Ex(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const i=Sx[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Bf;if(e.tag in Of)n=Of[e.tag];else if(e.tag==="meta"){const r=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;r&&(n=Bf.meta[r])}else if(e.tag==="link"&&e.props.rel)n=s.link[e.props.rel];else if(e.tag==="script"){const r=String(e.props.type);pr(e.props.async)?n=s.script.async:e.props.src&&!pr(e.props.defer)&&!pr(e.props.async)&&r!=="module"&&!r.endsWith("json")||e.innerHTML&&!r.endsWith("json")?n=s.script.sync:(pr(e.props.defer)&&e.props.src&&!pr(e.props.async)||r==="module")&&(n=s.script.defer)}else e.tag==="style"&&(n=e.innerHTML&&Mx.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+i}function kf(t,e){const n=typeof e=="function"?e(t):e,i=n.key||String(t.plugins.size+1);t.plugins.get(i)||(t.plugins.set(i,n),t.hooks.addHooks(n.hooks||{}))}function bx(t={}){const e=Pp();e.addHooks(t.hooks||{});const n=!t.document,i=new Map,s=new Map,r=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:i,headEntries(){return[...i.values()]},use:a=>kf(o,a),push(a,l){const u={...l||{}};delete u.head;const c=u._index??o._entryCount++,d={_i:c,input:a,options:u},f={_poll(h=!1){o.dirty=!0,!h&&r.add(c),e.callHook("entries:updated",o)},dispose(){i.delete(c)&&o.invalidate()},patch(h){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(d.input=h,i.set(c,d),f._poll())}};return f.patch(a),f},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);r.size;){const f=r.values().next().value;r.delete(f);const h=i.get(f);if(h){const p={tags:yx(h.input,t.propResolvers||[]).map(g=>Object.assign(g,h.options)),entry:h};await e.callHook("entries:normalize",p),h._tags=p.tags.map((g,_)=>(g._w=Ex(o,g),g._p=(h._i<<10)+_,g._d=ec(g),g._d||(g._h=Op(g)),g))}}let l=!1;a.entries.flatMap(f=>(f._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(Ff).reduce((f,h)=>{const p=h._d||h._h;if(!f.has(p))return f.set(p,h);const g=f.get(p);if((h?.tagDuplicateStrategy||(px.has(h.tag)?"merge":null)||(h.key&&h.key===g.key?"merge":null))==="merge"){const m={...g.props};Object.entries(h.props).forEach(([M,x])=>m[M]=M==="style"?new Map([...g.props.style||new Map,...x]):M==="class"?new Set([...g.props.class||new Set,...x]):x),f.set(p,{...h,props:m})}else h._p>>10===g._p>>10&&h.tag==="meta"&&Fp(p)?(f.set(p,Object.assign([...Array.isArray(g)?g:[g],h],h)),l=!0):(h._w===g._w?h._p>g._p:h?._w<g?._w)&&f.set(p,h);return f},a.tagMap);const u=a.tagMap.get("title"),c=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,c){const f=c?.textContent;if(o._titleTemplate=f,f){let h=typeof f=="function"?f(u?.textContent):f;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",u?.textContent||"")),u?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:h}):(c.tag="title",c.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Ff)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const d=[];for(const f of a.tags){const{innerHTML:h,tag:p,props:g}=f;if(fx.has(p)&&!(Object.keys(g).length===0&&!f.innerHTML&&!f.textContent)&&!(p==="meta"&&!g.content&&!g["http-equiv"]&&!g.charset)){if(p==="script"&&h){if(String(g.type).endsWith("json")){const _=typeof h=="string"?h:JSON.stringify(h);f.innerHTML=_.replace(/</g,"\\u003C")}else typeof h=="string"&&(f.innerHTML=h.replace(new RegExp(`</${p}`,"g"),`<\\/${p}`));f._d=ec(f)}d.push(f)}}return d},invalidate(){for(const a of i.values())r.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>kf(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Tx=(t,e)=>Gt(e)?Mg(e):e,Mu="usehead";function Ax(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Mu,t)}}.install}function wx(){if(pa()){const t=ds(Mu);if(t)return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function Rx(t,e={}){const n=e.head||wx();return n.ssr?n.push(t||{},e):Cx(n,t,e)}function Cx(t,e,n={}){const i=Dt(!1);let s;return Fg(()=>{const o=i.value?{}:Jo(e,Tx);s?s.patch(o):s=t.push(o,n)}),qr()&&(Ih(()=>{s.dispose()}),Lh(()=>{i.value=!0}),Ph(()=>{i.value=!1})),s}function kp(t){const e=t||qt();return e.ssrContext?.head||e.runWithContext(()=>{if(pa()){const n=ds(Mu);if(!n)throw new Error("[nuxt] [unhead] Missing Unhead instance.");return n}})}function rR(t,e={}){const n=e.head||kp(e.nuxt);return Rx(t,{head:n,...e})}const Px=(t,e)=>[],Lx=t=>Fv({},...Px().map(e=>e.data).reverse()),Dx=Lx;let Io;function Ix(){let t;return t=$fetch(vu(`builds/meta/${Hr().app.buildId}.json`),{responseType:"json"}),Io=t,t.catch(e=>{Io===t&&(Io=void 0),console.error("[nuxt] Error fetching app manifest.",e)}),t}function Eu(){return Io||Ix()}function ya(t){const e=typeof t=="string"?t:t.path;try{return Dx(e)}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Hf(t,e={}){if(await Fx(t)){const n=await Nx(t,e);return await Hp(n)||null}return null}const Ux="_payload.json";async function Nx(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||ar(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=Hr(),s=e.hash||(e.fresh?Date.now():i.app.buildId),r=i.app.cdnURL,o=r&&await Ox(t)?r:i.app.baseURL;return xa(o,n.pathname,Ux+(s?`?${s}`:""))}async function Hp(t){try{if(Av){const e=await fetch(t,{cache:"force-cache"});return e.ok?await Vp(await e.text()):null}}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function Gp(t){if(t.redirect)return!1;if(t.prerender)return!0}async function zp(t){return t=t==="/"?t:t.replace(/\/$/,""),(await Eu()).prerendered.includes(t)}async function Fx(t=xu().path){const e=ya({path:t});if(e.ssr===!1)return!1;const n=Gp(e);return n!==void 0?n:e.payload?!0:await zp(t)}async function Ox(t=xu().path){const e=Gp(ya({path:t}));return e!==void 0?e:await zp(t)}let Zi=null;async function Bx(){if(Zi)return Zi;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Vp(t.textContent||""),n=t.dataset.src?await Hp(t.dataset.src):void 0;return Zi={...e,...n,...window.__NUXT__},Zi.config?.public&&(Zi.config.public=Wi(Zi.config.public)),Zi}async function Vp(t){return await ax(t,qt()._payloadRevivers)}function kx(t,e){qt()._payloadRevivers[t]=e}function Gf(t){try{return JSON.parse(t)}catch{return t}}const Hx=[["NuxtError",t=>Su(t)],["EmptyShallowRef",t=>Jt(t==="_"?void 0:t==="0n"?BigInt(0):Gf(t))],["EmptyRef",t=>Dt(t==="_"?void 0:t==="0n"?BigInt(0):Gf(t))],["ShallowRef",t=>Jt(t)],["ShallowReactive",t=>ss(t)],["Ref",t=>Dt(t)],["Reactive",t=>Wi(t)]],Gx=ji({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[i,s]of Hx)kx(i,s);Object.assign(t.payload,([e,n]=Tv(()=>t.runWithContext(Bx)),e=await e,n(),e)),delete window.__NUXT__}});async function bu(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const r=new Map,o=new Promise(h=>{t.resolveTags().then(p=>{h(p.map(g=>{const _=r.get(g._d)||0,m={tag:g,id:(_?`${g._d}:${_}`:g._d)||g._h,shouldRender:!0};return g._d&&Fp(g._d)&&r.set(g._d,_+1),m}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const h of["body","head"]){const p=n[h]?.children;for(const g of p){const _=g.tagName.toLowerCase();if(!Ql.has(_))continue;const m=Bp({tag:_,props:{}},{innerHTML:g.innerHTML,...g.getAttributeNames().reduce((M,x)=>(M[x]=g.getAttribute(x),M),{})||{}});if(m.key=g.getAttribute("data-hid")||void 0,m._d=ec(m)||Op(m),a.elMap.has(m._d)){let M=1,x=m._d;for(;a.elMap.has(x);)x=`${m._d}:${M++}`;a.elMap.set(x,g)}else a.elMap.set(m._d,g)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,p,g){const _=`${h}:${p}`;a.sideEffects[_]=g,delete a.pendingSideEffects[_]}function u({id:h,$el:p,tag:g}){const _=g.tag.endsWith("Attrs");a.elMap.set(h,p),_||(g.textContent&&g.textContent!==p.textContent&&(p.textContent=g.textContent),g.innerHTML&&g.innerHTML!==p.innerHTML&&(p.innerHTML=g.innerHTML),l(h,"el",()=>{p?.remove(),a.elMap.delete(h)}));for(const m in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,m))continue;const M=g.props[m];if(m.startsWith("on")&&typeof M=="function"){const S=p?.dataset;if(S&&S[`${m}fired`]){const A=m.slice(0,-5);M.call(p,new Event(A.substring(2)))}p.getAttribute(`data-${m}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(m.substring(2),M.bind(p)),p.setAttribute(`data-${m}`,""));continue}const x=`attr:${m}`;if(m==="class"){if(!M)continue;for(const S of M)_&&l(h,`${x}:${S}`,()=>p.classList.remove(S)),!p.classList.contains(S)&&p.classList.add(S)}else if(m==="style"){if(!M)continue;for(const[S,A]of M)l(h,`${x}:${S}`,()=>{p.style.removeProperty(S)}),p.style.setProperty(S,A)}else M!==!1&&M!==null&&(p.getAttribute(m)!==M&&p.setAttribute(m,M===!0?"":String(M)),_&&l(h,x,()=>p.removeAttribute(m)))}}const c=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},f=await o;for(const h of f){const{tag:p,shouldRender:g,id:_}=h;if(g){if(p.tag==="title"){n.title=p.textContent,l("title","",()=>n.title=a.title);continue}h.$el=h.$el||a.elMap.get(_),h.$el?u(h):Ql.has(p.tag)&&c.push(h)}}for(const h of c){const p=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),u(h),d[p]=d[p]||n.createDocumentFragment(),d[p].appendChild(h.$el)}for(const h of f)await t.hooks.callHook("dom:renderTag",h,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:f}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function zx(t={}){const e=t.domOptions?.render||bu;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return bx({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function Vx(t,e){let n=0;return()=>{const i=++n;e(()=>{n===i&&t()})}}function Wx(t={}){const e=zx({domOptions:{render:Vx(()=>bu(e),n=>setTimeout(n,0))},...t});return e.install=Ax(e),e}const Xx={disableDefaults:!0},$x=ji({name:"nuxt:head",enforce:"pre",setup(t){const e=Wx(Xx);t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await bu(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}}),qx=t=>{const e=ya({path:t.path});if(e.redirect){const n=e.redirect.includes("#")?e.redirect:e.redirect+t.hash;return ar(n,{acceptRelative:!0})?(window.location.href=n,!1):n}},jx=[qx];function Va(t){const e=t&&typeof t=="object"?t:{};typeof t=="object"&&(t=Tp({pathname:t.path||"",search:xp(t.query||{}),hash:t.hash||""}));const n=new URL(t.toString(),window.location.href);return{path:n.pathname,fullPath:t,query:mu(n.search),hash:n.hash,params:e.params||{},name:void 0,matched:e.matched||[],redirectedFrom:void 0,meta:e.meta||{},href:t}}const Yx=ji({name:"nuxt:router",enforce:"pre",setup(t){const e=K0(window.location.pathname,Hr().app.baseURL)+window.location.search+window.location.hash,n=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(f,h)=>(i[f].push(h),()=>i[f].splice(i[f].indexOf(h),1)),r=Hr().app.baseURL,o=Wi(Va(e));async function a(f,h){try{const p=Va(f);for(const g of i["navigate:before"]){const _=await g(p,o);if(_===!1||_ instanceof Error)return;if(typeof _=="string"&&_.length)return await a(_,!0)}for(const g of i["resolve:before"])await g(p,o);Object.assign(o,p),window.history[h?"replaceState":"pushState"]({},"",xa(r,p.fullPath)),t.isHydrating||await t.runWithContext($v);for(const g of i["navigate:after"])await g(p,o)}catch(p){for(const g of i.error)await g(p)}}const u={currentRoute:un(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:f=>a(f,!1),replace:f=>a(f,!0),back:()=>window.history.go(-1),go:f=>window.history.go(f),forward:()=>window.history.go(1),beforeResolve:f=>s("resolve:before",f),beforeEach:f=>s("navigate:before",f),afterEach:f=>s("navigate:after",f),onError:f=>s("error",f),resolve:Va,addRoute:(f,h)=>{n.push(h)},getRoutes:()=>n,hasRoute:f=>n.some(h=>h.name===f),removeRoute:f=>{const h=n.findIndex(p=>p.name===f);h!==-1&&n.splice(h,1)}};t.vueApp.component("RouterLink",qi({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(f,{slots:h})=>{const p=()=>a(f.to,f.replace);return()=>{const g=u.resolve(f.to);return f.custom?h.default?.({href:f.to,navigate:p,route:g}):Vi("a",{href:f.to,onClick:_=>(_.preventDefault(),p())},h)}}})),window.addEventListener("popstate",f=>{const h=f.target.location;u.replace(h.href.replace(h.origin,""))}),t._route=o,t._middleware||={global:[],named:{}};const c=t.payload.state._layout,d=t.payload.state._layoutProps;return t.hooks.hookOnce("app:created",async()=>{u.beforeEach(async(f,h)=>{f.meta=Wi(f.meta||{}),t.isHydrating&&c&&!si(f.meta.layout)&&(f.meta.layout=c,f.meta.layoutProps=d),t._processingMiddleware=!0;{const p=new Set([...jx,...t._middleware.global]),g=ya({path:f.path});if(g.appMiddleware)for(const _ in g.appMiddleware){const m=t._middleware.named[_];m&&(g.appMiddleware[_]?p.add(m):p.delete(m))}for(const _ of p){const m=await t.runWithContext(()=>_(f,h));if(m!==!0&&(m||m===!1))return m}}}),u.afterEach(()=>{delete t._processingMiddleware}),await u.replace(e),J0(o.fullPath,e)||await t.runWithContext(()=>zv(o.fullPath))}),{provide:{route:o,router:u}}}}),zf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),oR=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Tu=t=>{const e=qt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{zf(()=>t())}):zf(()=>t())},Kx=ji({name:"nuxt:payload",setup(t){const e=new Set;_s().beforeResolve(async(n,i)=>{if(n.path===i.path)return;const s=await Hf(n.path);if(s){for(const r of e)delete t.static.data[r];for(const r in s.data)r in t.static.data||e.add(r),t.static.data[r]=s.data[r]}}),Tu(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await Hf(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Eu,1e3)})}}),Zx=ji(()=>{const t=_s();Tu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Jx=ji(t=>{let e;async function n(){let i;try{i=await Eu()}catch(s){const r=s;if(!("status"in r&&(r.status===404||r.status===403)))throw r}e&&clearTimeout(e),e=setTimeout(n,If);try{const s=await $fetch(vu("builds/latest.json")+`?${Date.now()}`);s.id!==i?.id&&(t.hooks.callHook("app:manifest:update",s),e&&clearTimeout(e))}catch{}}Tu(()=>{e=setTimeout(n,If)})});function Qx(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:qt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const ey=ji({name:"nuxt:chunk-reload",setup(t){const e=_s(),n=Hr(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:r})=>{i.add(r)});function s(r){const o=xa(n.app.baseURL,r.fullPath);Qx({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((r,o)=>{i.has(r)&&s(o)})}}),ty=ji({name:"nuxt:global-components"}),ny=[Gx,$x,Yx,Kx,Zx,Jx,ey,ty];function iy(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return Wp(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(i=>{i.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}}function Wp(t,e=[],n=!1){if(t&&t.nodeName){if(oy(t))return e;if(!ry(t)){const i=t.cloneNode(!0);n&&i.querySelectorAll?.("[data-island-slot]").forEach(s=>{s.innerHTML=""}),e.push(i.outerHTML)}Wp(t.nextSibling,e,n)}return e}function sy(t,e){const n=t?iy(t):[e];return n?U_(n.join(""),n.length):Vi("div")}function ry(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function oy(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const ay="<div></div>";function ly(t){return t.nodeName==="#comment"&&t.nodeValue==="placeholder"}function Wa(t){return t&&!ly(t)?sy(t,ay):Vi("div")}const Xa=new WeakMap;function cy(t){if(Xa.has(t))return Xa.get(t);const e={...t};if(e.render)e.render=(n,i,s,r,o,a)=>{if(r.mounted$??n.mounted$){const l=t.render?.bind(n)(n,i,s,r,o,a);return l.children===null||typeof l.children=="string"?vi(l):Vi(l)}return Wa(n._.vnode.el)};else{const n="<div></div>";e.template&&=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${n}</template>
    `}return e.setup=(n,i)=>{const s=qt(),r=Jt(s.isHydrating===!1),o=qr();if(s.isHydrating){const l={...o.attrs},u=uy(o);for(const c in l)delete o.attrs[c];Ks(()=>{Object.assign(o.attrs,l),o.vnode.dirs=u})}Ks(()=>{r.value=!0});const a=t.setup?.(n,i)||{};return Yc(a)?Promise.resolve(a).then(l=>typeof l!="function"?(l||={},l.mounted$=r,l):(...u)=>{if(r.value||!s.isHydrating){const c=l(...u);return c.children===null||typeof c.children=="string"?vi(c):Vi(c)}return Wa(o?.vnode.el)}):typeof a=="function"?(...l)=>{if(r.value){const u=a(...l),c=e.inheritAttrs!==!1?i.attrs:void 0;return u.children===null||typeof u.children=="string"?vi(u,c):Vi(u,c)}return Wa(o?.vnode.el)}:Object.assign(a,{mounted$:r})},Xa.set(t,e),e}function uy(t){if(!t||!t.vnode.dirs)return null;const e=t.vnode.dirs;return t.vnode.dirs=null,e}function fy(t={}){const e=Jt(""),n=Jt(t.politeness||"polite"),i=kp();function s(u="",c="polite"){e.value=u,n.value=c}function r(u){s(u,"polite")}function o(u){s(u,"assertive")}function a(){s(document?.title?.trim(),n.value)}function l(){i?.hooks?.removeHook("dom:rendered",a)}return a(),i?.hooks?.hook("dom:rendered",a),{_cleanup:l,message:e,politeness:n,set:s,polite:r,assertive:o}}function dy(t={}){const e=qt(),n=e._routeAnnouncer||=fy(t);return t.politeness&&t.politeness!==n.politeness.value&&(n.politeness.value=t.politeness),Zc()&&(e._routeAnnouncerDeps||=0,e._routeAnnouncerDeps++,eg(()=>{e._routeAnnouncerDeps--,e._routeAnnouncerDeps===0&&(n._cleanup(),delete e._routeAnnouncer)})),n}const hy=qi({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(t,{slots:e,expose:n}){const{set:i,polite:s,assertive:r,message:o,politeness:a}=dy({politeness:t.politeness}),l=un(()=>{if(a.value==="assertive")return"alert";if(a.value!=="off")return"status"});return n({set:i,polite:s,assertive:r,message:o,politeness:a}),()=>Vi("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},Vi("span",{role:l.value,"aria-live":a.value,"aria-atomic":t.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},e.default?e.default({message:o.value}):o.value))}});var Ke=(t=>(t.UP="UP",t.DOWN="DOWN",t.LEFT="LEFT",t.RIGHT="RIGHT",t))(Ke||{}),fn=(t=>(t.IDLE="IDLE",t.PLAYING="PLAYING",t.PAUSED="PAUSED",t.GAME_OVER="GAME_OVER",t))(fn||{});const py={gridCols:80,gridRows:80,initialSpeed:8,speedIncrement:1,scorePerSpeedUp:5},my={UP:"DOWN",DOWN:"UP",LEFT:"RIGHT",RIGHT:"LEFT"},Ir={UP:{x:0,y:-1},DOWN:{x:0,y:1},LEFT:{x:-1,y:0},RIGHT:{x:1,y:0}},gy={class:"overlay__content"},_y={key:0,class:"overlay__screen"},vy={key:0,class:"overlay__highscore"},xy={key:1,class:"overlay__screen"},yy={class:"overlay__subtitle"},Sy={key:2,class:"overlay__screen"},My={class:"overlay__score"},Ey={class:"overlay__highscore"},by={key:0,class:"overlay__new-record"},Ty=qi({__name:"GameOverlay",props:{state:{},score:{},highScore:{},isNewRecord:{type:Boolean}},emits:["start","resume","restart"],setup(t){const e=fn,n=t,i=un(()=>n.state!==e.PLAYING);return(s,r)=>(xt(),Yt("div",{class:Si(["overlay",{"overlay--hidden":!i.value}]),role:"dialog","aria-modal":"true"},[ze("div",gy,[t.state===Mt(e).IDLE?(xt(),Yt("div",_y,[r[3]||(r[3]=ze("h1",{class:"overlay__title"},"🐍 Snake Game",-1)),r[4]||(r[4]=ze("p",{class:"overlay__subtitle"},"Управление: стрелки / WASD / свайпы",-1)),r[5]||(r[5]=ze("p",{class:"overlay__hint"},"Пауза: P или Space",-1)),ze("button",{class:"overlay__btn",onClick:r[0]||(r[0]=o=>s.$emit("start")),autofocus:"","aria-label":"Начать игру"}," Начать игру "),t.highScore>0?(xt(),Yt("p",vy," 🏆 Рекорд: "+kt(t.highScore),1)):gs("",!0)])):t.state===Mt(e).PAUSED?(xt(),Yt("div",xy,[r[6]||(r[6]=ze("h2",{class:"overlay__title"},"⏸ Пауза",-1)),ze("p",yy,"Счёт: "+kt(t.score),1),ze("button",{class:"overlay__btn",onClick:r[1]||(r[1]=o=>s.$emit("resume")),autofocus:"","aria-label":"Продолжить игру"}," Продолжить ")])):t.state===Mt(e).GAME_OVER?(xt(),Yt("div",Sy,[r[7]||(r[7]=ze("h2",{class:"overlay__title"},"💀 Game Over",-1)),ze("p",My,"Счёт: "+kt(t.score),1),ze("p",Ey,[Br(" 🏆 Рекорд: "+kt(t.highScore)+" ",1),t.isNewRecord?(xt(),Yt("span",by,"Новый рекорд!")):gs("",!0)]),ze("button",{class:"overlay__btn",onClick:r[2]||(r[2]=o=>s.$emit("restart")),autofocus:"","aria-label":"Играть снова"}," Играть снова ")])):gs("",!0)])],2))}}),Sa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Ay=Object.assign(Sa(Ty,[["__scopeId","data-v-f77a959d"]]),{__name:"GameOverlay"});function wy(t){const e=Dt([]),n=Dt([]),i=Jt(Ke.RIGHT),s=Jt(Ke.RIGHT),r=[],o=Dt({x:0,y:0,type:"normal",points:1});let a=0;const l=(h=3)=>{const p=Math.floor(t.cols/2),g=Math.floor(t.rows/2),_=[];for(let m=0;m<h;m++)_.push({x:p-m,y:g,id:a++});e.value=_,n.value=e.value.map(m=>({...m})),i.value=Ke.RIGHT,s.value=Ke.RIGHT,r.length=0,u()},u=()=>{const h=new Set(e.value.map(M=>`${M.x},${M.y}`)),p=t.cols*t.rows;if(h.size>=p)return;let g,_=0;const m=p;do g={x:Math.floor(Math.random()*t.cols),y:Math.floor(Math.random()*t.rows)},_++;while(h.has(`${g.x},${g.y}`)&&_<m);h.has(`${g.x},${g.y}`)||(o.value={...g,type:"normal",points:1})};return{snake:Ct(e),prevSnake:Ct(n),direction:Ct(i),nextDirection:Ct(s),food:Ct(o),reset:l,move:()=>{if(e.value.length===0)return!1;n.value=e.value.map(A=>({...A})),r.length>0&&(s.value=r.shift()),i.value=s.value;const h=e.value[0],p=Ir[i.value],g=h.x+p.x,_=h.y+p.y,m=(g%t.cols+t.cols)%t.cols,M=(_%t.rows+t.rows)%t.rows,x={x:m,y:M,id:a++},S=x.x===o.value.x&&x.y===o.value.y;return e.value.unshift(x),n.value.unshift({...h}),S||(e.value.pop(),n.value.pop()),S},spawnFood:u,setDirection:h=>{const p=r.length>0?r[r.length-1]:i.value;my[h]!==p&&h!==p&&r.length<2&&r.push(h)},checkCollision:(h=[])=>{if(e.value.length===0)return!1;const p=e.value[0];for(let g=1;g<e.value.length;g++){const _=e.value[g];if(_.x===p.x&&_.y===p.y)return!0}for(const g of h)if(g.x===p.x&&g.y===p.y)return!0;return!1}}}const Vf="snake_high_score";function Ry(t,e,n,i=()=>1){const s=Jt(0),r=Jt(a()),o=Jt(t);function a(){try{const d=localStorage.getItem(Vf);return d?parseInt(d,10):0}catch{return 0}}return{score:Ct(s),highScore:Ct(r),speed:Ct(o),addScore:(d,f=!0)=>{const h=Math.max(1,Math.round(d*i()));if(s.value+=h,f){const p=t+Math.floor(s.value/n)*e;o.value=p}},reset:()=>{s.value=0,o.value=t},saveHighScore:()=>{if(s.value>r.value){r.value=s.value;try{localStorage.setItem(Vf,String(s.value))}catch{}}}}}const Wf={ArrowUp:Ke.UP,ArrowDown:Ke.DOWN,ArrowLeft:Ke.LEFT,ArrowRight:Ke.RIGHT,w:Ke.UP,W:Ke.UP,s:Ke.DOWN,S:Ke.DOWN,a:Ke.LEFT,A:Ke.LEFT,d:Ke.RIGHT,D:Ke.RIGHT,ц:Ke.UP,Ц:Ke.UP,ы:Ke.DOWN,Ы:Ke.DOWN,ф:Ke.LEFT,Ф:Ke.LEFT,в:Ke.RIGHT,В:Ke.RIGHT},Cy=new Set(["ArrowLeft","a","A","ф","Ф"]),Py=new Set(["ArrowRight","d","D","в","В"]),$a=[Ke.UP,Ke.RIGHT,Ke.DOWN,Ke.LEFT],qa=(t,e)=>{const n=$a.indexOf(t);return $a[(n+(e==="right"?1:3))%$a.length]};function Ly(t,e,n,i=()=>!1,s=()=>Ke.RIGHT,r=()=>{},o=()=>{}){let a=0,l=0;const u=30,c=p=>{if(i()){if(Cy.has(p.key)){p.preventDefault(),t(qa(s(),"left"));return}if(Py.has(p.key)){p.preventDefault(),t(qa(s(),"right"));return}if(Wf[p.key]){p.preventDefault();return}}else{const g=Wf[p.key];if(g){p.preventDefault(),t(g);return}}if(p.key==="p"||p.key==="P"||p.key==="з"||p.key==="З"){p.preventDefault(),e();return}if(p.key===" "){p.preventDefault(),p.repeat||r();return}p.key==="Enter"&&(p.preventDefault(),n())},d=p=>{p.key===" "&&(p.preventDefault(),o())},f=p=>{const g=p.touches[0];g&&(a=g.clientX,l=g.clientY)},h=p=>{const g=p.changedTouches[0];let _=0,m=0;g&&(_=g.clientX-a,m=g.clientY-l);const M=Math.abs(_),x=Math.abs(m);if(!(Math.max(M,x)<u)){if(p.preventDefault(),i()){M>x&&t(qa(s(),_>0?"right":"left"));return}M>x?t(_>0?Ke.RIGHT:Ke.LEFT):t(m>0?Ke.DOWN:Ke.UP)}};Ks(()=>{window.addEventListener("keydown",c),window.addEventListener("keyup",d),window.addEventListener("touchstart",f,{passive:!0}),window.addEventListener("touchend",h,{passive:!1})}),or(()=>{window.removeEventListener("keydown",c),window.removeEventListener("keyup",d),window.removeEventListener("touchstart",f),window.removeEventListener("touchend",h)})}const Au="184",Dy=0,Xf=1,Iy=2,Uo=1,Xp=2,Tr=3,Xi=0,xn=1,Zn=2,xi=0,qs=1,$f=2,qf=3,jf=4,Uy=5,rs=100,Ny=101,Fy=102,Oy=103,By=104,ky=200,Hy=201,Gy=202,zy=203,tc=204,nc=205,Vy=206,Wy=207,Xy=208,$y=209,qy=210,jy=211,Yy=212,Ky=213,Zy=214,ic=0,sc=1,rc=2,er=3,oc=4,ac=5,lc=6,cc=7,$p=0,Jy=1,Qy=2,ti=0,qp=1,jp=2,Yp=3,Kp=4,Zp=5,Jp=6,Qp=7,em=300,vs=301,tr=302,ja=303,Ya=304,Ma=306,uc=1e3,_i=1001,fc=1002,Zt=1003,eS=1004,ao=1005,rn=1006,Ka=1007,ls=1008,An=1009,tm=1010,nm=1011,Gr=1012,wu=1013,oi=1014,Jn=1015,bi=1016,Ru=1017,Cu=1018,zr=1020,im=35902,sm=35899,rm=1021,om=1022,Bn=1023,Ti=1026,cs=1027,am=1028,Pu=1029,xs=1030,Lu=1031,Du=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,dc=35840,hc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37488,yc=37489,Qo=37490,Sc=37491,Mc=37808,Ec=37809,bc=37810,Tc=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Ic=37819,Uc=37820,Nc=37821,Fc=36492,Oc=36494,Bc=36495,kc=36283,Hc=36284,ea=36285,Gc=36286,tS=3200,zc=0,nS=1,ki="",Dn="srgb",ta="srgb-linear",na="linear",mt="srgb",As=7680,Yf=519,iS=512,sS=513,rS=514,Iu=515,oS=516,aS=517,Uu=518,lS=519,Kf=35044,Zf="300 es",Qn=2e3,Vr=2001;function cS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uS(){const t=ia("canvas");return t.style.display="block",t}const Jf={};function Qf(...t){const e="THREE."+t.shift();console.log(e,...t)}function lm(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Xe(...t){t=lm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ct(...t){t=lm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vc(...t){const e=t.join(" ");e in Jf||(Jf[e]=!0,Xe(...t))}function fS(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const dS={[ic]:sc,[rc]:lc,[oc]:cc,[er]:ac,[sc]:ic,[lc]:rc,[cc]:oc,[ac]:er};class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Za=Math.PI/180,Wc=180/Math.PI;function Yr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function hS(t,e){return(t%e+e)%e}function Ja(t,e,n){return(1-n)*t+n*e}function mr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Gu=class Gu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gu.prototype.isVector2=!0;let ut=Gu;class lr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==f||u!==h||c!==p){let _=l*f+u*h+c*p+d*g;_<0&&(f=-f,h=-h,p=-p,g=-g,_=-_);let m=1-a;if(_<.9995){const M=Math.acos(_),x=Math.sin(M);m=Math.sin(m*M)/x,a=Math.sin(a*M)/x,l=l*m+f*a,u=u*m+h*a,c=c*m+p*a,d=d*m+g*a}else{l=l*m+f*a,u=u*m+h*a,c=c*m+p*a,d=d*m+g*a;const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[n]=a*p+c*d+l*h-u*f,e[n+1]=l*p+c*f+u*d-a*h,e[n+2]=u*p+c*h+a*f-l*d,e[n+3]=c*p-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*c*d+u*h*p,this._y=u*h*d-f*c*p,this._z=u*c*p+f*h*d,this._w=u*c*d-f*h*p;break;case"YXZ":this._x=f*c*d+u*h*p,this._y=u*h*d-f*c*p,this._z=u*c*p-f*h*d,this._w=u*c*d+f*h*p;break;case"ZXY":this._x=f*c*d-u*h*p,this._y=u*h*d+f*c*p,this._z=u*c*p+f*h*d,this._w=u*c*d-f*h*p;break;case"ZYX":this._x=f*c*d-u*h*p,this._y=u*h*d+f*c*p,this._z=u*c*p-f*h*d,this._w=u*c*d+f*h*p;break;case"YZX":this._x=f*c*d+u*h*p,this._y=u*h*d+f*c*p,this._z=u*c*p-f*h*d,this._w=u*c*d-f*h*p;break;case"XZY":this._x=f*c*d-u*h*p,this._y=u*h*d-f*c*p,this._z=u*c*p+f*h*d,this._w=u*c*d+f*h*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(r-u)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-u)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zu=class zu{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ed.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),c=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-r*d,this.z=s+l*d+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zu.prototype.isVector3=!0;let W=zu;const Qa=new W,ed=new lr,Vu=class Vu{constructor(e,n,i,s,r,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,u)}set(e,n,i,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=n,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],p=i[8],g=s[0],_=s[3],m=s[6],M=s[1],x=s[4],S=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*g+a*M+l*A,r[3]=o*_+a*x+l*T,r[6]=o*m+a*S+l*P,r[1]=u*g+c*M+d*A,r[4]=u*_+c*x+d*T,r[7]=u*m+c*S+d*P,r[2]=f*g+h*M+p*A,r[5]=f*_+h*x+p*T,r[8]=f*m+h*S+p*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*r,h=u*r-o*l,p=n*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=d*g,e[1]=(s*u-c*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(c*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=h*g,e[7]=(i*l-u*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(el.makeScale(e,n)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,n){return this.premultiply(el.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vu.prototype.isMatrix3=!0;let Ze=Vu;const el=new Ze,td=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pS(){const t={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ta]:{primaries:e,whitePoint:i,transfer:na,toXYZ:td,fromXYZ:nd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const nt=pS();function yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class mS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=ia("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yi(n[i]/255)*255):n[i]=yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tl(s[o].image)):r.push(tl(s[o]))}else r=tl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function tl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let _S=0;const nl=new W;class mn extends Ss{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=_i,s=_i,r=rn,o=ls,a=Bn,l=An,u=mn.DEFAULT_ANISOTROPY,c=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Yr(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uc:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uc:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=em;mn.DEFAULT_ANISOTROPY=1;const Wu=class Wu{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],p=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(p+_)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(h+1)/2,A=(m+1)/2,T=(c+f)/4,P=(d+g)/4,y=(p+_)/4;return x>S&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=P/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=y/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=y/r),this.set(i,s,r,n),this}let M=Math.sqrt((_-p)*(_-p)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(_-p)/M,this.y=(d-g)/M,this.z=(f-c)/M,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wu.prototype.isVector4=!0;let It=Wu;class vS extends Ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new mn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Nu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends vS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cm extends mn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends mn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oa=class oa{constructor(e,n,i,s,r,o,a,l,u,c,d,f,h,p,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,u,c,d,f,h,p,g,_)}set(e,n,i,s,r,o,a,l,u,c,d,f,h,p,g,_){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*c,h=o*d,p=a*c,g=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+p*u,n[5]=f-g*u,n[9]=-a*l,n[2]=g-f*u,n[6]=p+h*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,p=u*c,g=u*d;n[0]=f+g*a,n[4]=p*a-h,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=h*a-p,n[6]=g+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,p=u*c,g=u*d;n[0]=f-g*a,n[4]=-o*d,n[8]=p+h*a,n[1]=h+p*a,n[5]=o*c,n[9]=g-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,h=o*d,p=a*c,g=a*d;n[0]=l*c,n[4]=p*u-h,n[8]=f*u+g,n[1]=l*d,n[5]=g*u+f,n[9]=h*u-p,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*u,p=a*l,g=a*u;n[0]=l*c,n[4]=g-f*d,n[8]=p*d+h,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*d+p,n[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,h=o*u,p=a*l,g=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+g,n[5]=o*c,n[9]=h*d-p,n[2]=p*d-h,n[6]=a*c,n[10]=g*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yS,e,SS)}lookAt(e,n,i){const s=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Pi.crossVectors(i,Mn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Pi.crossVectors(i,Mn)),Pi.normalize(),lo.crossVectors(Mn,Pi),s[0]=Pi.x,s[4]=lo.x,s[8]=Mn.x,s[1]=Pi.y,s[5]=lo.y,s[9]=Mn.y,s[2]=Pi.z,s[6]=lo.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],p=i[2],g=i[6],_=i[10],m=i[14],M=i[3],x=i[7],S=i[11],A=i[15],T=s[0],P=s[4],y=s[8],w=s[12],D=s[1],L=s[5],F=s[9],z=s[13],X=s[2],O=s[6],N=s[10],k=s[14],V=s[3],oe=s[7],ve=s[11],we=s[15];return r[0]=o*T+a*D+l*X+u*V,r[4]=o*P+a*L+l*O+u*oe,r[8]=o*y+a*F+l*N+u*ve,r[12]=o*w+a*z+l*k+u*we,r[1]=c*T+d*D+f*X+h*V,r[5]=c*P+d*L+f*O+h*oe,r[9]=c*y+d*F+f*N+h*ve,r[13]=c*w+d*z+f*k+h*we,r[2]=p*T+g*D+_*X+m*V,r[6]=p*P+g*L+_*O+m*oe,r[10]=p*y+g*F+_*N+m*ve,r[14]=p*w+g*z+_*k+m*we,r[3]=M*T+x*D+S*X+A*V,r[7]=M*P+x*L+S*O+A*oe,r[11]=M*y+x*F+S*N+A*ve,r[15]=M*w+x*z+S*k+A*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],p=e[3],g=e[7],_=e[11],m=e[15],M=l*h-u*f,x=a*h-u*d,S=a*f-l*d,A=o*h-u*c,T=o*f-l*c,P=o*d-a*c;return n*(g*M-_*x+m*S)-i*(p*M-_*A+m*T)+s*(p*x-g*A+m*P)-r*(p*S-g*T+_*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],p=e[12],g=e[13],_=e[14],m=e[15],M=n*a-i*o,x=n*l-s*o,S=n*u-r*o,A=i*l-s*a,T=i*u-r*a,P=s*u-r*l,y=c*g-d*p,w=c*_-f*p,D=c*m-h*p,L=d*_-f*g,F=d*m-h*g,z=f*m-h*_,X=M*z-x*F+S*L+A*D-T*w+P*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/X;return e[0]=(a*z-l*F+u*L)*O,e[1]=(s*F-i*z-r*L)*O,e[2]=(g*P-_*T+m*A)*O,e[3]=(f*T-d*P-h*A)*O,e[4]=(l*D-o*z-u*w)*O,e[5]=(n*z-s*D+r*w)*O,e[6]=(_*S-p*P-m*x)*O,e[7]=(c*P-f*S+h*x)*O,e[8]=(o*F-a*D+u*y)*O,e[9]=(i*D-n*F-r*y)*O,e[10]=(p*T-g*S+m*M)*O,e[11]=(d*S-c*T-h*M)*O,e[12]=(a*w-o*L-l*y)*O,e[13]=(n*L-i*w+s*y)*O,e[14]=(g*x-p*A-_*M)*O,e[15]=(c*A-d*x+f*M)*O,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,u=r+r,c=o+o,d=a+a,f=r*u,h=r*c,p=r*d,g=o*c,_=o*d,m=a*d,M=l*u,x=l*c,S=l*d,A=i.x,T=i.y,P=i.z;return s[0]=(1-(g+m))*A,s[1]=(h+S)*A,s[2]=(p-x)*A,s[3]=0,s[4]=(h-S)*T,s[5]=(1-(f+m))*T,s[6]=(_+M)*T,s[7]=0,s[8]=(p+x)*P,s[9]=(_-M)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length();const a=Rs.set(s[4],s[5],s[6]).length(),l=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const u=1/o,c=1/a,d=1/l;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,n.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Qn,l=!1){const u=this.elements,c=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Qn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Qn,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Qn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Vr)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=p,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};oa.prototype.isMatrix4=!0;let Ut=oa;const Rs=new W,Un=new Ut,yS=new W(0,0,0),SS=new W(1,1,1),Pi=new W,lo=new W,Mn=new W,id=new Ut,sd=new lr;class $i{constructor(e=0,n=0,i=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MS=0;const rd=new W,Cs=new lr,ci=new Ut,co=new W,gr=new W,ES=new W,bS=new lr,od=new W(1,0,0),ad=new W(0,1,0),ld=new W(0,0,1),cd={type:"added"},TS={type:"removed"},Ps={type:"childadded",child:null},il={type:"childremoved",child:null};class $t extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new W,n=new $i,i=new lr,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ze}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,n){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?co.copy(e):co.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(gr,co,this.up):ci.lookAt(co,gr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ci),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TS),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,ES),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,bS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new W(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=n.getJointPose(g,i),m=this._getHandJoint(u,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,p=.005;u.inputState.pinching&&f>h+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},uo={h:0,s:0,l:0};function rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=nt.workingColorSpace){if(e=hS(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,n=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=fm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return nt.workingToColorSpace(nn.copy(this),e),Math.round(it(nn.r*255,0,255))*65536+Math.round(it(nn.g*255,0,255))*256+Math.round(it(nn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(nn.copy(this),n);const i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Dn){nt.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(uo);const i=Ja(Li.h,uo.h,n),s=Ja(Li.s,uo.s,n),r=Ja(Li.l,uo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new st;st.NAMES=fm;class wS extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nn=new W,ui=new W,ol=new W,fi=new W,Ls=new W,Ds=new W,ud=new W,al=new W,ll=new W,cl=new W,ul=new It,fl=new It,dl=new It;class On{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Nn.subVectors(e,n),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Nn.subVectors(s,n),ui.subVectors(i,n),ol.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(ui),l=Nn.dot(ol),u=ui.dot(ui),c=ui.dot(ol),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,p=(o*c-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,i),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,n,i,s){return Nn.subVectors(i,n),ui.subVectors(e,n),Nn.cross(ui).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Nn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Ds.subVectors(r,i),al.subVectors(e,i);const l=Ls.dot(al),u=Ds.dot(al);if(l<=0&&u<=0)return n.copy(i);ll.subVectors(e,s);const c=Ls.dot(ll),d=Ds.dot(ll);if(c>=0&&d<=c)return n.copy(s);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Ls,o);cl.subVectors(e,r);const h=Ls.dot(cl),p=Ds.dot(cl);if(p>=0&&h<=p)return n.copy(r);const g=h*u-l*p;if(g<=0&&u>=0&&p<=0)return a=u/(u-p),n.copy(i).addScaledVector(Ds,a);const _=c*p-h*d;if(_<=0&&d-c>=0&&h-p>=0)return ud.subVectors(r,s),a=(d-c)/(d-c+(h-p)),n.copy(s).addScaledVector(ud,a);const m=1/(_+g+f);return o=g*m,a=f*m,n.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kr{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),ho.subVectors(this.max,_r),Is.subVectors(e.a,_r),Us.subVectors(e.b,_r),Ns.subVectors(e.c,_r),Di.subVectors(Us,Is),Ii.subVectors(Ns,Us),Ji.subVectors(Is,Ns);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!hl(n,Is,Us,Ns,ho)||(n=[1,0,0,0,1,0,0,0,1],!hl(n,Is,Us,Ns,ho))?!1:(po.crossVectors(Di,Ii),n=[po.x,po.y,po.z],hl(n,Is,Us,Ns,ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new W,new W,new W,new W,new W,new W,new W,new W],Fn=new W,fo=new Kr,Is=new W,Us=new W,Ns=new W,Di=new W,Ii=new W,Ji=new W,_r=new W,ho=new W,po=new W,Qi=new W;function hl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Qi.fromArray(t,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),u=n.dot(Qi),c=i.dot(Qi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ht=new W,mo=new ut;let RS=0;class ii extends Ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kf,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=mr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mr(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mr(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mr(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dm extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class hm extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nt extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}const CS=new Kr,vr=new W,pl=new W;class Ea{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CS.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const n=vr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(pl)),this.expandByPoint(vr.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PS=0;const Pn=new Ut,ml=new $t,Fs=new W,En=new Kr,xr=new Kr,Xt=new W;class yn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cS(e)?hm:dm)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(En.min,xr.min),En.expandByPoint(Xt),Xt.addVectors(En.max,xr.max),En.expandByPoint(Xt)):(En.expandByPoint(xr.min),En.expandByPoint(xr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Xt.fromBufferAttribute(a,u),l&&(Fs.fromBufferAttribute(e,u),Xt.add(Fs)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new W,l[y]=new W;const u=new W,c=new W,d=new W,f=new ut,h=new ut,p=new ut,g=new W,_=new W;function m(y,w,D){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,y),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,D),c.sub(u),d.sub(u),h.sub(f),p.sub(f);const L=1/(h.x*p.y-p.x*h.y);isFinite(L)&&(g.copy(c).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(L),_.copy(d).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(L),a[y].add(g),a[w].add(g),a[D].add(g),l[y].add(_),l[w].add(_),l[D].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,w=M.length;y<w;++y){const D=M[y],L=D.start,F=D.count;for(let z=L,X=L+F;z<X;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new W,S=new W,A=new W,T=new W;function P(y){A.fromBufferAttribute(s,y),T.copy(A);const w=a[y];x.copy(w),x.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(T,w);const L=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,L)}for(let y=0,w=M.length;y<w;++y){const D=M[y],L=D.start,F=D.count;for(let z=L,X=L+F;z<X;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,u=new W,c=new W,d=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);s.fromBufferAttribute(n,p),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,p=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*c;for(let m=0;m<c;m++)f[p++]=u[h++]}return new ii(f,c,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);n.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(n))}const r=e.morphAttributes;for(const u in r){const c=[],d=r[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LS=0;class cr extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=qs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hi=new W,gl=new W,go=new W,Ui=new W,_l=new W,_o=new W,vl=new W;class pm{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){gl.copy(e).add(n).multiplyScalar(.5),go.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(gl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(go),a=Ui.dot(this.direction),l=-Ui.dot(go),u=Ui.lengthSq(),c=Math.abs(1-o*o);let d,f,h,p;if(c>0)if(d=o*l-a,f=o*a-l,p=r*c,d>=0)if(f>=-p)if(f<=p){const g=1/c;d*=g,f*=g,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+u):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gl).addScaledVector(go,f),h}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),c>=0?(r=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,s,r){_l.subVectors(n,e),_o.subVectors(i,e),vl.crossVectors(_l,_o);let o=this.direction.dot(vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(_o.crossVectors(Ui,_o));if(l<0)return null;const u=a*this.direction.dot(_l.cross(Ui));if(u<0||l+u>o)return null;const c=-a*Ui.dot(vl);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fu extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fd=new Ut,es=new pm,vo=new Ea,dd=new W,xo=new W,yo=new W,So=new W,xl=new W,Mo=new W,hd=new W,Eo=new W;class vt extends $t{constructor(e=new yn,n=new Fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],d=r[l];c!==0&&(xl.fromBufferAttribute(d,e),o?Mo.addScaledVector(xl,c):Mo.addScaledVector(xl.sub(n),c))}n.add(Mo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(vo.containsPoint(es.origin)===!1&&(es.intersectSphere(vo,dd)===null||es.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(fd.copy(r).invert(),es.copy(e.ray).applyMatrix4(fd),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=o[_.materialIndex],M=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let S=M,A=x;S<A;S+=3){const T=a.getX(S),P=a.getX(S+1),y=a.getX(S+2);s=bo(this,m,e,i,u,c,d,T,P,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const M=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);s=bo(this,o,e,i,u,c,d,M,x,S),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=o[_.materialIndex],M=Math.max(_.start,h.start),x=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let S=M,A=x;S<A;S+=3){const T=S,P=S+1,y=S+2;s=bo(this,m,e,i,u,c,d,T,P,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const M=_,x=_+1,S=_+2;s=bo(this,o,e,i,u,c,d,M,x,S),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}}function DS(t,e,n,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Xi,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Eo);return u<n.near||u>n.far?null:{distance:u,point:Eo.clone(),object:t}}function bo(t,e,n,i,s,r,o,a,l,u){t.getVertexPosition(a,xo),t.getVertexPosition(l,yo),t.getVertexPosition(u,So);const c=DS(t,e,n,i,xo,yo,So,hd);if(c){const d=new W;On.getBarycoord(hd,xo,yo,So,d),s&&(c.uv=On.getInterpolatedAttribute(s,a,l,u,d,new ut)),r&&(c.uv1=On.getInterpolatedAttribute(r,a,l,u,d,new ut)),o&&(c.normal=On.getInterpolatedAttribute(o,a,l,u,d,new W),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new W,materialIndex:0};On.getNormal(xo,yo,So,f.normal),c.face=f,c.barycoord=d}return c}class IS extends mn{constructor(e=null,n=1,i=1,s,r,o,a,l,u=Zt,c=Zt,d,f){super(null,o,a,l,u,c,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yl=new W,US=new W,NS=new Ze;class is{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=yl.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||NS.getNormalMatrix(e),s=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Ea,FS=new ut(.5,.5),To=new W;class Ou{constructor(e=new is,n=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],u=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],M=r[12],x=r[13],S=r[14],A=r[15];if(s[0].setComponents(u-o,h-c,m-p,A-M).normalize(),s[1].setComponents(u+o,h+c,m+p,A+M).normalize(),s[2].setComponents(u+a,h+d,m+g,A+x).normalize(),s[3].setComponents(u-a,h-d,m-g,A-x).normalize(),i)s[4].setComponents(l,f,_,S).normalize(),s[5].setComponents(u-l,h-f,m-_,A-S).normalize();else if(s[4].setComponents(u-l,h-f,m-_,A-S).normalize(),n===Qn)s[5].setComponents(u+l,h+f,m+_,A+S).normalize();else if(n===Vr)s[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const n=FS.distanceTo(e.center);return ts.radius=.7071067811865476+n,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mm extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sa=new W,ra=new W,pd=new Ut,yr=new pm,Ao=new Ea,Sl=new W,md=new W;class OS extends $t{constructor(e=new yn,n=new mm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)sa.fromBufferAttribute(n,s-1),ra.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=sa.distanceTo(ra);e.setAttribute("lineDistance",new Nt(i,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;pd.copy(s).invert(),yr.copy(e.ray).applyMatrix4(pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p-1;g<_;g+=u){const m=c.getX(g),M=c.getX(g+1),x=wo(this,e,yr,l,m,M,g);x&&n.push(x)}if(this.isLineLoop){const g=c.getX(p-1),_=c.getX(h),m=wo(this,e,yr,l,g,_,p-1);m&&n.push(m)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p-1;g<_;g+=u){const m=wo(this,e,yr,l,g,g+1,g);m&&n.push(m)}if(this.isLineLoop){const g=wo(this,e,yr,l,p-1,h,p-1);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wo(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(sa.fromBufferAttribute(a,s),ra.fromBufferAttribute(a,r),n.distanceSqToSegment(sa,ra,Sl,md)>i)return;Sl.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Sl);if(!(u<e.near||u>e.far))return{distance:u,point:md.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const gd=new W,_d=new W;class BS extends OS{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)gd.fromBufferAttribute(n,s),_d.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gd.distanceTo(_d);e.setAttribute("lineDistance",new Nt(i,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gm extends mn{constructor(e=[],n=vs,i,s,r,o,a,l,u,c){super(e,n,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nr extends mn{constructor(e,n,i=oi,s,r,o,a=Zt,l=Zt,u,c=Ti,d=1){if(c!==Ti&&c!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kS extends nr{constructor(e,n=oi,i=vs,s,r,o=Zt,a=Zt,l,u=Ti){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,s,r,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _m extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ur extends yn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,i,n,e,o,r,0),p("z","y","x",1,-1,i,n,-e,o,r,1),p("x","z","y",1,1,e,i,n,s,o,2),p("x","z","y",1,-1,e,i,-n,s,o,3),p("x","y","z",1,-1,e,n,i,s,r,4),p("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(d,2));function p(g,_,m,M,x,S,A,T,P,y,w){const D=S/P,L=A/y,F=S/2,z=A/2,X=T/2,O=P+1,N=y+1;let k=0,V=0;const oe=new W;for(let ve=0;ve<N;ve++){const we=ve*L-z;for(let be=0;be<O;be++){const $e=be*D-F;oe[g]=$e*M,oe[_]=we*x,oe[m]=X,u.push(oe.x,oe.y,oe.z),oe[g]=0,oe[_]=0,oe[m]=T>0?1:-1,c.push(oe.x,oe.y,oe.z),d.push(be/P),d.push(1-ve/y),k+=1}}for(let ve=0;ve<y;ve++)for(let we=0;we<P;we++){const be=f+we+O*ve,$e=f+we+O*(ve+1),Qe=f+(we+1)+O*(ve+1),We=f+(we+1)+O*ve;l.push(be,$e,We),l.push($e,Qe,We),V+=6}a.addGroup(h,V,w),h+=V,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bu extends yn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],d=[],f=[],h=[];let p=0;const g=[],_=i/2;let m=0;M(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(h,2));function M(){const S=new W,A=new W;let T=0;const P=(n-e)/i;for(let y=0;y<=r;y++){const w=[],D=y/r,L=D*(n-e)+e;for(let F=0;F<=s;F++){const z=F/s,X=z*l+a,O=Math.sin(X),N=Math.cos(X);A.x=L*O,A.y=-D*i+_,A.z=L*N,d.push(A.x,A.y,A.z),S.set(O,P,N).normalize(),f.push(S.x,S.y,S.z),h.push(z,1-D),w.push(p++)}g.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){const D=g[w][y],L=g[w+1][y],F=g[w+1][y+1],z=g[w][y+1];(e>0||w!==0)&&(c.push(D,L,z),T+=3),(n>0||w!==r-1)&&(c.push(L,F,z),T+=3)}u.addGroup(m,T,0),m+=T}function x(S){const A=p,T=new ut,P=new W;let y=0;const w=S===!0?e:n,D=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,_*D,0),f.push(0,D,0),h.push(.5,.5),p++;const L=p;for(let F=0;F<=s;F++){const X=F/s*l+a,O=Math.cos(X),N=Math.sin(X);P.x=w*N,P.y=_*D,P.z=w*O,d.push(P.x,P.y,P.z),f.push(0,D,0),T.x=O*.5+.5,T.y=N*.5*D+.5,h.push(T.x,T.y),p++}for(let F=0;F<s;F++){const z=A+F,X=L+F;S===!0?c.push(X,X+1,z):c.push(X+1,X,z),y+=3}u.addGroup(m,y,S===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zr extends yn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,d=e/a,f=n/l,h=[],p=[],g=[],_=[];for(let m=0;m<c;m++){const M=m*f-o;for(let x=0;x<u;x++){const S=x*d-r;p.push(S,-M,0),g.push(0,0,1),_.push(x/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+u*m,S=M+u*(m+1),A=M+1+u*(m+1),T=M+1+u*m;h.push(x,S,T),h.push(S,A,T)}this.setIndex(h),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ku extends yn{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let d=e;const f=(n-e)/s,h=new W,p=new ut;for(let g=0;g<=s;g++){for(let _=0;_<=i;_++){const m=r+_/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),u.push(0,0,1),p.x=(h.x/n+1)/2,p.y=(h.y/n+1)/2,c.push(p.x,p.y)}d+=f}for(let g=0;g<s;g++){const _=g*(i+1);for(let m=0;m<i;m++){const M=m+_,x=M,S=M+i+1,A=M+i+2,T=M+1;a.push(x,S,T),a.push(S,A,T)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class os extends yn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new W,f=new W,h=[],p=[],g=[],_=[];for(let m=0;m<=i;m++){const M=[],x=m/i;let S=0;m===0&&o===0?S=.5/n:m===i&&l===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const T=A/n;d.x=-e*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+x*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),_.push(T+S,1-x),M.push(u++)}c.push(M)}for(let m=0;m<i;m++)for(let M=0;M<n;M++){const x=c[m][M+1],S=c[m][M],A=c[m+1][M],T=c[m+1][M+1];(m!==0||o>0)&&h.push(x,S,T),(m!==i-1||l<Math.PI)&&h.push(S,A,T)}this.setIndex(h),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ir(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(vd(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(vd(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=ir(t[n]);for(const s in i)e[s]=i[s]}return e}function vd(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function HS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const GS={clone:ir,merge:ln};var zS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class WS extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _n extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XS extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ba extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class qS extends ba{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Ml=new Ut,xd=new W,yd=new W;class xm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),n.position.copy(xd),yd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yd),n.updateMatrixWorld(),Ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Vr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ro=new W,Co=new lr,Vn=new W;class ym extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ro,Co,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ro,Co,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new W,Sd=new ut,Md=new ut;class Tn extends ym{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Sd,Md),n.subVectors(Md,Sd)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class jS extends xm{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class YS extends ba{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Hu extends ym{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class KS extends xm{constructor(){super(new Hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class El extends ba{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new KS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class ZS extends ba{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Os=-90,Bs=1;class JS extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Os,Bs,e,n);s.layers=this.layers,this.add(s);const r=new Tn(Os,Bs,e,n);r.layers=this.layers,this.add(r);const o=new Tn(Os,Bs,e,n);o.layers=this.layers,this.add(o);const a=new Tn(Os,Bs,e,n);a.layers=this.layers,this.add(a);const l=new Tn(Os,Bs,e,n);l.layers=this.layers,this.add(l);const u=new Tn(Os,Bs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const u of n)this.remove(u);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class QS extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xu=class Xu{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Xu.prototype.isMatrix2=!0;let Ed=Xu;class eM extends BS{constructor(e=10,n=10,i=4473924,s=8947848){i=new st(i),s=new st(s);const r=n/2,o=e/n,a=e/2,l=[],u=[];for(let f=0,h=0,p=-a;f<=n;f++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const g=f===r?i:s;g.toArray(u,h),h+=3,g.toArray(u,h),h+=3,g.toArray(u,h),h+=3,g.toArray(u,h),h+=3}const c=new yn;c.setAttribute("position",new Nt(l,3)),c.setAttribute("color",new Nt(u,3));const d=new mm({vertexColors:!0,toneMapped:!1});super(c,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function bd(t,e,n,i){const s=tM(i);switch(n){case rm:return t*e;case am:return t*e/s.components*s.byteLength;case Pu:return t*e/s.components*s.byteLength;case xs:return t*e*2/s.components*s.byteLength;case Lu:return t*e*2/s.components*s.byteLength;case om:return t*e*3/s.components*s.byteLength;case Bn:return t*e*4/s.components*s.byteLength;case Du:return t*e*4/s.components*s.byteLength;case No:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:case mc:return Math.max(t,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(t,8)*Math.max(e,8)/2;case gc:case _c:case xc:case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:case Qo:case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kc:case Hc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ea:case Gc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tM(t){switch(t){case An:case tm:return{byteLength:1,components:1};case Gr:case nm:case bi:return{byteLength:2,components:1};case Ru:case Cu:return{byteLength:2,components:4};case oi:case wu:case Jn:return{byteLength:4,components:1};case im:case sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);function Sm(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function nM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],g=d[h];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const g=d[h];t.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,YM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ub=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:iM,alphahash_pars_fragment:sM,alphamap_fragment:rM,alphamap_pars_fragment:oM,alphatest_fragment:aM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:dM,begin_vertex:hM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:bM,color_vertex:TM,common:AM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:RM,displacementmap_pars_vertex:CM,displacementmap_vertex:PM,emissivemap_fragment:LM,emissivemap_pars_fragment:DM,colorspace_fragment:IM,colorspace_pars_fragment:UM,envmap_fragment:NM,envmap_common_pars_fragment:FM,envmap_pars_fragment:OM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:YM,envmap_vertex:kM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:zM,fog_pars_fragment:VM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:qM,lights_pars_begin:jM,lights_toon_fragment:KM,lights_toon_pars_fragment:ZM,lights_phong_fragment:JM,lights_phong_pars_fragment:QM,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:sE,lightprobes_pars_fragment:rE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:fE,map_particle_fragment:dE,map_particle_pars_fragment:hE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:yE,normal_fragment_begin:SE,normal_fragment_maps:ME,normal_pars_fragment:EE,normal_pars_vertex:bE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:PE,opaque_fragment:LE,packing:DE,premultiplied_alpha_fragment:IE,project_vertex:UE,dithering_fragment:NE,dithering_pars_fragment:FE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:zE,skinbase_vertex:VE,skinning_pars_vertex:WE,skinning_vertex:XE,skinnormal_vertex:$E,specularmap_fragment:qE,specularmap_pars_fragment:jE,tonemapping_fragment:YE,tonemapping_pars_fragment:KE,transmission_fragment:ZE,transmission_pars_fragment:JE,uv_pars_fragment:QE,uv_pars_vertex:eb,uv_vertex:tb,worldpos_vertex:nb,background_vert:ib,background_frag:sb,backgroundCube_vert:rb,backgroundCube_frag:ob,cube_vert:ab,cube_frag:lb,depth_vert:cb,depth_frag:ub,distance_vert:fb,distance_frag:db,equirect_vert:hb,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:_b,meshbasic_frag:vb,meshlambert_vert:xb,meshlambert_frag:yb,meshmatcap_vert:Sb,meshmatcap_frag:Mb,meshnormal_vert:Eb,meshnormal_frag:bb,meshphong_vert:Tb,meshphong_frag:Ab,meshphysical_vert:wb,meshphysical_frag:Rb,meshtoon_vert:Cb,meshtoon_frag:Pb,points_vert:Lb,points_frag:Db,shadow_vert:Ib,shadow_frag:Ub,sprite_vert:Nb,sprite_frag:Fb},Re={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},jn={basic:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ln([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ln([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new st(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ln([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ln([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ln([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ln([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:ln([Re.common,Re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:ln([Re.lights,Re.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};jn.physical={uniforms:ln([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Po={r:0,b:0,g:0},Ob=new Ut,Mm=new Ze;Mm.set(-1,0,0,0,1,0,0,0,1);function Bb(t,e,n,i,s,r){const o=new st(0);let a=s===!0?0:1,l,u,c=null,d=0,f=null;function h(M){let x=M.isScene===!0?M.background:null;if(x&&x.isTexture){const S=M.backgroundBlurriness>0;x=e.get(x,S)}return x}function p(M){let x=!1;const S=h(M);S===null?_(o,a):S&&S.isColor&&(_(S,1),x=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(M,x){const S=h(x);S&&(S.isCubeTexture||S.mapping===Ma)?(u===void 0&&(u=new vt(new ur(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:ir(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Mm),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,(c!==S||d!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new vt(new Zr(2,2),new ai({name:"BackgroundMaterial",uniforms:ir(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function _(M,x){M.getRGB(Po,vm(t)),n.buffers.color.setClear(Po.r,Po.g,Po.b,x,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,_(o,a)},render:p,addToRenderList:g,dispose:m}}function kb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(L,F,z,X,O){let N=!1;const k=d(L,X,z,F);r!==k&&(r=k,u(r.object)),N=h(L,X,z,O),N&&p(L,X,z,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,S(L,F,z,X),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function c(L){return t.deleteVertexArray(L)}function d(L,F,z,X){const O=X.wireframe===!0;let N=i[F.id];N===void 0&&(N={},i[F.id]=N);const k=L.isInstancedMesh===!0?L.id:0;let V=N[k];V===void 0&&(V={},N[k]=V);let oe=V[z.id];oe===void 0&&(oe={},V[z.id]=oe);let ve=oe[O];return ve===void 0&&(ve=f(l()),oe[O]=ve),ve}function f(L){const F=[],z=[],X=[];for(let O=0;O<n;O++)F[O]=0,z[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:X,object:L,attributes:{},index:null}}function h(L,F,z,X){const O=r.attributes,N=F.attributes;let k=0;const V=z.getAttributes();for(const oe in V)if(V[oe].location>=0){const we=O[oe];let be=N[oe];if(be===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),we===void 0||we.attribute!==be||be&&we.data!==be.data)return!0;k++}return r.attributesNum!==k||r.index!==X}function p(L,F,z,X){const O={},N=F.attributes;let k=0;const V=z.getAttributes();for(const oe in V)if(V[oe].location>=0){let we=N[oe];we===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(we=L.instanceColor));const be={};be.attribute=we,we&&we.data&&(be.data=we.data),O[oe]=be,k++}r.attributes=O,r.attributesNum=k,r.index=X}function g(){const L=r.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function _(L){m(L,0)}function m(L,F){const z=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;z[L]=1,X[L]===0&&(t.enableVertexAttribArray(L),X[L]=1),O[L]!==F&&(t.vertexAttribDivisor(L,F),O[L]=F)}function M(){const L=r.newAttributes,F=r.enabledAttributes;for(let z=0,X=F.length;z<X;z++)F[z]!==L[z]&&(t.disableVertexAttribArray(z),F[z]=0)}function x(L,F,z,X,O,N,k){k===!0?t.vertexAttribIPointer(L,F,z,O,N):t.vertexAttribPointer(L,F,z,X,O,N)}function S(L,F,z,X){g();const O=X.attributes,N=z.getAttributes(),k=F.defaultAttributeValues;for(const V in N){const oe=N[V];if(oe.location>=0){let ve=O[V];if(ve===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),ve!==void 0){const we=ve.normalized,be=ve.itemSize,$e=e.get(ve);if($e===void 0)continue;const Qe=$e.buffer,We=$e.type,te=$e.bytesPerElement,xe=We===t.INT||We===t.UNSIGNED_INT||ve.gpuType===wu;if(ve.isInterleavedBufferAttribute){const ge=ve.data,Oe=ge.stride,Ve=ve.offset;if(ge.isInstancedInterleavedBuffer){for(let He=0;He<oe.locationSize;He++)m(oe.location+He,ge.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<oe.locationSize;He++)_(oe.location+He);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let He=0;He<oe.locationSize;He++)x(oe.location+He,be/oe.locationSize,We,we,Oe*te,(Ve+be/oe.locationSize*He)*te,xe)}else{if(ve.isInstancedBufferAttribute){for(let ge=0;ge<oe.locationSize;ge++)m(oe.location+ge,ve.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ge=0;ge<oe.locationSize;ge++)_(oe.location+ge);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let ge=0;ge<oe.locationSize;ge++)x(oe.location+ge,be/oe.locationSize,We,we,be*te,be/oe.locationSize*ge*te,xe)}}else if(k!==void 0){const we=k[V];if(we!==void 0)switch(we.length){case 2:t.vertexAttrib2fv(oe.location,we);break;case 3:t.vertexAttrib3fv(oe.location,we);break;case 4:t.vertexAttrib4fv(oe.location,we);break;default:t.vertexAttrib1fv(oe.location,we)}}}}M()}function A(){w();for(const L in i){const F=i[L];for(const z in F){const X=F[z];for(const O in X){const N=X[O];for(const k in N)c(N[k].object),delete N[k];delete X[O]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const z in F){const X=F[z];for(const O in X){const N=X[O];for(const k in N)c(N[k].object),delete N[k];delete X[O]}}delete i[L.id]}function P(L){for(const F in i){const z=i[F];for(const X in z){const O=z[X];if(O[L.id]===void 0)continue;const N=O[L.id];for(const k in N)c(N[k].object),delete N[k];delete O[L.id]}}}function y(L){for(const F in i){const z=i[F],X=L.isInstancedMesh===!0?L.id:0,O=z[X];if(O!==void 0){for(const N in O){const k=O[N];for(const V in k)c(k[V].object),delete k[V];delete O[N]}delete z[X],Object.keys(z).length===0&&delete i[F]}}}function w(){D(),o=!0,r!==s&&(r=s,u(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function Hb(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gb(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Bn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const y=P===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!y)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Xe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:S,maxSamples:A,samples:T}}function zb(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new is,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,m=t.get(d);if(!s||p===null||p.length===0||r&&!_)r?c(null):u();else{const M=r?0:i,x=M*4;let S=m.clippingState||null;l.value=S,S=c(p,f,x,h);for(let A=0;A!==x;++A)S[A]=n[A];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,p){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,p!==!0||_===null){const m=h+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<m)&&(_=new Float32Array(m));for(let x=0,S=h;x!==g;++x,S+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}const Gi=4,Td=[.125,.215,.35,.446,.526,.582],as=20,Vb=256,Sr=new Hu,Ad=new st;let bl=null,Tl=0,Al=0,wl=!1;const Wb=new W;class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=Wb}=r;bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Tl,Al),this._renderer.xr.enabled=wl,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:bi,format:Bn,colorSpace:ta,depthBuffer:!1},s=Rd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xb(r)),this._blurMaterial=qb(r,e,n),this._ggxMaterial=$b(r,e,n)}return s}_compileMaterial(e){const n=new vt(new yn,e);this._renderer.compile(n,Sr)}_sceneToCubeUV(e,n,i,s,r){const l=new Tn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Ad),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new ur,new Fu({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let m=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,m=!0):(_.color.copy(Ad),m=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[x],r.y,r.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[x],r.z)):(l.up.set(0,u[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[x]));const A=this._cubeSize;ks(s,S*A,x>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===vs||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:p}=this,g=this._sizeLods[i],_=3*g*(i>p-Gi?i-p+Gi:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-n,ks(r,_,m,3*g,2*g),s.setRenderTarget(r),s.render(a,Sr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,ks(e,_,m,3*g,2*g),s.setRenderTarget(e),s.render(a,Sr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[s];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*as-1),g=r/p,_=isFinite(r)?1+Math.floor(c*g):as;_>as&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${as}`);const m=[];let M=0;for(let P=0;P<as;++P){const y=P/g,w=Math.exp(-y*y/2);m.push(w),P===0?M+=w:P<_&&(M+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/M;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-i;const S=this._sizeLods[s],A=3*S*(s>x-Gi?s-x+Gi:0),T=4*(this._cubeSize-S);ks(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Sr)}}function Xb(t){const e=[],n=[],i=[];let s=t;const r=t-Gi+1+Td.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Gi?l=Td[o-t+Gi-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,p=6,g=3,_=2,m=1,M=new Float32Array(g*p*h),x=new Float32Array(_*p*h),S=new Float32Array(m*p*h);for(let T=0;T<h;T++){const P=T%3*2/3-1,y=T>2?0:-1,w=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];M.set(w,g*p*T),x.set(f,_*p*T);const D=[T,T,T,T,T,T];S.set(D,m*p*T)}const A=new yn;A.setAttribute("position",new ii(M,g)),A.setAttribute("uv",new ii(x,_)),A.setAttribute("faceIndex",new ii(S,m)),i.push(new vt(A,null)),s>Gi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Rd(t,e,n){const i=new ni(t,e,n);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function $b(t,e,n){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function qb(t,e,n){const i=new Float32Array(as),s=new W(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Cd(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Pd(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Em extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gm(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ur(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:xi});r.uniforms.tEquirect.value=n;const o=new vt(s,r),a=n.minFilter;return n.minFilter===ls&&(n.minFilter=rn),new JS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function jb(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ja||h===Ya)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const g=new Em(p.height);return g.fromEquirectangularTexture(t,f),e.set(f,g),f.addEventListener("dispose",u),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===ja||h===Ya,g=h===vs||h===tr;if(p||g){let _=n.get(f);const m=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new wd(t)),_=p?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new wd(t)),_=p?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function a(f,h){return h===ja?f.mapping=vs:h===Ya&&(f.mapping=tr),f}function l(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Yb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Vc("WebGLRenderer: "+i+" extension not supported."),s}}}function Kb(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,p=d.attributes.position;let g=0;if(p===void 0)return;if(h!==null){const M=h.array;g=h.version;for(let x=0,S=M.length;x<S;x+=3){const A=M[x+0],T=M[x+1],P=M[x+2];f.push(A,T,T,P,P,A)}}else{const M=p.array;g=p.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const A=x+0,T=x+1,P=x+2;f.push(A,T,T,P,P,A)}}const _=new(p.count>=65535?hm:dm)(f,1);_.version=g;const m=r.get(d);m&&e.remove(m),r.set(d,_)}function c(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Zb(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,r,d*o),n.update(f,i,1)}function u(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,r,d*o,h),n.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];n.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function Jb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Qb(t,e,n){const i=new WeakMap,s=new It;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;h===!0&&(x=1),p===!0&&(x=2),g===!0&&(x=3);let S=a.attributes.position.count*x,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*A*4*d),P=new cm(T,S,A,d);P.type=Jn,P.needsUpdate=!0;const y=x*4;for(let D=0;D<d;D++){const L=_[D],F=m[D],z=M[D],X=S*A*4*D;for(let O=0;O<L.count;O++){const N=O*y;h===!0&&(s.fromBufferAttribute(L,O),T[X+N+0]=s.x,T[X+N+1]=s.y,T[X+N+2]=s.z,T[X+N+3]=0),p===!0&&(s.fromBufferAttribute(F,O),T[X+N+4]=s.x,T[X+N+5]=s.y,T[X+N+6]=s.z,T[X+N+7]=0),g===!0&&(s.fromBufferAttribute(z,O),T[X+N+8]=s.x,T[X+N+9]=s.y,T[X+N+10]=s.z,T[X+N+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new ut(S,A)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let g=0;g<u.length;g++)h+=u[g];const p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",p),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function eT(t,e,n,i,s){let r=new WeakMap;function o(u){const c=s.render.frame,d=u.geometry,f=e.get(u,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}const tT={[qp]:"LINEAR_TONE_MAPPING",[jp]:"REINHARD_TONE_MAPPING",[Yp]:"CINEON_TONE_MAPPING",[Kp]:"ACES_FILMIC_TONE_MAPPING",[Jp]:"AGX_TONE_MAPPING",[Qp]:"NEUTRAL_TONE_MAPPING",[Zp]:"CUSTOM_TONE_MAPPING"};function nT(t,e,n,i,s){const r=new ni(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new nr(e,n):void 0}),o=new ni(e,n,{type:bi,depthBuffer:!1,stencilBuffer:!1}),a=new yn;a.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Nt([0,2,0,0,2,0],2));const l=new WS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new vt(a,l),c=new Hu(-1,1,1,-1,0,1);let d=null,f=null,h=!1,p,g=null,_=[],m=!1;this.setSize=function(M,x){r.setSize(M,x),o.setSize(M,x);for(let S=0;S<_.length;S++){const A=_[S];A.setSize&&A.setSize(M,x)}},this.setEffects=function(M){_=M,m=_.length>0&&_[0].isRenderPass===!0;const x=r.width,S=r.height;for(let A=0;A<_.length;A++){const T=_[A];T.setSize&&T.setSize(x,S)}},this.begin=function(M,x){if(h||M.toneMapping===ti&&_.length===0)return!1;if(g=x,x!==null){const S=x.width,A=x.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return m===!1&&M.setRenderTarget(r),p=M.toneMapping,M.toneMapping=ti,!0},this.hasRenderPass=function(){return m},this.end=function(M,x){M.toneMapping=p,h=!0;let S=r,A=o;for(let T=0;T<_.length;T++){const P=_[T];if(P.enabled!==!1&&(P.render(M,A,S,x),P.needsSwap!==!1)){const y=S;S=A,A=y}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},nt.getTransfer(d)===mt&&(l.defines.SRGB_TRANSFER="");const T=tT[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(g),M.render(u,c),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const bm=new mn,Xc=new nr(1,1),Tm=new cm,Am=new xS,wm=new gm,Ld=[],Dd=[],Id=new Float32Array(16),Ud=new Float32Array(9),Nd=new Float32Array(4);function fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Aa(t,e){let n=Dd[e];n===void 0&&(n=new Int32Array(e),Dd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Nd.set(i),t.uniformMatrix2fv(this.addr,!1,Nd),Wt(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Ud.set(i),t.uniformMatrix3fv(this.addr,!1,Ud),Wt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Id.set(i),t.uniformMatrix4fv(this.addr,!1,Id),Wt(n,i)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function vT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Xc.compareFunction=n.isReversedDepthBuffer()?Uu:Iu,r=Xc):r=bm,n.setTexture2D(e||r,s)}function xT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Am,s)}function yT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||wm,s)}function ST(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Tm,s)}function MT(t){switch(t){case 5126:return iT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=fr(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=fr(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=fr(e,this.size,4);t.uniform4fv(this.addr,n)}function wT(t,e){const n=fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CT(t,e){const n=fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function DT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function UT(t,e){t.uniform1uiv(this.addr,e)}function NT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function OT(t,e){t.uniform4uiv(this.addr,e)}function BT(t,e,n){const i=this.cache,s=e.length,r=Aa(n,s);Vt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Xc:o=bm;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function kT(t,e,n){const i=this.cache,s=e.length,r=Aa(n,s);Vt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Am,r[o])}function HT(t,e,n){const i=this.cache,s=e.length,r=Aa(n,s);Vt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||wm,r[o])}function GT(t,e,n){const i=this.cache,s=e.length,r=Aa(n,s);Vt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Tm,r[o])}function zT(t){switch(t){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return wT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return IT;case 5125:return UT;case 36294:return NT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class VT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MT(n.type)}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function Fd(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,s=i.length;for(Rl.lastIndex=0;;){const r=Rl.exec(i),o=Rl.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Fd(n,u===void 0?new VT(a,t,e):new WT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new XT(a),Fd(n,d)),n=d}}}class ko{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$T(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Od(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qT=37297;let jT=0;function YT(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Bd=new Ze;function KT(t){nt._getMatrix(Bd,nt.workingColorSpace,t);const e=`mat3( ${Bd.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case na:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+YT(t.getShaderSource(e),a)}else return r}function ZT(t,e){const n=KT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const JT={[qp]:"Linear",[jp]:"Reinhard",[Yp]:"Cineon",[Kp]:"ACESFilmic",[Jp]:"AgX",[Qp]:"Neutral",[Zp]:"Custom"};function QT(t,e){const n=JT[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Lo=new W;function eA(){nt.getLuminanceCoefficients(Lo);const t=Lo.x.toFixed(4),e=Lo.y.toFixed(4),n=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function nA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ar(t){return t!==""}function Hd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(t){return t.replace(sA,oA)}const rA=new Map;function oA(t,e){let n=et[e];if(n===void 0){const i=rA.get(e);if(i!==void 0)n=et[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $c(n)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(t){return t.replace(aA,lA)}function lA(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cA={[Uo]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function uA(t){return cA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fA={[vs]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function dA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":fA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const hA={[tr]:"ENVMAP_MODE_REFRACTION"};function pA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":hA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mA={[$p]:"ENVMAP_BLENDING_MULTIPLY",[Jy]:"ENVMAP_BLENDING_MIX",[Qy]:"ENVMAP_BLENDING_ADD"};function gA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":mA[t.combine]||"ENVMAP_BLENDING_NONE"}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function vA(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=uA(n),u=dA(n),c=pA(n),d=gA(n),f=_A(n),h=tA(n),p=nA(r),g=s.createProgram();let _,m,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Ar).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Ar).join(`
`),m.length>0&&(m+=`
`)):(_=[Vd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),m=[Vd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ti?"#define TONE_MAPPING":"",n.toneMapping!==ti?et.tonemapping_pars_fragment:"",n.toneMapping!==ti?QT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),eA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ar).join(`
`)),o=$c(o),o=Hd(o,n),o=Gd(o,n),a=$c(a),a=Hd(a,n),a=Gd(a,n),o=zd(o),a=zd(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",n.glslVersion===Zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+_+o,S=M+m+a,A=Od(s,s.VERTEX_SHADER,x),T=Od(s,s.FRAGMENT_SHADER,S);s.attachShader(g,A),s.attachShader(g,T),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(L){if(t.debug.checkShaderErrors){const F=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(T)||"",O=F.trim(),N=z.trim(),k=X.trim();let V=!0,oe=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,A,T);else{const ve=kd(s,A,"vertex"),we=kd(s,T,"fragment");ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ve+`
`+we)}else O!==""?Xe("WebGLProgram: Program Info Log:",O):(N===""||k==="")&&(oe=!1);oe&&(L.diagnostics={runnable:V,programLog:O,vertexShader:{log:N,prefix:_},fragmentShader:{log:k,prefix:m}})}s.deleteShader(A),s.deleteShader(T),y=new ko(s,g),w=iA(s,g)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,qT)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new SA(e),n.set(e,i)),i}}class SA{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function MA(t){return t===xs||t===Qo||t===ea}function EA(t,e,n,i,s,r){const o=new um,a=new yA,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,D,L,F,z){const X=L.fog,O=F.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||N,k),oe=V&&V.mapping===Ma?V.image.height:null,ve=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Xe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const we=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,be=we!==void 0?we.length:0;let $e=0;O.morphAttributes.position!==void 0&&($e=1),O.morphAttributes.normal!==void 0&&($e=2),O.morphAttributes.color!==void 0&&($e=3);let Qe,We,te,xe;if(ve){const Ye=jn[ve];Qe=Ye.vertexShader,We=Ye.fragmentShader}else Qe=y.vertexShader,We=y.fragmentShader,a.update(y),te=a.getVertexShaderID(y),xe=a.getFragmentShaderID(y);const ge=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ve=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,rt=!!y.map,R=!!y.matcap,U=!!V,$=!!y.aoMap,Q=!!y.lightMap,ae=!!y.bumpMap,se=!!y.normalMap,_e=!!y.displacementMap,C=!!y.emissiveMap,le=!!y.metalnessMap,ee=!!y.roughnessMap,Ee=y.anisotropy>0,Y=y.clearcoat>0,Se=y.dispersion>0,b=y.iridescence>0,v=y.sheen>0,B=y.transmission>0,K=Ee&&!!y.anisotropyMap,ce=Y&&!!y.clearcoatMap,de=Y&&!!y.clearcoatNormalMap,me=Y&&!!y.clearcoatRoughnessMap,J=b&&!!y.iridescenceMap,H=b&&!!y.iridescenceThicknessMap,ie=v&&!!y.sheenColorMap,fe=v&&!!y.sheenRoughnessMap,ue=!!y.specularMap,ne=!!y.specularColorMap,Te=!!y.specularIntensityMap,Ie=B&&!!y.transmissionMap,Ue=B&&!!y.thicknessMap,I=!!y.gradientMap,pe=!!y.alphaMap,re=y.alphaTest>0,Ae=!!y.alphaHash,ye=!!y.extensions;let he=ti;y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(he=t.toneMapping);const Ne={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:We,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&F.instanceColor!==null,instancingMorph:Ve&&F.morphTexture!==null,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:R,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:oe,aoMap:$,lightMap:Q,bumpMap:ae,normalMap:se,displacementMap:_e,emissiveMap:C,normalMapObjectSpace:se&&y.normalMapType===nS,normalMapTangentSpace:se&&y.normalMapType===zc,packedNormalMap:se&&y.normalMapType===zc&&MA(y.normalMap.format),metalnessMap:le,roughnessMap:ee,anisotropy:Ee,anisotropyMap:K,clearcoat:Y,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:me,dispersion:Se,iridescence:b,iridescenceMap:J,iridescenceThicknessMap:H,sheen:v,sheenColorMap:ie,sheenRoughnessMap:fe,specularMap:ue,specularColorMap:ne,specularIntensityMap:Te,transmission:B,transmissionMap:Ie,thicknessMap:Ue,gradientMap:I,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:re,alphaHash:Ae,combine:y.combine,mapUv:rt&&p(y.map.channel),aoMapUv:$&&p(y.aoMap.channel),lightMapUv:Q&&p(y.lightMap.channel),bumpMapUv:ae&&p(y.bumpMap.channel),normalMapUv:se&&p(y.normalMap.channel),displacementMapUv:_e&&p(y.displacementMap.channel),emissiveMapUv:C&&p(y.emissiveMap.channel),metalnessMapUv:le&&p(y.metalnessMap.channel),roughnessMapUv:ee&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:ce&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:H&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&p(y.sheenRoughnessMap.channel),specularMapUv:ue&&p(y.specularMap.channel),specularColorMapUv:ne&&p(y.specularColorMap.channel),specularIntensityMapUv:Te&&p(y.specularIntensityMap.channel),transmissionMapUv:Ie&&p(y.transmissionMap.channel),thicknessMapUv:Ue&&p(y.thicknessMap.channel),alphaMapUv:pe&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(se||Ee),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(rt||pe),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:$e,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:C&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zn,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)w.push(D),w.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(m(w,y),M(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function x(y){const w=h[y.type];let D;if(w){const L=jn[w];D=GS.clone(L.uniforms)}else D=y.uniforms;return D}function S(y,w){let D=c.get(w);return D!==void 0?++D.usedTimes:(D=new vA(t,w,y,s),u.push(D),c.set(w,D)),D}function A(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function P(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:P}}function bA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function TA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Wd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xd(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,p,g,_,m){let M=t[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:p,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=p,M.materialVariant=o(f),M.groupOrder=g,M.renderOrder=f.renderOrder,M.z=_,M.group=m),e++,M}function l(f,h,p,g,_,m){const M=a(f,h,p,g,_,m);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):n.push(M)}function u(f,h,p,g,_,m){const M=a(f,h,p,g,_,m);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):n.unshift(M)}function c(f,h){n.length>1&&n.sort(f||TA),i.length>1&&i.sort(h||Wd),s.length>1&&s.sort(h||Wd)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:u,finish:d,sort:c}}function AA(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Xd,t.set(i,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new st};break;case"SpotLight":n={position:new W,direction:new W,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CA=0;function PA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LA(t){const e=new wA,n=RA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const s=new W,r=new Ut,o=new Ut;function a(u){let c=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,p=0,g=0,_=0,m=0,M=0,x=0,S=0,A=0,T=0,P=0;u.sort(PA);for(let w=0,D=u.length;w<D;w++){const L=u[w],F=L.color,z=L.intensity,X=L.distance;let O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xs?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=F.r*z,d+=F.g*z,f+=F.b*z;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],z);P++}else if(L.isDirectionalLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,V=n.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=O,i.directionalShadowMatrix[h]=L.shadow.matrix,M++}i.directional[h]=N,h++}else if(L.isSpotLight){const N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(F).multiplyScalar(z),N.distance=X,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[g]=N;const k=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,k.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[g]=k.matrix,L.castShadow){const V=n.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=O,S++}g++}else if(L.isRectAreaLight){const N=e.get(L);N.color.copy(F).multiplyScalar(z),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=N,_++}else if(L.isPointLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const k=L.shadow,V=n.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=L.shadow.matrix,x++}i.point[p]=N,p++}else if(L.isHemisphereLight){const N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(z),N.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[m]=N,m++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==g||y.rectAreaLength!==_||y.hemiLength!==m||y.numDirectionalShadows!==M||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==A||y.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=_,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,y.directionalLength=h,y.pointLength=p,y.spotLength=g,y.rectAreaLength=_,y.hemiLength=m,y.numDirectionalShadows=M,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=A,y.numLightProbes=P,i.version=CA++)}function l(u,c){let d=0,f=0,h=0,p=0,g=0;const _=c.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const x=u[m];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),d++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),h++}else if(x.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),r.copy(x.matrixWorld),r.premultiply(_),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function $d(t){const e=new LA(t),n=[],i=[],s=[];function r(f){d.camera=f,n.length=0,i.length=0,s.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function DA(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new $d(t),e.set(s,[a])):r>=o.length?(a=new $d(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],FA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],qd=new Ut,Mr=new W,Cl=new W;function OA(t,e,n){let i=new Ou;const s=new ut,r=new ut,o=new It,a=new XS,l=new $S,u={},c=n.maxTextureSize,d={[Xi]:xn,[xn]:Xi,[Zn]:Zn},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:IA,fragmentShader:UA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new yn;p.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vt(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let m=this.type;this.render=function(T,P,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===Xp&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uo);const w=t.getRenderTarget(),D=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=m!==this.type;z&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=T.length;X<O;X++){const N=T[X],k=N.shadow;if(k===void 0){Xe("WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const V=k.getFrameExtents();s.multiply(V),r.copy(k.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/V.y),s.y=r.y*V.y,k.mapSize.y=r.y));const oe=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=oe,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Tr){if(N.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ni(s.x,s.y,{format:xs,type:bi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=N.name+".shadowMap",k.map.depthTexture=new nr(s.x,s.y,Jn),k.map.depthTexture.name=N.name+".shadowMapDepth",k.map.depthTexture.format=Ti,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt}else N.isPointLight?(k.map=new Em(s.x),k.map.depthTexture=new kS(s.x,oi)):(k.map=new ni(s.x,s.y),k.map.depthTexture=new nr(s.x,s.y,oi)),k.map.depthTexture.name=N.name+".shadowMap",k.map.depthTexture.format=Ti,this.type===Uo?(k.map.depthTexture.compareFunction=oe?Uu:Iu,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt);k.camera.updateProjectionMatrix()}const ve=k.map.isWebGLCubeRenderTarget?6:1;for(let we=0;we<ve;we++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,we),t.clear();else{we===0&&(t.setRenderTarget(k.map),t.clear());const be=k.getViewport(we);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),F.viewport(o)}if(N.isPointLight){const be=k.camera,$e=k.matrix,Qe=N.distance||be.far;Qe!==be.far&&(be.far=Qe,be.updateProjectionMatrix()),Mr.setFromMatrixPosition(N.matrixWorld),be.position.copy(Mr),Cl.copy(be.position),Cl.add(NA[we]),be.up.copy(FA[we]),be.lookAt(Cl),be.updateMatrixWorld(),$e.makeTranslation(-Mr.x,-Mr.y,-Mr.z),qd.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),k._frustum.setFromProjectionMatrix(qd,be.coordinateSystem,be.reversedDepth)}else k.updateMatrices(N);i=k.getFrustum(),S(P,y,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===Tr&&M(k,y),k.needsUpdate=!1}m=this.type,_.needsUpdate=!1,t.setRenderTarget(w,D,L)};function M(T,P){const y=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(s.x,s.y,{format:xs,type:bi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(P,null,y,f,g,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(P,null,y,h,g,null)}function x(T,P,y,w){let D=null;const L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)D=L;else if(D=y.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=D.uuid,z=P.uuid;let X=u[F];X===void 0&&(X={},u[F]=X);let O=X[z];O===void 0&&(O=D.clone(),X[z]=O,P.addEventListener("dispose",A)),D=O}if(D.visible=P.visible,D.wireframe=P.wireframe,w===Tr?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:d[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=t.properties.get(D);F.light=y}return D}function S(T,P,y,w,D){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Tr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const z=e.update(T),X=T.material;if(Array.isArray(X)){const O=z.groups;for(let N=0,k=O.length;N<k;N++){const V=O[N],oe=X[V.materialIndex];if(oe&&oe.visible){const ve=x(T,oe,w,D);T.onBeforeShadow(t,T,P,y,z,ve,V),t.renderBufferDirect(y,null,z,ve,T,V),T.onAfterShadow(t,T,P,y,z,ve,V)}}}else if(X.visible){const O=x(T,X,w,D);T.onBeforeShadow(t,T,P,y,z,O,null),t.renderBufferDirect(y,null,z,O,T,null),T.onAfterShadow(t,T,P,y,z,O,null)}}const F=T.children;for(let z=0,X=F.length;z<X;z++)S(F[z],P,y,w,D)}function A(T){T.target.removeEventListener("dispose",A);for(const y in u){const w=u[y],D=T.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function BA(t,e){function n(){let I=!1;const pe=new It;let re=null;const Ae=new It(0,0,0,0);return{setMask:function(ye){re!==ye&&!I&&(t.colorMask(ye,ye,ye,ye),re=ye)},setLocked:function(ye){I=ye},setClear:function(ye,he,Ne,Ye,Rt){Rt===!0&&(ye*=Ye,he*=Ye,Ne*=Ye),pe.set(ye,he,Ne,Ye),Ae.equals(pe)===!1&&(t.clearColor(ye,he,Ne,Ye),Ae.copy(pe))},reset:function(){I=!1,re=null,Ae.set(-1,0,0,0)}}}function i(){let I=!1,pe=!1,re=null,Ae=null,ye=null;return{setReversed:function(he){if(pe!==he){const Ne=e.get("EXT_clip_control");he?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),pe=he;const Ye=ye;ye=null,this.setClear(Ye)}},getReversed:function(){return pe},setTest:function(he){he?ge(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(he){re!==he&&!I&&(t.depthMask(he),re=he)},setFunc:function(he){if(pe&&(he=dS[he]),Ae!==he){switch(he){case ic:t.depthFunc(t.NEVER);break;case sc:t.depthFunc(t.ALWAYS);break;case rc:t.depthFunc(t.LESS);break;case er:t.depthFunc(t.LEQUAL);break;case oc:t.depthFunc(t.EQUAL);break;case ac:t.depthFunc(t.GEQUAL);break;case lc:t.depthFunc(t.GREATER);break;case cc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ae=he}},setLocked:function(he){I=he},setClear:function(he){ye!==he&&(ye=he,pe&&(he=1-he),t.clearDepth(he))},reset:function(){I=!1,re=null,Ae=null,ye=null,pe=!1}}}function s(){let I=!1,pe=null,re=null,Ae=null,ye=null,he=null,Ne=null,Ye=null,Rt=null;return{setTest:function(ot){I||(ot?ge(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!I&&(t.stencilMask(ot),pe=ot)},setFunc:function(ot,Me,Be){(re!==ot||Ae!==Me||ye!==Be)&&(t.stencilFunc(ot,Me,Be),re=ot,Ae=Me,ye=Be)},setOp:function(ot,Me,Be){(he!==ot||Ne!==Me||Ye!==Be)&&(t.stencilOp(ot,Me,Be),he=ot,Ne=Me,Ye=Be)},setLocked:function(ot){I=ot},setClear:function(ot){Rt!==ot&&(t.clearStencil(ot),Rt=ot)},reset:function(){I=!1,pe=null,re=null,Ae=null,ye=null,he=null,Ne=null,Ye=null,Rt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,M=null,x=null,S=null,A=null,T=null,P=null,y=new st(0,0,0),w=0,D=!1,L=null,F=null,z=null,X=null,O=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const oe=t.getParameter(t.VERSION);oe.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(oe)[1]),k=V>=1):oe.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),k=V>=2);let ve=null,we={};const be=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),Qe=new It().fromArray(be),We=new It().fromArray($e);function te(I,pe,re,Ae){const ye=new Uint8Array(4),he=t.createTexture();t.bindTexture(I,he),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<re;Ne++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(pe+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return he}const xe={};xe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(t.DEPTH_TEST),o.setFunc(er),ae(!1),se(Xf),ge(t.CULL_FACE),$(xi);function ge(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function Oe(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ve(I,pe){return f[I]!==pe?(t.bindFramebuffer(I,pe),f[I]=pe,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function He(I,pe){let re=p,Ae=!1;if(I){re=h.get(pe),re===void 0&&(re=[],h.set(pe,re));const ye=I.textures;if(re.length!==ye.length||re[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ne=ye.length;he<Ne;he++)re[he]=t.COLOR_ATTACHMENT0+he;re.length=ye.length,Ae=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,Ae=!0);Ae&&t.drawBuffers(re)}function rt(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const R={[rs]:t.FUNC_ADD,[Ny]:t.FUNC_SUBTRACT,[Fy]:t.FUNC_REVERSE_SUBTRACT};R[Oy]=t.MIN,R[By]=t.MAX;const U={[ky]:t.ZERO,[Hy]:t.ONE,[Gy]:t.SRC_COLOR,[tc]:t.SRC_ALPHA,[qy]:t.SRC_ALPHA_SATURATE,[Xy]:t.DST_COLOR,[Vy]:t.DST_ALPHA,[zy]:t.ONE_MINUS_SRC_COLOR,[nc]:t.ONE_MINUS_SRC_ALPHA,[$y]:t.ONE_MINUS_DST_COLOR,[Wy]:t.ONE_MINUS_DST_ALPHA,[jy]:t.CONSTANT_COLOR,[Yy]:t.ONE_MINUS_CONSTANT_COLOR,[Ky]:t.CONSTANT_ALPHA,[Zy]:t.ONE_MINUS_CONSTANT_ALPHA};function $(I,pe,re,Ae,ye,he,Ne,Ye,Rt,ot){if(I===xi){_===!0&&(Oe(t.BLEND),_=!1);return}if(_===!1&&(ge(t.BLEND),_=!0),I!==Uy){if(I!==m||ot!==D){if((M!==rs||A!==rs)&&(t.blendEquation(t.FUNC_ADD),M=rs,A=rs),ot)switch(I){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $f:t.blendFunc(t.ONE,t.ONE);break;case qf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",I);break}else switch(I){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $f:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",I);break}x=null,S=null,T=null,P=null,y.set(0,0,0),w=0,m=I,D=ot}return}ye=ye||pe,he=he||re,Ne=Ne||Ae,(pe!==M||ye!==A)&&(t.blendEquationSeparate(R[pe],R[ye]),M=pe,A=ye),(re!==x||Ae!==S||he!==T||Ne!==P)&&(t.blendFuncSeparate(U[re],U[Ae],U[he],U[Ne]),x=re,S=Ae,T=he,P=Ne),(Ye.equals(y)===!1||Rt!==w)&&(t.blendColor(Ye.r,Ye.g,Ye.b,Rt),y.copy(Ye),w=Rt),m=I,D=!1}function Q(I,pe){I.side===Zn?Oe(t.CULL_FACE):ge(t.CULL_FACE);let re=I.side===xn;pe&&(re=!re),ae(re),I.blending===qs&&I.transparent===!1?$(xi):$(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Ae=I.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),C(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ae(I){L!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),L=I)}function se(I){I!==Dy?(ge(t.CULL_FACE),I!==F&&(I===Xf?t.cullFace(t.BACK):I===Iy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),F=I}function _e(I){I!==z&&(k&&t.lineWidth(I),z=I)}function C(I,pe,re){I?(ge(t.POLYGON_OFFSET_FILL),(X!==pe||O!==re)&&(X=pe,O=re,o.getReversed()&&(pe=-pe),t.polygonOffset(pe,re))):Oe(t.POLYGON_OFFSET_FILL)}function le(I){I?ge(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function ee(I){I===void 0&&(I=t.TEXTURE0+N-1),ve!==I&&(t.activeTexture(I),ve=I)}function Ee(I,pe,re){re===void 0&&(ve===null?re=t.TEXTURE0+N-1:re=ve);let Ae=we[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},we[re]=Ae),(Ae.type!==I||Ae.texture!==pe)&&(ve!==re&&(t.activeTexture(re),ve=re),t.bindTexture(I,pe||xe[I]),Ae.type=I,Ae.texture=pe)}function Y(){const I=we[ve];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Se(){try{t.compressedTexImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function v(){try{t.texSubImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function B(){try{t.texSubImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function ce(){try{t.compressedTexSubImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function de(){try{t.texStorage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function me(){try{t.texStorage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function J(){try{t.texImage2D(...arguments)}catch(I){ct("WebGLState:",I)}}function H(){try{t.texImage3D(...arguments)}catch(I){ct("WebGLState:",I)}}function ie(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function fe(I,pe){d[I]!==pe&&(t.pixelStorei(I,pe),d[I]=pe)}function ue(I){Qe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function ne(I){We.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function Te(I,pe){let re=u.get(pe);re===void 0&&(re=new WeakMap,u.set(pe,re));let Ae=re.get(I);Ae===void 0&&(Ae=t.getUniformBlockIndex(pe,I.name),re.set(I,Ae))}function Ie(I,pe){const Ae=u.get(pe).get(I);l.get(pe)!==Ae&&(t.uniformBlockBinding(pe,Ae,I.__bindingPointIndex),l.set(pe,Ae))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},ve=null,we={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,M=null,x=null,S=null,A=null,T=null,P=null,y=new st(0,0,0),w=0,D=!1,L=null,F=null,z=null,X=null,O=null,Qe.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Oe,bindFramebuffer:Ve,drawBuffers:He,useProgram:rt,setBlending:$,setMaterial:Q,setFlipSided:ae,setCullFace:se,setLineWidth:_e,setPolygonOffset:C,setScissorTest:le,activeTexture:ee,bindTexture:Ee,unbindTexture:Y,compressedTexImage2D:Se,compressedTexImage3D:b,texImage2D:J,texImage3D:H,pixelStorei:fe,getParameter:ie,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:de,texStorage3D:me,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:K,compressedTexSubImage3D:ce,scissor:ue,viewport:ne,reset:Ue}}function kA(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ut,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):ia("canvas")}function _(b,v,B){let K=1;const ce=Se(b);if((ce.width>B||ce.height>B)&&(K=B/Math.max(ce.width,ce.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(K*ce.width),me=Math.floor(K*ce.height);f===void 0&&(f=g(de,me));const J=v?g(de,me):f;return J.width=de,J.height=me,J.getContext("2d").drawImage(b,0,0,de,me),Xe("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+de+"x"+me+")."),J}else return"data"in b&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),b;return b}function m(b){return b.generateMipmaps}function M(b){t.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(b,v,B,K,ce,de=!1){if(b!==null){if(t[b]!==void 0)return t[b];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let me;K&&(me=e.get("EXT_texture_norm16"),me||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8),B===t.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),B===t.SHORT&&me&&(J=me.R16_SNORM_EXT)),v===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),v===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8),B===t.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),B===t.SHORT&&me&&(J=me.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),v===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGB8UI),B===t.UNSIGNED_SHORT&&(J=t.RGB16UI),B===t.UNSIGNED_INT&&(J=t.RGB32UI),B===t.BYTE&&(J=t.RGB8I),B===t.SHORT&&(J=t.RGB16I),B===t.INT&&(J=t.RGB32I)),v===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),B===t.UNSIGNED_INT&&(J=t.RGBA32UI),B===t.BYTE&&(J=t.RGBA8I),B===t.SHORT&&(J=t.RGBA16I),B===t.INT&&(J=t.RGBA32I)),v===t.RGB&&(B===t.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),B===t.SHORT&&me&&(J=me.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),v===t.RGBA){const H=de?na:nt.getTransfer(ce);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=H===mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),B===t.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(b,v){let B;return b?v===null||v===oi||v===zr?B=t.DEPTH24_STENCIL8:v===Jn?B=t.DEPTH32F_STENCIL8:v===Gr&&(B=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===oi||v===zr?B=t.DEPTH_COMPONENT24:v===Jn?B=t.DEPTH_COMPONENT32F:v===Gr&&(B=t.DEPTH_COMPONENT16),B}function T(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Zt&&b.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),w(v),v.isVideoTexture&&c.delete(v),v.isHTMLTexture&&d.delete(v)}function y(b){const v=b.target;v.removeEventListener("dispose",y),L(v)}function w(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,K=h.get(B);if(K){const ce=K[v.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&D(b),Object.keys(K).length===0&&h.delete(B)}i.remove(b)}function D(b){const v=i.get(b);t.deleteTexture(v.__webglTexture);const B=b.source,K=h.get(B);delete K[v.__cacheKey],o.memory.textures--}function L(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ce=0;ce<v.__webglFramebuffer[K].length;ce++)t.deleteFramebuffer(v.__webglFramebuffer[K][ce]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let K=0,ce=B.length;K<ce;K++){const de=i.get(B[K]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(b)}let F=0;function z(){F=0}function X(){return F}function O(b){F=b}function N(){const b=F;return b>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),F+=1,b}function k(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function V(b,v){const B=i.get(b);if(b.isVideoTexture&&Ee(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const K=b.image;if(K===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,b,v);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+v)}function oe(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Oe(B,b,v);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+v)}function ve(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Oe(B,b,v);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+v)}function we(b,v){const B=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){Ve(B,b,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+v)}const be={[uc]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[fc]:t.MIRRORED_REPEAT},$e={[Zt]:t.NEAREST,[eS]:t.NEAREST_MIPMAP_NEAREST,[ao]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Ka]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},Qe={[iS]:t.NEVER,[lS]:t.ALWAYS,[sS]:t.LESS,[Iu]:t.LEQUAL,[rS]:t.EQUAL,[Uu]:t.GEQUAL,[oS]:t.GREATER,[aS]:t.NOTEQUAL};function We(b,v){if(v.type===Jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===Ka||v.magFilter===ao||v.magFilter===ls||v.minFilter===rn||v.minFilter===Ka||v.minFilter===ao||v.minFilter===ls)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,be[v.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,be[v.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,be[v.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,$e[v.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,$e[v.minFilter]),v.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Qe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==ao&&v.minFilter!==ls||v.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const K=v.source;let ce=h.get(K);ce===void 0&&(ce={},h.set(K,ce));const de=k(v);if(de!==b.__cacheKey){ce[de]===void 0&&(ce[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ce[de].usedTimes++;const me=ce[b.__cacheKey];me!==void 0&&(ce[b.__cacheKey].usedTimes--,me.usedTimes===0&&D(v)),b.__cacheKey=de,b.__webglTexture=ce[de].texture}return B}function xe(b,v,B){return Math.floor(Math.floor(b/B)/v)}function ge(b,v,B,K){const de=b.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,B,K,v.data);else{de.sort((fe,ue)=>fe.start-ue.start);let me=0;for(let fe=1;fe<de.length;fe++){const ue=de[me],ne=de[fe],Te=ue.start+ue.count,Ie=xe(ne.start,v.width,4),Ue=xe(ue.start,v.width,4);ne.start<=Te+1&&Ie===Ue&&xe(ne.start+ne.count-1,v.width,4)===Ie?ue.count=Math.max(ue.count,ne.start+ne.count-ue.start):(++me,de[me]=ne)}de.length=me+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),H=n.getParameter(t.UNPACK_SKIP_PIXELS),ie=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let fe=0,ue=de.length;fe<ue;fe++){const ne=de[fe],Te=Math.floor(ne.start/4),Ie=Math.ceil(ne.count/4),Ue=Te%v.width,I=Math.floor(Te/v.width),pe=Ie,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ue,I,pe,re,B,K,v.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,H),n.pixelStorei(t.UNPACK_SKIP_ROWS,ie)}}function Oe(b,v,B){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const ce=te(b,v),de=v.source;n.bindTexture(K,b.__webglTexture,t.TEXTURE0+B);const me=i.get(de);if(de.version!==me.__version||ce===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const re=nt.getPrimaries(nt.workingColorSpace),Ae=v.colorSpace===ki?null:nt.getPrimaries(v.colorSpace),ye=v.colorSpace===ki||re===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let H=_(v.image,!1,s.maxTextureSize);H=Y(v,H);const ie=r.convert(v.format,v.colorSpace),fe=r.convert(v.type);let ue=S(v.internalFormat,ie,fe,v.normalized,v.colorSpace,v.isVideoTexture);We(K,v);let ne;const Te=v.mipmaps,Ie=v.isVideoTexture!==!0,Ue=me.__version===void 0||ce===!0,I=de.dataReady,pe=T(v,H);if(v.isDepthTexture)ue=A(v.format===cs,v.type),Ue&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,ue,H.width,H.height):n.texImage2D(t.TEXTURE_2D,0,ue,H.width,H.height,0,ie,fe,null));else if(v.isDataTexture)if(Te.length>0){Ie&&Ue&&n.texStorage2D(t.TEXTURE_2D,pe,ue,Te[0].width,Te[0].height);for(let re=0,Ae=Te.length;re<Ae;re++)ne=Te[re],Ie?I&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ne.width,ne.height,ie,fe,ne.data):n.texImage2D(t.TEXTURE_2D,re,ue,ne.width,ne.height,0,ie,fe,ne.data);v.generateMipmaps=!1}else Ie?(Ue&&n.texStorage2D(t.TEXTURE_2D,pe,ue,H.width,H.height),I&&ge(v,H,ie,fe)):n.texImage2D(t.TEXTURE_2D,0,ue,H.width,H.height,0,ie,fe,H.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ue,Te[0].width,Te[0].height,H.depth);for(let re=0,Ae=Te.length;re<Ae;re++)if(ne=Te[re],v.format!==Bn)if(ie!==null)if(Ie){if(I)if(v.layerUpdates.size>0){const ye=bd(ne.width,ne.height,v.format,v.type);for(const he of v.layerUpdates){const Ne=ne.data.subarray(he*ye/ne.data.BYTES_PER_ELEMENT,(he+1)*ye/ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,he,ne.width,ne.height,1,ie,Ne)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,H.depth,ie,ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,ue,ne.width,ne.height,H.depth,0,ne.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,H.depth,ie,fe,ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,ue,ne.width,ne.height,H.depth,0,ie,fe,ne.data)}else{Ie&&Ue&&n.texStorage2D(t.TEXTURE_2D,pe,ue,Te[0].width,Te[0].height);for(let re=0,Ae=Te.length;re<Ae;re++)ne=Te[re],v.format!==Bn?ie!==null?Ie?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ne.width,ne.height,ie,ne.data):n.compressedTexImage2D(t.TEXTURE_2D,re,ue,ne.width,ne.height,0,ne.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ne.width,ne.height,ie,fe,ne.data):n.texImage2D(t.TEXTURE_2D,re,ue,ne.width,ne.height,0,ie,fe,ne.data)}else if(v.isDataArrayTexture)if(Ie){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ue,H.width,H.height,H.depth),I)if(v.layerUpdates.size>0){const re=bd(H.width,H.height,v.format,v.type);for(const Ae of v.layerUpdates){const ye=H.data.subarray(Ae*re/H.data.BYTES_PER_ELEMENT,(Ae+1)*re/H.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ae,H.width,H.height,1,ie,fe,ye)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ie,fe,H.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,H.width,H.height,H.depth,0,ie,fe,H.data);else if(v.isData3DTexture)Ie?(Ue&&n.texStorage3D(t.TEXTURE_3D,pe,ue,H.width,H.height,H.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ie,fe,H.data)):n.texImage3D(t.TEXTURE_3D,0,ue,H.width,H.height,H.depth,0,ie,fe,H.data);else if(v.isFramebufferTexture){if(Ue)if(Ie)n.texStorage2D(t.TEXTURE_2D,pe,ue,H.width,H.height);else{let re=H.width,Ae=H.height;for(let ye=0;ye<pe;ye++)n.texImage2D(t.TEXTURE_2D,ye,ue,re,Ae,0,ie,fe,null),re>>=1,Ae>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),H.parentNode!==re){re.appendChild(H),d.add(v),re.onpaint=Ye=>{const Rt=Ye.changedElements;for(const ot of d)Rt.includes(ot.image)&&(ot.needsUpdate=!0)},re.requestPaint();return}const Ae=0,ye=t.RGBA,he=t.RGBA,Ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Ae,ye,he,Ne,H),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ie&&Ue){const re=Se(Te[0]);n.texStorage2D(t.TEXTURE_2D,pe,ue,re.width,re.height)}for(let re=0,Ae=Te.length;re<Ae;re++)ne=Te[re],Ie?I&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ie,fe,ne):n.texImage2D(t.TEXTURE_2D,re,ue,ie,fe,ne);v.generateMipmaps=!1}else if(Ie){if(Ue){const re=Se(H);n.texStorage2D(t.TEXTURE_2D,pe,ue,re.width,re.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie,fe,H)}else n.texImage2D(t.TEXTURE_2D,0,ue,ie,fe,H);m(v)&&M(K),me.__version=de.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ve(b,v,B){if(v.image.length!==6)return;const K=te(b,v),ce=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const de=i.get(ce);if(ce.version!==de.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const me=nt.getPrimaries(nt.workingColorSpace),J=v.colorSpace===ki?null:nt.getPrimaries(v.colorSpace),H=v.colorSpace===ki||me===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const ie=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let he=0;he<6;he++)!ie&&!fe?ue[he]=_(v.image[he],!0,s.maxCubemapSize):ue[he]=fe?v.image[he].image:v.image[he],ue[he]=Y(v,ue[he]);const ne=ue[0],Te=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),Ue=S(v.internalFormat,Te,Ie,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,pe=de.__version===void 0||K===!0,re=ce.dataReady;let Ae=T(v,ne);We(t.TEXTURE_CUBE_MAP,v);let ye;if(ie){I&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ue,ne.width,ne.height);for(let he=0;he<6;he++){ye=ue[he].mipmaps;for(let Ne=0;Ne<ye.length;Ne++){const Ye=ye[Ne];v.format!==Bn?Te!==null?I?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,Ye.width,Ye.height,Te,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Ue,Ye.width,Ye.height,0,Ye.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,Ye.width,Ye.height,Te,Ie,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Ue,Ye.width,Ye.height,0,Te,Ie,Ye.data)}}}else{if(ye=v.mipmaps,I&&pe){ye.length>0&&Ae++;const he=Se(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ue,he.width,he.height)}for(let he=0;he<6;he++)if(fe){I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ue[he].width,ue[he].height,Te,Ie,ue[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ue,ue[he].width,ue[he].height,0,Te,Ie,ue[he].data);for(let Ne=0;Ne<ye.length;Ne++){const Rt=ye[Ne].image[he].image;I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,Rt.width,Rt.height,Te,Ie,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Ue,Rt.width,Rt.height,0,Te,Ie,Rt.data)}}else{I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Te,Ie,ue[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ue,Te,Ie,ue[he]);for(let Ne=0;Ne<ye.length;Ne++){const Ye=ye[Ne];I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,Te,Ie,Ye.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Ue,Te,Ie,Ye.image[he])}}}m(v)&&M(t.TEXTURE_CUBE_MAP),de.__version=ce.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function He(b,v,B,K,ce,de){const me=r.convert(B.format,B.colorSpace),J=r.convert(B.type),H=S(B.internalFormat,me,J,B.normalized,B.colorSpace),ie=i.get(v),fe=i.get(B);if(fe.__renderTarget=v,!ie.__hasExternalTextures){const ue=Math.max(1,v.width>>de),ne=Math.max(1,v.height>>de);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,de,H,ue,ne,v.depth,0,me,J,null):n.texImage2D(ce,de,H,ue,ne,0,me,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),ee(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ce,fe.__webglTexture,0,le(v)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ce,fe.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(b,v,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),v.depthBuffer){const K=v.depthTexture,ce=K&&K.isDepthTexture?K.type:null,de=A(v.stencilBuffer,ce),me=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ee(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le(v),de,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,le(v),de,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,de,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,b)}else{const K=v.textures;for(let ce=0;ce<K.length;ce++){const de=K[ce],me=r.convert(de.format,de.colorSpace),J=r.convert(de.type),H=S(de.internalFormat,me,J,de.normalized,de.colorSpace);ee(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le(v),H,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,le(v),H,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,H,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function R(b,v,B){const K=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(v.depthTexture);if(ce.__renderTarget=v,(!ce.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),ce.__webglTexture===void 0){ce.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),We(t.TEXTURE_CUBE_MAP,v.depthTexture);const ie=r.convert(v.depthTexture.format),fe=r.convert(v.depthTexture.type);let ue;v.depthTexture.format===Ti?ue=t.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(ue=t.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,v.width,v.height,0,ie,fe,null)}}else V(v.depthTexture,0);const de=ce.__webglTexture,me=le(v),J=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,H=v.depthTexture.format===cs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ti)ee(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,J,de,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,H,J,de,0);else if(v.depthTexture.format===cs)ee(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,J,de,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,H,J,de,0);else throw new Error("Unknown depthTexture format")}function U(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ce=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ce)};K.addEventListener("dispose",ce),v.__depthDisposeCallback=ce}v.__boundDepthTexture=K}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)R(v.__webglFramebuffer[K],b,K);else{const K=b.texture.mipmaps;K&&K.length>0?R(v.__webglFramebuffer[0],b,0):R(v.__webglFramebuffer,b,0)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=t.createRenderbuffer(),rt(v.__webglDepthbuffer[K],b,!1);else{const ce=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,de)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),rt(v.__webglDepthbuffer,b,!1);else{const ce=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(b,v,B){const K=i.get(b);v!==void 0&&He(K.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&U(b)}function Q(b){const v=b.texture,B=i.get(b),K=i.get(v);b.addEventListener("dispose",y);const ce=b.textures,de=b.isWebGLCubeRenderTarget===!0,me=ce.length>1;if(me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let H=0;H<v.mipmaps.length;H++)B.__webglFramebuffer[J][H]=t.createFramebuffer()}else B.__webglFramebuffer[J]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(me)for(let J=0,H=ce.length;J<H;J++){const ie=i.get(ce[J]);ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&ee(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<ce.length;J++){const H=ce[J];B.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const ie=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),ue=S(H.internalFormat,ie,fe,H.normalized,H.colorSpace,b.isXRRenderTarget===!0),ne=le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,ue,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,B.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),We(t.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let H=0;H<v.mipmaps.length;H++)He(B.__webglFramebuffer[J][H],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,H);else He(B.__webglFramebuffer[J],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(v)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let J=0,H=ce.length;J<H;J++){const ie=ce[J],fe=i.get(ie);let ue=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,fe.__webglTexture),We(ue,ie),He(B.__webglFramebuffer,b,ie,t.COLOR_ATTACHMENT0+J,ue,0),m(ie)&&M(ue)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,K.__webglTexture),We(J,v),v.mipmaps&&v.mipmaps.length>0)for(let H=0;H<v.mipmaps.length;H++)He(B.__webglFramebuffer[H],b,v,t.COLOR_ATTACHMENT0,J,H);else He(B.__webglFramebuffer,b,v,t.COLOR_ATTACHMENT0,J,0);m(v)&&M(J),n.unbindTexture()}b.depthBuffer&&U(b)}function ae(b){const v=b.textures;for(let B=0,K=v.length;B<K;B++){const ce=v[B];if(m(ce)){const de=x(b),me=i.get(ce).__webglTexture;n.bindTexture(de,me),M(de),n.unbindTexture()}}}const se=[],_e=[];function C(b){if(b.samples>0){if(ee(b)===!1){const v=b.textures,B=b.width,K=b.height;let ce=t.COLOR_BUFFER_BIT;const de=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(b),J=v.length>1;if(J)for(let ie=0;ie<v.length;ie++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const H=b.texture.mipmaps;H&&H.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ie=0;ie<v.length;ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);const fe=i.get(v[ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,ce,t.NEAREST),l===!0&&(se.length=0,_e.length=0,se.push(t.COLOR_ATTACHMENT0+ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(se.push(de),_e.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ie=0;ie<v.length;ie++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);const fe=i.get(v[ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function le(b){return Math.min(s.maxSamples,b.samples)}function ee(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(b){const v=o.render.frame;c.get(b)!==v&&(c.set(b,v),b.update())}function Y(b,v){const B=b.colorSpace,K=b.format,ce=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==ta&&B!==ki&&(nt.getTransfer(B)===mt?(K!==Bn||ce!==An)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",B)),v}function Se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=oe,this.setTexture3D=ve,this.setTextureCube=we,this.rebindTextures=$,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HA(t,e){function n(i,s=ki){let r;const o=nt.getTransfer(s);if(i===An)return t.UNSIGNED_BYTE;if(i===Ru)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===im)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===tm)return t.BYTE;if(i===nm)return t.SHORT;if(i===Gr)return t.UNSIGNED_SHORT;if(i===wu)return t.INT;if(i===oi)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===bi)return t.HALF_FLOAT;if(i===rm)return t.ALPHA;if(i===om)return t.RGB;if(i===Bn)return t.RGBA;if(i===Ti)return t.DEPTH_COMPONENT;if(i===cs)return t.DEPTH_STENCIL;if(i===am)return t.RED;if(i===Pu)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Lu)return t.RG_INTEGER;if(i===Du)return t.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===hc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc||i===xc||i===yc||i===Qo||i===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gc||i===_c)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xc)return r.COMPRESSED_R11_EAC;if(i===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qo)return r.COMPRESSED_RG11_EAC;if(i===Sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===Ec||i===bc||i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===Oc||i===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kc||i===Hc||i===ea||i===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _m(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ai({vertexShader:GA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vt(new Zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Ss{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,p=null;const g=typeof XRWebGLBinding<"u",_=new VA,m={},M=n.getContextAttributes();let x=null,S=null;const A=[],T=[],P=new ut;let y=null;const w=new Tn;w.viewport=new It;const D=new Tn;D.viewport=new It;const L=[w,D],F=new QS;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let xe=A[te];return xe===void 0&&(xe=new sl,A[te]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(te){let xe=A[te];return xe===void 0&&(xe=new sl,A[te]=xe),xe.getGripSpace()},this.getHand=function(te){let xe=A[te];return xe===void 0&&(xe=new sl,A[te]=xe),xe.getHandSpace()};function O(te){const xe=T.indexOf(te.inputSource);if(xe===-1)return;const ge=A[xe];ge!==void 0&&(ge.update(te.inputSource,te.frame,u||o),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let te=0;te<A.length;te++){const xe=T[te];xe!==null&&(T[te]=null,A[te].disconnect(xe))}z=null,X=null,_.reset();for(const te in m)delete m[te];e.setRenderTarget(x),h=null,f=null,d=null,s=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Oe=null,Ve=null;M.depth&&(Ve=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=M.stencil?cs:Ti,Oe=M.stencil?zr:oi);const He={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ni(f.textureWidth,f.textureHeight,{format:Bn,type:An,depthTexture:new nr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,ge),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ni(h.framebufferWidth,h.framebufferHeight,{format:Bn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(te){for(let xe=0;xe<te.removed.length;xe++){const ge=te.removed[xe],Oe=T.indexOf(ge);Oe>=0&&(T[Oe]=null,A[Oe].disconnect(ge))}for(let xe=0;xe<te.added.length;xe++){const ge=te.added[xe];let Oe=T.indexOf(ge);if(Oe===-1){for(let He=0;He<A.length;He++)if(He>=T.length){T.push(ge),Oe=He;break}else if(T[He]===null){T[He]=ge,Oe=He;break}if(Oe===-1)break}const Ve=A[Oe];Ve&&Ve.connect(ge)}}const V=new W,oe=new W;function ve(te,xe,ge){V.setFromMatrixPosition(xe.matrixWorld),oe.setFromMatrixPosition(ge.matrixWorld);const Oe=V.distanceTo(oe),Ve=xe.projectionMatrix.elements,He=ge.projectionMatrix.elements,rt=Ve[14]/(Ve[10]-1),R=Ve[14]/(Ve[10]+1),U=(Ve[9]+1)/Ve[5],$=(Ve[9]-1)/Ve[5],Q=(Ve[8]-1)/Ve[0],ae=(He[8]+1)/He[0],se=rt*Q,_e=rt*ae,C=Oe/(-Q+ae),le=C*-Q;if(xe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(le),te.translateZ(C),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const ee=rt+C,Ee=R+C,Y=se-le,Se=_e+(Oe-le),b=U*R/Ee*ee,v=$*R/Ee*ee;te.projectionMatrix.makePerspective(Y,Se,b,v,ee,Ee),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function we(te,xe){xe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(xe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let xe=te.near,ge=te.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),F.near=D.near=w.near=xe,F.far=D.far=w.far=ge,(z!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,X=F.far),F.layers.mask=te.layers.mask|6,w.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const Oe=te.parent,Ve=F.cameras;we(F,Oe);for(let He=0;He<Ve.length;He++)we(Ve[He],Oe);Ve.length===2?ve(F,w,D):F.projectionMatrix.copy(w.projectionMatrix),be(te,F,Oe)};function be(te,xe,ge){ge===null?te.matrix.copy(xe.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(xe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Wc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(te){return m[te]};let $e=null;function Qe(te,xe){if(c=xe.getViewerPose(u||o),p=xe,c!==null){const ge=c.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Oe=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,Oe=!0);for(let R=0;R<ge.length;R++){const U=ge[R];let $=null;if(h!==null)$=h.getViewport(U);else{const ae=d.getViewSubImage(f,U);$=ae.viewport,R===0&&(e.setRenderTargetTextures(S,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(S))}let Q=L[R];Q===void 0&&(Q=new Tn,Q.layers.enable(R),Q.viewport=new It,L[R]=Q),Q.matrix.fromArray(U.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(U.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set($.x,$.y,$.width,$.height),R===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Oe===!0&&F.cameras.push(Q)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const R=d.getDepthInformation(ge[0]);R&&R.isValid&&R.texture&&_.init(R,s.renderState)}if(Ve&&Ve.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let R=0;R<ge.length;R++){const U=ge[R].camera;if(U){let $=m[U];$||($=new _m,m[U]=$);const Q=d.getCameraImage(U);$.sourceTexture=Q}}}}for(let ge=0;ge<A.length;ge++){const Oe=T[ge],Ve=A[ge];Oe!==null&&Ve!==void 0&&Ve.update(Oe,xe,u||o)}$e&&$e(te,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),p=null}const We=new Sm;We.setAnimationLoop(Qe),this.setAnimationLoop=function(te){$e=te},this.dispose=function(){}}}const XA=new Ut,Rm=new Ze;Rm.set(-1,0,0,0,1,0,0,0,1);function $A(t,e){function n(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,vm(t)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,M,x,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),d(_,m)):m.isMeshPhongMaterial?(r(_,m),c(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&h(_,m,S)):m.isMeshMatcapMaterial?(r(_,m),p(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),g(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,M,x):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,n(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===xn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,n(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===xn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,n(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,n(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,S=M.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Rm),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,M,x){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*M,_.scale.value=x*.5,m.map&&(_.map.value=m.map,n(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function h(_,m,M){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const M=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qA(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;i.uniformBlockBinding(M,S)}function u(M,x){let S=s[M.id];S===void 0&&(p(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",_));const A=x.program;i.updateUBOMapping(M,A);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function c(M){const x=d();M.__bindingPointIndex=x;const S=t.createBuffer(),A=M.__size,T=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],S=M.uniforms,A=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,P=S.length;T<P;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,D=y.length;w<D;w++){const L=y[w];if(h(L,T,w,A)===!0){const F=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let O=0;O<z.length;O++){const N=z[O],k=g(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,F+X,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):ArrayBuffer.isView(N)?L.__data.set(new N.constructor(N.buffer,N.byteOffset,L.__data.length)):(N.toArray(L.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,x,S,A){const T=M.value,P=x+"_"+S;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:ArrayBuffer.isView(T)?A[P]=T.slice():A[P]=T.clone(),!0;{const y=A[P];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return A[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(y.equals(T)===!1)return y.copy(T),!0}}return!1}function p(M){const x=M.uniforms;let S=0;const A=16;for(let P=0,y=x.length;P<y;P++){const w=Array.isArray(x[P])?x[P]:[x[P]];for(let D=0,L=w.length;D<L;D++){const F=w[D],z=Array.isArray(F.value)?F.value:[F.value];for(let X=0,O=z.length;X<O;X++){const N=z[X],k=g(N),V=S%A,oe=V%k.boundary,ve=V+oe;S+=oe,ve!==0&&A-ve<k.storage&&(S+=A-ve),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=k.storage}}}const T=S%A;return T>0&&(S+=A-T),M.__size=S,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(x.boundary=16,x.storage=M.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",M),x}function _(M){const x=M.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const M in s)t.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:m}}const jA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function YA(){return Wn===null&&(Wn=new IS(jA,16,16,xs,bi),Wn.name="DFG_LUT",Wn.minFilter=rn,Wn.magFilter=rn,Wn.wrapS=_i,Wn.wrapT=_i,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class KA{constructor(e={}){const{canvas:n=uS(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=An}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=h,_=new Set([Du,Lu,Pu]),m=new Set([An,oi,Gr,zr,Ru,Cu]),M=new Uint32Array(4),x=new Int32Array(4),S=new W;let A=null,T=null;const P=[],y=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,F=null;this._outputColorSpace=Dn;let z=0,X=0,O=null,N=-1,k=null;const V=new It,oe=new It;let ve=null;const we=new st(0);let be=0,$e=n.width,Qe=n.height,We=1,te=null,xe=null;const ge=new It(0,0,$e,Qe),Oe=new It(0,0,$e,Qe);let Ve=!1;const He=new Ou;let rt=!1,R=!1;const U=new Ut,$=new W,Q=new It,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function _e(){return O===null?We:1}let C=i;function le(E,G){return n.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Au}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Ye,!1),C===null){const G="webgl2";if(C=le(G,E),C===null)throw le(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ct("WebGLRenderer: "+E.message),E}let ee,Ee,Y,Se,b,v,B,K,ce,de,me,J,H,ie,fe,ue,ne,Te,Ie,Ue,I,pe,re;function Ae(){ee=new Yb(C),ee.init(),I=new HA(C,ee),Ee=new Gb(C,ee,e,I),Y=new BA(C,ee),Ee.reversedDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),Se=new Jb(C),b=new bA,v=new kA(C,ee,Y,b,Ee,I,Se),B=new jb(D),K=new nM(C),pe=new kb(C,K),ce=new Kb(C,K,Se,pe),de=new eT(C,ce,K,pe,Se),Te=new Qb(C,Ee,v),fe=new zb(b),me=new EA(D,B,ee,Ee,pe,fe),J=new $A(D,b),H=new AA,ie=new DA(ee),ne=new Bb(D,B,Y,de,p,l),ue=new OA(D,de,Ee),re=new qA(C,Se,Ee,Y),Ie=new Hb(C,ee,Se),Ue=new Zb(C,ee,Se),Se.programs=me.programs,D.capabilities=Ee,D.extensions=ee,D.properties=b,D.renderLists=H,D.shadowMap=ue,D.state=Y,D.info=Se}Ae(),g!==An&&(w=new nT(g,n.width,n.height,s,r));const ye=new WA(D,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(E){E!==void 0&&(We=E,this.setSize($e,Qe,!1))},this.getSize=function(E){return E.set($e,Qe)},this.setSize=function(E,G,Z=!0){if(ye.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=E,Qe=G,n.width=Math.floor(E*We),n.height=Math.floor(G*We),Z===!0&&(n.style.width=E+"px",n.style.height=G+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set($e*We,Qe*We).floor()},this.setDrawingBufferSize=function(E,G,Z){$e=E,Qe=G,We=Z,n.width=Math.floor(E*Z),n.height=Math.floor(G*Z),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(g===An){ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){Xe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(V)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,G,Z,q){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,G,Z,q),Y.viewport(V.copy(ge).multiplyScalar(We).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,G,Z,q){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,G,Z,q),Y.scissor(oe.copy(Oe).multiplyScalar(We).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){Y.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,Z=!0){let q=0;if(E){let j=!1;if(O!==null){const Pe=O.texture.format;j=_.has(Pe)}if(j){const Pe=O.texture.type,De=m.has(Pe),Ce=ne.getClearColor(),Fe=ne.getClearAlpha(),ke=Ce.r,Je=Ce.g,tt=Ce.b;De?(M[0]=ke,M[1]=Je,M[2]=tt,M[3]=Fe,C.clearBufferuiv(C.COLOR,0,M)):(x[0]=ke,x[1]=Je,x[2]=tt,x[3]=Fe,C.clearBufferiv(C.COLOR,0,x))}else q|=C.COLOR_BUFFER_BIT}G&&(q|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Ye,!1),ne.dispose(),H.dispose(),ie.dispose(),b.dispose(),B.dispose(),de.dispose(),pe.dispose(),re.dispose(),me.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",gt),ye.removeEventListener("sessionend",Ft),Pt.stop()};function he(E){E.preventDefault(),Qf("WebGLRenderer: Context Lost."),L=!0}function Ne(){Qf("WebGLRenderer: Context Restored."),L=!1;const E=Se.autoReset,G=ue.enabled,Z=ue.autoUpdate,q=ue.needsUpdate,j=ue.type;Ae(),Se.autoReset=E,ue.enabled=G,ue.autoUpdate=Z,ue.needsUpdate=q,ue.type=j}function Ye(E){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const G=E.target;G.removeEventListener("dispose",Rt),ot(G)}function ot(E){Me(E),b.remove(E)}function Me(E){const G=b.get(E).programs;G!==void 0&&(G.forEach(function(Z){me.releaseProgram(Z)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Z,q,j,Pe){G===null&&(G=ae);const De=j.isMesh&&j.matrixWorld.determinant()<0,Ce=Im(E,G,Z,q,j);Y.setMaterial(q,De);let Fe=Z.index,ke=1;if(q.wireframe===!0){if(Fe=ce.getWireframeAttribute(Z),Fe===void 0)return;ke=2}const Je=Z.drawRange,tt=Z.attributes.position;let Ge=Je.start*ke,_t=(Je.start+Je.count)*ke;Pe!==null&&(Ge=Math.max(Ge,Pe.start*ke),_t=Math.min(_t,(Pe.start+Pe.count)*ke)),Fe!==null?(Ge=Math.max(Ge,0),_t=Math.min(_t,Fe.count)):tt!=null&&(Ge=Math.max(Ge,0),_t=Math.min(_t,tt.count));const Ot=_t-Ge;if(Ot<0||Ot===1/0)return;pe.setup(j,q,Ce,Z,Fe);let Lt,yt=Ie;if(Fe!==null&&(Lt=K.get(Fe),yt=Ue,yt.setIndex(Lt)),j.isMesh)q.wireframe===!0?(Y.setLineWidth(q.wireframeLinewidth*_e()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if(j.isLine){let en=q.linewidth;en===void 0&&(en=1),Y.setLineWidth(en*_e()),j.isLineSegments?yt.setMode(C.LINES):j.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else j.isPoints?yt.setMode(C.POINTS):j.isSprite&&yt.setMode(C.TRIANGLES);if(j.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const en=j._multiDrawStarts,Le=j._multiDrawCounts,Sn=j._multiDrawCount,lt=Fe?K.get(Fe).bytesPerElement:1,Cn=b.get(q).currentProgram.getUniforms();for(let zn=0;zn<Sn;zn++)Cn.setValue(C,"_gl_DrawID",zn),yt.render(en[zn]/lt,Le[zn])}else if(j.isInstancedMesh)yt.renderInstances(Ge,Ot,j.count);else if(Z.isInstancedBufferGeometry){const en=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Le=Math.min(Z.instanceCount,en);yt.renderInstances(Ge,Ot,Le)}else yt.render(Ge,Ot)};function Be(E,G,Z){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Jr(E,G,Z),E.side=Xi,E.needsUpdate=!0,Jr(E,G,Z),E.side=Zn):Jr(E,G,Z)}this.compile=function(E,G,Z=null){Z===null&&(Z=E),T=ie.get(Z),T.init(G),y.push(T),Z.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==Z&&E.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const q=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let De=0;De<Pe.length;De++){const Ce=Pe[De];Be(Ce,Z,j),q.add(Ce)}else Be(Pe,Z,j),q.add(Pe)}),T=y.pop(),q},this.compileAsync=function(E,G,Z=null){const q=this.compile(E,G,Z);return new Promise(j=>{function Pe(){if(q.forEach(function(De){b.get(De).currentProgram.isReady()&&q.delete(De)}),q.size===0){j(E);return}setTimeout(Pe,10)}ee.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let at=null;function dt(E){at&&at(E)}function gt(){Pt.stop()}function Ft(){Pt.start()}const Pt=new Sm;Pt.setAnimationLoop(dt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(E){at=E,ye.setAnimationLoop(E),E===null?Pt.stop():Pt.start()},ye.addEventListener("sessionstart",gt),ye.addEventListener("sessionend",Ft),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,G);const Z=ye.enabled===!0&&ye.isPresenting===!0,q=w!==null&&(O===null||Z)&&w.begin(D,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,G,O),T=ie.get(E,y.length),T.init(G),T.state.textureUnits=v.getTextureUnits(),y.push(T),U.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),He.setFromProjectionMatrix(U,Qn,G.reversedDepth),R=this.localClippingEnabled,rt=fe.init(this.clippingPlanes,R),A=H.get(E,P.length),A.init(),P.push(A),ye.enabled===!0&&ye.isPresenting===!0){const De=D.xr.getDepthSensingMesh();De!==null&&on(De,G,-1/0,D.sortObjects)}on(E,G,0,D.sortObjects),A.finish(),D.sortObjects===!0&&A.sort(te,xe),se=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,se&&ne.addToRenderList(A,E),this.info.render.frame++,rt===!0&&fe.beginShadows();const j=T.state.shadowsArray;if(ue.render(j,E,G),rt===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&w.hasRenderPass())===!1){const De=A.opaque,Ce=A.transmissive;if(T.setupLights(),G.isArrayCamera){const Fe=G.cameras;if(Ce.length>0)for(let ke=0,Je=Fe.length;ke<Je;ke++){const tt=Fe[ke];dr(De,Ce,E,tt)}se&&ne.render(E);for(let ke=0,Je=Fe.length;ke<Je;ke++){const tt=Fe[ke];Gn(A,E,tt,tt.viewport)}}else Ce.length>0&&dr(De,Ce,E,G),se&&ne.render(E),Gn(A,E,G)}O!==null&&X===0&&(v.updateMultisampleRenderTarget(O),v.updateRenderTargetMipmap(O)),q&&w.end(D),E.isScene===!0&&E.onAfterRender(D,E,G),pe.resetDefaultState(),N=-1,k=null,y.pop(),y.length>0?(T=y[y.length-1],v.setTextureUnits(T.state.textureUnits),rt===!0&&fe.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,F!==null&&F.renderEnd()};function on(E,G,Z,q){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){q&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);const De=de.update(E),Ce=E.material;Ce.visible&&A.push(E,De,Ce,Z,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){const De=de.update(E),Ce=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Q.copy(E.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Q.copy(De.boundingSphere.center)),Q.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(Ce)){const Fe=De.groups;for(let ke=0,Je=Fe.length;ke<Je;ke++){const tt=Fe[ke],Ge=Ce[tt.materialIndex];Ge&&Ge.visible&&A.push(E,De,Ge,Z,Q.z,tt)}}else Ce.visible&&A.push(E,De,Ce,Z,Q.z,null)}}const Pe=E.children;for(let De=0,Ce=Pe.length;De<Ce;De++)on(Pe[De],G,Z,q)}function Gn(E,G,Z,q){const{opaque:j,transmissive:Pe,transparent:De}=E;T.setupLightsView(Z),rt===!0&&fe.setGlobalState(D.clippingPlanes,Z),q&&Y.viewport(V.copy(q)),j.length>0&&Yi(j,G,Z),Pe.length>0&&Yi(Pe,G,Z),De.length>0&&Yi(De,G,Z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function dr(E,G,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const Ge=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new ni(1,1,{generateMipmaps:!0,type:Ge?bi:An,minFilter:ls,samples:Math.max(4,Ee.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Pe=T.state.transmissionRenderTarget[q.id],De=q.viewport||V;Pe.setSize(De.z*D.transmissionResolutionScale,De.w*D.transmissionResolutionScale);const Ce=D.getRenderTarget(),Fe=D.getActiveCubeFace(),ke=D.getActiveMipmapLevel();D.setRenderTarget(Pe),D.getClearColor(we),be=D.getClearAlpha(),be<1&&D.setClearColor(16777215,.5),D.clear(),se&&ne.render(Z);const Je=D.toneMapping;D.toneMapping=ti;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),rt===!0&&fe.setGlobalState(D.clippingPlanes,q),Yi(E,Z,q),v.updateMultisampleRenderTarget(Pe),v.updateRenderTargetMipmap(Pe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let _t=0,Ot=G.length;_t<Ot;_t++){const Lt=G[_t],{object:yt,geometry:en,material:Le,group:Sn}=Lt;if(Le.side===Zn&&yt.layers.test(q.layers)){const lt=Le.side;Le.side=xn,Le.needsUpdate=!0,wa(yt,Z,q,en,Le,Sn),Le.side=lt,Le.needsUpdate=!0,Ge=!0}}Ge===!0&&(v.updateMultisampleRenderTarget(Pe),v.updateRenderTargetMipmap(Pe))}D.setRenderTarget(Ce,Fe,ke),D.setClearColor(we,be),tt!==void 0&&(q.viewport=tt),D.toneMapping=Je}function Yi(E,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Pe=E.length;j<Pe;j++){const De=E[j],{object:Ce,geometry:Fe,group:ke}=De;let Je=De.material;Je.allowOverride===!0&&q!==null&&(Je=q),Ce.layers.test(Z.layers)&&wa(Ce,G,Z,Fe,Je,ke)}}function wa(E,G,Z,q,j,Pe){E.onBeforeRender(D,G,Z,q,j,Pe),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(D,G,Z,q,E,Pe),j.transparent===!0&&j.side===Zn&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,D.renderBufferDirect(Z,G,q,j,E,Pe),j.side=Xi,j.needsUpdate=!0,D.renderBufferDirect(Z,G,q,j,E,Pe),j.side=Zn):D.renderBufferDirect(Z,G,q,j,E,Pe),E.onAfterRender(D,G,Z,q,j,Pe)}function Jr(E,G,Z){G.isScene!==!0&&(G=ae);const q=b.get(E),j=T.state.lights,Pe=T.state.shadowsArray,De=j.state.version,Ce=me.getParameters(E,j.state,Pe,G,Z,T.state.lightProbeGridArray),Fe=me.getProgramCacheKey(Ce);let ke=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=B.get(E.envMap||q.environment,Je),q.envMapRotation=q.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Rt),ke=new Map,q.programs=ke);let tt=ke.get(Fe);if(tt!==void 0){if(q.currentProgram===tt&&q.lightsStateVersion===De)return qu(E,Ce),tt}else Ce.uniforms=me.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Z,Ce),E.onBeforeCompile(Ce,D),tt=me.acquireProgram(Ce,Fe),ke.set(Fe,tt),q.uniforms=Ce.uniforms;const Ge=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=fe.uniform),qu(E,Ce),q.needsLights=Nm(E),q.lightsStateVersion=De,q.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=tt,q.uniformsList=null,tt}function $u(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=ko.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function qu(E,G){const Z=b.get(E);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Dm(E,G){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(G.matrixWorld);for(let Z=0,q=E.length;Z<q;Z++){const j=E[Z];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function Im(E,G,Z,q,j){G.isScene!==!0&&(G=ae),v.resetTextureUnits();const Pe=G.fog,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,Ce=O===null?D.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nt.workingColorSpace,Fe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ke=B.get(q.envMap||De,Fe),Je=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,Ot=!!Z.morphAttributes.color;let Lt=ti;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Lt=D.toneMapping);const yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,en=yt!==void 0?yt.length:0,Le=b.get(q),Sn=T.state.lights;if(rt===!0&&(R===!0||E!==k)){const Et=E===k&&q.id===N;fe.setState(q,E,Et)}let lt=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Sn.state.version||Le.outputColorSpace!==Ce||j.isBatchedMesh&&Le.batching===!1||!j.isBatchedMesh&&Le.batching===!0||j.isBatchedMesh&&Le.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Le.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Le.instancing===!1||!j.isInstancedMesh&&Le.instancing===!0||j.isSkinnedMesh&&Le.skinning===!1||!j.isSkinnedMesh&&Le.skinning===!0||j.isInstancedMesh&&Le.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Le.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Le.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Le.instancingMorph===!1&&j.morphTexture!==null||Le.envMap!==ke||q.fog===!0&&Le.fog!==Pe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==fe.numPlanes||Le.numIntersection!==fe.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==tt||Le.morphTargets!==Ge||Le.morphNormals!==_t||Le.morphColors!==Ot||Le.toneMapping!==Lt||Le.morphTargetsCount!==en||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Le.__version=q.version);let Cn=Le.currentProgram;lt===!0&&(Cn=Jr(q,G,j),F&&q.isNodeMaterial&&F.onUpdateProgram(q,Cn,Le));let zn=!1,wi=!1,Ms=!1;const St=Cn.getUniforms(),Bt=Le.uniforms;if(Y.useProgram(Cn.program)&&(zn=!0,wi=!0,Ms=!0),q.id!==N&&(N=q.id,wi=!0),Le.needsLights){const Et=Dm(T.state.lightProbeGridArray,j);Le.lightProbeGrid!==Et&&(Le.lightProbeGrid=Et,wi=!0)}if(zn||k!==E){Y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(C,"projectionMatrix",E.projectionMatrix),St.setValue(C,"viewMatrix",E.matrixWorldInverse);const Ci=St.map.cameraPosition;Ci!==void 0&&Ci.setValue(C,$.setFromMatrixPosition(E.matrixWorld)),Ee.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&St.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,wi=!0,Ms=!0)}if(Le.needsLights&&(Sn.state.directionalShadowMap.length>0&&St.setValue(C,"directionalShadowMap",Sn.state.directionalShadowMap,v),Sn.state.spotShadowMap.length>0&&St.setValue(C,"spotShadowMap",Sn.state.spotShadowMap,v),Sn.state.pointShadowMap.length>0&&St.setValue(C,"pointShadowMap",Sn.state.pointShadowMap,v)),j.isSkinnedMesh){St.setOptional(C,j,"bindMatrix"),St.setOptional(C,j,"bindMatrixInverse");const Et=j.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),St.setValue(C,"boneTexture",Et.boneTexture,v))}j.isBatchedMesh&&(St.setOptional(C,j,"batchingTexture"),St.setValue(C,"batchingTexture",j._matricesTexture,v),St.setOptional(C,j,"batchingIdTexture"),St.setValue(C,"batchingIdTexture",j._indirectTexture,v),St.setOptional(C,j,"batchingColorTexture"),j._colorsTexture!==null&&St.setValue(C,"batchingColorTexture",j._colorsTexture,v));const Ri=Z.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Te.update(j,Z,Cn),(wi||Le.receiveShadow!==j.receiveShadow)&&(Le.receiveShadow=j.receiveShadow,St.setValue(C,"receiveShadow",j.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(Bt.envMapIntensity.value=G.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=YA()),wi){if(St.setValue(C,"toneMappingExposure",D.toneMappingExposure),Le.needsLights&&Um(Bt,Ms),Pe&&q.fog===!0&&J.refreshFogUniforms(Bt,Pe),J.refreshMaterialUniforms(Bt,q,We,Qe,T.state.transmissionRenderTarget[E.id]),Le.needsLights&&Le.lightProbeGrid){const Et=Le.lightProbeGrid;Bt.probesSH.value=Et.texture,Bt.probesMin.value.copy(Et.boundingBox.min),Bt.probesMax.value.copy(Et.boundingBox.max),Bt.probesResolution.value.copy(Et.resolution)}ko.upload(C,$u(Le),Bt,v)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ko.upload(C,$u(Le),Bt,v),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&St.setValue(C,"center",j.center),St.setValue(C,"modelViewMatrix",j.modelViewMatrix),St.setValue(C,"normalMatrix",j.normalMatrix),St.setValue(C,"modelMatrix",j.matrixWorld),q.uniformsGroups!==void 0){const Et=q.uniformsGroups;for(let Ci=0,Es=Et.length;Ci<Es;Ci++){const ju=Et[Ci];re.update(ju,Cn),re.bind(ju,Cn)}}return Cn}function Um(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Nm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,G,Z){const q=b.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=G,b.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const Z=b.get(E);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const Fm=C.createFramebuffer();this.setRenderTarget=function(E,G=0,Z=0){O=E,z=G,X=Z;let q=null,j=!1,Pe=!1;if(E){const Ce=b.get(E);if(Ce.__useDefaultFramebuffer!==void 0){Y.bindFramebuffer(C.FRAMEBUFFER,Ce.__webglFramebuffer),V.copy(E.viewport),oe.copy(E.scissor),ve=E.scissorTest,Y.viewport(V),Y.scissor(oe),Y.setScissorTest(ve),N=-1;return}else if(Ce.__webglFramebuffer===void 0)v.setupRenderTarget(E);else if(Ce.__hasExternalTextures)v.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Je=E.depthTexture;if(Ce.__boundDepthTexture!==Je){if(Je!==null&&b.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);const ke=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?q=ke[G][Z]:q=ke[G],j=!0):E.samples>0&&v.useMultisampledRTT(E)===!1?q=b.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?q=ke[Z]:q=ke,V.copy(E.viewport),oe.copy(E.scissor),ve=E.scissorTest}else V.copy(ge).multiplyScalar(We).floor(),oe.copy(Oe).multiplyScalar(We).floor(),ve=Ve;if(Z!==0&&(q=Fm),Y.bindFramebuffer(C.FRAMEBUFFER,q)&&Y.drawBuffers(E,q),Y.viewport(V),Y.scissor(oe),Y.setScissorTest(ve),j){const Ce=b.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,Z)}else if(Pe){const Ce=G;for(let Fe=0;Fe<E.textures.length;Fe++){const ke=b.get(E.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,Z,Ce)}}else if(E!==null&&Z!==0){const Ce=b.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,Z)}N=-1},this.readRenderTargetPixels=function(E,G,Z,q,j,Pe,De,Ce=0){if(!(E&&E.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){Y.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const ke=E.textures[Ce],Je=ke.format,tt=ke.type;if(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),!Ee.textureFormatReadable(Je)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(tt)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-q&&Z>=0&&Z<=E.height-j&&C.readPixels(G,Z,q,j,I.convert(Je),I.convert(tt),Pe)}finally{const ke=O!==null?b.get(O).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,G,Z,q,j,Pe,De,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(G>=0&&G<=E.width-q&&Z>=0&&Z<=E.height-j){Y.bindFramebuffer(C.FRAMEBUFFER,Fe);const ke=E.textures[Ce],Je=ke.format,tt=ke.type;if(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),!Ee.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.bufferData(C.PIXEL_PACK_BUFFER,Pe.byteLength,C.STREAM_READ),C.readPixels(G,Z,q,j,I.convert(Je),I.convert(tt),0);const _t=O!==null?b.get(O).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,_t);const Ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await fS(C,Ot,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Pe),C.deleteBuffer(Ge),C.deleteSync(Ot),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,Z=0){const q=Math.pow(2,-Z),j=Math.floor(E.image.width*q),Pe=Math.floor(E.image.height*q),De=G!==null?G.x:0,Ce=G!==null?G.y:0;v.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,De,Ce,j,Pe),Y.unbindTexture()};const Om=C.createFramebuffer(),Bm=C.createFramebuffer();this.copyTextureToTexture=function(E,G,Z=null,q=null,j=0,Pe=0){let De,Ce,Fe,ke,Je,tt,Ge,_t,Ot;const Lt=E.isCompressedTexture?E.mipmaps[Pe]:E.image;if(Z!==null)De=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,Je=Z.min.y,tt=Z.isBox3?Z.min.z:0;else{const Bt=Math.pow(2,-j);De=Math.floor(Lt.width*Bt),Ce=Math.floor(Lt.height*Bt),E.isDataArrayTexture?Fe=Lt.depth:E.isData3DTexture?Fe=Math.floor(Lt.depth*Bt):Fe=1,ke=0,Je=0,tt=0}q!==null?(Ge=q.x,_t=q.y,Ot=q.z):(Ge=0,_t=0,Ot=0);const yt=I.convert(G.format),en=I.convert(G.type);let Le;G.isData3DTexture?(v.setTexture3D(G,0),Le=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(v.setTexture2DArray(G,0),Le=C.TEXTURE_2D_ARRAY):(v.setTexture2D(G,0),Le=C.TEXTURE_2D),Y.activeTexture(C.TEXTURE0),Y.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),Y.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Y.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const Sn=Y.getParameter(C.UNPACK_ROW_LENGTH),lt=Y.getParameter(C.UNPACK_IMAGE_HEIGHT),Cn=Y.getParameter(C.UNPACK_SKIP_PIXELS),zn=Y.getParameter(C.UNPACK_SKIP_ROWS),wi=Y.getParameter(C.UNPACK_SKIP_IMAGES);Y.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),Y.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),Y.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),Y.pixelStorei(C.UNPACK_SKIP_ROWS,Je),Y.pixelStorei(C.UNPACK_SKIP_IMAGES,tt);const Ms=E.isDataArrayTexture||E.isData3DTexture,St=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const Bt=b.get(E),Ri=b.get(G),Et=b.get(Bt.__renderTarget),Ci=b.get(Ri.__renderTarget);Y.bindFramebuffer(C.READ_FRAMEBUFFER,Et.__webglFramebuffer),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Es=0;Es<Fe;Es++)Ms&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(E).__webglTexture,j,tt+Es),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(G).__webglTexture,Pe,Ot+Es)),C.blitFramebuffer(ke,Je,De,Ce,Ge,_t,De,Ce,C.DEPTH_BUFFER_BIT,C.NEAREST);Y.bindFramebuffer(C.READ_FRAMEBUFFER,null),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||b.has(E)){const Bt=b.get(E),Ri=b.get(G);Y.bindFramebuffer(C.READ_FRAMEBUFFER,Om),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bm);for(let Et=0;Et<Fe;Et++)Ms?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,j,tt+Et):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,j),St?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ri.__webglTexture,Pe,Ot+Et):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ri.__webglTexture,Pe),j!==0?C.blitFramebuffer(ke,Je,De,Ce,Ge,_t,De,Ce,C.COLOR_BUFFER_BIT,C.NEAREST):St?C.copyTexSubImage3D(Le,Pe,Ge,_t,Ot+Et,ke,Je,De,Ce):C.copyTexSubImage2D(Le,Pe,Ge,_t,ke,Je,De,Ce);Y.bindFramebuffer(C.READ_FRAMEBUFFER,null),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Le,Pe,Ge,_t,Ot,De,Ce,Fe,yt,en,Lt.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(Le,Pe,Ge,_t,Ot,De,Ce,Fe,yt,Lt.data):C.texSubImage3D(Le,Pe,Ge,_t,Ot,De,Ce,Fe,yt,en,Lt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Pe,Ge,_t,De,Ce,yt,en,Lt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Pe,Ge,_t,Lt.width,Lt.height,yt,Lt.data):C.texSubImage2D(C.TEXTURE_2D,Pe,Ge,_t,De,Ce,yt,en,Lt);Y.pixelStorei(C.UNPACK_ROW_LENGTH,Sn),Y.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),Y.pixelStorei(C.UNPACK_SKIP_PIXELS,Cn),Y.pixelStorei(C.UNPACK_SKIP_ROWS,zn),Y.pixelStorei(C.UNPACK_SKIP_IMAGES,wi),Pe===0&&G.generateMipmaps&&C.generateMipmap(Le),Y.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&v.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?v.setTextureCube(E,0):E.isData3DTexture?v.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?v.setTexture2DArray(E,0):v.setTexture2D(E,0),Y.unbindTexture()},this.resetState=function(){z=0,X=0,O=null,Y.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}function ZA(t,e){let n=null,i=null,s=null;const r=Jt("isometric"),o=["isometric","top","side","follow"],a=[],l=[];let u=null,c=null,d=null,f=null,h=null,p=null,g=null,_=null,m=null;const M=new Map,x=new Map,S=[],A=[];let T=null,P=null,y=null,w=null,D=null,L=null,F=null,z=null,X=null,O=null,N=null,k=-1,V=0,oe=0;const ve=Jt(!1);let we=1,be=0,$e=null,Qe=null,We=null,te=null,xe=null,ge=null,Oe=null,Ve=null,He=null,rt=null,R=null,U=null,$=null,Q=null,ae=null,se=null,_e=null,C=null;const le={background:986915,floor:1450302,gridLine:2043216,snakeHead:15287648,snakeBodyEven:996448,snakeBodyOdd:1723008,snakeConnector:664896,eyeWhite:16777215,pupil:1118481,food:15287648,bonusFood:16766720,bonusTimer:16739179,obstacle:9127187,enemyHead:65416,enemyBodyEven:43605,enemyBodyOdd:34884,enemyConnector:26163},ee=()=>{const H=t.value;if(!H||typeof window>"u")return;const{cols:ie,rows:fe}=e,ue=window.innerWidth,ne=window.innerHeight;n=new KA({canvas:H,antialias:!0,alpha:!1}),n.setPixelRatio(window.devicePixelRatio),n.setSize(ue,ne),n.setClearColor(le.background),n.shadowMap.enabled=!0,n.shadowMap.type=Xp,i=new wS;const Te=ue/ne;s=new Tn(45,Te,.1,500);const Ie=ie/2,Ue=fe/2,pe=Math.sqrt(ie*ie+fe*fe)*.75;s.position.set(Ie,pe*.85,Ue+pe*.8),s.lookAt(Ie,0,Ue),$e=new os(.45,24,24),Qe=new Bu(.35,.35,1,20,1),We=new os(.55,28,28),te=new os(.14,16,16),xe=new os(.07,12,12),ge=new _n({color:le.snakeHead,emissive:le.snakeHead,emissiveIntensity:.35,roughness:.35,metalness:.2}),Oe=new _n({color:le.snakeBodyEven,roughness:.5,metalness:.15}),Ve=new _n({color:le.snakeBodyOdd,roughness:.5,metalness:.15}),He=new _n({color:le.snakeConnector,roughness:.6,metalness:.1}),rt=new _n({color:le.eyeWhite,roughness:.2,metalness:0}),R=new _n({color:le.pupil,roughness:.3,metalness:0}),se=new os(.4,24,24),U=new _n({color:le.food,emissive:le.food,emissiveIntensity:.8,roughness:.3,metalness:.3}),$=new _n({color:le.bonusFood,emissive:le.bonusFood,emissiveIntensity:.6,roughness:.3,metalness:.4,transparent:!0,depthWrite:!1}),_e=new ku(.55,.65,32),Q=new Fu({color:le.bonusTimer,side:Zn,transparent:!0,opacity:.9}),C=new ur(.9,.9,.9),ae=new _n({color:le.obstacle,roughness:.7,metalness:.2}),N=new _n({color:le.enemyHead,emissive:le.enemyHead,emissiveIntensity:.35,roughness:.35,metalness:.2}),z=new _n({color:le.enemyBodyEven,roughness:.5,metalness:.15}),X=new _n({color:le.enemyBodyOdd,roughness:.5,metalness:.15}),O=new _n({color:le.enemyConnector,roughness:.6,metalness:.1}),Ee(ie,fe),Y(ie,fe),u=new Hi,i.add(u),c=new Hi,d=new vt(We,ge),d.castShadow=!0,c.add(d),f=new vt(te,rt),f.position.set(.25,.2,.4),c.add(f),h=new vt(te,rt),h.position.set(-.25,.2,.4),c.add(h),p=new vt(xe,R),p.position.set(.25,.2,.5),c.add(p),g=new vt(xe,R),g.position.set(-.25,.2,.5),c.add(g),u.add(c),_=new vt(se,U),_.castShadow=!0,i.add(_),m=new YS(le.food,1.5,6,2),i.add(m),T=new Hi,i.add(T),P=new Hi,y=new vt(We,N),y.castShadow=!0,P.add(y),w=new vt(te,rt),w.position.set(.25,.2,.4),P.add(w),D=new vt(te,rt),D.position.set(-.25,.2,.4),P.add(D),L=new vt(xe,R),L.position.set(.25,.2,.5),P.add(L),F=new vt(xe,R),F.position.set(-.25,.2,.5),P.add(F),T.add(P),window.addEventListener("resize",v)},Ee=(H,ie)=>{if(!i)return;const fe=new Zr(H,ie),ue=new _n({color:le.floor,roughness:.9,metalness:.05}),ne=new vt(fe,ue);ne.rotation.x=-Math.PI/2,ne.position.set(H/2,0,ie/2),ne.receiveShadow=!0,i.add(ne);const Te=new eM(Math.max(H,ie),Math.max(H,ie),le.gridLine,le.gridLine);Te.position.set(H/2,.01,ie/2),H!==ie&&Te.scale.set(H/Math.max(H,ie),1,ie/Math.max(H,ie)),Te.material.transparent=!0,Te.material.opacity=.35,Te.material.depthWrite=!1,i.add(Te)},Y=(H,ie)=>{if(!i)return;const fe=new ZS(16777215,.8);i.add(fe);const ue=new qS(16777215,2767450,.6);i.add(ue);const ne=new El(16777215,.7);ne.position.set(H*.5,H*1.5,ie*.5),ne.castShadow=!0,ne.shadow.mapSize.set(1024,1024),ne.shadow.camera.left=-H,ne.shadow.camera.right=H,ne.shadow.camera.top=ie,ne.shadow.camera.bottom=-ie,ne.shadow.camera.near=1,ne.shadow.camera.far=H*4,i.add(ne);const Te=new El(16762762,.35);Te.position.set(-H*.6,H*.4,ie*1.2),i.add(Te);const Ie=new El(5164484,.2);Ie.position.set(-H,2,ie*1.5),i.add(Ie)},Se=(H,ie)=>{if(!s)return;const{cols:fe,rows:ue}=e,ne=fe/2,Te=ue/2,Ie=Math.sqrt(fe*fe+ue*ue);switch(H){case"isometric":{const Ue=Ie*.75;s.position.set(ne,Ue*.85,Te+Ue*.8),s.lookAt(ne,0,Te);break}case"top":{const Ue=Ie*.75;s.position.set(ne,Ue,Te),s.lookAt(ne,0,Te);break}case"side":{const Ue=Ie*.8;s.position.set(ne,Ue*.3,Te+Ue),s.lookAt(ne,0,Te);break}case"follow":{if(ie){const pe=ie.x-ie.lookX*10,re=ie.z-ie.lookZ*10,Ae=ie.x+ie.lookX*14,ye=ie.z+ie.lookZ*14;s.position.set(pe,8,re),s.lookAt(Ae,0,ye)}else{const Ue=Ie*.75;s.position.set(ne,Ue*.85,Te+Ue*.8),s.lookAt(ne,0,Te)}break}}},b=()=>{const H=o.indexOf(r.value);r.value=o[(H+1)%o.length],Se(r.value)},v=()=>{if(!n||!s||!t.value)return;const H=window.innerWidth,ie=window.innerHeight;n.setSize(H,ie),s.aspect=H/ie,s.updateProjectionMatrix()},B=()=>{if(!$e||!Qe)throw new Error("geometries not initialized");let H=l.pop();if(!H){const ie=new vt($e,Oe);ie.castShadow=!0,ie.receiveShadow=!0;const fe=new vt(Qe,He);fe.castShadow=!0,H={sphere:ie,connector:fe}}return H},K=(H,ie,fe,ue,ne)=>{const Te=ue-ie,Ie=ne-fe,Ue=Math.sqrt(Te*Te+Ie*Ie);H.position.set((ie+ue)/2,.45,(fe+ne)/2),H.scale.set(1,Math.max(.01,Ue),1);const I=Math.atan2(Te,Ie);H.rotation.set(Math.PI/2,0,0),H.rotation.order="YXZ",H.rotation.y=I,H.rotation.x=Math.PI/2},ce=(H,ie,fe,ue)=>{let ne=ie-H;return ne>ue/2?ne-=ue:ne<-ue/2&&(ne+=ue),H+ne*fe},de=(H,ie,fe,ue=[],ne=[],Te=[],Ie=0,Ue=[])=>{if(!n||!i||!s||!u||!T)return;const{cols:I,rows:pe}=e,re=Me=>{const Be=ie[Me];if(!Be)return null;const at=Te[Me];if(!at){const dt=Te[Te.length-1]??Be;return{x:ce(dt.x,Be.x,Ie,I)+.5,z:ce(dt.y,Be.y,Ie,pe)+.5}}return{x:ce(at.x,Be.x,Ie,I)+.5,z:ce(at.y,Be.y,Ie,pe)+.5}},Ae=Math.max(0,ie.length-1);for(;a.length<Ae;){const Me=B();a.push(Me),u.add(Me.sphere),u.add(Me.connector)}for(;a.length>Ae;){const Me=a.pop();u.remove(Me.sphere),u.remove(Me.connector),l.push(Me)}for(let Me=0;Me<Ae;Me++){const{sphere:Be,connector:at}=a[Me],dt=re(Me+1);if(dt)if(Be.position.set(dt.x,.45,dt.z),Be.material=Me%2===0?Oe:Ve,Me+1<Ae){const gt=re(Me+2);if(!gt)at.visible=!1;else{const Ft=gt.x-dt.x,Pt=gt.z-dt.z;Math.sqrt(Ft*Ft+Pt*Pt)>1.5?at.visible=!1:(K(at,dt.x,dt.z,gt.x,gt.z),at.visible=!0)}}else at.visible=!1}let ye=we,he=be;if(c&&ie.length>0){const Me=re(0);if(c.position.set(Me.x,.55,Me.z),ie.length>1){const at=re(1);if(at){let dt=Me.x-at.x,gt=Me.z-at.z;dt>I/2?dt-=I:dt<-I/2&&(dt+=I),gt>pe/2?gt-=pe:gt<-pe/2&&(gt+=pe);const Ft=Math.sqrt(dt*dt+gt*gt);Ft>.01&&Ft<2&&(ye=dt/Ft,he=gt/Ft,we=ye,be=he)}}c.rotation.y=Math.atan2(ye,he);const Be=Math.sin(performance.now()*.006)*.03;d.position.y=Be,r.value==="follow"&&Se("follow",{x:Me.x,z:Me.z,lookX:ye,lookZ:he})}if(_){_.position.set(fe.x+.5,.5,fe.y+.5);const Me=1+Math.sin(performance.now()*.005)*.08;_.scale.setScalar(Me)}m&&m.position.set(fe.x+.5,1.2,fe.y+.5);const Ne=Date.now(),Ye=new Set;for(const Me of ue){Ye.add(Me);let Be=M.get(Me);if(!Be){const gt=new vt(se,$);gt.castShadow=!0;const Ft=new vt(_e,Q);Ft.rotation.x=-Math.PI/2,i.add(gt),i.add(Ft),Be={mesh:gt,ring:Ft},M.set(Me,Be)}const at=Math.max(0,1-(Ne-Me.spawnTime)/Me.lifetime),dt=.6+at*.5;Be.mesh.position.set(Me.x+.5,.4,Me.y+.5),Be.mesh.scale.setScalar(dt),Be.ring.position.set(Me.x+.5,.02,Me.y+.5),Be.ring.scale.setScalar(at),Be.mesh.material.opacity=.5+at*.5}for(const[Me,Be]of M)Ye.has(Me)||(i.remove(Be.mesh),i.remove(Be.ring),Be.mesh.geometry.dispose(),Be.ring.geometry.dispose(),M.delete(Me));const Rt=new Set;for(const Me of ne){Rt.add(Me);let Be=x.get(Me);Be||(Be=new vt(C,ae),Be.castShadow=!0,Be.receiveShadow=!0,i.add(Be),x.set(Me,Be)),Be.position.set(Me.x+.5,.45,Me.y+.5)}for(const[Me,Be]of x)Rt.has(Me)||(i.remove(Be),Be.geometry?.dispose(),x.delete(Me));const ot=Math.max(0,Ue.length-1);for(;S.length<ot&&!(!$e||!Qe);){let Me=A.pop();if(!Me){const Be=new vt($e,z);Be.castShadow=!0,Be.receiveShadow=!0;const at=new vt(Qe,O);at.castShadow=!0,Me={sphere:Be,connector:at}}S.push(Me),T.add(Me.sphere),T.add(Me.connector)}for(;S.length>ot;){const Me=S.pop();T.remove(Me.sphere),T.remove(Me.connector),A.push(Me)}for(let Me=0;Me<ot;Me++){const{sphere:Be,connector:at}=S[Me],dt=Ue[Me+1];if(!dt)continue;const gt=dt.x+.5,Ft=dt.y+.5;if(Be.position.set(gt,.45,Ft),Be.material=Me%2===0?z:X,Me+1<ot){const Pt=Ue[Me+2];if(!Pt)at.visible=!1;else{const on=Pt.x+.5,Gn=Pt.y+.5,dr=on-gt,Yi=Gn-Ft;Math.sqrt(dr*dr+Yi*Yi)>1.5?at.visible=!1:(K(at,gt,Ft,on,Gn),at.visible=!0)}}else at.visible=!1}if(P&&Ue.length>0){const Me=Ue[0],Be=Me.x+.5,at=Me.y+.5;P.position.set(Be,.55,at);let dt=k,gt=V;if(Ue.length>1){const Ft=Ue[1];let Pt=Be-(Ft.x+.5),on=at-(Ft.y+.5);Pt>I/2?Pt-=I:Pt<-I/2&&(Pt+=I),on>pe/2?on-=pe:on<-pe/2&&(on+=pe);const Gn=Math.sqrt(Pt*Pt+on*on);Gn>.01&&Gn<2&&(dt=Pt/Gn,gt=on/Gn,k=dt,V=gt)}P.rotation.y=Math.atan2(dt,gt),y.position.y=Math.sin(performance.now()*.006+1)*.03}else P&&(P.visible=!1);P&&Ue.length>0&&(P.visible=!0),n.render(i,s)},me=(H,ie,fe,ue=()=>[],ne=()=>[],Te=()=>[],Ie=()=>0,Ue=()=>[])=>{if(ve.value)return;ve.value=!0;const I=()=>{ve.value&&(de(H(),ie(),fe(),ue(),ne(),Te(),Ie(),Ue()),oe=requestAnimationFrame(I))};oe=requestAnimationFrame(I)},J=()=>{ve.value=!1,oe&&(cancelAnimationFrame(oe),oe=0)};return or(()=>{J(),window.removeEventListener("resize",v);for(const H of a)H.sphere.geometry?.dispose(),H.connector.geometry?.dispose();for(const H of l)H.sphere.geometry?.dispose(),H.connector.geometry?.dispose();a.length=0,l.length=0;for(const H of S)H.sphere.geometry?.dispose(),H.connector.geometry?.dispose();for(const H of A)H.sphere.geometry?.dispose(),H.connector.geometry?.dispose();S.length=0,A.length=0;for(const{mesh:H,ring:ie}of M.values())H.geometry?.dispose(),ie.geometry?.dispose();M.clear();for(const H of x.values())H.geometry?.dispose();x.clear(),$e?.dispose(),Qe?.dispose(),We?.dispose(),te?.dispose(),xe?.dispose(),se?.dispose(),_e?.dispose(),C?.dispose(),ge?.dispose(),Oe?.dispose(),Ve?.dispose(),He?.dispose(),rt?.dispose(),R?.dispose(),U?.dispose(),$?.dispose(),Q?.dispose(),ae?.dispose(),N?.dispose(),z?.dispose(),X?.dispose(),O?.dispose(),n&&(n.dispose(),n=null),i=null,s=null}),{isRendering:ve,currentView:r,initCanvas:ee,render:de,startRender:me,stopRender:J,cycleCameraView:b}}function JA(t,e,n){let i=0,s=0,r=0,o=0;const a=Jt(!1),l=g=>{if(!a.value)return;s||(s=g);const _=g-s;s=g,r+=_;const m=1e3/e();for(o=m;r>=m;)t(),r-=m;i=requestAnimationFrame(l)},u=()=>{a.value||(a.value=!0,s=0,r=0,o=1e3/e(),i=requestAnimationFrame(l))},c=()=>{a.value=!1,i&&(cancelAnimationFrame(i),i=0)},d=()=>{a.value||(a.value=!0,s=0,r=0,o=1e3/e(),i=requestAnimationFrame(l))},f=()=>{n.value===fn.PLAYING&&c()},h=()=>{n.value===fn.PLAYING&&d()};return Ks(()=>{window.addEventListener("blur",f),window.addEventListener("focus",h)}),or(()=>{c(),window.removeEventListener("blur",f),window.removeEventListener("focus",h)}),{isRunning:Ct(a),start:u,stop:c,resume:d,getInterpolation:()=>o<=0?0:Math.min(1,Math.max(0,r/o))}}function QA(t){const e=Dt([]);let n=0;const i=1e4,s=5e3,r=3,o=d=>{const f=Date.now();if(f-n<i||e.value.length>=r)return;a(f);const h=new Set;for(const M of d)h.add(`${M.x},${M.y}`);for(const M of e.value)h.add(`${M.x},${M.y}`);const p=t.cols*t.rows;if(h.size>=p)return;let g={x:0,y:0},_=0;const m=p;do g={x:Math.floor(Math.random()*t.cols),y:Math.floor(Math.random()*t.rows)},_++;while(h.has(`${g.x},${g.y}`)&&_<m);h.has(`${g.x},${g.y}`)||(e.value.push({x:g.x,y:g.y,type:"timed",points:5,spawnTime:f,lifetime:s}),n=f)},a=(d=Date.now())=>{e.value=e.value.filter(f=>d-f.spawnTime<f.lifetime)};return{bonusFoods:Ct(e),trySpawnBonus:o,removeExpiredBonuses:a,checkBonusEat:(d,f)=>{let h=0;const p=[];for(const g of e.value)g.x===d&&g.y===f?h+=g.points:p.push(g);return h>0&&(e.value=p),h},reset:()=>{e.value=[],n=0},getRemainingLife:(d,f=Date.now())=>{const h=f-d.spawnTime;return Math.max(0,1-h/d.lifetime)}}}function ew(t){const e=Dt([]),n=Dt(!1);let i=0;const s=40,r=(u,c)=>{n.value?(e.value=[],n.value=!1):(o(u,c),n.value=!0)},o=(u,c)=>{e.value=[];const d=new Set;for(const g of u)d.add(`${g.x},${g.y}`);d.add(`${c.x},${c.y}`);const f=t.cols*t.rows;if(d.size>=f)return;const h=[];for(let g=0;g<t.cols;g++)for(let _=0;_<t.rows;_++)d.has(`${g},${_}`)||h.push({x:g,y:_});for(let g=h.length-1;g>0;g--){const _=Math.floor(Math.random()*(g+1)),m=h[g];h[g]=h[_],h[_]=m}const p=Math.min(s,h.length);for(let g=0;g<p;g++){const _=h[g];e.value.push({x:_.x,y:_.y,id:i++})}};return{obstacles:Ct(e),active:Ct(n),toggleRandom:r,spawnRandom:o,clearAll:()=>{e.value=[],n.value=!1},reset:()=>{e.value=[],n.value=!1}}}function tw(t){const e=Dt([]),n=Dt(Ke.LEFT),i=Dt(0),s=Dt(!1);let r=0;const o=()=>{const f=Math.floor(t.cols*.75),h=Math.floor(t.rows*.75);e.value=[{x:f,y:h,id:r++},{x:f+1,y:h,id:r++},{x:f+2,y:h,id:r++}],n.value=Ke.LEFT,i.value=0},a=(f,h,p)=>{const g=[{pos:f,firstDir:null}],_=new Set;_.add(`${f.x},${f.y}`);const m=[Ke.UP,Ke.DOWN,Ke.LEFT,Ke.RIGHT];for(;g.length>0;){const M=g.shift();if(M.pos.x===h.x&&M.pos.y===h.y)return M.firstDir;for(const x of m){const S=Ir[x],A=M.pos.x+S.x,T=M.pos.y+S.y,P=(A%t.cols+t.cols)%t.cols,y=(T%t.rows+t.rows)%t.rows,w=`${P},${y}`;_.has(w)||p.has(w)||(_.add(w),g.push({pos:{x:P,y},firstDir:M.firstDir??x}))}}return null},l=(f,h,p)=>{if(e.value.length===0)return n.value;const g=e.value[0],_=new Set;for(const A of f)_.add(`${A.x},${A.y}`);for(let A=0;A<e.value.length-1;A++){const T=e.value[A];_.add(`${T.x},${T.y}`)}for(const A of p)_.add(`${A.x},${A.y}`);const m=a(g,h,_);if(m)return m;const M=[Ke.UP,Ke.DOWN,Ke.LEFT,Ke.RIGHT],x=n.value,S=[x,...M.filter(A=>A!==x)];for(const A of S){const T=Ir[A],P=g.x+T.x,y=g.y+T.y,w=(P%t.cols+t.cols)%t.cols,D=(y%t.rows+t.rows)%t.rows;if(!_.has(`${w},${D}`))return A}return x};return{enemySnake:Ct(e),direction:Ct(n),score:Ct(i),active:Ct(s),reset:o,move:(f,h,p)=>{if(e.value.length===0)return!1;n.value=l(f,h,p);const g=e.value[0],_=Ir[n.value],m=g.x+_.x,M=g.y+_.y,x=(m%t.cols+t.cols)%t.cols,S=(M%t.rows+t.rows)%t.rows,A={x,y:S,id:r++},T=A.x===h.x&&A.y===h.y;return e.value.unshift(A),T?i.value+=1:e.value.pop(),T},checkCollision:(f,h)=>{if(e.value.length===0)return!1;const p=e.value[0];for(const g of f)if(g.x===p.x&&g.y===p.y)return!0;for(let g=1;g<e.value.length;g++){const _=e.value[g];if(_.x===p.x&&_.y===p.y)return!0}for(const g of h)if(g.x===p.x&&g.y===p.y)return!0;return!1},toggle:()=>{s.value=!s.value,s.value?o():(e.value=[],i.value=0)}}}const nw=1.5,iw=5,sw=2;function rw(t=()=>100,e=()=>.4){const n=Jt(t()),i=Jt(!1),s=()=>{const d=t();i.value?(n.value=Math.max(0,n.value-nw),n.value<=0&&(i.value=!1)):n.value=Math.min(d,n.value+e())},r=()=>n.value>=iw;return{energy:Ct(n),isBoosting:Ct(i),updatePerTick:s,canBoost:r,startBoost:()=>{r()&&(i.value=!0)},endBoost:()=>{i.value=!1},cancelBoost:()=>{i.value=!1},refill:()=>{n.value=t()},reset:()=>{n.value=t(),i.value=!1}}}const Cm="snake_coins",Pm="snake_upgrades",Lm=[{id:"length",name:"Длина",icon:"🐍",description:t=>`Стартовая длина: ${3+t} сегм.`,maxLevel:10,costForLevel:t=>10+t*8},{id:"boostEnergy",name:"Энергия",icon:"⚡",description:t=>`Макс. энергия: ${100+t*20}`,maxLevel:10,costForLevel:t=>15+t*10},{id:"regen",name:"Регенерация",icon:"🔋",description:t=>`Восст. за тик: ${(.4+t*.15).toFixed(2)}`,maxLevel:10,costForLevel:t=>20+t*12},{id:"scoreMult",name:"Множитель",icon:"💎",description:t=>`Очки: ×${(1+t*.25).toFixed(2)}`,maxLevel:8,costForLevel:t=>50+t*30},{id:"shield",name:"Щит",icon:"🛡️",description:t=>t===0?"Спасает от одной смерти за игру":`Спасает от ${t} смерт. за игру`,maxLevel:3,costForLevel:t=>100+t*80}],ow=new Map(Lm.map(t=>[t.id,t])),Ho={length:0,boostEnergy:0,regen:0,scoreMult:0,shield:0};function aw(){try{const t=localStorage.getItem(Cm);return t?Math.max(0,parseInt(t,10)||0):0}catch{return 0}}function Pl(t){try{localStorage.setItem(Cm,String(t))}catch{}}function lw(){try{const t=localStorage.getItem(Pm);if(!t)return{...Ho};const e=JSON.parse(t);return{...Ho,...e}}catch{return{...Ho}}}function jd(t){try{localStorage.setItem(Pm,JSON.stringify(t))}catch{}}let Ll=null,Dl=null;function cw(){return Ll||(Ll=Jt(aw())),Ll}function uw(){return Dl||(Dl=Jt(lw())),Dl}function fw(){const t=cw(),e=uw(),n=o=>e.value[o]??0;return{coins:Ct(t),levels:Ct(e),getLevel:n,buyUpgrade:o=>{const a=ow.get(o);if(!a)return!1;const l=n(o);if(l>=a.maxLevel)return!1;const u=a.costForLevel(l+1);return t.value<u?!1:(t.value-=u,e.value={...e.value,[o]:l+1},Pl(t.value),jd(e.value),!0)},addCoins:o=>{o<=0||(t.value+=o,Pl(t.value))},resetAll:()=>{t.value=0,e.value={...Ho},Pl(0),jd(e.value)}}}const dw={class:"stats"},hw={class:"stats__row"},pw={class:"stats__item"},mw={class:"stats__value stats__value--score"},gw={class:"stats__item"},_w={class:"stats__value stats__value--highscore"},vw={class:"stats__item"},xw={class:"stats__value stats__value--speed"},yw={class:"stats__item"},Sw={class:"stats__boost-bar"},Mw={class:"stats__item"},Ew={class:"stats__value stats__value--coins"},bw={key:0,class:"stats__item"},Tw={class:"stats__value stats__value--shield"},Aw={key:1,class:"stats__item"},ww={class:"stats__value stats__value--enemy"},Rw=qi({__name:"GameStats",props:{score:{},highScore:{},speed:{},boostEnergy:{},isBoosting:{type:Boolean},coins:{},shields:{},enemyScore:{},enemyActive:{type:Boolean}},setup(t){return(e,n)=>(xt(),Yt("div",dw,[ze("div",hw,[ze("div",pw,[n[0]||(n[0]=ze("span",{class:"stats__label"},"Счёт",-1)),ze("span",mw,kt(t.score),1)]),ze("div",gw,[n[1]||(n[1]=ze("span",{class:"stats__label"},"Рекорд",-1)),ze("span",_w,kt(t.highScore),1)]),ze("div",vw,[n[2]||(n[2]=ze("span",{class:"stats__label"},"Скорость",-1)),ze("span",xw,kt(t.speed),1)]),ze("div",yw,[n[3]||(n[3]=ze("span",{class:"stats__label"},"⚡ Буст",-1)),ze("div",Sw,[ze("div",{class:Si(["stats__boost-fill",{"stats__boost-fill--active":t.isBoosting}]),style:sr({width:t.boostEnergy+"%"})},null,6)])]),ze("div",Mw,[n[4]||(n[4]=ze("span",{class:"stats__label"},"🪙 Монеты",-1)),ze("span",Ew,kt(t.coins),1)]),t.shields>0?(xt(),Yt("div",bw,[n[5]||(n[5]=ze("span",{class:"stats__label"},"🛡️ Щиты",-1)),ze("span",Tw,kt(t.shields),1)])):gs("",!0),t.enemyActive?(xt(),Yt("div",Aw,[n[6]||(n[6]=ze("span",{class:"stats__label"},"🤖 Враг",-1)),ze("span",ww,kt(t.enemyScore),1)])):gs("",!0)]),t_(e.$slots,"default",{},void 0)]))}}),Cw=Object.assign(Sa(Rw,[["__scopeId","data-v-ed6d050f"]]),{__name:"GameStats"}),Pw={class:"upgrade-panel"},Lw={class:"upgrade-panel__header"},Dw={class:"upgrade-panel__coins"},Iw={class:"upgrade-panel__list"},Uw={class:"upgrade-card__icon"},Nw={class:"upgrade-card__body"},Fw={class:"upgrade-card__header"},Ow={class:"upgrade-card__name"},Bw={class:"upgrade-card__level"},kw={class:"upgrade-card__desc"},Hw={class:"upgrade-card__progress"},Gw=["disabled","onClick"],zw=qi({__name:"UpgradePanel",props:{coins:{},levels:{}},emits:["buy","close"],setup(t,{emit:e}){const n=t,i=e,s=Lm,r=c=>n.levels[c]??0,o=c=>{const d=s.find(f=>f.id===c);return d?d.costForLevel(r(c)+1):0},a=c=>{const d=s.find(f=>f.id===c);return d?r(c)>=d.maxLevel:!0},l=c=>a(c)?!1:n.coins>=o(c),u=c=>{l(c)&&i("buy",c)};return(c,d)=>(xt(),Yt("div",{class:"upgrade-overlay",onClick:d[1]||(d[1]=g0(f=>c.$emit("close"),["self"]))},[ze("div",Pw,[ze("div",Lw,[d[2]||(d[2]=ze("h2",{class:"upgrade-panel__title"},"🏪 Улучшения",-1)),ze("div",Dw,"🪙 "+kt(t.coins),1),ze("button",{class:"upgrade-panel__close",onClick:d[0]||(d[0]=f=>c.$emit("close")),"aria-label":"Закрыть"},"✕")]),ze("div",Iw,[(xt(!0),Yt(jt,null,e_(Mt(s),f=>(xt(),Yt("div",{key:f.id,class:Si(["upgrade-card",{"upgrade-card--maxed":a(f.id)}])},[ze("div",Uw,kt(f.icon),1),ze("div",Nw,[ze("div",Fw,[ze("span",Ow,kt(f.name),1),ze("span",Bw," Ур. "+kt(r(f.id))+" / "+kt(f.maxLevel),1)]),ze("div",kw,kt(f.description(r(f.id))),1),ze("div",Hw,[ze("div",{class:"upgrade-card__progress-fill",style:sr({width:r(f.id)/f.maxLevel*100+"%"})},null,4)])]),ze("button",{class:"upgrade-card__buy",disabled:!l(f.id),onClick:h=>u(f.id)},[a(f.id)?(xt(),Yt(jt,{key:0},[Br("MAX")],64)):(xt(),Yt(jt,{key:1},[Br("🪙 "+kt(o(f.id)),1)],64))],8,Gw)],2))),128))])])]))}}),Vw=Object.assign(Sa(zw,[["__scopeId","data-v-7ca2a3f8"]]),{__name:"UpgradePanel"}),Ww={key:0,class:"game-wrapper",role:"application","aria-label":"Игра Змейка",tabindex:"0"},Xw={class:"game-container"},$w=["title"],qw=["title"],jw=["title"],Yw=qi({__name:"GameCanvas",setup(t){const e=Dt(!1),n=py,i={cols:n.gridCols,rows:n.gridRows},s=Dt(null),r=fw(),o=wy(i),a=Ry(n.initialSpeed,n.speedIncrement,n.scorePerSpeedUp,()=>1+r.getLevel("scoreMult")*.25),l=QA(i),u=ew(i),c=tw(i),d=rw(()=>100+r.getLevel("boostEnergy")*20,()=>.4+r.getLevel("regen")*.15),f=Dt(fn.IDLE),h=Dt(!1);let p=0;const g=ZA(s,i),_=un(()=>({isometric:"Изометрия",top:"Сверху",side:"Сбоку",follow:"Следование"})[g.currentView.value]??g.currentView.value),m=()=>{g.cycleCameraView()},M=un(()=>u.active.value),x=un(()=>c.active.value),S=un(()=>c.score.value),A=()=>{u.toggleRandom([...o.snake.value],{...o.food.value}),g.render(f.value,[...o.snake.value],{...o.food.value},[...l.bonusFoods.value],[...u.obstacles.value],[...o.prevSnake.value],0,[...c.enemySnake.value])},T=()=>{c.toggle(),g.render(f.value,[...o.snake.value],{...o.food.value},[...l.bonusFoods.value],[...u.obstacles.value],[...o.prevSnake.value],0,[...c.enemySnake.value])};let P=0;const y=JA(()=>{if(f.value!==fn.PLAYING)return;P++,d.updatePerTick(),o.move()&&(a.addScore(1),o.spawnFood());const $e=o.snake.value[0];if($e){const te=l.checkBonusEat($e.x,$e.y);te>0&&(a.addScore(te,!1),d.refill())}l.trySpawnBonus([...o.snake.value]),l.removeExpiredBonuses();const Qe=!d.isBoosting.value||P%2===0;c.active.value&&Qe&&(c.move([...o.snake.value],{...o.food.value},[...u.obstacles.value])&&o.spawnFood(),c.checkCollision([...o.snake.value],[...u.obstacles.value])&&c.toggle());let We=!1;if(c.active.value){const te=o.snake.value[0];if(te){for(const xe of c.enemySnake.value)if(xe.x===te.x&&xe.y===te.y){We=!0;break}}}if(We||o.checkCollision([...u.obstacles.value]))if(p>0){p--;const te=o.snake.value[0];if(te&&o.snake.value.length>1){const xe=Ir[o.direction.value],ge=(te.x-xe.x+i.cols)%i.cols,Oe=(te.y-xe.y+i.rows)%i.rows;o.snake.value[0]={...te,x:ge,y:Oe}}}else f.value=fn.GAME_OVER,a.saveHighScore(),h.value=a.score.value>=a.highScore.value,r.addCoins(Math.floor(a.score.value/5)),d.cancelBoost(),y.stop(),g.stopRender()},()=>{const be=a.speed.value;return d.isBoosting.value?be*sw:be},f),w=()=>{f.value===fn.PLAYING?(f.value=fn.PAUSED,d.cancelBoost(),y.stop()):f.value===fn.PAUSED&&(f.value=fn.PLAYING,y.resume())},D=()=>{const be=3+r.getLevel("length");p=r.getLevel("shield"),o.reset(be),a.reset(),l.reset(),u.reset(),d.reset(),c.active.value&&c.reset(),h.value=!1,P=0,f.value=fn.PLAYING,y.start(),g.startRender(()=>f.value,()=>[...o.snake.value],()=>({...o.food.value}),()=>[...l.bonusFoods.value],()=>[...u.obstacles.value],()=>[...o.prevSnake.value],()=>y.getInterpolation(),()=>[...c.enemySnake.value])},L=()=>{f.value=fn.PLAYING,y.resume()},F=()=>{D()};Ly(o.setDirection,w,D,()=>g.currentView.value==="follow",()=>o.direction.value,d.startBoost,d.endBoost);const z=un(()=>a.score.value),X=un(()=>a.highScore.value),O=un(()=>a.speed.value),N=un(()=>d.energy.value),k=un(()=>d.isBoosting.value),V=un(()=>r.coins.value),oe=un(()=>p),ve=Dt(!1),we=()=>{ve.value=!ve.value,ve.value&&f.value===fn.PLAYING&&w()};return Ks(async()=>{e.value=!0,await su(),g.initCanvas(),o.reset(3+r.getLevel("length")),g.render(fn.IDLE,[...o.snake.value],{...o.food.value},[],[],[],0,[])}),or(()=>{y.stop(),g.stopRender()}),(be,$e)=>{const Qe=Ay;return e.value?(xt(),Yt("div",Ww,[ze("div",Xw,[ze("canvas",{ref_key:"canvasRef",ref:s,class:"game-canvas"},null,512),At(Qe,{state:f.value,score:z.value,"high-score":X.value,"is-new-record":h.value,onStart:D,onResume:L,onRestart:F},null,8,["state","score","high-score","is-new-record"]),ve.value?(xt(),Kn(Vw,{key:0,coins:V.value,levels:Mt(r).levels.value,onBuy:Mt(r).buyUpgrade,onClose:we},null,8,["coins","levels","onBuy"])):gs("",!0)]),At(Cw,{score:z.value,"high-score":X.value,speed:O.value,"boost-energy":N.value,"is-boosting":k.value,coins:V.value,shields:oe.value,"enemy-score":S.value,"enemy-active":x.value},{default:ou(()=>[ze("button",{class:"upgrades-toggle-btn",title:"Улучшения змейки",onClick:we}," 🏪 Улучшения "),ze("button",{class:"camera-toggle-btn",title:`Вид камеры: ${_.value}`,onClick:m}," 📷 "+kt(_.value),9,$w),ze("button",{class:Si(["obstacle-toggle-btn",{"obstacle-toggle-btn--active":M.value}]),title:M.value?"Убрать препятствия":"Добавить случайные препятствия",onClick:A}," 🧱 "+kt(M.value?"Убрать":"Препятствия"),11,qw),ze("button",{class:Si(["enemy-toggle-btn",{"enemy-toggle-btn--active":x.value}]),title:x.value?"Убрать противника":"Добавить AI-противника",onClick:T}," 🤖 "+kt(x.value?"Убрать":"Противник"),11,jw)]),_:1},8,["score","high-score","speed","boost-energy","is-boosting","coins","shields","enemy-score","enemy-active"])])):gs("",!0)}}}),Kw=Object.assign(Sa(Yw,[["__scopeId","data-v-7b69a747"]]),{__name:"GameCanvas"}),Zw=cy(hy),Jw=qi({__name:"app",setup(t){return(e,n)=>{const i=Zw,s=Kw;return xt(),Yt("div",null,[At(i),At(s)])}}}),Qw="modulepreload",eR=function(t,e){return new URL(t,e).href},Yd={},Kd=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let u=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=u(n.map(c=>{if(c=eR(c,i),c in Yd)return;Yd[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===c&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Qw,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((p,g)=>{h.addEventListener("load",p),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},tR={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error,i=Number(n.statusCode||500),s=i===404,r=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=s?rf(()=>Kd(()=>import("./B7YkLShC.js"),__vite__mapDeps([0,1]),import.meta.url)):rf(()=>Kd(()=>import("./CpT7LBSK.js"),__vite__mapDeps([2,3]),import.meta.url));return(d,f)=>(xt(),Kn(Mt(c),Ym(cp({status:Mt(i),statusText:Mt(r),statusCode:Mt(i),statusMessage:Mt(r),description:Mt(o),stack:Mt(a)})),null,16))}},nR={key:0},Zd={__name:"nuxt-root",setup(t){const e=()=>null,n=qt(),i=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",i),d=_s().beforeEach(()=>{c(),d()})}const s=!1;Rh(Up,xu()),n.hooks.callHookWith(c=>c.map(d=>d()),"vue:setup",[]);const r=yu(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;function l(c,d,f){const h=n.vueApp.config.errorHandler;if(h&&!h.__nuxt_default)try{h(c,d,f)}catch(p){console.error("[nuxt] Error in `app.config.errorHandler`",p)}}Uh((c,d,f)=>{if(n.hooks.callHook("vue:error",c,d,f)?.catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(qv(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>Xv(c)),l(c,d,f),!1});const u=!1;return(c,d)=>(xt(),Kn(w_,{onResolve:Mt(i)},{default:ou(()=>[Mt(o)?(xt(),Yt("div",nR)):Mt(r)?(xt(),Kn(Mt(tR),{key:1,error:Mt(r)},null,8,["error"])):Mt(u)?(xt(),Kn(Mt(e),{key:2,context:Mt(u)},null,8,["context"])):Mt(s)?(xt(),Kn(Qg(Mt(s)),{key:3})):(xt(),Kn(Mt(Jw),{key:4}))]),_:1},8,["onResolve"]))}};let Jd;{let t;Jd=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),i=n?y0(Zd):x0(Zd),s=Pv({vueApp:i});async function r(o){await s.callHook("app:error",o),s.payload.error||=Su(o)}r.__nuxt_default=!0,i.config.errorHandler=r,s.hook("app:suspense:resolve",()=>{i.config.errorHandler===r&&(i.config.errorHandler=void 0)}),!n&&Df.id&&s.hook("app:suspense:resolve",()=>{document.getElementById(Df.id)?.remove()});try{await Iv(s,ny)}catch(o){r(o)}try{await s.hooks.callHook("app:created",i),await s.hooks.callHook("app:beforeMount",i),i.mount(wv),await s.hooks.callHook("app:mounted",i),await su()}catch(o){r(o)}return i},t=Jd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Yt as A,ze as B,kt as C,At as D,ou as E,Br as F,Sa as _,qt as a,Tu as b,Ih as c,qi as d,oR as e,iR as f,Wv as g,Vi as h,Dt as i,Vv as j,Mt as k,un as l,xa as m,zv as n,Ks as o,mu as p,ar as q,zf as r,Jt as s,Hr as t,_s as u,yp as v,jl as w,sR as x,rR as y,xt as z};
