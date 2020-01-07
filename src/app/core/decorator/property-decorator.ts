import { PropertySetter, PropertyDecorator } from "./type";
import { checkPstNumber, checkInValueOptions, checkNoEmptyOrNull } from "../validator";
import { ValueOption } from "../validator/type";
import { validateFail } from "../exception";

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
 * 生成装饰器核心代码
 * @param propertySetter 属性设置器
 * @returns PropertyDecorator 
 */
function generateDecorator(propertySetter: PropertySetter): PropertyDecorator {
    return function (target: any, propertyKey: string | number | symbol) {
        let value = target[propertyKey];

        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newValue) => {
                value = propertySetter(newValue, propertyKey, value);
            }
        });
    }
}