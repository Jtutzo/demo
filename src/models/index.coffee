"use strict";

fs = require "fs"
path = require "path"
Sequelize = require "sequelize"
env = process.env.NODE_ENV || "development"
config = require(path.join __dirname, '..', 'config.json')[env]

config['define'] = {freezeTableName: true, timestamps: false}

if process.env.DATABASE_URL then sequelize = new Sequelize process.env.DATABASE_URL, config
else sequelize = new Sequelize config.database, config.username, config.password, config

db = {};

fs.readdirSync __dirname
  .filter (file) -> (file.indexOf(".") isnt 0 && file isnt "index.js")
  .forEach (file) -> model = sequelize.import path.join __dirname, file;db[model.name] = model;

Object.keys(db).forEach (modelName) -> db[modelName].associate?(db)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
