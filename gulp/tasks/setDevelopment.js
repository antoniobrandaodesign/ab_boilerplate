var gulp 		= require('gulp');
var datapaths	= require("./datapaths");

gulp.task('setDevelopment', function() 
{
	global.ENV 		 	= 'development';
	global.outputDir 	= datapaths.builds_dev;
});