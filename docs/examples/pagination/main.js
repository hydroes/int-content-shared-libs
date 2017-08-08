'use strict'

window.jQuery.getJSON('examples/pagination/pagination.json', function (data) {
  window.bauerSharedLibs.pug.render('pagination/pagination.pug', {data}, '#pagination-component')
})
