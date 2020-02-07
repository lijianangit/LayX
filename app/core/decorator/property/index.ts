import { parameterInvalid } from '../../exception';
import { mergeJSONObject } from '../../helper/object';
import { FunctionValidator, JSONObject, PropertySetter, ValueType } from '../../type';
import {
    checkArray, checkBaseType, checkContract, checkFunction, checkFunctionValidator, checkIn,
    checkJSONObject, checkValidator
} from '../../validator';

function decorator(propertySetter: PropertySetter): PropertyDecorator {
    if (!checkFunction<PropertySetter>(propertySetter)) parameterInvalid();

    return function (target: any, propertyKey) {
        const storeKey = `_${propertyKey.toString()}_`;

        Object.defineProperty(target, propertyKey, {
            get() { return this[storeKey]; },
            set(newValue) {
                this[storeKey] = propertySetter(newValue, propertyKey, this[storeKey]);
            }
        })
    };
}

export function validator(...values: Array<any>): PropertyDecorator {
    return decorator((newValue, propertyKey, value) => {
        if (!checkContract(newValue, ...values)) parameterInvalid();
        if (checkJSONObject(newValue)) return mergeJSONObject(value, newValue);
        else return newValue;
    });
}