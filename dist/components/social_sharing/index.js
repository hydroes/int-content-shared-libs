'use strict';

var $ = require('jquery');
module.exports = function (window) {
  setTimeout(function () {
    // @todo timeout needs to be removed before final deployment version
    $(document).ready(function () {
      $('[data-partial="social-share"]').each(function () {
        var _self = $(this);
        if (_self.hasClass('article-social-share-facebook')) {
          // console.log('Facebook Share', _self.find('a').data('social-share-url'))
          _self.click(function (ev) {
            window.open('https://www.facebook.com/sharer.php?u=' + _self.find('a').data('social-share-url'), '_blank', 'width=600, height=300');
          });
        } else if (_self.hasClass('article-social-share-twitter')) {
          _self.click(function (ev) {
            ev.preventDefault();
            // console.log('Twitter Share', _self.find('a').data('social-share-url'))
            window.open('https://twitter.com/intent/tweet?text=Radio%20-%20&amp;url=' + _self.find('a').data('social-share-url') + '&amp;original_referer=', '_blank', 'width=600,height=300');
          });
        }
      });
    });
  }, 600);
};