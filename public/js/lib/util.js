/**
* Object util => methode util
* @autor: Jtutzo
* @version: 1.1
* @require jquery for ajax, momentjs for formatted date
*
*===============================================================================
*                               constantes
*===============================================================================
*
* - UNDEFINED                                       => Type undefined
* - NULL                                            => Type null
* - BOOLEAN                                         => Type boolean
* - NUMBER                                          => Type number
* - STRING                                          => Type string
* - OBJECT                                          => Type object
* - ARRAY                                           => Type array
* - FUNCTION                                        => Type function
*
* - FORMAT_DATE_DD_MM_YYYY_1                        => date format 'DD/MM/YYYY'
* - FORMAT_DATE_DD_MM_YY_1                          => date format 'DD/MM/YY'
* - FORMAT_DATE_DD_MM_YYYY_2                        => date format 'DD-MM-YYYY'
* - FORMAT_DATE_DD_MM_YY_2                          => date format 'DD-MM-YY'
* - FORMAT_DATE_MM_DD_YYYY_1                        => date format 'MM/DD/YYYY'
* - FORMAT_DATE_MM_DD_YY_1                          => date format 'MM/DD/YY'
* - FORMAT_DATE_MM_DD_YYYY_2                        => date format 'MM-DD-YYYY'
* - FORMAT_DATE_MM_DD_YY_2                          => date format 'MM-DD-YY'

* - SUCCESS									        => success (ajax)
* - ERROR									        => error (ajax)
*
* - ARGUMENT_EXCEPTION                              => Exception type argument
* - NULL_OR_UNDEFINED_EXCEPTION                     => Exception type null or undefined value
* - NOT_NULL_OR_UNDEFINED_EXCEPTION                 => Exception type not null or undefined value
* - NULL_EXCEPTION                                  => Exception type null value
* - NOT_NULL_EXCEPTION                              => Exception type not null value
* - UNDEFINED_EXCEPTION                             => Exception type undefined value
* - NOT_UNDEFINED_EXCEPTION                         => Exception type not undefined value
* - BLANK_EXCEPTION                                 => Exception type blank value
* - NOT_BLANK_EXCEPTION                             => Exception type not blank value
* - EMPTY_EXCEPTION                                 => Exception type empty value
* - NOT_EMPTY_EXCEPTION                             => Exception type not empty value
* - BOOLEAN_EXCEPTION                               => Exception type boolean value
* - NOT_BOOLEAN_EXCEPTION                           => Exception type not boolean value
* - NUMBER_EXCEPTION                                => Exception type number value
* - NOT_NUMBER_EXCEPTION                            => Exception type not number value
* - STRING_EXCEPTION                                => Exception type string value
* - NOT_STRING_EXCEPTION                            => Exception type not string value
* - OBJECT_EXCEPTION                                => Exception type object value
* - NOT_OBJECT_EXCEPTION                            => Exception type not object value
* - ARRAY_EXCEPTION                                 => Exception type array value
* - NOT_ARRAY_EXCEPTION                             => Exception type not array value
* - FUNCTION_EXCEPTION                              => Exception type function value
* - NOT_FUNCTION_EXCEPTION                          => Exception type not function value
*
*===============================================================================
*                             methodes exceptions
*===============================================================================
*
* - argumentException(expr, message)   	            => launch exception (ARGUMENT_EXCEPTION) if expr is true
* - nullOrUndefinedException(value, message)        => Launch exception (NULL_OR_UNDEFINED_EXCEPTION) if value is null or unedfined
* - notNullOrUndefinedException(value, message)     => Launch exception (NOT_NULL_OR_UNDEFINED_EXCEPTION) if value is null or unedfined
* - nullException(value, message)  	                => Launch exception (NULL_EXCEPTION) if value is null
* - notNullException(value, message)                => Launch exception (NOT_NULL_EXCEPTION) if value isn't null
* - undefinedException(value, message)              => Launch exception (UNDEFINED_EXCEPTION) if value is undefined
* - notUndefinedException(value, message)           => Launch exception (NOT_UNDEFINED_EXCEPTION) if value isn't undefined
* - blankException(value, message)		            => Launch exception (BLANK_EXCEPTION) if value is blank
* - notBlankException(value, message)               => Launch exception (NOT_BLANK_EXCEPTION) if value is blank
* - emptyException(value, message) 	                => Launch exception (EMPTY_EXCEPTION) if value is empty
* - notEmptyException(value, message)               => Launch exception (NOT_EMPTY_EXCEPTION) if value isn't empty
* - booleanException(value, message)   	            => Launch exception (BOOLEAN_EXCEPTION) if is a boolean value
* - notBooleanException(value, message)             => Launch exception (NOT_BOOLEAN_EXCEPTION) if isn't a boolean value
* - numberException(value, message)    	            => Launch exception (NUMBER_EXCEPTION) if is a number value
* - notNumberException(value, message)              => Launch exception (NOT_NUMBER_EXCEPTION) if isn't a number value
* - stringException(value, message)    	            => Launch exception (STRING_EXCEPTION) if is a string value
* - notStringException(value, message)              => Launch exception (NOT_STRING_EXCEPTION) if isn't a string value
* - objectException(value, message)             	=> Launch exception (OBJECT_EXCEPTION) if is an object value
* - notObjectException(value, message)              => Launch exception (NOT_OBJECT_EXCEPTION) if isn't an object value
* - arrayException(value, message)     	            => Launch exception (ARRAY_EXCEPTION) if isn't an array value
* - notArrayException(value, message)               => Launch exception (NOT_ARRAY_EXCEPTION) if isn't an array value
* - functionException(value, message)  	            => Launch exception (FUNCTION_EXCEPTION) if isn't a function value
* - notFunctionException(value, message)            => Launch exception (NOT_FUNCTION_EXCEPTION) if isn't a function value
*
*===============================================================================
*                             methodes utils
*===============================================================================
*
* - isNullOrUndefined(value)                        => Check if is null or undefined value
* - isNotNullOrUndefined(value)                     => Check if isn't null or undefined value
* - isBlank(value)								    => Check if is null, undefined or blank value (string)
* - isNotBlank(value)                               => Check if isn't null, undefined or blank value
* - isEmpty(value)                                  => Check if value is null, undefined, blank or empty
* - isNotEmpty(value)                               => Check if value isn't null, undefined, blank or empty
* - oneIsEmpty(array)                               => Check if at least values is empty (execption: NOT_ARRAY_EXCEPTION)
* - isEquals(value1, value2)                        => Check if value1 and value2 are equals (Caution : use JSON for camparaison)
* - oneIsEquals(array1, array2)                     => Check if at least value is equals (exception: NOT_ARRAY_EXCEPTION)
* - contain(array, seq)                             => Check if array contain seq (exception: NOT_ARRAY_EXCEPTION)
* - noContain(array, seq)                           => Check if array no contain seq (exception: NOT_ARRAY_EXCEPTION)
* - clone(element)                                  => Clone an element (excpetion: UNDEFINED_EXCEPTION, FUNCTION_EXCEPTION)
*
*===============================================================================
*                             methodes type
*===============================================================================
*
* - isNull(value)                                   => Check if value is null
* - isNotNull(value)                                => Check if value isn't null
* - isUndefined(value)							    => Check if value is undefined
* - isNotUndefined(value)                           => Check if value isn't undefined
* - isBoolean(value)                                => Check if value is a boolean
* - isNotBoolean(value)                             => Check if value isn't a boolean
* - isNumber(value)                                 => Check if value is a number
* - isNotNumber(value)                              => Check if value isn't a number
* - isString(value)                                 => Check if value is a string
* - isNotString(value)                              => Check if isn't a string value
* - isObject(value)                                 => Check if value is an object (Caution : array is not object)
* - isNotObject(value)                              => Check if isn't an object value
* - isArray(value)                                  => Check if value is an array
* - isNotArray(value)                               => Check if isn't an array value
* - isFunction(value)                               => Check if value is a function
* - isNotFunction(value)                            => Check if isn't a function value
* - getType(value)                                  => Get type name of value (exception)
*
*===============================================================================
*                             methodes ajax
*===============================================================================
*
* - confAjax(conf, isDefaultConf)                   => Configure ajax query (exception: NOT_OBJECT_EXCEPTION, ARGUMENT_EXCEPTION)
* - ajax(url, data, success, faillure)              => Send ajax query
*
*===============================================================================
*                             methodes referentiel
*===============================================================================
*
* - confReferentiel(conf, isDefaultConf)            => Configure referentiel query (excpetion: NOT_OBJECT_EXCEPTION, ARGUMENT_EXCEPTION)
* - referentiel(url, data, success, faillure)       => Send ajax query (exception: BLANK_EXCEPTION, NOT_STRING_EXCEPTION, ARGUMENT_EXCEPTION)
*
*===============================================================================
*                             methodes debug
*===============================================================================
*
* - modeDebug(isModeDebug)                          => Enable/disable mode debug (exception NOT_BOOLEAN_EXCEPTION)
* - debug(message)                                  => Write in console debug
* - error(message)                                  => Write in console error
*
*===============================================================================
*                             methodes date
*===============================================================================
*
* - newDate(dateString, format)                     => Create a new date with format in param
* - formattedDate(date, format)                     => Formatted date (exception NOT_FUNCTION_EXCEPTION, NOT_STRING_EXCEPTION, ARGUMENT_EXCEPTION)
* - isValideDate(date)                              => Date is valide
*/

