function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function testtest(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (title) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cdiv class=\"bauer-web-component-test\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "Test component";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-default btn-lg\" id=\"bauer-web-component-test-btn\" type=\"button\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cspan class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E";}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}