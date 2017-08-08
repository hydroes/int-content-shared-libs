'use strict'

window.jQuery.getJSON('examples/embeds/brightcove/embeds_brightcove.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/brightcove/embeds_brightcove.pug', data, '#embeds-brightcove')
})
