'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _test = require('./test/test');

var _test2 = _interopRequireDefault(_test);

var _twitter = require('./twitter/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _facebook = require('./facebook/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _instagram = require('./instagram/instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var _social_sharing = require('./social_sharing/social_sharing');

var _social_sharing2 = _interopRequireDefault(_social_sharing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = window.bootstrapComponents || [];

// add desired required components to ensure files are included in the component bootstrap

for (var i in components) {
  var component = components[i];

  var componentElement = document.getElementById(component.id);
  if (!componentElement) {
    continue;
  }

  switch (component.name) {
    case 'test':
      (0, _reactDom.hydrate)(_react2.default.createElement(_test2.default, component.data), componentElement);
      break;
    case 'twitter':
      (0, _reactDom.hydrate)(_react2.default.createElement(_twitter2.default, component.data), componentElement);
      break;
    case 'facebook':
      (0, _reactDom.hydrate)(_react2.default.createElement(_facebook2.default, component.data), componentElement);
      break;
    case 'instagram':
      (0, _reactDom.hydrate)(_react2.default.createElement(_instagram2.default, component.data), componentElement);
      break;
    case 'social_sharing':
      (0, _reactDom.hydrate)(_react2.default.createElement(_social_sharing2.default, component.data), componentElement);
      break;
  }
}

// require('./social_sharing')(window)
// bootstrap bauerSharedLibs
window.bauerSharedLibs = window.bauerSharedLibs || {};
window.bauerSharedLibs.version = require('../../package').version;
//# sourceMappingURL=includes.js.map
