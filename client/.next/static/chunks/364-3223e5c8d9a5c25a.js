(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{6531:function(e,t,r){"use strict";var n=r(6314);t.Z=void 0;var o=n(r(984)),u=r(7437),a=(0,o.default)((0,u.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(2557)},3283:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(791),o=r(3428),u=r(2265),a=r(7042),i=r(5600),l=r(5843),c=r(7927),s=r(8173),f=r(7437),d=(0,s.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=r(6520),h=r(5702);function g(e){return(0,h.Z)("MuiAvatar",e)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,i.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},g,t)},b=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),v=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),P=(0,l.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),_=u.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:i,children:l,className:s,component:d="div",imgProps:p,sizes:h,src:g,srcSet:_,variant:j="circular"}=r,R=(0,n.Z)(r,m),O=null,x=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){let[o,a]=u.useState(!1);return u.useEffect(()=>{if(!r&&!n)return;a(!1);let o=!0,u=new Image;return u.onload=()=>{o&&a("loaded")},u.onerror=()=>{o&&a("error")},u.crossOrigin=e,u.referrerPolicy=t,u.src=r,n&&(u.srcset=n),()=>{o=!1}},[e,t,r,n]),o}((0,o.Z)({},p,{src:g,srcSet:_})),M=g||_,E=M&&"error"!==x,C=(0,o.Z)({},r,{colorDefault:!E,component:d,variant:j}),k=y(C);return O=E?(0,f.jsx)(v,(0,o.Z)({alt:i,src:g,srcSet:_,sizes:h,ownerState:C,className:k.img},p)):null!=l?l:M&&i?i[0]:(0,f.jsx)(P,{ownerState:C,className:k.fallback}),(0,f.jsx)(b,(0,o.Z)({as:d,ownerState:C,className:(0,a.Z)(k.root,s),ref:t},R,{children:O}))});var j=_},2557:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return a.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return c.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return p},unstable_ClassNameGenerator:function(){return _},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return g},unsupportedProp:function(){return m},useControlled:function(){return y.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return P.Z}});var n=r(5097),o=r(8702),u=r(2940).Z,a=r(8173),i=r(494),l=function(e,t){return()=>null},c=r(673),s=r(3931),f=r(6649);r(3428);var d=function(e,t){return()=>null},p=r(3406).Z,h=r(8519),g=r(3449).Z,m=function(e,t,r,n,o){return null},y=r(8496),b=r(96),v=r(7663),P=r(3308);let _={configure:e=>{n.Z.configure(e)}}},7607:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(6070);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7561:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(6070),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6685:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let n=r(1024),o=n._(r(2265)),u=r(2156),a=r(3954),i=r(6162),l=r(5090),c=r(7607),s=r(2706),f=r(6656),d=r(5033),p=r(7561),h=r(6711),g=r(5685),m=new Set;function y(e,t,r,n,o,u){if(!u&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(m.has(u))return;m.add(u)}let i=u?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(i).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:m,children:v,prefetch:P=null,passHref:_,replace:j,shallow:R,scroll:O,locale:x,onClick:M,onMouseEnter:E,onTouchStart:C,legacyBehavior:k=!1,...w}=e;r=v,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let S=o.default.useContext(s.RouterContext),I=o.default.useContext(f.AppRouterContext),Z=null!=S?S:I,A=!S,N=!1!==P,T=null===P?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:L,as:U}=o.default.useMemo(()=>{if(!S){let e=b(i);return{href:e,as:m?b(m):e}}let[e,t]=(0,u.resolveHref)(S,i,!0);return{href:e,as:m?(0,u.resolveHref)(S,m):t||e}},[S,i,m]),z=o.default.useRef(L),D=o.default.useRef(U);k&&(n=o.default.Children.only(r));let F=k?n&&"object"==typeof n&&n.ref:t,[W,K,q]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(D.current!==U||z.current!==L)&&(q(),D.current=U,z.current=L),W(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[U,F,L,q,W]);o.default.useEffect(()=>{Z&&K&&N&&y(Z,L,U,{locale:x},{kind:T},A)},[U,L,K,x,N,null==S?void 0:S.locale,Z,A,T]);let $={ref:V,onClick(e){k||"function"!=typeof M||M(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),Z&&!e.defaultPrevented&&function(e,t,r,n,u,i,l,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==l||l;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:i,locale:c,scroll:e}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};s?o.default.startTransition(h):h()}(e,Z,L,U,j,R,O,x,A,N)},onMouseEnter(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),Z&&(N||!A)&&y(Z,L,U,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:T},A)},onTouchStart(e){k||"function"!=typeof C||C(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),Z&&(N||!A)&&y(Z,L,U,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:T},A)}};if((0,l.isAbsoluteUrl)(U))$.href=U;else if(!k||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);$.href=t||(0,h.addBasePath)((0,c.addLocale)(U,e,null==S?void 0:S.defaultLocale))}return k?o.default.cloneElement(n,$):o.default.createElement("a",{...w,...$},r)}),P=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5033:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(2265),o=r(8043),u="function"==typeof IntersectionObserver,a=new Map,i=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!u,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},i.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3805:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},2706:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return u}});let n=r(1024),o=n._(r(2265)),u=o.default.createContext(null)},6162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return i},formatWithValidation:function(){return l}});let n=r(8533),o=n._(r(5769)),u=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let s=e.search||l&&"?"+l||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||u.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),s&&"?"!==s[0]&&(s="?"+s),""+n+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+i}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},9232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});let n=r(3658),o=r(5710);function u(e,t,r){let u="",a=(0,o.getRouteRegex)(e),i=a.groups,l=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;u=e;let c=Object.keys(i);return c.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=i[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(u=u.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(u=""),{params:c,result:u}}},8354:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},3954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(5090),o=r(3719);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},3259:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},5769:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return u}})},2156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(5769),o=r(6162),u=r(3259),a=r(5090),i=r(6070),l=r(3954),c=r(8354),s=r(9232);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,i.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:i}=(0,s.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,u.omit)(r,i)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[d]:d}}},3658:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(5090);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let u=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>u(e)):t.repeat?[u(n)]:u(n))}),a}}},5710:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(4507),o=r(3805),u=r(7369);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function i(e){let t=(0,u.removeTrailingSlash)(e).slice(1).split("/"),r={},i=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&u){let{key:e,optional:n,repeat:l}=a(u[1]);return r[e]={pos:i++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!u)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=a(u[1]);return r[e]={pos:i++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=i(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:u,optional:i,repeat:l}=a(r),c=u.replace(/\W/g,"");o&&(c=""+o+c);let s=!1;return(0===c.length||c.length>30)&&(s=!0),isNaN(parseInt(c.slice(0,1)))||(s=!0),s&&(c=t()),o?n[c]=""+o+u:n[c]=""+u,l?i?"(?:/(?<"+c+">.+?))?":"/(?<"+c+">.+?)":"/(?<"+c+">[^/]+?)"}function s(e,t){let r;let a=(0,u.removeTrailingSlash)(e).slice(1).split("/"),i=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:a.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);return r&&u?c({getSafeRouteKey:i,segment:u[1],routeKeys:l,keyPrefix:t?"nxtI":void 0}):u?c({getSafeRouteKey:i,segment:u[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function f(e,t){let r=s(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=i(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=s(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},5090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return i},getDisplayName:function(){return l},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return s},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return g},PageNotFoundError:function(){return m},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function s(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n){let t='"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},1396:function(e,t,r){e.exports=r(6685)},6314:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);