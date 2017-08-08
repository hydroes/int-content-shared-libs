'use strict'

window.jQuery.getJSON('examples/embeds/engagesciences/embeds_engagesciences.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/engagesciences/embeds_engagesciences.pug', data, '#embeds-engagesciences')
})
