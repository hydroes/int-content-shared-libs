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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pinterest = function (_React$PureComponent) {
  (0, _inherits3.default)(Pinterest, _React$PureComponent);

  function Pinterest() {
    (0, _classCallCheck3.default)(this, Pinterest);
    return (0, _possibleConstructorReturn3.default)(this, (Pinterest.__proto__ || (0, _getPrototypeOf2.default)(Pinterest)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pinterest, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('a', { 'data-pin-do': 'embedPin', 'data-pin-width': this.props.data.pin.size, href: this.props.data.pin.url }),
        _react2.default.createElement('script', { async: true, defer: true, src: '//assets.pinterest.com/js/pinit.js' })
      );
    }
  }]);
  return Pinterest;
}(_react2.default.PureComponent);

Pinterest.propTypes = {
  data: _propTypes2.default.shape({
    pin: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      size: _propTypes2.default.string
    })
  })
};

exports.default = Pinterest;
//# sourceMappingURL=pinterest.js.map
