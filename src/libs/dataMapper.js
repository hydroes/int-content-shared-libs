'use strict'

const path = require('path')
const fs = require('fs')

module.exports = function (filePath) {
  let mapFilePath = path.normalize(__dirname + './../components_data/' + filePath) // eslint-disable-line
  if (!fs.existsSync(mapFilePath)) {
    throw new Error('Map file not found: ' + filePath)
  }

  return require(mapFilePath)
}
