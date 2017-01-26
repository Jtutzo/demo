'use strict';

gulp                 = require 'gulp'

coffee               = require 'gulp-coffee'
concat               = require 'gulp-concat'
gutil                = require 'gulp-util'
source               = require 'vinyl-source-stream'
rename               = require 'gulp-rename'
browserify           = require 'gulp-browserify'
clean                = require 'gulp-clean'
minifyCss            = require 'gulp-minify-css'
cssimport            = require "gulp-cssimport"
vueify               = require 'vueify'

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
    gulp.src ["./src/core/**/*.coffee"]
    .pipe coffee bare: true
    .pipe gulp.dest "./dist/core/"
    .on 'error', gutil.log

###
* Build controller
###
gulp.task 'build-controller', () -> 
    gulp.src ["./src/**/*.coffee", "!./src/public/**/*.coffee", "!./src/core/**/*.coffee"]
    .pipe coffee bare: true
    .pipe gulp.dest "./dist/"
    .on 'error', gutil.log

###
* Move and minify css
###
gulp.task 'build-css', () -> 
    gulp.src "./src/**/main.css"
    .pipe cssimport extensions: ["css"]
    .pipe minifyCss()
    .pipe gulp.dest "./dist/"
    .on 'error', gutil.log

###
* Browserify
###
gulp.task 'browserify', () -> 
    gulp.src './src/public/**/main.coffee',  read: false
    .pipe browserify 
      transform: ['coffeeify', [{_flags: {debug: true}}, vueify]],
      extensions: ['.coffee']
    .pipe rename extname: '.js'
    .pipe gulp.dest './dist/public/'
    .on 'error', gutil.log

###
* Browserify-debug
###
gulp.task 'browserify-debug', () -> 
    gulp.src './src/public/**/main.coffee', read: false
    .pipe browserify
      transform: ['coffeeify', [{_flags: {debug: true}}, vueify]],
      extensions: ['.coffee'],
      debug : true
    .pipe rename extname: '.js'
    .pipe gulp.dest './dist/public/'
    .on 'error', gutil.log

gulp.task 'build-static', ['build-css', 'browserify-debug']
gulp.task 'build-dev', ['build-core', 'build-controller', 'build-static']
gulp.task 'build-prod', ['build-core', 'build-controller', 'build-css', 'browserify']
