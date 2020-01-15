export type PropertyKeyType = string | symbol;
export type PropertySetter = {
    (newValue: any, propertyKey: PropertyKeyType, oldValue: any): any;
}