const chalk = require('chalk')
const log = console.log
const path = require('path')
const views = require('koa-views')
const convert = require('koa-convert')
const serve = require('koa-static')
const Router = require('koa-router')
const Koa = require('koa')
const router = new Router()
const app = module.exports = new Koa()
const appPort = 7000
require('./routes')(router)

// setup console logger
app.use(convert(require('koa-logger')()))

// setup views, appending .pug
// when no extname is given to render()
app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

// serve static assets
app.use(serve(path.join(__dirname, '../public')))

log(chalk.green('Server started localhost:' + appPort))

app.use(router.routes())
app.use(router.allowedMethods())

if (!module.parent) app.listen(appPort)
