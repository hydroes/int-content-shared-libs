const {it, describe} = require('mocha')
const path = require('path')
const projectRoot = path.resolve('.')
let assert = require('chai').assert

let pageData = {
  'path': '/fashion/',
  'limit': 10,
  'page': 1,
  'size': 6,
  'sort': {
    'publicationDate': -1
  },
  'offset': 0,
  'totalCount': 4004,
  'totalPages': 334,
  'nextPage': 2
}

let middlePageData = {
  'path': '/fashion/23',
  'limit': 10,
  'page': 23,
  'size': 6,
  'sort': {
    'publicationDate': -1
  },
  'offset': 0,
  'totalCount': 4004,
  'totalPages': 334,
  'nextPage': 24
}

let pages = require(`${projectRoot}/dist/component_helpers/paginate.js`)(pageData)
let middlePages = require(`${projectRoot}/dist/component_helpers/paginate.js`)(middlePageData)

describe('#Paginator()', function () {
  describe.only('#pages()', function () {
    it('should return an array of pages', function () {
      assert.typeOf(pages, 'array')
    })

    it('the first item of the array should be a reference to page 1', function () {
      assert.equal(pages[0].page, 1)
      assert.equal(pages[0].display, 1)
      assert.equal(pages[0].href, '/fashion')
      assert.equal(pages[0].isActive, true)
    })

    it('the last item of the array should be a reference to the next page of results', function () {
      let lastPageButton = pages[pages.length - 1]
      assert.equal(lastPageButton.page, 2)
      assert.equal(lastPageButton.display, '>')
      assert.equal(lastPageButton.href, '/fashion/2')
      assert.equal(lastPageButton.isActive, false)
    })

    it('the penaltimate item should be a reference to the last page of results', function () {
      let lastPageButton = pages[pages.length - 2]
      assert.equal(lastPageButton.page, 334)
      assert.equal(lastPageButton.display, 334)
      assert.equal(lastPageButton.href, '/fashion/334')
      assert.equal(lastPageButton.isActive, false)
    })

    it('the first item of the array should be a reference to the previous page', function () {
      assert.equal(middlePages[0].page, 22)
      assert.equal(middlePages[0].display, '<')
      assert.equal(middlePages[0].href, '/fashion/22')
      assert.equal(middlePages[0].isActive, false)
    })

    it('the second item of the array should be a reference to page 1', function () {
      assert.equal(middlePages[1].page, 1)
      assert.equal(middlePages[1].display, 1)
      assert.equal(middlePages[1].href, '/fashion')
      assert.equal(middlePages[1].isActive, false)
    })

    it('the last item of the array should be a reference to the next page of results', function () {
      let lastPageButton = middlePages[middlePages.length - 1]
      assert.equal(lastPageButton.page, 24)
      assert.equal(lastPageButton.display, '>')
      assert.equal(lastPageButton.href, '/fashion/24')
      assert.equal(lastPageButton.isActive, false)
    })

    it('the penaltimate item should be a reference to the last page of results', function () {
      let lastPageButton = middlePages[middlePages.length - 2]
      assert.equal(lastPageButton.page, 334)
      assert.equal(lastPageButton.display, 334)
      assert.equal(lastPageButton.href, '/fashion/334')
      assert.equal(lastPageButton.isActive, false)
    })
  })
})
