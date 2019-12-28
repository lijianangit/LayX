"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("../exception/exception");
function baseTypeValidator(value, type) {
    var cnType = "";
    switch (type) {
        case "number":
            cnType = "数字";
            break;
        case "string":
            cnType = "字符串";
            break;
        case "function":
            cnType = "函数";
            break;
        case "array":
            cnType = "数组";
            break;
        default: exception_1.error("存在未识别基础类型");
    }
    if ((type !== "array" && typeof value !== type) ||
        (type === "array" && !Array.isArray(value))) {
        exception_1.validateFail("`" + value + "` \u4E0D\u662F\u4E00\u4E2A\u6B63\u786E\u7684" + cnType + "\u7C7B\u578B");
    }
}
exports.baseTypeValidator = baseTypeValidator;
//# sourceMappingURL=base-validator.js.map