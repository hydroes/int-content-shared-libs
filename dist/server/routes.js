'use strict';

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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add routes to the app from this file

var path = require('path');
var pkg = require('../../package.json');
var shared = {
  component: function component(templateName, templateData) {
    return require(path.join(__dirname, './../../src/libs/template'))(templateName, templateData);
  },
  data: function data(filePath) {
    return require(path.join(__dirname, './../../src/libs/dataMapper'))(filePath);
  }
};

var templateOpts = {
  debug: false,
  pretty: true,
  compileDebug: true,
  cache: false,
  shared: shared,
  pkg: pkg
};

module.exports = function (router) {
  router.get('/', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.render('index', templateOpts);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  router.get('/ui-components', function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ctx.render('ui-components', templateOpts);

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  router.redirect('/ui', '/ui-components');

  router.get('/embeds', function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return ctx.render('embeds', templateOpts);

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  router.redirect('/embed', '/embeds');

  router.get('/css-utilities', function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return ctx.render('css-utilities', templateOpts);

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  router.get('/content-cards', function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ctx, next) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return ctx.render('content-cards', templateOpts);

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
  router.redirect('/cards', '/content-cards');

  router.get('/meta-tags', function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(ctx, next) {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return ctx.render('meta-tags', templateOpts);

            case 2:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
  router.redirect('/metas', '/meta-tags');

  router.get('/e2e', function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(ctx, next) {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return ctx.render('e2e', templateOpts);

            case 2:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());

  router.get('/react', function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(ctx, next) {
      var HelloMessage, html;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // await ctx.render('react', templateOpts)

              HelloMessage = function (_React$Component) {
                (0, _inherits3.default)(HelloMessage, _React$Component);

                function HelloMessage() {
                  (0, _classCallCheck3.default)(this, HelloMessage);
                  return (0, _possibleConstructorReturn3.default)(this, (HelloMessage.__proto__ || (0, _getPrototypeOf2.default)(HelloMessage)).apply(this, arguments));
                }

                (0, _createClass3.default)(HelloMessage, [{
                  key: 'render',
                  value: function render() {
                    return _react2.default.createElement(
                      'div',
                      null,
                      'Hello ',
                      this.props.name
                    );
                  }
                }]);
                return HelloMessage;
              }(_react2.default.Component);

              html = _server2.default.renderToString(_react2.default.createElement(HelloMessage, { name: 'Brian' }));
              _context8.next = 4;
              return ctx.res.write(html);

            case 4:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};