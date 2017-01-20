'use strict';

gulp =       require 'gulp'

coffee =     require 'gulp-coffee'
concat =     require 'gulp-concat'
gutil =      require 'gulp-util'
source =     require 'vinyl-source-stream'
rename =     require 'gulp-rename'
browserify = require 'gulp-browserify'
clean =      require 'gulp-clean'
minifyCss =  require 'gulp-minify-css'

###
* Clean
###
gulp.task 'clean', () -> 
    gulp.src './dist/', read: false
    .pipe clean()

###
* Build core
###
gulp.task 'build-core', () -> 
    gulp.src ["./src/**/*.coffee", "!./src/public/**/*.coffee"]
    .pipe coffee bare: true
    .pipe gulp.dest "./dist/"
    .on 'error', gutil.log

###
* Move and minify css
###
gulp.task 'minify-css', () -> 
    gulp.src "./src/**/*.css"
    .pipe minifyCss()
    .pipe gulp.dest "./dist/"
    .on 'error', gutil.log

###
* Browserify
###
gulp.task 'browserify', () -> 
    gulp.src './src/public/**/main.coffee',  read: false
    .pipe browserify 
      transform: ['coffeeify'],
      extensions: ['.coffee']
    .pipe rename extname: '.bundle.js'
    .pipe gulp.dest './dist/public/'
    .on 'error', gutil.log

###
* Browserify-debug
###
gulp.task 'browserify-debug', () -> 
    gulp.src './src/public/**/main.coffee', read: false
    .pipe browserify
      transform: ['coffeeify'],
      extensions: ['.coffee'],
      debug : true
    .pipe rename extname: '.bundle.js'
    .pipe gulp.dest './dist/public/'
    .on 'error', gutil.log

gulp.task 'build-static', ['minify-css', 'browserify-debug']
gulp.task 'build-dev', ['build-core', 'build-static']
gulp.task 'build-prod', ['build-core', 'minify-css', 'browserify']
