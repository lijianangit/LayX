import { appError, validateFail } from '../exception';
import { mergeJSONObject } from '../helper/object-helper';
import { JSONObject } from '../helper/type';
import {
    checkArray,
    checkColor,
    checkFunction,
    checkInValueOptions,
    checkJSONObject,
    checkMin,
    checkNoEmptyOrNull,
    checkOfType,
    checkPstInt,
    checkPstNumber,
    checkRegExp,
    checkString,
} from '../validator';
import { ValueOption } from '../validator/type';
import { PropertyDecorator, PropertySetter } from './type';

/**
 * 检查是否是正数值类型
 * @returns PropertyDecorator 
 */
export function isPstNumber(): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkPstNumber(newValue)) validateFail(`"${newValue}" 不是一个有效的正数值类型`);

        return newValue;
    });
}

/**
 * 检查是否是指定可选值类型
 * @param valueOptions 可选值
 * @returns PropertyDecorator 
 */
export function inValueOptions(...valueOptions: ValueOption): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkInValueOptions(newValue, ...valueOptions)) validateFail(`"${newValue}" 不在 [${valueOptions.toString()}] 值范围内`);

        return newValue;
    });
}

/**
 * 检查非空或非NULL字符串
 * @returns PropertyDecorator 
 */
export function isNoEmptyOrNull(): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkNoEmptyOrNull(newValue)) validateFail(`"${newValue}" 不是一个有效的非空字符串`);

        return newValue;
    });
}

/**
 * 检查布尔类型值
 * @returns PropertyDecorator 
 */
export function isBoolean(): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkOfType(newValue, "boolean")) validateFail(`"${newValue}" 不是一个有效的布尔值`);

        return newValue;
    });
}

/**
 * 检查字符串类型值
 * @returns PropertyDecorator 
 */
export function isString(): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkString(newValue)) validateFail(`"${newValue}" 不是一个有效的字符串`);

        return newValue;
    });
}

/**
 * 检查颜色值
 * @returns PropertyDecorator 
 */
export function isColor(): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkColor(newValue)) validateFail(`"${newValue}" 不是一个有效的CSS颜色值`);

        return newValue;
    });
}

/**
 * 检查正整数
 * @returns PropertyDecorator 
 */
export function isPstInt(): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkPstInt(newValue)) validateFail(`"${newValue}" 不是一个有效的正整数`);

        return newValue;
    });
}

/**
 * 检查最小值
 * @param threshold 最小阈值
 * @returns PropertyDecorator
 */
export function min(threshold: number): PropertyDecorator {
    return generateDecorator((newValue) => {
        if (!checkMin(newValue, threshold)) validateFail(`"${newValue}" 必须是数值类型并且值不能小于 "${threshold}"`);

        return newValue;
    });
}

/**
 * 混合验证
 * @param admixes 支持Array|Function|RegExp|{decorator: {},options: []}|任意值，但Object类型只能有一个
 * @returns PropertyDecorator
 */
export function admix(...admixes: Array<any>): PropertyDecorator {
    return generateDecorator((newValue, propertyKey, value) => {
        const valueOptions = [];
        const functionOptions = [];
        const regexOptions = [];
        const decorators = [];

        for (const item of admixes) {
            if (checkOfType(item, "string", "bigint", "boolean", "symbol", "undefined") || item === null) {
                valueOptions.push(item);
            }
            else if (checkArray(item)) {
                valueOptions.push(...<Array<any>>item);
            }
            else if (checkFunction(item)) {
                functionOptions.push(item);
            }
            else if (checkRegExp(item)) {
                regexOptions.push(item);
            }
            else {
                if (decorators.length > 0) appError(`对象验证不能存在多个`);
                decorators.push(item);
            }
        }
        if (checkInValueOptions(newValue, ...valueOptions)) return newValue;

        if (decorators.length > 0) {
            newValue = checkCombine(newValue, decorators[0], ...valueOptions);
        }

        if (!checkJSONObject(newValue)) {
            functionOptions.map(func => {
                if (!func(newValue)) validateFail(`"${newValue}" 不是一个有效的参数值`);
            })
            regexOptions.map(reg => {
                if (!reg.test(newValue)) validateFail(`"${newValue}" 不是一个有效的参数值`);
            })
        }
        else {
            newValue = mergeJSONObject(value ?? {}, newValue);
        }

        return newValue;
    });
}

/**
 * 合并验证核心代码
 * @param newValue 当前值
 * @param jsonDecorator 参数每一项装饰器，支持Array|Function|RegExp|{decorator: {},options: []}
 * @param items 其余可选值，只支持基本数据类型
 * @returns void
 */
function checkCombine(newValue: any, jsonDecorator: JSONObject = {}, ...items: Array<any>): any {
    if (!checkJSONObject(newValue) && (items.length > 0 && items.indexOf(newValue) === -1)) validateFail(`"${newValue}" 不是一个有效的参数值`);
    if (items.indexOf(newValue) > -1) return newValue;

    for (const key in newValue) {
        let keyValue = newValue[key];
        const decorator = jsonDecorator[key];
        if (!decorator) continue;

        if (checkArray(decorator) && decorator.indexOf(keyValue) === -1) {
            validateFail(`"${keyValue}" 不在 [${decorator.toString()}] 值范围内`);
            break;
        }
        if (checkOfType(decorator, "function") && !decorator(keyValue)) {
            validateFail(`"${keyValue}" 不是一个有效的参数值`);
            break;
        }
        if (checkRegExp(decorator) && !decorator.test(keyValue)) {
            validateFail(`"${keyValue}" 不是一个有效的参数值`);
            break;
        }
        if (checkJSONObject(decorator)) {
            const childDecorator = decorator?.decorator ?? {};
            const childItems = decorator?.options ?? [];
            keyValue = checkCombine(keyValue, childDecorator, ...childItems);
        }
    }

    return newValue;
}

/**
 * 生成装饰器核心代码
 * @param propertySetter 属性设置器
 * @returns PropertyDecorator 
 */
function generateDecorator(propertySetter: PropertySetter): PropertyDecorator {
    return function (target: any, propertyKey: string | number | symbol) {
        let value = target[propertyKey];

        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: () => value,
            set: (newValue) => {
                if (descriptor && descriptor.set) {
                    descriptor.set(newValue);
                }
                value = propertySetter(newValue, propertyKey, value);
            }
        });
    }
}