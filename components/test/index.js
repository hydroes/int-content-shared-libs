'use strict'

module.exports = function () {
  var header = document.getElementById('bauer-web-component-test')
  if (typeof header === 'object' && header !== null) {
    header.addEventListener('click', function () {
      header.style.backgroundColor = 'red'
    })
  }
}
