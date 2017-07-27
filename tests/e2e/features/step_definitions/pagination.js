const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const assert = require('assert')
const pagination = {
  container: '.pagination',
  allLinks: '.pagination > li a',
  previousNav: '.pagination > li:first-child a',
  nextNav: '.pagination > li:last-child a',
  lastPage: '.pagination > li:nth-last-child(2) a',
  firstPage: '.pagination > li:nth-child(2) a',
  currentPage: '.pagination > li a.pagination__link--active'
}

defineSupportCode(({ Given, Then, When }) => {
  Given('I open the shared components page, to view pagination', () => {
    if (client.url !== client.globals.getComponentsPageUrl()) {
      client.globals.goToComponentPage(client, pagination.container)
    }
    return client.globals.goToComponentPage(client, pagination.container)
  })
  Then(/^the first page button is ([0-9]+)/, (page) => {
    return client.expect.element(pagination.firstPage).text.to.equal(page)
  })
  Then(/^the current page is ([0-9]+)$/, (page) => {
    return client.expect.element(pagination.currentPage).text.to.equal(page)
  })
  Then(/^as a result, the back button should go to ([0-9]+) and the next page button should go to ([0-9]+)$/, (previous, next) => {
    return client.expect.element(pagination.previousNav).to.have.attribute('href').which.contains(previous) &&
      client.expect.element(pagination.nextNav).to.have.attribute('href').which.contains(next)
  })
  Then(/^the total amount of pages is ([0-9]+)$/, (total) => {
    return client.expect.element(pagination.lastPage).text.to.equal(total)
  })
  Then(/^all page number buttons link to "([^"]*)", with its respective page number$/, (path) => {
    let slug = path
    let slash = '/'
    if (slug.charAt(0) !== slash) {
      slug = slash + slug
    }
    var lastChar = slug.length - 1
    if (slug.charAt(lastChar) !== slash) {
      slug = slug + slash
    }
    client.elements('css selector', pagination.allLinks, elements => {
      return checkLink(elements, slug)
    })
    function checkLink (elements, path) {
      let text = ''
      //  get element values.

      elements.value.forEach(async (value, key) => {
        let elementId = await value.ELEMENT // get nightwatch Element identifier Id
        if (!elementId) {
          assert(false, 'a pagination element doesn\'t exist')
        }
        //  get element attributes
        client.elementIdText(elementId, (textInfo) => {
          text = textInfo['value']
          if (!text) {
            assert(false, 'a pagination element doesn\'t have any text on the element')
          }
          client.elementIdAttribute(elementId, 'href', (elementInfo) => {
            let href = elementInfo['value']
            if (!href) {
              assert(false, 'a pagination element doesn\'t have a href/link attribute')
            }
            let relativeLink = path + text
            if (!href.endsWith(relativeLink, href.length)) {
              if (text !== '<' && text !== '>' && text !== '1') { // edge case for the first page, and naviagation
                assert(false, 'first element doesn\'t have a valid nav element, a clue could be = "' + text + '"')
              }
            }
            assert(true) //  better to return assertion for callback
          })
        })
      })
    }
  })
})
