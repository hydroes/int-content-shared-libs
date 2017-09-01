'use strict'

window.jQuery.getJSON('examples/bauercreative/embeds_bauercreative.json', function (data) {
  window.bauerSharedLibs.pug.render('bauercreative/embeds_bauercreative.pug', data, '#embeds-bauercreative')
})
