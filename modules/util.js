/**
* Module util => methode util
* @autor: Jtutzo
* @version: 1.0
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
*                             methodes debug
*===============================================================================
*
* - modeDebug(isModeDebug)                          => Enable/disable mode debug (exception NOT_BOOLEAN_EXCEPTION)
* - debug(message)                                  => Write in console debug
* - error(message)                                  => Write in console error
*/
/*====================================================================================
*                                     Constante
*=====================================================================================*/
//Type variable
const UNDEFINED = 'undefined';
const NULL = 'null';
const BOOLEAN = 'boolean';
const NUMBER = 'number';
const STRING = 'string';
const OBJECT = 'object';
const ARRAY = 'array';
const FUNCTION = 'function';

//Exceptions
const ARGUMENT_EXCEPTION = 'ArgumentException';

const NULL_OR_UNDEFINED_EXCEPTION = 'NullOrUndefinedException';
const NOT_NULL_OR_UNDEFINED_EXCEPTION = 'NotNullOrUndefinedException';

const NULL_EXCEPTION = 'NullException';
const NOT_NULL_EXCEPTION = 'NotNullException';

const UNDEFINED_EXCEPTION = 'UndefinedException';
const NOT_UNDEFINED_EXCEPTION = 'NotUndefinedException';

const BLANK_EXCEPTION = 'BlankException';
const NOT_BLANK_EXCEPTION = 'NotBlankException';

const EMPTY_EXCEPTION = 'EmptyException';
const NOT_EMPTY_EXCEPTION = 'NotEmptyException';

const BOOLEAN_EXCEPTION = 'BooleanException';
const NOT_BOOLEAN_EXCEPTION = 'NotBooleanException';

const NUMBER_EXCEPTION = 'NumberException';
const NOT_NUMBER_EXCEPTION = 'NotNumberException';

const STRING_EXCEPTION = 'StringException';
const NOT_STRING_EXCEPTION = 'NotStringException';

const OBJECT_EXCEPTION = 'ObjectException';
const NOT_OBJECT_EXCEPTION = 'NotObjectException';

const ARRAY_EXCEPTION = 'ArrayException';
const NOT_ARRAY_EXCEPTION = 'NotArrayException';

const FUNCTION_EXCEPTION = 'FunctionException';
const NOT_FUNCTION_EXCEPTION = 'NotFunctionException';

var isModeDebug = false;

/*====================================================================================
*                         methodes exception
*=====================================================================================*/
/**
* launch exception (ARGUMENT_EXCEPTION) if expr is true
* @param test
* @param message
*/
function argumentException(expr, message) {
    if (!isBoolean(expr)) {
        error("util.argumentException => expr must be a boolean expression.");
        throw new Error(ARGUMENT_EXCEPTION);
    }
    if (!isBlank(message) && !isString(message)) {
        error("util.argumentException => message must be a string value.");
        throw new Error(ARGUMENT_EXCEPTION);
    }
    if (expr) {
        var exception = ARGUMENT_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.argumentException => expr is true [" + exception + "]");
        throw new Error(ARGUMENT_EXCEPTION);
    } else {
        debug("util.argumentException => expr is false.");
    }
}

/**
* Launch exception (NULL_OR_UNDEFINED_EXCEPTION) if value is null or undefined
* @param value
* @param message
*/
function nullOrUndefinedException(value, message) {
    if (isNull(value) || isUndefined(value)) {
        var exception = NULL_OR_UNDEFINED_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.nullOrUndefinedException => value is null or undefined [" + exception + "]");
        throw new Error(NULL_OR_UNDEFINED_EXCEPTION);
    } else {
        debug("util.nullException => value isn't null or unedfined.");
    }
}

/**
* Launch exception (NOT_NULL_OR_UNDEFINED_EXCEPTION) if value is null or undefined
* @param value
* @param message
*/
function notNullOrUndefinedException(value, message) {
    if (isNotNull(value) || isNotUndefined(value)) {
        var exception = NOT_NULL_OR_UNDEFINED_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notNullOrUndefinedException => value isn't null or unedfined [" + exception + "]");
        throw new Error(NOT_NULL_OR_UNDEFINED_EXCEPTION);
    } else {
        debug("util.notNullOrUndefinedException => value is null or undefined.");
    }
}

/**
* Launch exception (NULL_EXCEPTION) if value is null
* @param value
* @param message
*/
function nullException(value, message) {
    if (isNull(value)) {
        var exception = NULL_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.nullException => value is null [" + exception + "]");
        throw new Error(NULL_EXCEPTION);
    } else {
        debug("util.nullException => value isn't null.");
    }
}

