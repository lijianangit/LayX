import { validateFail, error } from "../exception/exception";


/**
 * 是否是json对象
 * @param value 值
 */
export function isJsonObject(value: any) {
    return typeof (value) == "object" &&
        Object.prototype.toString.call(value).toLowerCase() == "[object object]" &&
        !value.length;
}

/**
 * 基础类型验证
 * @param value 值
 * @param type 可选类型
 */
export function baseTypeValidator(value: any, type: "number" | "string" | "function" | "array") {
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
        case "array":
            cnType = "数组";
            break;
        default: error("存在未识别基础类型");
    }

    if ((type !== "array" && typeof value !== type) ||
        (type === "array" && !Array.isArray(value))) {
        validateFail(`\`${value}\` 不是一个正确的${cnType}类型`);
    }
}

/**
 * JSON对象验证器
 * @param value 值
 */
export function jsonObjectValidator(value: any) {
    if (!isJsonObject(value)) validateFail(`\`${value}\` 不是一个正确的JSON类型`);
}