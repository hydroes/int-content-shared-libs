'use strict'
window.jQuery.getJSON('examples/twitter/embeds_twitter.json', function (data) {
  window.bauerSharedLibs.pug.render('twitter/embeds_twitter.pug', data, '#embeds-twitter')
})
