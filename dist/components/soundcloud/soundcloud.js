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

var Soundcloud = function (_React$PureComponent) {
  (0, _inherits3.default)(Soundcloud, _React$PureComponent);

  function Soundcloud() {
    (0, _classCallCheck3.default)(this, Soundcloud);
    return (0, _possibleConstructorReturn3.default)(this, (Soundcloud.__proto__ || (0, _getPrototypeOf2.default)(Soundcloud)).apply(this, arguments));
  }

  (0, _createClass3.default)(Soundcloud, [{
    key: 'render',
    value: function render() {
      var url = this.props.data.url;
      if (/^(https?):\/\/soundcloud.com\//.test(url)) {
        url = 'https://w.soundcloud.com/player/?url=' + url;
      }
      return _react2.default.createElement(
        'div',
        { className: 'embeds-soundcloud' },
        _react2.default.createElement('iframe', { src: url, allowFullScreen: 'true', frameBorder: '0' })
      );
    }
  }]);
  return Soundcloud;
}(_react2.default.PureComponent);

Soundcloud.propTypes = {
  data: _propTypes2.default.shape({
    url: _propTypes2.default.string
  })
};

exports.default = Soundcloud;
//# sourceMappingURL=soundcloud.js.map
