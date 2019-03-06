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

export function isJsonObject(obj: any): obj is Types.JsonObject {
    return typeof obj === "object"
        && obj.constructor !== undefined
        && obj.constructor === Object;
}

export function isContextMenu(obj: any): obj is Types.ContextMenuOptions {
    return isJsonObject(obj)
        && obj.id !== undefined
        && obj.label !== undefined;
}

export function isContextMenus(obj: Array<any>): obj is Array<Types.ContextMenuOptions> {
    let correct: boolean = true;
    for (const item of obj) {
        if (!isContextMenu(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}
