'use strict'

window.jQuery.getJSON('examples/content_cards_md_4/content_cards_md_4.json', function (data) {
  window.bauerSharedLibs.pug.render('content_cards_md_4/content_cards_md_4.pug', data, '#content-cards-sm-3')
})
