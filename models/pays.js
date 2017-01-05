"use strict";

module.exports = function(sequelize, DataTypes) {
    var Pays = sequelize.define("Pays", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: DataTypes.STRING,
        libelle: DataTypes.STRING
    });

    return Pays;
};
