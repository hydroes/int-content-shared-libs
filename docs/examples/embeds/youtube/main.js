'use strict'
window.jQuery.getJSON('examples/embeds/youtube/embeds_youtube.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/youtube/embeds_youtube.pug', data, '#embeds-youtube')
})
