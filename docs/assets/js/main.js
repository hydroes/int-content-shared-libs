'use strict'
window.jQuery.noConflict()
var components = {
  'config': {
    'callback': function (jqxhr, componentName) {
      components[componentName]['dataStatus'] = jqxhr.status
      //TODO Change this to iteration... - as this will get bigger
      if (components.smallCard.dataStatus && components.largeCard.dataStatus) {
        jQuery('.content-card-collection-1').matchHeight()
      }
    }
  },
  'smallCard': {
    'dataStatus': 0
  },
  'largeCard': {
    'dataStatus': 0
  }
}

jQuery.when(getSmallCardJSON(), getLargeCardJSON()).done(function (smallCardData, largeCardData) {
  var pug = window.bauerSharedLibs.pug;
  pug.render('large_content_card/large_content_card.pug', largeCardData[0], '.large-content-card').done(function (script, textStatus, jqxhr) {
    components.config.callback(jqxhr, 'largeCard')
  })
  pug.render('small_content_card/small_content_card.pug', smallCardData[0], '.content-card-small').done(function (script, textStatus, jqxhr) {
    components.config.callback(jqxhr, 'smallCard')
  })
})