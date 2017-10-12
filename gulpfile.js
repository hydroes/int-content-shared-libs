'use strict'

const autoprefixer = require('autoprefixer')
const gulp = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const chalk = require('chalk')
const log = console.log
const source = require('vinyl-source-stream')
const minifyCSS = require('gulp-minify-css')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const buffer = require('vinyl-buffer')
const fs = require('fs')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const cucumberHtmlReporter = require('cucumber-html-reporter')
const nodemon = require('gulp-nodemon')
// @todo: make DIST_DIR come from a config var
const DIST_DIR = 'public/dist/'

gulp.task('compile-js-for-frontend', function () {
  return browserify('./src/components/includes.js')
    .transform('babelify', {presets: ['es2015', 'react', 'env']})
    .bundle()
    .pipe(source('script.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${DIST_DIR}`))
    .pipe(browserSync.reload({'stream': true}))
})

gulp.task('copy-src-to-dis', function () {
  gulp.src(['src/**/!(*.js)']).pipe(gulp.dest('dist'))
})

gulp.task('compile-all-js', ['copy-src-to-dis'], () =>
    gulp.src('src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015', 'react', 'env'],
        plugins: ['transform-runtime']
      }))
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
)

gulp.task('pug-watch', [], function (done) {
  browserSync.reload()
  done()
})

// Compile sass
gulp.task('compile-sass', function () {
  return gulp.src('src/components/includes.scss', { ignoreInitial: false })
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

gulp.task('serve-app', function () {
  nodemon({
    script: 'dist/server/server.js',
    exec: 'node --inspect',
    watch: ['src/components'],
    tasks: ['compile-sass', 'compile-js-for-frontend', 'compile-all-js'],
    env: {'NODE_ENV': 'development'}
  }).on('restart', function () {
    log(chalk.green('Server restarted'))
  })
})

// use default task to launch Browsersync and watch JS files
gulp.task('default',
  [
    'remove-dist',
    'compile-js-for-frontend',
    'compile-all-js',
    'compile-sass',
    'serve-app'
  ], function () {
    // Serve files from the root of this project
    browserSync.init({
      proxy: 'localhost:7000',
      port: 3000,
      notify: true
    })

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
    gulp.watch('src/components/**/*.js', ['compile-all-js', 'compile-js-for-frontend'])
    gulp.watch('src/components/**/*.pug', ['pug-watch'])
    gulp.watch('src/server/views/**/*.pug', ['pug-watch'])
    gulp.watch('src/components/**/*.scss', ['compile-sass'])
  })
