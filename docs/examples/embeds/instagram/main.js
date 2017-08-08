'use strict'

window.jQuery.getJSON('examples/embeds/instagram/embeds_instagram.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/instagram/embeds_instagram.pug', data, '#embeds-instagram')
})
