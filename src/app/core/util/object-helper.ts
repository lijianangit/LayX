import { isJsonObject } from "../validator/base-validator";

/**
 * JSON 类型对象
 */
type JsonObjectType = { constructor: Object;[key: string]: any; };

/**
 * 克隆对象
 * @param source 源对象
 */
export function clone<T extends JsonObjectType>(source: T): T {
    const newObject: T = <T>{};
    for (const key of Object.keys(source)) {
        (<any>newObject)[key] = isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newObject;
}

/**
 * 合并对象
 * @param source 源对象
 * @param dest 目标对象
 */
export function merge<T extends JsonObjectType>(source: T, dest: T): T {
    const newObject: T = clone(source);
    for (const key of Object.keys(dest)) {
        if (newObject[key] === undefined || !isJsonObject(dest[key])) {
            (<any>newObject)[key] = dest[key];
            continue;
        }
        (<any>newObject)[key] = merge(newObject[key], dest[key]);
    }
    return newObject;
}