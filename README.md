#ReactJS skeleton using [Material-UI](http://material-ui.com)#

This is a ready to use skeleton for ReactJS (using gulp and browserify).

##Usage##

After cloning the repository remember to install dependencies

    cd <appName>
    npm install

and then

    npm start

#Description of [Gulp](https://github.com/gulpjs/gulp) Plugins


##[browserify](https://github.com/substack/node-browserify)
Browsers do not allow us to use the require method from Node.js. With browserify, we can implement dependency management on the browser. It also will bundle the code into one file in an efficient way to not repeat dependiencies that are used more than once.

##[browserSync](http://www.browsersync.io)
When developing and testing the website, browserSync is a powerful tool that will rebuild and refresh the webpage so you can see the changes you make as you are working.

##markup
Copies all of the files from /src/www to the build folder.
