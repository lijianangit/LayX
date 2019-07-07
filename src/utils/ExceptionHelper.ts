/**
 * 不是非空字符串错误提示
 * @param obj 对象
 * @returns never 
 */
export function assertString(obj: any): never {
    throw new Error("Not an empty string.");
}