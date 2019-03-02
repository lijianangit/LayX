import { WindowCoord } from "../../types";

export function isWindowCoord(obj: any): obj is WindowCoord {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}