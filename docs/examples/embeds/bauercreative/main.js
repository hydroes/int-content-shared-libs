'use strict'

window.jQuery.getJSON('examples/embeds/bauercreative/embeds_bauercreative.json', function (data) {
  window.bauerSharedLibs.pug.render('embeds/bauercreative/embeds_bauercreative.pug', data, '#embeds-bauercreative')
})
