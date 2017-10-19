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

var Articletags = function (_Component) {
  (0, _inherits3.default)(Articletags, _Component);

  function Articletags() {
    (0, _classCallCheck3.default)(this, Articletags);
    return (0, _possibleConstructorReturn3.default)(this, (Articletags.__proto__ || (0, _getPrototypeOf2.default)(Articletags)).apply(this, arguments));
  }

  (0, _createClass3.default)(Articletags, [{
    key: 'tagItem',
    value: function tagItem() {
      var tagItems = this.props.data.tags;
      var list = tagItems.map(function (tag) {
        if (tag && tag.name) {
          return _React2.default.createElement(
            'li',
            { className: 'pad-0.margin-l-r-5' },
            _React2.default.createElement(
              'a',
              { className: 'pad-10', href: tag.url },
              tag.name
            )
          );
        }
      });
      return list;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.data.tags) {
        return _React2.default.createElement(
          'ul',
          { className: 'article-tags' },
          this.tagItem()
        );
      }
    }
  }]);
  return Articletags;
}(_React.Component);

Articletags.propTypes = {
  data: _propTypes2.default.object
};

exports.default = Articletags;