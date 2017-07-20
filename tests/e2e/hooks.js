var {defineSupportCode} = require('cucumber')
const {client} = require('nightwatch-cucumber')
defineSupportCode(function ({After, Before}) {
  Before({tags: '@phone'}, function () {
    client.resizeWindow(375, 667)
  })

  Before('@tablet', function () {
    client.resizeWindow(700, 940)
  })

  // You can use the following shorthand when only specifying tags
  Before('@desktop', function () {
    client.resizeWindow(993, 940)
  })
})
