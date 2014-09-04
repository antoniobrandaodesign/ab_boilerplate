var gulp = require('gulp');

gulp.task('setProduction', function() 
{
	global.ENV		 	= 'production';
	global.outputDir 	= 'builds/production';
	global.dataPath		= '/resources';

	global.cssSrcPath	= './src/stylus/app/pages/*.styl';
	global.htmlSrcPath	= 'src/jade/*.jade';
});