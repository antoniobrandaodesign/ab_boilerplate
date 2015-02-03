## AB HTML Boilerplate

This is my current HTML Front-end development setup.

Jeet with Rupture and Typographic, done in Stylus and Jade, bundled in a Gulp-based project with BrowserSync and ready-to-use tasks.

> This setup's main highlight is that it provides you with a "live HTML development mode", easy builds, structure, and really clean minimal code.

Questions in the Issues section please. Contributions to improve this setup are welcome!

Jeet is a great responsive framework. Much cleaner, leaner and faster than Bootstrap3. Combined with Rupture and Typographic, it allows you to create complex responsive layout flows very quickly with a few minimal lines of code. 

Why Jeet? We believe that not only style but also layout logic should be independent from markup. Jeet is a hyper simple yet efficient way to apply responsive layout logic to HTML, without even touching HTML files. Everything is done within CSS. Jeet doesn't pollute your HTML with .col-md2.col-lg4.col-etc classes everywhere. It doesn't enforce a specific responsive behaviour to any piece of HTML. In typical Bootstrap code, everytime we want to change responsive behaviour we need to edit HTML files, making code hard to maintain. To implement responsive behaviours, you shouldn't be messing about with HTML files really. Since media queries are CSS, responsive code should stay in CSS. This is what Jeet, Rupture and Typgraphic allow us to accomplish gracefully.

Jeet + Rupture example: How to make a grid that shows 1 element por row in mobile, 2 in tablets, and 3 in desktop? Using Stylus it would be like this:

    .grid-element
        +mobile()
            col(1)
        +tablet()
            col(1/2)
        +desktop()
            col(1/3)

That is so simple and readable I'm pretty sure you can understand it even if you never used Jeet or Rupture. These layout flows can bundled in the form of mixins. The same mixin can be applied to many HTML blocks. The same way many different mixins can be applied to the same HTML block. This enables us to change the behaviour of HTML blocks without having to edit the HTML itself. It's brilliant and super clean.

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
        - [Nib](http://visionmedia.github.io/nib/)  (included above in Axis CSS)
        - [Autoprefixer](https://www.npmjs.org/package/autoprefixer-stylus)
    - HTML
        - [Jade](http://jade-lang.com)
    - JavaScript
        - [Browserify](http://browserify.org/) (with JavaScript source maps minification and obfuscation)
        - Optional [CoffeeScript](http://coffeescript.org)

- Features:
    - Live development (auto browser reload for HTML JS and CSS)
    - Test the app in any device in your local network
    - Real-time interaction syncronization between all connected devices
    - Easily call tasks to create either Development and Production builds
    - JavaScript
        - Compressed and obfuscated in production tasks
        - Readable in development tasks
        - Source maps in development tasks
    - CSS
        - Compiled via Browserify and injected into HEAD
        - Responsive at core
        - Responsive typography
        - Compressed in production tasks
        - Readable in development tasks
        - Source maps in development tasks
        - Autoprefixed (down to IE7)
    - HTML
        - Predefined Jade structure for basic building blocks
        - Compressed in production tasks
        - Uncompressed in development tasks
        - Jadeify transform included to require ".jade" files via JS
    - Automatic minification of images, including SVGs
    - Automatic Documentation generation in Markdown format for Flatdoc
    - FTP upload task for FTP deployment, with prompt for username and password
    - Automatic clean-up of build folders before creating builds
    - Tasks print processed file names to console
    - Error reporting and handling
    - Device detection
    - Handy information task (simply run "gulp info" in project folder to see info & available tasks)

### Installing

    1. install Node.js
    2.  If you don't have Gulp, install it: run "sudo npm install -g gulp" in the console  ("sudo" may be necessary because "-g" is a global installation)
    3. clone this repository and enter the folder
    4. run "sudo npm install" inside the project folder ("sudo" seems to be necessary for some modules)
    5. sometimes running "npm install" fails to install some dependencies.
        5a. Run "gulp info", and if some module is missing, an error will pop up specifying the name of the missing module. 
        5b. Copy the module's name and run "npm install the-missing-module-name --save". 
        5c. Repeat the process for each missing module if necessary.

### Running (first time)

    A. run "gulp build_dev" to make a development build and have something to work with
    B. run "gulp watch". an URL will be displayed in the console (usually http://localhost:3000)
    C. open that URL in your browser. you should see a simple responsive website
    D. another URL will also be displayed, which starts with your IP address. open this URL in your phone or tablet
    E. at this point, when you edit & save Jade Javascript or Stylus files, changes will be reflected in the browser and in all connected devices.
    F. run "gulp info" in the console to see available tasks

### Running (normally)

    A. normally when starting work, what you want is to run "gulp watch" and rock on
    B. run "gulp info" in the console to see available tasks


### Development and Production build tasks: difference

- Development
    - Build is created in folder /builds/production
    - JavaScript files are compiled WITH source maps
    - JavaScript files are readable, NOT compressed
    - CSS injected into JavaScript is NOT compressed
    - CSS injected into JavaScript is compiled WITH source maps
    - HTML files are readable, NOT compressed
- Production
    - Build is created in folder /builds/development
    - JavaScript files are compressed and obfuscated
    - JavaScript files are compiled WITHOUT source maps
    - CSS injected into JavaScript is compressed
    - CSS injected into JavaScript is compiled WITHOUT source maps
    - HTML files are compressed


### Roadmap

- Provide information about the Jade templates structure
- I18N
- Minimal Router

---------



# Available Gulp tasks  

### gulp info
- Displays information and available tasks

### gulp watch
- Starts 'live' front-end development environment
- Saved files will be compiled on the fly
- Changes are injected in the browser automatically

### gulp jade_dev
- Compiles all Jade files in development mode: readable, not compressed

### gulp jade_prod
- Compiles all Jade files in development mode: compressed, not readable

### gulp js
- Compiles all JS files in development mode: WITH source maps & not minified. CSS is also compiled and ijected in the JS.

### gulp js_prod
- Compiles all JS files in production mode: WITHOUT source maps & minified

### gulp images
- Takes all images from ./src/files/images (recursively), minifies them and copies them to the dev build_folder/images

### gulp browserSync
- Generates URLs to serve the website locally and in the local network - syncs data and interaction

### gulp ftp
- Upload production build to FTP. Entering hostname in gulp task is necessary. Username and Password will be prompted in the console

### gulp build_dev
- Creates a DEVELOPMENT build. Starts by completely deleting previous build

### gulp build_prod
- Creates a PRODUCTION build. Starts by completely deleting previous build

