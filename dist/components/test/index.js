'use strict';

var $ = require('jquery');

module.exports = function () {
  $(function () {
    var $btn = $('#bauer-web-component-test-btn');
    $btn.click(function (e) {
      e.preventDefault();
      $btn.css('background-color', 'rgb(255, 17, 17)');
    });
  });
};