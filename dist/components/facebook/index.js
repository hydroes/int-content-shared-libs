'use strict';

var $ = require('jquery');

module.exports = function () {
  $(document).ready(function () {
    $('.embed--facebook').each(function () {
      var _self = $(this);
      var oembedUrl = 'https://www.facebook.com/plugins/post/oembed.json/?url=' + _self.data('embed-id');
      $.ajax({
        url: oembedUrl,
        dataType: 'jsonp',
        success: function success(data) {
          _self.html(data.html);
        },
        error: function error(result) {}
      });
    });
  });
};