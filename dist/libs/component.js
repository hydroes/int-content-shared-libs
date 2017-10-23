'use strict';
// import path from 'path'
// import _ from 'lodash'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _componentsRegister = require('./componentsRegister');

var _componentsRegister2 = _interopRequireDefault(_componentsRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import and assign all components
var componentsRegisterLength = _componentsRegister2.default.length;
var Components = [];
for (var i = 0; i < componentsRegisterLength; i++) {
  try {
    // synchrounously require components, do this until new import supports dynamic loading
    Components[_componentsRegister2.default[i].name] = require(_componentsRegister2.default[i].path).default;
  } catch (error) {
    // console.log('error', error)
  }
}
// finds and renders a react component
module.exports = function (ComponentName) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var Component = void 0;
  var html = '';

  // test if component found
  if (Components[ComponentName] === undefined) {
    // @todo add error throwing back in
    // throw new Error('Component not found: ', ComponentName)
    return '!!Component: "' + ComponentName + '" NOT reactified!!';
  }

  try {
    Component = _react2.default.createElement(Components[ComponentName], data);
  } catch (error) {
    throw new Error('Component is not a valid component: ', ComponentName);
  }

  html = _server2.default.renderToString(Component);
  return html;
};