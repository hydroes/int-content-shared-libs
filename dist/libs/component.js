'use strict';
// import path from 'path'
// import _ from 'lodash'

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _componentsRegister = require('./componentsRegister');

var _componentsRegister2 = _interopRequireDefault(_componentsRegister);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import and assign all components
var componentsRegisterLength = _componentsRegister2.default.length;
var Components = [];
for (var i = 0; i < componentsRegisterLength; i++) {
  try {
    // synchrounously require components, do this until new import supports dynamic loading
    Components[_componentsRegister2.default[i].name] = require(_componentsRegister2.default[i].path).default;
  } catch (error) {
    console.error(_componentsRegister2.default[i].name + ' - ' + error);
  }
}
// finds and renders a react component
module.exports = function (ComponentName) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var Component = void 0;
  var html = '';

  // test if component found
  if (Components[ComponentName] === undefined) {
    // only throw error on dev env, return empty string in production
    var env = process.env.NODE_ENV || 'dev';
    if (env === 'dev') {
      throw new Error('Component not found: ', ComponentName);
    }
    return '';
  }
  var componentId = (0, _uniqueId2.default)('bauerComponentId_');
  var mergedData = (0, _assign2.default)({}, data, { componentId: componentId });

  try {
    Component = _react2.default.createElement(Components[ComponentName], mergedData);
  } catch (error) {
    throw new Error('Component is not a valid component: ', ComponentName);
  }

  var clientBoostrapData = {
    id: componentId,
    name: ComponentName,
    data: mergedData
  };

  var bootstrapClientSideScript = '<script>\n    window.bootstrapComponents = window.bootstrapComponents || [];\n    window.bootstrapComponents.push(' + (0, _stringify2.default)(clientBoostrapData) + ')\n    </script>';

  html = _server2.default.renderToString(Component) + bootstrapClientSideScript;

  return html;
};