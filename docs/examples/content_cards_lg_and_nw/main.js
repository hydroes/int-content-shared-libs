'use strict'

window.jQuery.getJSON('examples/content_cards_lg_and_nw/content_cards_lg_and_nw.json', function (data) {
  window.bauerSharedLibs.pug.render('content_cards_lg_and_nw/content_cards_lg_and_nw.pug', data, '#content-cards-lg-nw')
})
