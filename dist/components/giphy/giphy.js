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

var _giphy = require('./../../component_helpers/giphy');

var _giphy2 = _interopRequireDefault(_giphy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Giphy = function (_PureComponent) {
  (0, _inherits3.default)(Giphy, _PureComponent);

  function Giphy() {
    (0, _classCallCheck3.default)(this, Giphy);
    return (0, _possibleConstructorReturn3.default)(this, (Giphy.__proto__ || (0, _getPrototypeOf2.default)(Giphy)).apply(this, arguments));
  }

  (0, _createClass3.default)(Giphy, [{
    key: 'createEmbed',
    value: function createEmbed() {
      this.props.data.url = (0, _giphy2.default)(this.props.data.url);
      return _react2.default.createElement('iframe', { src: this.props.data.url, width: '480', height: '480', frameBorder: '0', allowFullScreen: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'embeds-giphy' },
        this.createEmbed()
      );
    }
  }]);
  return Giphy;
}(_react.PureComponent);

Giphy.propTypes = {
  data: _propTypes2.default.object
};

exports.default = Giphy;
//# sourceMappingURL=giphy.js.map
