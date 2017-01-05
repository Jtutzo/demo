var models  = require('../models');
var util = require('../modules/util');

/**
* Récupère tous les utilisateurs
* @param handler
*/
module.exports.getAll = function(handler) {
    models.User.findAll({
        include: [{model: models.Pays, as: 'pays'}]
    }).then(function(users) {
        if (util.isFunction(handler)) handler(users);
    });
}

/**
* Récupère l'utilisateur associé à l'id
* @param id
* @param handler
*/
module.exports.getById = function(id, handler) {
    util.nullOrUndefinedException(id, "userService => id mustn't be null or undefined.");
    var idNum = JSON.parse(id);
    util.notNumberException(idNum, "userService => id must be a number value");
    models.User.findById(idNum, {
        include: [{model: models.Pays, as: 'pays'}]
    }).then(function(user) {
        if (util.isFunction(handler)) handler(user);
    });
}

/**
* Sauvegarde un utilisateur
* @param user
* @param handler
*/
module.exports.save = function(user, handler) {
    util.notObjectException(user, "userService => user must be an object value");
    if (util.isNullOrUndefined(user['id'])) {
        module.exports.create(user, handler);
    } else {
        module.exports.update(user, handler);
    }
}

/**
* Crée un utilisateur
* @param user
* @param handler
*/
module.exports.create = function(user, handler) {
    util.notObjectException(user, "userService => user must be an object value");
    models.User.create({
        nom: user['nom'],
        prenom: user['prenom'],
        date: user['date'],
        idPays: user['idPays']
    }).then(function(resp) {
        var id = resp.id;
        user['id'] = id;
        if (util.isFunction(handler)) handler(user);
    });
}

/**
* Modifie un utilisateur
* @param user
* @param handler
*/
module.exports.update = function(user, handler) {
    util.notObjectException(user, "userService => user must be an object value");
    var idNum = JSON.parse(user['id']);
    util.notNumberException(idNum, "userService => id must be a number value");
    models.User.update({
        nom: user['nom'],
        prenom: user['prenom'],
        date: user['date'],
        idPays: user['idPays']
    }, {
        where: { id: idNum }
    }).then(function() {
        if (util.isFunction(handler)) handler(user);
    });
}

/**
* Supprime des utilisateurs
* @param idUsers
* @param handler
*/
module.exports.remove = function(idUsers, handler) {
    var idUsers = (util.isArray(idUsers))?idUsers:[idUsers];
    idUsers.forEach(function(id, index) {
        var idNum = JSON.parse(id);
        util.notNumberException(idNum, "userService => id must be a number value");
        models.User.destroy({
            where: { id: idNum }
        }).then(function() {
            if (util.isFunction(handler) && (index === idUsers.length - 1)) handler(idUsers);
        });
    });
}
