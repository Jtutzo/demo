/**
* componentUtil
* @auteur: JTutzo
* @version 2.0
* @description: Cet objet est une surcouche ko.components.
*
* méthodes:
*
* - addStructModel(componentName, structModel)      => Associe un tableau de structure de model à un composant
* -
*/

var componentUtil = (function() {

    var _private = {

        components: {},

        /**
        * Associe un tableau de structure de model à un composant
        * @param componentName nom du composant
        * @param structParams tableau contenant des objets de type structParam
        */
        addStructModel: function(componentName, structModel) {
            if (!Array.isArray(structModel)) {
                throw "structParams must be an array value";
            }
            if (typeof componentName !== 'string' || componentName.trim() == 0) {
                throw "component must be an not empty string value";
            }
            for (var i =0; i < structModel.length; i++) {
                if (typeof structModel[i] !== 'object' || structModel[i] === null || typeof structModel[i]['name'] !== 'string' || structModel[i]['name'].trim() == 0) {
                    throw "Bad structModel";
                }
            }
            _private.components[componentName] = structModel;
        },

        /**
        * Init les params d'un component
        * @param componentName nom du composant
        * @param self this du composant
        * @param params du composant
        */
        init: function(componentName, self, params) {
            //Check componentName param
            if (typeof componentName !== 'string') {
                throw "componentName must be string value.";
            }

            //Check self param
            if (self === null || self === undefined) {
                throw "\"" + componentName + "\" => self mustn't be null or undefined.";
            }

            var structModels = _private.components[componentName];
            if (structModels === null || structModels === undefined) {
                console.warn("\"" + componentName + "\" hasn't params associated.");
            }

            //Construit les params
            for (var i = 0; i < structModels.length; i++) {
                var structModel = structModels[i];
                var name = structModel['name'];
                var isRequired = structModel['required'];
                var type = structModel['type'];
                if (typeof params === 'object' && params !== null && params[name] !== null && params[name] !== undefined) {
                    if (!type === 'NA' && !type === 'undefined' && typeof value !== type && (structModel['mustBeObs'] === false || typeof value !== 'function')) {
                        throw "params isn't \"" + type + "\" value";
                    }
                    if (structModel['mustBeObs'] === true && !ko.isObservable(params[name])) {
                        self[name] = ko.observable(params[name]);
                    } else {
                        self[name] = (typeof structModel['base'] === 'string')?structModel['base'] + " " + params[name]:params[name];
                    }
                } else {
                    if (isRequired) {
                        throw "\"" + componentName + "\" => param : \"" + name + "\" is required.";
                    }
                    if (structModel['mustBeObs'] === true) {
                        self[name] = ko.observable(structModel['default']);
                    } else {
                        self[name] = (typeof structModel['base'] === 'string')?structModel['base'] + " " + structModel['default']:structModel['default'];
                    }
                }
            }
        },

        /**
        * Enregistre un nouveau component
        * @param componentName nom du composant
        * @param componentDef def du composant
        */
        register: function(componentName, componentDef) {
            //Check componentName param
            if (typeof componentName !== 'string') {
                throw "componentName must be string value.";
            }

            //Check componentName param
            if (typeof componentDef !== 'object' || componentDef === null ) {
                throw "componentDef must be an object value.";
            }

            var structModel = componentDef['structModel'];
            _private.addStructModel(componentName, componentDef['structModel']);

            ko.components.register(componentName, {
                viewModel: function(params) {
                    var self = this;
                    _private.init(componentName, self, params);
                    if (typeof componentDef['viewModel'] === 'function') {
                        componentDef['viewModel'](self, params);
                    }
                },
                template: componentDef['template']
            });
        }
    }

    var _public = {
        addStructModel: _private.addStructParams,
        init: _private.init,
        register: _private.register
    }

    return _public;

})();
