function k(){}const Q=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function x(t){t.forEach(U)}function L(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Rt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function ft(t){return Object.keys(t).length===0}function Ot(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,l){if(r){const s=V(e,n,i,l);t.p(s,r)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const W=typeof window!="undefined";let X=W?()=>window.performance.now():()=>Date.now(),F=W?t=>requestAnimationFrame(t):k;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(Y)}function Z(t){let e;return g.size===0&&F(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let R=!1;function _t(){R=!0}function dt(){R=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:ht(1,r,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,r=Math.max(u,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(s[c],f)}}function pt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=et("style");return gt(tt(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function xt(t,e){if(R){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){R&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Ft(){return H(" ")}function Ht(){return H("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Jt(t){return function(e){e.target===this&&t.call(this,e)}}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){wt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function vt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Qt(t,e,n){return vt(t,e,n,et)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Ut(t){return Et(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const D=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:yt(e),rules:{}};return D.set(t,n),n}function rt(t,e,n,i,r,l,s,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const N=e+(n-e)*l(m);a+=m*100+`%{${s(N,1-N)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,u=`__svelte_${kt(f)}_${o}`,_=tt(t),{stylesheet:d,rules:h}=D.get(_)||Nt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${r}ms 1 both`,M+=1,u}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||jt())}function jt(){F(()=>{M||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let v;function w(t){v=t}function O(){if(!v)throw new Error("Function called outside component initialization");return v}function Xt(t){O().$$.on_mount.push(t)}function Yt(t){O().$$.after_update.push(t)}function Zt(){const t=O();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=it(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function te(t,e){return O().$$.context.set(t,e),e}const b=[],J=[],C=[],K=[],ct=Promise.resolve();let B=!1;function st(){B||(B=!0,ct.then(lt))}function ee(){return st(),ct}function E(t){C.push(t)}const T=new Set;let A=0;function lt(){const t=v;do{for(;A<b.length;){const e=b[A];A++,w(e),At(e.$$)}for(w(null),b.length=0,A=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];T.has(n)||(T.add(n),n())}C.length=0}while(b.length);for(;K.length;)K.pop()();B=!1,T.clear(),w(t)}function At(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let $;function ot(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function P(t,e,n){t.dispatchEvent(it(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function ne(){y={r:0,c:[],p:y}}function ie(){y.r||x(y.c),y=y.p}function Ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const at={duration:0};function ce(t,e,n){let i=e(t,n),r=!1,l,s,o=0;function c(){l&&z(t,l)}function a(){const{delay:u=0,duration:_=300,easing:d=Q,tick:h=k,css:p}=i||at;p&&(l=rt(t,0,1,_,u,d,p,o++)),h(0,1);const m=X()+u,N=m+_;s&&s.abort(),r=!0,E(()=>P(t,!0,"start")),s=Z(q=>{if(r){if(q>=N)return h(1,0),P(t,!0,"end"),c(),r=!1;if(q>=m){const I=d((q-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),L(i)?(i=i(),ot().then(a)):a())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function se(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function o(){const{delay:c=0,duration:a=300,easing:f=Q,tick:u=k,css:_}=i||at;_&&(l=rt(t,1,0,a,c,f,_));const d=X()+c,h=d+a;E(()=>P(t,!1,"start")),Z(p=>{if(r){if(p>=h)return u(0,1),P(t,!1,"end"),--s.r||x(s.c),!1;if(p>=d){const m=f((p-d)/a);u(1-m,m)}}return r})}return L(i)?ot().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&z(t,l),r=!1)}}}function le(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function oe(t){return typeof t=="object"&&t!==null?t:{}}function ae(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function St(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||E(()=>{const c=l.map(U).filter(L);s?s.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(E)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(b.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,l,s,o=[-1]){const c=v;w(t);const a=t.$$={fragment:null,ctx:null,props:l,update:k,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&Mt(t,u)),_}):[],a.update(),f=!0,x(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){_t();const u=bt(e.target);a.fragment&&a.fragment.l(u),u.forEach($t)}else a.fragment&&a.fragment.c();e.intro&&Ct(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),dt(),lt()}w(c)}class _e{$destroy(){Dt(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as A,oe as B,Dt as C,ut as D,ee as E,Ot as F,Tt as G,zt as H,qt as I,xt as J,Q as K,Rt as L,Zt as M,se as N,E as O,ce as P,It as Q,Jt as R,_e as S,Gt as T,x as U,Lt as V,bt as a,Kt as b,Qt as c,$t as d,et as e,Wt as f,Bt as g,Et as h,fe as i,Vt as j,Ft as k,Ht as l,Ut as m,k as n,ne as o,re as p,ie as q,Ct as r,Pt as s,H as t,te as u,Yt as v,Xt as w,ae as x,ue as y,St as z};