/**
 * 属性设置回调类型
 */
export type PropertySetter = {
    (newValue: any, propertyKey: string | number | symbol, oldValue: any): any;
};

/**
 * 属性装饰器返回类型
 */
export type PropertyDecorator = {
    (target: any, propertyKey: string | number | symbol): void;
}