'use strict'

window.jQuery.getJSON('examples/soundcloud/embeds_soundcloud.json', function (data) {
  window.bauerSharedLibs.pug.render('soundcloud/embeds_soundcloud.pug', data, '#embeds-soundcloud')
})
