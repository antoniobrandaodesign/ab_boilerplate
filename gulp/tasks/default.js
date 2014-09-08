var gulp 		= require('gulp');
var chalk 		= require('chalk');

gulp.task('default', function() 
{
	console.log("");
	console.log("");
	console.log(chalk.cyan(' ####  #####    '));
	console.log(chalk.cyan('##  ## ##  ##   Antonio Brandao Design build system'));
	console.log(chalk.cyan('###### #####    '));
	console.log(chalk.cyan('##  ## ##  ##   http://www.antoniobrandao.com'));
	console.log(chalk.cyan('##  ## #####    '));
	console.log("");
	console.log(chalk.red("##############################################"));
	console.log(chalk.red("#######    Gulp ::: available tasks    #######"));
	console.log(chalk.red("##############################################"));
	console.log("");

	console.log(chalk.magenta("➜ gulp watch"));
	console.log(chalk.white.bold("Starts 'live' front-end development environment"));
	console.log(chalk.white.bold("Saved files will be compiled on the fly"));
	console.log(chalk.white.bold("Changes are injected in the browser automatically"));
	console.log("");

	console.log(chalk.magenta("➜ gulp jade_dev"));
	console.log(chalk.white.bold("Compiles all Jade files in development mode: not minified"));
	console.log("");

	console.log(chalk.magenta("➜ gulp stylus_all"));
	console.log(chalk.white.bold("Compiles all Stylus files in development mode: WITH source maps & not minified"));
	console.log("");

	console.log(chalk.magenta("➜ gulp stylus_prod"));
	console.log(chalk.white.bold("Compiles all Stylus files in production mode - WITHOUT source maps & minified"));
	console.log("");

	console.log(chalk.magenta("➜ gulp js"));
	console.log(chalk.white.bold("Compiles all JS files in development mode: WITH source maps & not minified"));
	console.log("");

	console.log(chalk.magenta("➜ gulp js_prod"));
	console.log(chalk.white.bold("Compiles all JS files in production mode: WITHOUT source maps & minified"));
	console.log("");

	console.log(chalk.magenta("➜ gulp images"));
	console.log(chalk.white.bold("Takes all images from ./src/files/images (recursively), minifies them and copies them to the dev build_folder/images"));
	console.log("");

	console.log(chalk.magenta("➜ gulp browserSync"));
	console.log(chalk.white.bold("Generates URLs to serve the website locally and in the local network - syncs data and interaction"));
	console.log("");

	console.log(chalk.magenta("➜ gulp build_dev"));
	console.log(chalk.white.bold('Creates a DEVELOPMENT "build" using the following tasks: stylus_all, js, images'));
	console.log(chalk.white.bold('- JS and CSS files are compiled WITH source maps'));
	console.log(chalk.white.bold('- JS and CSS files are compiled WITH source maps'));
	console.log(chalk.white.bold('- JS and CSS files are readable, NOT compressed'));
	console.log(chalk.white.bold('- Compiled HTML is NOT compressed'));
	console.log("");

	console.log(chalk.magenta("➜ gulp build_prod"));
	console.log(chalk.white.bold('Creates a PRODUCTION "build" using the following tasks: stylus_all, js, images'));
	console.log(chalk.white.bold('- JS and CSS files are compiled WITHOUT source maps'));
	console.log(chalk.white.bold('- JS files are compressed and obfuscated'));
	console.log(chalk.white.bold('- CSS files are compressed'));
	console.log(chalk.white.bold('- Compiled HTML is compressed'));
	console.log("");

	// previous version
	// gulp.src('./gulp/info.md')
 	// .pipe(cat());
});



