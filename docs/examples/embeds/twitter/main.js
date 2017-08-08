'use strict'
window.jQuery.getJSON('examples/embeds/twitter/embeds_twitter.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/twitter/embeds_twitter.pug', data, '#embeds-twitter')
})
