const pkg = require('./package.json')
const chalk = require('chalk')
const log = console.log
const path = require('path')
const views = require('koa-views')
const convert = require('koa-convert')
const serve = require('koa-static')
const shared = {
  component: (templateName, templateData) => require('./libs/template')(templateName, templateData),
  data: (filePath) => require('./libs/dataMapper')(filePath)
}
const Koa = require('koa')
const app = module.exports = new Koa()

// setup console logger
app.use(convert(require('koa-logger')()))

// setup views, appending .pug
// when no extname is given to render()
app.use(views(path.join(__dirname, '/views'), { extension: 'pug' }))

// serve static assets
app.use(serve(path.join(__dirname, '/public')))

log(chalk.green('Server started'))

app.use(async function (ctx) {
  await ctx.render('index', {
    debug: false,
    pretty: true,
    compileDebug: true,
    cache: false,
    shared: shared,
    pkg: pkg
  })
})

if (!module.parent) app.listen(7000)
