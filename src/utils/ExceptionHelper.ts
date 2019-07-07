/**
 * 不是非空字符串错误提示
 * @param obj 对象
 * @returns never 
 */
export function assertString(obj: any): never {
    throw new Error("Not an empty string.");
}

/**
 * 不是有效数字类型错误提示
 * @param obj 对象
 * @returns never 
 */
export function assertNumber(obj: any): never {
    throw new Error("Not a valid number.");
}

/**
 * 意外对象错误提示
 * @param obj 对象
 * @returns never 
 */
export function assertNever(obj: any): never {
    throw new Error("Unexpected object: " + <never>obj);
}