var util = (function() {

    var _private = {

        /*====================================================================================
        *                                     Constante
        *=====================================================================================*/
        //Type variable
        UNDEFINED: 'undefined',
        NULL: 'null',
        BOOLEAN: 'boolean',
        NUMBER: 'number',
        STRING: 'string',
        OBJECT: 'object',
        ARRAY: 'array',
        FUNCTION: 'function',

        //Format date
        FORMAT_DATE_DD_MM_YYYY_1: 'DD/MM/YYYY',
        FORMAT_DATE_DD_MM_YY_1: 'DD/MM/YY',
        FORMAT_DATE_DD_MM_YYYY_2: 'DD-MM-YYYY',
        FORMAT_DATE_DD_MM_YY_2: 'DD-MM-YY',
        FORMAT_DATE_MM_DD_YYYY_1: 'MM/DD/YYYY',
        FORMAT_DATE_MM_DD_YY_1: 'MM/DD/YY',
        FORMAT_DATE_MM_DD_YYYY_2: 'MM-DD-YYYY',
        FORMAT_DATE_MM_DD_YY_2: 'MM-DD-YY',

        //regex for formatted date
        regexFormat: {
            'DD/MM/YYYY': [/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"],
            'DD/MM/YY': [/(\d{2})\/(\d{2})\/(\d{2})/, "$2/$1/$3"],
            'DD/MM/YYYY': [/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"],
            'DD/MM/YY': [/(\d{2})-(\d{2})-(\d{2})/, "$2/$1/$3"],
            'MM/DD/YYYY': [/(\d{2})\/(\d{2})\/(\d{4})/, "$1/$2/$3"],
            'MM/DD/YY': [/(\d{2})\/(\d{2})\/(\d{2})/, "$1/$2/$3"],
            'MM/DD/YYYY': [/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3"],
            'MM/DD/YY': [/(\d{2})-(\d{2})-(\d{2})/, "$1/$2/$3"]
        },

        //Ajax response
        SUCCESS: "SUCCESS",
    	ERROR: "ERROR",

        //Exceptions
        ARGUMENT_EXCEPTION: 'ArgumentException',

        NULL_OR_UNDEFINED_EXCEPTION: 'NullOrUndefinedException',
        NOT_NULL_OR_UNDEFINED_EXCEPTION: 'NotNullOrUndefinedException',

        NULL_EXCEPTION: 'NullException',
        NOT_NULL_EXCEPTION: 'NotNullException',

        UNDEFINED_EXCEPTION: 'UndefinedException',
        NOT_UNDEFINED_EXCEPTION: 'NotUndefinedException',

        BLANK_EXCEPTION: 'BlankException',
        NOT_BLANK_EXCEPTION: 'NotBlankException',

        EMPTY_EXCEPTION: 'EmptyException',
        NOT_EMPTY_EXCEPTION: 'NotEmptyException',

        BOOLEAN_EXCEPTION: 'BooleanException',
        NOT_BOOLEAN_EXCEPTION: 'NotBooleanException',

        NUMBER_EXCEPTION: 'NumberException',
        NOT_NUMBER_EXCEPTION: 'NotNumberException',

        STRING_EXCEPTION: 'StringException',
        NOT_STRING_EXCEPTION: 'NotStringException',

        OBJECT_EXCEPTION: 'ObjectException',
        NOT_OBJECT_EXCEPTION: 'NotObjectException',

        ARRAY_EXCEPTION: 'ArrayException',
        NOT_ARRAY_EXCEPTION: 'NotArrayException',

        FUNCTION_EXCEPTION: 'FunctionException',
        NOT_FUNCTION_EXCEPTION: 'NotFunctionException',

        //default params for ajax query
        defaultParamsAjax: {
            url: "",
            data: null,
            success: null,
            failure: null,
            method: 'POST',
            async: true
        },

        //params for ajax query
        paramsAjax: null,

        //default params for referentiel ajax query
        defaultParamsReferentiel: {
            url: "",
            repalceUrl: '{referentiel}',
            success: null,
            failure: null,
            method: 'POST',
            async: false
        },

        //params for referentiel ajax query
        paramsReferentiel: null,

        cacheReferentiel: [],

        //enable-disable mode debug
        isModeDebug: false,

        /*====================================================================================
        *                         methodes exception
        *=====================================================================================*/
        /**
        * launch exception (ARGUMENT_EXCEPTION) if expr is true
        * @param test
        * @param message
        */
        argumentException: function(expr, message) {
            if (!_private.isBoolean(expr)) {
                _private.error("util.argumentException => expr must be a boolean expression.");
                throw new Error(_private.ARGUMENT_EXCEPTION);
            }
            if (!_private.isBlank(message) && !_private.isString(message)) {
                _private.error("util.argumentException => message must be a string value.");
                throw new Error(_private.ARGUMENT_EXCEPTION);
            }
            if (expr) {
                var exception = _private.ARGUMENT_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.argumentException => expr is true [" + exception + "]");
                throw new Error(_private.ARGUMENT_EXCEPTION);
            } else {
                _private.debug("util.argumentException => expr is false.");
            }
        },

        /**
        * Launch exception (NULL_OR_UNDEFINED_EXCEPTION) if value is null or unedfined
        * @param value
        * @param message
        */
        nullOrUndefinedException: function(value, message) {
            if (_private.isNull(value) || _private.isUndefined(value)) {
                var exception = _private.NULL_OR_UNDEFINED_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.nullOrUndefinedException => value is null or undefined [" + exception + "]");
                throw new Error(_private.NULL_OR_UNDEFINED_EXCEPTION);
            } else {
                _private.debug("util.nullException => value isn't null or unedfined.");
            }
        },

        /**
        * Launch exception (NOT_NULL_OR_UNDEFINED_EXCEPTION) if value is null or unedfined
        * @param value
        * @param message
        */
        notNullOrUndefinedException: function(value, message) {
            if (_private.isNotNull(value) || _private.isNotUndefined(value)) {
                var exception = _private.NOT_NULL_OR_UNDEFINED_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notNullOrUndefinedException => value isn't null or unedfined [" + exception + "]");
                throw new Error(_private.NOT_NULL_OR_UNDEFINED_EXCEPTION);
            } else {
                _private.debug("util.notNullOrUndefinedException => value is null or undefined.");
            }
        },

        /**
        * Launch exception (NULL_EXCEPTION) if value is null
        * @param value
        * @param message
        */
        nullException: function(value, message) {
            if (_private.isNull(value)) {
                var exception = _private.NULL_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.nullException => value is null [" + exception + "]");
                throw new Error(_private.NULL_EXCEPTION);
            } else {
                _private.debug("util.nullException => value isn't null.");
            }
        },

        /**
        * Launch exception (NOT_NULL_EXCEPTION) if value isn't null
        * @param value
        * @param message
        */
        notNullException: function(value, message) {
            if (_private.isNotNull(value)) {
                var exception = _private.NOT_NULL_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notNullException => value isn't null [" + exception + "]");
                throw new Error(_private.NOT_NULL_EXCEPTION);
            } else {
                _private.debug("util.notNullException => value is null.");
            }
        },

        /**
        * Launch exception (UNDEFINED_EXCEPTION) if value is undefined
        * @param value
        * @param message
        */
        undefinedException: function(value, message) {
            if (_private.isUndefined(value)) {
                var exception = _private.UNDEFINED_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.undefinedException => value is unedfined [" + exception + "]");
                throw new Error(_private.UNDEFINED_EXCEPTION);
            } else {
                _private.debug("util.undefinedException => value isn't unedfined.");
            }
        },

        /**
        * Launch exception (NOT_UNDEFINED_EXCEPTION) if value isn't undefined
        * @param value
        * @param message
        */
        notUndefinedException: function(value, message) {
            if (_private.isNotUndefined(value)) {
                var exception = _private.NOT_UNDEFINED_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notUndefinedException => value isn't unedfined [" + exception + "]");
                throw new Error(_private.NOT_UNDEFINED_EXCEPTION);
            } else {
                _private.debug("util.notUndefinedException => value is unedfined.");
            }
        },

        /**
        * Launch exception (BLANK_EXCEPTION) if value is blank
        * @param value
        * @param message
        */
        blankException: function(value, message) {
            if (_private.isBlank(value)) {
                var exception = _private.BLANK_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.blankException => value is blank [" + exception + "]");
                throw new Error(_private.BLANK_EXCEPTION);
            } else {
                _private.debug("util.blankException => value isn't blank.");
            }
        },

        /**
        * Launch exception (NOT_BLANK_EXCEPTION) if value is blank
        * @param value
        * @param message
        */
        notBlankException: function(value, message) {
            if (_private.isNotBlank(value)) {
                var exception = _private.NOT_BLANK_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notBlankException => value isn't blank [" + exception + "]");
                throw new Error(_private.NOT_BLANK_EXCEPTION);
            } else {
                _private.debug("util.notBlankException => value is blank.");
            }
        },

        /**
        * Launch exception (EMPTY_EXCEPTION) if value is empty
        * @param value
        * @param message
        */
        emptyException: function(value, message) {
            if (_private.isEmpty(value)) {
                var exception = _private.EMPTY_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.emptyException => value is empty [" + exception + "]");
                throw new Error(_private.EMPTY_EXCEPTION);
            } else {
                _private.debug("util.emptyException => value isn't empty.");
            }
        },

        /**
        * Launch exception (NOT_EMPTY_EXCEPTION) if value isn't empty
        * @param value
        * @param message
        */
        notEmptyException: function(value, message) {
            if (_private.isNotEmpty(value)) {
                var exception = _private.NOT_EMPTY_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notEmptyException => value isn't empty [" + exception + "]");
                throw new Error(_private.NOT_EMPTY_EXCEPTION);
            } else {
                _private.debug("util.notEmptyException => value is empty.");
            }
        },

        /**
        * launch exception (BOOLEAN_EXCEPTION) if is a boolean value
        * @param value
        * @param message
        */
        booleanException: function() {
            if (_private.isBoolean(value)) {
                var exception = _private.BOOLEAN_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.booleanException => value is a boolean [" + exception + "]");
                throw new Error(_private.BOOLEAN_EXCEPTION);
            } else {
                _private.debug("util.booleanException => value isn't a boolean.");
            }
        },

        /**
        * launch exception (NOT_BOOLEAN_EXCEPTION) if isn't a boolean value
        * @param value
        * @param message
        */
        notBooleanException: function(value, message) {
            if (_private.isNotBoolean(value)) {
                var exception = _private.NOT_BOOLEAN_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notBooleanException => value isn't a boolean [" + exception + "]");
                throw new Error(_private.NOT_BOOLEAN_EXCEPTION);
            } else {
                _private.debug("util.notBooleanException => value is a boolean.");
            }
        },

        /**
        * launch exception (NUMBER_EXCEPTION) if is a number value
        * @param value
        * @param message
        */
        numberException: function(value, message) {
            if (_private.isNumber(value)) {
                var exception = _private.NUMBER_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.numberException => value is a number [" + exception + "]");
                throw new Error(_private.NUMBER_EXCEPTION);
            } else {
                _private.debug("util.numberException => value isn't a number.");
            }
        },

        /**
        * launch exception (NOT_NUMBER_EXCEPTION) if isn't a number value
        * @param value
        * @param message
        */
        notNumberException: function(value, message) {
            if (_private.isNotNumber(value)) {
                var exception = _private.NOT_NUMBER_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notNumberException => value isn't a number [" + exception + "]");
                throw new Error(_private.NOT_NUMBER_EXCEPTION);
            } else {
                _private.debug("util.notNumberException => value is a number.");
            }
        },

        /**
        * launch exception (STRING_EXCEPTION) if is a string value
        * @param value
        * @param message
        */
        stringException: function(value, message) {
            if (_private.isString(value)) {
                var exception = _private.STRING_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.stringException => value is a string [" + exception + "]");
                throw new Error(_private.STRING_EXCEPTION);
            } else {
                _private.debug("util.stringException => value isn't a string.");
            }
        },

        /**
        * launch exception (NOT_STRING_EXCEPTION) if isn't a string value
        * @param value
        * @param message
        */
        notStringException: function(value, message) {
            if (_private.isNotString(value)) {
                var exception = _private.NOT_STRING_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notStringException => value isn't a string [" + exception + "]");
                throw new Error(_private.NOT_STRING_EXCEPTION);
            } else {
                _private.debug("util.notStringException => value is a string.");
            }
        },

        /**
        * launch exception (OBJECT_EXCEPTION) if is an object value
        * @param value
        * @param message
        */
        objectException: function(value, message) {
            if (_private.isObject(value)) {
                var exception = _private.OBJECT_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.objectException => value is an object [" + exception + "]");
                throw new Error(_private.OBJECT_EXCEPTION);
            } else {
                _private.debug("util.objectException => value isn't an object.");
            }
        },

        /**
        * launch exception (NOT_OBJECT_EXCEPTION) if isn't an object value
        * @param value
        * @param message
        */
        notObjectException: function(value, message) {
            if (_private.isNotObject(value)) {
                var exception = _private.NOT_OBJECT_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notObjectException => value isn't an object [" + exception + "]");
                throw new Error(_private.NOT_OBJECT_EXCEPTION);
            } else {
                _private.debug("util.notObjectException => value is an object.");
            }
        },

        /**
        * launch exception (ARRAY_EXCEPTION) if isn't an array value
        * @param value
        * @param message
        */
        arrayException: function(value, message) {
            if (_private.isArray(value)) {
                var exception = _private.ARRAY_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.arrayException => value is an array [" + exception + "]");
                throw new Error(_private.ARRAY_EXCEPTION);
            } else {
                _private.debug("util.arrayException => value isn't an array.");
            }
        },

        /**
        * launch exception (NOT_ARRAY_EXCEPTION) if isn't an array value
        * @param value
        * @param message
        */
        notArrayException: function(value, message) {
            if (_private.isNotArray(value)) {
                var exception = _private.NOT_ARRAY_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notArrayException => value isn't an array [" + exception + "]");
                throw new Error(_private.NOT_ARRAY_EXCEPTION);
            } else {
                _private.debug("util.notArrayException => value is an array.");
            }
        },

        /**
        * launch exception (FUNCTION_EXCEPTION) if isn't a function value
        * @param value
        * @param message
        */
        functionException: function(value, message) {
            if (_private.isFunction(value)) {
                var exception = _private.FUNCTION_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.functionException => value is a function [" + exception + "]");
                throw new Error(_private.FUNCTION_EXCEPTION);
            } else {
                _private.debug("util.functionException => value isn't a function.");
            }
        },

        /**
        * launch exception (NOT_FUNCTION_EXCEPTION) if isn't a function value
        * @param value
        * @param message
        */
        notFunctionException: function(value, message) {
            if (_private.isNotFunction(value)) {
                var exception = _private.NOT_FUNCTION_EXCEPTION + (!_private.isBlank(message))?": " + message:".";
                _private.error("util.notFunctionException => value isn't a function [" + exception + "]");
                throw new Error(_private.NOT_FUNCTION_EXCEPTION);
            } else {
                _private.debug("util.notFunctionException => value is a function.");
            }
        },

        /*====================================================================================
        *                            methode util
        *=====================================================================================*/
        /**
        * Check if is null or undefined value
        * @param value
        */
        isNullOrUndefined: function(value) {
            if (_private.isNull(value) || _private.isUndefined(value)) {
                _private.debug("util.isNullOrUndefined => value is null or undefined.");
                return true;
            }
            _private.debug("util.isNullOrUndefined => value isn't null and undefined.");
            return false;
        },

        /**
        * Check if isn't null or undefined value
        * @param value
        */
        isNotNullOrUndefined: function(value) {
            return !_private.isNullOrUndefined(value);
        },

        /**
        * Check if is null, undefined or blank value
        * @param value
        */
        isBlank: function(value) {
            if (_private.isNull(value) || _private.isUndefined(value) || (_private.isString(value) && value.trim() == 0)) {
                _private.debug("util.isBlank => value is blank.");
                return true;
            }
            _private.debug("util.isBlank => value isn't blank.");
            return false;
        },

        /**
        * Check if isn't null, undefined or blank value
        * @param value
        */
        isNotBlank: function(value) {
            return !_private.isBlank(value);
        },

        /**
        * Check if value is null, undefined, blank or empty
        * @param value
        */
        isEmpty: function(value) {
            if (_private.isBlank(value) || (_private.isObject(value) && Object.keys(value).length == 0)
                || (_private.isArray(value) && value.length == 0)) {
                _private.debug("util.isEmpty => value is empty.");
                return true;
            }
            _private.debug("util.isEmpty => value isn't empty.");
            return false;
        },

        /**
        * Check if value isn't null, undefined, blank or empty
        * @param value
        */
        isNotEmpty: function(value) {
            return !_private.isEmpty(value);
        },

        /**
        * Check if at least values is empty
        * @param values (array)
        * @exception NOT_ARRAY_EXCEPTION
        */
        oneIsEmpty: function(array) {
            _private.notArrayException(array, "array must be an array value (util.oneIsEmpty).");
            for (var i = 0; i < array.length; i++) {
                if (_private.isEmpty(array[i])) {
                    _private.debug("util.oneIsEmpty => at least value is empty.");
                    return true;
                }
            }
            _private.debug("util.oneIsEmpty => any value is empty.");
            return false;
        },

        /**
        * Check if value1 and value2 are equals
        * Caution : use JSON for camparaison !
        * @param value1
        * @param value2
        */
        isEquals: function(value1, value2) {
            if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
                _private.debug("util.isEquals => value1 is equal to value2.");
                return true;
            }
            _private.debug("util.isEquals => value1 isn't equal to value2.");
            return false;
        },

        /**
        * Check if at least value is equals
        * @param array1
        * @param array2
        * @exception NOT_ARRAY_EXCEPTION
        */
        oneIsEquals: function(array1, array2) {
            _private.notArrayException(array1, "array1 must be an array value (util.oneIsEquals).");
            _private.notArrayException(array2, "array2 must be an array value (util.oneIsEquals).");
            for (var i = 0; i < array1.length; i++) {
                for (var j = 0; j < array2.length; i++) {
                    if (array1[i] == array2[j]) {
                        _private.debug("util.oneIsEquals => at least value are equals.");
                        return true;
                    }
                }
            }
            _private.debug("util.oneIsEquals => no value are equals.");
            return false;
        },

        /**
        * Check if array contain seq
        * @param array
        * @param seq
        * @exception NOT_ARRAY_EXCEPTION
        */
        contain: function(array, seq) {
            _private.notArrayException(array, "array must be an array value.");
            for (var i = 0; i < array.length; i++) {
                if (util.isObject(seq)) {
                    if (JSON.stringify(seq) === JSON.stringify(seq)) return true;
                } else {
                    if (array[i] === seq) return true;
                }
            }
            return false;
        },

        /**
        * Check if array no contain seq
        * @param array
        * @param seq
        * @exception NOT_ARRAY_EXCEPTION
        */
        noContain: function(array, seq) {
            return !_private.contain(array, seq);
        },

        /**
        * clone an element
        * @param element
        * @exception UNDEFINED_EXCEPTION, FUNCTION_EXCEPTION
        */
        clone: function(element) {
            _private.undefinedException(element, "element mustn't be undefined (util.clone)");
            _private.functionException(element, "element mustn't be a function (util.clone)");
            _private.debug("util.clone => clone element " + element);
            return JSON.parse(JSON.stringify(element));
        },

        /*====================================================================================
        *                            methode check or get type
        *=====================================================================================*/
        /**
        * Check if value is null
        * @param value
        */
        isNull: function(value) {
            if (value === null) {
                _private.debug("util.isNull => value is null.");
                return true;
            }
            _private.debug("util.isNull => value isn't null.");
            return false;
        },

        /**
        * Check if value isn't null
        * @param value
        */
        isNotNull: function(value) {
            return !_private.isNull(value);
        },

        /**
        * Check if value is undefined
        * @param value
        */
        isUndefined: function(value) {
            if (value === undefined) {
                _private.debug("util.isUndefined => value is undefined.");
                return true;
            }
            _private.debug("util.isUndefined => value isn't undefined.");
            return false;
        },

        /**
        * Check if value isn't undefined
        * @param value
        */
        isNotUndefined: function(value) {
            return !_private.isUndefined(value);
        },

        /**
        * Check if value is a boolean
        * @param value
        * @return boolean
        */
        isBoolean: function(value) {
            if (_private.isNullOrUndefined(value) || typeof value !== _private.BOOLEAN) {
                _private.debug("util.isBoolean => value isn't a boolean.");
                return false;
            }
            _private.debug("util.isBoolean => value is a boolean.");
            return true;
        },

        /**
        * Check if value isn't a boolean
        * @param value
        * @return boolean
        */
        isNotBoolean: function(value) {
            return !_private.isBoolean(value);
        },

        /**
        * Check if value is a number
        * @param value
        * @return boolean
        */
        isNumber: function(value) {
            if (_private.isNullOrUndefined(value) || typeof value !== _private.NUMBER) {
                _private.debug("util.isNumber => value isn't a number.");
                return false;
            }
            _private.debug("util.isNumber => value is a number.");
            return true;
        },

        /**
        * Check if value isn't a number
        * @param value
        * @return boolean
        */
        isNotNumber: function(value) {
            return !_private.isNumber(value);
        },

        /**
        * Check if is a string value
        * @param value
        * @return boolean
        */
        isString: function(value) {
            if (_private.isNullOrUndefined(value) || typeof value !== _private.STRING) {
                _private.debug("util.isString => value isn't a string.");
                return false;
            }
            _private.debug("util.isString => value is a string.");
            return true;
        },

        /**
        * Check if isn't a string value
        * @param value
        * @return boolean
        */
        isNotString: function(value) {
            return !_private.isString(value);
        },

        /**
        * Check if is an object value
        * Caution : array is not object !
        * @param value
        * @return boolean
        */
        isObject: function(value) {
            if (_private.isNullOrUndefined(value) || typeof value !== _private.OBJECT || _private.isArray(value)) {
                _private.debug("util.isObject => value isn't an object.");
                return false;
            }
            _private.debug("util.isObject => value is an object.");
            return true;
        },

        /**
        * Check if isn't an object value
        * Caution : array is not object !
        * @param value
        * @return boolean
        */
        isNotObject: function(value) {
            return !_private.isObject(value);
        },

        /**
        * Check if is an array value
        * @param value
        * @return boolean
        */
        isArray: function(value) {
            if (_private.isNullOrUndefined(value) || !Array.isArray(value)) {
                _private.debug("util.isArray => value isn't an array.");
                return false;
            }
            _private.debug("util.isArray => value is an array.");
            return true;
        },

        /**
        * Check if isn't an array value
        * @param value
        * @return boolean
        */
        isNotArray: function(value) {
            return !_private.isArray(value);
        },

        /**
        * Check if is a function value
        * @param value
        * @return boolean
        */
        isFunction: function(value) {
            if (_private.isNullOrUndefined(value) || typeof value !== _private.FUNCTION) {
                _private.debug("util.isFunction => value isn't a function.");
                return false;
            }
            _private.debug("util.isFunction => value is a function.");
            return true;
        },

        /**
        * Check if isn't a function value
        * @param value
        * @return boolean
        */
        isNotFunction: function(value) {
            return !_private.isFunction(value);
        },

        /**
        * Get type name of value
        * @param value
        * @return String (type name)
        * @exception if type is unknow
        */
        getType: function(value) {
            if (_private.isUndefined(value)) {
                _private.debug("util.getType => value is " + _private.UNDEFINED + ".");
                return _private.UNDEFINED;
            }
            if (_private.isNull(value)) {
                _private.debug("util.getType => value is " + _private.NULL + ".");
                return _private.NULL;
            }
            if (_private.isBoolean(value)) {
                _private.debug("util.getType => value is " + _private.BOOLEAN + ".");
                return _private.BOOLEAN;
            }
            if (_private.isNumber(value)) {
                _private.debug("util.getType => value is " + _private.NUMBER + ".");
                return _private.NUMBER;
            }
            if (_private.isString(value)) {
                _private.debug("util.getType => value is " + _private.STRING + ".");
                return _private.STRING;
            }
            if (_private.isObject(value)) {
                _private.debug("util.getType => value is " + _private.OBJECT + ".");
                return _private.OBJECT;
            }
            if (_private.isArray(value)) {
                _private.debug("util.getType => value is " + _private.ARRAY + ".");
                return _private.ARRAY;
            }
            if (_private.isFunction(value)) {
                _private.debug("util.getType => value is " + _private.FUNCTION + ".");
                return _private.FUNCTION;
            }
            _private.error("util.getType => type unknow.");
            throw new Error("util.getType => type unknow.");
        },

        /*====================================================================================
        *                                   methodes ajax
        *=====================================================================================*/
        /**
        * configure ajax query
        * @param params
        * @param isDefaultParams
        * @exception NOT_OBJECT_EXCEPTION, ARGUMENT_EXCEPTION
        */
        confAjax: function(conf, isDefaultConf) {

            _private.notObjectException(conf, "params must be an object value (util.confAjax).");

            var expr = _private.isNotNullOrUndefined(isDefaultConf) && _private.isNotBoolean(isDefaultConf);
            _private.argumentException(expr, "isDefaultConf must be a null, undefined or boolean value (util.confAjax).");

            _private['paramsAjax'] = _private.factoryConfAjax(conf, _private['defaultParamsAjax']);

            if (isDefaultConf === true) {
                _private['defaultParamsAjax'] = _private.clone(_private['paramsAjax']);
            }
        },

        /**
        * Send ajax query (see jquery ajax for more information)
        * @param url
        * @param data
        * @param success
        * @param failure
        */
        ajax: function(url, data, success, failure) {

            _private.confAjax({
                url: url,
                data: data,
                success: success,
                failure: failure
            });

            AJAX.query(_private['paramsAjax']);
        },

        /**
        * factory conf ajax query
        * @param params
        * @param isDefaultParams
        * @private
        * @exception NOT_OBJECT_EXCEPTION, EMPTY_EXCEPTION, NOT_STRING_EXCEPTION, NOT_BOOLEAN_EXCEPTION, ARGUMENT_EXCEPTION
        */
        factoryConfAjax: function(conf, defaultConf) {

            _private.notObjectException(conf, "conf must be an object value (util.factoryParamsAjax).");
            _private.notObjectException(defaultConf, "defaultConf must be an object (util.factoryParamsAjax).");
            _private.emptyException(defaultConf, "defaultConf mustn't be an empty object (util.factoryParamsAjax).");

            var retour = _private.clone(defaultConf);

            //url
            if (_private.isNotNullOrUndefined(conf['url'])) {
                var url = conf['url'];
                _private.notStringException(url, "conf.url must be a string value (util.factoryParamsAjax).");
                retour['url'] = url;
            }

            //data
            if (_private.isNotUndefined(conf['data'])) {
                var data = conf['data'];
                var expr = _private.isNotNull(data) && _private.isNotObject(data);
                _private.argumentException(expr, "conf.data must be a null or an object value (util.factoryParamsAjax).");
                retour['data'] = _private.clone(data);
            }

            //success
            if (_private.isNotUndefined(conf['success'])) {
                var success = conf['success'];
                var expr = _private.isNotNull(success) && _private.isNotFunction(success);
                _private.argumentException(expr, "conf.success must be a null or a function value (util.factoryParamsAjax).");
                retour['success'] = success;
            }

            //failure
            if (_private.isNotUndefined(conf['failure'])) {
                var failure = conf['failure'];
                var expr = _private.isNotNull(failure) && _private.isNotFunction(failure);
                _private.argumentException(expr, "conf.failure must be a null or a function value (util.factoryParamsAjax).");
                retour['failure'] = failure;
            }

            //method
            if (_private.isNotNullOrUndefined(conf['method'])) {
                var method = conf['method'];
                _private.notStringException(method, "conf.method must be a string value (util.factoryParamsAjax).");
                var expr = method != 'POST' && method != 'GET';
                _private.argumentException(expr, "conf.methode must be equals to 'GET' or 'POST' (util.factoryParamsAjax).");
                retour['method'] = method;
            }

            //async
            if (_private.isNotNullOrUndefined(conf['async'])) {
                var asynch = conf['async'];
                _private.notBooleanException(asynch, "conf.async must be a boolean value (util.factoryParamsAjax).");
                retour['async'] = asynch;
            }

            return retour;
        },

        /*====================================================================================
        *                                   methodes ajax
        *=====================================================================================*/
        /**
        * configure referentiel query
        * @param params
        * @param isDefaultParams
        * @return old params
        * @exception NOT_OBJECT_EXCEPTION, ARGUMENT_EXCEPTION
        */
        confReferentiel: function(conf, isDefaultConf) {

            _private.notObjectException(conf, "conf must be an object value (util.confReferentiel).");

            var expr = _private.isNotNullOrUndefined(isDefaultConf) && _private.isNotBoolean(isDefaultConf);
            _private.argumentException(expr, "isDefaultConf must be a null, undefined or boolean value (util.confReferentiel).");

            _private['paramsReferentiel'] = _private.factoryConfReferentiel(conf, _private['defaultParamsReferentiel']);

            if (isDefaultConf === true) {
                _private['defaultParamsReferentiel'] = _private.clone(_private['paramsReferentiel']);
            }
        },

        /**
        * Send ajax query (see jquery ajax for more information)
        * @param url
        * @param data
        * @param success
        * @param failure
        * @exception BLANK_EXCEPTION, NOT_STRING_EXCEPTION, ARGUMENT_EXCEPTION
        */
        referentiel: function(name, success, faillure) {

            var response = "";

            _private.blankException(name, "name mustn't be blank (util.referentiel).");
            _private.notStringException(name, "name must be a string value (util.referentiel).")


            if (_private.isNotBlank(_private['cacheReferentiel'][name])) {
                response = _private['cacheReferentiel'][name];
                if (_private.isFunction(success)) {
                    success(response);
                }
                return response;
            }

            var repalceUrl = _private['defaultParamsReferentiel']['repalceUrl'];
            var url = _private['defaultParamsReferentiel']['url'];
            var expr = url.indexOf(repalceUrl) < 0;
            _private.argumentException(expr, "repalceUrl isn't present in default url (util.referentiel).");

            _private.confReferentiel({
                success: function(resp) {
                    if (_private.isNotNullOrUndefined(resp)) {
                        response = resp.obj;
                    }
                    if (_private.isFunction(success)) {
                        success(resp);
                    }
                },
                faillure: faillure
            });

            var conf = _private.clone(_private['paramsReferentiel']);
            conf['url'] = url.replace(repalceUrl, name);

            AJAX.query(conf);

            return response;
        },

        factoryConfReferentiel: function(conf, defaultConf) {

            _private.notObjectException(conf, "conf must be an object value (util.factoryConfReferentiel).");
            _private.notObjectException(defaultConf, "defaultConf must be an object (util.factoryConfReferentiel).");
            _private.emptyException(defaultConf, "defaultConf mustn't be an empty object (util.factoryConfReferentiel).");

            var retour = _private.clone(defaultConf);

            //url
            if (_private.isNotNullOrUndefined(conf['url'])) {
                var url = conf['url'];
                _private.notStringException(url, "conf.url must be a string value (util.factoryConfReferentiel).");
                retour['url'] = url;
            }

            //repalceUrl
            if (_private.isNotNullOrUndefined(conf['repalceUrl'])) {
                var repalceUrl = conf['repalceUrl'];
                _private.notStringException(url, "conf.repalceUrl must be a string value (util.factoryConfReferentiel).");
                retour['repalceUrl'] = _private.clone(repalceUrl);
            }

            //success
            if (_private.isNotUndefined(conf['success'])) {
                var success = conf['success'];
                var expr = _private.isNotNull(success) && _private.isNotFunction(success);
                _private.argumentException(expr, "conf.success must be a null or a function value (util.factoryParamsAjax).");
                retour['success'] = params['success'];
            }

            //failure
            if (_private.isNotUndefined(conf['failure'])) {
                var failure = conf['failure'];
                var expr = _private.isNotNull(failure) && _private.isNotFunction(failure);
                _private.argumentException(expr, "conf.failure must be a null or a function value (util.factoryParamsAjax).");
                retour['failure'] = failure;
            }

            //method
            if (_private.isNotNullOrUndefined(conf['method'])) {
                var method = conf['method'];
                _private.notStringException(method, "conf.method must be a string value (util.factoryParamsAjax).");
                var expr = method != 'POST' && method != 'GET';
                _private.argumentException(expr, "conf.methode must be equals to 'GET' or 'POST' (util.factoryParamsAjax).");
                retour['method'] = method;
            }

            //async
            if (_private.isNotNullOrUndefined(conf['async'])) {
                var asynch = conf['async'];
                _private.notBooleanException(asynch, "conf.async must be a boolean value (util.factoryParamsAjax).");
                retour['async'] = asynch;
            }

            return retour;
        },

        /*====================================================================================
        *                                   methodes debug
        *=====================================================================================*/
        /**
        * enable/disable mode debug
        * @param modeDebug
        * @exception NOT_BOOLEAN_EXCEPTION
        */
        modeDebug: function(isModeDebug) {
            _private.notBooleanException(isModeDebug, "isModeDebug must be a boolean value (util.modeDebug)");
            _private.isModeDebug = isModeDebug;
        },

        /**
        * write in console debug
        * @param message
        */
        debug: function(message) {
            if (_private.isModeDebug) {
                console.log("DEBUG " + message);
            }
        },

        /**
        * write in console error
        * @param message
        */
        error: function(message) {
            console.error("ERROR " + message);
        },

        /*====================================================================================
        *                                   methodes date
        *=====================================================================================*/
        /**
        * Create a new date with format in param
        * @param dateString
        * @param format
        * @return Date
        */
        newDate: function(dateString, format) {
            var date;
            if (_private.isNullOrUndefined(dateString)) {
                date = null;
            } else if (util.isArray(regexFormat[format])) {
                date = new Date(dateString.replace(regexFormat[format][0], regexFormat[format][1]));
            } else {
                date = new Date(dateString);
            }
            return date;
        },

        /**
        * Formatted date
        * @param date
        * @param format
        * @return string
        * @exception NOT_FUNCTION_EXCEPTION, NOT_STRING_EXCEPTION, ARGUMENT_EXCEPTION
        */
        formattedDate: function(date, format) {
            _private.notFunctionException(moment, "util.formattedDate => moment lib is required.");
            _private.notStringException(format, "util.formattedDate => format must be an string value.");
            _private.argumentException(_private.isValideDate(date), "util.formattedDate => date isn't a date value.");
            return moment(date).format(format);
        },

        /**
        * Date is valide
        * @param date
        * @return boolean
        */
        isValideDate: function(date) {
            if (_private.isObject(date) && isNaN(date.getTime())) {
                return true;
            }
            return false;
        }
    }

    var _public = {

        UNDEFINED: _private.UNDEFINED,
        NULL: _private.NULL,
        BOOLEAN: _private.BOOLEAN,
        NUMBER: _private.NUMBER,
        STRING: _private.STRING,
        OBJECT: _private.OBJECT,
        ARRAY: _private.ARRAY,
        FUNCTION: _private.FUNCTION,

        FORMAT_DATE_DD_MM_YYYY_1: _private.FORMAT_DATE_DD_MM_YYYY_1,
        FORMAT_DATE_DD_MM_YY_1: _private.FORMAT_DATE_DD_MM_YY_1,
        FORMAT_DATE_DD_MM_YYYY_2: _private.FORMAT_DATE_DD_MM_YYYY_2,
        FORMAT_DATE_DD_MM_YY_2: _private.FORMAT_DATE_DD_MM_YY_2,
        FORMAT_DATE_MM_DD_YYYY_1: _private.FORMAT_DATE_MM_DD_YYYY_1,
        FORMAT_DATE_MM_DD_YY_1: _private.FORMAT_DATE_MM_DD_YY_1,
        FORMAT_DATE_MM_DD_YYYY_2: _private.FORMAT_DATE_MM_DD_YYYY_2,
        FORMAT_DATE_MM_DD_YY_2: _private.FORMAT_DATE_MM_DD_YY_2,

        SUCCESS: _private.SUCCESS,
        ERROR: _private.ERROR,

        ARGUMENT_EXCEPTION: _private.ARGUMENT_EXCEPTION,
        NULL_OR_UNDEFINED_EXCEPTION: _private.NULL_OR_UNDEFINED_EXCEPTION,
        NOT_NULL_OR_UNDEFINED_EXCEPTION: _private.NOT_NULL_OR_UNDEFINED_EXCEPTION,
        NULL_EXCEPTION: _private.NULL_EXCEPTION,
        NOT_NULL_EXCEPTION: _private.NOT_NULL_EXCEPTION,
        UNDEFINED_EXCEPTION: _private.UNDEFINED_EXCEPTION,
        NOT_UNDEFINED_EXCEPTION: _private.NOT_UNDEFINED_EXCEPTION,
        BLANK_EXCEPTION: _private.BLANK_EXCEPTION,
        NOT_BLANK_EXCEPTION: _private.NOT_BLANK_EXCEPTION,
        EMPTY_EXCEPTION: _private.EMPTY_EXCEPTION,
        NOT_EMPTY_EXCEPTION: _private.NOT_EMPTY_EXCEPTION,
        BOOLEAN_EXCEPTION: _private.BOOLEAN_EXCEPTION,
        NOT_BOOLEAN_EXCEPTION: _private.NOT_BOOLEAN_EXCEPTION,
        NUMBER_EXCEPTION: _private.NUMBER_EXCEPTION,
        NOT_NUMBER_EXCEPTION: _private.NOT_NUMBER_EXCEPTION,
        STRING_EXCEPTION: _private.STRING_EXCEPTION,
        NOT_STRING_EXCEPTION: _private.NOT_STRING_EXCEPTION,
        OBJECT_EXCEPTION: _private.OBJECT_EXCEPTION,
        NOT_OBJECT_EXCEPTION: _private.NOT_OBJECT_EXCEPTION,
        ARRAY_EXCEPTION: _private.ARRAY_EXCEPTION,
        NOT_ARRAY_EXCEPTION: _private.NOT_ARRAY_EXCEPTION,
        FUNCTION_EXCEPTION: _private.FUNCTION_EXCEPTION,
        NOT_FUNCTION_EXCEPTION: _private.NOT_FUNCTION_EXCEPTION,

        argumentException: _private.argumentException,
        nullOrUndefinedException: _private.nullOrUndefinedException,
        notNullOrUndefinedException: _private.notNullOrUndefinedException,
        nullException: _private.nullException,
        notNullException: _private.notNullException,
        undefinedException: _private.undefinedException,
        notUndefinedException: _private.notUndefinedException,
        blankException: _private.blankException,
        notBlankException: _private.notBlankException,
        emptyException: _private.emptyException,
        notEmptyException: _private.notEmptyException,
        booleanException: _private.booleanException,
        notBooleanException: _private.notBooleanException,
        numberException: _private.numberException,
        notNumberException: _private.notNumberException,
        stringException: _private.stringException,
        notStringException: _private.notStringException,
        objectException: _private.objectException,
        notObjectException: _private.notObjectException,
        arrayException: _private.arrayException,
        notArrayException: _private.notArrayException,
        functionException: _private.functionException,
        notFunctionException: _private.notFunctionException,

        isNullOrUndefined: _private.isNullOrUndefined,
        isNotNullOrUndefined: _private.isNotNullOrUndefined,
        isBlank: _private.isBlank,
        isNotBlank: _private.isNotBlank,
        isEmpty: _private.isEmpty,
        isNotEmpty: _private.isNotEmpty,
        oneIsEmpty: _private.oneIsEmpty,
        isEquals: _private.isEquals,
        oneIsEquals: _private.oneIsEquals,
        contain: _private.contain,
        noContain: _private.noContain,
        clone: _private.clone,

        isNull: _private.isNull,
        isNotNull: _private.isNotNull,
        isUndefined: _private.isUndefined,
        isNotUndefined: _private.isNotUndefined,
        isBoolean: _private.isBoolean,
        isNotBoolean: _private.isNotBoolean,
        isNumber: _private.isNumber,
        isNotNumber: _private.isNotNumber,
        isString: _private.isString,
        isNotString: _private.isNotString,
        isObject: _private.isObject,
        isNotObject: _private.isNotObject,
        isArray: _private.isArray,
        isNotArray: _private.isNotArray,
        isFunction: _private.isFunction,
        isNotFunction: _private.isNotFunction,
        getType : _private.getType,

        confAjax: _private.confAjax,
        ajax: _private.ajax,

        confReferentiel: _private.confReferentiel,
        referentiel: _private.referentiel,

        modeDebug: _private.modeDebug,
        debug: _private.debug,
        error: _private.error,

        newDate: _private.newDate,
        formattedDate: _private.formattedDate,
        isValideDate: _private.isValideDate

    }

    return _public;
})()

/* ********************************************************************************************* */
/* *************************************** AJAX HANDLING *************************************** */
/* ********************************************************************************************* */

/*
	// Types of ajax response
	AJAX.SUCCESS
	AJAX.ERROR

	// Performs an ajax query
	AJAX.query({
		url: "",					// Request URL
		data: {},					// Associative array of the data to be transmitted
		success: function(obj) {},	// Method to be called in case of success (parameter: response.object)
		failure: function(obj) {},	// Method to be called in case of failure (parameter: response.object)
		method: "POST",				// HTTP method to be used ("GET" ou "POST", "POST" by default)
		async: true					// Tells if ths call AJAX will be async or not
	});

	// Converts an ajax response into an object
	//	{typeMessage (AJAX.SUCCESS or AJAX.ERROR), errorMessages (array), data}
	AJAX.toObject(response);
*/
var AJAX = (function () {

    // private
    var _private = {
    	SUCCESS: "SUCCESS",
    	ERROR: "ERROR",

    	query: function(options) {
    		var success = options.success;
    		if (typeof success !== "function") {
    			success = function(obj) {
    				console.log(obj);
    			};
    		}

    		var failure = options.failure;
    		if (typeof failure !== "function") {
    			failure = function(obj) {
    				console.error(obj);
    			};
    		}

    		var method = options.method;
    		if (typeof method !== "string" || method.toUpperCase() !== "GET") {
    			method = "POST";
    		}


    		if (options.async === true) {
    			$.ajaxSetup({async: true});
    		} else {
    			$.ajaxSetup({async: false});
    		}


    		$.ajax({
    			type : method,
    			url : options.url,
    			data : options.data
    		}).done(function(response) {
    			try {

    				if (response && response != "null") {

        				var obj = _private.toObject(response);

        				if (!obj) {
        					throw "No data received";

        				} else if (obj.typeMessage == _private.SUCCESS) {
        					success(obj);

        				} else {
        					failure(obj);
        				}

    				} else {
    					failure();
    				}

    			} catch (exception) {
    				console.error(exception);
    				console.log(response);
    			}
    		}).fail(function(jqXHR, textStatus) {
    			var obj = {};
    			if (jqXHR && jqXHR.status == "403") {
    				showError(MSG.get("label.no.access"));
    			} else {
    				obj.errorMessages = [options.url + ' -> [Statut : ' + jqXHR.status + ',' + jqXHR.statusText + ']'];
        			failure(obj);
    			}
    		});

    		$.ajaxSetup({async: true});
    	},

        toObject: function(response) {
        	var retour = response;
        	// La réponse est peut-être déjà au bon format
        	try {
        		retour = JSON.parse(response);
        	} catch (e) {
        	}
        	// Sinon, on la convertit
        	if (typeof retour === 'string') {
        		if (retour == _private.SUCCESS) {
        			retour = {
        				typeMessage: _private.SUCCESS,
        				errorMessages: []
        			};
        		} else if (retour == _private.ERROR) {
        			retour = {
        				typeMessage: _private.ERROR,
        				errorMessages: [labelErreurTechnique]
        			};
        		} else if (retour.indexOf(_private.ERROR) == 0) {
        			retour = {
        				typeMessage: _private.ERROR,
        				errorMessages: [retour]
        			};
        		} else {
        			retour = {
        				typeMessage: _private.ERROR,
        				errorMessages: [retour]
        			};
        		}
        	}

        	// Cas des retours de données JSON ({aaData: [ obj1, obj2, ... ]})
        	if (typeof retour['aaData'] !== 'undefined') {
        		retour = {
        			typeMessage: _private.SUCCESS,
        			errorMessages: [],
        			data: retour['aaData'] // Forcément de type tableau
        		};
        	}

        	// Cas des retours de données JSON ({object: { prop1: ..., prop2: ... }})
        	if (typeof retour['object'] !== 'undefined') {
        		retour = {
        			typeMessage: _private.SUCCESS,
        			errorMessages: [],
        			data: retour['object'] // Forcément de type tableau
        		};
        	}

        	return retour;
        }
    };

    // public
    var _public = {
    	SUCCESS: 	_private.SUCCESS,
       	ERROR: 		_private.ERROR,
    	query: 		_private.query,
    	toObject: 	_private.toObject
    };

    return _public;
})();
