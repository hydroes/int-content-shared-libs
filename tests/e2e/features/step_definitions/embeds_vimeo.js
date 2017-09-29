const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-vimeo',
  url: '#embeds-vimeo .embeds-vimeo iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Vimeo embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container, 'misc')
  })
  Then(/^the Vimeo embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
