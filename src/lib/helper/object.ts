import { invalidParameter } from '../exception';
import { JSONObject } from '../type';
import { assertJSONObject } from '../verification';

export function clone<T extends JSONObject>(obj: T): T {
    if (!assertJSONObject(obj)) invalidParameter("The parameter `obj` isn't json data.");

    return JSON.parse(JSON.stringify(obj)) as T;
}

export function merge<T extends JSONObject, K extends JSONObject>(source: T, dest: K = <K>{}): JSONObject {
    if (!assertJSONObject(source) || !assertJSONObject(dest)) invalidParameter("All parameteres must be json data.");

    const newObj = clone<T>(source) as JSONObject;
    Object.keys(dest).forEach(key => {
        const destValue = dest[key];
        const newbValue = newObj[key];
        newObj[key] = assertJSONObject(newbValue) && assertJSONObject(destValue) ?
            merge(newbValue, destValue) : destValue;
    });

    return newObj;
}