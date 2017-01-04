
var fs = require("fs");
var sqlite3 = require('sqlite3').verbose();
var util = require('./util');

module.exports.getAll = function(tabName, handler) {
    util.notStringException(tabName, "Module sqlite => tabName must be a string value.");
    if (fs.existsSync(dataSource)) {
        var db = new sqlite3.Database(dataSource);
        db.all("SELECT * FROM " + tabName, function(err, rows) {
            if (typeof handler === 'function') {
                handler(err, rows);
            }
        });
        db.close();
    } else {
        throw new Error("Module sqlite => dataSource doesn't exist.");
    }
}

module.exports.getById = function(tabName, id, handler) {
    util.notStringException(tabName, "Module sqlite => tabName must be a string value.");
    util.notNumberException(id, "Module sqlite => id must be a number value.");
    if (fs.existsSync(dataSource)) {
        var db = new sqlite3.Database(dataSource);
        db.get("SELECT * FROM " + tabName + " WHERE id = ?", [id], function(err, row) {
            if (typeof handler === 'function') {
                handler(err, row);
            }
        });
        db.close();
    } else {
        throw new Error("Module sqlite => dataSource doesn't exist.");
    }
}

module.exports.search = function(tabName, colonnes, values, handler) {
    util.notStringException(tabName, "Module sqlite => tabName must be a string value.");
    util.notArrayException(colonnes, "Module sqlite => colonnes must be an array value.");
    util.notArrayException(value, "Module sqlite => values must be an array value.");

    var queryStart = "SELECT * FROM " + tabName + " WHERE ";
    var queryClause = "";

    colonnes.forEach(function(colonne) {
        queryClause += colonne + " = ? AND ";
    });
    var index = queryColonnes.lastIndexOf("AND");
    if (index > 0) {
        queryClause = queryClause.slice(0, index);
    }

    var query = queryStart + queryClause;

    module.exports.run(query, values, function(err, rows) {
        if (util.isFunction(handler)) {
            handler(err, rows);
        }
    });
}

module.exports.insert = function(tabName, colonnes, value, handler) {
    util.notStringException(tabName, "Module sqlite => tabName must be a string value.");
    util.notArrayException(colonnes, "Module sqlite => colonnes must be an array value.");
    util.notObjectException(value, "Module sqlite => values must be an object value.");

    var queryStart = "INSERT INTO " + tabName + " ";
    var queryColonnes = "(";
    var queryMiddle = " VALUES ";
    var queryValues = "(";
    var params = [];

    colonnes.forEach(function(colonne) {
        queryColonnes += colonne + ", ";
        queryValues += "?, ";
        params.push(value[colonne]);
    });

    var indexColonnes = queryColonnes.lastIndexOf(',');
    var indexValues = queryValues.lastIndexOf(',');

    if (indexColonnes > 0) {
        queryColonnes = queryColonnes.slice(0, indexColonnes);
    }
    queryColonnes += ") ";

    if (indexValues > 0) {
        queryValues = queryValues.slice(0, indexValues);
    }
    queryValues += ") ";

    var query = queryStart + queryColonnes + queryMiddle + queryValues;

    module.exports.run(query, params, function(err, row, e) {
        value["id"] = e.lastID;
        if (util.isFunction(handler)) {
            handler(err, value);
        }
    });
}

module.exports.update = function(tabName, colonnes, value, handler) {
    util.notStringException(tabName, "Module sqlite => tabName must be a string value.");
    util.notArrayException(colonnes, "Module sqlite => colonnes must be an array value.");
    util.notObjectException(value, "Module sqlite => values must be an object value.");
    util.nullOrUndefinedException(value['id'], "Module sqlite => values must be an object value.");

    var queryStart = "UPDATE " + tabName + " SET ";
    var queryColonnes = "";
    var queryEnd = " WHERE id = ?";
    var params = [];

    colonnes.forEach(function(colonne) {
        queryColonnes += colonne + " = ?, ";
        params.push(value[colonne]);
    });

    var indexColonnes = queryColonnes.lastIndexOf(',');
    if (indexColonnes > 0) {
        queryColonnes = queryColonnes.slice(0, indexColonnes);
    }
    queryColonnes += " ";

    var query = queryStart + queryColonnes + queryEnd;
    params.push(value['id']);

    module.exports.run(query, params, function(err) {
        if (util.isFunction(handler)) {
            handler(err, value);
        }
    });
}

module.exports.removeById = function(tabName, ids, handler) {
    if (ids === null || ids === undefined) {
        throw new Error("Module sqlite => ids can't be null or undefined value.");
    }
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    var listError = null;
    if (fs.existsSync(dataSource)) {
        var db = new sqlite3.Database(dataSource);
        db.serialize(function() {
            var stmt = db.prepare("DELETE FROM " + tabName + " WHERE id = ?");
            for (var i = 0; i < ids.length; i++) {
                stmt.run(ids[i], function(err, row) {
                    if (err !== null || err !== undefined) {
                        if (listError === null) {
                            listError = [];
                        }
                        listError.push(err);
                    }
                });
            }
            stmt.finalize();
            handler((listError !== null)?listError.toString():null, ids);
        });
    } else {
        throw new Error("Module sqlite => dataSource doesn't exist.");
    }
}

module.exports.run = function(query, params, handler) {
    util.notStringException(query, "Module sqlite => query must be a string value.");
    var expr = (util.isNotNullOrUndefined(params) && util.isNotArray(params));
    util.argumentException(expr, "Module sqlite => bad type params.");
    if (fs.existsSync(dataSource)) {
        var db = new sqlite3.Database(dataSource);
        db.run(query, params, function(err, rows) {
            if (typeof handler === 'function') {
                handler(err, rows, this);
            }
        });
        db.close();
    } else {
        throw new Error("Module sqlite => dataSource doesn't exist.");
    }
}

module.exports.all = function(query, handler) {
    util.notStringException(query, "Module sqlite => query must be a string value.");
    if (fs.existsSync(dataSource)) {
        var db = new sqlite3.Database(dataSource);
        db.all(query, function(err, rows) {
            if (typeof handler === 'function') {
                handler(err, rows);
            }
        });
        db.close();
    } else {
        throw new Error("Module sqlite => dataSource doesn't exist.");
    }
}