/**
* Launch exception (NOT_NULL_EXCEPTION) if value isn't null
* @param value
* @param message
*/
function notNullException(value, message) {
    if (isNotNull(value)) {
        var exception = NOT_NULL_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notNullException => value isn't null [" + exception + "]");
        throw new Error(NOT_NULL_EXCEPTION);
    } else {
        debug("util.notNullException => value is null.");
    }
}

/**
* Launch exception (UNDEFINED_EXCEPTION) if value is undefined
* @param value
* @param message
*/
function undefinedException(value, message) {
    if (isUndefined(value)) {
        var exception = UNDEFINED_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.undefinedException => value is unedfined [" + exception + "]");
        throw new Error(UNDEFINED_EXCEPTION);
    } else {
        debug("util.undefinedException => value isn't unedfined.");
    }
}

/**
* Launch exception (NOT_UNDEFINED_EXCEPTION) if value isn't undefined
* @param value
* @param message
*/
function notUndefinedException(value, message) {
    if (isNotUndefined(value)) {
        var exception = NOT_UNDEFINED_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notUndefinedException => value isn't unedfined [" + exception + "]");
        throw new Error(NOT_UNDEFINED_EXCEPTION);
    } else {
        debug("util.notUndefinedException => value is unedfined.");
    }
}

/**
* Launch exception (BLANK_EXCEPTION) if value is blank
* @param value
* @param message
*/
function blankException(value, message) {
    if (isBlank(value)) {
        var exception = BLANK_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.blankException => value is blank [" + exception + "]");
        throw new Error(BLANK_EXCEPTION);
    } else {
        debug("util.blankException => value isn't blank.");
    }
}

/**
* Launch exception (NOT_BLANK_EXCEPTION) if value is blank
* @param value
* @param message
*/
function notBlankException(value, message) {
    if (isNotBlank(value)) {
        var exception = NOT_BLANK_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notBlankException => value isn't blank [" + exception + "]");
        throw new Error(NOT_BLANK_EXCEPTION);
    } else {
        debug("util.notBlankException => value is blank.");
    }
}

/**
* Launch exception (EMPTY_EXCEPTION) if value is empty
* @param value
* @param message
*/
function emptyException(value, message) {
    if (isEmpty(value)) {
        var exception = EMPTY_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.emptyException => value is empty [" + exception + "]");
        throw new Error(EMPTY_EXCEPTION);
    } else {
        debug("util.emptyException => value isn't empty.");
    }
}

/**
* Launch exception (NOT_EMPTY_EXCEPTION) if value isn't empty
* @param value
* @param message
*/
function notEmptyException(value, message) {
    if (isNotEmpty(value)) {
        var exception = NOT_EMPTY_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notEmptyException => value isn't empty [" + exception + "]");
        throw new Error(NOT_EMPTY_EXCEPTION);
    } else {
        debug("util.notEmptyException => value is empty.");
    }
}

/**
* launch exception (BOOLEAN_EXCEPTION) if is a boolean value
* @param value
* @param message
*/
function booleanException() {
    if (isBoolean(value)) {
        var exception = BOOLEAN_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.booleanException => value is a boolean [" + exception + "]");
        throw new Error(BOOLEAN_EXCEPTION);
    } else {
        debug("util.booleanException => value isn't a boolean.");
    }
}

/**
* launch exception (NOT_BOOLEAN_EXCEPTION) if isn't a boolean value
* @param value
* @param message
*/
function notBooleanException(value, message) {
    if (isNotBoolean(value)) {
        var exception = NOT_BOOLEAN_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notBooleanException => value isn't a boolean [" + exception + "]");
        throw new Error(NOT_BOOLEAN_EXCEPTION);
    } else {
        debug("util.notBooleanException => value is a boolean.");
    }
}

/**
* launch exception (NUMBER_EXCEPTION) if is a number value
* @param value
* @param message
*/
function numberException(value, message) {
    if (isNumber(value)) {
        var exception = NUMBER_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.numberException => value is a number [" + exception + "]");
        throw new Error(NUMBER_EXCEPTION);
    } else {
        debug("util.numberException => value isn't a number.");
    }
}

