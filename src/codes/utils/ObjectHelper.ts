export function isJsonObject(target: any): boolean {
    return typeof target === 'object' && target.constructor === Object;
}

export function clone(source: Object): Object {
    const newObject: Object = {};
    for (const key of Object.keys(source)) {
        (<any>newObject)[key] = typeof (<any>source) === "object" ? clone((<any>source)[key]) : (<any>source)[key];
    }
    return newObject;
}

export function merge(...desc: Object[]): Object {
    const target: Object = {};
    desc.forEach(item => {
        for (const key of Object.keys(item)) {
            if (!target.hasOwnProperty(key) || !isJsonObject((<any>item)[key])) {
                (<any>target)[key] = (<any>item)[key];
            }
            else {
                (<any>target)[key] = merge((<any>item)[key])
            }
        }
    });
    return target;
}