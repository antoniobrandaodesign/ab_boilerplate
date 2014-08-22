var gulp          = require('gulp');
var	browserify 	  = require('browserify');
var	source 		    = require('vinyl-source-stream');
var	browserify 	  = require('browserify');
var	gulpif 		    = require('gulp-if');
var connect 	    = require('gulp-connect');
var	streamify     = require('gulp-streamify');
var	uglify 		    = require('gulp-uglify');

var watchify      = require('watchify');
var bundleLogger  = require('../util/bundleLogger');
var handleErrors  = require('../util/handleErrors');
var strip         = require('gulp-strip-debug');
var print         = require("gulp-print");


gulp.task('js', ['environmentCheck'], function() {

  var bundleMethod = global.isWatching ? watchify : browserify;

  var bundler = bundleMethod({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Browserify Options
    entries:    ['./src/js/main.js'],
    extensions: ['.coffee', '.hbs'],
    // activate debug / source maps in development mode only
    debug:      global.ENV === 'development'
  });

  var bundle = function() 
  {
    return bundler
    .bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    // remove console.logs and such
    .pipe(gulpif( global.ENV === 'production', streamify( strip() )))
    // uglify JS and obfuscate in produciton mode only
    .pipe(gulpif( global.ENV === 'production', streamify(uglify({ mangle: global.ENV === 'production' }))))
    .pipe(gulp.dest(global.outputDir + global.dataPath + '/js'))
    .pipe(connect.reload())
    .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});