
var util = require('./util');

module.exports.getParams = function(req, stereotypeParams) {

    util.notObjectException(req, "requestUtil => req must be an object value");

    var params = extractParams(req);
    checkParams(params, stereotypeParams);

    return params;
}

/**
* Extrait les paramètres de la requête
* @param req
* @return params
*/
function extractParams(req) {

    var params = req.body;
    var retour = {};

    //Get and convert params
    if (util.isObject(params)) {
        Object.keys(params).forEach(function(key) {
            var value = params[key];
            var newValue = null;
            if (util.isNotNull(value)) {
                newValue = JSON.parse(params[key]);
            }
            retour[key] = newValue;
        });
    }

    return retour;
}

/**
* Vérifie que les arguments sont conforme aux stéréotypes
* @param params
* @param stereotypeParams
*/
function checkParams(params, stereotypeParams) {
    //Check params
    if (util.isArray(stereotypeParams)) {
        stereotypeParams.forEach(function(el) {
            var key = el['name'];
            var type = el['type'];
            var required = el['required'];
            var typeParam = util.getType(params[key]);
            if ((required == true && typeParam !== type)
                || (required == false && (typeParam !== util.UNDEFINED || typeParam !== util.NULL) && typeParam !== type)) {
                    throw new Error("module requestUtil => params : " + key + " bad type");
            }
        });
    }
}
