'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/components/**/*.scss')
        .pipe(concat('styles.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:min', function () {
    return gulp.src('./dist/styles.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('bootstrap', function () {
    return gulp.src('./src/sass/bootstrap/**/*.scss')
        .pipe(concat('bootstrap.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});