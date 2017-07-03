function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function partials_large_card_image(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, imgCdn, settings) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FimgCdn.pug";







;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
var imageCdnData = {
	asset: data.cardImage.image,
	width: 305,
	devicePixelRatio: 2,
	cropType: data.heroImageThumbLandscape,
	cropData: data.heroImageThumbLandscape,
	ratio: '16-9',
	resizeStyle: 'aspectfill',
	quality: '50'
}
var imageCdnSettings = {
	protocol: settings.protocol,
	domain: settings.imageDomain,
    quality: settings.imageQuality
}

var img = imgCdn(imageCdnData, imageCdnSettings)

;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
if (data.cardImage) {
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", data.cardImage.image.mimeType, true, false)+pug_attr("srcset", img, true, false)+" media=\"max-width: 480px\"") + "\u002F\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge_card_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("alt", data.title, true, false)+pug_attr("title", data.title, true, false)+pug_attr("srcset", img, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
if (settings.stationHeaderLogoSVG) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture class=\"missing-image brand-background-color\" style=\"background-image: url('#{settings.stationHeaderLogoSVG}');\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", settings.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", settings.placeholderAltText, true, false)+pug_attr("alt", settings.placeholderAltText, true, false)+pug_attr("srcset", settings.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture class=\"missing-image missing-image--hub\" style=\"background-image: url('#{settings.missingHubImage}');\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", settings.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", settings.placeholderAltText, true, false)+pug_attr("alt", settings.placeholderAltText, true, false)+pug_attr("srcset", settings.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
}}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"imgCdn" in locals_for_with?locals_for_with.imgCdn:typeof imgCdn!=="undefined"?imgCdn:undefined,"settings" in locals_for_with?locals_for_with.settings:typeof settings!=="undefined"?settings:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}