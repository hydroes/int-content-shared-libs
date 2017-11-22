const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const container = '.pinterest-rich-pin'
const pin = container + ' * > *'

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Pinterest embed', async () => {
    await client.globals.goToComponentPage(client, container, 'embeds')
  })
  Then('the pin embed is present', async () => {
    await client.expect.element(pin).to.be.present
  })
  Then('the pin is visible', async () => {
    await client.expect.element(pin).to.be.visible
  })
  Then(/^the pin's ID is "([^"]*)"$/, async (url) => {
    await client.expect.element(pin).to.have.attribute('data-pin-href').which.contains(url)
  })
})
