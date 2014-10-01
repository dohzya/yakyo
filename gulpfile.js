/* jshint asi:true */

var http = require('http')
var path = require('path')

var browserify = require('gulp-browserify')
var concat = require('gulp-concat')
var del = require('del')
var ecstatic = require('ecstatic')
var gulp = require('gulp')
var stylus = require('gulp-stylus')
var watch = require('gulp-watch')

gulp.task('clean', function(done) {
  del(['build'], done);
});

gulp.task('css', ['clean'], function() {
  return gulp.src(['src/css/**/*.styl'])
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', ['clean'], function() {
  return gulp.src(path.join(__dirname, "src/js/main.js"))
    .pipe(browserify({transform: ['reactify', 'envify']}))
    .pipe(concat("main.js"))
    .pipe(gulp.dest(path.join(__dirname, "dist/js")))
})

gulp.task('watch', ['js'], function () {
  gulp.watch(path.join(__dirname, "src/js/*"), ['js'])
  gulp.watch(path.join(__dirname, "src/css/*.styl"), ['css'])
})

gulp.task('serve', function () {
  var port = 8282;
  http.createServer(ecstatic({
    root: process.cwd(),
    baseDir: '/',
    cache: 1,
    showDir: false,
    autoIndex: true,
    defaultExt: 'html'
  })).listen(port);
  console.info("Listen connection on http://127.0.0.1:" + port);
});

gulp.task('default', ['watch', 'serve'])
