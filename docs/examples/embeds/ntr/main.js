'use strict'

window.jQuery.getJSON('examples/embeds/ntr/embeds_ntr.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/ntr/embeds_ntr.pug', data, '#embeds-ntr')
})
