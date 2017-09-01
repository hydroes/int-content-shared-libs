'use strict'

window.jQuery.getJSON('examples/instagram/instagram.json', function (data) {
  window.bauerSharedLibs.pug.render('instagram/instagram.pug', data, '#embeds-instagram')
})
