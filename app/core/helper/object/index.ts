import { checkJSONObject } from '../../validator';
import { JSONObject } from '../../validator/type';

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