var gulp 		= require('gulp');
var runSequence = require('run-sequence');


gulp.task('build_dev', ['setDevelopment'], function() 
{
    runSequence('clean', 'js', 'stylus_dev', 'jade_dev', 'images');
});


gulp.task('build_prod', ['setProduction'], function() 
{
    runSequence('clean', 'js', 'stylus_prod', 'jade_prod', 'images');
});