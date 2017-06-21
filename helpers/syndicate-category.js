'use strict'
/* global dust */

dust.helpers.syndicateCategory = function (chunk, context, bodies, params) {
  var article = context.resolve(params.article)
  var channel = context.resolve(params.channel)
  var displayField = context.resolve(params.displayField) || 'name'
  var displaySyndicate = context.resolve(params.displaySyndicate) || false

    // Logic flow:
    // find the publication position for the given category (publications)
    // use position in composed.categories to get the category id
    // display the category with the id found in categories

  if (!article || !article.publications) {
    return ''
  }

  var categoryId

  if (displaySyndicate === true) {
    categoryId = article.composed.categories[article.primarySyndicatePosition]
  } else {
    var publicationPos = false
    for (var n in article.publications) {
      if (channel === article.publications[n].furl) {
        publicationPos = n
      }
    }
    categoryId = article.composed.categories[publicationPos]
  }

  for (var n in article.categories) { // eslint-disable-line
    if (article.categories[n]._id === categoryId) {
      if (displayField === 'parent') {
        return article.categories[n]['parent']['name']
      }
      return article.categories[n][displayField]
    }
  }

  return ''
}
