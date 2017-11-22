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

var _rawImage = require('../partials/rawImage');

var _rawImage2 = _interopRequireDefault(_rawImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_PureComponent) {
  (0, _inherits3.default)(Image, _PureComponent);

  function Image() {
    (0, _classCallCheck3.default)(this, Image);
    return (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).apply(this, arguments));
  }

  (0, _createClass3.default)(Image, [{
    key: 'render',
    value: function render() {
      var altText = '';
      if (!altText) {
        altText = this.props.data.title;
      } else {
        altText = this.props.data.altText;
      }

      return _React2.default.createElement(_rawImage2.default, { defaultImgUrl: this.props.data.defaultImage.path, imageSizes: this.props.data.images, altText: altText, caption: this.props.data.caption, credits: this.props.data.credits });
    }
  }]);
  return Image;
}(_React.PureComponent);

Image.propTypes = {
  data: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    altText: _propTypes2.default.string,
    defaultImage: _propTypes2.default.shape({
      path: _propTypes2.default.string
    }),
    images: _propTypes2.default.shape({
      maxWidth: _propTypes2.default.number,
      path: _propTypes2.default.string
    }),
    caption: _propTypes2.default.string,
    credits: _propTypes2.default.string
  })
};

exports.default = Image;