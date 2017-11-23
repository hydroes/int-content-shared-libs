'use strict'

module.exports.SharedTemplate = function (templateName, templateData) {
  return require('./dist/libs/component')(templateName, templateData)
}

// front-end javascript
module.exports.Assets = function (fileType) {
  return require('./dist/libs/assets')(fileType)
}
