/* globals describe, it */
var assert = require('assert')
var giphyHelper = require('../../../../dist/component_helpers/giphy').default

describe('Giphy url helper', function () {
  describe('Not convert correctly given url', function () {
    it('should not convert url when it is given as expected', function () {
      assert.equal('https://giphy.com/embed/xT0BKmj2QTGoVI51Hq', giphyHelper('https://giphy.com/embed/xT0BKmj2QTGoVI51Hq'))
    })
  })

  describe('Convert dirty url formats', function () {
    it('should convert https://giphy.com/gifs/string_description-xGIPHYID to /embed/GIPHYID', function () {
      assert.equal('https://giphy.com/embed/xT0BKmj2QTGoVI51Hq', giphyHelper('https://giphy.com/gifs/beyonce-slay-i-xT0BKmj2QTGoVI51Hq'))
    })

    it('should convert https://media.giphy.com/media/GIPHYID/giphy.gif to /embed/GIPHYID', function () {
      assert.equal('https://giphy.com/embed/YAv1nFIJc38hW', giphyHelper('https://media.giphy.com/media/YAv1nFIJc38hW/giphy.gif'))
    })
  })
})