/**
* launch exception (NOT_NUMBER_EXCEPTION) if isn't a number value
* @param value
* @param message
*/
function notNumberException(value, message) {
    if (isNotNumber(value)) {
        var exception = NOT_NUMBER_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notNumberException => value isn't a number [" + exception + "]");
        throw new Error(NOT_NUMBER_EXCEPTION);
    } else {
        debug("util.notNumberException => value is a number.");
    }
}

/**
* launch exception (STRING_EXCEPTION) if is a string value
* @param value
* @param message
*/
function stringException(value, message) {
    if (isString(value)) {
        var exception = STRING_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.stringException => value is a string [" + exception + "]");
        throw new Error(STRING_EXCEPTION);
    } else {
        debug("util.stringException => value isn't a string.");
    }
}

/**
* launch exception (NOT_STRING_EXCEPTION) if isn't a string value
* @param value
* @param message
*/
function notStringException(value, message) {
    if (isNotString(value)) {
        var exception = NOT_STRING_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notStringException => value isn't a string [" + exception + "]");
        throw new Error(NOT_STRING_EXCEPTION);
    } else {
        debug("util.notStringException => value is a string.");
    }
}

/**
* launch exception (OBJECT_EXCEPTION) if is an object value
* @param value
* @param message
*/
function objectException(value, message) {
    if (isObject(value)) {
        var exception = OBJECT_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.objectException => value is an object [" + exception + "]");
        throw new Error(OBJECT_EXCEPTION);
    } else {
        debug("util.objectException => value isn't an object.");
    }
}

/**
* launch exception (NOT_OBJECT_EXCEPTION) if isn't an object value
* @param value
* @param message
*/
function notObjectException(value, message) {
    if (isNotObject(value)) {
        var exception = NOT_OBJECT_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notObjectException => value isn't an object [" + exception + "]");
        throw new Error(NOT_OBJECT_EXCEPTION);
    } else {
        debug("util.notObjectException => value is an object.");
    }
}

/**
* launch exception (ARRAY_EXCEPTION) if isn't an array value
* @param value
* @param message
*/
function arrayException(value, message) {
    if (isArray(value)) {
        var exception = ARRAY_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.arrayException => value is an array [" + exception + "]");
        throw new Error(ARRAY_EXCEPTION);
    } else {
        debug("util.arrayException => value isn't an array.");
    }
}

/**
* launch exception (NOT_ARRAY_EXCEPTION) if isn't an array value
* @param value
* @param message
*/
function notArrayException(value, message) {
    if (isNotArray(value)) {
        var exception = NOT_ARRAY_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notArrayException => value isn't an array [" + exception + "]");
        throw new Error(NOT_ARRAY_EXCEPTION);
    } else {
        debug("util.notArrayException => value is an array.");
    }
}

/**
* launch exception (FUNCTION_EXCEPTION) if isn't a function value
* @param value
* @param message
*/
function functionException(value, message) {
    if (isFunction(value)) {
        var exception = FUNCTION_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.functionException => value is a function [" + exception + "]");
        throw new Error(FUNCTION_EXCEPTION);
    } else {
        debug("util.functionException => value isn't a function.");
    }
}

/**
* launch exception (NOT_FUNCTION_EXCEPTION) if isn't a function value
* @param value
* @param message
*/
function notFunctionException(value, message) {
    if (isNotFunction(value)) {
        var exception = NOT_FUNCTION_EXCEPTION + (!isBlank(message))?": " + message:".";
        error("util.notFunctionException => value isn't a function [" + exception + "]");
        throw new Error(NOT_FUNCTION_EXCEPTION);
    } else {
        debug("util.notFunctionException => value is a function.");
    }
}

/*====================================================================================
*                            methode util
*=====================================================================================*/
/**
* Check if is null or undefined value
* @param value
*/
function isNullOrUndefined(value) {
    if (isNull(value) || isUndefined(value)) {
        debug("util.isNullOrUndefined => value is null or undefined.");
        return true;
    }
    debug("util.isNullOrUndefined => value isn't null and undefined.");
    return false;
}

/**
* Check if isn't null or undefined value
* @param value
*/
function isNotNullOrUndefined(value) {
    return !isNullOrUndefined(value);
}

/**
* Check if is null, undefined or blank value
* @param value
*/
function isBlank(value) {
    if (isNull(value) || isUndefined(value) || (isString(value) && value.trim() == 0)) {
        debug("util.isBlank => value is blank.");
        return true;
    }
    debug("util.isBlank => value isn't blank.");
    return false;
}

