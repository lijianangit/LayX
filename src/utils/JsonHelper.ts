import * as Types from "../../types";
import * as TypeHelper from "./TypeHelper";

export function clone<T extends Types.JsonObject>(source: T): T {
    const newObject: T = <T>{};
    for (const key of Object.keys(source)) {
        (<any>newObject)[key] = TypeHelper.isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newObject;
}

export function merge<T extends Types.JsonObject>(source: T, dest: T): T {
    const newObject: T = clone(source);
    for (const key of Object.keys(dest)) {
        if (newObject[key] === undefined || !TypeHelper.isJsonObject(dest[key])) {
            (<any>newObject)[key] = dest[key];
            continue;
        }
        (<any>newObject)[key] = merge(newObject[key], dest[key]);
    }
    return newObject;
}