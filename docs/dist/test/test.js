function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function test_test(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (title, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
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
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002Ftest.pug";


































;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FimgCdn.pug";
pug_mixins["imgCdn"] = pug_interp = function(data, settings){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FimgCdn.pug";
var imgUrl = window.bauerSharedLibs.pug.mixins.imgCdn(data, settings)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FimgCdn.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = imgUrl) ? "" : pug_interp));
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002Flink.pug";
pug_mixins["link"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002Flink.pug";
var href = data.href || ''
var title = data.title || ''

;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002Flink.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", data.href, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002Flink.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";







;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FprimarySyndicate.pug";
pug_mixins["primarySyndicate"] = pug_interp = function(data, settings){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FprimarySyndicate.pug";
var primarySyndicate = window.bauerSharedLibs.pug.mixins.primarySyndicate(data, settings)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FprimarySyndicate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = primarySyndicate) ? "" : pug_interp));
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_mixins["relativeTimeUTC"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
var relativeTimeUTC = window.bauerSharedLibs.pug.mixins.relativeTimeUTC(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = relativeTimeUTC) ? "" : pug_interp));
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategory.pug";
pug_mixins["syndicateCategory"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategory.pug";
var syndicateCategory = window.bauerSharedLibs.pug.mixins.syndicateCategory(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = syndicateCategory) ? "" : pug_interp));
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategoryLink.pug";
pug_mixins["syndicateCategoryLink"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategoryLink.pug";
var syndicateCategoryLink = window.bauerSharedLibs.pug.mixins.syndicateCategoryLink(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategoryLink.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = syndicateCategoryLink) ? "" : pug_interp));
};
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "imgcdn mixin:";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_mixins["imgCdn"]();
pug_html = pug_html + "\u003C\u002Fh1\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "link:";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_mixins["link"]({'href': 'google.com', 'title': 'test link'});
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "primary:";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_mixins["primarySyndicate"]();
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "relativeTimeUTC";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_mixins["relativeTimeUTC"]();
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "syndicateCategory";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_mixins["syndicateCategory"]();
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_html = pug_html + "syndicateCategoryLink";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Ftest\u002Ftest.pug";
pug_mixins["syndicateCategoryLink"]();
pug_html = pug_html + "\u003C\u002Fp\u003E\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E";}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}