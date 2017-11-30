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

var CardDateTime = function (_PureComponent) {
  (0, _inherits3.default)(CardDateTime, _PureComponent);

  function CardDateTime() {
    (0, _classCallCheck3.default)(this, CardDateTime);
    return (0, _possibleConstructorReturn3.default)(this, (CardDateTime.__proto__ || (0, _getPrototypeOf2.default)(CardDateTime)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardDateTime, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'hidden-xs modified-container' },
        _react2.default.createElement(
          'a',
          { className: 'brand-color', href: this.props.category.url },
          this.props.category.name
        ),
        this.props.date
      );
    }
  }]);
  return CardDateTime;
}(_react.PureComponent);

CardDateTime.propTypes = {
  category: _propTypes2.default.shape({
    url: _propTypes2.default.string,
    name: _propTypes2.default.string
  }),
  date: _propTypes2.default.string
};

exports.default = CardDateTime;
//# sourceMappingURL=card_date_time.js.map
