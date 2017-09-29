const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const { globals } = client
const domElements = {
  container: '#embeds-brightcove',
  url: '#embeds-brightcove .embeds-brightcove iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Brightcove embed', async () => {
    await globals.goToComponentPage(client, domElements.container, 'misc')
  })
  Then(/^the Brightcove embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
