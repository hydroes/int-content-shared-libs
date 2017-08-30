const $ = require('jquery')
const initInstagram = function () {
  $('.embeds-instagram').each(function () {
    var _self = $(this)
    var oembedUrl = 'https://api.instagram.com/oembed?url=' + _self.data('embed-id')
    $.ajax({
      url: oembedUrl,
      dataType: 'jsonp',
      success: function (data) {
        _self.html(data.html)
      },
      error: function (result) {
        console.log('Instagram oembed error!')
      }
    })
  })
}
module.exports = function () {
  $(document).ready(function () {
    if ($('.embeds-instagram').length) {
      initInstagram()
    } else {
      setTimeout(function () {
        initInstagram()
      }, 800)
    }
  })
}
