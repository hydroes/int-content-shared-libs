'use strict'

const autoprefixer = require('autoprefixer')
const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const minifyCSS = require('gulp-minify-css')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const buffer = require('vinyl-buffer')
const fs = require('fs')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const pug = require('pug')
const path = require('path')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const cucumberHtmlReporter = require('cucumber-html-reporter')
// @todo: make DIST_DIR come from a config var
const DIST_DIR = 'public/dist/'

gulp.task('compile-js', function () {
  return browserify('./components/includes.js')
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source('script.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${DIST_DIR}`))
    .pipe(browserSync.reload({'stream': true}))
})

// front end templates are compiled and stored all together in one file
// this is done to ease development
gulp.task('compile-pug-templates', function () {
  function ensureDirectoryExistence (filePath) {
    var dirname = path.dirname(filePath)
    if (fs.existsSync(dirname)) {
      return true
    }
    ensureDirectoryExistence(dirname)
    fs.mkdirSync(dirname)
  }

  return gulp.src('components/**/*.pug')
    .on('data', function (file) {
      let dirname = DIST_DIR
      let filePath = file.path.replace('/components/', dirname)
      let methodName = filePath.slice(0, -4)
      let start = methodName.indexOf(dirname)
      methodName = methodName.substring(start + dirname.length)
      methodName = methodName.replace(/\//g, '_')
      let options = {
        'name': `${methodName}`
      }

      // @todo: add option.filters here once they have been converted

      let jsString = pug.compileFileClient(file.path, options)

      filePath = filePath.slice(0, -4) + '.js'
      ensureDirectoryExistence(filePath)
      fs.writeFileSync(filePath, jsString)
    })
})

gulp.task('pug-watch', ['compile-pug-templates'], function (done) {
  browserSync.reload()
  done()
})

// Compile sass
gulp.task('compile-sass', ['compile-development-sass'], function () {
  return gulp.src('components/includes.scss', { ignoreInitial: false })
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function (Error) {
          console.error('sass error occurred: ', Error.message)
          browserSync.notify(Error.message, 3000) // Display error in the browser
          this.emit('end') // Prevent gulp from catching the error and exiting the watch process
        }))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(rename('style.min.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`./${DIST_DIR}`))
        .pipe(browserSync.reload({'stream': true}))
})

gulp.task('compile-development-sass', function () {
  return gulp.src('docs/guide.scss')
         .pipe(sass())
         .pipe(concat('guide.css'))
         .pipe(gulp.dest('docs/'))
})

// Task to remove any cached dist files
gulp.task('remove-dist', function () {
  var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file, index) {
        var curPath = path + '/' + file
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath)
        } else { // delete file
          fs.unlinkSync(curPath)
        }
      })
      fs.rmdirSync(path)
    }
  }
  deleteFolderRecursive(`./${DIST_DIR}`)
})

// genarates test reports
gulp.task('generate-test-reports', function () {
  // generate html report
  var options = {
    theme: 'bootstrap',
    jsonFile: 'tests/e2e/reports/cucumber.json',
    output: 'tests/reports/e2e/index.html',
    reportSuiteAsScenarios: true,
    launchReport: true
  }

  cucumberHtmlReporter.generate(options)

  // @todo: generate xml reports for jenkins
})

// use default task to launch Browsersync and watch JS files
gulp.task('default',
  [
    'remove-dist',
    'compile-js',
    'compile-pug-templates',
    'compile-sass'
  ], function () {
    // Serve files from the root of this project
    // browserSync.init({
    //   server: {
    //     baseDir: './docs/',
    //     middleware: function (req, res, next) {
    //       res.setHeader('Access-Control-Allow-Origin', '*')
    //       next()
    //     }
    //   }
    // })

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
    gulp.watch('components/**/*.js', ['compile-js'])
    gulp.watch('components/**/*.pug', ['pug-watch'])
    gulp.watch('components/**/*.scss', ['compile-sass'])
    gulp.watch('docs/guide.scss', ['compile-sass'])
    gulp.watch('docs/index.html', [])
  })
