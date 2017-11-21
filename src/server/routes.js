'use strict'

// Add routes to the app from this file
const path = require('path')
const pkg = require('../../package.json')
const shared = {
  component: (templateName, templateData) => require(path.join(__dirname, './../../dist/libs/component'))(templateName, templateData),
  data: (filePath) => require(path.join(__dirname, './../../dist/libs/dataMapper'))(filePath)
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

  router.get('/ui-components', async function (ctx, next) {
    await ctx.render('ui-components', templateOpts)
  })
  router.redirect('/ui', '/ui-components')

  router.get('/embeds', async function (ctx, next) {
    await ctx.render('embeds', templateOpts)
  })
  router.redirect('/embed', '/embeds')

  router.get('/css-utilities', async function (ctx, next) {
    await ctx.render('css-utilities', templateOpts)
  })

  router.get('/content-cards', async function (ctx, next) {
    await ctx.render('content-cards', templateOpts)
  })
  router.redirect('/cards', '/content-cards')

  router.get('/meta-tags', async function (ctx, next) {
    await ctx.render('meta-tags', templateOpts)
  })
  router.redirect('/metas', '/meta-tags')

  router.get('/e2e', async function (ctx, next) {
    await ctx.render('e2e', templateOpts)
  })
}
