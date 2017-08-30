'use strict'

window.jQuery.getJSON('examples/giphy/embeds_giphy.json', function (data) {
  window.bauerSharedLibs.pug.render('giphy/embeds_giphy.pug', data, '#embeds-giphy')
})
