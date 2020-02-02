import { parameterInvalid } from '../../exception';
import { mergeJSONObject } from '../../helper/object';
import { FunctionValidator, JSONObject, PropertySetter, ValueType } from '../../type';
import {
    checkArray, checkBaseType, checkFunction, checkFunctionValidator, checkIn, checkJSONObject,
    checkValidator
} from '../../validator';

function decorator(propertySetter: PropertySetter): PropertyDecorator {
    if (!checkFunction<PropertySetter>(propertySetter)) parameterInvalid();

    return (target: any, propertyKey) => {
        let value = target[propertyKey];
        var propertyDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);

        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: () => value,
            set: (newValue) => {
                if (propertyDescriptor && propertyDescriptor.set) propertyDescriptor.set(newValue);
                value = propertySetter(newValue, propertyKey, value);
            }
        })
    };
}

function inValidator(newValue: any, oldValue: any, ...values: Array<any>): any {
    const valueOptions: Array<ValueType> = [];
    const functionValidators: Array<FunctionValidator> = [];
    const objectValidators: Array<JSONObject> = [];

    values.map(item => {
        if (item === null || checkBaseType(item, "string", "bigint", "boolean", "symbol", "undefined")) valueOptions.push(item);
        if (checkFunctionValidator(item)) functionValidators.push(item);
        if (checkJSONObject(item)) objectValidators.push(item);
    });

    if (checkIn(newValue, ...valueOptions)) return newValue;

    if (functionValidators.length > 0) {
        let isPassAllFunctionValidator = true;
        for (const functionValidator of functionValidators) {
            isPassAllFunctionValidator = checkValidator(newValue, functionValidator);
            if (!isPassAllFunctionValidator) break;
        }
        if (isPassAllFunctionValidator) return newValue;
    }

    if (checkJSONObject(newValue) && objectValidators.length > 0) {
        const [firstValidator,] = objectValidators;
        for (const key in newValue) {
            const childValues = firstValidator[key];
            inValidator(newValue[key], oldValue, ...(checkArray(childValues) ? childValues : [childValues]));
        }
        return mergeJSONObject(oldValue, newValue);
    }
    parameterInvalid();
}

export function validator(...values: Array<any>): PropertyDecorator {
    return decorator((newValue, propertyKey, value) => {
        return inValidator(newValue, value, ...values);
    });
}