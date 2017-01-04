var sqlite = require('./../modules/sqlite');
var util = require('./../modules/util');

var tabName = 'referentielPays';
var colonnes = ['code', 'libelle'];

/**
* Récupère tous les pays
* @param handler
*/
module.exports.getAll = function(handler) {
    sqlite.getAll(tabName, function(err, rows) {
        if (util.isFunction(handler)) {
            handler(err, rows);
        }
    });
}

/**
* Récupère le pays correspond à l'id
* @param id
* @param handler
*/
module.exports.getById = function(id, handler) {
    util.nullOrUndefinedException(id, "Pays dao => id mustn't be null or undefined.");
    var idNum = JSON.parse(id);
    util.notNumberException(idNum, "Pays dao => id must be a number value");
    sqlite.getById(tabName, idNum, function(err, row) {
        if (util.isFunction(handler)) {
            handler(err, row);
        }
    });
}

/**
* Récupère le pays correspond au code
* @param code
* @param handler
*/
module.exports.getByCode = function(code, handler) {
    if (util.isBlank(code)) {
        code = "";
    }
    sqlite.search(tabName, colonnes[0], code, function(err, rows) {
        if (util.isFunction(handler)) {
            handler(err, rows);
        }
    });
}
