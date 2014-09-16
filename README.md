## AB HTML Boilerplate

This is my current HTML Front-end development setup.

Jeet with Rupture and Typographic, done in Stylus and Jade, bundled in a Gulp-based project with BrowserSync and ready-to-use tasks.

> This setup's main highlight is that it provides you with a "live HTML development mode", easy builds, structure, and really clean minimal code.

> Clone this project and then create a "src" folder in it for your specific files. This "src" folder can be a Git submodule. Example files for the "src" folder are in the "src_example" folder

Questions in the Issues section please. Contributions to improve this setup are welcome!

Jeet is a great responsive framework. Much cleaner, leaner and faster than Bootstrap3. Combined with Rupture and Typographic, it allows you to create very complex layout flows very quickly with a few minimal lines of code. 

Why Jeet? We believe that not only style but also layout logic should be independent from markup. Jeet is a hyper simple yet efficient way to apply responsive layout logic to HTML, without even touching HTML files. Everything is done within CSS. Jeet doesn't pollute your HTML with .col-md2.col-lg4.col-etc classes everywhere. It doesn't enforce a specific responsive behaviour to any piece of HTML. In typical Bootstrap code, everytime we want to change responsive behaviour we need to edit HTML files, making code hard to maintain. You shouldn't even be messing about with HTML files in the first place. Since media queries are CSS, responsive work should stay in CSS. This is what Jeet, Rupture and Typgraphic allow us to accomplish gracefully.

Jeet + Rupture example: How to make a grid that shows 1 element por row in mobile, 2 in tablets, and 3 in desktop? Using Stylus it would be like this:

    .grid-element
        +mobile()
            col(1)
        +tablet()
            col(1/2)
        +desktop()
            col(1/3)

That is so simple and readable I'm pretty sure you can understand it even if you can't code. Now, these layout flows can bundled in the form of mixins. The same mixin can be applied to many HTML blocks. The same way many different mixins can be applied to the same HTML block. This enables us to change the behaviour of HTML blocks without having to edit the HTML itself. It's brilliant and super clean. One of the tricks is to create standardised HTML blocks (jade mixins), and standardised responsive behaviour mixins (stylus mixins with jeet & rupture code). Then use them together interchangeably. Notice the power you get!

I will be adding information about the Jade templates structure later.


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
    - Live development (instant CSS injection, and auto browser reload for HTML and JS)
    - Test the app in any device in your local network
    - Real-time interaction syncronization between all connected devices
    - Easily call tasks to create either Development and Production builds
    - JavaScript
        - Compressed and obfuscated in production tasks
        - Readable in development tasks
        - Source maps in development tasks
    - CSS
        - Responsive at core
        - Responsive typography
        - Compressed in production tasks
        - Readable in development tasks
        - Autoprefixer (down to IE7)
        - Source maps in development tasks
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
    - Device detection
    - Production-ready Jade structure
    - Handy information task (simply run "gulp" in project folder to see info & available tasks)

### Installing

    1. install Node.js
    2. run "sudo npm install -g gulp" in the console  (sudo is necessary because "-g" is a global installation)
    3. clone this repository
    4. run "sudo npm install" inside the project folder ("sudo" seems to be necessary for some modules)
    5. sometimes running "npm install" fails to install everything. 
        5a. Run "gulp", and if some module is missing, an error will pop up specifying the name of the missing module. 
        5b. Copy the module's name and run "npm install the-missing-module-name --save". 
        5c. Repeat the process for each missing module if necessary.

### Running (first time)

    A. create a "src" folder in the root of the project
    B. for a test drive, copy all the files in "src_example" into the "src" folder
    C. run "gulp build_dev" to make a build and have something to work with
    D. run "gulp watch". an URL will be displayed in the console (usually http://localhost:3000)
    E. open that URL in your browser. you should see a simple responsive website
    F. another URL will also be displayed, which starts with your IP address. open this URL in your phone or tablet
    G. at this point, when you edit & save Jade Javascript or Stylus files, changes will be reflected in the browser and in all connected devices.
    H. run "gulp" in the console to see available tasks

### Running (normally)

    A. normally when starting work, what you want is to run "gulp watch" and rock on
    B. run "gulp" in the console to see available tasks


### Development and Production tasks: difference

- Production
    - Build is created in folder /builds/development
    - JavaScript files are compressed and obfuscated
    - JavaScript files are compiled WITHOUT source maps
    - CSS files are compressed
    - CSS files are compiled WITHOUT source maps
    - HTML files are compressed
- Development
    - Build is created in folder /builds/production
    - JavaScript files are compiled WITH source maps
    - JavaScript files are readable, NOT compressed
    - CSS files are readable, NOT compressed
    - CSS files are compiled WITH source maps
    - HTML files are readable, NOT compressed


### Roadmap

- I18N
- Minimal Router
- Add optional Express.js or Koa

---------



# Available Gulp tasks  

### gulp
- Displays information and available tasks

### gulp watch
- Starts 'live' front-end development environment
- Saved files will be compiled on the fly
- Changes are injected in the browser automatically

### gulp jade_dev
- Compiles all Jade files in development mode: readable, not compressed

### gulp jade_prod
- Compiles all Jade files in development mode: compressed, not readable

### gulp stylus_dev
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
- Creates a DEVELOPMENT build. Starts by completely deleting previous build

### gulp build_prod
- Creates a PRODUCTION build. Starts by completely deleting previous build

