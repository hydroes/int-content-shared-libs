'use strict'

window.jQuery.getJSON('examples/ntr/ntr.json', function (data) {
  window.bauerSharedLibs.pug.render('ntr/ntr.pug', data, '#embeds-ntr')
})
