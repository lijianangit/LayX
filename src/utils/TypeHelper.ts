import * as Types from "../../types";
import * as ExceptionHelper from "./ExceptionHelper";
import * as Enums from "../basic/enums";

export function isWindowCoord(obj: any): obj is Types.WindowCoord {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}

export function isWindowMode(obj: any): obj is Enums.WindowMode {
    let isSelf: boolean = false;
    switch (obj) {
        case Enums.WindowMode.LAYER:
        case Enums.WindowMode.EMBED:
            return true;
        default:
            return ExceptionHelper.assertNever(<never>obj);
    }
    return isSelf;
}

export function isWindowAnimate(obj: any): obj is Enums.WindowAnimate {
    let isSelf: boolean = false;
    switch (obj) {
        case Enums.WindowAnimate.NONE:
        case Enums.WindowAnimate.ZOOM:
            return true;
        default:
            return ExceptionHelper.assertNever(<never>obj);
    }
    return isSelf;
}

export function isJsonObject(obj: any): obj is Types.JsonObject {
    return typeof obj === "object"
        && obj.constructor !== undefined
        && obj.constructor === Object;
}

export function isContextMenu(obj: any): obj is Types.ContextMenuOption {
    return isJsonObject(obj)
        && obj.id !== undefined
        && obj.label !== undefined;
}

export function isContextMenus(obj: Array<any>): obj is Array<Types.ContextMenuOption> {
    let correct: boolean = true;
    for (const item of obj) {
        if (!isContextMenu(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}

export function isResizeOptions(obj: any): obj is Types.ResizeOption {
    if (typeof obj === "boolean") return true;

    return isJsonObject(obj) &&
        (
            obj.left !== undefined ||
            obj.right !== undefined ||
            obj.top !== undefined ||
            obj.bottom !== undefined ||
            obj.leftTop !== undefined ||
            obj.rightTop !== undefined ||
            obj.leftBottom !== undefined ||
            obj.rightBottom !== undefined
        );
}

export function isActionButton(obj: any): obj is Types.ActionButtonOption {
    return isJsonObject(obj)
        && obj.id !== undefined;
}

export function isActionButtons(obj: Array<any>): obj is Array<Types.ActionButtonOption> {
    let correct: boolean = true;
    for (const item of obj) {
        if (!isActionButton(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}