var gulp = require('gulp');

gulp.task('setProduction', function() 
{
	global.ENV		 	= 'production';
	global.outputDir 	= 'builds/production';
	global.dataPath		= '/resources';
});