'use strict'

// Add routes to the app from this file

const pkg = require('../package.json')
const shared = {
  component: (templateName, templateData) => require('../libs/template')(templateName, templateData),
  data: (filePath) => require('../libs/dataMapper')(filePath)
}

let templateOpts = {
  debug: false,
  pretty: true,
  compileDebug: true,
  cache: false,
  shared: shared,
  pkg: pkg
}

module.exports = function (router) {
  router.get('/', async function (ctx, next) {
    await ctx.render('index', templateOpts)
  })

  router.get('/e2e', async function (ctx, next) {
    await ctx.render('e2e', templateOpts)
  })
}
