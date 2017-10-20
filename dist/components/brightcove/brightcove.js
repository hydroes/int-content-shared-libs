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

var Brightcove = function (_PureComponent) {
  (0, _inherits3.default)(Brightcove, _PureComponent);

  function Brightcove() {
    (0, _classCallCheck3.default)(this, Brightcove);
    return (0, _possibleConstructorReturn3.default)(this, (Brightcove.__proto__ || (0, _getPrototypeOf2.default)(Brightcove)).apply(this, arguments));
  }

  (0, _createClass3.default)(Brightcove, [{
    key: 'createEmbed',
    value: function createEmbed() {
      this.props.data.url = this.props.data.url.replace('http://', '//');
      this.props.data.url = this.props.data.url.replace('https://', '//');
      return _React2.default.createElement('iframe', { frameBorder: '0', allowTransparency: 'allowtransparency', src: this.props.data.url, allowFullScreen: true });
    }
  }, {
    key: 'render',
    value: function render() {
      this.createEmbed();
      return _React2.default.createElement(
        'div',
        { className: 'embeds-brightcove' },
        this.createEmbed()
      );
    }
  }]);
  return Brightcove;
}(_React.PureComponent);

Brightcove.propTypes = {
  data: _propTypes2.default.object
};

exports.default = Brightcove;