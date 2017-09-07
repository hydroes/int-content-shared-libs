'use strict'
/* global */
window.jQuery.getJSON('examples/article_tags/article_tags.json', function (data) {
  window.bauerSharedLibs.pug.render('article_tags/article_tags.pug', data, '.article-tags')
})
