const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const { globals } = client
const domElements = {
  container: '#embeds-giphy',
  url: '#embeds-giphy .embeds-giphy iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Giphy embed', async () => {
    await globals.goToComponentPage(client, domElements.container, 'misc')
  })
  Then(/^the Giphy embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
