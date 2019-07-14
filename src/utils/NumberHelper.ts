/**
 * 生成指定区间的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns number 区间随机值
 */
export function randomNumber(min: number, max: number): number {
    const rand = Math.random() * (max - min + 1) + min;
    return parseInt(rand.toString(), 10);
}

/**
 * 处理宽度、高度相对于最小宽高、最大宽高计算问题
 * @param type 类型
 * @param [value] 值
 * @param [maxValue] 最大值 
 * @param [minValue] 最小值
 * @returns 处理后的值
 */
export function handlerMaxAndMinValue(type: "all" | "max" | "min", value?: number, maxValue?: number, minValue?: number): number | undefined {
    var newValue = undefined;

    if ((type === "all" || type === "min") && minValue && value) newValue = Math.max(minValue, value);
    if ((type === "all" || type === "max") && maxValue && value) newValue = Math.min(maxValue, value);

    return newValue;
}

/**
 * 比较两个值大小
 * @param [value] 第一个值
 * @param [value2] 第二个值
 * @returns 如果第一个值大于第二个值，返回true
 */
export function compareValue(value?: number, value2?: number): boolean {
    if (value && value2 && value > value2) return true;
    else return false;
}