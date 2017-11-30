'use strict';

// Used to esxprt file paths for front end assets such as js and css

var path = require('path');
var fs = require('fs');
// @todo: make DIST_DIR come from a config var
var DIST_DIR = 'public/dist/';
// returns paths of css/js assets
// @param assetType css|scripts9
module.exports = function (assetType) {
  // script paths stored here
  var assets = [];
  var componentPath = path.normalize(__dirname + './../../' + DIST_DIR); // eslint-disable-line

  switch (assetType) {
    case 'scripts':
      // get minified script path
      assets.push(componentPath + '/script.min.js');
      break;
    case 'assets':
      var addAssetsInFoldersRecursive = function addAssetsInFoldersRecursive(path) {
        if (fs.existsSync(path)) {
          fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + '/' + file;
            if (fs.lstatSync(curPath).isDirectory()) {
              // recurse
              addAssetsInFoldersRecursive(curPath);
            } else {
              // add file
              assets.push(curPath);
            }
          });
        }
      };
      addAssetsInFoldersRecursive('./public/assets/');
      break;
    case 'bootstrap_variables':
      var variablesFilePath = path.normalize(__dirname + './../../src/components/shared/sass/bauer-bootstrap/variables.scss'); // eslint-disable-line
      assets.push(variablesFilePath);
      break;
    case 'styles':
      assets.push(componentPath + '/style.min.css');
      break;
    default:
      break;
  }

  return assets;
};
//# sourceMappingURL=assets.js.map
