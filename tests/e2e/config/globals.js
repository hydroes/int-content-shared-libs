// ** global methods that are run

const { defineSupportCode } = require('cucumber')

defineSupportCode(({ setDefaultTimeout }) => {
  setDefaultTimeout(300000)
})

var chromedriver = require('chromedriver')

module.exports = {
  before: function (done) {
    chromedriver.start()
    done()
  },

  after: function (done) {
    chromedriver.stop()
    done()
  },
  getComponentsPageUrl: function () {
    return 'http://localhost:3000'
  },
  getPageTimeout: function () {
    return 10000
  },
  goToComponentPage: function (client, awaitedElement) {
    client.url(client.globals.getComponentsPageUrl())
      .waitForElementVisible(awaitedElement, client.globals.getPageTimeout())
  },
  mobile: {
    width: 375,
    height: 667
  },
  tablet: {
    width: 700,
    height: 940
  },
  desktop: {
    width: 993,
    height: 940
  }
}