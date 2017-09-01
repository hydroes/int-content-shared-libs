'use strict'

window.jQuery.getJSON('examples/bauercreative/bauercreative.json', function (data) {
  window.bauerSharedLibs.pug.render('bauercreative/bauercreative.pug', data, '#embeds-bauercreative')
})
