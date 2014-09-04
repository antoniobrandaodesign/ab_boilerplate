var gulp         = require('gulp');
var	jade 		 = require('gulp-jade');
var connect 	 = require('gulp-connect');
var changed		 = require("gulp-changed");
var plumber		 = require("gulp-plumber");
var	gulpif 		 = require('gulp-if');
var print        = require('gulp-print');
var handleErrors = require('../util/handleErrors');

gulp.task('jade', ['environmentCheck'], function()
{
	return  gulp.src( global.htmlSrcPath )
			.pipe( plumber( handleErrors ) )
			// .pipe(changed( global.outputDir, {extension: '.html'}))
			.pipe(jade({ pretty: global.ENV === 'development' }))
			.pipe(print())
			.pipe(gulp.dest(global.outputDir))
			.pipe(gulpif( global.isWatching === true, connect.reload() ));
});

gulp.task('jade_all', ['environmentCheck'], function()
{
	return  gulp.src( global.htmlSrcPath )
			.pipe(jade({ pretty: global.ENV === 'development' }))
			.pipe(print())
			.pipe(gulp.dest(global.outputDir))
			.on('error', handleErrors);
});

gulp.task('jade_prod', ['setProduction'], function()
{
	return  gulp.src( global.htmlSrcPath )
			.pipe(jade({ pretty: false }))
			.pipe(print())
			.pipe(gulp.dest(global.outputDir))
			.on('error', handleErrors);
});