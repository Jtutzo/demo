models  = require '../models'
util = require('common').Util()

###
# Récupère tous les pays
# @param handler
###
module.exports.getAll = (handler) ->
    models.Pays.findAll()
    .then (pays) -> handler?(null, pays)
    .catch (err) -> handler?(err, null)

###
# Récupère le pays associé à l'id
# @param id
# @param handler
###
module.exports.getById = (id, handler) ->
    util.nullOrUndefinedException id, "paysService => id mustn't be null or undefined."
    idNum = JSON.parse id
    util.notNumberException idNum, "paysService => id must be a number value"
    models.Pays.findById idNum
    .then (pays) -> handler?(null, pays)
    .catch (err) -> handler?(err, null)

###
# Récupère le pays associé au code
# @param code
# @param handler
###
module.exports.getByCode = (code, handler) ->
    util.notStringException code, "paysService => code must be a string value"
    models.Pays.findById {where: {'code': code}}
    .then (pays) -> handler?(null, pays)
    .catch (err) -> handler?(err, null)
