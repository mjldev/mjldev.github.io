(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(5490)}])},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=(d=c(7294),d&&d.__esModule?d:{default:d}),g=c(6273),h=c(2725),i=c(3462),j=c(1018),k=c(7190),l=c(1210),m=c(8684),n=void 0!==f.default.useTransition,o={};function p(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;o[b+"%"+c+(e?"%"+e:"")]=!0}}var q=f.default.forwardRef(function(a,b){var c,d,q=a.href,r=a.as,s=a.children,t=a.prefetch,u=a.passHref,v=a.replace,w=a.soft,x=a.shallow,y=a.scroll,z=a.locale,A=a.onClick,B=a.onMouseEnter,C=a.legacyBehavior,D=void 0===C?!0!==Boolean(!1):C,E=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=s,D&&("string"==typeof c||"number"==typeof c)&&(c=f.default.createElement("a",null,c));var F=!1!==t,G=e(n?f.default.useTransition():[],2),H=G[1],I=f.default.useContext(i.RouterContext),J=f.default.useContext(j.AppRouterContext);J&&(I=J);var K=f.default.useMemo(function(){var a=e(g.resolveHref(I,q,!0),2),b=a[0],c=a[1];return{href:b,as:r?g.resolveHref(I,r):c||b}},[I,q,r]),L=K.href,M=K.as,N=f.default.useRef(L),O=f.default.useRef(M);D&&(d=f.default.Children.only(c));var P=D?d&&"object"==typeof d&&d.ref:b,Q=e(k.useIntersection({rootMargin:"200px"}),3),R=Q[0],S=Q[1],T=Q[2],U=f.default.useCallback(function(a){(O.current!==M||N.current!==L)&&(T(),O.current=M,N.current=L),R(a),P&&("function"==typeof P?P(a):"object"==typeof P&&(P.current=a))},[M,P,L,T,R]);f.default.useEffect(function(){var a=S&&F&&g.isLocalURL(L),b=void 0!==z?z:I&&I.locale,c=o[L+"%"+M+(b?"%"+b:"")];a&&!c&&p(I,L,M,{locale:b})},[M,L,S,z,F,I]);var V={ref:U,onClick:function(a){D||"function"!=typeof A||A(a),D&&d.props&&"function"==typeof d.props.onClick&&d.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,h,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&g.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:h,locale:j,scroll:i})};k?k(n):n()}}(a,I,L,M,v,w,x,y,z,J?H:void 0)},onMouseEnter:function(a){D||"function"!=typeof B||B(a),D&&d.props&&"function"==typeof d.props.onMouseEnter&&d.props.onMouseEnter(a),g.isLocalURL(L)&&p(I,L,M,{priority:!0})}};if(!D||u||"a"===d.type&&!("href"in d.props)){var W=void 0!==z?z:I&&I.locale,X=I&&I.isLocaleDomain&&l.getDomainLocale(M,W,I.locales,I.domainLocales);V.href=X||m.addBasePath(h.addLocale(M,W,I&&I.defaultLocale))}return D?f.default.cloneElement(d,V):f.default.createElement("a",Object.assign({},E,V),c)});b.default=q,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.FullAppTreeContext=b.AppTreeContext=b.AppRouterContext=void 0;var d,e=(d=c(7294),d&&d.__esModule?d:{default:d}),f=e.default.createContext(null);b.AppRouterContext=f;var g=e.default.createContext(null);b.AppTreeContext=g;var h=e.default.createContext(null);b.FullAppTreeContext=h},5490:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return w}});var e=c(5893),f=c(7294),g=function(){return(0,e.jsx)("footer",{className:"overflow-hidden",children:(0,e.jsx)("section",{className:"container relative",children:(0,e.jsxs)("div",{className:"flex flex-col justify-center text-center gap-y-4 py-10",children:[(0,e.jsx)("p",{className:"font-oswald font-bold tracking-tighter text-4xl desktop:text-5xl",children:"MJL KITCHEN"}),(0,e.jsx)("p",{children:"\xa92022 MJL KITCHEN"})]})})})},h=c(1664),i=c.n(h),j=function(a){return(0,e.jsx)("li",{onClick:a.click,children:(0,e.jsx)(i(),{href:a.url,children:(0,e.jsx)("a",{className:"block font-oswald font-semibold hover:text-personal-primary",children:a.children})})})},k=j,l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=f.createContext&&f.createContext(l),n=function(){return(n=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},o=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function p(a){return a&&a.map(function(a,b){return f.createElement(a.tag,n({key:b},a.attr),p(a.child))})}function q(a){return function(b){return f.createElement(r,n({attr:n({},a.attr)},b),p(a.child))}}function r(a){var b=function(b){var c,d=a.attr,e=a.size,g=a.title,h=o(a,["attr","size","title"]),i=e||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),f.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,d,h,{className:c,style:n(n({color:a.color||b.color},b.style),a.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),g&&f.createElement("title",null,g),a.children)};return void 0!==m?f.createElement(m.Consumer,null,function(a){return b(a)}):b(l)}function s(a){return q({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(a)}function t(a){return q({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(a)}function u(a){return q({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"}}]})(a)}var v=function(){var a=(0,f.useState)(!1),b=a[0],c=a[1],d=(0,f.useState)(!1),g=d[0],h=d[1],j=function(){window.innerWidth,c(!1)};(0,f.useEffect)(function(){return window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}},[b]);var l=(0,f.useState)(!0),m=l[0],n=l[1],o=(0,f.useState)(0),p=o[0],q=o[1],r=function(){window.scrollY>0?n(!1):n(!0),c(!1),q(window.scrollY)};return(0,f.useEffect)(function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}},[p]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("nav",{className:"top-0 sticky z-50 text-personal-textPrimary bg-white tablet:bg-transparent bg-gradient-to-r from-white to-white bg-no-repeat transition-all duration-200 ease-out ".concat(m?"bg-[length:100%_0%] tablet:text-white":"bg-[length:100%_100%] text-personal-textPrimary"),children:[(0,e.jsxs)("div",{className:"container flex items-center bg-inherit py-4 px-4 laptop:px-12 relative",children:[(0,e.jsx)("div",{className:"flex flex-1 justify-start",children:(0,e.jsx)(i(),{href:"/",children:(0,e.jsx)("a",{className:"font-oswald text-3xl laptop:text-4xl whitespace-nowrap",children:"MJL KITCHEN"})})}),(0,e.jsxs)("ul",{className:"flex justify-center flex-col tablet:flex-row tablet:top-0 left-0 flex-2 desktop:flex-1 items-center gap-4 laptop:gap-8 bg-inherit w-full py-8 tablet:py-0 absolute tablet:relative z-[-1] tablet:z-auto ".concat(b?"top-[68px] transition-all duration-300 ease-in border-y":"-top-80"),children:[(0,e.jsx)(k,{click:function(){return c(!1)},url:"#",children:"OUR MENU"}),(0,e.jsx)(k,{click:function(){return c(!1)},url:"#",children:"BLOG"}),(0,e.jsx)(k,{click:function(){return c(!1)},url:"#",children:"ABOUT US"}),(0,e.jsx)(k,{click:function(){return c(!1)},url:"#",children:"CONTACT US"})]}),(0,e.jsxs)("div",{className:"flex flex-1 gap-4 justify-end",children:[(0,e.jsx)("button",{onClick:function(){return c(!b)},className:"h-6 w-6 tablet:hidden ".concat(b?"transition-all duration-300 ease-in scale-125":"scale-100"),children:b?(0,e.jsx)(s,{className:"h-full w-full"}):(0,e.jsx)(t,{className:"h-full w-full"})}),(0,e.jsx)("button",{onClick:function(){h(!0),c(!1),document.body.style.overflow="hidden"},className:"h-6 w-6",children:(0,e.jsx)(u,{className:"h-full w-full"})})]})]}),g&&(0,e.jsxs)("div",{className:"flex justify-end absolute top-0 right-0 w-screen h-screen border",children:[(0,e.jsx)("div",{className:"bg-black w-full opacity-80"}),(0,e.jsxs)("div",{className:"flex flex-col tablet:flex-[1_1_30%] min-w-[100%] tablet:min-w-[35ch] h-screen bg-white text-black",children:[(0,e.jsxs)("div",{className:"flex justify-between border-b py-5 px-4",children:[(0,e.jsx)("span",{className:"font-bold text-xl",children:"YOUR CART"}),(0,e.jsx)("button",{onClick:function(){h(!1),document.body.style.overflow="auto"},className:"h-6 w-6",children:(0,e.jsx)(s,{className:"h-full w-full"})})]}),(0,e.jsx)("div",{className:"flex justify-center",children:(0,e.jsx)("p",{children:"Your cart is empty."})})]})]})]})})};c(906);var w=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v,{}),(0,e.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},c)),(0,e.jsx)(g,{})]})}},906:function(){},1664:function(a,b,c){a.exports=c(8418)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(3837),b(387)}),_N_E=a.O()}])