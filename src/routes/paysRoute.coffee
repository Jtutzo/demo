express = require 'express'
router = express.Router()
paysService = require './../services/paysService'
util = require('common').Util()
expressUtil = require('common').ExpressUtil()

###
# Retourne tous les pays
# @return list of pays
###
router.post '/get-all', (req, res, next) ->
    try
        paysService.getAll (err, pays) -> if !err? then expressUtil.sendObject req, res, pays else expressUtil.sendError req, res, err
    catch e then expressUtil.sendError req, res, e

###
# Retourne le pays correspondant au code
# @param code
# @return pays
###
router.post '/get-by-code', (req, res, next) ->
    try
        code = expressUtil.extractParam req, 'code', {type: util.STRING, required: true}
        paysService.getByCode code, (err, pays) -> if !err? then expressUtil.sendObject req, res, pays else expressUtil.sendError req, res, err
    catch e then expressUtil.sendError req, res, e

module.exports = router
