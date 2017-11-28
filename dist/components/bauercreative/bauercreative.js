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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BauerCreative = function (_PureComponent) {
  (0, _inherits3.default)(BauerCreative, _PureComponent);

  function BauerCreative() {
    (0, _classCallCheck3.default)(this, BauerCreative);
    return (0, _possibleConstructorReturn3.default)(this, (BauerCreative.__proto__ || (0, _getPrototypeOf2.default)(BauerCreative)).apply(this, arguments));
  }

  (0, _createClass3.default)(BauerCreative, [{
    key: 'iframe',
    value: function iframe() {
      var iframeId = _lodash2.default.uniqueId('bauerCreativeFrame_');
      return _react2.default.createElement(
        'div',
        { className: 'embeds-bauercreative' },
        _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js' }),
        _react2.default.createElement('iframe', { src: this.props.data.url, allowTransparency: 'true', frameBorder: '0', id: iframeId, scrolling: 'no', width: '100%' }),
        _react2.default.createElement(
          'script',
          null,
          'var iframes = iFrameResize({}, \'##{iframeId}\')'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.iframe()
      );
    }
  }]);
  return BauerCreative;
}(_react.PureComponent);

BauerCreative.propTypes = {
  data: _propTypes2.default.object
};

exports.default = BauerCreative;