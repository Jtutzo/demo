var express = require('express');
var router = express.Router();
var referentielPays = require('./../services/referentielPays');
var util = require('./../modules/util');
var responseUtil = require('./../modules/responseUtil');
var requestUtil = require('./../modules/requestUtil');

/**
* Retourne tous les utilisateurs
*/
router.post('/get-all', function(req, res, next) {
    try {
        referentielPays.getAll(function(err, pays) {
            if (err === undefined || err === null) {
                responseUtil.sendObject(req, res, pays);
            } else {
                responseUtil.sendError(req, res, err);
            }
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

router.post('/get-by-code', function(req, res, next) {
    try {
        var params = requestUtil.getParams(req, [{name: 'code', type: util.STRING, required: false}]);
        referentielPays.getByCode(params['code'], function(err, pays) {
            if (err === undefined || err === null) {
                responseUtil.sendObject(req, res, pays);
            } else {
                responseUtil.sendError(req, res, err);
            }
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

module.exports = router;
