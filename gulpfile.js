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

gulp.task('compile-js', function () {
  return browserify('./components/includes.js').bundle()
    .pipe(source('script.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('docs/dist/'))
})

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['compile-js'], function (done) {
  browserSync.reload()
  done()
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
      let dirname = '/docs/dist/'
      let filePath = file.path.replace('/components/', dirname)
      let methodName = filePath.slice(0, -4)
      let start = methodName.indexOf(dirname)
      methodName = methodName.substring(start + dirname.length)
      methodName = methodName.replace('/', '_')

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

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('sass-watch', ['compile-sass'], function (done) {
  browserSync.reload()
  done()
})

// Compile sass
gulp.task('compile-sass', ['compile-development-sass'], function () {
  return gulp.src('components/includes.scss', { ignoreInitial: false })
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(rename('style.min.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('docs/dist/'))
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
  deleteFolderRecursive('./docs/dist')
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
    browserSync.init({
      server: {
        baseDir: './docs/'
      }
    })

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
    gulp.watch('components/**/*.js', ['js-watch'])
    gulp.watch('components/**/*.pug', ['pug-watch'])
    gulp.watch('components/**/*.scss', ['sass-watch'])
    gulp.watch('docs/guide.scss', ['sass-watch'])
    gulp.watch('docs/index.html', [])
  })
