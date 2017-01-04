var paysDao = require('./../daos/paysDao');

/**
* Récupère tous les pays
* @param handler
*/
module.exports.getAll = function(handler) {
    paysDao.getAll(handler);
}

/**
* Récupère le pays associé à l'id
* @param id
* @param handler
*/
module.exports.getById = function(id, handler) {
    paysDao.getById(id, handler);
}

/**
* Récupère le pays associé au code
* @param code
* @param handler
*/
module.exports.getByCode = function(code, handler) {
    paysDao.getByCode(code, handler);
}
