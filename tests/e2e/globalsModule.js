const chromedriver = require('chromedriver')

module.exports = {
  before: function () {
    chromedriver.start()
  },
  after: function () {
    chromedriver.stop()
  }
}