/**
* Check if isn't null, undefined or blank value
* @param value
*/
function isNotBlank(value) {
    return !isBlank(value);
}

/**
* Check if value is null, undefined, blank or empty
* @param value
*/
function isEmpty(value) {
    if (isBlank(value) || (isObject(value) && Object.keys(value).length == 0)
        || (isArray(value) && value.length == 0)) {
        debug("util.isEmpty => value is empty.");
        return true;
    }
    debug("util.isEmpty => value isn't empty.");
    return false;
}

/**
* Check if value isn't null, undefined, blank or empty
* @param value
*/
function isNotEmpty(value) {
    return !isEmpty(value);
}

/**
* Check if at least values is empty
* @param values (array)
* @exception NOT_ARRAY_EXCEPTION
*/
function oneIsEmpty(array) {
    notArrayException(array, "array must be an array value (util.oneIsEmpty).");
    for (var i = 0; i < array.length; i++) {
        if (isEmpty(array[i])) {
            debug("util.oneIsEmpty => at least value is empty.");
            return true;
        }
    }
    debug("util.oneIsEmpty => any value is empty.");
    return false;
}

/**
* Check if value1 and value2 are equals
* Caution : use JSON for camparaison !
* @param value1
* @param value2
*/
function isEquals(value1, value2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        debug("util.isEquals => value1 is equal to value2.");
        return true;
    }
    debug("util.isEquals => value1 isn't equal to value2.");
    return false;
}

/**
* Check if at least value is equals
* @param array1
* @param array2
* @exception NOT_ARRAY_EXCEPTION
*/
function oneIsEquals(array1, array2) {
    notArrayException(array1, "array1 must be an array value (util.oneIsEquals).");
    notArrayException(array2, "array2 must be an array value (util.oneIsEquals).");
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; i++) {
            if (array1[i] == array2[j]) {
                debug("util.oneIsEquals => at least value are equals.");
                return true;
            }
        }
    }
    debug("util.oneIsEquals => no value are equals.");
    return false;
}

/**
* Check if array contain seq
* @param array
* @param seq
* @exception NOT_ARRAY_EXCEPTION
*/
function contain(array, seq) {
    notArrayException(array, "array must be an array value.");
    for (var i = 0; i < array.length; i++) {
        if (util.isObject(seq)) {
            if (JSON.stringify(seq) === JSON.stringify(seq)) return true;
        } else {
            if (array[i] === seq) return true;
        }
    }
    return false;
}

/**
* Check if array no contain seq
* @param array
* @param seq
* @exception NOT_ARRAY_EXCEPTION
*/
function noContain(array, seq) {
    return !contain(array, seq);
}

/**
* clone an element
* @param element
* @exception UNDEFINED_EXCEPTION, FUNCTION_EXCEPTION
*/
function clone(element) {
    undefinedException(element, "element mustn't be undefined (util.clone)");
    functionException(element, "element mustn't be a function (util.clone)");
    debug("util.clone => clone element " + element);
    return JSON.parse(JSON.stringify(element));
}

/*====================================================================================
*                            methode check or get type
*=====================================================================================*/
/**
* Check if value is null
* @param value
*/
function isNull(value) {
    if (value === null) {
        debug("util.isNull => value is null.");
        return true;
    }
    debug("util.isNull => value isn't null.");
    return false;
}

/**
* Check if value isn't null
* @param value
*/
function isNotNull(value) {
    return !isNull(value);
}

/**
* Check if value is undefined
* @param value
*/
function isUndefined(value) {
    if (value === undefined) {
        debug("util.isUndefined => value is undefined.");
        return true;
    }
    debug("util.isUndefined => value isn't undefined.");
    return false;
}

/**
* Check if value isn't undefined
* @param value
*/
function isNotUndefined(value) {
    return !isUndefined(value);
}

/**
* Check if value is a boolean
* @param value
* @return boolean
*/
function isBoolean(value) {
    if (isNullOrUndefined(value) || typeof value !== BOOLEAN) {
        debug("util.isBoolean => value isn't a boolean.");
        return false;
    }
    debug("util.isBoolean => value is a boolean.");
    return true;
}

/**
* Check if value isn't a boolean
* @param value
* @return boolean
*/
function isNotBoolean(value) {
    return !isBoolean(value);
}

/**
* Check if value is a number
* @param value
* @return boolean
*/
function isNumber(value) {
    if (isNullOrUndefined(value) || typeof value !== NUMBER) {
        debug("util.isNumber => value isn't a number.");
        return false;
    }
    debug("util.isNumber => value is a number.");
    return true;
}

