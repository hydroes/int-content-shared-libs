'use strict'

window.jQuery.getJSON('examples/embeds/audioboom/embeds_audioboom.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/audioboom/embeds_audioboom.pug', data, '#embeds-audioboom')
})
