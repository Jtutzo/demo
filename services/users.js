
var dao = require('./../modules/dao');
var util = require('./../modules/util');

var tabName = 'user';
var colonnes = ['nom', 'prenom'];

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

module.exports.insert = function(user, handler) {
    util.isNotObject(user, "Service user => user must be an object value.");
    dao.insert(tabName, colonnes, user, function(err, result) {
        if (util.isFunction(handler)) {
            handler(err, result);
        }
    })
}

module.exports.update = function(user, callback) {
    util.isNotObject(user, "Service user => user must be an object value.");
    dao.update(tabName, colonnes, user, function(err, result) {
        if (util.isFunction(handler)) {
            handler(err, result);
        }
    });
}

module.exports.remove = function(idUsers, handler) {
    util.notArrayException(idUsers, "Service user => idUsers must be an array value.");
    dao.removeById(tabName, idUsers, function(err, row) {
        if (util.isFunction(handler)) {
            handler(err, row);
        }
    });
}