/**
* Check if value isn't a number
* @param value
* @return boolean
*/
function isNotNumber(value) {
    return !isNumber(value);
}

/**
* Check if is a string value
* @param value
* @return boolean
*/
function isString(value) {
    if (isNullOrUndefined(value) || typeof value !== STRING) {
        debug("util.isString => value isn't a string.");
        return false;
    }
    debug("util.isString => value is a string.");
    return true;
}

/**
* Check if isn't a string value
* @param value
* @return boolean
*/
function isNotString(value) {
    return !isString(value);
}

/**
* Check if is an object value
* Caution : array is not object !
* @param value
* @return boolean
*/
function isObject(value) {
    if (isNullOrUndefined(value) || typeof value !== OBJECT || isArray(value)) {
        debug("util.isObject => value isn't an object.");
        return false;
    }
    debug("util.isObject => value is an object.");
    return true;
}

/**
* Check if isn't an object value
* Caution : array is not object !
* @param value
* @return boolean
*/
function isNotObject(value) {
    return !isObject(value);
}

/**
* Check if is an array value
* @param value
* @return boolean
*/
function isArray(value) {
    if (isNullOrUndefined(value) || !Array.isArray(value)) {
        debug("util.isArray => value isn't an array.");
        return false;
    }
    debug("util.isArray => value is an array.");
    return true;
}

/**
* Check if isn't an array value
* @param value
* @return boolean
*/
function isNotArray(value) {
    return !isArray(value);
}

/**
* Check if is a function value
* @param value
* @return boolean
*/
function isFunction(value) {
    if (isNullOrUndefined(value) || typeof value !== FUNCTION) {
        debug("util.isFunction => value isn't a function.");
        return false;
    }
    debug("util.isFunction => value is a function.");
    return true;
}

/**
* Check if isn't a function value
* @param value
* @return boolean
*/
function isNotFunction(value) {
    return !isFunction(value);
}

/**
* Get type name of value
* @param value
* @return String (type name)
* @exception if type is unknow
*/
function getType(value) {
    if (isUndefined(value)) {
        debug("util.getType => value is " + UNDEFINED + ".");
        return UNDEFINED;
    }
    if (isNull(value)) {
        debug("util.getType => value is " + NULL + ".");
        return NULL;
    }
    if (isBoolean(value)) {
        debug("util.getType => value is " + BOOLEAN + ".");
        return BOOLEAN;
    }
    if (isNumber(value)) {
        debug("util.getType => value is " + NUMBER + ".");
        return NUMBER;
    }
    if (isString(value)) {
        debug("util.getType => value is " + STRING + ".");
        return STRING;
    }
    if (isObject(value)) {
        debug("util.getType => value is " + OBJECT + ".");
        return OBJECT;
    }
    if (isArray(value)) {
        debug("util.getType => value is " + ARRAY + ".");
        return ARRAY;
    }
    if (isFunction(value)) {
        debug("util.getType => value is " + FUNCTION + ".");
        return FUNCTION;
    }
    error("util.getType => type unknow.");
    throw new Error("util.getType => type unknow.");
}

/*====================================================================================
*                                   methodes debug
*=====================================================================================*/
/**
* enable/disable mode debug
* @param modeDebug
* @exception NOT_BOOLEAN_EXCEPTION
*/
function modeDebug(isModeDebug) {
    notBooleanException(isModeDebug, "isModeDebug must be a boolean value (util.modeDebug)");
    isModeDebug = isModeDebug;
}

/**
* write in console debug
* @param message
*/
function debug(message) {
    if (isModeDebug) {
        console.log("DEBUG " + message);
    }
}

/**
* write in console error
* @param message
*/
function error(message) {
    console.error("ERROR " + message);
}

module.exports.UNDEFINED = UNDEFINED;
module.exports.NULL = NULL;
module.exports.BOOLEAN = BOOLEAN;
module.exports.NUMBER = NUMBER;
module.exports.STRING = STRING;
module.exports.OBJECT = OBJECT;
module.exports.ARRAY = ARRAY;
module.exports.FUNCTION = FUNCTION;

