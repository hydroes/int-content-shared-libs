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

  router.get('/miscellaneous', async function (ctx, next) {
    await ctx.render('miscellaneous', templateOpts)
  })
  router.redirect('/misc', '/miscellaneous')

  router.get('/css-utilities', async function (ctx, next) {
    await ctx.render('css-utilities', templateOpts)
  })

  router.get('/content-cards', async function (ctx, next) {
    await ctx.render('content-cards', templateOpts)
  })
  router.redirect('/cards', '/content-cards')

  router.get('/collections', async function (ctx, next) {
    await ctx.render('collections', templateOpts)
  })
  router.redirect('/image-component', '/collections')
  router.redirect('/hero-image', '/collections')
  router.redirect('/image', '/collections')

  router.get('/e2e', async function (ctx, next) {
    await ctx.render('e2e', templateOpts)
  })
}
