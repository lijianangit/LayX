"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = require("../exception/Exception");
var BaseValidator_1 = require("./BaseValidator");
function propertyValidator(setHandler, typeValidator) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: function () { return value; },
            set: function (newValue) {
                if (typeValidator)
                    typeValidator(newValue);
                value = setHandler(newValue);
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
                Exception_1.validateFail("\u53EA\u80FD\u4F20\u5165\u6B63\u5B9E\u6570");
        }
    }, function (newValue) { return BaseValidator_1.baseTypeValidator(newValue, "number"); });
}
exports.isNumber = isNumber;
function min(minValue) {
    return propertyValidator(function (newValue) {
        if (newValue >= minValue)
            return newValue;
        else
            Exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5C0F\u4E8E `" + minValue + "`");
    }, function (newValue) { return BaseValidator_1.baseTypeValidator(newValue, "number"); });
}
exports.min = min;
function max(maxValue) {
    return propertyValidator(function (newValue) {
        if (newValue <= maxValue)
            return newValue;
        else
            Exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5927\u4E8E `" + maxValue + "`");
    }, function (newValue) { return BaseValidator_1.baseTypeValidator(newValue, "number"); });
}
exports.max = max;
function length(minValue, maxValue) {
    return propertyValidator(function (newValue) {
        var valueLength = newValue.length;
        if (valueLength >= minValue && valueLength <= maxValue)
            return newValue;
        else
            Exception_1.validateFail("`" + newValue + "` \u957F\u5EA6\u4E0D\u5728 `[" + minValue + "," + maxValue + "]` \u533A\u95F4");
    }, function (newValue) { return BaseValidator_1.baseTypeValidator(newValue, "string"); });
}
exports.length = length;
function match(reg) {
    return propertyValidator(function (newValue) {
        if (reg.test(newValue))
            return newValue;
        else
            Exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F `" + reg + "`");
    }, function (newValue) { return BaseValidator_1.baseTypeValidator(newValue, "string"); });
}
exports.match = match;
//# sourceMappingURL=PropertyValidator.js.map