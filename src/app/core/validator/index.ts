import { CanTypeof, ValueOption } from "./type";

/**
 * 检查能够被 typeof 的类型
 * @param data 数据
 * @param typeNames 类型集合
 * @returns boolean 
 */
export function checkOfType(data: any, ...typeNames: Array<CanTypeof>): boolean {
    return typeNames.indexOf(typeof data) > -1;
}

/**
 * 检查是否是整数类型
 * @param data 数据
 * @returns boolean 
 */
export function checkInt(data: any): boolean {
    return checkOfType(data, "number") && (/^\-?[0-9]+$/.test(data));
}

/**
 * 检查是否是正整数类型
 * @param data 数据
 * @returns boolean 
 */
export function checkPstInt(data: any): boolean {
    return checkInt(data) && data >= 0;
}

/**
 * 检查是否是正数值类型
 * @param data 数据
 * @returns boolean 
 */
export function checkPstNumber(data: any): boolean {
    return checkOfType(data, "number") && data >= 0;
}

/**
 * 检查是否是JSON对象类型
 * @param data 数据
 * @returns boolean 
 */
export function checkJSONObject(data: any): boolean {
    return checkOfType(data, "object") &&
        Object.prototype.toString.call(data).toLowerCase() === "[object object]" &&
        !data.length;
}

/**
 * 检查是否是数组对象类型
 * @param data 数据
 * @returns boolean 
 */
export function checkArray(data: any): boolean {
    return Array.isArray(data);
}

/**
 * 检查是否是指定类型数组对象类型
 * @param data 数据
 * @param checkItem 数组项检查函数
 * @returns boolean 
 */
export function checkArrayEachSame(data: any, checkItem: (item: any) => boolean): boolean {
    if (!Array.isArray(data)) return false;
    if (data.length === 0) return true;

    let isSameArray = true;
    for (const item of data) {
        if (!checkItem(item)) {
            isSameArray = false;
            break;
        }
    }

    return isSameArray;
}

/**
 * 检查字符串是否包含指定字符
 * @param data 数值
 * @param character 字符
 * @returns boolean 
 */
export function checkContains(data: any, character: string): boolean {
    return checkOfType(data, "string") && data.indexOf(character) > -1;
}

/**
 * 检查是否是指定可选值类型
 * @param data 数据
 * @param valueOptions 可选值
 * @returns boolean
 */
export function checkInValueOptions(data: any, ...valueOptions: ValueOption): boolean {
    return checkOfType(data, "boolean", "number", "string", "undefined", "object") && valueOptions.indexOf(data) > -1;
}

/**
 * 检查字符串长度是否满足最小长度
 * @param data 数据
 * @param threshold 阈值
 * @returns boolean 
 */
export function checkMinLength(data: any, threshold: number): boolean {
    return checkOfType(data, "string") && data.length >= threshold;
}

/**
 * 检查字符串长度是否满足最大长度
 * @param data 数据
 * @param threshold 阈值
 * @returns boolean 
 */
export function checkMaxLength(data: any, threshold: number): boolean {
    return checkOfType(data, "string") && data.length <= threshold;
}

/**
 * 检查字符串长度是否满足区间长度
 * @param data 数据
 * @param minThreshold 最小阈值
 * @param maxThreshold 最大阈值
 * @returns boolean 
 */
export function checkLength(data: any, minThreshold: number, maxThreshold: number): boolean {
    return checkMinLength(data, minThreshold) && checkMaxLength(data, maxThreshold);
}

/**
 * 检查数值是否大于某个值
 * @param data 数据
 * @param threshold 阈值
 * @returns boolean 
 */
export function checkMin(data: any, threshold: number): boolean {
    return checkOfType(data, "number") && data >= threshold;
}

/**
 * 检查数值是否小于某个值
 * @param data 数据
 * @param threshold 阈值
 * @returns boolean 
 */
export function checkMax(data: any, threshold: number): boolean {
    return checkOfType(data, "number") && data <= threshold;
}

/**
 * 检查数值是否在某个区间内
 * @param data 数据
 * @param minThreshold 最小阈值
 * @param maxThreshold 最大阈值
 * @returns boolean 
 */
export function checkRange(data: any, minThreshold: number, maxThreshold: number): boolean {
    return checkMin(data, minThreshold) && checkMax(data, maxThreshold);
}

/**
 * 检查空或NULL字符串
 * @param data 数值
 * @returns boolean 
 */
export function checkEmptyOrNull(data: any): boolean {
    return data === null || (checkOfType(data, "string") && data.length === 0);
}

/**
 * 检查非空或非NULL字符串
 * @param data 数值
 * @returns boolean 
 */
export function checkNoEmptyOrNull(data: any): boolean {
    return checkOfType(data, "string") && data.length > 0;
}

/**
 * 检查是否是正则表达式
 * @param data 数值
 * @returns boolean 
 */
export function checkRegExp(data: any): boolean {
    return data instanceof RegExp;
}

/**
 * 检查是否是颜色值
 * @param data 数值
 * @returns boolean 
 */
export function checkColor(data: any): boolean {
    var binaryReg = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    var rgbRex = /^rgb\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\)$/i;
    var rgbaRex = /^rgba\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,(1|1.0|0.[0-9])\)$/i;

    return binaryReg.test(data) || rgbRex.test(data) || rgbaRex.test(data);
}