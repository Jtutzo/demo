var sqlite = require('./../modules/sqlite');
var util = require('./../modules/util');

var tabName = 'user';
var colonnes = ['nom', 'prenom'];

/**
* Récupère tous les utilisateurs
* @param handler
*/
module.exports.getAll = function(handler) {
    sqlite.getAll(tabName, function(err, rows) {
        if (util.isFunction(handler)) handler(err, rows);
    });
}

/**
* Récupère l'utilisateur associé à l'id
* @param id
* @param handler
*/
module.exports.getById = function(id, handler) {
    util.nullOrUndefinedException(id, "Service user => id mustn't be null or undefined.");
    var idNum = JSON.parse(id);
    util.notNumberException(idNum, "Service user => id must be a number value");
    sqlite.getById(tabName, idNum, function(err, row) {
        if (util.isFunction(handler)) handler(err, row);
    });
}

/**
* Sauvegarde un utilisateur
* @param user
* @param handler
*/
module.exports.save = function(user, handler) {
    if (typeof user !== 'object' || user === null) {
        throw new Error("user should be an object value.");
    }
    if (user['id'] === null || user['id'] === undefined) {
        module.exports.insert(user, handler);
    } else {
        module.exports.update(user, handler);
    }
}

/**
* Crée un nouveau utilisateur
* @param user
* @param handler
*/
module.exports.insert = function(user, handler) {
    util.isNotObject(user, "Service user => user must be an object value.");
    sqlite.insert(tabName, colonnes, user, function(err, result) {
        if (util.isFunction(handler)) handler(err, result);
    })
}

/**
* Modifie un utilisateur
* @param user
* @param handler
*/
module.exports.update = function(user, handler) {
    util.isNotObject(user, "Service user => user must be an object value.");
    sqlite.update(tabName, colonnes, user, function(err, result) {
        if (util.isFunction(handler)) handler(err, result);
    });
}

/**
* Supprime des utilisateurs
* @param idUsers
* @param handler
*/
module.exports.remove = function(idUsers, handler) {
    util.notArrayException(idUsers, "Service user => idUsers must be an array value.");
    sqlite.removeById(tabName, idUsers, function(err, row) {
        if (util.isFunction(handler)) handler(err, row);
    });
}
