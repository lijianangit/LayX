import { parameterInvalid } from '../exception';
import { removeIllegalCharacter } from '../helper/string';
import {
    BaseType, CheckValidator, ColorString, FunctionValidator, IntegerNumber, JSONObject,
    NoEmptyOrNullString, ValueType
} from '../type';

export function checkBaseType(data: any, ...typeNames: BaseType[]): boolean {
    return typeNames.indexOf(typeof data) > -1;
}

export function checkString(data: any): data is string {
    return checkBaseType(data, "string");
}

export function checkBoolean(data: any): data is boolean {
    return checkBaseType(data, "boolean");
}

export function checkNumber(data: any): data is number {
    return checkBaseType(data, "number");
}

export function checkFunction<T>(data: any): data is T {
    return checkBaseType(data, "function");
}

export function checkFunctionValidator(data: any): data is FunctionValidator {
    return checkFunction<CheckValidator>(data) ||
        checkArray(data) && checkFunction<CheckValidator>(data[0]) ||
        checkArray(data) && checkArray(data[0]) && checkFunction<CheckValidator>(data[0][0]);
}

export function checkValidator(data: any, functionValidator: FunctionValidator): boolean {
    let isTrue = true;
    if (checkFunction<CheckValidator>(functionValidator)) {
        if (!functionValidator(data)) isTrue = false;
    }
    else if (checkArray(functionValidator) && checkFunction<CheckValidator>(functionValidator[0])) {
        const [validator, ...args] = functionValidator;
        if (!validator(data, ...args)) isTrue = false;
    }
    else if (checkArray(functionValidator) && checkArray(functionValidator[0]) && checkFunction<CheckValidator>(functionValidator[0][0])) {
        const [childValidator, ...values] = functionValidator;
        if (!checkValidator(data, childValidator) && !checkIn(data, ...values)) isTrue = false;
    }
    else isTrue = false;
    return isTrue;
}

export function checkArray(data: any): data is Array<any> {
    return Array.isArray(data);
}

export function checkArrayEach<T>(data: any, functionValidator: FunctionValidator): data is Array<T> {
    if (!checkArray(data)) return false;
    if (!checkFunctionValidator(functionValidator)) return false;

    let isArrayType = true;
    for (const item of data) {
        isArrayType = checkValidator(item, functionValidator);
        if (!isArrayType) break;
    }
    return isArrayType;
}

export function checkNoNullOrUndefined(data: any): boolean {
    return data !== undefined && data !== null;
}

export function checkObject(data: any): data is object {
    return checkBaseType(data, "object");
}

export function checkJSONObject(data: any): data is JSONObject {
    return data !== null &&
        !checkArray(data) &&
        Object.prototype.toString.call(data).toLowerCase() === "[object object]";
}

export function checkNull(data: any): data is null {
    return data === null;
}

export function checkRegExp(data: any): data is RegExp {
    return data instanceof RegExp;
}

export function checkColor(data: any): data is ColorString {
    data = removeIllegalCharacter(data);
    const binaryRegExp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    const rgbRegExp = /^rgb\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\)$/i;
    const rgbaRegExp = /^rgba\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,(1|1.0|0.[0-9])\)$/i;

    return binaryRegExp.test(data) ||
        rgbRegExp.test(data) ||
        rgbaRegExp.test(data) ||
        data === "transparent";
}

export function checkNoEmptyOrNull(data: any): data is NoEmptyOrNullString {
    return checkString(data)
        && data.length > 0;
}

export function checkInt(data: any): data is IntegerNumber {
    return checkNumber(data) &&
        (/^\-?[0-9]+$/.test(`${data}`));
}

export function checkPstInt(data: any): data is IntegerNumber {
    return checkInt(data)
        && data >= 0;
}

export function checkPstNumber(data: any): data is number {
    return checkNumber(data)
        && data >= 0;
}

export function checkContains(data: any, character: string): boolean {
    if (!checkNoEmptyOrNull(character)) parameterInvalid();

    return checkNoEmptyOrNull(data)
        && data.indexOf(character) > -1;
}

export function checkIn(data: any, ...values: Array<ValueType>) {
    return checkBaseType(data, "boolean", "number", "string", "undefined", "object") &&
        values.indexOf(data) > -1;
}

export function checkMinLength(data: any, threshold: number): boolean {
    return checkString(data) &&
        data.length >= threshold;
}

export function checkMaxLength(data: any, threshold: number): boolean {
    return checkString(data) &&
        data.length <= threshold;
}

export function checkLength(data: any, minThreshold: number, maxThreshold: number): boolean {
    if (minThreshold >= maxThreshold) parameterInvalid();

    return checkMinLength(data, minThreshold) &&
        checkMinLength(data, maxThreshold);
}

export function checkMin(data: any, threshold: number): boolean {
    return checkNumber(data) &&
        data >= threshold;
}

export function checkMax(data: any, threshold: number): boolean {
    return checkNumber(data) &&
        data <= threshold;
}

export function checkRange(data: any, minThreshold: number, maxThreshold: number): boolean {
    if (minThreshold >= maxThreshold) parameterInvalid();

    return checkMin(data, minThreshold) &&
        checkMax(data, maxThreshold);
}

export function checkMatch(data: any, regex: RegExp): boolean {
    return regex.test(data);
}