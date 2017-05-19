function e(e){return function(t){return null==e?void 0:e[t]}}function t(e,t){for(var n=-1,i=null==e?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}function n(e){var t=X.call(e,ee),n=e[ee];try{e[ee]=void 0;var i=!0}catch(e){}var o=Q.call(e);return i&&(t?e[ee]=n:delete e[ee]),o}function i(e){return ne.call(e)}function o(e){return null==e?void 0===e?oe:ie:re&&re in Object(e)?n(e):i(e)}function r(e){return null!=e&&"object"==typeof e}function a(e){return"symbol"==typeof e||r(e)&&o(e)==ae}function s(e){if("string"==typeof e)return e;if(Y(e))return t(e,s)+"";if(a(e))return ce?ce.call(e):"";var n=e+"";return"0"==n&&1/e==-se?"-0":n}function l(e){return null==e?"":s(e)}function c(e){return(e=l(e))&&e.replace(ue,B).replace(ge,"")}function u(e){return e=l(e),e&&ve.test(e)?e.replace(ye,"\\$&"):e}function d(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}function f(e){return r(e)&&o(e)==be}function p(e){return Y(e)||Te(e)||!!(ke&&e&&e[ke])}function h(e,t,n,i,o){var r=-1,a=e.length;for(n||(n=p),o||(o=[]);++r<a;){var s=e[r];t>0&&n(s)?t>1?h(s,t-1,n,i,o):d(o,s):i||(o[o.length]=s)}return o}function m(e){return(null==e?0:e.length)?h(e,1):[]}function g(e){return e.match(Ce)||[]}function y(e){return Le.test(e)}function v(e){return e.match(pt)||[]}function b(e,t,n){return e=l(e),t=n?void 0:t,void 0===t?y(e)?v(e):g(e):e.match(t)||[]}function x(e,t){if(1===e.length)return e[0];const n=m(e).sort(([e],[t])=>e-t),i=[n[0]];for(let e=1;e<n.length;e+=1){const o=n[e],r=i[i.length-1];o[0]<=r[1]||/^\s*$/.test(t.slice(r[1],o[0]))?r[1]=Math.max(o[1],r[1]):i.push(o)}return i}function A(e,t){const n=c(e);return x(t.map(e=>{const t=RegExp(u(c(e)),"gi");const i=[];let o;for(;o=t.exec(n);)i.push([o.index,t.lastIndex]);return i}),n)}function E(e,t,n){const i=A(t,b(n));we(t,i).forEach(t=>{if(t.highlight){const n=document.createElement("mark");n.textContent=t.text,e.appendChild(n)}else{const n=document.createTextNode(t.text);e.appendChild(n)}})}function T(e){const[t,n]=e.split("=").map(decodeURIComponent);return{key:t,value:n}}function k(e){return e.replace(/^[?#]/,"").split("&").reduce((e,t)=>{const{key:key,value:value}=T(t);e[key]=value;return e},{})}function w(e,t){return{key:encodeURIComponent(e),value:encodeURIComponent(t)}}function C(e){return Object.keys(e).map(t=>{const{key:key,value:value}=w(t,e[t]);return`${key}=${value}`}).join("&")}function L(e,t=document){return t.querySelector(e)}function O(e){for(let t=e;t.parentNode;t=t.parentNode)if("a"===t.nodeName.toLowerCase())return t;return null}function S(){const e=localStorage.getItem("settings");if(!e)return localStorage.setItem("settings",JSON.stringify(mt)),mt;const t=JSON.parse(e);return gt.includes(t.theme)||(t.theme=mt.theme,localStorage.setItem("settings",JSON.stringify(t))),t}function N(e,t){return t={exports:{}},e(t,t.exports),t.exports}function D(e){const t=e.status;if(t>=200&&t<300)return e;throw Error(`HTTP Error ${t}: ${e.statusText}`)}function R(e){return e.json()}function _(e,t={}){return t.origin="*",fetch(`${e}?${C(t)}`).then(D).then(R)}function M(e){return vt.sanitize(e,{RETURN_DOM_FRAGMENT:!0,RETURN_DOM_IMPORT:!0})}function j(e,t,n){const[{text:text},...i]=e.mobileview.sections,{$content:$content}=bt,o=document.createElement("h1");o.textContent=e.mobileview.normalizedtitle||t.replace(/_/g," "),$content.appendChild(o),$content.appendChild(M(text)),n();let r;i.forEach(e=>{const t=M(e.line).textContent;const n=M(e.text);if(1===e.toclevel){const e=document.createElement("details"),i=document.createElement("summary"),o=document.createElement("h2"),a=document.createElement("div");o.textContent=t,i.appendChild(o),e.appendChild(i),e.classList.add("card"),i.classList.add("card-header"),a.classList.add("card-block"),a.appendChild(n),e.appendChild(a),$content.appendChild(e),r=a}else{const i=e.toclevel<=6?e.toclevel:6,o=document.createElement(`h${i}`);o.textContent=t,r.appendChild(o),r.appendChild(n)}},!1)}function z(e){const t=document.createElement("a");return t.href=e,t}function I(){if(""!==location.hash){const{$search:$search}=bt,e=k(location.hash);$search.value=e.article,H(e.article,!0)}}function U(e){const{$base:$base,$body:$body,$content:$content,$loading:$loading}=bt;$base.setAttribute("href",`${yt.url}wiki/${e}`),$content.textContent="",$content.style.display="none",$loading.style.display="block",$body.classList.add("loading")}function F(e){const t={action:"mobileview",format:"json",noheadings:!0,page:e,sections:"all",redirect:"yes"};return _(`${yt.url}w/api.php`,t).then(e=>{if(e.error){const t=Error(e.error.info);throw t}return e})}function H(e){function t(){$content.style.display="block",$loading.style.display="none",$body.classList.remove("loading"),scroll(0,0)}function n(e){const t=document.createElement("div");return t.classList.add("alert"),t.classList.add("alert-danger"),t.textContent=e,t}const{$body:$body,$content:$content,$loading:$loading}=bt;U(e),F(e).then(n=>{j(n,e,t)}).catch(e=>{t();$content.appendChild(n(e))})}function $(e){const t=z(e),n=z(yt.url);return!(!/^https?:$/.test(t.protocol)||t.host&&t.host!==n.host||!t.pathname.startsWith("../wiki/")&&("/"===n.pathname?"/wiki/"!==t.pathname.substring(0,6):t.pathname.substring(0,n.pathname.length+6)!==`${n.pathname}/wiki/`))}function G(e){return function(e){return decodeURIComponent(e.replace(/_/g," "))}(function(){const t=z(e),n=z(yt.url);return t.pathname.startsWith("../wiki/")?t.pathname.substring(8):"/"===n.pathname?t.pathname.substring(6):t.pathname.substring(n.pathname.length+6)}())}function W(e){const t={format:"json",action:"opensearch",search:e,suggest:!0,limit:10};return _(`${yt.url}w/api.php`,t).then(e=>e[1])}var q={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},B=e(q),P="object"==typeof global&&global&&global.Object===Object&&global,Z="object"==typeof self&&self&&self.Object===Object&&self,V=P||Z||Function("return this")(),J=V.Symbol,Y=Array.isArray,K=Object.prototype,X=K.hasOwnProperty,Q=K.toString,ee=J?J.toStringTag:void 0,te=Object.prototype,ne=te.toString,ie="[object Null]",oe="[object Undefined]",re=J?J.toStringTag:void 0,ae="[object Symbol]",se=1/0,le=J?J.prototype:void 0,ce=le?le.toString:void 0,ue=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,de="\\u0300-\\u036f",fe="\\ufe20-\\ufe2f",pe="\\u20d0-\\u20ff",he=de+fe+pe,me="["+he+"]",ge=RegExp(me,"g"),ye=/[\\^$.*+?()[\]{}|]/g,ve=RegExp(ye.source),be="[object Arguments]",xe=Object.prototype,Ae=xe.hasOwnProperty,Ee=xe.propertyIsEnumerable,Te=f(function(){return arguments}())?f:function(e){return r(e)&&Ae.call(e,"callee")&&!Ee.call(e,"callee")},ke=J?J.isConcatSpreadable:void 0,we=function(e,t){var n=[];return 0===t.length?n.push({text:e,highlight:!1}):t[0][0]>0&&n.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach(function(i,o){var r=i[0],a=i[1];n.push({text:e.slice(r,a),highlight:!0}),o===t.length-1?a<e.length&&n.push({text:e.slice(a,e.length),highlight:!1}):a<t[o+1][0]&&n.push({text:e.slice(a,t[o+1][0]),highlight:!1})}),n},Ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Le=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Oe="\\ud800-\\udfff",Se="\\u0300-\\u036f",Ne="\\ufe20-\\ufe2f",De="\\u20d0-\\u20ff",Re=Se+Ne+De,_e="\\u2700-\\u27bf",Me="a-z\\xdf-\\xf6\\xf8-\\xff",je="\\xac\\xb1\\xd7\\xf7",ze="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ie="\\u2000-\\u206f",Ue=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Fe="A-Z\\xc0-\\xd6\\xd8-\\xde",He="\\ufe0e\\ufe0f",$e=je+ze+Ie+Ue,Ge="['’]",We="["+$e+"]",qe="["+Re+"]",Be="\\d+",Pe="["+_e+"]",Ze="["+Me+"]",Ve="[^"+Oe+$e+Be+_e+Me+Fe+"]",Je="\\ud83c[\\udffb-\\udfff]",Ye="(?:"+qe+"|"+Je+")",Ke="[^"+Oe+"]",Xe="(?:\\ud83c[\\udde6-\\uddff]){2}",Qe="[\\ud800-\\udbff][\\udc00-\\udfff]",et="["+Fe+"]",tt="\\u200d",nt="(?:"+Ze+"|"+Ve+")",it="(?:"+et+"|"+Ve+")",ot="(?:"+Ge+"(?:d|ll|m|re|s|t|ve))?",rt="(?:"+Ge+"(?:D|LL|M|RE|S|T|VE))?",at=Ye+"?",st="["+He+"]?",lt="(?:"+tt+"(?:"+[Ke,Xe,Qe].join("|")+")"+st+at+")*",ct="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",ut="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",dt=st+at+lt,ft="(?:"+[Pe,Xe,Qe].join("|")+")"+dt,pt=RegExp([et+"?"+Ze+"+"+ot+"(?="+[We,et,"$"].join("|")+")",it+"+"+rt+"(?="+[We,et+nt,"$"].join("|")+")",et+"?"+nt+"+"+ot,et+"+"+rt,ut,ct,Be,ft].join("|"),"g");class ht{constructor(e,t){this.input=e,this.getCompletion=t,this.input.setAttribute("aria-autocomplete","list"),this.index=-1,this.typedValue=this.input.value,this.container=this.input.parentElement,this.ul=this.input.nextElementSibling,this.input.addEventListener("input",this.refresh.bind(this)),this.input.addEventListener("blur",this.close.bind(this)),this.input.addEventListener("keydown",e=>{const t=e.key;this.ul.hasAttribute("hidden")||("Enter"!==t&&"Tab"!==t||-1===this.index?"Escape"===t?this.close():"ArrowUp"!==t&&"ArrowDown"!==t||(e.preventDefault(),this["ArrowUp"===t?"previous":"next"]()):("Tab"===t&&e.preventDefault(),this.input.value=this.list[this.index],this.close()))}),this.input.form.addEventListener("submit",this.close.bind(this)),this.ul.addEventListener("click",e=>{let t=e.target;if(t!==this){for(;t&&"li"===t.nodeName.toLowerCase();)t=t.parentNode;if(!t)return;e.preventDefault(),this.li.input=t.innerText,this.close()}})}close(){this.ul.setAttribute("hidden",""),this.index=-1}open(){this.ul.removeAttribute("hidden")}next(){const e=this.list.length;this.goto(this.index<e-1?this.index+1:-1)}previous(){const e=this.list.length;this.goto(-1!==this.index?this.index-1:e-1)}goto(e){const t=this.ul.children;-1!==this.index&&t[this.index].setAttribute("aria-selected","false"),this.index=e,t.length>0&&(e>-1?(t[e].setAttribute("aria-selected","true"),this.input.value=t[e].textContent):this.input.value=this.typedValue)}refresh(){if(this.index=-1,this.typedValue=this.input.value,0!==this.input.value.length){const e=this.typedValue;this.getCompletion(this.input.value).then(t=>{e===this.typedValue&&(this.list=t,this.showCompletions())})}else this.close()}showCompletions(){if(0===this.list.length)return void this.close();const e=this.ul.children;if(this.list.length<e.length)for(let t=this.list.length;t<e.length;t+=1)this.ul.removeChild(e[t]);this.list.forEach((t,n)=>{if(!e[n]){const e=document.createElement("li");this.ul.appendChild(e)}const i=e[n];i.textContent="";E(i,t,this.input.value);i.setAttribute("aria-selected","false")}),this.open()}}const mt={theme:"custom",url:"https://en.wikipedia.org/"},gt=["cerulean","cosmo","custom","cyborg","darkly","flatly","journal","litera","lumen","lux","materia","minty","pulse","sandstone","simplex","slate","solar","spacelab","superhero","united","yeti"],yt=S();var vt=N(function(e){!function(t){"use strict";var n="undefined"==typeof window?null:window;e.exports=function e(t){var n=function(t){return e(t)};if(n.version="0.9.0",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var i=t.document,o=i,r=t.DocumentFragment,a=t.HTMLTemplateElement,s=t.Node,l=t.NodeFilter,c=t.NamedNodeMap||t.MozNamedAttrMap,u=t.Text,d=t.Comment,f=t.DOMParser,p=t.XMLHttpRequest,h=t.encodeURI,m=!1,g=!1;if("function"==typeof a){var y=i.createElement("template");y.content&&y.content.ownerDocument&&(i=y.content.ownerDocument)}var v=i.implementation,b=i.createNodeIterator,x=i.getElementsByTagName,A=i.createDocumentFragment,E=o.importNode,T={};n.isSupported=void 0!==v.createHTMLDocument&&9!==i.documentMode;var k=function(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e},w=function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},C=null,L=k({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),O=null,S=k({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),N=null,D=null,R=!0,_=!0,M=!1,j=!1,z=!1,I=/\{\{[\s\S]*|[\s\S]*\}\}/gm,U=/<%[\s\S]*|[\s\S]*%>/gm,F=!1,H=!1,$=!1,G=!1,W=!1,q=!1,B=!0,P=!0,Z=k({},["audio","head","math","script","style","template","svg","video"]),V=k({},["audio","video","img","source","image"]),J=k({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Y=null,K=i.createElement("form"),X=function(e){"object"!=typeof e&&(e={}),C="ALLOWED_TAGS"in e?k({},e.ALLOWED_TAGS):L,O="ALLOWED_ATTR"in e?k({},e.ALLOWED_ATTR):S,N="FORBID_TAGS"in e?k({},e.FORBID_TAGS):{},D="FORBID_ATTR"in e?k({},e.FORBID_ATTR):{},R=!1!==e.ALLOW_ARIA_ATTR,_=!1!==e.ALLOW_DATA_ATTR,M=e.ALLOW_UNKNOWN_PROTOCOLS||!1,j=e.SAFE_FOR_JQUERY||!1,z=e.SAFE_FOR_TEMPLATES||!1,F=e.WHOLE_DOCUMENT||!1,G=e.RETURN_DOM||!1,W=e.RETURN_DOM_FRAGMENT||!1,q=e.RETURN_DOM_IMPORT||!1,$=e.FORCE_BODY||!1,B=!1!==e.SANITIZE_DOM,P=!1!==e.KEEP_CONTENT,z&&(_=!1),W&&(G=!0),e.ADD_TAGS&&(C===L&&(C=w(C)),k(C,e.ADD_TAGS)),e.ADD_ATTR&&(O===S&&(O=w(O)),k(O,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&k(J,e.ADD_URI_SAFE_ATTR),P&&(C["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),Y=e},Q=function(e){n.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},ee=function(e,t){n.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},te=function(e){var t,n;if($&&(e="<remove></remove>"+e),m){try{e=h(e)}catch(e){}var i=new p;i.responseType="document",i.open("GET","data:text/html;charset=utf-8,"+e,!1),i.send(null),t=i.response}if(g)try{t=(new f).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((n=(t=v.createHTMLDocument("")).body).parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),x.call(t,F?"html":"body")[0]};n.isSupported&&function(){var e=te('<svg><g onload="this.parentNode.remove()"></g></svg>');e.querySelector("svg")||(m=!0),(e=te('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">')).querySelector("svg img")&&(g=!0)}();var ne=function(e){return b.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,function(){return l.FILTER_ACCEPT},!1)},ie=function(e){return!(e instanceof u||e instanceof d||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof c&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},oe=function(e){return"object"==typeof s?e instanceof s:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},re=function(e){var t,i;if(pe("beforeSanitizeElements",e,null),ie(e))return Q(e),!0;if(t=e.nodeName.toLowerCase(),pe("uponSanitizeElement",e,{tagName:t,allowedTags:C}),!C[t]||N[t]){if(P&&!Z[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return Q(e),!0}return!j||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(n.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),z&&3===e.nodeType&&(i=(i=(i=e.textContent).replace(I," ")).replace(U," "),e.textContent!==i&&(n.removed.push({element:e.cloneNode()}),e.textContent=i)),pe("afterSanitizeElements",e,null),!1},ae=/^data-[\-\w.\u00B7-\uFFFF]/,se=/^aria-[\-\w]+$/,le=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,ce=/^(?:\w+script|data):/i,ue=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,de=function(e){var o,r,a,s,l,c,u,d;if(pe("beforeSanitizeAttributes",e,null),c=e.attributes){for(u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:O},d=c.length;d--;){if(o=c[d],r=o.name,a=o.value.trim(),s=r.toLowerCase(),u.attrName=s,u.attrValue=a,u.keepAttr=!0,pe("uponSanitizeAttribute",e,u),a=u.attrValue,"name"===s&&"IMG"===e.nodeName&&c.id)l=c.id,c=Array.prototype.slice.apply(c),ee("id",e),ee(r,e),c.indexOf(l)>d&&e.setAttribute("id",l.value);else{if("INPUT"===e.nodeName&&"type"===s&&"file"===a&&(O[s]||!D[s]))continue;"id"===r&&e.setAttribute(r,""),ee(r,e)}if(u.keepAttr&&(!B||"id"!==s&&"name"!==s||!(a in t||a in i||a in K))){if(z&&(a=(a=a.replace(I," ")).replace(U," ")),_&&ae.test(s));else if(R&&se.test(s));else{if(!O[s]||D[s])continue;if(J[s]);else if(le.test(a.replace(ue,"")));else if("src"!==s&&"xlink:href"!==s||0!==a.indexOf("data:")||!V[e.nodeName.toLowerCase()])if(M&&!ce.test(a.replace(ue,"")));else if(a)continue}try{e.setAttribute(r,a),n.removed.pop()}catch(e){}}}pe("afterSanitizeAttributes",e,null)}},fe=function(e){var t,n=ne(e);for(pe("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)pe("uponSanitizeShadowNode",t,null),re(t)||(t.content instanceof r&&fe(t.content),de(t));pe("afterSanitizeShadowDOM",e,null)},pe=function(e,t,i){T[e]&&T[e].forEach(function(e){e.call(n,t,i,Y)})};return n.sanitize=function(e,i){var a,l,c,u,d,f;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!oe(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=""+e}if(!n.isSupported){if("object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(oe(e))return t.toStaticHTML(e.outerHTML)}return e}if(H||X(i),n.removed=[],e instanceof s)1===(l=(a=te("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName?a=l:a.appendChild(l);else{if(!G&&!F&&-1===e.indexOf("<"))return e;if(!(a=te(e)))return G?null:""}for($&&Q(a.firstChild),d=ne(a);c=d.nextNode();)3===c.nodeType&&c===u||re(c)||(c.content instanceof r&&fe(c.content),de(c),u=c);if(G){if(W)for(f=A.call(a.ownerDocument);a.firstChild;)f.appendChild(a.firstChild);else f=a;return q&&(f=E.call(o,f,!0)),f}return F?a.outerHTML:a.innerHTML},n.setConfig=function(e){X(e),H=!0},n.clearConfig=function(){Y=null,H=!1},n.addHook=function(e,t){"function"==typeof t&&(T[e]=T[e]||[],T[e].push(t))},n.removeHook=function(e){T[e]&&T[e].pop()},n.removeHooks=function(e){T[e]&&(T[e]=[])},n.removeAllHooks=function(){T={}},n}(n)}()});const bt={$base:L("base"),$body:L("body"),$search:L("#search"),$content:L("#content"),$loading:L("#loading")};L("#back").addEventListener("click",e=>{e.preventDefault();history.back()}),L("#forward").addEventListener("click",e=>{e.preventDefault();history.forward()}),L(".dropdown").addEventListener("click",e=>{e.preventDefault();e.target.parentNode.classList.toggle("show");const t=!!e.target.getAttribute("aria-expanded");e.target.setAttribute("aria-expanded",""+!t);e.target.classList.toggle("active")});const{$base:$base,$search:$search,$content:$content}=bt;L("link").setAttribute("href",`themes/${yt.theme}/style.css`),I(),L("#newTab").addEventListener("click",e=>{e.preventDefault();window.open(`${yt.url}wiki/${L("#search").value}`,"_newtab")}),L('a[href="options.html"]',L(".dropdown-menu")).addEventListener("click",()=>{$base.setAttribute("href","");location.href="options.html"}),addEventListener("hashchange",I),new ht(L("#search"),W),$content.addEventListener("click",e=>{const t=O(e.target);if(t)if($(t.href)){e.preventDefault();const n=G(t.href);$search.value=n,$content.scrollTop=0,location.hash=C({article:n})}else""!==t.dataset.internal&&(e.preventDefault(),window.open(t.href,"_newtab"))}),L("#search-form").addEventListener("submit",e=>{e.preventDefault();location.hash=C({article:$search.value})});
