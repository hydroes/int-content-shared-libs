'use strict'
const fs = require('fs')
const pug = require('pug')
const path = require('path')

module.exports = function (templateName, templateData) {
  // build template path
  let templateFilePath = ''
  let componentsPath = path.normalize(__dirname + './../components') // eslint-disable-line
  // if a string with embeds_ exists create a sub path
  if (templateName.includes('embeds_')) {
    let subPath = templateName.substring(0, templateName.indexOf('_'))
    let subComponent = templateName.split('_')[1]
    templateFilePath = `${componentsPath}/${subPath}/${subComponent}/${templateName}.pug`
  } else {
    templateFilePath = `${componentsPath}/${templateName}/${templateName}.pug`
  }

  // throw an error if template file does nt exist
  if (!fs.existsSync(templateFilePath)) {
    throw new Error('Shared template not found: ', templateFilePath)
  }

  var compiledTemplate = pug.compileFile(templateFilePath)

  return compiledTemplate(templateData)
}
