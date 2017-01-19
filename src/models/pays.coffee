"use strict";

module.exports = (sequelize, DataTypes) ->
    Pays = sequelize.define "Pays", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: DataTypes.STRING,
        libelle: DataTypes.STRING
    }
