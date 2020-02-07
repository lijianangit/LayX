import { parameterInvalid } from '../../exception';
import { removeIllegalCharacter } from '../../helper/string';
import { JSONObject } from '../../type';
import { checkJSONObject, checkNoEmptyOrNull, checkNoNullOrUndefined } from '../../validator';

export function cloneJSONObject<T extends JSONObject>(source: T): T {
    const newJSONObject = <any>{};

    for (const key in source) {
        const keyValue = source[key];
        newJSONObject[key] = checkJSONObject(keyValue)
            ? cloneJSONObject(keyValue) : keyValue;
    }
    return <T>newJSONObject;
}

export function mergeJSONObject<T extends JSONObject>(source: T, dest: T): T {
    const newJSONObject = cloneJSONObject<any>(source);

    for (const key in dest) {
        const keyValue = dest[key];
        newJSONObject[key] = checkJSONObject(newJSONObject[key]) && checkJSONObject(keyValue)
            ? mergeJSONObject(newJSONObject[key], keyValue) : keyValue;
    }
    return <T>newJSONObject;
}

export function readObject<T>(path: string, defaultValue: T, startObject: JSONObject, fixKey?: string): T {
    if (!checkNoEmptyOrNull(path) || !checkJSONObject(startObject)) parameterInvalid();

    path = removeIllegalCharacter(path);
    if (path.indexOf("/") === -1) {
        if (fixKey) {
            if (checkJSONObject(startObject[fixKey])) return startObject[fixKey][path] ?? defaultValue;
            else return defaultValue;
        }
        return startObject[path] ?? defaultValue
    };

    const keys = path.split("/");
    let keyValue = readObject(keys[0], defaultValue, startObject, fixKey);
    if (!checkNoNullOrUndefined(keyValue)) return defaultValue;

    for (let i = 0; i < keys.length; i++) {
        if (i + 1 >= keys.length) break;
        keyValue = readObject(keys[i + 1], defaultValue, keyValue, fixKey);
    }
    return keyValue;
}

export function arraySetToFirst(arr: Array<any>, ele: any): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            arr.splice(i, 1);
            break;
        }
    }
    arr.unshift(ele);
}

export function arrayRemove(arr: Array<any>, ele: any): void {
    arr.splice(arr.indexOf(ele), 1);
}