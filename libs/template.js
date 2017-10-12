'use strict'
const fs = require('fs')
const pug = require('pug')
const path = require('path')
const helpers = require('../component_helpers/includes')
const _ = require('lodash')

module.exports = function (templateName, templateData = {}) {
  // build template path
  let componentsPath = path.normalize(__dirname + './../src/components') // eslint-disable-line
  let templateFilePath = componentsPath + '/' +
    templateName + '/' + templateName + '.pug'

  // throw an error if template file does nt exist
  if (!fs.existsSync(templateFilePath)) {
    throw new Error('Shared template not found: ', templateFilePath)
  }

  // ensure that templateData is always an object
  if (typeof templateData !== 'object' || templateData === null) {
    throw new Error('param templateData must be an object')
  }

  // add helpers to templates
  templateData.helpers = helpers

  // add lodash to templates
  templateData._ = _

  let compiledTemplate = pug.compileFile(templateFilePath)

  return compiledTemplate(templateData)
}
