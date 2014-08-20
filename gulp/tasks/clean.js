var gulp         = require('gulp');
var clean        = require('gulp-clean');

gulp.task('clean', ['environmentCheck'], function () 
{
  return gulp.src(global.outputDir, {read: false})
    .pipe(clean());
});