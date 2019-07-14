import * as Consts from "../core/enum/Consts";
import * as ExceptionHelper from "./ExceptionHelper";
import OffsetProfile from "../core/type/OffsetProfile";

/**
 * 是否是动画类型
 * @param obj 对象
 * @returns boolean结果
 */
export function isAnimateType(obj: any): obj is Consts.Animate {
    switch (obj) {
        case Consts.Animate.ZOOM:
            return true;
        default:
            return false;
    }
}

/**
 * 是否是呈现类型
 * @param obj 对象
 * @returns boolean结果
 */
export function isPresentMode(obj: any): obj is Consts.PresentMode {
    switch (obj) {
        case Consts.PresentMode.EMBED:
        case Consts.PresentMode.FLOAT:
            return true;
        default:
            return false;
    }
}

/**
 * 是否是位置类型
 * @param obj 对象
 * @returns position type 
 */
export function isPositionType(obj: any): obj is Consts.Position {
    switch (obj) {
        case Consts.Position.LEFT_TOP:
        case Consts.Position.LEFT_CENTER:
        case Consts.Position.LEFT_BOTTOM:
        case Consts.Position.TOP_CENTER:
        case Consts.Position.BOTTOM_CENTER:
        case Consts.Position.CENTER:
        case Consts.Position.RIGHT_TOP:
        case Consts.Position.RIGHT_CENTER:
        case Consts.Position.RIGHT_BOTTOM:
            return true;
        default:
            return false;
    }
}

/**
 * 是否是偏移数组
 * @param obj 对象
 * @returns offset array 
 */
export function isOffsetArray(obj: any): obj is [number, number] {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}