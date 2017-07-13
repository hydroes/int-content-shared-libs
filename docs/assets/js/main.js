'use strict'

//should we make this a `matchHeight` addon/plugin?
function smallCardMatchHeight() {
  jQuery('.content-card--small .row').matchHeight({
    target: jQuery('.content-card--small .row .content-card__link')
  })
}



var components = {
  'config': {
    'callback': function (jqxhr, componentName) {
      components[componentName]['dataStatus'] = jqxhr.status
      //TODO Change this to iteration... - as this will get bigger
      if (components.smallCard.dataStatus && components.largeCard.dataStatus) {
        jQuery('.content-card-collection-1').matchHeight() // content card collection match height
        smallCardMatchHeight() //only for xs on small cards
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