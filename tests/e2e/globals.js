// ** global methods that are run

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
