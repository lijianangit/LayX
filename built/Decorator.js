"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(target, propertyKey) {
    var value = target[propertyKey];
    Object.defineProperty(target, propertyKey, {
        get: function () { return value; },
        set: function (newValue) {
            if (newValue.length < 5) {
                value = newValue;
            }
            else {
                throw new Error("错误了");
            }
        }
    });
}
exports.validate = validate;
//# sourceMappingURL=Decorator.js.map