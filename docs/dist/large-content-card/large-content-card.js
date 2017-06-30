function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function large-content-card_large-content-card(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, imgCdn, primarySyndicate, settings, syndicateCategoryLink, title, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FprimarySyndicate.pug";







;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
var primarySyndicateData = {
	channel: settings.channel,
	urls: data.syndicateUrls
}

;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
pug_html = pug_html + "\u003Carticle\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
pug_html = pug_html + "\u003Cdiv class=\"large-content-card\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
if ((data.primarySyndicatePosition != '')) {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"large-content-card__link\""+pug_attr("href", +primarySyndicate(primarySyndicateData), true, false)) + "\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FimgCdn.pug";







;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
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

;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
if (data.cardImage) {
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", data.cardImage.image.mimeType, true, false)+pug_attr("srcset", +imgCdn(imageCdnData, imageCdnSettings), true, false)+" media=\"max-width: 480px\"") + "\u002F\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("alt", data.title, true, false)+pug_attr("title", data.title, true, false)+pug_attr("srcset", +imgCdn(imageCdnData, imageCdnSettings), true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
if (settings.stationHeaderLogoSVG) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cpicture class=\"missing-image brand-background-color\" style=\"background-image: url('#{settings.stationHeaderLogoSVG}');\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", settings.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", settings.placeholderAltText, true, false)+pug_attr("alt", settings.placeholderAltText, true, false)+pug_attr("srcset", settings.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cpicture class=\"missing-image missing-image--hub\" style=\"background-image: url('#{settings.missingHubImage}');\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", settings.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", settings.placeholderAltText, true, false)+pug_attr("alt", settings.placeholderAltText, true, false)+pug_attr("srcset", settings.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
pug_html = pug_html + "\u003Cdiv class=\"large-content-card__info\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FprimarySyndicate.pug";







;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
var primarySyndicateData = {
	channel: settings.channel,
	urls: data.syndicateUrls
}

;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
if (data) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Cspan class=\"title\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", +primarySyndicate(primarySyndicateData), true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_mixins["relativeTimeUTC"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
var relativeTimeUTC = window.bauerSharedLibs.pug.mixins.relativeTimeUTC(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = relativeTimeUTC) ? "" : pug_interp));
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategory.pug";







;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategoryLink.pug";







;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
var syndicateCategoryLinkData = {
    article: data.article,
    channel: settings.channel,
    displaySyndicate: data.displaySyndicate
}

var syndicateCategoryData = {
    article: data.article,
    channel: settings.channel,
    displaySyndicate: data.displaySyndicate,
    displayField: 'name'
}

;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
if (data.primarySyndicatePosition != '') {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", +syndicateCategoryLink(syndicateCategoryLinkData), true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "+syndicateCategory(syndicateCategoryData)\u003C\u002Fa\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
if (data.lastModifiedAt) {
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.lastModifiedAt);
}
else {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.publicationDate);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", '/'+data.syndicateUrls+'/', true, false)) + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "data.categories[0].name\u003C\u002Fa\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
if (data.lastModifiedAt) {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.lastModifiedAt);
}
else {
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.publicationDate);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
pug_html = pug_html + "\u003Ca class=\"large-content-card__link\" href=\"\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FimgCdn.pug";







;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
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

;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
if (data.cardImage) {
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", data.cardImage.image.mimeType, true, false)+pug_attr("srcset", +imgCdn(imageCdnData, imageCdnSettings), true, false)+" media=\"max-width: 480px\"") + "\u002F\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Flarge-card-image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("alt", data.title, true, false)+pug_attr("title", data.title, true, false)+pug_attr("srcset", +imgCdn(imageCdnData, imageCdnSettings), true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
if (settings.stationHeaderLogoSVG) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cpicture class=\"missing-image brand-background-color\" style=\"background-image: url('#{settings.stationHeaderLogoSVG}');\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", settings.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", settings.placeholderAltText, true, false)+pug_attr("alt", settings.placeholderAltText, true, false)+pug_attr("srcset", settings.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cpicture class=\"missing-image missing-image--hub\" style=\"background-image: url('#{settings.missingHubImage}');\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Csource" + (" type=\"\""+pug_attr("srcset", settings.placeholderImage, true, false)+" media=\"(min-width: 439px\"") + "\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard-no-image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("title", settings.placeholderAltText, true, false)+pug_attr("alt", settings.placeholderAltText, true, false)+pug_attr("srcset", settings.placeholderImageSmall, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Flarge-content-card\u002Flarge-content-card.pug";
pug_html = pug_html + "\u003Cdiv class=\"large-content-card__info\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FprimarySyndicate.pug";







;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
var primarySyndicateData = {
	channel: settings.channel,
	urls: data.syndicateUrls
}

;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
if (data) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Cspan class=\"title\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", +primarySyndicate(primarySyndicateData), true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_mixins["relativeTimeUTC"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
var relativeTimeUTC = window.bauerSharedLibs.pug.mixins.relativeTimeUTC(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FrelativeTimeUTC.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = relativeTimeUTC) ? "" : pug_interp));
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategory.pug";







;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fmixins\u002FsyndicateCategoryLink.pug";







;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
var syndicateCategoryLinkData = {
    article: data.article,
    channel: settings.channel,
    displaySyndicate: data.displaySyndicate
}

var syndicateCategoryData = {
    article: data.article,
    channel: settings.channel,
    displaySyndicate: data.displaySyndicate,
    displayField: 'name'
}

;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
if (data.primarySyndicatePosition != '') {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", +syndicateCategoryLink(syndicateCategoryLinkData), true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "+syndicateCategory(syndicateCategoryData)\u003C\u002Fa\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
if (data.lastModifiedAt) {
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.lastModifiedAt);
}
else {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.publicationDate);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", '/'+data.syndicateUrls+'/', true, false)) + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_html = pug_html + "data.categories[0].name\u003C\u002Fa\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
if (data.lastModifiedAt) {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.lastModifiedAt);
}
else {
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Frosspickerill\u002FDocuments\u002FGit\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate-time.pug";
pug_mixins["relativeTimeUTC"](data.publicationDate);
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"imgCdn" in locals_for_with?locals_for_with.imgCdn:typeof imgCdn!=="undefined"?imgCdn:undefined,"primarySyndicate" in locals_for_with?locals_for_with.primarySyndicate:typeof primarySyndicate!=="undefined"?primarySyndicate:undefined,"settings" in locals_for_with?locals_for_with.settings:typeof settings!=="undefined"?settings:undefined,"syndicateCategoryLink" in locals_for_with?locals_for_with.syndicateCategoryLink:typeof syndicateCategoryLink!=="undefined"?syndicateCategoryLink:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}