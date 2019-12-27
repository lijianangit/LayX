"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = require("../exception/Exception");
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
        default: Exception_1.error("存在未识别基础类型");
    }
    if (typeof value !== type)
        Exception_1.validateFail("`" + value + "` \u4E0D\u662F\u4E00\u4E2A\u6B63\u786E\u7684" + cnType + "\u7C7B\u578B");
}
exports.baseTypeValidator = baseTypeValidator;
//# sourceMappingURL=BaseValidator.js.map