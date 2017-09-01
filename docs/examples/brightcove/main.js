'use strict'

window.jQuery.getJSON('examples/brightcove/brightcove.json', function (data) {
  window.bauerSharedLibs.pug.render('brightcove/brightcove.pug', data, '#embeds-brightcove')
})
