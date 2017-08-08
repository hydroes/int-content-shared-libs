'use strict'

window.jQuery.getJSON('examples/hero_image/hero_image.json', function (data) {
  window.bauerSharedLibs.pug.render('hero_image/hero_image.pug', data, '#hero-image')
})
