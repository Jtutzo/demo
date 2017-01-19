express = require 'express'
router = express.Router();
userService = require './../services/userService'
util = require('common').Util()
expressUtil = require('common').ExpressUtil()

###
# Retourne l'index
###
router.get '/', (req, res, next) ->
    try
      res.render "user/index.ejs", { title: 'Demo Users' }
    catch e then expressUtil.sendError req, res, e

###
# Retourne tous les utilisateurs
###
router.post '/get-all', (req, res, next) ->
    try
      userService.getAll (err, users) -> if !err? then expressUtil.sendObject req, res, users else expressUtil.sendError req, res, err
    catch e then expressUtil.sendError req, res, e

###
# Enregistre un utilisateur
# @param user (required)
# @return user saved
###
router.post '/save', (req, res, next) ->
    try
      user = expressUtil.extractParam req, 'user', {type: util.OBJECT, required: true}
      userService.save user, (err, userSaved) -> if !err? then expressUtil.sendObject req, res, userSaved else expressUtil.sendError req, res, err
    catch e then expressUtil.sendError req, res, e

###
# Supprimes des utilisateurs
###
router.post "/remove", (req, res, next) ->
    try
      idUsers = expressUtil.extractParam req, 'idUsers', {type: util.ARRAY, required: true}
      userService.remove idUsers, (err, idUsers) -> if !err? then expressUtil.sendObject req, res, idUsers else expressUtil.sendError req, res, err
    catch e then expressUtil.sendError req, res, e

module.exports = router
