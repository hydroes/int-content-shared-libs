const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
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

defineSupportCode(({ Given, Then, When}) => {
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
    console.log('helloooo')
    //  function to check link of each pagination element so that it has the path with page number
    // function checkLink(elements) {
    //   elements.value.forEach(function (item) {
    //     console.log('HIII', item['ELEMENT'].value)
    //     let pageNumber = pageElement.text
    //     let isValid = client.expect.element(pageElement).to.have.attribute('href').to.equal(slug + pageNumber)
    //     console.log('efsrdfghrtewqrthgj', isValid)
    //     if (!isValid) {
    //       return isValid
    //     }
    //   })
    //   return true
    // }

    function checkLink (elements) {
      //  get element values.
      elements.value.forEach((value, key) => {
        let elementId = value['ELEMENT']
        //  get element attributes
        client.elementIdAttribute(elementId, 'href', (elementInfo) => {
          let href = elementInfo['value']
          if (href.indexOf(client.url)) {
            console.log(href)
          }
        })
      })
    }
    client.elements('css selector', pagination.allLinks, (elements) => {
      checkLink(elements)
    })
    return !client
    // console.log(client.findElements(pagination.allLinks), 'LOOO')
  })

  // Then(/^all page number buttons link to "([^"]*)", with its respective page number$/, (path) => {
  //   return
  // })
})
