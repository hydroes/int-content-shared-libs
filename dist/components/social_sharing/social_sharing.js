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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialSharing = function (_React$Component) {
  (0, _inherits3.default)(SocialSharing, _React$Component);

  function SocialSharing(props) {
    (0, _classCallCheck3.default)(this, SocialSharing);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SocialSharing.__proto__ || (0, _getPrototypeOf2.default)(SocialSharing)).call(this, props));

    _this.state = {
      shareUrl: _this.props.data.protocol + _this.props.data.host + _this.props.data.pathname
    };
    _this.element = {
      facebook: _react2.default.createElement('li', null),
      twitter: _react2.default.createElement('li', null)
    };
    _this.defaultMsg = _this.props.data.shareMsg.default;
    _this.shareMsg = _this.props.data.shareMsg;
    return _this;
  }

  (0, _createClass3.default)(SocialSharing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.element.facebook.onclick = function (evt) {
        evt.preventDefault();
        window.open('https://www.facebook.com/sharer.php?u=' + _this2.state.shareUrl, '_blank', 'width=600, height=300');
      };

      this.element.twitter.onclick = function (evt) {
        evt.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent((_this2.shareMsg.twitter || _this2.defaultMsg) + ' ') + '&amp;url=' + _this2.state.shareUrl + '&amp;original_referer=', '_blank', 'width=600,height=300');
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var componentId = this.props.componentId;

      return _react2.default.createElement(
        'ul',
        { id: componentId, className: 'social-sharing' },
        _react2.default.createElement(
          'li',
          { className: 'article-social-share-facebook', ref: function ref(el) {
              _this3.element.facebook = el;
            } },
          _react2.default.createElement(
            'a',
            { href: '#', 'data-social-share-url': this.state.shareUrl },
            _react2.default.createElement('img', { src: 'https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg', alt: 'Share on Facebook', title: 'Share on Facebook' })
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'article-social-share-twitter', ref: function ref(el) {
              _this3.element.twitter = el;
            } },
          _react2.default.createElement(
            'a',
            { href: '#', 'data-social-share-url': this.state.shareUrl },
            _react2.default.createElement('img', { src: 'https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter.svg', alt: 'Tweet on Twitter', title: 'Tweet on Twitter' })
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'article-social-share-whatsapp' },
          _react2.default.createElement(
            'a',
            { href: 'whatsapp://send?text=' + encodeURIComponent((this.shareMsg.whatsApp || this.defaultMsg) + ' ' + this.state.shareUrl) },
            _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/124/124034.svg', 'data-action': 'share/whatsapp/share', alt: 'Text on Whatsapp', title: 'Text on Whatsapp' })
          )
        )
      );
    }
  }]);
  return SocialSharing;
}(_react2.default.Component);

SocialSharing.propTypes = {
  componentId: _propTypes2.default.string,
  data: _propTypes2.default.shape({
    host: _propTypes2.default.string,
    pathname: _propTypes2.default.string,
    protocol: _propTypes2.default.string,
    shareMsg: _propTypes2.default.shape({
      default: _propTypes2.default.string,
      twitter: _propTypes2.default.string,
      whatsApp: _propTypes2.default.string
    })
  })
};

exports.default = SocialSharing;
//# sourceMappingURL=social_sharing.js.map
