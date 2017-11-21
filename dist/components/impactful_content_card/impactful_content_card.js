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

var _large_card_image = require('../partials/large_card_image');

var _large_card_image2 = _interopRequireDefault(_large_card_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImpactfulContentCard = function (_PureComponent) {
  (0, _inherits3.default)(ImpactfulContentCard, _PureComponent);

  function ImpactfulContentCard() {
    (0, _classCallCheck3.default)(this, ImpactfulContentCard);
    return (0, _possibleConstructorReturn3.default)(this, (ImpactfulContentCard.__proto__ || (0, _getPrototypeOf2.default)(ImpactfulContentCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(ImpactfulContentCard, [{
    key: 'render',
    value: function render() {
      return _React2.default.createElement(
        'article',
        { className: 'content-card content-card--impactful' },
        _React2.default.createElement(
          'div',
          { className: 'row' },
          _React2.default.createElement(
            'a',
            { className: 'content-card__info content-card__info--impactful col-xs-12', href: this.props.data.url },
            _React2.default.createElement(_large_card_image2.default, { images: this.props.data.images, title: this.props.data.title, noImage: this.props.data.noImage, icon: this.props.data.icon }),
            _React2.default.createElement(
              'div',
              { className: 'title-container' },
              _React2.default.createElement(
                'div',
                { className: 'title-container__item col-xs-12 col-sm-5 col-md-6' },
                _React2.default.createElement(
                  'span',
                  { className: 'title impactful-text impactful-text--card' },
                  this.props.data.title
                )
              )
            )
          )
        )
      );
    }
  }]);
  return ImpactfulContentCard;
}(_React.PureComponent);

ImpactfulContentCard.propTypes = {
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

exports.default = ImpactfulContentCard;