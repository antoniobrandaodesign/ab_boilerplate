var gulp 		= require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['setProduction'], function() 
{
    // runSequence('js', 'less', 'jade', 'connect', 'images', 'watch');
});