'use strict'

window.jQuery.getJSON('examples/facebook/embeds_facebook.json', function (data) {
  window.bauerSharedLibs.pug.render('facebook/embeds_facebook.pug', data, '#embeds-facebook')
})
