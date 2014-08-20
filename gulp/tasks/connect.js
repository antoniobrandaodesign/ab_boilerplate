var gulp 		= require('gulp');
var connect 	= require('gulp-connect');

gulp.task('connect', ['environmentCheck'], function()
{
	return connect.server({
		root: global.outputDir,
		// port: 8888, // optional
		livereload: true
	});
});


// gulp.task('connect', function() {
//     return connect.server({
//         root: [buildDir],
//         port: 8888, // optional
//         livereload: false
//     });
// });﻿