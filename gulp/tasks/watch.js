var gulp 		= require('gulp');
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

gulp.task('watch', ['setDevelopment'], function() 
{
    runSequence('stylus', 'jade', 'js', 'watch_files', 'browserSync');
});

gulp.task('watch_direct', ['setDevelopment'], function() 
{
    runSequence('watch_files', 'browserSync');
});