'use strict'

// variables exported here will be available in templates

const giphy = require('./giphy')
const paginate = require('./paginate')

module.exports = {
  giphy: url => giphy(url),
  paginate: () => paginate()
}
