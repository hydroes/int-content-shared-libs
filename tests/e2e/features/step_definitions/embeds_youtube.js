const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-youtube',
  url: '#embeds-youtube .embeds-youtube iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Youtube embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container)
  })
  Then(/^the Youtube embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
