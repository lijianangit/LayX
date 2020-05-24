import { invalidParameter } from '../exception';
import { includes } from '../helper/array';
import { ClassConstructor, JSONObject } from '../type';

export type TypeofType = "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined";
export type ValueType = number | string | boolean | undefined | null;
export type VerificationObject = { [key: string]: VerificationOf<any>; }
export interface VerificationOf<T> { (data: any): data is T; }

export function assertTypeof<T>(...typeoves: TypeofType[]): VerificationOf<T> {
    return (data => {
        return typeoves.includes(typeof data);
    }) as VerificationOf<T>;
}

export function assertString(data: any): data is string {
    return assertTypeof<string>("string")(data);
}

export function assertBoolean(data: any): data is boolean {
    return assertTypeof<boolean>("boolean")(data);
}

export function assertFalse(data: any): data is false {
    return data === false;
}

export function assertNumber(data: any): data is number {
    return assertTypeof<number>("number")(data);
}

export function assertInt(data: any): data is number {
    return assertNumber(data) &&
        (/^\-?[0-9]+$/.test(`${data}`));
}

export function assertPstInt(data: any): data is number {
    return assertInt(data) &&
        data >= 0;
}

export function assertPstNumber(data: any): data is number {
    return assertNumber(data) &&
        data >= 0;
}

export function assertNoEmptyOrNull(data: any): data is string {
    return assertString(data) &&
        data.length > 0;
}

export function assertFunction<T extends Function>(data: any): data is T {
    return assertTypeof<T>("function")(data);
}

export function assertObject(data: any): data is object {
    return assertTypeof<object>("object")(data);
}

export function assertArray(data: any): data is Array<any> {
    return Array.isArray(data);
}

export function assertNoNullOrUndefined(data: any): boolean {
    return data !== undefined &&
        data !== null;
}

export function assertJSONObject(data: any): data is JSONObject {
    return data !== null &&
        assertObject(data) &&
        !assertArray(data) &&
        Object.prototype.toString.call(data).toLowerCase() === "[object object]";
}

export function checkColor(data: any): data is string {
    if (!assertNoEmptyOrNull(data)) return false;

    const binaryRegExp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    const rgbRegExp = /^rgb\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\)$/i;
    const rgbaRegExp = /^rgba\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,(1|1.0|0.[0-9])\)$/i;

    data = data.trim();
    return binaryRegExp.test(data) ||
        rgbRegExp.test(data) ||
        rgbaRegExp.test(data) ||
        data === "transparent";

}

export function assertInstanceOf<T extends Object>(ctor: ClassConstructor): VerificationOf<T> {
    return (data => {
        return data instanceof ctor;
    }) as VerificationOf<T>;
}

export function assertRegExp(data: any): data is RegExp {
    return assertInstanceOf<RegExp>(RegExp)(data);
}

export function assertMatch(regex: RegExp): VerificationOf<any> {
    return (data => {
        return regex.test(data);
    }) as VerificationOf<any>;
}

export function assertOneOf(...values: Array<ValueType>): VerificationOf<any> {
    return (data => {
        return values.includes(data);
    }) as VerificationOf<any>;
}

export function assertArrayOf<T>(...verifications: Array<VerificationOf<T>>): VerificationOf<Array<T>> {
    return (data => {
        if (!assertArray(data)) return false;
        let pass = true;
        for (const item of data) {
            let vpass = false;
            for (const verification of verifications) {
                if (!assertFunction<VerificationOf<any>>(verification)) invalidParameter("The parameter `verification` isn't function type.");
                vpass = verification(item);
                if (vpass) break;
            }
            pass = vpass;
            if (!pass) break;
        }
        return pass;
    }) as VerificationOf<Array<T>>;
}

export function assertContains(character: string): VerificationOf<string> {
    if (!assertNoEmptyOrNull(character)) invalidParameter("The parameter `character` isn't string type.");
    return (data => {
        return assertNoEmptyOrNull(data) &&
            data.indexOf(character) > -1;
    }) as VerificationOf<string>;
}

export function assertMinLength(threshold: number): VerificationOf<string> {
    return (data => {
        return assertString(data) &&
            data.length >= threshold;
    }) as VerificationOf<string>;
}

export function assertMaxLength(threshold: number): VerificationOf<string> {
    return (data => {
        return assertString(data) &&
            data.length <= threshold;
    }) as VerificationOf<string>;
}

export function assertLength(minThreshold: number, maxThreshold: number): VerificationOf<string> {
    if (minThreshold >= maxThreshold) invalidParameter("The parameter `minThreshold` cannot be greater than the parameter `maxThreshold`.");
    return (data => {
        return assertMinLength(minThreshold)(data) &&
            assertMaxLength(maxThreshold)(data);
    }) as VerificationOf<string>;
}

export function assertMin(threshold: number): VerificationOf<number> {
    return (data => {
        return assertNumber(data) &&
            data >= threshold;
    }) as VerificationOf<number>;
}

export function assertMax(threshold: number): VerificationOf<number> {
    return (data => {
        return assertNumber(data) &&
            data <= threshold;
    }) as VerificationOf<number>;
}

export function assertRange(minThreshold: number, maxThreshold: number): VerificationOf<number> {
    if (minThreshold >= maxThreshold) invalidParameter("The parameter `minThreshold` cannot be greater than the parameter `maxThreshold`.");
    return (data => {
        return assertMin(minThreshold)(data) &&
            assertMax(maxThreshold)(data);
    }) as VerificationOf<number>;
}

export function assertOneOfType(...verifications: Array<(VerificationOf<any>)>): VerificationOf<any> {
    return (data => {
        let pass = true;
        for (const verification of verifications) {
            if (!assertFunction<VerificationOf<any>>(verification)) invalidParameter("The parameter `verification` isn't function type.");
            pass = verification(data);
            if (pass) break;
        }
        return pass;
    }) as VerificationOf<any>;
}

export function assertShape<T>(shape: VerificationObject, exact: boolean = true): VerificationOf<T> {
    return (data => {
        if (!assertJSONObject(data)) invalidParameter("The parameter `data` isn't json object type.");
        if (exact && !includes(Object.keys(shape), Object.keys(data))) invalidParameter("Object has unexpected properties.");
        let pass = true;
        for (const key in shape) {
            const verification = shape[key];
            const value = data[key];
            if (value !== undefined) {
                pass = verification(value);
                if (!pass) break;
            }
        }
        return pass;
    }) as VerificationOf<T>;
}

export function assertAllOf(...verifications: Array<VerificationOf<any>>): VerificationOf<any> {
    return (data => {
        let pass = true;
        for (const verification of verifications) {
            if (!assertFunction<VerificationOf<any>>(verification)) invalidParameter("The parameter `verification` isn't function type.");
            pass = verification(data);
            if (!pass) break;
        }
        return pass;
    }) as VerificationOf<any>;
}