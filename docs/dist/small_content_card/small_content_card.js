function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function small_content_card_small_content_card(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Carticle class=\"small-content-card container\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + " ";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"tile-style row\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
var linkData = {
  channel: data.channel,
  urls: data.urls
}
var primaryLink = window.bauerSharedLibs.pug.helpers.primarySyndicate(linkData)

;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
if (!data.primarySyndicatePosition.length) {
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"img-container col-xs-4 col-sm-12\""+pug_attr("href", primaryLink, true, false)) + "\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
if (data.asset) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
var imageConfig = {
  data: {
    small: {
      asset: data.asset,
      width: 120,
      devicePixelRatio: 2,
      cropType: data.heroImageThumbLandscape,
      cropData: data.heroImageThumbLandscape,
      ratio: '1-1',
      resizeStyle: 'aspectfill',
      quality: '50'
    },
    standard: {
      asset: data.asset,
      width: 600,
      devicePixelRatio: 2,
      cropType: data.heroImageThumbLandscape,
      cropData: data.heroImageThumbLandscape,
      ratio: '16-9',
      resizeStyle: 'aspectfill',
      quality: '50'
    }
  },
  settings: {
    protocol: data.protocol,
    imageDomain: data.imageDomain,
    imageQuality: data.imageQuality
  }
}
var imgCdn = window.bauerSharedLibs.pug.helpers.imgCdn,
imgXs = imgCdn(imageConfig.data.small,imageConfig.settings),
imgSm = imgCdn(imageConfig.data.standard,imageConfig.settings)
    
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", data.asset.image.mimeType, true, false)+pug_attr("srcset", imgXs, true, false)+" media=\"(max-width: 480px)\"") + "\u002F\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", imgSm, true, false)+pug_attr("alt", data.asset.altText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
if (data.stationHeaderLogoSVG) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image brand-background-color\""+pug_attr("style", pug_style({
            'background-image' : 'url('+data.stationHeaderLogoSVG+')'
        }), true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("srcset", data.placeholderImage, true, false)+" media=\"(min-width: 439px)\"") + "\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", data.placeholderImageSmall, true, false)+pug_attr("alt", data.placeholderAltText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image missing-image--hub\""+pug_attr("style", pug_style({
            'background-image': 'url('+data.missingHubImage+')'
        }), true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("srcset", data.placeholderImage, true, false)+" media=\"(min-width: 439px)\"") + "\u002F\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", data.placeholderImageSmall, true, false)+pug_attr("alt", data.placeholderAltText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"small-content-card__info col-xs-8 col-sm-12\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Cspan class=\"title\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
var url = window.bauerSharedLibs.pug.helpers.primarySyndicate(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (data.primarySyndicatePosition) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var helpers = window.bauerSharedLibs.pug.helpers,
categoryData = helpers.getCategoryConfig(data),
url = helpers.syndicateCategoryLink(categoryData),
category = helpers.syndicateCategory(categoryData)
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var url = data.urls[0],
category = data.categories[0].name,
syndicateTime =  window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data.lastModifiedAt)
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp));
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + " \u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = syndicateTime) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
var primaryLink = window.bauerSharedLibs.pug.helpers.syndicateCategoryLink(data)
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"img-container col-xs-8 col-sm-12\""+pug_attr("href", primaryLink, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + " ";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
if (data.asset) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
var imageConfig = {
  data: {
    small: {
      asset: data.asset,
      width: 120,
      devicePixelRatio: 2,
      cropType: data.heroImageThumbLandscape,
      cropData: data.heroImageThumbLandscape,
      ratio: '1-1',
      resizeStyle: 'aspectfill',
      quality: '50'
    },
    standard: {
      asset: data.asset,
      width: 600,
      devicePixelRatio: 2,
      cropType: data.heroImageThumbLandscape,
      cropData: data.heroImageThumbLandscape,
      ratio: '16-9',
      resizeStyle: 'aspectfill',
      quality: '50'
    }
  },
  settings: {
    protocol: data.protocol,
    imageDomain: data.imageDomain,
    imageQuality: data.imageQuality
  }
}
var imgCdn = window.bauerSharedLibs.pug.helpers.imgCdn,
imgXs = imgCdn(imageConfig.data.small,imageConfig.settings),
imgSm = imgCdn(imageConfig.data.standard,imageConfig.settings)
    
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Cpicture\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("type", data.asset.image.mimeType, true, false)+pug_attr("srcset", imgXs, true, false)+" media=\"(max-width: 480px)\"") + "\u002F\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsmall_card_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", imgSm, true, false)+pug_attr("alt", data.asset.altText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
if (data.stationHeaderLogoSVG) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image brand-background-color\""+pug_attr("style", pug_style({
            'background-image' : 'url('+data.stationHeaderLogoSVG+')'
        }), true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("srcset", data.placeholderImage, true, false)+" media=\"(min-width: 439px)\"") + "\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", data.placeholderImageSmall, true, false)+pug_attr("alt", data.placeholderAltText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
else {
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cpicture" + (" class=\"missing-image missing-image--hub\""+pug_attr("style", pug_style({
            'background-image': 'url('+data.missingHubImage+')'
        }), true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("srcset", data.placeholderImage, true, false)+" media=\"(min-width: 439px)\"") + "\u002F\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fcard_no_image.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", data.placeholderImageSmall, true, false)+pug_attr("alt", data.placeholderAltText, true, false)) + "\u002F\u003E\u003C\u002Fpicture\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"small-content-card__info col-xs-8 col-sm-12\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Cspan class=\"title\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
var url = window.bauerSharedLibs.pug.helpers.primarySyndicate(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Ftitle.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fsmall_content_card\u002Fsmall_content_card.pug";
pug_html = pug_html + "\u003Cdiv class=\"hidden-xs\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Cspan class=\"hidden-xs modified-container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
if (data.primarySyndicatePosition) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var helpers = window.bauerSharedLibs.pug.helpers,
categoryData = helpers.getCategoryConfig(data),
url = helpers.syndicateCategoryLink(categoryData),
category = helpers.syndicateCategory(categoryData)
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
var url = data.urls[0],
category = data.categories[0].name,
syndicateTime =  window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data.lastModifiedAt)
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"brand-color\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = category) ? "" : pug_interp));
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + " \u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fjordanpaisleyadmin\u002FDocuments\u002Fgit-repos\u002Fint-content-shared-libs\u002Fcomponents\u002Fpartials\u002Fsyndicate_time.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = syndicateTime) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Farticle\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}