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

var YouTube = function (_React$PureComponent) {
  (0, _inherits3.default)(YouTube, _React$PureComponent);

  function YouTube() {
    (0, _classCallCheck3.default)(this, YouTube);
    return (0, _possibleConstructorReturn3.default)(this, (YouTube.__proto__ || (0, _getPrototypeOf2.default)(YouTube)).apply(this, arguments));
  }

  (0, _createClass3.default)(YouTube, [{
    key: 'render',
    value: function render() {
      var url = this.props.data.url;
      if (/watch\?v=/.test(this.props.data.url)) {
        var videoID = this.data.url.split('watch?v=')[1];
        url = 'https://youtube.com/embed/' + videoID + '?rel=0';
      }
      return _react2.default.createElement(
        'div',
        { className: 'embeds-youtube' },
        _react2.default.createElement('iframe', { src: url, allowFullScreen: 'true' })
      );
    }
  }]);
  return YouTube;
}(_react2.default.PureComponent);

YouTube.propTypes = {
  data: _propTypes2.default.shape({
    url: _propTypes2.default.string
  })
};

exports.default = YouTube;