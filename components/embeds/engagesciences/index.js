const $ = require('jquery')
module.exports = function () {
  setTimeout(function () {
    $.ajax({
      url: 'https://display.engagesciences.com/embed/24264497-2748-4816-8f20-9169674ae869?mode=responsive',
      dataType: 'json',
      success: function (result) {
        $('.engagesciences').html(result)
      }
    })
  }, 800)
}
