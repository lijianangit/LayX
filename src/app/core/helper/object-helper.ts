import { checkJSONObject } from "../validator";
import { JSONObject } from "./type";

/**
 * 克隆JSON对象
 * @param source 原JSON类型对象
 * @returns 克隆后的JSON类型对象
 */
export function cloneJSONObject<T extends JSONObject>(source: T): T {
    const newObject = <any>{};

    for (const key of Object.keys(source)) {
        newObject[key] = checkJSONObject(source[key]) ? cloneJSONObject(source[key]) : source[key];
    }
    return newObject as T;
}

/**
 * 合并JSON对象
 * @param source 源JSON类型对象
 * @param dest 目标JSON类型对象
 * @returns 合并后的JSON类型对象
 */
export function mergeJSONObject<T extends JSONObject>(source: T, dest: T): T {
    const newObject = <any>cloneJSONObject(source);

    for (const key of Object.keys(dest)) {
        if (newObject[key] === undefined || !checkJSONObject(dest[key])) {
            newObject[key] = dest[key];

            continue;
        }
        newObject[key] = mergeJSONObject(newObject[key], dest[key]);
    }
    return newObject as T;
}
