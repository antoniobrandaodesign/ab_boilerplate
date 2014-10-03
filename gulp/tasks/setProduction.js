var gulp 		= require('gulp');
var datapaths	= require("./datapaths");

gulp.task('setProduction', function() 
{
	global.ENV		 	= 'production';
	global.outputDir 	= datapaths.builds_prod;
});