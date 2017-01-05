var express = require('express');
var router = express.Router();
var userService = require('./../services/userService');
var util = require('./../modules/util');
var responseUtil = require('./../modules/responseUtil');
var requestUtil = require('./../modules/requestUtil');


/**
* Retourne l'index
*/
router.get('/', function(req, res, next) {
    try {
        res.render("user/index.ejs", { title: 'Demo Users' });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

/**
* Retourne tous les utilisateurs
*/
router.post('/get-all', function(req, res, next) {
    try {
        userService.getAll(function(users) {
            responseUtil.sendObject(req, res, users);
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

/**
* Enregistre un utilisateur
* @param user (required)
* @return user saved
*/
router.post('/save', function(req, res, next) {
    try {
        var user = requestUtil.getParam(req, 'user', {type: util.OBJECT, required: true});
        userService.save(user, function(userSaved) {
            responseUtil.sendObject(req, res, userSaved);
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

/**
* Supprimes des utilisateurs
*/
router.post("/remove", function(req, res, next) {
    try {
        var idUsers = requestUtil.getParam(req, 'idUsers', {type: util.ARRAY, required: true});
        userService.remove(idUsers, function(idUsers) {
            responseUtil.sendObject(req, res, idUsers);
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

module.exports = router;
