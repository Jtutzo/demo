express = require 'express'
router = express.Router();
userService = require '../core/services/user'
util = require('common').util
expressUtil = require('common').expressUtil

###
# Retourne l'index
###
router.get '/', (req, res, next) ->
    try
      res.render "user/index.ejs", { title: 'Demo Users', pathStatic: 'user' }
    catch e then expressUtil.sendError req, res, e

###
# Retourne tous les utilisateurs
###
router.post '/get-all', (req, res, next) ->
    try
      userService.getAll (err, users) -> if !err? then expressUtil.sendData res, users else expressUtil.sendError res, err
    catch e then expressUtil.sendError res, e

###
# Enregistre un utilisateur
# @param user (required)
# @return user saved
###
router.post '/save', (req, res, next) ->
    try
      user = expressUtil.extractParam req, 'user', {type: util.OBJECT, required: true}
      userService.save user, (err, userSaved) -> if !err? then expressUtil.sendData res, userSaved else expressUtil.sendError res, err
    catch e then expressUtil.sendError res, e

###
# Supprimes des utilisateurs
###
router.post "/remove", (req, res, next) ->
    try
      idUsers = expressUtil.extractParam req, 'idUsers', {type: util.ARRAY, required: true}
      userService.remove idUsers, (err, idUsers) -> if !err? then expressUtil.sendData res, idUsers else expressUtil.sendError res, err
    catch e then expressUtil.sendError res, e

module.exports = router
