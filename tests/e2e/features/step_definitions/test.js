const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page', async () => {
    await client.url(client.globals.getComponentsPageUrl())
      .waitForElementVisible('#bauer-web-component-test-btn', 1000)
  })

  Then(/^the test button text is "([^"]*)"$/, async (text) => {
    await client.expect.element('#bauer-web-component-test-btn').text.to.equal(text)
  })
})
