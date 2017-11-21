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

var _small_content_card = require('./../small_content_card/small_content_card');

var _small_content_card2 = _interopRequireDefault(_small_content_card);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextGalleryContentCard = function (_PureComponent) {
  (0, _inherits3.default)(NextGalleryContentCard, _PureComponent);

  function NextGalleryContentCard() {
    (0, _classCallCheck3.default)(this, NextGalleryContentCard);
    return (0, _possibleConstructorReturn3.default)(this, (NextGalleryContentCard.__proto__ || (0, _getPrototypeOf2.default)(NextGalleryContentCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(NextGalleryContentCard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'article',
        { className: 'next-gallery-card' },
        _react2.default.createElement(
          _small_content_card2.default,
          { tag: 'div', linkBreakpoint: 'col-xs-4',
            infoBreakpoint: 'col-xs-7',
            data: this.props.data },
          _react2.default.createElement('a', { className: 'col-xs-1 pad-0 card-arrow',
            href: this.props.data.url,
            style: { background: 'url(' + this.props.data.navIconImgSrc + ') no-repeat center' } })
        )
      );
    }
  }]);
  return NextGalleryContentCard;
}(_react.PureComponent);

NextGalleryContentCard.propTypes = {
  data: _propTypes2.default.shape({
    navIconImgSrc: _propTypes2.default.string,
    url: _propTypes2.default.string
  })
};

exports.default = NextGalleryContentCard;