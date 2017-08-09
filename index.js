'use strict'

module.exports.SharedTemplate = function (templateName, templateData) {
  return require('.lib/template')(templateName, templateData)
}

// front-end javascript
module.exports.Assets = function (fileType) {
  return require('./lib/assets')(fileType)
}
