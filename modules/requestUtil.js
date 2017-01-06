
var util = require('./util');

/**
* Vérifie et extrait les paramêtres de la requête
* @param req
* @param stereotypeParams
* @return params
*/
module.exports.getParams = function(req, stereotypeParams) {

    util.notObjectException(req, "requestUtil => req must be an object value");

    var params = extractParams(req);
    checkParams(params, stereotypeParams);

    return params;
}

/**
* Vérifie et extrait le paramêtres correspondant au nom
* @param req
* @param name
* @param option: {type: string, required: boolean}
* @return params
*/
module.exports.getParam = function(req, name, option) {

    util.notObjectException(req, "requestUtil => req must be an object value");

    var param = (util.isObject(req.body))?req.body[name]:null;

    if (util.isNotNullOrUndefined(param)) {
        param = JSON.parse(param);
    }

    if (util.isObject(option)) {

        var typeParam = util.getType(param);
        var required = option['required'];
        if (required && (typeParam === util.UNDEFINED || typeParam === util.NULL)) {
            throw new Error("module requestUtil => params : " + name + " is required.");
        }

        var type = option['type'];
        if (util.isString(type) && util.isNotEmpty(type) && typeParam !== type
            && ((!required && typeParam !== util.UNDEFINED && typeParam !== util.NULL) || required)) {
            throw new Error("module requestUtil => params : " + name + " bad type");
        }

    }

    return param;
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
