function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function pagination_pagination(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_mixins["pagination"] = pug_interp = function(paginateData){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
let prev = paginateData.page
let main = {
  limit : 7,
  current: paginateData.page,
  totalPages: paginateData.totalPages,
  next: paginateData.nextPage,
  path: data.path,
  parsePath : (current, path) => current === 1 ? path : path + current,
  getNextPagination : current => current + main.limit,
  isAtLimit : current => (current + main.limit) >= main.totalPages,
  counterOffset : () => main.totalPages - main.limit,
  isActive : isThisPage => isThisPage === main.current ? 'pagination__link--active' : 'pagination__link',
}

;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cul class=\"pagination\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
let counter = data.metadata.page
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
let numbers = main.getNextPagination(main.current)
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
if (main.current > 1) {
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"pagination__link\""+pug_attr("href", main.parsePath(--prev, main.path), true, false)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "&lt;\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
if (main.current > 10) {
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"pagination__link\""+pug_attr("href", main.parsePath(1, main.path), true, false)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "1\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
if (main.isAtLimit(main.current)) {
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
let limitCounter = main.counterOffset()
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
while (limitCounter < main.totalPages) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([main.isActive(limitCounter)], [true]), false, false)+pug_attr("href", main.parsePath(limitCounter, main.path), true, false)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = limitCounter++) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
}
else {
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
while (counter <= numbers) {
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([main.isActive(counter)], [true]), false, false)+pug_attr("href", main.parsePath(counter, main.path), true, false)) + "\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = counter++) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
}
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([main.isActive(main.totalPages)], [true]), false, false)+pug_attr("href", main.parsePath(main.totalPages, main.path), true, false)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = main.totalPages) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
if (main.current < main.totalPages) {
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"pagination__link\""+pug_attr("href", main.parsePath(main.next, main.path), true, false)) + "\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fmixins\u002Fpaginate.pug";
pug_html = pug_html + "&gt;\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fpagination\u002Fpagination.pug";
pug_mixins["pagination"](data.metadata);}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}