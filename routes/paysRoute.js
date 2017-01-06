var express = require('express');
var router = express.Router();
var paysService = require('./../services/paysService');
var util = require('./../modules/util');
var responseUtil = require('./../modules/responseUtil');
var requestUtil = require('./../modules/requestUtil');

/**
* Retourne tous les pays
* @return list of pays
*/
router.post('/get-all', function(req, res, next) {
    try {
        paysService.getAll(function(err, pays) {
            if (util.isNullOrUndefined(err)) {
                responseUtil.sendObject(req, res, pays);
            } else {
                responseUtil.sendError(req, res, err);
            }
        });
    } catch (e) {
        responseUtil.sendError(req, res, e);
    }
});

/**
* Retourne le pays correspondant au code
* @return pays
*/
router.post('/get-by-code', function(req, res, next) {
    try {
        var code = requestUtil.getParam(req, 'code', {type: util.STRING, required: true});
        paysService.getByCode(code, function(err, pays) {
            if (util.isNullOrUndefined(err)) {
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
