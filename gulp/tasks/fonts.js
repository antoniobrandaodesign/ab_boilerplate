var gulp = require('gulp');
var print = require('gulp-print');

gulp.task('fonts', ['environmentCheck'], function() 
{
    return gulp.src('./src/files/fonts/**/*.*')
	.pipe(print())
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/fonts'))
});