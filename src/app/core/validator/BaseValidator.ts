import { validateFail, error } from "../exception/Exception"

/**
 * 基础类型验证
 * @param value 值
 * @param type 可选类型
 */
export function baseTypeValidator(value: any, type: "number" | "string" | "function") {
    let cnType: string = "";
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
        default: error("存在未识别基础类型");
    }

    if (typeof value !== type) validateFail(`\`${value}\` 不是一个正确的${cnType}类型`);
}
