'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var pug = require('pug');
var path = require('path');
var helpers = require('../component_helpers/includes');
var _ = require('lodash');

module.exports = function (templateName) {
  var templateData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // build template path
  var componentsPath = path.normalize(__dirname + './../components'); // eslint-disable-line
  var templateFilePath = componentsPath + '/' + templateName + '/' + templateName + '.pug';

  // throw an error if template file does nt exist
  if (!fs.existsSync(templateFilePath)) {
    throw new Error('Shared template not found: ', templateFilePath);
  }

  // ensure that templateData is always an object
  if ((typeof templateData === 'undefined' ? 'undefined' : (0, _typeof3.default)(templateData)) !== 'object' || templateData === null) {
    throw new Error('param templateData must be an object');
  }

  // add helpers to templates
  templateData.helpers = helpers;

  // add lodash to templates
  templateData._ = _;

  var compiledTemplate = pug.compileFile(templateFilePath);

  return compiledTemplate(templateData);
};