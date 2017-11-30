'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function (filePath) {
  var mapFilePath = path.normalize(__dirname + './../components_data/' + filePath); // eslint-disable-line
  if (!fs.existsSync(mapFilePath)) {
    throw new Error('Map file not found: ' + filePath);
  }

  return require(mapFilePath);
};
//# sourceMappingURL=dataMapper.js.map
