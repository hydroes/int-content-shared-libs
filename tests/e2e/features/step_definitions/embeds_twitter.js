const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const domElements = {
  container: '#embeds-twitter'
}

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page to view Twitter embed', async () => {
    await client.globals.goToComponentPage(client, domElements.container, 'embeds')
  })
})
