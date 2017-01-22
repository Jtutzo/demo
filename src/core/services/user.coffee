models  = require '../models'
util = require('common').util

###
# Récupère tous les utilisateurs
# @param handler
###
module.exports.getAll = (handler) ->
    models.User.findAll {include: [{model: models.Pays, as: 'pays'}]}
    .then (users) -> handler?(null, users)
    .catch (err) -> handler?(err, null)

###
# Récupère l'utilisateur associé à l'id
# @param id
# @param handler
###
module.exports.getById = (id, handler) ->
     util.nullOrUndefinedException id, "userService => id mustn't be null or undefined."
     idNum = JSON.parse id
     util.notNumberException idNum, "userService => id must be a number value"
     models.User.findById idNum, {include: [{model: models.Pays, as: 'pays'}]}
     .then (user) -> handler?(null, user)
     .catch (err) -> handler?(err, null)

###
# Sauvegarde un utilisateur
# @param user
# @param handler
###
module.exports.save = (user, handler) ->
    util.notObjectException user, "userService => user must be an object value"
    save = if util.isNullOrUndefined user['id'] then module.exports.create else module.exports.update
    save user, handler

###
# Crée un utilisateur
# @param user
# @param handler
###
module.exports.create = (user, handler) ->
    util.notObjectException user, "userService => user must be an object value"
    models.User.create {nom: user['nom'], prenom: user['prenom'], date: user['date'], idPays: user['idPays']}
    .then (resp) -> user['id'] = resp.id;handler?(null, user)
    .catch (err) -> handler?(err, null)

###
# Modifie un utilisateur
# @param user
# @param handler
###
module.exports.update = (user, handler) ->
    util.notObjectException user, "userService => user must be an object value"
    idNum = JSON.parse user['id']
    util.notNumberException idNum, "userService => id must be a number value"
    models.User.update {nom: user['nom'], prenom: user['prenom'], date: user['date'], idPays: user['idPays']}, {where: { id: idNum }}
    .then () -> handler?(null, user)
    .catch (err) -> handler?(err, null)

###
# Supprime des utilisateurs
# @param idUsers
# @param handler
###
module.exports.remove = (idUsers, handler) ->
    idUsers = if util.isArray idUsers then idUsers else [idUsers]
    models.User.destroy {where: { id: {$in: idUsers} }}
    .then () -> handler?(null, idUsers)
    .catch (err) -> handler?(err, null)
