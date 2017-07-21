var {defineSupportCode} = require('cucumber')
const {client} = require('nightwatch-cucumber')
defineSupportCode(function ({After, Before}) {
  Before({tags: '@mobile'}, function () {
    client.resizeWindow(client.globals.mobile.width, client.globals.mobile.height)
  })

  Before('@tablet', function () {
    client.resizeWindow(client.globals.tablet.width, client.globals.tablet.height)
  })

  Before('@desktop', function () {
    client.resizeWindow(client.globals.desktop.width, client.globals.desktop.height)
  })
})
