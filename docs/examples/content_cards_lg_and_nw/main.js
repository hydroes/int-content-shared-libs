'use strict'
/* global jQuery */
window.jQuery.noConflict()

jQuery.when(jQuery.getJSON('examples/content_cards_lg_and_nw/content_cards_lg_and_nw.json')).done(function (data) {
  var pug = window.bauerSharedLibs.pug
  pug.render('content_cards_lg_and_nw/content_cards_lg_and_nw.pug', data, '#content-cards-lg-nw')
})
