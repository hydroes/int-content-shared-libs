'use strict'

module.exports = {
  'Demo test Google': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 5000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 5000)
      .click('button[name=btnG]')
      .pause(5000)
      .assert.containsText('#main', 'Night Watch')
      .end()
  },

  'Demo Bauer test': function (browser) {
    browser
    .url('http://www.bauermedia.co.uk/')
    .assert.containsText('#main', '')
    .end()
  }
}
