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

var RawImage = function (_PureComponent) {
  (0, _inherits3.default)(RawImage, _PureComponent);

  function RawImage() {
    (0, _classCallCheck3.default)(this, RawImage);
    return (0, _possibleConstructorReturn3.default)(this, (RawImage.__proto__ || (0, _getPrototypeOf2.default)(RawImage)).apply(this, arguments));
  }

  (0, _createClass3.default)(RawImage, [{
    key: 'buildSourceElements',
    value: function buildSourceElements(items) {
      var sourceElements = items.map(function (item) {
        if (item.path) {
          var mediaQuery = '(max-width: ' + item.maxWidth + 'px)';
          return _React2.default.createElement('source', { media: mediaQuery, srcSet: item.path });
        }
      });

      return sourceElements;
    }
  }, {
    key: 'buildCaption',
    value: function buildCaption() {
      if (this.props.caption) {
        return _React2.default.createElement(
          'span',
          { className: 'image__text__caption' },
          this.props.caption,
          ' '
        );
      }
    }
  }, {
    key: 'buildCredit',
    value: function buildCredit() {
      if (this.props.credits) {
        return _React2.default.createElement(
          'span',
          { className: 'image__text__credit' },
          '\xA9 ',
          this.props.credits
        );
      }
    }
  }, {
    key: 'buildSpans',
    value: function buildSpans() {
      if (this.props.credits || this.props.caption) {
        return _React2.default.createElement(
          'span',
          { className: 'image__text' },
          this.buildCaption(),
          this.buildCredit()
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var sources = this.buildSourceElements(this.props.imageSizes);
      return _React2.default.createElement(
        'picture',
        { className: 'image' },
        sources,
        _React2.default.createElement('img', { src: this.props.defaultImgUrl, alt: this.props.altText, title: this.props.altText }),
        this.buildSpans()
      );
    }
  }]);
  return RawImage;
}(_React.PureComponent);

RawImage.propTypes = {
  defaultImgUrl: _propTypes2.default.string,
  caption: _propTypes2.default.string,
  credits: _propTypes2.default.string,
  altText: _propTypes2.default.string,
  imageSizes: _propTypes2.default.array
};

exports.default = RawImage;