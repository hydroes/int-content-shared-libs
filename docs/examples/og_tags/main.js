'use strict'
/* global */
window.jQuery.getJSON('examples/og_tags/og_tags.json', function (json) {
  var pug = window.bauerSharedLibs.pug
  var tagsTemplate = 'og_tags/og_tags.pug'

  var $imgOG = function () {
    return pug.render(tagsTemplate, json, '.og-tags-image', true)
  }
  var $vidOG = function (data) {
    delete json.data.image
    return pug.render(tagsTemplate, json, '.og-tags-video', true)
  }
  var $NoMediaOG = function () {
    delete json.data.video
    return pug.render(tagsTemplate, json, '.og-tags-no-hero', true)
  }
  var $stdOG = function () {
    delete json.data.article
    return pug.render(tagsTemplate, json, '.og-tags', true)
  }

  $imgOG()
    .done($vidOG)
    .done($NoMediaOG)
    .done($stdOG)
})
