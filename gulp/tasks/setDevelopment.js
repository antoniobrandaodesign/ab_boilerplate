var gulp 		= require('gulp');
// var datapaths 	= require('datapaths');

gulp.task('setDevelopment', function() 
{
	global.ENV 		 	= 'development';
	global.outputDir 	= 'builds/development';

	// global.dataPath		= datapaths.dataPath;
	// global.cssSrcPath	= datapaths.cssSrcPath;
	// global.htmlSrcPath	= datapaths.htmlSrcPath;


	// global.dataPath		= '/resources';
	// global.cssSrcPath	= './src/stylus/app/pages/*.styl';
	// global.htmlSrcPath	= 'src/jade/*.jade';
});