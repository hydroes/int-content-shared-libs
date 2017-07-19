'use strict'
/* global jQuery */
window.jQuery.noConflict()
var components = {
  'config': {
    'callback': function (jqxhr) {
      components.dataStatus = jqxhr.status
      // TODO Change this to iteration... - as this will get bigger
      if (components.dataStatus) {
        jQuery('.large-narrow').matchHeight()
      }
    }
  },
  'dataStatus': 0
}

jQuery.when(jQuery.getJSON('examples/content_cards_lg_and_nw/content_cards_lg_and_nw.json')).done(function (data) {
  var pug = window.bauerSharedLibs.pug
  pug.render('content_cards_lg_and_nw/content_cards_lg_and_nw.pug', data, '#content-cards-lg-nw').done(function (script, textStatus, jqxhr) {
    components.config.callback(jqxhr)
  })
})
