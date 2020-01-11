/**
 * 抛出程序异常信息
 * @param message 异常简要
 * @returns never 
 */
export function appError(message: string): never {
    throw new Error(`\n类型：程序异常\n异常信息：${message}\n堆栈信息：`);
}

/**
 * 抛出验证失败信息
 * @param message 错误信息
 * @returns never 
 */
export function validateFail(message: string): never {
    throw new Error(`\n类型：验证错误\n错误信息：${message}\n堆栈信息：`);
}