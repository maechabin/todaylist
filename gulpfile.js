"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function () {
	gulp.src('src/js/todaylist.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});

gulp.task('default', ['uglify']);