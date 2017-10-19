'use strict'

// add desired required components to ensure files are included in the build script
require('./shared/sass/bootstrap-sass-3.3.7/assets/javascripts/bootstrap.min.js')
require('./twitter')(window)
require('./facebook')()
require('./instagram')()
require('./social_sharing')(window)
// bootstrap bauerSharedLibs
window.bauerSharedLibs = window.bauerSharedLibs || {}
window.bauerSharedLibs.version = require('../../package').version
