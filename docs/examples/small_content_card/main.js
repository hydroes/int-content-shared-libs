'use strict'
/* global */
window.jQuery.getJSON('examples/small_content_card/small_content_card.json', function (data) {
  window.bauerSharedLibs.pug.render('small_content_card/small_content_card.pug', data, '.content-card-small')
})
