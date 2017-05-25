'use strict'
var templateInstance = require('./lib/template.js')

module.exports.Templates = function (dust) {
  return templateInstance.get(dust)
}
// extend dust with bauer shared helpers
module.exports.Helpers = function (dust) {
  if (typeof (dust.helpers.bauerGallery) === 'undefined') {
    dust.helpers.bauerGallery = function (chunk, context, bodies, params) {
      var templateData = params
      // return require('./lib/helper.js')('gallery', chunk, context, bodies, params)
      return require('./lib/helper.js')('gallery', templateData)
    }
  }
}

// front-end javascript
module.exports.Assets = function (fileType) {
  return require('./lib/assets')(fileType)
}
