'use strict'

const $ = require('jquery')
const helpers = require('./helpers/includes')
const _ = require('lodash')

var bauerPug = {
  /**
  * Mixin libs
  * @return objects
  */
  helpers: helpers,
  /**
  * Renders a pug template into an element
  * @param templatePath string Template filename Eg test/test.pug
  * @param templateData json Data object
  * @param elementSelector string element as css selector to render output to
  *
  * @return A promise that can be used to get the rendered into a string
  */
  render: function (templatePath, templateData, elementSelector, escapeOutput) {
    // build compiled template path
    var baseDir = 'dist/'
    var compiledTemplatePath = baseDir + templatePath
    compiledTemplatePath = compiledTemplatePath.replace('.pug', '.js')

    // retieve compiled template & execute it
    return $.getScript(compiledTemplatePath, function (script, textStatus, jqxhr) {
      if (jqxhr.status !== 200) {
        console.log('Compiled template not found: ', compiledTemplatePath)
      }

      // build compiled template method name & data
      var templateMethodName = templatePath.split('/')
      templateMethodName = templateMethodName.join('_')
      templateMethodName = templateMethodName.slice(0, -4)
      templateMethodName = templateMethodName + '(' + JSON.stringify(templateData) + ')'
      templateMethodName = 'window.namespacedTemplateMethod = ' + templateMethodName
      // namespaced methods need to run as follows
      let output = eval(templateMethodName.toString()) // eslint-disable-line
      if (escapeOutput) {
        output = _.escape(output)
          .replace(/&gt;/g, '&gt;<br>') // add line breaks
          .trim()
      }
      $(elementSelector).html(output)

      window.namespacedTemplateMethod = ''
    })
  }
}

module.exports = bauerPug
