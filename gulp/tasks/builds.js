var gulp 		= require('gulp');
var runSequence = require('run-sequence');


gulp.task('build_dev', ['setDevelopment'], function() 
{
    runSequence('clean', 'js', 'stylus_dev', 'jade_dev', 'images', 'fonts', 'plugins');
});


gulp.task('build_prod', ['setProduction'], function() 
{
    runSequence('clean', 'js', 'stylus_prod', 'jade_prod', 'images', 'fonts', 'plugins');
});


// ExpressJS versions

gulp.task('build_dev_express', ['setDevelopment'], function() 
{
    runSequence('clean', 'js', 'stylus_dev', 'images', 'fonts', 'plugins');
});

gulp.task('build_prod_express', ['setProduction'], function() 
{
    runSequence('clean', 'js', 'stylus_prod', 'images', 'fonts', 'plugins');
});