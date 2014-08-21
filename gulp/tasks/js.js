var gulp         = require('gulp');
var	browserify 	 = require('browserify');
var	source 		   = require('vinyl-source-stream');
var	browserify 	 = require('browserify');
var	gulpif 		   = require('gulp-if');
var connect 	   = require('gulp-connect');
var	streamify    = require('gulp-streamify');
var	uglify 		   = require('gulp-uglify');

var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var striplog     = require('gulp-strip-debug');

gulp.task('js', ['environmentCheck'], function() {

  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Browserify Options
    entries:    ['./src/js/main.js'],
    extensions: ['.coffee', '.hbs'],
    debug:      global.ENV === 'development'
  });

  var bundle = function() 
  {
    return bundler
    .bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(striplog())
    .pipe(gulpif( global.ENV === 'production', streamify(uglify({ mangle: global.ENV === 'production' }))))
    .pipe(gulp.dest(global.outputDir + global.dataPath + '/js'))
    .pipe(connect.reload())
    .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});