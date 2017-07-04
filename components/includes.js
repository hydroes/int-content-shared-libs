'use strict'

// include shared libs
require('./shared/js/main.js')
window.jQuery = require('jQuery')
require('./shared/sass/bootstrap-sass-3.3.7/assets/javascripts/bootstrap.min.js')

// add desired required compoenents to ensure files are included in the build script
require('./test')(window)

// bootstrap bauerSharedLibs
window.bauerSharedLibs = window.bauerSharedLibs || {}
window.bauerSharedLibs._ = require('underscore')
window.bauerSharedLibs.pug = require('./shared/js/pug/pug')
window.bauerSharedLibs.version = require('../package').version
