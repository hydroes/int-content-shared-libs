const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const { globals } = client
const domElements = {
  container: '#embeds-bauercreative',
  url: '#embeds-bauercreative .embeds-bauercreative iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Bauer Creative embed', async () => {
    await globals.goToComponentPage(client, domElements.container, 'misc')
  })
  Then(/^the embed url for Bauer Creative is "([^"]*)"$/, async url => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
