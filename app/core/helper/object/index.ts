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

export function readObject<T>(path: string, defaultValue: T, startObject: JSONObject): T {
    if (!checkNoEmptyOrNull(path) || !checkJSONObject(startObject)) parameterInvalid();

    path = removeIllegalCharacter(path);
    if (path.indexOf("/") === -1) return startObject[path] ?? defaultValue;

    const keys = path.split("/");
    let keyValue = readObject(keys[0], defaultValue, startObject);
    if (!checkNoNullOrUndefined(keyValue)) return defaultValue;

    for (let i = 0; i < keys.length; i++) {
        if (i + 1 >= keys.length) break;
        keyValue = readObject(keys[i + 1], defaultValue, keyValue);
    }
    return keyValue;
}
