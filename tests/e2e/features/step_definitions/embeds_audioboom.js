const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const { globals } = client
const domElements = {
  container: '#embeds-audioboom',
  url: '#embeds-audioboom .embeds-audioboom iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Audioboom embed', async () => {
    await globals.goToComponentPage(client, domElements.container, 'misc')
  })
  Then(/^the embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
