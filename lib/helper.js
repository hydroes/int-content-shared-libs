'use strict'

module.exports = function (templateName, templateData) {
  return function (chunk, context, bodies, params) {
    var templateInstance = require('./template').get()
    var template = templateInstance.get(templateName, templateData)

    return chunk.map(function (chunk) {
      template.then(function (res) {
        return chunk.end(res)
      })
    })
  }
}
