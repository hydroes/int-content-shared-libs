function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function og_tags_og_tags(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_default.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:site_name\""+pug_attr("content", data.site_name, true, false)) + "\u002F\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_default.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", data.type, true, false)) + "\u002F\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_default.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", data.url, true, false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_default.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", data.description, true, false)) + "\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_default.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", data.title, true, false)) + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_default.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:locale\""+pug_attr("content", data.locale, true, false)) + "\u002F\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fog_tags\u002Fog_tags.pug";
if (data.image) {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", data.image.url, true, false)) + "\u002F\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
if (data.image.secure_url) {
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:secure_url\""+pug_attr("content", data.image.secure_url, true, false)) + "\u002F\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
if (data.image.url.startsWith('https')) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:secure_url\""+pug_attr("content", data.image.url, true, false)) + "\u002F\u003E";
}
}
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", data.image.width, true, false)) + "\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", data.image.height, true, false)) + "\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_image.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", data.image.type, true, false)) + "\u002F\u003E";
}
else {
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fog_tags\u002Fog_tags.pug";
if (data.video) {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video\""+pug_attr("content", data.video.url, true, false)) + "\u002F\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
if (data.video.secure_url) {
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video:secure_url\""+pug_attr("content", data.video.secure_url, true, false)) + "\u002F\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
if (data.video.url.startsWith('https')) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video:secure_url\""+pug_attr("content", data.video.url, true, false)) + "\u002F\u003E";
}
}
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video:type\""+pug_attr("content", data.video.type, true, false)) + "\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video:width\""+pug_attr("content", data.video.height, true, false)) + "\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video:width\""+pug_attr("content", data.video.width, true, false)) + "\u002F\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_video.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", data.video.imageUrl, true, false)) + "\u002F\u003E";
}
}
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fog_tags\u002Fog_tags.pug";
if (data.article) {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_article.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"article:published_time\""+pug_attr("content", data.article.published_time, true, false)) + "\u002F\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fog_tags\u002Fog_tags_article.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"article:author\""+pug_attr("content", data.article.author, true, false)) + "\u002F\u003E";
}}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}