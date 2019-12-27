import { validateFail } from "../exception/Exception"
import { baseTypeValidator } from "./BaseValidator";

/**
 * 验证统一处理
 * @param setHandler 验证委托，验证成功返回新值
 * @param typeValidator 默认类型验证器
 */
function validator(setHandler: (newValue: any) => any, typeValidator?: (newValue: any) => void) {
    return function (target: any, propertyKey: string | number | symbol) {
        let value = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newValue) => {
                if (typeValidator) typeValidator(newValue);

                value = setHandler(newValue)
            }
        });
    }
}

/**
 * 验证是否是数字类型
 * @param allowMinus 允许负数？默认：true
 */
export function isNumber(allowMinus: boolean = true) {
    return validator(newValue => {
        if (allowMinus) return newValue;
        else {
            if (newValue === Math.abs(newValue)) return newValue;
            else validateFail(`只能传入正实数`);
        }
    }, newValue => baseTypeValidator(newValue, "number"));
}

/**
 * 最小值验证
 * @param minValue 最小值
 */
export function min(minValue: number) {
    return validator(newValue => {
        if (newValue >= minValue) return newValue;
        else validateFail(`\`${newValue}\` 不能小于 \`${minValue}\``);
    }, newValue => baseTypeValidator(newValue, "number"));
}

/**
 * 最大值验证
 * @param minValue 最大值
 */
export function max(maxValue: number) {
    return validator(newValue => {
        if (newValue <= maxValue) return newValue;
        else validateFail(`\`${newValue}\` 不能大于 \`${maxValue}\``);
    }, newValue => baseTypeValidator(newValue, "number"));
}

/**
 * 长度验证
 * @param minValue 最小值
 * @param maxValue 最大值
 */
export function length(minValue: number, maxValue: number) {
    return validator(newValue => {
        let valueLength = newValue.length;
        if (valueLength >= minValue && valueLength <= maxValue) return newValue;
        else validateFail(`\`${newValue}\` 长度不在 \`[${minValue},${maxValue}]\` 区间`);
    }, newValue => baseTypeValidator(newValue, "string"));
}

/**
 * 正则表达式匹配验证
 * @param reg 正则表达式
 */
export function match(reg: RegExp) {
    return validator(newValue => {
        if (reg.test(newValue)) return newValue;
        else validateFail(`\`${newValue}\` 不能匹配正则表达式 \`${reg}\``);
    }, newValue => baseTypeValidator(newValue, "string"));
}