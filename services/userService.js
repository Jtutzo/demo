var userDao = require('./../daos/userDao');

/**
* Récupère tous les utilisateurs
* @param handler
*/
module.exports.getAll = function(handler) {
    userDao.getAll(handler);
}

/**
* Récupère l'utilisateur associé à l'id
* @param id
* @param handler
*/
module.exports.getById = function(id, handler) {
    userDao.getById(id, handler);
}

/**
* Sauvegarde un utilisateur
* @param user
* @param handler
*/
module.exports.save = function(user, handler) {
    userDao.save(user, handler);
}

/**
* Supprime des utilisateurs
* @param idUsers
* @param handler
*/
module.exports.remove = function(idUsers, handler) {
    userDao.remove(idUsers, handler);
}
