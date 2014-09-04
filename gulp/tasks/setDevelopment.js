var gulp = require('gulp');

gulp.task('setDevelopment', function() 
{
	global.ENV 		 	= 'development';
	global.outputDir 	= 'builds/development';
	global.dataPath		= '/resources';

	global.cssSrcPath	= './src/stylus/app/pages/*.styl';
	global.htmlSrcPath	= 'src/jade/*.jade';
});