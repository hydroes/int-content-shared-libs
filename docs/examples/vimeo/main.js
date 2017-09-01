'use strict'

window.jQuery.getJSON('examples/vimeo/embeds_vimeo.json', function (data) {
  window.bauerSharedLibs.pug.render('vimeo/embeds_vimeo.pug', data, '#embeds-vimeo')
})
