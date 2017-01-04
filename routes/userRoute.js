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
        userService.getAll(function(err, users) {
            if (err === undefined || err === null) {
                responseUtil.sendObject(req, res, users);
            } else {
                responseUtil.sendError(req, res, err);
            }
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

/**
* Enregistre un utilisateur
*/
router.post('/save', function(req, res, next) {
    try {
        var params = requestUtil.getParams(req, [{name: 'user', type: util.OBJECT, required: true}]);
        userService.save(params['user'], function(err, user) {
            if (err === undefined || err === null) {
                responseUtil.sendObject(req, res, user);
            } else {
                responseUtil.sendError(req, res, err);
            }
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
        var params = requestUtil.getParams(req, [{name: 'idUsers', type: util.ARRAY, required: true}]);
        userService.remove(params['idUsers'], function(err, idUsers) {
            if (err === undefined || err === null) {
                responseUtil.sendObject(req, res, idUsers);
            } else {
                responseUtil.sendError(req, res, err);
            }
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

module.exports = router;
