var gulp 		= require('gulp');
var reload 		= require('browser-sync').reload;
var runSequence = require('run-sequence');


gulp.task('watch_files', ['setWatch'], function()
{
	gulp.watch('src/jade/**/*.*', 	['jade']);
	gulp.watch('src/js/**/*.*', 	['js']);
	gulp.watch('src/stylus/**/*.*', ['stylus']);
	gulp.watch('core/jade/**/*.*', 	['jade']);
	gulp.watch('core/js/**/*.*', 	['js']);
	gulp.watch('core/stylus/**/*.*', ['stylus']);
});

gulp.task('watch_files_express', ['setWatch'], function()
{
	// gulp.watch('src/jade/**/*.*', 	reload);
	gulp.watch('src/js/**/*.*', 	['js']);
	gulp.watch('src/stylus/**/*.*', ['stylus']);
	// gulp.watch('core/jade/**/*.*', 	reload);
	gulp.watch('core/js/**/*.*', 	['js']);
	gulp.watch('core/stylus/**/*.*', ['stylus']);

	gulp.watch(["core/jade/**/*.*", "src/jade/**/*.*"], reload);
});

gulp.task('watch', ['setDevelopment'], function() 
{
    runSequence('stylus', 'jade', 'js', 'watch_files', 'browserSync');
});

gulp.task('watch_express_bs', ['setDevelopment'], function() 
{
    runSequence('stylus', 'jade', 'js', 'watch_files_express', 'browserSync_express');
});

gulp.task('watch_express', ['setDevelopment'], function() 
{
    runSequence('stylus', 'js', 'watch_files_express', 'browserSync_express');
});

gulp.task('watch_express_direct', ['setDevelopment'], function() 
{
    runSequence('watch_files_express', 'browserSync_express');
});

gulp.task('watch_direct', ['setDevelopment'], function() 
{
    runSequence('watch_files', 'browserSync');
});