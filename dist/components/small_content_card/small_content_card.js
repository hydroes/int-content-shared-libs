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

var SmallContentCard = function (_PureComponent) {
  (0, _inherits3.default)(SmallContentCard, _PureComponent);

  function SmallContentCard() {
    (0, _classCallCheck3.default)(this, SmallContentCard);
    return (0, _possibleConstructorReturn3.default)(this, (SmallContentCard.__proto__ || (0, _getPrototypeOf2.default)(SmallContentCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(SmallContentCard, [{
    key: 'render',
    value: function render() {
      return _React2.default.createElement(
        'p',
        null,
        'Smallcontent card'
      );
    }
  }]);
  return SmallContentCard;
}(_React.PureComponent);

SmallContentCard.propTypes = {
  data: _propTypes2.default.shape({
    images: _propTypes2.default.shape({
      xs: _propTypes2.default.shape({
        url: _propTypes2.default.string,
        mimeType: _propTypes2.default.string
      }),
      sm: _propTypes2.default.shape({
        url: _propTypes2.default.string,
        mimeType: _propTypes2.default.string
      }),
      altText: _propTypes2.default.string
    }),
    noImage: _propTypes2.default.shape({
      sm: _propTypes2.default.shape({
        url: _propTypes2.default.string
      }),
      lg: _propTypes2.default.shape({
        url: _propTypes2.default.string
      })
    }),
    url: _propTypes2.default.string,
    title: _propTypes2.default.string,
    category: _propTypes2.default.shape(),
    date: _propTypes2.default.string
  })
};

exports.default = SmallContentCard;