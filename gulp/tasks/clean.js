var gulp         = require('gulp');
var rimraf        = require('rimraf');

gulp.task('clean', ['environmentCheck'], function (cb) 
{
  	rimraf(global.outputDir, cb);
});