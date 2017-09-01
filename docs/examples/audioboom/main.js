'use strict'

window.jQuery.getJSON('examples/audioboom/audioboom.json', function (data) {
  window.bauerSharedLibs.pug.render('audioboom/audioboom.pug', data, '#embeds-audioboom')
})
