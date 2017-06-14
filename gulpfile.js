const gulp = require('gulp')
const dust = require('gulp-dust')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const minifyCSS = require('gulp-minify-css')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const buffer = require('vinyl-buffer')
const fs = require('fs')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')

gulp.task('compile-js', function () {
  return browserify('./components/includes.js').bundle()
    .pipe(source('script.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('docs/dist/'))
})

gulp.task('compile-helpers', function () {
  return gulp.src('./helpers/*.js')
    .pipe(concat('helpers.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('docs/dist/'))
})

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['compile-js', 'compile-helpers'], function (done) {
  browserSync.reload()
  done()
})

gulp.task('compile-dust', function () {
  // pre-compile dust templates for speed
  // Endless stream mode
  return gulp.src('components/**/*.dust', { ignoreInitial: false })
        .pipe(dust())
        .pipe(gulp.dest('docs/dist/'))
})

// create a task that ensures the `dust` task is complete before
// reloading browsers
gulp.task('dust-watch', ['compile-dust'], function (done) {
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
gulp.task('compile-sass', function () {
  // pre-compile dust templates for speed
  return gulp.src('components/**/style.scss', { ignoreInitial: false })
        .pipe(concat('style.min.css'))
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        // .pipe(rename({suffix: '.min'}))
        // .pipe(rename('style.min.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('docs/dist/'))
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
gulp.task('default', ['remove-dist', 'compile-js', 'compile-helpers', 'compile-dust', 'compile-sass'], function () {
    // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: './docs/'
    }
  })

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch('components/**/index.js', ['js-watch'])
  gulp.watch('components/**/*.dust', ['dust-watch'])
  gulp.watch('helpers/*.js', ['js-watch'])
  gulp.watch('components/**/style.scss', ['sass-watch'])
  gulp.watch('docs/index.html', [])
})
