'use strict'

module.exports = function (data) {
  var result = ''
  var urls = data.urls
  var channel = data.channel // Now explictly passing channel

  for (var i = urls.length - 1; i >= 0; i--) {
    if (urls[i].split('/')[0] === channel) {
      result = '/' + urls[i]
    }
  }

  return result
}
