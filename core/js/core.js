// entry point for Browserify's task

/**
* # App Root
*
* This is the App Root
*
* var abv5 = require("./abv5");
*
* ABv5
* Copyright (c) 2014 Antonio Brandao <design@antoniobrandao.com>
*/

/*!
* Library version.
*/
exports.version = '0.0.1';


/**
* Declare global App data holder
*
* @param {String} js
* @param {String} js2
* @return {Array}
* @see src/js/abv5
* @api private
*/
window.App = 
{
	// Models: {},
	// Collections: {},
	// Views: {},
	// Router: {}
};

// app root - necessary file in "src"
var app = require("../../src/js/app");

app.index();