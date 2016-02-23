/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssall-cssanimations-cssgradients-lowbandwidth-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],n=y[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,i,f,u,d="modernizr",c=a("div"),p=l();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),i=t(c,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):c.parentNode.removeChild(c),!!i}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,o,s){function l(){u&&(delete T.style,delete T.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=d(e,o);if(!r(f,"undefined"))return f}for(var u,p,m,g,h,v=["modernizr","tspan"];!T.style;)u=!0,T.modElem=a(v.shift()),T.style=T.modElem.style;for(m=e.length,p=0;m>p;p++)if(g=e[p],h=T.style[g],i(g,"-")&&(g=c(g)),T.style[g]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?g:!0;try{T.style[g]=o}catch(y){}if(T.style[g]!=h)return l(),"pfx"==n?g:!0}return l(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function g(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?m(o,t||n):o);return!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?p(a,n,o,s):(a=(e+" "+k.join(i+" ")+i).split(" "),g(a,n,t))}function v(e,n,r){return h(e,t,t,n,r)}var y=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=[],_=n.documentElement,x="svg"===_.nodeName.toLowerCase();Modernizr.addTest("cssall","all"in _.style),Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)});var b="Moz O ms Webkit",S=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=S;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var T={style:P.elem.style};Modernizr._q.unshift(function(){delete T.style});var k=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=k,w.testAllProps=h,w.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0));var z=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=z,Modernizr.addTest("cssgradients",function(){for(var e,n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,s=z.length-1;s>o;o++)e=0===o?"to ":"",r+=n+z[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=n+"-webkit-"+t);var i=a("a"),l=i.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),o(),s(C),delete w.addTest,delete w.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);