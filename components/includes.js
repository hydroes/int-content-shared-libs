'use strict'

// include shared libs
window.jQuery = require('jquery')
require('./shared/sass/bootstrap-sass-3.3.7/assets/javascripts/bootstrap.min.js')
require('jquery-match-height')
// add desired required components to ensure files are included in the build script
require('./test')(window)
require('./embeds/twitter')(window)
require('./embeds/facebook')()
require('./embeds/instagram')()
require('./embeds/engagesciences')()
// bootstrap bauerSharedLibs
window.bauerSharedLibs = window.bauerSharedLibs || {}
window.bauerSharedLibs.pug = require('./shared/js/pug/pug')
window.bauerSharedLibs.version = require('../package').version
