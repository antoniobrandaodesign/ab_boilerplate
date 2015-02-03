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
var datapaths     = require("./datapaths");

var autoprefixer  = require("autoprefixer-stylus");
var jeet          = require("jeet");
var rupture       = require("rupture");
var axis          = require("axis-css");
var typographic   = require("typographic");
var stylify       = require("stylify");

var browserify_instance = browserify({
  // Required watchify args
  cache: {}, packageCache: {}, fullPaths: true,
  // Browserify Options
  entries:    ['./core/js/core.js'],
  // extensions: ['.jade', '.styl'],
  debug:      global.ENV === 'development'
});

browserify_instance.transform('stylify', {
  use :[ 
    jeet(),
    rupture(), 
    typographic(), 
    axis(), 
    autoprefixer({ browsers: ['ie 7', 'ie 8'] })
  ],
  sourcemap: { inline: global.ENV === 'development' },
  compress: global.ENV === 'production',
});

var bundler = watchify(browserify_instance);

var bundle = function()
{
  return bundler.bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    // remove console.logs and such
    .pipe(gulpif( global.ENV === 'production', streamify( strip() )))
    // uglify JS and obfuscate in produciton mode only
    .pipe(gulpif( global.ENV === 'production', streamify(uglify({ mangle: global.ENV === 'production' }))))
    .pipe(print())
    .pipe(gulp.dest(global.outputDir + datapaths.dataPath + '/js'))
    // .pipe(connect.reload())
    .on('end', bundleLogger.end);
}

gulp.task('js_watch', ['environmentCheck'], bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler




gulp.task('js_build', ['environmentCheck'], function() {

  console.log('GULP: Starting js task');
  
  var bundler = browserify(
  {
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Browserify Options
    entries:    ['./core/js/core.js'],
    // extensions: ['.jade', '.styl'],
    debug:      global.ENV === 'development'
  });

  var bundle = function() 
  {
    bundleLogger.start();

    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      // remove console.logs and such
      .pipe(gulpif( global.ENV === 'production', streamify( strip() )))
      // uglify JS and obfuscate in produciton mode only
      .pipe(gulpif( global.ENV === 'production', streamify(uglify({ mangle: global.ENV === 'production' }))))
      .pipe(print())
      .pipe(gulp.dest(global.outputDir + datapaths.dataPath + '/js'))
      // .pipe(connect.reload())
      .on('end', bundleLogger.end);
  };

  // if(global.isWatching) {
  //   bundler = watchify(bundler);
  //   bundler.on('update', bundle);
  // }

  return bundle();
});

gulp.task('js_prod', ['setProduction'], function() 
{
  gulp.start('js_build');
});


// gulp.task('js', ['environmentCheck'], function() {

//   var bundler = browserify({
//     // Required watchify args
//     cache: {}, packageCache: {}, fullPaths: true,
//     // Browserify Options
//     entries:    ['./core/js/main.js'],
//     extensions: ['.coffee', '.hbs'],
//     debug:      global.ENV === 'development'
//     // transform:  [ 'jadeify' ]
//   });

//   var bundle = function() 
//   {
//     bundleLogger.start();

//     return bundler
//       .bundle()
//       .on('error', handleErrors)
//       .pipe(source('bundle.js'))
//       // remove console.logs and such
//       .pipe(gulpif( global.ENV === 'production', streamify( strip() )))
//       // uglify JS and obfuscate in produciton mode only
//       .pipe(gulpif( global.ENV === 'production', streamify(uglify({ mangle: global.ENV === 'production' }))))
//       .pipe(print())
//       .pipe(gulp.dest(global.outputDir + datapaths.dataPath + '/js'))
//       .pipe(connect.reload())
//       .on('end', bundleLogger.end);
//   };

//   if(global.isWatching) {
//     bundler = watchify(bundler);
//     bundler.on('update', bundle);
//   }

//   return bundle();
// });

// gulp.task('js_prod', ['setProduction'], function() 
// {
//   gulp.start('js');
// });