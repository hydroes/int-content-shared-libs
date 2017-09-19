'use strict'

module.exports.SharedTemplate = function (templateName, templateData) {
  return require('./libs/template')(templateName, templateData)
}

// front-end javascript
module.exports.Assets = function (fileType) {
  return require('./libs/assets')(fileType)
}
