'use strict'

window.jQuery.getJSON('examples/brightcove/embeds_brightcove.json', function (data) {
  window.bauerSharedLibs.pug.render('brightcove/embeds_brightcove.pug', data, '#embeds-brightcove')
})
