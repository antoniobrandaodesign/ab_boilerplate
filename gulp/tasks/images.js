var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', ['environmentCheck'], function() {
	
	var dest = global.outputDir + global.dataPath + '/img';

	return gulp.src('./src/files/images/**/*.*')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});


gulp.task('images_prod', ['setProduction'], function() {
	
	var dest = global.outputDir + global.dataPath + '/img';

	return gulp.src('./src/files/images/**/*.*')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});
