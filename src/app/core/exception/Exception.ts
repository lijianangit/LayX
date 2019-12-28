/**
 * 抛出异常提示
 * @param message 
 */
export function error(message: string) {
    throw new Error(`\n类型：程序异常\n异常信息：${message}\n堆栈信息：`);
}

/**
 * 验证错误提示
 * @param message 错误信息
 */
export function validateFail(message: string) {
    throw new Error(`\n类型：验证错误\n错误信息：${message}\n堆栈信息：`);
}