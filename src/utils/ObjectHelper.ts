import { JsonObject } from "../typings/Index";

export function isJsonObject(target: any): boolean {
    return typeof target === "object" && target.constructor === Object;
}

export function clone<T extends JsonObject>(source: T): T {
    const newT = <T>{};
    for (const key of Object.keys(source)) {
        newT[key] = isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newT;
}

export function merge<T extends JsonObject>(source: T, dest: T): T {
    const target: T = clone(source);
    for (const key of Object.keys(dest)) {
        if (target[key] === undefined || !isJsonObject(dest[key])) {
            target[key] = dest[key];
            continue;
        }
        target[key] = merge(target[key], dest[key]);
    }
    return target;
}

export function leastOneTrue<T extends JsonObject>(obj: { [key in keyof T]: boolean; } | boolean | undefined): boolean {
    if (obj === undefined) return false;
    if (typeof obj === "boolean") return obj;

    let flag = false;
    for (const key of Object.keys(obj)) {
        if (obj[key] === true) {
            flag = true;
            break;
        }
    }
    return flag;
}

export function reverseBooleanObject<T extends JsonObject>(source: { [key in keyof T]: boolean; }): T {
    const target: T = <T>{};
    for (const key of Object.keys(source)) {
        target[key] = !source[key];
    }
    return target;
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}