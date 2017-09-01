function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function pagination_pagination(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data, window) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
let pages = window.bauerSharedLibs.pug.helpers.paginate(data)
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + "\u003Cul class=\"pagination\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
// iterate pages
;(function(){
  var $$obj = pages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var page = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([page.isActive ? 'pagination__link--active' : 'pagination__link'], [true]), false, false)+pug_attr("href", page.href, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = page.display) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var page = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([page.isActive ? 'pagination__link--active' : 'pagination__link'], [true]), false, false)+pug_attr("href", page.href, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fbriangouwsadmin\u002Fworkspace\u002Fint-content-shared-libs\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = page.display) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"window" in locals_for_with?locals_for_with.window:typeof window!=="undefined"?window:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}