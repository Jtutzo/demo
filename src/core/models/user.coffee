"use strict";

module.exports = (sequelize, DataTypes) ->
    User = sequelize.define "User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        date: DataTypes.DATE
    }, {
        classMethods: {
            associate: (models) -> User.belongsTo models.Pays, {foreignKey: 'idPays', as: 'pays' }
        }
    }
