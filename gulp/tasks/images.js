var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var datapaths  = require("./datapaths");
var print      = require('gulp-print');


gulp.task('images', ['environmentCheck'], function() {
	
	var dest = global.outputDir + datapaths.dataPath + '/img';

	return gulp.src( datapaths.imgSrcPath )
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(print())
		.pipe(gulp.dest(dest));
});


gulp.task('images_prod', ['setProduction'], function() {
	
	var dest = global.outputDir + datapaths.dataPath + '/img';

	return gulp.src( datapaths.imgSrcPath )
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(print())
		.pipe(gulp.dest(dest));
});
