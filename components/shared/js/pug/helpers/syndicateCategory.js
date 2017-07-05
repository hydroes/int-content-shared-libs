'use strict'

module.exports = function (data) {
  data = data || {}
  var article = data || false
  var channel = data.channel || ''
  var displayField = data.displayField || 'name'
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
      if (displayField === 'parent') {
        return article.categories[n]['parent']['name']
      }
      return article.categories[n][displayField]
    }
  }
  return ''
}
