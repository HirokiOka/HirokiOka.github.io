(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7752:function(e,t,r){"use strict";r.d(t,{u2:function(){return l},y7:function(){return s}});var n=r(5893),o=r(9008),i=r(3499),a=r.n(i),u=r(1664),l="Hiroki Oka",s="HirokiOka Web";t.ZP=function(e){var t=e.children;return e.home,(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/images/favicon.ico"}),(0,n.jsx)("meta",{name:"description",content:"this is Hiroki Oka's website"}),(0,n.jsx)("meta",{name:"og:title",content:s})]}),(0,n.jsx)("header",{className:a().header,children:(0,n.jsxs)("nav",{className:a().navWrapper,children:[(0,n.jsx)("li",{children:(0,n.jsx)(u.default,{href:"/",children:(0,n.jsx)("a",{className:a().navItem,children:"home"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(u.default,{href:"/about",children:(0,n.jsx)("a",{className:a().navItem,children:"about"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(u.default,{href:"/projects",children:(0,n.jsx)("a",{className:a().navItem,children:"projects"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(u.default,{href:"/posts",children:(0,n.jsx)("a",{className:a().navItem,children:"blog"})})})]})}),(0,n.jsx)("main",{children:t}),(0,n.jsx)("footer",{className:a().footer,children:"Copyright @ Hiroki Oka All Rights Reserved"})]})}},1647:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));if(n=i(i({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=a.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};u(r(7294));var a=u(r(5547));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},8903:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},5547:function(e,t,r){"use strict";var n=r(9713),o=r(4575),i=r(3913);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,d=(c=r(7294))&&c.__esModule?c:{default:c},f=r(7161),h=r(8903);var p=[],_=[],m=!1;function y(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function b(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=y(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new j(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!m&&"function"===typeof r.webpack){var i=r.webpack();_.push((function(e){var t,r=l(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){o();var i=d.default.useContext(h.LoadableContext),a=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?r.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}var j=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return g(y,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(b,e)},O.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};w(_,e).then(r,r)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var x=O;t.default=x},8474:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l},SketchComponent:function(){return c}});var n=r(5893),o=r(9008),i=r(7752),a=r(601),u=r.n(a);function l(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.ZP,{home:!0,children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:i.y7})}),(0,n.jsx)("h1",{children:"HirokiOka Web."}),(0,n.jsx)(c,{className:u().sketch})]})})}var s=(0,r(5152).default)((function(){return r.e(257).then(r.t.bind(r,4210,23))}),{loading:function(){return(0,n.jsx)(n.Fragment,{})},ssr:!1,loadableGenerated:{webpack:function(){return[4210]},modules:["index.js -> react-p5"]}}),c=function(){var e,t,r,o=20,i=0;return(0,n.jsx)(s,{preload:function(e){r=e.loadFont("https://stat.neort.io/externalResource/bqj6tps3p9f48fkipv9g.ttf")},setup:function(r,n){e=2*r.windowWidth/3,t=2*r.windowHeight/3,r.createCanvas(e,t).parent(n),r.noStroke(),r.textAlign(r.CENTER,r.CENTER),r.rectMode(r.CENTER)},draw:function(n){var a=n.frameCount;n.textFont(r),i=255*n.sin(.004*a),n.background(i),n.fill(255-i);for(var u=o;u<t-o;u+=60)for(var l=o;l<e-o;l+=60){var s=l,c=u,d=36*Math.abs(Math.sin(a*(l+u)*2e-5)),f=Math.floor(a*n.noise(l,u)*.02%10);n.textSize(d),n.text(f,s,c)}n.fill(i),n.rect(e/2,t/2,620,84),n.textSize(64),n.fill(255-i),n.text("HELLO   WORLD",e/2,t/2)},windowResized:function(r){e=2*r.windowWidth/3,t=2*r.windowHeight/3,r.resizeCanvas(e,t)}})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8474)}])},3499:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",navWrapper:"layout_navWrapper__Gc5oo",navItem:"layout_navItem__36EW-",footer:"layout_footer__127N0"}},601:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",sketch:"utils_sketch__1HhSN"}},5152:function(e,t,r){e.exports=r(1647)}},function(e){e.O(0,[774,351,996],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);