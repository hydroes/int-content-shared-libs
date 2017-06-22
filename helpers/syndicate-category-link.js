'use strict'
/* global dust */

dust.helpers.syndicateCategoryLink = function (chunk, context, bodies, params) {
  var article = context.resolve(params.article)
  var channel = context.resolve(params.channel)
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
            // /{params.channel}/{categories[0].parent.furl}/{categories[0].furl}/
      return '/' + channel + '/' + article.categories[n].parent.furl + '/' +
        article.categories[n].furl + '/'
    }
  }

    // var categoryId = article.composed.categories[article.primarySyndicatePosition];

    // for (var n in article.categories) {
    //     if (article.categories[n]._id === categoryId) {
    //         // /{params.channel}/{categories[0].parent.furl}/{categories[0].furl}/
    //         return '/' + channel + '/' + article.categories[n].parent.furl + '/'
    //             + article.categories[n].furl + '/';

    //     }
    // }
}
