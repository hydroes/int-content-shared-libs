const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page', () => {
    return client.url(client.globals.getComponentsPageUrl())
      .waitForElementVisible('#bauer-web-component-test-btn', 1000)
  })

  Then(/^the test button text is "([^"]*)"$/, (text) => {
    return client.expect.element('#bauer-web-component-test-btn').text.to.equal(text)
  })

  Then('the buttons background color is red', () => {
    return client.click('#bauer-web-component-test-btn')
      .assert.cssProperty('#bauer-web-component-test-btn', 'background-color', 'rgba(255, 0, 0, 1)')
  })
})
