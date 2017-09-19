const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

const container = '.impactful-content-card'
const imgAttr = container + ' .content-card--impactful__info > picture'

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view a impactful hero card', async () => {
    await client.globals.goToComponentPage(client, container)
  })

  Then(/^the cards image url is "([^"]*)"$/, async (url) => {
    await client.expect.element(imgAttr + ' img').to.have.attribute('src').which.equals(url)
  })

  Then(/^the alt text from the image is "([^"]*)"$/, async (alt) => {
    await client.expect.element(imgAttr + ' img').to.have.attribute('alt').which.contains(alt)
  })

  Then(/^the titles text from the card is "([^"]*)"$/, async (text) => {
    const title = container + ' .content-card--impactful__info .title-container .title-container__item .title'
    client.expect.element(title).text.to.equal(text)
  })

  Then(/^the cards link itself is "([^"]*)"$/, async (text) => {
    client.expect.element(container + ' a.content-card--impactful__info').text.to.equal(text)
  })

  Given(/^the shared components page is open in mobile view, the impactful cards small image url is "([^"]*)"$/, async (url) => {
    await client.globals.goToComponentPage(client, '.large-content-card')
    await client.expect.element(imgAttr + ' source').to.have.attribute('srcset').which.contains(url)
  })
})
