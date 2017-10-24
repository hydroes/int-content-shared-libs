'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function (_PureComponent) {
  (0, _inherits3.default)(Meta, _PureComponent);

  function Meta() {
    (0, _classCallCheck3.default)(this, Meta);
    return (0, _possibleConstructorReturn3.default)(this, (Meta.__proto__ || (0, _getPrototypeOf2.default)(Meta)).apply(this, arguments));
  }

  (0, _createClass3.default)(Meta, [{
    key: 'render',
    value: function render() {
      return _React2.default.createElement('meta', { name: this.props.name, content: this.props.content });
    }
  }]);
  return Meta;
}(_React.PureComponent);

Meta.propTypes = {
  name: _propTypes2.default.string,
  content: _propTypes2.default.string
};

exports.default = Meta;