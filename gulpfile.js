const gulp = require('gulp')
const dust = require('gulp-dust')
const watch = require('gulp-watch')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const rename = require('gulp-rename')
const minifyCSS = require('gulp-minify-css')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const buffer = require('vinyl-buffer')
const fs = require('fs')

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

gulp.task('compile-dust', function () {
  // pre-compile dust templates for speed
  // Endless stream mode
  return watch(['components/**/*.dust'], { ignoreInitial: false })
        .pipe(dust())
        .pipe(gulp.dest('docs/dist/'))
})

gulp.task('compile-js', function () {
  // pre-compile dust templates for speed
  return watch('components/**/index.js', { ignoreInitial: false }, function () {
    browserify({
      entries: ['./components/includes.js'],
      debug: true
    })
    .bundle()
    .pipe(source('script.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('docs/dist/'))
  })
})

gulp.task('compile-sass', function () {
  // pre-compile dust templates for speed
  return watch('components/**/style.scss', { ignoreInitial: false })
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('docs/dist/'))
})

gulp.task('default', ['remove-dist', 'compile-dust', 'compile-js', 'compile-sass'])
