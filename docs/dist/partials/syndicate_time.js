function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function partials_syndicate_time(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["getSyndicateTime"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (window.bauerSharedLibs._.has(data,'lastModifiedAt')) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Creturn\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data.lastModifiedAt)) ? "" : pug_interp)) + "\u003C\u002Freturn\u003E";
}
else {
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Creturn\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data.publicationDate)) ? "" : pug_interp)) + "\u003C\u002Freturn\u003E";
}
};
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (window.bauerSharedLibs._.has(data,'primarySyndicatePosition')) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var url = window.bauerSharedLibs.pug.helpers.syndicateCategoryLink(data)
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var category = window.bauerSharedLibs.pug.helpers.syndicateCategory(data)
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["getSyndicateTime"](data);
}
else {
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var url = data.urls[0]
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var category = data.categories[0].name
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["getSyndicateTime"](data);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}