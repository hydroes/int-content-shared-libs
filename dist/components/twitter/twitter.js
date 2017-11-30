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

var Twitter = function (_React$Component) {
  (0, _inherits3.default)(Twitter, _React$Component);

  function Twitter() {
    (0, _classCallCheck3.default)(this, Twitter);
    return (0, _possibleConstructorReturn3.default)(this, (Twitter.__proto__ || (0, _getPrototypeOf2.default)(Twitter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Twitter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.twttr = function (d, s, id) {
        var js;
        var fjs = d.getElementsByTagName(s)[0];
        var t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
        t._e = [];
        t.ready = function (f) {
          t._e.push(f);
        };
        return t;
      }(document, 'script', 'twitter-wjs');
    }
  }, {
    key: 'render',
    value: function render() {
      var componentId = this.props.componentId;
      var url = this.props.data.url;
      return _react2.default.createElement(
        'div',
        { id: componentId, className: 'embeds-twitter' },
        _react2.default.createElement(
          'blockquote',
          { className: 'twitter-tweet' },
          _react2.default.createElement('a', { href: url })
        )
      );
    }
  }]);
  return Twitter;
}(_react2.default.Component);

Twitter.propTypes = {
  componentId: _propTypes2.default.string,
  data: _propTypes2.default.shape({
    url: _propTypes2.default.string
  })
};

exports.default = Twitter;
//# sourceMappingURL=twitter.js.map
