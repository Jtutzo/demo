"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
            associate: function(models) {
                User.belongsTo(models.Pays, {foreignKey: 'idPays', as: 'pays' });
            }
        }
    });

    return User;
};
