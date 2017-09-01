'use strict'

window.jQuery.getJSON('examples/vimeo/vimeo.json', function (data) {
  window.bauerSharedLibs.pug.render('vimeo/vimeo.pug', data, '#embeds-vimeo')
})
