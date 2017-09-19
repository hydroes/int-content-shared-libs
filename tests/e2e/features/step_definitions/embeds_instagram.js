const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-instagram',
  data_attr: '#embeds-instagram .embeds-instagram',
  url: '#embeds-instagram .embeds-instagram > a'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Instagram embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container)
  })
  Then(/^the Instagram data attribute is "([^"]*)"$/, async (url) => {
    await client.expect.element(domElements.data_attr).to.have.attribute('data-embed-id').which.contains(url)
  })
})
