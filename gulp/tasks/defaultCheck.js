var gulp = require('gulp');

// this task checks if no environment has been set - and defaults environment variables to "development" 

gulp.task('environmentCheck', function() 
{
	if (!global.ENV) 		{ global.ENV 		= 'development' 		 };
	if (!global.outputDir)  { global.outputDir  = './builds/development' };
	
	global.dataPath		= '/resources';
});