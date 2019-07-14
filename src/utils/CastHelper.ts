import * as ValidateHelper from "./ValidateHelper";
import * as ExceptionHelper from "./ExceptionHelper";
import OffsetProfile from "../core/type/OffsetProfile";
import * as TypeHelper from "./TypeHelper";
import * as Consts from "../core/enum/Consts";

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

/**
 * 位置转换
 * @param obj 位置参数
 * @param width 宽度
 * @param height 高度
 * @returns cast 
 */
export function positionCast(obj: any, width: number, height: number): [number, number] {
    if (!obj) return [(innerWidth - width) / 2, (innerHeight - height) / 2];
    // 如果是[left,top]格式
    if (TypeHelper.isOffsetArray(obj)) {
        const [left, top] = obj;
        return [left, top];
    }

    const isPosition = TypeHelper.isPositionType(obj);
    if (isPosition) {
        const coordinate: [number, number] = [0, 0];
        switch (obj) {
            case Consts.Position.LEFT_TOP:
                break;
            case Consts.Position.LEFT_CENTER:
                coordinate[0] = 0;
                coordinate[1] = (innerHeight - height) / 2;
                break;
            case Consts.Position.LEFT_BOTTOM:
                coordinate[0] = 0;
                coordinate[1] = innerHeight - height;
                break;
            case Consts.Position.TOP_CENTER:
                coordinate[0] = (innerWidth - width) / 2;
                coordinate[1] = 0;
                break;
            case Consts.Position.CENTER:
                coordinate[0] = (innerWidth - width) / 2;
                coordinate[1] = (innerHeight - height) / 2;
                break;
            case Consts.Position.BOTTOM_CENTER:
                coordinate[0] = (innerWidth - width) / 2;
                coordinate[1] = innerHeight - height;
                break;
            case Consts.Position.RIGHT_TOP:
                coordinate[0] = innerWidth - width;
                coordinate[1] = 0;
                break;
            case Consts.Position.RIGHT_CENTER:
                coordinate[0] = innerWidth - width;
                coordinate[1] = (innerHeight - height) / 2;
                break
            case Consts.Position.RIGHT_BOTTOM:
                coordinate[0] = innerWidth - width;
                coordinate[1] = innerHeight - height;
                break;
        }
        return coordinate;
    }

    return ExceptionHelper.assertNever(obj);
}