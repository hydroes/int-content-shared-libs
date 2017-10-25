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

var _meta = require('../meta/meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OgTags = function (_PureComponent) {
  (0, _inherits3.default)(OgTags, _PureComponent);

  function OgTags() {
    (0, _classCallCheck3.default)(this, OgTags);
    return (0, _possibleConstructorReturn3.default)(this, (OgTags.__proto__ || (0, _getPrototypeOf2.default)(OgTags)).apply(this, arguments));
  }

  (0, _createClass3.default)(OgTags, [{
    key: 'generateSecureImageMeta',
    value: function generateSecureImageMeta() {
      if (this.props.data.image.secure_url) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:image:secure_url', content: this.props.data.image.secure_url }));
      } else if (this.props.data.image.url.startsWith('https')) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:image:secure_url', content: this.props.data.image.url }));
      }
    }
  }, {
    key: 'generateSecureVideoMeta',
    value: function generateSecureVideoMeta() {
      if (this.props.data.video.secure_url) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video:secure_url', content: this.props.data.video.secure_url }));
      } else if (this.props.data.video.url.startsWith('https')) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video:secure_url', content: this.props.data.video.url }));
      }
    }
  }, {
    key: 'generateMediaMeta',
    value: function generateMediaMeta() {
      if (this.props.data.image) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:image', content: this.props.data.image.url }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:image:width', content: this.props.data.image.width.toString() }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:image:height', content: this.props.data.image.height.toString() }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:image:type', content: this.props.data.image.type }));
      } else if (this.props.data.video) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video', content: this.props.data.video.url }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video:width', content: this.props.data.video.width.toString() }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video:height', content: this.props.data.video.height.toString() }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video:type', content: this.props.data.video.type }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:video:image', content: this.props.data.video.imageUrl }));
      }
    }
  }, {
    key: 'generateArticleMeta',
    value: function generateArticleMeta() {
      if (this.props.data.article) {
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'article:published_time', content: this.props.data.article.published_time }));
        this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'article:author', content: this.props.data.article.author }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.metaItems = [];

      this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:site_name', content: this.props.data.site_name }));
      this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:type', content: this.props.data.type }));
      this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:url', content: this.props.data.url }));
      this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:description', content: this.props.data.description }));
      this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:title', content: this.props.data.title }));
      this.metaItems.push(_React2.default.createElement(_meta2.default, { property: 'og:locale', content: this.props.data.locale }));
      this.generateMediaMeta();
      this.generateArticleMeta();

      return this.metaItems;
    }
  }]);
  return OgTags;
}(_React.PureComponent);

OgTags.propTypes = {
  data: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    site_name: _propTypes2.default.string,
    locale: _propTypes2.default.string,
    url: _propTypes2.default.string,
    type: _propTypes2.default.string,
    image: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      secure_url: _propTypes2.default.string,
      width: _propTypes2.default.number,
      height: _propTypes2.default.number,
      type: _propTypes2.default.string
    }),
    video: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      secure_url: _propTypes2.default.string,
      width: _propTypes2.default.number,
      height: _propTypes2.default.number,
      type: _propTypes2.default.string,
      imageUrl: _propTypes2.default.string
    }),
    article: _propTypes2.default.shape({
      published_time: _propTypes2.default.string,
      author: _propTypes2.default.string
    })
  })
};

exports.default = OgTags;