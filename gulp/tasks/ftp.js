var gulp 	 = require('gulp');
var ftp 	 = require('gulp-ftp');
var print    = require('gulp-print');  // displays files in the console
var prompt   = require('gulp-prompt'); // asks for password in the console before connecting

var userName = '';
var userPass = '';

gulp.task('ftp', ['prompt_password'], function() 
{
    return gulp.src('builds/production/**/*.*')
		.pipe(print())
        .pipe(ftp({
            host: 'ftp.antoniobrandao.com',
            user: userName,
            pass: userPass,
            remotePath: '/public_html/gulpftp'
        }));
});

gulp.task('prompt_user', function () 
{
    return gulp.src('./src/js/app/index.js')
    .pipe(prompt.prompt({
        type: 'input',
        name: 'user_input',
        message: 'Please enter your username'
    }, function(res){
        userName = res.user_input;
    }));
});

gulp.task('prompt_password', ['prompt_user'], function () 
{
    return gulp.src('./src/js/app/index.js')
    .pipe(prompt.prompt({
        type: 'password',
        name: 'password_input',
        message: 'Please enter your password'
    }, function(res){
        userPass = res.password_input;
    }));
});