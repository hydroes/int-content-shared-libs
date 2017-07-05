function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function partials_large_card_image(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, settings, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
if (data.cardImage) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
var imgCdn = window.bauerSharedLibs.pug.helpers.imgCdn
var imageCdnData = {
	asset: data.imageData.image,
	width: 305,
	devicePixelRatio: 2,
	cropType: data.heroImageThumbLandscape,
	cropData: data.heroImageThumbLandscape,
	ratio: '16-9',
	resizeStyle: 'aspectfill',
	quality: '50'
}
var imageCdnSettings = {
	protocol: data.protocol,
	imageDomain: data.imageDomain,
	imageQuality: data.imageQuality
}

var img = imgCdn(imageCdnData, imageCdnSettings)

;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", data.imageData.image.mimeType, true, false)+pug_attr("srcset", img, true, false)+" media=\"max-width: 480px\"") + "\u002F\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("alt", data.title, true, false)+pug_attr("title", data.title, true, false)+pug_attr("srcset", img, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
if (settings.stationHeaderLogoSVG) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image brand-background-color\""+pug_attr("style", pug_style("background-image: url('"+ data.stationHeaderLogoSVG + "')"), true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", data.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", data.placeholderAltText, true, false)+pug_attr("alt", data.placeholderAltText, true, false)+pug_attr("srcset", data.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image missing-image--hub\""+pug_attr("style", pug_style("background-image: url('"+ data.missingHubImage + "')"), true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", data.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", data.placeholderAltText, true, false)+pug_attr("alt", data.placeholderAltText, true, false)+pug_attr("srcset", data.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
}}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"settings" in locals_for_with?locals_for_with.settings:typeof settings!=="undefined"?settings:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}