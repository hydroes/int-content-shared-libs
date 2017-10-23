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

var _rawImage = require('../../mixins/rawImage');

var _rawImage2 = _interopRequireDefault(_rawImage);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardIcons = function (_PureComponent) {
  (0, _inherits3.default)(CardIcons, _PureComponent);

  function CardIcons() {
    (0, _classCallCheck3.default)(this, CardIcons);
    return (0, _possibleConstructorReturn3.default)(this, (CardIcons.__proto__ || (0, _getPrototypeOf2.default)(CardIcons)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardIcons, [{
    key: 'render',
    value: function render() {
      var defaultIcon = _lodash2.default.result(this.props, 'icon.defaultImage.path', '');
      defaultIcon = _lodash2.default.result(this.props, 'icon.image.url', defaultIcon); // -  kept icon.image.url as precedence for backward compatibility with changes
      var hasIconImage = _lodash2.default.result(this.props, 'images.xs.url', '') || _lodash2.default.result(this.props, 'images.sm.url', '');
      console.log('--------- before the if');
      if (defaultIcon && hasIconImage) {
        var imageSizes = this.props.icon.images || [];
        return _React2.default.createElement(
          'div',
          { className: 'card-icon' },
          _React2.default.createElement(_rawImage2.default, { defaultImgUrl: defaultIcon, imageSizes: imageSizes })
        );
      }
      console.log('returning nothing');
      return null;
    }
  }]);
  return CardIcons;
}(_React.PureComponent);

CardIcons.propTypes = {
  icon: _propTypes2.default.shape({
    defaultImage: _propTypes2.default.shape({
      path: _propTypes2.default.string
    }),
    images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      maxWidth: _propTypes2.default.number,
      path: _propTypes2.default.string
    }))
  }),
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
  })
};

exports.default = CardIcons;