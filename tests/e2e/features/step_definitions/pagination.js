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

// function goToPaginationTab (returnHome) {
//   if (!returnHome) {
//     client.windowHandles((result) => {
//       if (result.value.length > 1) {
//         let handle = result.value[1]
//         client.switchWindow(handle)
//       } else {
//         client.execute((url, title) => {
//           window.open(url, title).resizeWindow(client.width, client.height)
//         }, ['#', 'Pagination Test'])
//       }
//     })
//   } else {
//     client.windowHandles((result) => {
//       let homeTab = result.value[0]
//       client.switchWindow(homeTab)
//     })
//   }
// }

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
    let isValid = assert(false, 'pagination element doesn\'t exist on page')
    let slug = path
    let slash = '/'
    if (slug.charAt(0) !== slash) {
      slug = slash + slug
    }
    var lastChar = slug.length - 1
    if (slug.charAt(lastChar) !== slash) {
      slug = slug + slash
    }

    function checkLink (elements, path) {
      let text = ''
      let isValid = assert(false, 'pagination element doesn\'t exist on page, during iteration')
      //  get element values.
      elements.value.forEach((value, key) => {
        let elementId = value['ELEMENT'] // get nightwatch Element identifier Id
        if (!elementId) {
          isValid.message = 'a pagination element doesn\'t exist'
          return
        }
        //  get element attributes
        client.elementIdText(elementId, (textInfo) => {
          text = textInfo['value']
          if (!text) {
            isValid.message = 'a pagination element doesn\'t have any text on the element'
            return
          }
          client.elementIdAttribute(elementId, 'href', (elementInfo) => {
            let href = elementInfo['value']
            if (!href) {
              isValid.message = 'a pagination element doesn\'t have a href/link attribute'
              return
            }
            let relativeLink = path + text
            if (!href.endsWith(relativeLink, href.length)) {
              if (text === '1' && !href.endsWith(path, href.length)) { // edge case for the first page
                isValid.message = 'first element doesn\'t have a valid element'
                return
              } else {
                isValid.message = 'an element doesn\'t have a valid link: ' + relativeLink
                return
              }
            }
            // let componentPage = client.globals.getComponentsPageUrl()
            // if (href.indexOf(componentPage) > -1) { //  then we'll make into a sort of 'relative link'
            //   href = href.replace(componentPage, '')
            // }
            // href = href.split('/')
            // if (href.length === 2) {
            //   let validElement = assert.equal(text, href[1].toString())
            //   if (!validElement) {
            //     return
            //   }
            // } else {
            //   if (href.length === 1) {
            //     let validText = assert.equal(text, '1')
            //     if (!validText) {
            //       return
            //     }
            //   }
            //   return
            // }
            isValid = assert(true) //  better to return assertion for callback
          })
        })
      })
      return isValid
    }
    client.elements('css selector', pagination.allLinks, (elements) => {
      isValid = checkLink(elements, slug)
      return isValid
    })
  })
})
