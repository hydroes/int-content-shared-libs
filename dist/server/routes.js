'use strict';

// Add routes to the app from this file

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var pkg = require('../../package.json');
var shared = {
  component: function component(templateName, templateData) {
    return require(path.join(__dirname, './../../dist/libs/component'))(templateName, templateData);
  },
  data: function data(filePath) {
    return require(path.join(__dirname, './../../dist/libs/dataMapper'))(filePath);
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
};