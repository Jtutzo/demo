
var fs = require("fs");
var sqlite3 = require('sqlite3').verbose();

var file = __dirname + "\\..\\dbb\\dbb_base.sqlite"

var exists = fs.existsSync(file);

module.exports.getAll = function(callback) {
    if (exists) {
        var db = new sqlite3.Database(file);
        db.all("SELECT user.* FROM user", function(err, rows) {
            if (typeof callback === 'function') {
                callback(err, rows);
            }
        });
        db.close();
    } else {
        throw new Error("file dbb doesn't exist.");
    }
}

module.exports.getById = function(id, callback) {
    if (exists) {
        var db = new sqlite3.Database(file);
        db.get("SELECT user.* FROM user WHERE user.id = ?", [user["id"]], function(err, row) {
            if (typeof callback === 'function') {
                callback(err, row);
            }
        });
        db.close();
    } else {
        throw new Error("file dbb doesn't exist.");
    }
}

module.exports.save = function(user, callback) {
    if (typeof user !== 'object' || user === null) {
        throw new Error("user should be an object value.");
    }
    if (user['id'] === null || user['id'] === undefined) {
        module.exports.insert(user, callback);
    } else {
        module.exports.update(user, callback);
    }
}

module.exports.insert = function(user, callback) {
    if (typeof user !== 'object' || user === null) {
        throw new Error("user should be an object value.");
    }
    if (exists) {
        var db = new sqlite3.Database(file);
        db.run("INSERT INTO user (nom, prenom) VALUES (?, ?)", [user["nom"], user["prenom"]], function(err) {
            user["id"] = this.lastID;
            if (typeof callback === 'function') {
                callback(err, user);
            }
        });
        db.close();
    } else {
        throw new Error("file dbb doesn't exist.");
    }
}

module.exports.update = function(user, callback) {
    if (typeof user !== 'object' || user === null) {
        throw new Error("user should be an object value.");
    }
    if (exists) {
        var db = new sqlite3.Database(file);
        db.run("UPDATE user SET nom = ?, prenom = ? WHERE user.id = ?", [user["nom"], user["prenom"], user["id"]], function(err, row) {
            if (typeof callback === 'function') {
                callback(err, user);
            }
        });
        db.close();
    } else {
        throw new Error("file dbb doesn't exist.");
    }
}

module.exports.remove = function(idUsers, callback) {
    if (idUsers === null || idUsers === undefined) {
        throw new Error("idUsers can't be null or undefined value.");
    }
    if (!Array.isArray(idUsers)) {
        idUsers = [idUsers];
    }
    var listError = null;
    if (exists) {
        var db = new sqlite3.Database(file);
        db.serialize(function() {
            var stmt = db.prepare("DELETE FROM user WHERE user.id = ?");
            for (var i = 0; i < idUsers.length; i++) {
                stmt.run(idUsers[i], function(err, row) {
                    if (err !== null || err !== undefined) {
                        if (listError === null) {
                            listError = [];
                        }
                        listError.push(err);
                    }
                });
            }
            stmt.finalize();
            callback((listError !== null)?listError.toString():null, idUsers);
        })
    } else {
        throw new Error("file dbb doesn't exist.");
    }

}
