'use strict'

window.jQuery.getJSON('examples/breadcrumbs/breadcrumbs.json', function (data) {
  window.bauerSharedLibs.pug.render('breadcrumbs/breadcrumbs.pug', data, '#breadcrumbs')
})
