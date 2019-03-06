import * as Types from "../../types";
import { isJsonObject } from "./TypeHelper";

export function clone(source: Types.JsonObject): Types.JsonObject {
    const newObject: Types.JsonObject = {};
    for (const key of Object.keys(source)) {
        newObject[key] = isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newObject;
}

export function merge(source: Types.JsonObject, dest: Types.JsonObject): Types.JsonObject {
    const newObject: Types.JsonObject = clone(source);
    for (const key of Object.keys(dest)) {
        if (newObject[key] === undefined || !isJsonObject(dest[key])) {
            newObject[key] = dest[key];
            continue;
        }
        newObject[key] = merge(newObject[key], dest[key]);
    }
    return newObject;
}