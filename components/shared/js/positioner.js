'use strict'
/* global $ */
// Equal height columns on article grid / Equal height related station album art
var refArts = [
  '.grid.home-latest article.content__card__small:nth-child(1)',
  '.grid.lander-main article.content__card__small:nth-child(1)',
  '.grid.listen-again-featured article.content__card__small:nth-child(1)'
]
var tarArts = [
  '.grid.home-latest article.content__card__small:nth-child(2)',
  '.grid.lander-main article.content__card__small:nth-child(2)',
  '.grid.listen-again-featured article.content__card__small:nth-child(2)'
]

var $win = null
var resizeTimeout = null
var delay = 100
var resizeInterval = null

/**
 * LESLIE TODO - Sanity check this still resizes, or find an alternative solution
 */

var init = function (win) {
  $win = $(win)

  $win.on('load', function () {
    resizeAll()
    clearInterval(resizeInterval)
  })
    // keep trying to resize until page load to avoid resize delay due to slow resources
  resizeInterval = setInterval(resizeAll, delay)

    // resize throttling
  $win.on('resize', function () {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(resizeAll, delay)
  })
}

function resizeAll () {
  for (var i = 0; i < refArts.length; i++) {
    adjustArticleHeight(refArts[i], tarArts[i])
  }
}

function adjustArticleHeight (referenceArticle, targetArticle) {
  var referenceArticle = $(referenceArticle) // eslint-disable-line
  if (referenceArticle.length > 0) {
    var height = referenceArticle.height()
    $(targetArticle).height(height)
  }
}

module.exports = init
