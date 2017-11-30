'use strict';
/* global */

window.jQuery.getJSON('examples/large_content_card/large_content_card.json', function (data) {
  window.bauerSharedLibs.pug.render('large_content_card/large_content_card.pug', data, '.large-content-card');
});
//# sourceMappingURL=main.js.map
