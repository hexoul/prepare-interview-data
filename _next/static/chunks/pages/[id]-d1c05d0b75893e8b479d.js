(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{2284:function(e,t,n){"use strict";n.d(t,{h:function(){return b}});var r=n(5893),o=(n(7294),n(8017)),c=n(9345),a=n(4096),i=n(9444),s=n(3880),u=n(7341),l=n(51),f=n(2809),d=n(980),p=n(5630),h=n(9583);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){var t=(0,d.useColorMode)().toggleColorMode,n=(0,d.useColorModeValue)("dark","light"),o=(0,d.useColorModeValue)(h.TLr,h.Mei);return(0,r.jsx)(p.h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(n," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:(0,r.jsx)(o,{})},e))},b=function(){return(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(c.r,{p:3,children:(0,r.jsx)(g,{justifySelf:"flex-end"})}),(0,r.jsx)(o.xu,{minH:"40px",bg:"teal.400",marginBottom:"16px",alignItems:"center",children:(0,r.jsxs)(a.k,{children:[(0,r.jsx)(i.r,{href:"/",_focus:{boxShadow:"none"},children:(0,r.jsx)(s.E,{boxSize:"60px",src:"https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/logo.png",alt:""})}),(0,r.jsx)(u.L,{}),(0,r.jsxs)(l.Ug,{children:[(0,r.jsx)(s.E,{maxWidth:"110px",src:"https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg",alt:""}),(0,r.jsx)(s.E,{maxWidth:"140px",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",alt:""})]})]})})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),i=n(4651),s=n(7426);var u={};function l(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=c.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?a.resolveHref(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,g=e.shallow,b=e.scroll,x=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var j=(t=c.default.Children.only(h))&&"object"===typeof t&&t.ref,m=s.useIntersection({rootMargin:"200px"}),y=r(m,2),w=y[0],_=y[1],O=c.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);c.default.useEffect((function(){var e=_&&n&&a.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,_,x,n,o]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}))}(e,o,d,p,v,g,b,x)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof x?x:o&&o.locale,M=o&&o.isLocaleDomain&&a.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);E.href=M||a.addBasePath(a.addLocale(p,k,o&&o.defaultLocale))}return c.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],d=l[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!a&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),c=n(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},4344:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(5893),o=n(5063),c=n(8017),a=n(51),i=n(2284),s=!0;t.default=function(e){var t=e.id,n=e.contents;return(0,r.jsxs)(c.xu,{textAlign:"center",fontSize:"xl",children:[(0,r.jsx)(i.h,{}),(0,r.jsx)(a.gC,{spacing:8,children:n.filter((function(e){return e.link})).map((function(e,n){return(0,r.jsx)(o.default,{href:"/".concat(t,"/").concat(n),children:e.content},e.content)}))})]})}},7005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(4344)}])},5063:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[445,519,774,888,179],(function(){return t=7005,e(e.s=t);var t}));var t=e.O();_N_E=t}]);