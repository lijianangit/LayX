import * as ValidateHelper from "./ValidateHelper";
import * as ExceptionHelper from "./ExceptionHelper";

/**
 * 字符串转换
 * @param obj 对象
 * @returns 转换后的字符串 
 */
export function stringCast(obj: any): string {
    if (!ValidateHelper.isStringAndNotEmptyOrNull(obj)) {
        return ExceptionHelper.assertString(obj);
    }

    return obj;
}

/**
 * 字符串或undefined转换
 * @param obj 对象
 * @returns 转换后的字符串
 */
export function stringOrUndefinedCast(obj: any): string | undefined {
    if (obj === undefined) return obj;

    return stringCast(obj);
}

/**
 * 数字或undefined转换
 * @param obj 对象
 * @returns 转换后的数字
 */
export function numberOrUndefinedCast(obj: any): number | undefined {
    if (obj === undefined) return obj;
    if (typeof obj === "number") return obj;
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(obj)) {
        return Number(obj);
    }

    return ExceptionHelper.assertNumber(obj);
}
