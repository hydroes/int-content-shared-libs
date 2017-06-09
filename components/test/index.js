'use strict'
/* global $ */
module.exports = function () {
  $(function () {
    var btn = document.getElementById('bauer-web-component-test-btn')
    if (typeof btn === 'object' && btn !== null) {
      btn.addEventListener('click', function () {
        if (btn.style.backgroundColor === 'red') {
          btn.style.backgroundColor = 'white  '
        } else {
          btn.style.backgroundColor = 'red'
        }
      })
    }
  })
}
