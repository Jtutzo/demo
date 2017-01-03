var dao = require('./../modules/dao');
var util = require('./../modules/util');

var tabName = 'referentielPays';
var colonnes = ['code', 'libelle'];

module.exports.getAll = function(handler) {
    dao.getAll(tabName, function(err, rows) {
        if (util.isFunction(handler)) {
            handler(err, rows);
        }
    });
}

module.exports.getById = function(id, handler) {
    util.nullOrUndefinedException(id, "Service user => id mustn't be null or undefined.");
    var idNum = JSON.parse(id);
    util.notNumberException(idNum, "Service user => id must be a number value");
    dao.getById(tabName, idNum, function(err, row) {
        if (util.isFunction(handler)) {
            handler(err, row);
        }
    });
}

module.exports.getByCode = function(code, handler) {
    if (util.isBlank(code)) {
        code = "";
    }
    dao.search(tabName, colonnes[0], code, function(err, rows) {
        if (util.isFunction(handler)) {
            handler(err, rows);
        }
    });
}
