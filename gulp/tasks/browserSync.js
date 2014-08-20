var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['environmentCheck'], function() 
{
	browserSync.init([global.outputDir + '/**'], {
		open: false,
		server: {
			baseDir: global.outputDir
		}
	});
});
