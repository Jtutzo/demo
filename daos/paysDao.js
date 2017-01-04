var sqlite = require('./../modules/sqlite');
var util = require('./../modules/util');

module.exports.tabName = 'referentielPays';
module.exports.colonnes = ['code', 'libelle'];

module.exports.columnList = "referentielPays.id referentielPays_Id, referentielPays.code referentielPays_Code, referentielPays.libelle referentielPays_Libelle"

/**
* Récupère tous les pays
* @param handler
*/
module.exports.getAll = function(handler) {
    sqlite.getAll(module.exports.tabName, function(err, rows) {
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
    sqlite.getById(module.exports.tabName, idNum, function(err, row) {
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
    sqlite.search(module.exports.tabName, module.exports.colonnes[0], code, function(err, rows) {
        if (util.isFunction(handler)) {
            handler(err, rows);
        }
    });
}
