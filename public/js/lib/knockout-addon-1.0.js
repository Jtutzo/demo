/**
* Addon pour knockoutjs
* @autor: JTutzo
* @version 2.0
*/

/**=============================================================================
*                               binding
*===============================================================================*/
/**
* Binding modal
*/
ko.bindingHandlers.modal = {
    init: function (element, valueAccessor) {
        $(element).modal({
            show: false
        });

        var value = valueAccessor();
        if (typeof value === 'function') {
            $(element).on('hide.bs.modal', function() {
               value(false);
            });
        }
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
           $(element).modal("destroy");
        });

    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        if (ko.utils.unwrapObservable(value)) {
            $(element).modal('show');
        } else {
            $(element).modal('hide');
        }
    }
};

/**
* Binding select2
*/
ko.bindingHandlers.select2 = {

    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        var dataBindingName = 'value';
        var bindingValue = ko.unwrap(valueAccessor());
        var allBindings = allBindingsAccessor();
        var ignoreChange = false;
        var dataChangeHandler = null;
        var subscription = null;
        var originalEqualityComparer = null;

        $(element).on('select2:selecting select2:unselecting', function() {
            ignoreChange = true;
        });
        $(element).on('select2:select select2:unselect', function() {
            ignoreChange = false;
        });

        initSubscriptionValue();

        if (ko.isObservable(allBindings.options)) {
            bindingValue.data = ko.utils.unwrapObservable(allBindings.options);
            allBindings.options.subscribe(function(value) {
                bindingValue.data = value;
                var selections = allBindings[dataBindingName]();
                $(element).select2('destroy');
                $(element).empty();
                $(element).select2(bindingValue);
                allBindings[dataBindingName](selections);
            });
        }

        // Provide a hook for binding to the select2 "data" property; this property is read-only in select2 so not subscribing.
        if (ko.isWriteableObservable(allBindings[dataBindingName])) {
            initDataChangeHandler();
        }

        // Apply select2
        $(element).select2(bindingValue);

        // Destroy select2 on element disposal
        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
            $(element).select2('destroy');
            if (dataChangeHandler !== null) {
                $(element).off('change', dataChangeHandler);
            }
            if (subscription !== null) {
                subscription.dispose();
            }
        });

        function triggerChangeQuietly(element, binding) {
            var isObservable = ko.isObservable(binding);
            if (isObservable) {
                originalEqualityComparer = binding.equalityComparer;
                binding.equalityComparer = function() { return true; };
            }
            $(element).trigger('change');
            if (isObservable) {
                binding.equalityComparer = originalEqualityComparer;
            }
        }

        function initSubscriptionValue() {
            if (ko.isObservable(allBindings.selectedOptions)) {
                dataBindingName = 'selectedOptions';
                subscription = allBindings.selectedOptions.subscribe(function(value) {
                    if (ignoreChange) return;
                    triggerChangeQuietly(element, this._target || this.target);
                });
            }
        }

        function initDataChangeHandler() {
            dataChangeHandler = function() {
                if (!$(element).data('select2')) return;
                subscription.dispose();
                $(element).val(allBindings[dataBindingName]());
                notExistValues();
                initSubscriptionValue();
            };
            $(element).on('change', dataChangeHandler);
        }

        function notExistValues() {
            var newVal = $(element).val();
            var lastValue = allBindings[dataBindingName]();
            if ((newVal === undefined || newVal === null || lastValue === undefined || lastValue === null)) {
                if (lastValue !== newVal) {
                    allBindings[dataBindingName].equalityComparer = originalEqualityComparer;
                    allBindings[dataBindingName](newVal);
                }
            } else if (JSON.stringify(newVal) !== JSON.stringify(lastValue)) {
                allBindings[dataBindingName].equalityComparer = originalEqualityComparer;
                allBindings[dataBindingName](newVal);
            }
        }

    }
    
};

