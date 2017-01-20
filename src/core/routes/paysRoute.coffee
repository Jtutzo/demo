express = require 'express'
router = express.Router()
paysService = require './../services/paysService'
util = require('common').util
expressUtil = require('common').expressUtil

###
# Retourne tous les pays
# @return list of pays
###
router.post '/get-all', (req, res, next) ->
    try
        paysService.getAll (err, pays) -> if !err? then expressUtil.sendData res, pays else expressUtil.sendError res, err
    catch e then expressUtil.sendError res, e

###
# Retourne le pays correspondant au code
# @param code
# @return pays
###
router.post '/get-by-code', (req, res, next) ->
    try
        code = expressUtil.extractParam req, 'code', {type: util.STRING, required: true}
        paysService.getByCode code, (err, pays) -> if !err? then expressUtil.sendData res, pays else expressUtil.sendError res, err
    catch e then expressUtil.sendError res, e

module.exports = router
