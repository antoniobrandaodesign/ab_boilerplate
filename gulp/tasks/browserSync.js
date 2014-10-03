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


gulp.task('browserSync_express', ['environmentCheck'], function() 
{
	browserSync.init([global.outputDir + '/**'], {
		open: false,
		port: 4000,
		proxy: "http://localhost:3000"
	});
});