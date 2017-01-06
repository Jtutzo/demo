var models  = require('../models');
var util = require('../modules/util');

/**
* Récupère tous les pays
* @param handler
*/
module.exports.getAll = function(handler) {
    models.Pays.findAll().then(function(pays) {
        if (util.isFunction(handler)) handler(null, pays);
    }).catch(function (err) {
        if (util.isFunction(handler)) handler(err, null);
    });
}

/**
* Récupère le pays associé à l'id
* @param id
* @param handler
*/
module.exports.getById = function(id, handler) {
    util.nullOrUndefinedException(id, "paysService => id mustn't be null or undefined.");
    var idNum = JSON.parse(id);
    util.notNumberException(idNum, "paysService => id must be a number value");
    models.User.findById(idNum).then(function(pays) {
        if (util.isFunction(handler)) handler(null, pays);
    }).catch(function (err) {
        if (util.isFunction(handler)) handler(err, null);
    });
}

/**
* Récupère le pays associé au code
* @param code
* @param handler
*/
module.exports.getByCode = function(code, handler) {
    util.notStringException(code, "paysService => code must be a string value");
    models.Pays.findAll({
        where: {'code': code}
    }).then(function(pays) {
        if (util.isFunction(handler)) handler(null, pays);
    }).catch(function (err) {
        if (util.isFunction(handler)) handler(err, null);
    });
}
