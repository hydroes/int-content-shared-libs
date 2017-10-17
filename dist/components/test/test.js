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

var Test = function (_React$Component) {
  (0, _inherits3.default)(Test, _React$Component);

  function Test() {
    (0, _classCallCheck3.default)(this, Test);
    return (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).apply(this, arguments));
  }

  (0, _createClass3.default)(Test, [{
    key: 'contructor',
    value: function contructor(props) {}
  }, {
    key: 'render',
    value: function render() {
      return _React2.default.createElement(
        'div',
        { className: 'bauer-web-component-test' },
        _React2.default.createElement(
          'h2',
          null,
          'Test component',
          _React2.default.createElement('br', null),
          _React2.default.createElement(
            'button',
            { id: 'bauer-web-component-test-btn', type: 'button', className: 'btn btn-default btn-lg' },
            _React2.default.createElement('span', { 'aria-hidden': 'true', className: 'glyphicon glyphicon-wrench' })
          ),
          this.props.title
        ),
        _React2.default.createElement(
          'span',
          null,
          'Example helper (formatting relative time): 6 mins ago'
        )
      );
    }
  }]);
  return Test;
}(_React2.default.Component);

Test.propTypes = {
  title: _propTypes2.default.string
};

exports.default = Test;