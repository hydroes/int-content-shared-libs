'use strict'

window.jQuery.getJSON('examples/embeds/facebook/embeds_facebook.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/facebook/embeds_facebook.pug', data, '#embeds-facebook')
})
