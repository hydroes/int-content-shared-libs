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
  }
}
