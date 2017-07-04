'use strict'

module.exports = function (data) {
  var article = data.article
  var channel = data.channel

  return '/' +
        channel +
        '/' +
        article.categories[0].parent.furl +
        '/' +
        article.categories[0].furl +
        '/' +
        article.url
}
