'use strict'
const fs = require('fs')
const pug = require('pug')
const path = require('path')

module.exports = function (templateName, templateData) {
  // build template path
  let componentsPath = path.normalize(__dirname + './../components') // eslint-disable-line
  let templateFilePath = componentsPath + '/' +
    templateName + '/' + templateName + '.pug'

  // throw an error if template file does nt exist
  if (!fs.existsSync(templateFilePath)) {
    throw new Error('Shared template not found: ', templateFilePath)
  }

  var compiledTemplate = pug.compileFile(templateFilePath)

  return compiledTemplate(templateData)
}
