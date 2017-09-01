'use strict'

window.jQuery.getJSON('examples/giphy/giphy.json', function (data) {
  window.bauerSharedLibs.pug.render('giphy/giphy.pug', data, '#embeds-giphy')
})
