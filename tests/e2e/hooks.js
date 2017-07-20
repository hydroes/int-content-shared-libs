var {defineSupportCode} = require('cucumber')
const {client} = require('nightwatch-cucumber')
defineSupportCode(function ({After, Before}) {
  Before({tags: '@phone'}, function () {
    client.resizeWindow(300, 250)
  })

  // You can use the following shorthand when only specifying tags
  Before('@desktop', function () {
    client.resizeWindow(1100, 250)
  })
})
