'use strict'

window.jQuery.getJSON('examples/embeds/vimeo/embeds_vimeo.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/vimeo/embeds_vimeo.pug', data, '#embeds-vimeo')
})
