'use strict'

window.jQuery.getJSON('examples/embeds/giphy/embeds_giphy.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/giphy/embeds_giphy.pug', data, '#embeds-giphy')
})
