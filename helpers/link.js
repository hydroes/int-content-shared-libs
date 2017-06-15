'use strict'
/* global dust */
dust.helpers.link = function (chunk, context, bodies, params) {
  var article = context.resolve(params.article)
  var channel = context.resolve(params.channel) // Now explictly passing channel

  return '/' +
        channel +
        '/' +
        article.categories[0].parent.furl +
        '/' +
        article.categories[0].furl +
        '/' +
        article.furl
}
