
var gulp  = require('gulp');
var compass = require('gulp-compass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');




gulp.task('compass', function() {
    gulp.src('resources/assets/sass/*.scss')
        .pipe(compass({
            config_file: 'resources/assets/config.rb',
            css: 'public/assets/css',
            sass: 'resources/assets/sass',
            cache: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('public/assets/css'));
});
gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});



gulp.task('default',['compass']);