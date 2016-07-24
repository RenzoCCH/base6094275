/*
the js libraries are managed by two enviroments production and local
if you wish to include local library just add it to headerLoader.blade.php or headerLoader.blade.php and run : gulp
if you wish to include production library you need to add a header script task or a footer script task with the specific libraries that you need
after that you should modify hederLoader.blade.php and footerLoader.blade.php
*/
var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var arg = require('yargs').argv;
var arg = require('gulp-if');
//------------------------------setting the enviroment----------------------

//------------------------------css tasks------------------------------
gulp.task('compass', function () {
  gulp.src('resources/assets/sass/*.scss')
    .pipe(compass({
      config_file: 'resources/assets/config.rb',
      css: 'public/assets/css',
      sass: 'resources/assets/sass',
      cache: false
    }))
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
/////////////////////////////////////////////////////////////////////////////////
//                              SCRIPTS
/////////////////////////////////////////////////////////////////////////////////
//------------------------defaultScripts-------------------------------
gulp.task('defaultScript', function () {
  return gulp.src('resources/assets/app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/assets/dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
//----------------production scripts----------------------------------------
gulp.task('script', ['headerScripts','footerScripts']);

gulp.task('headerScripts', ['concat-modernizr','concat-modernizr-webcomponents']);
  //---------------------uglifiying headers libraires-----------
  gulp.task('concat-modernizr', function () {
    return gulp.src(['public/assets/js/modernizr.js'])
      .pipe(uglify())
      .pipe(concat('modernizr.min.js'))
      .pipe(gulp.dest('public/assets/dist/js/'));
  });
  gulp.task('concat-modernizr-webcomponents', function () {
    return gulp.src(['public/assets/js/modernizr.js',
      'public/bower_components/webcomponentsjs/webcomponents.min.js'
      ])
      .pipe(uglify())
      .pipe(concat('modernizerWebcomponents.min.js'))
      .pipe(gulp.dest('public/assets/dist/js/'));
  });

gulp.task('footerScripts', ['uglifyApp','footer-concat']);
gulp.task('uglifyApp', function () {
  return gulp.src('resources/assets/app/**/*.js')
    .pipe(uglify({mangle:false}))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/dist/js/'));
});

gulp.task('footer-concat', ['concat-angular-jquery','concat-angular-jquery-validate','concat-angular-jquery-ui-grid']);
  //------------------------unifying footers libraries
  gulp.task('concat-angular-jquery', function () {
    return gulp.src(['public/bower_components/jquery/dist/jquery.min.js',
      'public/bower_components/angular/angular.min.js',
      'public/assets/dist/js/app.min.js'])
      .pipe(concat('AngularJquery.min.js'))
      .pipe(gulp.dest('public/assets/dist/js'));
  });
  gulp.task('concat-angular-jquery-validate', function () {
    return gulp.src(['public/bower_components/jquery/dist/jquery.min.js',
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/jquery-validation/dist/jquery.validate.min.js',
      'public/assets/dist/js/app.min.js'])
      .pipe(concat('AngularJqueryValidate.min.js'))
      .pipe(gulp.dest('public/assets/dist/js'));
  });
  gulp.task('concat-angular-jquery-ui-grid', function () {
    return gulp.src(['public/bower_components/jquery/dist/jquery.min.js',
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/jquery-validation/dist/jquery.validate.min.js',
      'public/bower_components/angular-ui-grid/ui-grid.min.js',
      'public/assets/dist/js/app.min.js'])
      .pipe(concat('AngularJqueryUigrid.min.js'))
      .pipe(gulp.dest('public/assets/dist/js'));
  });

/////////////////////////////////////////////////////////////////////////////////////////
//                                    WATCH
/////////////////////////////////////////////////////////////////////////////////////////
gulp.task('watchDefault', function () {
  gulp.watch('resources/assets/sass/**/*.scss', ['compass']);
  gulp.watch('resources/views/**/*.php', browserSync.reload);
  gulp.watch('resources/assets/app/**/*.js',['defaultScript']);
});
gulp.task('browserSync', function () {
  browserSync.init({
    proxy: {
      target: "base"
    }
  })
})

gulp.task('default', ['browserSync', 'compass','defaultScript','watchDefault']);
gulp.task('production', ['compass','script']);
