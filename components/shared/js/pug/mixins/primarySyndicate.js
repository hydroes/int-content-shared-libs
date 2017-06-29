'use strict'

module.exports = function (data) {
  var result = ''
  data = data || {}
  data.channel = data.channel || ''
  data.urls = data.urls || []

  for (var i = data.urls.length - 1; i >= 0; i--) {
    if (data.urls[i].split('/')[0] === data.channel) {
      result = '/' + data.urls[i]
    }
  }

  return result
}
