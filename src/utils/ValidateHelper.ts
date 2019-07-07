/**
 * 判断对象是否是字符串类型，并且不为NULL或空字符串
 * @param obj 对象
 * @returns bool 结果
 */
export function isStringAndNotEmptyOrNull(obj: any): obj is string {
    return obj
        && typeof obj === "string"
        && obj.trim().length > 0;
}