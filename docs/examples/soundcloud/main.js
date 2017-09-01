'use strict'

window.jQuery.getJSON('examples/soundcloud/soundcloud.json', function (data) {
  window.bauerSharedLibs.pug.render('soundcloud/soundcloud.pug', data, '#embeds-soundcloud')
})
