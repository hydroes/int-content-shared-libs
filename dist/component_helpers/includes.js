'use strict';

// variables exported here will be available in templates

var _giphy = require('./giphy');
var _paginate = require('./paginate');

module.exports = {
  giphy: function giphy(url) {
    return _giphy(url);
  },
  paginate: function paginate(data) {
    return _paginate(data);
  }
};