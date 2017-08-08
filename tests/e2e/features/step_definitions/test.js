const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given('I open the shared components page', (done) => {
    client.url(client.globals.getComponentsPageUrl())
      .waitForElementVisible('#bauer-web-component-test-btn', 1000)
    done()
  })

  Then(/^the test button text is "([^"]*)"$/, (text, done) => {
    client.expect.element('#bauer-web-component-test-btn').text.to.equal(text)
    done()
  })

  Then('the buttons background color is red', (done) => {
    client.click('#bauer-web-component-test-btn')
      .assert.cssProperty('#bauer-web-component-test-btn', 'background-color', 'rgba(255, 0, 0, 1)')
    done()
  })
})
