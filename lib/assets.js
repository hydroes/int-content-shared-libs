'use strict'

// Used to esxprt file paths for front end assets such as js and css

var path = require('path')

// returns paths of css/js assets
// @param assetType css|scripts9
module.exports = function (assetType) {
  // script paths stored here
  var assets = []
  var componentPath = path.normalize(__dirname + './../docs/dist') // eslint-disable-line

  switch (assetType) {
    case 'scripts':
      // get minified script path
      assets.push(componentPath + '/script.min.js')
      break
    default:
      assets.push(componentPath + '/style.min.js')
      break
  }

  return assets
}
