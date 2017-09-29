const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

const container = '.content-card--impactful'
const imgAttr = container + ' .content-card__info--impactful .card-image > picture'

const { globals } = client

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view a impactful hero card', async () => {
    await globals.goToComponentPage(client, container, 'cards')
  })

  Then(/^the cards image url is "([^"]*)"$/, async (url) => {
    await client.expect.element(imgAttr + ' img').to.have.attribute('src').which.contains(url)
  })

  Then(/^the alt text from the image is "([^"]*)"$/, async (alt) => {
    await client.expect.element(imgAttr + ' img').to.have.attribute('alt').which.contains(alt)
  })

  Then(/^the titles text from the card is "([^"]*)"$/, async (text) => {
    const title = container + ' .title-container .title-container__item .title'
    await client.expect.element(title).text.to.equal(text)
  })

  Then(/^the cards link itself is "([^"]*)"$/, async (text) => {
    await client.expect.element(container + ' > .row > a').to.have.attribute('href').which.contains(text)
  })

  Given(/^the shared components page is open in mobile view, the impactful cards small image url is "([^"]*)"$/, async (url) => {
    await globals.goToComponentPage(client, container, 'cards')
    await client.expect.element(imgAttr + ' source').to.have.attribute('srcset').which.contains(url)
  })
})
