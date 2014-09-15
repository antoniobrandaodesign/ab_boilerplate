var gulp         	= require('gulp');
var connect 	 	= require('gulp-connect');
var handleErrors 	= require('../util/handleErrors');
var changed		 	= require("gulp-changed");
var plumber		 	= require("gulp-plumber");
var	gulpif 		    = require('gulp-if');
var print           = require('gulp-print');

var stylus		 	= require("gulp-stylus");
var autoprefixer 	= require("autoprefixer-stylus");
var jeet		 	= require("jeet");
var rupture	 	 	= require("rupture");
var axis	 		= require("axis-css");
var typographic	 	= require("typographic");


gulp.task('stylus', ['environmentCheck'], function () 
{  
	gulp.src( global.cssSrcPath )
	.pipe( plumber( handleErrors ) )
	.pipe(stylus({ 
		compress: global.ENV === 'production',
		use:[	
				jeet(),
				rupture(), 
				typographic(), 
				axis(), 
				autoprefixer({ browsers: ['ie 7', 'ie 8'] })
			],
			sourcemap: { inline: global.ENV === 'development' } 
	}))
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/css'))
	.pipe(gulpif( global.isWatching === true, connect.reload() ));
});

gulp.task('stylus_dev', ['setDevelopment'], function () 
{  
	gulp.src( global.cssSrcPath )
	.pipe( plumber( handleErrors ) )
	.pipe(stylus({
		compress: false,
		use:[	
				jeet(),
				rupture(), 
				typographic(), 
				axis(),
				autoprefixer({ browsers: ['ie 7', 'ie 8'] })
			],
			sourcemap: { inline: true } 
	}))
    .pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/css'));
});

gulp.task('stylus_prod', ['setProduction'], function () 
{  
	gulp.src( global.cssSrcPath )
	.pipe( plumber( handleErrors ) )
	.pipe(stylus({
		compress: true,
		use:[
				jeet(),
				rupture(), 
				typographic(), 
				axis(), 
				autoprefixer({ browsers: ['ie 7', 'ie 8'] })
			]
	}))
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/css'));
});