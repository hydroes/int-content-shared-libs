'use strict'
window.jQuery.getJSON('examples/twitter/twitter.json', function (data) {
  window.bauerSharedLibs.pug.render('twitter/twitter.pug', data, '#embeds-twitter')
})
