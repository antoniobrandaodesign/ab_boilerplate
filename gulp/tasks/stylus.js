var gulp         	= require('gulp');
var connect 	 	= require('gulp-connect');
var sourcemaps 	 	= require('gulp-sourcemaps');
var handleErrors 	= require('../util/handleErrors');
var path 		 	= require('path');
var gutil 		 	= require("gulp-util");
var debug 		 	= require("gulp-debug");
var changed		 	= require("gulp-changed");
var plumber		 	= require("gulp-plumber");
var stylus		 	= require("gulp-stylus");
var axis		 	= require("axis-css");
var autoprefixer 	= require("autoprefixer-stylus");
var jeet		 	= require("jeet");
var nib		 	 	= require("nib");
var rupture	 	 	= require("rupture");
var typographic	 	= require("typographic");
var print           = require('gulp-print');


gulp.task('stylus', ['environmentCheck'], function () 
{  
	gulp.src('./src/stylus/project_specific/*.styl')
	.pipe( plumber( handleErrors ) )
	.pipe(changed( global.outputDir + global.dataPath + '/css', {extension: '.css'}))
	.pipe(sourcemaps.init())
	.pipe(stylus({ 
		compress: global.ENV === 'production',
		use: [jeet(), nib(), rupture(), typographic(), axis(), autoprefixer('ie 7', 'ie 8')] 
	}))
	.pipe(sourcemaps.write())
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/css'))
	.pipe(connect.reload());
});

gulp.task('stylus_all', ['environmentCheck'], function () 
{  
	gulp.src('./src/stylus/project_specific/*.styl')
	.pipe( plumber( handleErrors ) )
	.pipe(sourcemaps.init())
	.pipe(stylus({ 
		compress: global.ENV === 'production',
		use: [jeet(), nib(), rupture(), typographic(), axis(), autoprefixer('ie 7', 'ie 8')] 
	}))
	.pipe(sourcemaps.write())
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/css'));
});

gulp.task('stylus_prod', ['setProduction'], function () 
{  
	gulp.src('./src/stylus/project_specific/*.styl')
	.pipe( plumber( handleErrors ) )
	.pipe(stylus({
			compress: true,
			use: [jeet(), nib(), rupture(), typographic(), autoprefixer('ie 7', 'ie 8')]
	}))
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/css'));
});