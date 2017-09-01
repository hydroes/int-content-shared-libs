'use strict'

window.jQuery.getJSON('examples/facebook/facebook.json', function (data) {
  window.bauerSharedLibs.pug.render('facebook/facebook.pug', data, '#embeds-facebook')
})
