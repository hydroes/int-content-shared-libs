'use strict'

window.jQuery.getJSON('examples/social_sharing/social_sharing.json', function (data) {
  window.bauerSharedLibs.pug.render('social_sharing/social_sharing.pug', data, '#social-sharing')
})
