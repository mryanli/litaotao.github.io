(function(){function g(){if(!m){if(!f.body)return setTimeout(g,1);m=true;g.callBack()}}function p(e){g.callBack=e;if(f.readyState==="complete")return setTimeout(g,1);if(f.addEventListener){f.addEventListener("DOMContentLoaded",function(){f.removeEventListener("DOMContentLoaded",arguments.callee,false);g()},false);h.addEventListener("load",g,false)}else if(f.attachEvent){f.attachEvent("onreadystatechange",function(){if(f.readyState==="complete"){f.detachEvent("onreadystatechange",arguments.callee);
g()}});h.attachEvent("onload",g);var a=function(){try{n.doScroll("left")}catch(d){setTimeout(a,10);return}g()};e=false;try{e=h.frameElement==null}catch(b){}e&&n.doScroll&&a()}else h.onload=g}function o(e,a,b,d){var c=e.getElementsByTagName(a);e=0;a=[];for(var k=[],q=typeof d=="function",l=0;l<c.length;l++)k.push(c[l]);for(;c=k[e];e++)if(!b||c.className.search(RegExp("\\b"+b+"\\b"))!=-1){a.push(c);q&&d(c)}return a}function i(e,a){a=a||location.href;var b=a.match(RegExp("(\\?|#|&)"+e+"=([^&#]*)(&|#|$)"));
return!b?"":b[2]}function r(e){var a=/\/qc\/shareqq\.js/,b=o(f,"script"),d=[],c;for(c=0;c<b.length;c++)b[c].src.search(a)>=0&&d.push(b[c]);if(a=b[0]){a=a.src;if(b=a.indexOf("?"))a=a.substring(b+1);if(b=a.indexOf("#"))a=a.substring(b+1);a=a.split("&");b={};for(d=0;d<a.length;d++){c=a[d].split("=");b[c[0]]=c[1]}j=b}d=e.search;a=i("width",d)||j.width||130;b=i("height",d)||j.height||30;c=i("style",d)||j.style||"";var k=i("showcount",d)||j.showcount||"";d=[i("style",d)?"":"&style="+c,i("showcount",d)?
"":"&showcount="+k].join("");c=f.createElement("div");c.innerHTML=['<iframe version="1.0" src="http://connect.qq.com/widget/shareqq/widget.html',e.search,e.search?"":"?url="+encodeURIComponent(location.href),d,'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:',a,"px; height:",b,'px;" allowTransparency="true"></iframe>'].join("");e.parentNode.replaceChild(c.firstChild,e)}var f=document,n=f.documentElement,h=window,m=false,j={};if(typeof h.qcShareQQ=="undefined"||!qcShareQQ.inited){h.qcShareQQ=
h.qcShareQQ||{};qcShareQQ.inited=true;p(function(){o(f,"a","qcShareQQDiv",r)})}})();
