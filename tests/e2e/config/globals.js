// ** global methods that are run

const { defineSupportCode } = require('cucumber')
const pkg = require('../../../package.json')

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
  getComponentsPageUrl: function (urlSuffix = '') {
    if (typeof (process.env.USE_PACKAGE_QAHOST) === 'undefined') {
      return 'http://localhost:3000' + '/' + urlSuffix
    } else {
      return pkg.QA_HOST + '/' + urlSuffix
    }
  },
  getPageTimeout: function () {
    return 300000
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
