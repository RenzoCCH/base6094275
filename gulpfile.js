
var gulp  = require('gulp');
var compass = require('gulp-compass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var open = require('gulp-open');




gulp.task('compass', function() {
    gulp.src('resources/assets/sass/*.scss')
        .pipe(compass({
            config_file: 'resources/assets/config.rb',
            css: 'public/assets/css',
            sass: 'resources/assets/sass',
            cache: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('public/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


//--------------for scripts-------------
gulp.task('scripts', ['headscripts','footerscripts']);

gulp.task('bower-concat', function() {
    return gulp.src(['public/bower_components/jquery/dist/jquery.min.js', 'public/bower_components/angular/angular.min.js'])
        .pipe(concat('bower.min.js'))
        .pipe(gulp.dest('public/assets/dist/'));
});



gulp.task('headscripts', function() {
    return gulp.src(['public/assets/js/modernizr-custom.js', 'public/bower_components/webcomponentsjs/webcomponents.min.js'])
        .pipe(concat('header.min.js'))
        .pipe(gulp.dest('public/assets/dist/'));
});
gulp.task('footerscripts',['uglifyapp'], function() {
    return gulp.src(['public/assets/dist/bower.min.js', 'public/assets/dist/uglifyapp.min.js'])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('public/assets/dist/'));
});
gulp.task('uglifyapp', function() {
    return gulp.src( 'resources/assets/app/**/*.js')
        .pipe(concat('uglifyapp.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/dist/'));
});
//--------------------------------------

gulp.task('watch', function(){
    gulp.watch('resources/assets/sass/**/*.scss', ['compass']);
    gulp.watch('resources/views/**/*.php',browserSync.reload);
    gulp.watch('resources/app/**/*.js',['footerscripts'],browserSync.reload({
        stream: true
    }));
    // Other watchers
})
gulp.task('browserSync', function() {
    browserSync.init({
        proxy: {
            target: "base"
        }
    })
})
gulp.task('app', function(){
    var options = {
        uri: 'base',
        app: 'chrome'
    };
    gulp.src(__filename)
        .pipe(open(options));
});




gulp.task('default',['app','browserSync','compass','scripts','watch']);