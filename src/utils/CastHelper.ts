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