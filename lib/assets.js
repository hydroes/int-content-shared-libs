'use strict'

// Used to esxprt file paths for front end assets such as js and css

var path = require('path')
var fs = require('fs')

// returns paths of css/js assets
// @param assetType css|scripts9
module.exports = function (assetType) {
  // script paths stored here
  var assets = []
  var componentPath = path.normalize(__dirname + './../docs/dist') // eslint-disable-line

  if (assetType === 'scripts') {
    // get minified script path
    assets.push(componentPath + '/script.min.js')
  } else {
    // get sass file paths
    var dirs = fs.readdirSync(componentPath)

    var dirsLength = dirs.length
    for (var i = 0; i < dirsLength; i++) {
      var scriptFile = componentPath + '/' + dirs[i] + '/' + 'style.min.css'
      if (fs.existsSync(scriptFile)) {
        assets.push(scriptFile)
      }
    }
  }

  return assets
}
