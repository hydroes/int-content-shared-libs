'use strict'

window.jQuery.getJSON('examples/ntr/embeds_ntr.json', function (data) {
  window.bauerSharedLibs.pug.render('ntr/embeds_ntr.pug', data, '#embeds-ntr')
})
