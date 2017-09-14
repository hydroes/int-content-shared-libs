'use strict'
const fs = require('fs')
const pug = require('pug')
const path = require('path')
const helpers = require('../helpers/includes')
const _ = require('lodash')

module.exports = function (templateName, templateData = {}) {
  // build template path
  let componentsPath = path.normalize(__dirname + './../components') // eslint-disable-line
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

  // check reserved properties are not taken
  if (templateData.hasOwnProperty('helpers') === true) {
    throw new Error('property "helpers" is a reserved property and cannot be used')
  }
  // add helpers to templates
  templateData.helpers = helpers

  // check reserved _ property has not been taken
  if (templateData.hasOwnProperty('_') === true) {
    throw new Error('property "_" is reserved and cannot be used')
  }
  // add lodash to templates
  templateData._ = _

  let compiledTemplate = pug.compileFile(templateFilePath)

  return compiledTemplate(templateData)
}
