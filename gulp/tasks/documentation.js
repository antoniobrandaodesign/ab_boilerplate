var gulp 	     = require('gulp');
var markdox      = require('gulp-markdox');
var concat       = require('gulp-concat')
var rename       = require("gulp-rename");
var runSequence  = require('run-sequence');
var	jade 		 = require('gulp-jade');

var	browserify 	 = require('browserify');
var	source 		 = require('vinyl-source-stream');
var	browserify 	 = require('browserify');

/**
* Compile JavaScript source code documentation
*
* The docs will be available at:
*
* - `/docs/js` folder
*
* @see gulp/tasks/documentation.js
*/

gulp.task('docs_js', ['environmentCheck'], function () {
	gulp.src('./src/js/**/*.*')
	.pipe(markdox())
	.pipe(rename({
        extname: ".md"
    }))
	.pipe(gulp.dest('./docs/js'));
});

/**
* Compile Gulp files documentation
*
* The docs will be available at:
*
* - `/docs/gulp` folder
*
* @see gulp/tasks/documentation.js
*/

gulp.task('docs_gulp', ['environmentCheck'], function () {
	gulp.src('./gulp/**/*.*')
	.pipe(markdox())
	.pipe(rename({
        extname: ".md"
    }))
    // .pipe(concat("doc.md"))
	.pipe(gulp.dest('./docs/gulp'));
});

/**
* Compile all JavaScript source code into a single Markdown file
*
* The docs will be available at:
*
* - `/docs/js` folder
* - `documentation.md` file name
*
* @see gulp/tasks/documentation.js
*/
gulp.task('docs_single_file', ['environmentCheck'], function () {
	gulp.src('./gulp/**/*.*')
	.pipe(markdox())
	.pipe(rename({
        extname: ".md"
    }))
    .pipe(concat("all_docs.md"))
	.pipe(gulp.dest(global.outputDir + global.dataPath + '/docs'));
	// .pipe(gulp.dest('./docs/js'));
});

/**
* Compile docs for ALL JavaScript and Gulp files
*
* The docs will be available at:
*
* - `/docs/js` folder
* - `documentation.md` file name
*
* @see gulp/tasks/documentation.js
*/
gulp.task('docs', ['setProduction'], function() 
{
    runSequence('jade_docs', 'docs_single_file', 'docs_js', 'browserSync_docs');
});



gulp.task('jade_docs', ['environmentCheck'], function()
{
	return  gulp.src('core/docs_generator_files/jade/index.jade')
			.pipe(jade({ }))
			.pipe(gulp.dest(global.outputDir + global.dataPath + '/docs'));
});




gulp.task('docs_js', ['environmentCheck'], function() {

  var bundler = browserify({
	entries: ['./core/docs_generator_files/js/script.js']
  });

  var bundle = function() 
  {
    return bundler
		.bundle()
		.pipe(source('script.js'))
		.pipe(gulp.dest(global.outputDir + global.dataPath + '/docs/js'))
  };

  return bundle();
});

var browserSync = require('browser-sync');

gulp.task('browserSync_docs', ['environmentCheck'], function() 
{
	browserSync.init([global.outputDir + global.dataPath + '/docs'], {
		open: true,
		server: {
			baseDir: global.outputDir + global.dataPath + '/docs'
		}
	});
});

