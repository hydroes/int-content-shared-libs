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
const { globals } = client

defineSupportCode(({ Given, Then, When }) => {
  Given('I open the shared components page, to view pagination', async () => {
    if (client.url !== client.globals.getComponentsPageUrl('misc')) {
      globals.goToComponentPage(client, pagination.container, 'misc')
    }
    await client.globals.goToComponentPage(client, pagination.container, 'misc')
  })
  Then(/^pagination component is displayed large, and should have the class "([^"]*)"/, async (className) => {
    await client.expect.element(pagination.container).to.have.attribute('class').which.contains(className)
  })
  Then(/^the first page button is ([0-9]+)/, async (page) => {
    await client.expect.element(pagination.firstPage).text.to.equal(page)
  })

  Then(/^the current page is ([0-9]+)$/, async (page) => {
    await client.expect.element(pagination.currentPage).text.to.equal(page)
  })

  Then(/^as a result, the back button should go to ([0-9]+) and the next page button should go to ([0-9]+)$/, async (previous, next) => {
    await client.expect.element(pagination.previousNav).to.have.attribute('href').which.contains(previous)
    await client.expect.element(pagination.nextNav).to.have.attribute('href').which.contains(next)
  })

  Then(/^the total amount of pages is ([0-9]+)$/, async (total) => {
    await client.expect.element(pagination.lastPage).text.to.equal(total)
  })
})
