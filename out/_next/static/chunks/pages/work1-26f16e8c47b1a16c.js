(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{1462:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work1",function(){return r(256)}])},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,s=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){s=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(s)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var s,i=(s=r(7294))&&s.__esModule?s:{default:s},a=r(6273),c=r(387),l=r(7190);var o={};function d(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+r+(s?"%"+s:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,s=c.useRouter(),u=i.default.useMemo((function(){var t=n(a.resolveHref(s,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?a.resolveHref(s,e.as):i||r}}),[s,e.href,e.as]),f=u.href,h=u.as,v=e.children,m=e.replace,p=e.shallow,j=e.scroll,x=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,y=n(l.useIntersection({rootMargin:"200px"}),2),w=y[0],N=y[1],b=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=N&&r&&a.isLocalURL(f),t="undefined"!==typeof x?x:s&&s.locale,n=o[f+"%"+h+(t?"%"+t:"")];e&&!n&&d(s,f,h,{locale:t})}),[h,f,N,x,r,s]);var k={ref:b,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[s?"replace":"push"](r,n,{shallow:i,locale:l,scroll:c}))}(e,s,f,h,m,p,j,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(f)&&d(s,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:s&&s.locale,L=s&&s.isLocaleDomain&&a.getDomainLocale(h,E,s&&s.locales,s&&s.domainLocales);k.href=L||a.addBasePath(a.addLocale(h,E,s&&s.defaultLocale))}return i.default.cloneElement(t,k)};t.default=u},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,s=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){s=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(s)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,l=s.useRef(),o=n(s.useState(!1),2),d=o[0],u=o[1],f=s.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:s,elements:n}),r}(r),s=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(s))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,d]);return s.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[f,d]};var s=r(7294),i=r(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},8063:function(e,t){"use strict";t.Z=function(){var e,t=document.querySelectorAll(".gallery"),r=document.querySelector(".filtering"),n=document.querySelectorAll(".filtering");if(t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})})),r){r.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var r=t.target.getAttribute("data-filter");r=r,e.arrange({filter:r})}}));for(var s=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))},i=0,a=n.length;i<a;i++){s(n[i])}}}},7068:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.title,r=e.content,s=e.center;return(0,n.jsx)("header",{className:"work-header bg-img valign",style:{backgroundImage:"url(/assets/img/patern.png)"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row ".concat(s?"justify-content-center":""),children:(0,n.jsx)("div",{className:"col-lg-9",children:(0,n.jsxs)("div",{className:"cont ".concat(s?"text-center":""),children:[(0,n.jsx)("h2",{children:"object"==typeof t?(0,n.jsxs)(n.Fragment,{children:[t.first," ",(0,n.jsx)("br",{})," ",t.second]}):t}),(0,n.jsx)("p",{children:r})]})})})})})}},843:function(e,t,r){"use strict";var n=r(5893),s=r(7294),i=r(1696),a=r(1690),c=r(9008);t.Z=function(e){var t=e.children,r=e.logoClassText,l=s.useRef(null),o=s.useRef(null);return s.useEffect((function(){var e=l.current,t=o.current;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?(e.classList.add("nav-scroll"),t.setAttribute("src","/assets/img/logo-light.png")):(e.classList.remove("nav-scroll"),t.setAttribute("src","/assets/img/logo-light.png"))}))}),[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{children:(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css"})}),(0,n.jsx)(i.Z,{navbarRef:l,logoRef:o,logoClass:r}),t,(0,n.jsx)(a.Z,{})]})}},256:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),s=r(7294),i=r(7068),a=r(843),c=r(1664),l=r(8063),o=function(){return s.useEffect((function(){setTimeout((function(){window.Isotope&&(0,l.Z)()}),1e3)}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"works filter-img section-padding",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row gallery",children:[(0,n.jsx)("div",{className:"col-lg-6 items mt-0 interior theaters residential",children:(0,n.jsxs)("div",{className:"section-head mb-0",children:[(0,n.jsx)("h3",{children:"Works"}),(0,n.jsx)("div",{className:"filtering mt-30",children:(0,n.jsxs)("div",{className:"filter",children:[(0,n.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,n.jsx)("span",{"data-filter":".interior",children:"Interior"}),(0,n.jsx)("span",{"data-filter":".theaters",children:"Theaters"}),(0,n.jsx)("span",{"data-filter":".residential",children:"Residential"})]})})]})}),(0,n.jsx)("div",{className:"col-lg-6 items theaters",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/2.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont vis",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(c.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-6 items residential interior",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont vis",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(c.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-6 items interior",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/5.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont vis",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(c.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-6 items residential",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/3.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont vis",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(c.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-6 items theaters",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/4.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont vis",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(c.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})})]})})})})},d=function(){return s.useEffect((function(){document.querySelector("body").classList.add("index3")}),[]),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.Z,{title:{first:"Architecture is a visual art,",second:"and the building speak for themeselves"},content:"Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."}),(0,n.jsx)(o,{})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[613,774,888,179],(function(){return t=1462,e(e.s=t);var t}));var t=e.O();_N_E=t}]);