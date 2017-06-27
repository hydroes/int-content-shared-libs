'use strict'

const pug = require('pug')
const $ = require('jquery')

/**
* Retrieves a pug template from the dist folder
* @param templatePath string Path of template pug file to retrieve
* @return string Raw pug template
*/
function getTemplate (templatePath) {
  return $.get('dist/' + templatePath, function (response) {
    return response
  })
}

// @todo include filters here

var bauerPug = {
  /**
  * Renders a pug template into an element
  * @param templatePath string Template filename Eg test/test.pug
  * @param templateData json Data object
  * @param elementIdToRenderInto string Id of element to render template into
  *
  * @return A promise that can be used to get the rendered into a string
  */
  render: function (templatePath, templateData, elementIdToRenderInto) {
    var deferred = $.Deferred()
    var templateRequest = getTemplate(templatePath)

    templateRequest.done(function (rawTemplate) {
      var template = pug.render(rawTemplate, templateData)

      $('#' + elementIdToRenderInto).html(template)

      deferred.resolve(template)
    })

    return deferred.promise()
  }
}

module.exports = bauerPug
