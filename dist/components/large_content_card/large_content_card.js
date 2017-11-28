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

var _large_card_image = require('../partials/large_card_image');

var _large_card_image2 = _interopRequireDefault(_large_card_image);

var _title = require('../partials/title');

var _title2 = _interopRequireDefault(_title);

var _card_date_time = require('../partials/card_date_time');

var _card_date_time2 = _interopRequireDefault(_card_date_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargeContentCard = function (_PureComponent) {
  (0, _inherits3.default)(LargeContentCard, _PureComponent);

  function LargeContentCard() {
    (0, _classCallCheck3.default)(this, LargeContentCard);
    return (0, _possibleConstructorReturn3.default)(this, (LargeContentCard.__proto__ || (0, _getPrototypeOf2.default)(LargeContentCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(LargeContentCard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'article',
        { className: 'content-card content-card--large' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'a',
            { className: 'content-card--large__link content-card__link col-xs-12', href: this.props.data.url },
            _react2.default.createElement(_large_card_image2.default, { images: this.props.data.images, title: this.props.data.title, noImage: this.props.data.noImage, icon: this.props.data.icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-card--large__info content-card__info col-xs-12' },
            _react2.default.createElement(_title2.default, { url: this.props.data.url, title: this.props.data.title }),
            _react2.default.createElement(_card_date_time2.default, { category: this.props.data.category, date: this.props.data.date })
          )
        )
      );
    }
  }]);
  return LargeContentCard;
}(_react.PureComponent);

LargeContentCard.propTypes = {
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
    category: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      name: _propTypes2.default.string
    }),
    date: _propTypes2.default.string,
    icon: _propTypes2.default.shape({
      defaultImage: _propTypes2.default.shape({
        path: _propTypes2.default.string
      }),
      images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        maxWidth: _propTypes2.default.number,
        path: _propTypes2.default.string
      }))
    })
  })
};

exports.default = LargeContentCard;