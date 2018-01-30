'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fs = require('fs');
var Path = require('path');

var ComponentRegister = function () {
  function ComponentRegister(path) {
    (0, _classCallCheck3.default)(this, ComponentRegister);

    return this._registerAll(path);
  }

  (0, _createClass3.default)(ComponentRegister, [{
    key: '_getComponentScriptPath',
    value: function _getComponentScriptPath(path, name) {
      return Path.join(path, name) + '.js';
    }
  }, {
    key: '_isFolder',
    value: function _isFolder(path) {
      var fileInfo = Fs.statSync(path);
      return fileInfo.isDirectory();
    }
  }, {
    key: '_registerSingle',
    value: function _registerSingle(folderPath, componentRoot) {
      var componentPath = Path.join(componentRoot, folderPath);
      if (!this._isFolder(componentPath)) {
        return;
      }

      var _Path$parse = Path.parse(componentPath),
          name = _Path$parse.name;

      var jsFilePath = this._getComponentScriptPath(componentPath, name);

      if (Fs.existsSync(jsFilePath)) {
        return {
          name: name,
          path: jsFilePath
        };
      }
    }
  }, {
    key: '_registerAll',
    value: function _registerAll(path) {
      var dirContents = Fs.readdirSync(path);
      var components = [];
      if (!this._isFolder(path)) {
        throw new Error(path + ' is not a directory. Components cannot be loaded!');
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(dirContents), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;

          var component = this._registerSingle(file, path);
          if (component) {
            components.push(component);
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
    }
  }]);
  return ComponentRegister;
}();

var componentsPath = __dirname + '/../components/';
exports.default = new ComponentRegister(componentsPath);
//# sourceMappingURL=componentsRegister.js.map
