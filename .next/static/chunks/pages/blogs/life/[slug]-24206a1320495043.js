(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{8959:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/life/[slug]",function(){return t(6655)}])},8374:function(e,n,t){"use strict";var r=t(5893),o=t(949),c=t(7375),i=t(8527),s=t(4651),l=t(4480),u=t(5113),a=t(1664),d=t.n(a),f=t(9876);n.Z=function(){var e=(0,o.If)(),n=e.colorMode,t=e.toggleColorMode,a=(0,c.qY)(),x=a.isOpen,h=a.onOpen,p=a.onClose,j=(0,o.ff)("green.700","green.400");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.xu,{children:(0,r.jsx)(i.xu,{bg:(0,o.ff)("gray.100","gray.900"),children:(0,r.jsxs)(i.rj,{templateColumns:"repeat(4, 1fr)",gap:4,children:[(0,r.jsx)(i.P4,{colStart:2,children:(0,r.jsx)(i.xu,{padding:"15px",children:(0,r.jsx)(d(),{href:"/aboutme",children:(0,r.jsx)(i.xv,{fontWeight:"bold",_hover:{cursor:"pointer",color:j},children:"About Me"})})})}),(0,r.jsx)(i.P4,{colStart:3,children:(0,r.jsx)(i.xu,{children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)(s.Ee,{alt:"logo",src:"../../harden.jpg",borderRadius:"full",boxSize:"65px",objectFit:"cover"})})})})}),(0,r.jsx)(i.P4,{colStart:4,children:(0,r.jsx)(i.xu,{padding:"15px",children:(0,r.jsxs)(l.v2,{isOpen:x,children:[(0,r.jsxs)(l.j2,{mx:1,py:[1,2,2],px:4,borderRadius:5,"aria-label":"Courses",fontWeight:"bold",onMouseEnter:h,onMouseLeave:p,as:"a",href:"/blogs",children:[(0,r.jsx)("b",{children:"Blogs"}),x?(0,r.jsx)(f.g8,{}):(0,r.jsx)(f.v4,{})]}),(0,r.jsxs)(l.qy,{onMouseEnter:h,onMouseLeave:p,children:[(0,r.jsx)(l.sN,{children:(0,r.jsx)(d(),{href:"/blogs/developer",children:(0,r.jsx)(i.xv,{fontWeight:"bold",children:"Developer"})})}),(0,r.jsx)(l.sN,{children:(0,r.jsx)(d(),{href:"/blogs/life",children:(0,r.jsx)(i.xv,{fontWeight:"bold",children:"Life"})})}),(0,r.jsx)(l.sN,{children:(0,r.jsx)(d(),{href:"/blogs/sports",children:(0,r.jsx)(i.xv,{fontWeight:"bold",children:"Sports"})})})]})]})})}),(0,r.jsx)(i.P4,{colStart:5,children:(0,r.jsx)(i.xu,{padding:"15px",children:(0,r.jsx)(u.zx,{onClick:t,children:"light"===n?(0,r.jsx)(f.kL,{}):(0,r.jsx)(f.NW,{})})})})]})})})})}},6655:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a},default:function(){return d}});var r=t(5893),o=t(8527),c=t(4651),i=t(3659),s=t(8374);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}var a=!0;function d(e){var n=e.source,t=(e.posts,n.scope),l=(t.title,t.description,t.url,t.date,t.tag,{Heading:o.X6,Text:o.xv,Image:c.Ee,Box:o.xu});return(0,r.jsxs)(o.xu,{minHeight:"100vh",position:"relative",children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(o.xu,{padding:"50px",children:(0,r.jsx)(o.rj,{templateColumns:"repeat(5, 1fr)",gap:4,children:(0,r.jsx)(o.P4,{colStart:2,colEnd:5,children:(0,r.jsx)(i.R,u({},n,{components:l}))})})})]})}},2746:function(e,n,t){const r=t(5893);e.exports.c=r},3659:function(e,n,t){"use strict";t.d(n,{R:function(){return d}});var r={};t.r(r),t.d(r,{MDXContext:function(){return i},MDXProvider:function(){return a},useMDXComponents:function(){return l},withMDXComponents:function(){return s}});var o=t(7294),c=t(2746);const i=o.createContext({});function s(e){return function(n){const t=l(n.components);return o.createElement(e,{...n,allComponents:t})}}function l(e){const n=o.useContext(i);return o.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}const u={};function a({components:e,children:n,disableParentContext:t}){let r=l(e);return t&&(r=e||u),o.createElement(i.Provider,{value:r},n)}function d({compiledSource:e,frontmatter:n,scope:t,components:i={},lazy:s}){const[l,u]=(0,o.useState)(!s||"undefined"===typeof window);(0,o.useEffect)((()=>{if(s){const e=window.requestIdleCallback((()=>{u(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const d=(0,o.useMemo)((()=>{const o=Object.assign({opts:{...r,...c.c}},{frontmatter:n},t),i=Object.keys(o),s=Object.values(o),l=Reflect.construct(Function,i.concat(`${e}`));return l.apply(l,s).default}),[t,e]);if(!l)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=o.createElement(a,{components:i},o.createElement(d,null));return s?o.createElement("div",null,f):f}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[377,774,888,179],(function(){return n=8959,e(e.s=n);var n}));var n=e.O();_N_E=n}]);