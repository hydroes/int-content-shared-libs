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

var _brightcove = require('../brightcove/brightcove');

var _brightcove2 = _interopRequireDefault(_brightcove);

var _youtube = require('../youtube/youtube');

var _youtube2 = _interopRequireDefault(_youtube);

var _vimeo = require('../vimeo/vimeo');

var _vimeo2 = _interopRequireDefault(_vimeo);

var _facebook = require('../facebook/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var videoStyles = {
  container: {
    padding: '2em 0',
    background: '#000'
  },
  video: {
    width: '80%',
    margin: '0 auto'
  }
};

var Video = function (_React$PureComponent) {
  (0, _inherits3.default)(Video, _React$PureComponent);

  function Video() {
    (0, _classCallCheck3.default)(this, Video);
    return (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).apply(this, arguments));
  }

  (0, _createClass3.default)(Video, [{
    key: 'renderVideos',
    value: function renderVideos(type, data) {
      switch (type) {
        case 'brightcove':
          return _react2.default.createElement(_brightcove2.default, { data: data });
        case 'youtube':
          return _react2.default.createElement(_youtube2.default, { data: data });
        case 'vimeo':
          return _react2.default.createElement(_vimeo2.default, { data: data });
        case 'facebook':
          return _react2.default.createElement(_facebook2.default, { data: data });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row', style: videoStyles.container },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { style: videoStyles.video },
            this.renderVideos(this.props.data.content.provider, this.props.data.content)
          )
        )
      );
    }
  }]);
  return Video;
}(_react2.default.PureComponent);

Video.propTypes = {
  data: _propTypes2.default.shape({
    content: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      type: _propTypes2.default.string,
      provider: _propTypes2.default.string
    })
  })
};

exports.default = Video;