'use strict'

// include shared libs
require('./shared/js/main.js')

// add desired required compoenents to ensure files are included in the build script
require('./test')(window)

// bootstrap bauerSharedLibs
window.bauerSharedLibs = window.bauerSharedLibs || {}
window.bauerSharedLibs.pug = require('./shared/js/pug')
window.bauerSharedLibs.version = require('../package').version
