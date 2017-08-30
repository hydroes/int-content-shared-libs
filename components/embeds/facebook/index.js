const $ = require('jquery')

module.exports = function () {
  $(document).ready(function () {
    $('.embed--facebook').each(function () {
      console.log('%cFacebook embed please', 'color: white; background: blue; padding: 1px;')
      var _self = $(this)
      var oembedUrl = 'https://www.facebook.com/plugins/post/oembed.json/?url=' + _self.data('embed-id')
      $.ajax({
        url: oembedUrl,
        dataType: 'jsonp',
        success: function (data) {
          _self.html(data.html)
        },
        error: function (result) {
          console.log('Facebook oembed error!')
        }
      })
    })
  })
}
