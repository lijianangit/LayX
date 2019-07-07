import * as Consts from "../core/enum/Consts";
import * as ExceptionHelper from "./ExceptionHelper";

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
            return ExceptionHelper.assertNever(obj);
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
            return ExceptionHelper.assertNever(obj);
    }
}