'use strict'
window.jQuery.getJSON('examples/youtube/embeds_youtube.json', function (data) {
  window.bauerSharedLibs.pug.render('youtube/embeds_youtube.pug', data, '#embeds-youtube')
})
