"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("../exception/exception");
var base_validator_1 = require("./base-validator");
var object_helper_1 = require("../util/object-helper");
function propertyValidator(setHandler, typeValidator) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: function () { return value; },
            set: function (newValue) {
                if (typeValidator)
                    typeValidator(newValue, propertyKey);
                value = setHandler(newValue, propertyKey, value);
            }
        });
    };
}
function isNumber(allowMinus) {
    if (allowMinus === void 0) { allowMinus = true; }
    return propertyValidator(function (newValue) {
        if (allowMinus)
            return newValue;
        else {
            if (newValue === Math.abs(newValue))
                return newValue;
            else
                exception_1.validateFail("\u53EA\u80FD\u4F20\u5165\u6B63\u5B9E\u6570");
        }
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "number"); });
}
exports.isNumber = isNumber;
function min(minValue) {
    return propertyValidator(function (newValue) {
        if (newValue >= minValue)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5C0F\u4E8E `" + minValue + "`");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "number"); });
}
exports.min = min;
function max(maxValue) {
    return propertyValidator(function (newValue) {
        if (newValue <= maxValue)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5927\u4E8E `" + maxValue + "`");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "number"); });
}
exports.max = max;
function length(minValue, maxValue) {
    return propertyValidator(function (newValue) {
        var valueLength = newValue.length;
        if (valueLength >= minValue && valueLength <= maxValue)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u957F\u5EA6\u4E0D\u5728 `[" + minValue + "," + maxValue + "]` \u533A\u95F4");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "string"); });
}
exports.length = length;
function match(reg) {
    return propertyValidator(function (newValue) {
        if (reg.test(newValue))
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F `" + reg + "`");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "string"); });
}
exports.match = match;
function options() {
    var enumValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        enumValues[_i] = arguments[_i];
    }
    return propertyValidator(function (newValue) {
        if (enumValues.indexOf(newValue) > -1)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u5728\u53EF\u9009\u503C `[" + enumValues.toString() + "]` \u5185");
    });
}
exports.options = options;
function noEmptyOrNull() {
    return propertyValidator(function (newValue, propertyKey) {
        if (newValue.trim().length > 0)
            return newValue;
        else
            exception_1.validateFail("`" + propertyKey.toString() + "` \u4E0D\u5141\u8BB8\u4E3A\u7A7A\u5B57\u7B26\u6216null");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "string"); });
}
exports.noEmptyOrNull = noEmptyOrNull;
function jsonObjectOrBooleanMerge(keyValidator) {
    if (keyValidator === void 0) { keyValidator = {}; }
    return propertyValidator(function (newValue, propertyKey, oldValue) {
        if (newValue === undefined || newValue === true)
            return oldValue;
        if (newValue === false)
            return false;
        base_validator_1.jsonObjectValidator(newValue);
        return object_helper_1.merge((oldValue !== null && oldValue !== void 0 ? oldValue : {}), newValue);
    });
}
exports.jsonObjectOrBooleanMerge = jsonObjectOrBooleanMerge;
//# sourceMappingURL=property-validator.js.map