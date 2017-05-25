'use strict'

var fs = require('fs')
var q = require('q')
var path = require('path')

var Template = function (dustJs) {
  // dustjs lib
  this.dustJs = dustJs || false
  this.overrideTemplateLoader = function () {
    var self = this
    // original dustjs loader
    this.origLoader = this.dustJs.onLoad

    this.dustJs.onLoad = function (templateName, options, callback) {
      // `templateName` is the name of the template requested by dust.render / dust.stream
      // or via a partial include, like {> "hello-world" /}
      // `options` can be set as part of a Context. They will be explored later
      // `callback` is a Node-like callback that takes (err, data)
      var templateFile = path.normalize(__dirname + '/../dist/' + templateName + '/') // eslint-disable-line

      var templatePath = templateFile + templateName + '.js' // eslint-disable-line

      fs.readFile(templatePath, { encoding: 'utf8' }, function (err, data) {
        self.dustJs.loadSource(data)

        if (err) {
          console.log('A load error occured: ', err)
        }

        callback()
      })
    }
  }
  // revert template loader back to the original loader
  this.revertTemplateLoader = function () {
    this.dustJs.onLoad = this.origLoader
  }
}

// retrieve and render a template
Template.prototype.get = function (name, data) {
  var deferred = q.defer()
  data = data || {}

  var self = this
  // temporarily override the dustjs (templates must loaded from this npm mod)
  this.overrideTemplateLoader()

  // try load and render a template
  try {
    this.dustJs.render(name, data, function (err, out) { // eslint-disable-line
      deferred.resolve(out)
      // self.revertTemplateLoader()
    })
  } catch (err) {
    deferred.resolve('An error occured: ' + err)
    // self.revertTemplateLoader()
  }
  // always revert (seem to have a race condtion when added in try/catch)
  self.revertTemplateLoader()
  return deferred.promise
}

// ensures there is only 1 instance of a template object
var templateInstance = (function () {
  var instance
  return {
    get: function (dust) {
      if (instance === undefined) {
        instance = new Template(dust)
      }
      return instance
    }
  }
})()

module.exports = templateInstance
