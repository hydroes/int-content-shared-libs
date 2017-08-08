'use strict'

window.jQuery.getJSON('examples/embeds/soundcloud/embeds_soundcloud.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/soundcloud/embeds_soundcloud.pug', data, '#embeds-soundcloud')
})
