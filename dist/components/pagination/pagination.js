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

var _paginate = require('../../component_helpers/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function (_React$PureComponent) {
  (0, _inherits3.default)(Pagination, _React$PureComponent);

  function Pagination() {
    (0, _classCallCheck3.default)(this, Pagination);
    return (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pagination, [{
    key: 'render',
    value: function render() {
      var pages = (0, _paginate2.default)(this.props.data) || [];
      return _react2.default.createElement(
        'ul',
        { className: 'pagination ' + this.props.data.size },
        pages.map(function (_ref, id) {
          var href = _ref.href,
              isActive = _ref.isActive,
              display = _ref.display;

          return _react2.default.createElement(
            'li',
            { key: id },
            _react2.default.createElement(
              'a',
              { href: href, className: isActive ? 'pagination__link--active' : 'pagination__link' },
              display
            )
          );
        })
      );
    }
  }]);
  return Pagination;
}(_react2.default.PureComponent);

Pagination.propTypes = {
  data: _propTypes2.default.shape({
    size: _propTypes2.default.string
  })
};

exports.default = Pagination;