'use strict'
/* global dust */
/**
 * Truncate string helper
 */
dust.helpers.truncateString = function (chunk, context, bodies, params) {
  var result = ''

  if (params.string) {
    var str = context.resolve(params.string)

    var strLength = parseInt(context.resolve(params.length))

    try {
      if (str.length > strLength) {
        result = str.substring(0, strLength) + '\u2026'
      } else {
        result = str
      }
    } catch (err) {
      result = str
    }
  }

  return chunk.write(result)
}
