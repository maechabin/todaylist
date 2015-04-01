"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('uglify', function () {
	gulp.src('src/js/todaylist.js')
		.pipe(uglify())
		.pipe(rename('todaylist.min.js'))
		.pipe(gulp.dest('dist'))
});

gulp.task('default', ['uglify']);