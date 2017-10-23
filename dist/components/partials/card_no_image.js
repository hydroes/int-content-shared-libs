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

var _card_icons = require('./card_icons/card_icons');

var _card_icons2 = _interopRequireDefault(_card_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardNoImage = function (_PureComponent) {
  (0, _inherits3.default)(CardNoImage, _PureComponent);

  function CardNoImage() {
    (0, _classCallCheck3.default)(this, CardNoImage);
    return (0, _possibleConstructorReturn3.default)(this, (CardNoImage.__proto__ || (0, _getPrototypeOf2.default)(CardNoImage)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardNoImage, [{
    key: 'render',
    value: function render() {
      var styleAttribute = 'background-image: url(' + this.props.image.sm.url + ')\'';
      console.log('---- ere now');
      return _React2.default.createElement(
        'div',
        { className: 'card-image pad-0' },
        _React2.default.createElement(_card_icons2.default, { icon: this.props.icon }),
        _React2.default.createElement(
          'picture',
          { className: 'missing-image brand-background-color', style: styleAttribute },
          _React2.default.createElement('source', { srcSet: this.props.image.sm.url, media: '(max-width: 439px)' }),
          _React2.default.createElement('img', { src: this.props.image.lg.url, alt: this.props.title })
        )
      );
    }
  }]);
  return CardNoImage;
}(_React.PureComponent);

CardNoImage.propTypes = {
  image: _propTypes2.default.shape({
    sm: _propTypes2.default.shape({
      url: _propTypes2.default.string
    }),
    lg: _propTypes2.default.shape({
      url: _propTypes2.default.string
    })
  }),
  icon: _propTypes2.default.shape({
    defaultImage: _propTypes2.default.shape({
      path: _propTypes2.default.string
    }),
    images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      maxWidth: _propTypes2.default.number,
      path: _propTypes2.default.string
    }))
  }),
  title: _propTypes2.default.string
};

exports.default = CardNoImage;