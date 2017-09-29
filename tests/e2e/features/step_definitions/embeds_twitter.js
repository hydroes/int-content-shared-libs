const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-twitter'
}
const { globals } = client

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Twitter embed', async () => {
    await globals.goToComponentPage(client, domElements.container, 'misc')
  })
})
