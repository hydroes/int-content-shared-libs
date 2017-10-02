const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-audioboom',
  url: '#embeds-audioboom .embeds-audioboom iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Audioboom embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container, 'embeds')
  })
  Then(/^the embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
