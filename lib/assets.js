'use strict'

// Used to esxprt file paths for front end assets such as js and css

const path = require('path')
const fs = require('fs')

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
    case 'assets':
      var addAssetsInFoldersRecursive = function (path) {
        if (fs.existsSync(path)) {
          fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + '/' + file
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
              addAssetsInFoldersRecursive(curPath)
            } else { // delete file
              assets.push(curPath)
            }
          })
        }
      }
      addAssetsInFoldersRecursive('./docs/assets')
      break
    default:
      assets.push(componentPath + '/style.min.js')
      break
  }

  return assets
}
