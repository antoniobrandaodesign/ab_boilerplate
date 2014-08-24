## AB HTML6 Boilerplate

This is my current HTML Front-end development setup.

Jeet with Rupture and Typographic, done in Stylus and Jade, bundled in a Gulp-based project with ready-to-use tasks.

> Note: HTML6 doesn't exist (yet). This project does not contain HTML6. I put 'HTML6' in the title for fun, and in a way because I feel this setup is a big step ahead of the typical (bootstrap3-ish) HTML5 development setup. 

Why Jeet? Because just as style should be separated from markup, layout logic should be separated from markup. Therefore Bootstrap 3 is bad practice (sorry Bootstrap lovers). It is easy to understand why is it not good practice to enforce a responsive behaviour to a piece of HTML. In Bootstrap, everytime we want to change responsive behaviour, we need to edit HTML files, and that doesn't make sense. Do not pollute your HTML with .col-md2.col-lg4.col-etc classes. You shouldn't even be messing with HTML files to work responsive behavour. Since media queries are CSS, responsive work should stay in CSS. This is what Jeet, Rupture and Typgraphic allow us to accomplish gracefully.

Jeet is an incredible responsive framework. Much cleaner, leaner and faster than Bootstrap3. Combined with Rupture and Typographic, allows you to create very complex layout flows very quickly with a few minimal lines of code. 

These layout flows can bundled in the form of mixins. One mixin can be applied to many HTML block. As many different mixins can be applied to the same HTML block. This enables us to change the behaviour of HTML blocks without ever having to edit the HTML itself. One of the tricks is to create standardised HTML blocks (jade mixins), and standardised responsive behaviour mixins (stylus mixins with jeet & rupture code). Then use them together interchangeably. Notice the power you get!

This setup's main highlight is that it provides you with a "live HTML development mode", easy builds, structure, and really clean minimal code.


- Tools: 
    - Workflow
        - [Gulp](http://gulpjs.com) tasks for everything, neatly organised
        - [Browsersync](http://browsersync.io/)
    - CSS
        - [Stylus](http://learnboost.github.io/stylus/)
        - [Jeet](http://jeet.gs)
        - [Rupture](http://jenius.github.io/rupture/)
        - [Typographic](https://github.com/corysimmons/typographic)
        - [Axis CSS](http://roots.cx/axis/)
        - [Nib](http://visionmedia.github.io/nib/)
        - [Autoprefixer](https://www.npmjs.org/package/autoprefixer-stylus)
    - HTML
        - [Jade](http://jade-lang.com)
    - JavaScript
        - [Browserify](http://browserify.org/) (with JavaScript source maps minification and obfuscation)
        - Optional [CoffeeScript](http://coffeescript.org)

- Features:
    - Live development (instant CSS injection, and auto browser reload for HTML and JS)
    - Test the app in any device in your local network
    - Real-time interaction syncronization between all connected devices
    - Easily call tasks to create either Development and Production builds
    - JavaScript
        - Compressed and obfuscated in production tasks
        - Readable in development tasks
        - Source maps in development tasks
    - CSS
        - Compressed in production tasks
        - Readable in development tasks
        - Autoprefixer (down to IE7)
        - (SOON) Source maps in development tasks
    - HTML
        - Predefined structure for basic building blocks
        - Compressed in production tasks
        - Readable in development tasks
    - Automatic minification of images (including SVGs)
    - Automatic Documentation generation in Markdown format for Flatdoc
    - FTP upload task for FTP deployment, with prompt for username and password
    - Automatic clean-up of build folders before creating builds
    - Tasks print processed file names to console
    - Error reporting and handling
    - Handy information task (simply run "gulp" in project folder to see info & available tasks)

# Installing

    1. install Node.js
    2. npm install -g gulp
    3. clone this repository
    4. sudo npm install (inside project folder) ("sudo" seems to be necessary for some modules)
    5. Sometimes "npm install" fails to install everything. Run "gulp" to check and if some module is missing, if an error pops up check if it states some missing module. Copy the module's name and run "npm install missing-module --save"

# Running

    A. Usually what you want is to use "gulp watch"
    B. Run "gulp" in the console to see available

# Gulp tasks  

### gulp
- Displays information and available tasks

### gulp watch
- Starts 'live' front-end development environment
- Saved files will be compiled on the fly
- Changes are injected in the browser automatically

### gulp stylus_all
- Compiles all Stylus files in development mode: WITH source maps & not minified

### gulp stylus_prod
- Compiles all Stylus files in production mode - WITHOUT source maps & minified

### gulp js
- Compiles all JS files in development mode: WITH source maps & not minified

### gulp js_prod
- Compiles all JS files in production mode: WITHOUT source maps & minified

### gulp images
- Takes all images from ./src/files/images (recursively), minifies them and copies them to the dev build_folder/images

### gulp browserSync
- Generates URLs to serve the website locally and in the local network - syncs data and interaction

### gulp ftp
- Upload production build to FTP. Entering hostname in gulp task is necessary. Username and Password will be prompted in the console

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