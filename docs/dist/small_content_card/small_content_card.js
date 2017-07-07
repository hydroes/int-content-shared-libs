function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function small_content_card_small_content_card(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (category, date, image, images, noImage, title, url) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Carticle class=\"small-content-card container\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + " ";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"tile-style row\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"img-container col-xs-4 col-sm-12\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + " ";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
if (images) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", images.xs.mimeType, true, false)+pug_attr("srcset", images.xs.url, true, false)+" media=\"(max-width: 480px)\"") + "\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", images.sm.url, true, false)+pug_attr("alt", images.altText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image brand-background-color\""+pug_attr("style", pug_style({
    'background-image' : 'url('+noImage.sm+')'
    }), true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("srcset", noImage.sm.url, true, false)+" media=\"(max-width: 439px)\"") + "\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", noImage.lg.url, true, false)+pug_attr("alt", image.altText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"small-content-card__info col-xs-8 col-sm-12\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Cspan class=\"title\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"hidden-xs\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_date_time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_date_time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", category.url, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_date_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_date_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E";}.call(this,"category" in locals_for_with?locals_for_with.category:typeof category!=="undefined"?category:undefined,"date" in locals_for_with?locals_for_with.date:typeof date!=="undefined"?date:undefined,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined,"images" in locals_for_with?locals_for_with.images:typeof images!=="undefined"?images:undefined,"noImage" in locals_for_with?locals_for_with.noImage:typeof noImage!=="undefined"?noImage:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}