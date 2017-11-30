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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facebook = function (_React$Component) {
  (0, _inherits3.default)(Facebook, _React$Component);

  function Facebook(props) {
    (0, _classCallCheck3.default)(this, Facebook);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Facebook.__proto__ || (0, _getPrototypeOf2.default)(Facebook)).call(this, props));

    _this.state = {
      oembedUrl: _this.props.data.url,
      oembedHtml: _this.props.data.url
    };
    _this.element = _react2.default.createElement('div', null);
    return _this;
  }

  (0, _createClass3.default)(Facebook, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _self = (0, _jquery2.default)(this.element);
      var oembedUrl = 'https://www.facebook.com/plugins/post/oembed.json/?url=' + _self.data('embed-id');
      _jquery2.default.ajax({
        url: oembedUrl,
        dataType: 'jsonp',
        success: function success(data) {
          _self.html(data.html);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var componentId = this.props.componentId;
      var _state = this.state,
          oembedUrl = _state.oembedUrl,
          oembedHtml = _state.oembedHtml;


      return _react2.default.createElement(
        'div',
        { id: componentId, 'data-embed-id': oembedUrl, className: 'embed--facebook', ref: function ref(el) {
            _this2.element = el;
          } },
        _react2.default.createElement(
          'a',
          { href: oembedUrl },
          oembedHtml
        )
      );
    }
  }]);
  return Facebook;
}(_react2.default.Component);

Facebook.propTypes = {
  componentId: _propTypes2.default.string,
  data: _propTypes2.default.shape({
    url: _propTypes2.default.string
  })
};

exports.default = Facebook;
//# sourceMappingURL=facebook.js.map
