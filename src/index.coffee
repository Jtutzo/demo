#!/usr/bin/env node

###
# Module dependencies.
###
app = require './app'
debug = require('debug')('demo-user:server')
http = require 'http'
models = require './core/models'

###
# Normalize a port into a number, string, or false.
###
normalizePort = (val) ->
  port = parseInt val, 10

  if isNaN port then return val

  if port >= 0 then return port

  false

###
# Event listener for HTTP server "error" event.
###
onError = (error) ->
    if error.syscall isnt 'listen' then throw error

    bind = if typeof port is 'string' then 'Pipe ' + port else 'Port ' + port

    # handle specific listen errors with friendly messages
    switch error.code
        when 'EACCES' then console.error bind + ' requires elevated privileges';process.exit 1
        when 'EADDRINUSE' then console.error bind + ' is already in use';process.exit 1
        else throw error

###
# Event listener for HTTP server "listening" event.
###
onListening = () ->
  addr = server.address();
  bind = if typeof addr is 'string' then 'pipe ' + addr else 'port ' + addr.port
  debug 'Listening on ' + bind

###
# Get port from environment and store in Express.
###
port = normalizePort process.env.PORT || '3000'
app.set 'port', port

###
# Create HTTP server.
###
server = http.createServer app

models.sequelize.sync().then () ->
  ###
  # Listen on provided port, on all network interfaces.
  ###
  server.listen port, () -> debug 'Express server listening on port ' + server.address().port
  server.on 'error', onError
  server.on 'listening', onListening

###
 * Listen on provided port, on all network interfaces.
###
server.listen port
server.on 'error', onError
server.on 'listening', onListening
