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

var _small_card_image = require('../partials/small_card_image');

var _small_card_image2 = _interopRequireDefault(_small_card_image);

var _title = require('../partials/title');

var _title2 = _interopRequireDefault(_title);

var _card_date_time = require('../partials/card_date_time');

var _card_date_time2 = _interopRequireDefault(_card_date_time);

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
      var fullWidthCol = this.props.data.isInline ? '' : 'col-sm-12';
      return _React2.default.createElement(
        'article',
        { className: 'content-card content-card--small' },
        _React2.default.createElement(
          'div',
          { className: 'row' },
          _React2.default.createElement(
            'a',
            { className: 'content-card__link col-xs-4 ' + fullWidthCol, href: this.props.data.url },
            _React2.default.createElement(_small_card_image2.default, { images: this.props.data.images, title: this.props.data.title, noImage: this.props.data.noImage, icon: this.props.data.icon })
          ),
          _React2.default.createElement(
            'div',
            { className: 'content-card--small__info' + (this.props.data.isInline ? '--not-stacked' : '') + ' content-card__info col-xs-8 ' + fullWidthCol },
            _React2.default.createElement(_title2.default, { url: this.props.data.url, title: this.props.data.title }),
            this.props.data.category && this.props.data.date && _React2.default.createElement(_card_date_time2.default, { category: this.props.data.category, date: this.props.data.date })
          )
        )
      );
    }
  }]);
  return SmallContentCard;
}(_React.PureComponent);

SmallContentCard.propTypes = {
  data: _propTypes2.default.shape({
    isInline: _propTypes2.default.bool,
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

exports.default = SmallContentCard;