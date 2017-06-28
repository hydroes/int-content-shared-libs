'use strict'

const $ = require('jquery')

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
    // build compiled template path
    var baseDir = 'dist/'
    var compiledTemplatePath = baseDir + templatePath
    compiledTemplatePath = compiledTemplatePath.replace('.pug', '.js')

    // retieve compiled template & execute it
    $.getScript(compiledTemplatePath, function (script, textStatus, jqxhr) {
      if (jqxhr.status !== 200) {
        console.log('Compiled template not found: ', compiledTemplatePath)
      }

      window.tempTemplateData = templateData

      // build compiled template method name
      var templateMethodName = templatePath.split('/')
      templateMethodName = templateMethodName.join('')
      templateMethodName = templateMethodName.slice(0, -4)
      templateMethodName = templateMethodName + '(window.tempTemplateData)'

      templateMethodName = 'window.namespacedTemplateMethod = ' + templateMethodName

      // namespaced methods need to run as follows
      eval(templateMethodName.toString()) // eslint-disable-line
      $('#' + elementIdToRenderInto).html(window.namespacedTemplateMethod)

      window.tempTemplateData = {}
      window.namespacedTemplateMethod = ''
    })
  }
}

module.exports = bauerPug
