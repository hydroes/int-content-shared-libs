function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function image_image(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
let altText = null
if (!data.altText) {
  altText = data.title
} else {
  altText = data.altText
}
let images = data.images || []
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Cpicture class=\"image\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
if (images.length > 0) {
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
// iterate images
;(function(){
  var $$obj = images;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var image = $$obj[pug_index0];
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("media", `(max-width: ${image.maxWidth}px)`, true, false)+pug_attr("srcset", image.path, true, false)) + "\u002F\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var image = $$obj[pug_index0];
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Csource" + (pug_attr("media", `(max-width: ${image.maxWidth}px)`, true, false)+pug_attr("srcset", image.path, true, false)) + "\u002F\u003E";
    }
  }
}).call(this);

}
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", data.defaultImage.path, true, false)+pug_attr("alt", altText, true, false)+pug_attr("title", altText, true, false)) + "\u002F\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Cspan class=\"image__text\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
if (data.caption) {
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Cspan class=\"image__text__credit\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.credits + ' ') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
if (data.caption) {
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "\u003Cspan class=\"image__text__caption\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + "&copy; ";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fimage\u002Fimage.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.caption) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fpicture\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}