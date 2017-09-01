'use strict'

window.jQuery.getJSON('examples/audioboom/embeds_audioboom.json', function (data) {
  window.bauerSharedLibs.pug.render('audioboom/embeds_audioboom.pug', data, '#embeds-audioboom')
})
