const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-bauercreative',
  url: '#embeds-bauercreative .embeds-bauercreative iframe'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Bauer Creative embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container)
  })
  Then(/^the embed url for Bauer Creative is "([^"]*)"$/, async url => {
    await client.expect.element(domElements.url).to.have.attribute('src').which.contains(url)
  })
})