/**=============================================================================
*                               libs
*===============================================================================*/
/**
* componentUtil
* @auteur: JTutzo
* @version 2.0
* @description: Cet objet est une surcouche ko.components.
* @dependances:
* - knockoutjs
*
* méthodes:
* - addStructModel(componentName, structModel)      => Associe un tableau de structure de model à un composant
* - init(componentName, componentDef)               => Initialise un components knockoutjs
* - register(componentName, componentDef)           => Enregistre un component
*
* Informations
* - structModel :
*
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
                        self[name] = (params['type'] === 'array')?ko.observableArray(params[name]):ko.observable(params[name]);

                    } else {
                        self[name] = (typeof structModel['base'] === 'string')?structModel['base'] + " " + params[name]:params[name];
                    }
                } else {
                    if (isRequired) {
                        throw "\"" + componentName + "\" => param : \"" + name + "\" is required.";
                    }
                    if (structModel['mustBeObs'] === true) {
                        self[name] = (params['type'] === 'array')?ko.observableArray(structModel['default']):ko.observable(structModel['default']);
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

/**
* editableUtil
* @auteur: JTutzo
* @version 1.0
* @description: Permet la gestion de la validations
* @dependances:
* - knockoutjs
*
* méthodes:
* - validation(self, value)                 => Validation d'un editable
*
*/
var editableUtil = (function() {

    var _private = {

        VT_UNDEFINED: "undefined",
        VT_NULL: "null_",
        VT_OBJECT: "object",
        VT_ARRAY: "array",
        VT_DATE: "date",
        VT_STRING: "string",
        VT_NUMBER: "number",
        VT_BOOLEAN: "bool",

        validation: function(self, value) {

            var message = null;

            if (typeof self['required'] === 'boolean' && self['required'] === true && _private.isEmpty(value)) {
                message = "La valeur ne peut pas être vide.";
            } else if (typeof self['format'] === 'string' && !_private.isEmpty(value)) {
                if (self['format'] === "number" && !_private.isNumeric(value)) {
                    message = "Value isn't a number"
                } else if (self['format'] === "decimal" && !_private.isDigit(value)) {
                    message = "Value isn't a decimal"
                } else if (self['format'] === "email" && !_private.isEmail(value)) {
                    message = "Value isn't an email."
                } else if (self['format'] === "tel" && !_private.isPhoneNumber(value)) {
                    message = "Value isn't a tel"
                }
            } else if (typeof self['validation'] === 'function') {
                message = self.validation(value);
            }

            return message;
        },

        isUndefined: function(value) {
            return typeof value === "undefined";
        },

        isEmpty: function(value) {
            return _private.isUndefined(value) || value === null || value === "" || (_private.typeOf(value) === _private.VT_ARRAY && value.length === 0);
        },

        isBlank: function(str) {
            return (!str || /^\s*$/.test(str));
        },

        typeOf: function(value) {
            if (value === null) {
                return _private.VT_NULL;
            } else {
                var type = typeof value;
                switch (type) {
                    case "object":
                        if (Array.isArray(value)) {
                            return _private.VT_ARRAY;
                        } else if (value instanceof Date) {
                            return _private.VT_DATE;
                        } else {
                            return _private.VT_OBJECT;
                        }
                        break;

                    case "undefined":
                        return _private.VT_UNDEFINED;
                        break;

                    case "number":
                        return _private.VT_NUMBER;
                        break;

                    case "boolean":
                        return _private.VT_BOOLEAN;
                        break;

                    default:
                        return _private.VT_STRING;
                }
            }
        },

        isDigit: function(val) {
            var regex = /^\d+$/;
            return _private.testRegex(regex, val);
        },

        isNumeric: function(val) {
            if (!_private.isEmpty(val) && !$.isNumeric(val)) {
                return false;
            }
            return true;
        },

        isEmail: function(val) {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
            return _private.testRegex(regex, val);
        },

        isPhoneNumber: function(val) {
            var regex = /^[\+]?[\(]?([0-9]+)?[\)]?[-. ]?[\(]?([0-9]+)[\)]??[-. ]?([0-9]+)?[-. ]?([0-9]+)?[-. ]?([0-9]+)?[-. ]?([0-9]+)?[-. ]?([0-9]+)?$/;
            return _private.testRegex(regex, val);
        },

        testRegex: function(regex, val) {
            if (!_private.isEmpty(val) && !regex.test(val)) {
                return false;
            }
            return true;
        }
    }

    var _public = {
        validation: _private.validation
    }

    return _public;

})();
