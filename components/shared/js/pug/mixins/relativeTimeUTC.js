'use strict'

var moment = require('moment')

/**
 * Returns the supplied timestamp parameter as a relative date
 *
 * If the relative time is more than an a day, the format is: DD MM YYYY
 * If the relative time is less than a day, but more than an hour the format is: HH hours ago
 * If the relative time is less than an hour, the format is: mm mins ago
 *
 * @example: {@relativeTimeUTC timestamp="2016-03-04T14:29:11.000Z" /}
 * @return string
 */
module.exports = function (data) {
  var result = ''

  try {
    var timestamp = data.timestamps

        // as timestamps are given from various api with or without milliseconds
        // check whether this timestamp needs miliiseconds added to it
    if (String(timestamp).length <= 10) {
      timestamp *= 1000
    }

    var time = moment(timestamp)
    var now = moment.utc()

    if (now.diff(time, 'days') > 0) {
      result = time.format('DD MM YYYY')
    } else {
      var hourDifference = now.diff(time, 'hours')
      if (hourDifference < 1) {
        var duration = moment.duration(now.diff(time))
        result = Math.round(duration.asMinutes()) + ' mins ago'
      } else {
        result = hourDifference + (hourDifference === 1 ? ' hour' : ' hours') + ' ago'
      }
    }
  } catch (err) {
        // Here be dragons
    console.log('relativeTimeUTC conversion error' + err)
  }

  return result
}
