'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('fs'),
    readdirSync = _require.readdirSync,
    statSync = _require.statSync,
    existsSync = _require.existsSync;

var _require2 = require('path'),
    join = _require2.join,
    extname = _require2.extname;

var componentsPath = __dirname + '/../components/';

var getComponentScriptPath = function getComponentScriptPath(path, name) {
  return join(path, name, name) + '.js';
};
var registerComponents = function registerComponents() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : componentsPath;

  var dirContents = readdirSync(path);
  var components = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(dirContents), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      var filePath = join(path, file);
      var fileInfo = statSync(filePath);
      if (!fileInfo.isDirectory()) {
        continue;
      }
      var jsFilePath = getComponentScriptPath(path, file);
      if (existsSync(jsFilePath)) {
        components.push({
          name: file,
          path: jsFilePath
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return components;
};

exports.default = registerComponents();
//# sourceMappingURL=componentsRegister.js.map
