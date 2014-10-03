var gulp  		= require('gulp');
var print 		= require('gulp-print');
var datapaths	= require("./datapaths");

gulp.task('plugins', ['environmentCheck'], function() 
{
    return gulp.src('./src/files/plugins/**/*.*')
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + datapaths.dataPath + '/plugins'))
});