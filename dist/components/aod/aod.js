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

// Audio On Demand
var AOD = function (_PureComponent) {
  (0, _inherits3.default)(AOD, _PureComponent);

  function AOD() {
    (0, _classCallCheck3.default)(this, AOD);
    return (0, _possibleConstructorReturn3.default)(this, (AOD.__proto__ || (0, _getPrototypeOf2.default)(AOD)).apply(this, arguments));
  }

  (0, _createClass3.default)(AOD, [{
    key: 'render',
    value: function render() {
      var url = this.props.data.url;

      return _react2.default.createElement(
        'div',
        { className: 'embeds-aod' },
        _react2.default.createElement('iframe', { src: url, frameBorder: '0', scrolling: 'no', width: '100%' })
      );
    }
  }]);
  return AOD;
}(_react.PureComponent);

AOD.propTypes = {
  data: _propTypes2.default.shape({
    url: _propTypes2.default.string
  })
};

exports.default = AOD;
//# sourceMappingURL=aod.js.map
