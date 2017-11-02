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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Instagram = function (_React$Component) {
  (0, _inherits3.default)(Instagram, _React$Component);

  function Instagram(props) {
    (0, _classCallCheck3.default)(this, Instagram);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Instagram.__proto__ || (0, _getPrototypeOf2.default)(Instagram)).call(this, props));

    _this.state = {
      oembedUrl: _this.props.data.url,
      oembedHtml: _this.props.data.url
    };
    return _this;
  }

  (0, _createClass3.default)(Instagram, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)('.embeds-instagram').each(function () {
        var _self = (0, _jquery2.default)(this);
        var oembedUrl = 'https://api.instagram.com/oembed?url=' + _self.data('embed-id');
        _jquery2.default.ajax({
          url: oembedUrl,
          dataType: 'jsonp',
          success: function success(data) {
            _self.html(data.html);
          },
          error: function error(result) {
            console.log('Instagram oembed error!');
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var componentId = this.props.componentId;
      var _state = this.state,
          oembedUrl = _state.oembedUrl,
          oembedHtml = _state.oembedHtml;

      return _React2.default.createElement(
        'div',
        { id: componentId, 'data-embed-id': oembedUrl, className: 'embeds-instagram' },
        _React2.default.createElement(
          'a',
          { href: oembedUrl },
          oembedHtml
        )
      );
    }
  }]);
  return Instagram;
}(_React2.default.Component);

Instagram.propTypes = {
  componentId: _propTypes2.default.string,
  data: _propTypes2.default.shape({
    url: _propTypes2.default.string
  })
};

exports.default = Instagram;