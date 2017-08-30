'use strict'

window.jQuery.getJSON('examples/instagram/embeds_instagram.json', function (data) {
  window.bauerSharedLibs.pug.render('instagram/embeds_instagram.pug', data, '#embeds-instagram')
})
