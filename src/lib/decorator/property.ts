import { invalidParameter } from '../exception';
import { merge } from '../helper/object';
import { stringFormat } from '../helper/string';
import { assertFunction, assertJSONObject, assertOneOfType, VerificationOf } from '../verification';

export type PropertyKey = string | symbol;
export type PropertySetter = { (newValue: any, propertyKey: PropertyKey, value: any): any; }

function createPropertyDecorator(propertySetter: PropertySetter): PropertyDecorator {
    if (!assertFunction(propertySetter)) invalidParameter("The parameter `verification` isn't function type.")

    return function (target: any, propertyKey: PropertyKey) {
        const copyKey = `_${propertyKey.toString()}_`;

        Object.defineProperty(target, propertyKey, {
            get() { return this[copyKey] },
            set(newValue) { this[copyKey] = propertySetter(newValue, propertyKey, this[copyKey]); }
        });
    }
}

export function propTypes(...verifications: Array<VerificationOf<any>>): PropertyDecorator {
    return createPropertyDecorator((newValue, propertyKey, value) => {
        if (assertOneOfType(...verifications)(newValue)) invalidParameter(stringFormat("The `{0}` property value of `{1}` setting is invalid.", propertyKey, newValue));

        // auto merge old value and new value if these are json data. else return new value.
        if (assertJSONObject(newValue) && assertJSONObject(value)) return merge(value, newValue);
        return newValue;
    });
}