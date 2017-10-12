'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageGenerator = function () {
  function PageGenerator(data) {
    (0, _classCallCheck3.default)(this, PageGenerator);

    this._data = data;
  }

  (0, _createClass3.default)(PageGenerator, [{
    key: 'generatePages',
    value: function generatePages() {
      this._pages = [];
    }
  }, {
    key: 'createPage',
    value: function createPage(display, isActive, pageNumber) {
      this._pages.push({
        display: display,
        page: pageNumber,
        href: this.parsePath(this._data.page, pageNumber, this._data.path),
        isActive: isActive
      });
    }
  }, {
    key: 'parsePath',
    value: function parsePath(page, current, path) {
      var pathArray = path.split('/', 3);
      if (pathArray[2] === '' || parseInt(pathArray[2]) === page) {
        return current === 1 ? '/' + pathArray[1] : '/' + pathArray[1] + '/' + current;
      }

      if (isNaN(pathArray[2])) {
        var fullPath = pathArray[1] + '/' + pathArray[2];
        return current === 1 ? '/' + fullPath + '/' : '/' + fullPath + '/' + current + '/';
      }

      return '/';
    }
  }]);
  return PageGenerator;
}();

var SequentialGenerator = function (_PageGenerator) {
  (0, _inherits3.default)(SequentialGenerator, _PageGenerator);

  function SequentialGenerator() {
    (0, _classCallCheck3.default)(this, SequentialGenerator);
    return (0, _possibleConstructorReturn3.default)(this, (SequentialGenerator.__proto__ || (0, _getPrototypeOf2.default)(SequentialGenerator)).apply(this, arguments));
  }

  (0, _createClass3.default)(SequentialGenerator, [{
    key: 'generatePages',
    value: function generatePages() {
      (0, _get3.default)(SequentialGenerator.prototype.__proto__ || (0, _getPrototypeOf2.default)(SequentialGenerator.prototype), 'generatePages', this).call(this);
      var noOfPagesToRender = void 0;
      if (this._data.limit) {
        noOfPagesToRender = this._data.limit > this._data.totalPages ? this._data.totalPages - 1 : this._data.limit;
      } else {
        noOfPagesToRender = this._data.totalPages < 10 ? this._data.totalPages - 1 : 10;
      }

      // render the back arrow if we arent on page 1
      if (this._data.page !== 1) {
        this.createPage('<', false, this._data.page - 1);
      }

      // we always want page 1
      this.createPage(1, this._data.page === 1, 1);

      if (this._data.totalPages > 1) {
        // create the pages either side of the current page
        this.createMovingPageWindow(noOfPagesToRender);

        // we always want the last page
        this.createPage(this._data.totalPages, this._data.totalPages === this._data.page, this._data.totalPages);

        // render the forward arrow if we arent at the end
        if (this._data.page !== this._data.totalPages) {
          this.createPage('>', false, this._data.nextPage);
        }
      }

      return this._pages;
    }
  }, {
    key: 'createMovingPageWindow',
    value: function createMovingPageWindow(noOfPagesToRender) {
      var defaultLowerBound = 2;
      var defaultUpperBound = this._data.totalPages - 1;
      var windowSize = noOfPagesToRender - 1;
      var numberToFillBy = Math.ceil((noOfPagesToRender - 2) / 2);
      var lowerPageBound = noOfPagesToRender;
      var upperPageBound = void 0;

      if (this._data.page === 1) {
        // selected page is the first one
        lowerPageBound = defaultLowerBound;
        upperPageBound = noOfPagesToRender;
      } else if (this._data.page === this._data.totalPages) {
        // selected page is the last one
        lowerPageBound = this._data.totalPages - windowSize;
        upperPageBound = defaultUpperBound;
      } else {
        // we are in the middle of the two ends somewhere.
        lowerPageBound = this._data.page - numberToFillBy;
        upperPageBound = this._data.page + numberToFillBy;
      }

      // reset the bounds if the window has set negative numbers or greater than the total page count
      lowerPageBound = lowerPageBound <= 1 ? defaultLowerBound : lowerPageBound;
      upperPageBound = upperPageBound > defaultUpperBound ? defaultUpperBound : upperPageBound;

      for (var i = lowerPageBound; i <= upperPageBound; i++) {
        this.createPage(i, i === this._data.page, i);
      }
    }
  }]);
  return SequentialGenerator;
}(PageGenerator);

var LogarithmicGenerator = function (_PageGenerator2) {
  (0, _inherits3.default)(LogarithmicGenerator, _PageGenerator2);

  function LogarithmicGenerator() {
    (0, _classCallCheck3.default)(this, LogarithmicGenerator);
    return (0, _possibleConstructorReturn3.default)(this, (LogarithmicGenerator.__proto__ || (0, _getPrototypeOf2.default)(LogarithmicGenerator)).apply(this, arguments));
  }

  (0, _createClass3.default)(LogarithmicGenerator, [{
    key: 'generatePages',
    // eslint-disable-line
    value: function generatePages() {
      // eslint-disable-line
      (0, _get3.default)(LogarithmicGenerator.prototype.__proto__ || (0, _getPrototypeOf2.default)(LogarithmicGenerator.prototype), 'generatePages', this).call(this); // eslint-disable-line
    } // eslint-disable-line

  }]);
  return LogarithmicGenerator;
}(PageGenerator); // eslint-disable-line

var Paginator = function () {
  function Paginator(pageGenerator) {
    (0, _classCallCheck3.default)(this, Paginator);
    // e.g. sequential or logarithmic
    this._pageGenerator = pageGenerator;
    this._pages = [];

    if (this._pageGenerator) {
      // and generate function exists
      this._pages = this._pageGenerator.generatePages();
    }
  }

  (0, _createClass3.default)(Paginator, [{
    key: 'pages',
    get: function get() {
      return this._pages;
    }
  }]);
  return Paginator;
}();

module.exports = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var paginate = new Paginator(new SequentialGenerator(data));
  return paginate.pages;
};