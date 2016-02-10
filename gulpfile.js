// Include gulp
var gulp = require('gulp');

// plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

// Concatenate JS
gulp.task('concat', function() {
    return gulp.src('js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});

// Minify JS
gulp.task('minify', ['concat'], function() {
    return gulp.src('dist/all.js')
        .pipe(sourcemaps.init())
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

// Watch Files for Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'concat', 'minify']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'concat', 'minify', 'watch']);
