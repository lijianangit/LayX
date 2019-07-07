import * as NumberHelper from "./NumberHelper";
import { stringCast } from "./CastHelper";

/**
 * 生成唯一Id
 * @param [length] 总长度
 * @returns 唯一Id
 */
export function generateUniqueId(length: number = 5): string {
    const characters: Array<string | number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let uniqueId = "#";
    for (let i = 0; i < length; i++) {
        uniqueId += characters[NumberHelper.randomNumber(0, characters.length)];
    }

    return uniqueId;
}

/**
 * 移除字符串中无效字符：换行/缩进/制表/空白
 * @param str 字符串
 * @returns 预期字符串 
 */
export function removeInvalidCharacter(str: string): string {
    let strCast = stringCast(str).replace(/[\r\n\t\s]/g, "");

    return strCast;
}