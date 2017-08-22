'use strict'

window.jQuery.getJSON('examples/image/image.json', function (data) {
  window.bauerSharedLibs.pug.render('image/image.pug', data, '#image')
})
