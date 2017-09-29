const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

const container = '.large-content-card'
const imgAttr = container + ' .content-card--large__link picture'
const title = container + ' .content-card--large__info span.title a'
const category = container + ' .content-card--large__info a.brand-color'
defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view a large card', async () => {
    await client.globals.goToComponentPage(client, '.large-content-card', 'cards')
  })

  Then(/^the large image url is "([^"]*)"$/, async (url) => {
    await client.expect.element(imgAttr + ' img').to.have.attribute('src').which.contains(url)
  })

  Then(/^the alt text is "([^"]*)"$/, async (alt) => {
    await client.expect.element(imgAttr + ' img').to.have.attribute('alt').which.contains(alt)
  })

  Then(/^the title text is "([^"]*)"$/, async (text) => {
    client.expect.element(title).text.to.equal(text)
  })

  Then(/^the title link is "([^"]*)"$/, async (link) => {
    await client.expect.element(title).to.have.attribute('href').which.contains(link)
  })

  Then(/^the category url is "([^"]*)"$/, async (link) => {
    await client.expect.element(category).to.have.attribute('href').which.contains(link)
  })

  Then(/^the category name is "([^"]*)"$/, async (text) => {
    await client.expect.element(category).text.to.equal(text)
  })

  Then(/^the category name is "([^"]*)" and the date is "([^"]*)"$/, async (cat, date) => {
    await client.expect.element('.large-content-card .content-card--large__info span.hidden-xs.modified-container').text.to.equal(cat + date)
  })

  Given(/^the shared components page is open in mobile view, the small image url is "([^"]*)"$/, async (url) => {
    await client.globals.goToComponentPage(client, '.large-content-card', 'cards')
    await client.expect.element(imgAttr + ' source').to.have.attribute('srcset').which.contains(url)
  })
})