module.exports.ARGUMENT_EXCEPTION = ARGUMENT_EXCEPTION;
module.exports.NULL_OR_UNDEFINED_EXCEPTION = NULL_OR_UNDEFINED_EXCEPTION;
module.exports.NOT_NULL_OR_UNDEFINED_EXCEPTION = NOT_NULL_OR_UNDEFINED_EXCEPTION;
module.exports.NULL_EXCEPTION = NULL_EXCEPTION;
module.exports.NOT_NULL_EXCEPTION = NOT_NULL_EXCEPTION;
module.exports.UNDEFINED_EXCEPTION = UNDEFINED_EXCEPTION;
module.exports.NOT_UNDEFINED_EXCEPTION = NOT_UNDEFINED_EXCEPTION;
module.exports.BLANK_EXCEPTION = BLANK_EXCEPTION;
module.exports.NOT_BLANK_EXCEPTION = NOT_BLANK_EXCEPTION;
module.exports.EMPTY_EXCEPTION = EMPTY_EXCEPTION;
module.exports.NOT_EMPTY_EXCEPTION = NOT_EMPTY_EXCEPTION;
module.exports.BOOLEAN_EXCEPTION = BOOLEAN_EXCEPTION;
module.exports.NOT_BOOLEAN_EXCEPTION = NOT_BOOLEAN_EXCEPTION;
module.exports.NUMBER_EXCEPTION = NUMBER_EXCEPTION;
module.exports.NOT_NUMBER_EXCEPTION = NOT_NUMBER_EXCEPTION;
module.exports.STRING_EXCEPTION = STRING_EXCEPTION;
module.exports.NOT_STRING_EXCEPTION = NOT_STRING_EXCEPTION;
module.exports.OBJECT_EXCEPTION = OBJECT_EXCEPTION;
module.exports.NOT_OBJECT_EXCEPTION = NOT_OBJECT_EXCEPTION;
module.exports.ARRAY_EXCEPTION = ARRAY_EXCEPTION;
module.exports.NOT_ARRAY_EXCEPTION = NOT_ARRAY_EXCEPTION;
module.exports.FUNCTION_EXCEPTION = FUNCTION_EXCEPTION;
module.exports.NOT_FUNCTION_EXCEPTION = NOT_FUNCTION_EXCEPTION;

module.exports.argumentException = argumentException;
module.exports.nullOrUndefinedException = nullOrUndefinedException;
module.exports.notNullOrUndefinedException = notNullOrUndefinedException;
module.exports.nullException = nullException;
module.exports.notNullException = notNullException;
module.exports.undefinedException = undefinedException;
module.exports.notUndefinedException = notUndefinedException;
module.exports.blankException = blankException;
module.exports.notBlankException = notBlankException;
module.exports.emptyException = emptyException;
module.exports.notEmptyException = notEmptyException;
module.exports.booleanException = booleanException;
module.exports.notBooleanException = notBooleanException;
module.exports.numberException = numberException;
module.exports.notNumberException = notNumberException;
module.exports.stringException = stringException;
module.exports.notStringException = notStringException;
module.exports.objectException = objectException;
module.exports.notObjectException = notObjectException;
module.exports.arrayException = arrayException;
module.exports.notArrayException = notArrayException;
module.exports.functionException = functionException;
module.exports.notFunctionException = notFunctionException;

module.exports.isNullOrUndefined = isNullOrUndefined;
module.exports.isNotNullOrUndefined = isNotNullOrUndefined;
module.exports.isBlank = isBlank;
module.exports.isNotBlank = isNotBlank;
module.exports.isEmpty = isEmpty;
module.exports.isNotEmpty = isNotEmpty;
module.exports.oneIsEmpty = oneIsEmpty;
module.exports.isEquals = isEquals;
module.exports.oneIsEquals = oneIsEquals;
module.exports.contain = contain;
module.exports.noContain = noContain;
module.exports.clone = clone;

module.exports.isNull = isNull;
module.exports.isNotNull = isNotNull;
module.exports.isUndefined = isUndefined;
module.exports.isNotUndefined = isNotUndefined;
module.exports.isBoolean = isBoolean;
module.exports.isNotBoolean = isNotBoolean;
module.exports.isNumber = isNumber;
module.exports.isNotNumber = isNotNumber;
module.exports.isString = isString;
module.exports.isNotString = isNotString;
module.exports.isObject = isObject;
module.exports.isNotObject = isNotObject;
module.exports.isArray = isArray;
module.exports.isNotArray = isNotArray;
module.exports.isFunction = isFunction;
module.exports.isNotFunction = isNotFunction;
module.exports.getType  = getType;

module.exports.modeDebug = modeDebug;
module.exports.debug = debug;
module.exports.error = error;
