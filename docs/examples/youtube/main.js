'use strict'
window.jQuery.getJSON('examples/youtube/youtube.json', function (data) {
  window.bauerSharedLibs.pug.render('youtube/youtube.pug', data, '#embeds-youtube')
})
