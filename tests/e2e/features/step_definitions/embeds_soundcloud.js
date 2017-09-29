const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-soundcloud',
  url: '#embeds-soundcloud .embeds-soundcloud iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Soundcloud embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container, 'misc')
  })
  Then(/^the Soundcloud embed url is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
