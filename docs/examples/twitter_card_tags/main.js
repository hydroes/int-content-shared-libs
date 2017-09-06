'use strict'
/* global */
window.jQuery.getJSON('examples/twitter_card_tags/twitter_cards_tags.json', function (json) {
  window.bauerSharedLibs.pug.render('twitter_card_tags/twitter_card_tags.pug', json, '.twitter-card-tags-image', true)
  .done(function () {
    delete json.data.image
    window.bauerSharedLibs.pug.render('twitter_card_tags/twitter_card_tags.pug', json, '.twitter-card-tags', true)
  })
})
