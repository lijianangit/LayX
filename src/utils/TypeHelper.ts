import { WindowCoord, JsonObject, ContextMenuOptions } from "../../types";
import { WindowMode } from "../basic/enums/WindowMode";
import { assertNever } from "./ExceptionHelper";

export function isWindowCoord(obj: any): obj is WindowCoord {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}

export function isWindowMode(obj: any): obj is WindowMode {
    let isSelf: boolean = false;
    switch (obj) {
        case WindowMode.LAYER:
        case WindowMode.EMBED:
            return true;
        default:
            return assertNever(<never>obj);
    }
    return isSelf;
}

export function isJsonObject(obj: any): obj is JsonObject {
    return typeof obj === "object"
        && obj.constructor !== undefined
        && obj.constructor === Object;
}

export function isContextMenu(obj: any): obj is ContextMenuOptions {
    return isJsonObject(obj)
        && obj.id !== undefined
        && obj.label !== undefined;
}

export function isContextMenus(obj: Array<any>): obj is Array<ContextMenuOptions> {
    let correct: boolean = true;
    for (const item of obj) {
        if (!isContextMenu(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}
