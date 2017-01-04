var sqlite = require('./../modules/sqlite');
var util = require('./../modules/util');

module.exports.tabName = 'user';
module.exports.colonnes = ['nom', 'prenom', 'idPays'];
module.exports.columnList = "user.id user_Id, user.nom user_Nom, user.prenom user_Prenom, user.idPays user_IdPays";

var columnListPays = require("./paysDao").columnList;
var tabNamePays = require("./paysDao").tabName;

/**
* Récupère tous les utilisateurs
* @param handler
*/
module.exports.getAll = function(handler) {
    sqlite.getAll(module.export.tabName, function(err, rows) {
        if (util.isFunction(handler)) handler(err, rows);
    });
}

/**
* Récupère tous les utilisateurs avec le pays associé
* @param handler
*/
module.exports.getAllWithPays = function(handler) {
    var query = "SELECT " + module.exports.columnList + ", " + columnListPays + " ";
    query += "FROM " + module.exports.tabName + " ";
    query += "LEFT JOIN " + tabNamePays + " ON " + tabNamePays + ".id = " + module.exports.tabName + ".idPays";
    sqlite.all(query, function(err, rows) {
        var users = [];
        if (util.isArray(rows)) {
            rows.forEach(function(row) {
                var user = factoryUser(row);
                users.push(user);
            });
        }
        if (util.isFunction(handler)) handler(err, users);
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
    sqlite.getById(module.exports.tabName, idNum, function(err, row) {
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
    sqlite.insert(module.exports.tabName, module.exports.colonnes, user, function(err, result) {
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
    sqlite.update(module.exports.tabName, module.exports.colonnes, user, function(err, result) {
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
    sqlite.removeById(module.exports.tabName, idUsers, function(err, row) {
        if (util.isFunction(handler)) handler(err, row);
    });
}

function factoryUser(row) {
    var user = {};
    var pays = {};
    user['id'] = row['user_Id'];
    user['nom'] = row['user_Nom'];
    user['prenom'] = row['user_Prenom'];
    user['idPays'] = row['user_IdPays'];
    if (util.isNotNullOrUndefined(row['referentielPays_Id'])) {
        pays['id'] = row['referentielPays_Id'];
        pays['code'] = row['referentielPays_Code'];
        pays['libelle'] = row['referentielPays_Libelle'];
        user['pays'] = pays;
    }
    return user;
}
