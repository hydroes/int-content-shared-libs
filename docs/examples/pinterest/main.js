'use strict'

window.jQuery.getJSON('examples/pinterest/pinterest.json', function (data) {
  window.bauerSharedLibs.pug.render('pinterest/pinterest.pug', data, '.pinterest-rich-pin')
})
