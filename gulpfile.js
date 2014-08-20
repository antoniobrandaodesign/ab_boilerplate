/*
	gulpfile.js
	===========
	Each Task is defined in it's own file in gulp/tasks. 
	Any file in that folder gets automatically
	required by the loop in ./gulp/index.js (below).

	To add a new task, simply add a new task file to gulp/tasks.
*/

require('./gulp');



// // Note the new way of requesting CoffeeScript since 1.7.x
// require('coffee-script/register');
// // This bootstraps your Gulp's main file
// require('./Gulpfile.coffee');