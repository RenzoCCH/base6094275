var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCss = require('gulp-minify-css');
//var cssnano = require('gulp-cssnano');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var open = require('gulp-open');
var environments = require('gulp-environments');

//------------------------------setting the enviroment----------------------
var development = environments.development;
var production = environments.production;
environments.current(development);
//environments.current(production);

//------------------------------css tasks------------------------------
gulp.task('compass', function () {
  gulp.src('resources/assets/sass/*.scss')
    .pipe(compass({
      config_file: 'resources/assets/config.rb',
      css: 'public/assets/css',
      sass: 'resources/assets/sass',
      cache: false
    }))
    .pipe(production(minifyCss()))
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//--------------for scripts-------------
gulp.task('scripts', ['headscripts', 'footerscripts']);

gulp.task('bower-concat', function () {
  return gulp.src(['public/bower_components/jquery/dist/jquery.min.js', 'public/bower_components/angular/angular.min.js', 'public/bower_components/jquery-validation/dist/jquery.validate.min.js'])
    .pipe(concat('bower.min.js'))
    .pipe(gulp.dest('public/assets/dist/'));
});
gulp.task('headscripts', function () {
  return gulp.src(['public/assets/js/modernizr.js', 'public/bower_components/webcomponentsjs/webcomponents.min.js'])
    .pipe(concat('header.min.js'))
    .pipe(gulp.dest('public/assets/dist/'));
});
gulp.task('footerscripts', ['uglifyapp'], function () {
  return gulp.src(['public/assets/dist/bower.min.js', 'public/assets/dist/uglifyapp.min.js'])
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('public/assets/dist/'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('uglifyapp', function () {
  return gulp.src('resources/assets/app/**/*.js')
    .pipe(concat('uglifyapp.min.js'))
    .pipe(production(uglify()))
    .pipe(gulp.dest('public/assets/dist/'));
});

//--------------------------------------
gulp.task('watch', function () {
  gulp.watch('resources/assets/sass/**/*.scss', ['compass']);
  gulp.watch('resources/views/**/*.php', browserSync.reload);
  gulp.watch('resources/assets/app/**/*.js', ['footerscripts']);
  // Other watchers
})
gulp.task('browserSync', function () {
  browserSync.init({
    proxy: {
      target: "base"
    }
  })
})
gulp.task('open', function () {
  //var options = {
  //  uri: 'base',
  //  app: 'chrome'
  //};
  //gulp.src(__filename)
  //  //.pipe(open(options));
  //  .pipe(open());
});


gulp.task('default', ['open', 'browserSync', 'compass', 'scripts', 'watch']);