## AB HTML6 Boilerplate

This boilerplate's main highlight is that it provides you with a "live front-end development mode" for those of us who like DRY syntax (Jade, Stylus) with automatic browser reloads / css injection, and syncronisation between any device connected to the given URL in the local network.

- Tools: 
    - Gulp tasks for everything
    - Stylus
	    - Jeet
	    - Rupture
	    - Typographic
	    - Axis CSS
        - Nib
        - Source Maps - not working yet
    - Jade
    - Browserify (with JavaScript source maps)
    - BrowserSync

- Features:
    - Live development (instant CSS injection, and auto browser reload for HTML and JS)
    - Real-time syncronization through all connected devices with BrowserSync
    - JavaScript source maps
    - Stylus source maps (SOON!)
    - FTP upload task for FTP deployment, with prompt for username and password
    - Minification of images (including SVGs)
    - Automatic clean-up of build folder before creating a build
    - Output processed file names to console
    - Error reporting
    - Commands to create Development and production builds
    - Documentation generation in Markdown format for Flatdoc
    - Handy information task (simply run "gulp")

# Installing

    1. install Node.js
    2. npm install -g gulp
    3. clone this repository
    4. sudo npm install (inside project folder) ("sudo" seems to be necessary for some modules)
    5. Sometimes "npm install" fails to install everything. Run "gulp" to check and if some module is missing, if an error pops up check if it states some missing module. Copy the module's name and run "npm install missing-module --save"

# Running

    A. Usually what you want is to use "gulp watch"
    B. Run "gulp" to see available options


# Gulp tasks  

### gulp watch
Starts 'live' front-end development environment
Saved files will be compiled on the fly
Changes are injected in the browser automatically

### gulp stylus_all
Compiles all Stylus files in development mode: WITH source maps & not minified

### gulp stylus_prod
Compiles all Stylus files in production mode - WITHOUT source maps & minified

### gulp js
Compiles all JS files in development mode: WITH source maps & not minified

### gulp js_prod
Compiles all JS files in production mode: WITHOUT source maps & minified

### gulp images
Takes all images from ./src/files/images (recursively), minifies them and copies them to the dev build_folder/images

### gulp browserSync
Generates URLs to serve the website locally and in the local network - syncs data and interaction

### gulp ftp
Upload production build to FTP. Entering hostname in gulp task is necessary. Username and Password will be prompted in the console

### gulp build_dev
- Creates a DEVELOPMENT "build" using the following tasks: stylus_all, jade_all, js, images
    - JS and CSS files are compiled WITH source maps
    - JS and CSS files are compiled WITH source maps
    - JS and CSS files are readable, NOT compressed
    - Compiled HTML is NOT compressed

### gulp build_prod
- Creates a PRODUCTION "build" using the following tasks: stylus_prod, jade_prod, js, images
    - JS and CSS files are compiled WITHOUT source maps
    - JS files are compressed and obfuscated
    - CSS files are compressed
    - Compiled HTML is compressed