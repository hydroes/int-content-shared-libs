'use strict'

module.exports = function (data) {
  data = data || {}
  var article = data.article || false
  var channel = data.channel
  var displaySyndicate = data.displaySyndicate || false
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
}
