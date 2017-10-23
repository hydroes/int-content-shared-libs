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

var _card_no_image = require('./card_no_image');

var _card_no_image2 = _interopRequireDefault(_card_no_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmallCardImage = function (_PureComponent) {
  (0, _inherits3.default)(SmallCardImage, _PureComponent);

  function SmallCardImage() {
    (0, _classCallCheck3.default)(this, SmallCardImage);
    return (0, _possibleConstructorReturn3.default)(this, (SmallCardImage.__proto__ || (0, _getPrototypeOf2.default)(SmallCardImage)).apply(this, arguments));
  }

  (0, _createClass3.default)(SmallCardImage, [{
    key: 'render',
    value: function render() {
      if (this.props.images) {
        return _React2.default.createElement(
          'div',
          { className: 'card-image pad-0' },
          _React2.default.createElement(
            'div',
            { className: 'col-xs-4 col-sm-3 col-md-2 icon-container' },
            _React2.default.createElement(_card_icons2.default, { icon: this.props.icon, images: this.props.images })
          ),
          _React2.default.createElement(
            'picture',
            null,
            _React2.default.createElement('source', { type: this.props.images.xs.mimeType, srcSet: this.props.images.xs.url, media: '(max-width: 480px)' }),
            _React2.default.createElement('img', { src: this.props.images.sm.url, alt: this.props.images.altText })
          )
        );
      } else {
        return _React2.default.createElement(_card_no_image2.default, { image: this.props.noImage, title: this.props.title, icon: this.props.icon });
      }
    }
  }]);
  return SmallCardImage;
}(_React.PureComponent);

SmallCardImage.propTypes = {
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
  title: _propTypes2.default.string,
  noImage: _propTypes2.default.shape({
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
  })
};

exports.default = SmallCardImage;