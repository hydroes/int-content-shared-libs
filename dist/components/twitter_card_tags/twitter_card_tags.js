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

var _meta = require('../meta/meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterCardTags = function (_PureComponent) {
  (0, _inherits3.default)(TwitterCardTags, _PureComponent);

  function TwitterCardTags() {
    (0, _classCallCheck3.default)(this, TwitterCardTags);
    return (0, _possibleConstructorReturn3.default)(this, (TwitterCardTags.__proto__ || (0, _getPrototypeOf2.default)(TwitterCardTags)).apply(this, arguments));
  }

  (0, _createClass3.default)(TwitterCardTags, [{
    key: 'generateMediaMeta',
    value: function generateMediaMeta() {
      if (this.props.data.image) {
        this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:image', content: this.props.data.image.url }));
        this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:image:alt', content: this.props.data.image.alt }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.metaItems = [];

      this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:title', content: this.props.data.title }));
      this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:description', content: this.props.data.description }));
      this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:card', content: this.props.data.twitter.cardType }));
      this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:site', content: this.props.data.twitter.site }));
      this.metaItems.push(_react2.default.createElement(_meta2.default, { name: 'twitter:creator', content: this.props.data.twitter.creator }));
      this.generateMediaMeta();

      return this.metaItems;
    }
  }]);
  return TwitterCardTags;
}(_react.PureComponent);

TwitterCardTags.propTypes = {
  data: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    image: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      alt: _propTypes2.default.string
    }),
    twitter: _propTypes2.default.shape({
      cardType: _propTypes2.default.string,
      site: _propTypes2.default.string,
      creator: _propTypes2.default.string,
      domain: _propTypes2.default.string
    })
  })
};

exports.default = TwitterCardTags;