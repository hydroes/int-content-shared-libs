'use strict'
/* global dust */

dust.helpers.primarySyndicate = function (chunk, context, bodies, params) {
  var urls = context.resolve(params.urls)
  var channel = context.resolve(params.channel) // Now explictly passing channel

  var result = ''

  for (var i = urls.length - 1; i >= 0; i--) {
    if (urls[i].split('/')[0] === channel) {
      console.log('Match', urls[i].split('/')[0] + '| ' + channel)
      result = '/' + urls[i]
    }
  }

  return result
}
