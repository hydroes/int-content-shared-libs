function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function partials_syndicate_time(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, settings, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_mixins["relativeTimeUTC"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
var relativeTimeUTC = window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = relativeTimeUTC) ? "" : pug_interp));
};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var relativeTimeUTC = window.bauerSharedLibs.pug.helpers.relativeTimeUTC
var syndicateCategory = window.bauerSharedLibs.pug.helpers.syndicateCategory
var syndicateCategoryLink = window.bauerSharedLibs.pug.helpers.syndicateCategoryLink

var syndicateCategoryLinkData = {
    article: data,
    channel: settings.channel,
    displaySyndicate: data.displaySyndicate
}

var syndicateCategoryData = {
    article: data,
    channel: settings.channel,
    displaySyndicate: data.displaySyndicate,
    displayField: 'name'
}

var category = syndicateCategory(syndicateCategoryData)

;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (data.primarySyndicatePosition != '') {
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", syndicateCategoryLink(syndicateCategoryLinkData), true, false)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (data.lastModifiedAt) {
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["relativeTimeUTC"](data.lastModifiedAt);
}
else {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["relativeTimeUTC"](data.publicationDate);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", '/'+data.syndicateUrls+'/', true, false)) + "\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.categories[0].name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (data.lastModifiedAt) {
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["relativeTimeUTC"](data.lastModifiedAt);
}
else {
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_mixins["relativeTimeUTC"](data.publicationDate);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"settings" in locals_for_with?locals_for_with.settings:typeof settings!=="undefined"?settings:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}