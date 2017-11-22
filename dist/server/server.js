'use strict';

var chalk = require('chalk');
var log = console.log;
var path = require('path');
var views = require('koa-views');
var convert = require('koa-convert');
var serve = require('koa-static');
var Router = require('koa-router');
var Koa = require('koa');
var router = new Router();
var app = module.exports = new Koa();
var appPort = 7000;
require('./routes')(router);

// setup console logger
app.use(convert(require('koa-logger')()));

// setup views, appending .pug
// when no extname is given to render()
app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }));

// serve static assets
app.use(serve(path.join(__dirname, '../../public')));

log(chalk.green('Server started localhost:' + appPort));

app.use(router.routes());
app.use(router.allowedMethods());

if (!module.parent) app.listen(appPort);