'use strict'
/* global */
window.jQuery.getJSON('examples/impactful_content_card/impactful_content_card.json', function (data) {
  window.bauerSharedLibs.pug.render('impactful_content_card/impactful_content_card.pug', data, '.impactful-content-card')
})
