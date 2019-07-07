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