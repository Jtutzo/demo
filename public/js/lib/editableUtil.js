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
