/**
 * @param data JSON returned from PR API
 * @returns information relevant to `syndicateCategory` and `syndicateCategoryLink` helpers
 * @see syndicateCategory
 * @see syndicateCategoryLink
 */
module.exports = function (data) {
  return {
    displaySyndicate: data.displaySyndicate,
    article: {
      primarySyndicatePosition: data.primarySyndicatePosition,
      composed: data.composed,
      publications: data.publications,
      categories: data.categories
    }
  }
}
