'use strict'

window.jQuery.getJSON('examples/content_cards_sm_3/content_cards_sm_3.json', function (data) {
  window.bauerSharedLibs.pug.render('content_cards_sm_3/content_cards_sm_3.pug', data, '#content-cards-sm-3')
})
