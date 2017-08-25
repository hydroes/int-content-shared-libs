'use strict'
/* global */
window.jQuery.getJSON('examples/og_tags/og_tags.json', function (json) {
  window.bauerSharedLibs.pug.render('og_tags/og_tags.pug', json, '.og-tags-image', true)
  .done(function () {
    delete json.data.image
    window.bauerSharedLibs.pug.render('og_tags/og_tags.pug', json, '.og-tags-video', true)
    .done(function () {
      delete json.data.video
      window.bauerSharedLibs.pug.render('og_tags/og_tags.pug', json, '.og-tags', true)
    })
  })
})
