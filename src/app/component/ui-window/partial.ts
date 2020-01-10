import { checkArray, checkOfType, checkInValueOptions } from "../../core/validator";
import { validateFail } from "../../core/exception";
import { Animation, Offset } from "./const";
import UIWindow from ".";
import { UIWindowOption, BorderOption } from "./type";

/**
 * 处理初始传入参数
 * @param options 控件支持传入可选参数
 * @returns void
 */
export function handlerOptions(this: UIWindow, options: UIWindowOption): void {
    this.width = options?.width ?? this.width;
    this.height = options?.height ?? this.height;
    this.maxWidth = options?.maxWidth ?? this.maxWidth;
    this.maxHeight = options?.maxHeight ?? this.maxHeight;
    this.minWidth = options?.minWidth ?? this.minWidth;
    this.minHeight = options?.minHeight ?? this.minHeight;
    this.width = Math.max(this.minWidth, this.width);
    this.width = Math.min(this.maxWidth, this.width);
    this.height = Math.max(this.minHeight, this.height);
    this.height = Math.min(this.maxHeight, this.height);
    this.border = <BorderOption | false>options?.border ?? this.border;
    this.boxShadow = options?.boxShadow ?? this.boxShadow;
    this.animate = <Animation | false>options?.animate ?? this.animate;
    [this.left, this.top] = calcOffset(this.width, this.height, options?.offset);
}

/**
 * 计算窗口偏移量
 * @param width 宽度
 * @param height 高度
 * @param [offset] 偏移
 * @returns [number, number] 
 */
function calcOffset(width: number, height: number, offset?: [number, number] | Offset): [number, number] {
    let croods: [number, number] = [(innerWidth - width) / 2, (innerHeight - height) / 2];

    if (offset === undefined) return croods;
    else if (checkArray(offset)) {
        if (offset.length !== 2 ||
            !checkOfType(offset[0], "number") ||
            !checkOfType(offset[1], "number")) validateFail(`"${[offset]}" 不是有效的 "[number,number]" 类型`);

        croods = [<number>offset[0], <number>offset[1]];
    }
    else if (checkInValueOptions(offset,
        Offset.CENTER,
        Offset.TOP_CENTER,
        Offset.BOTTOM_CENTER,
        Offset.LEFT_TOP,
        Offset.LEFT_MIDDLE,
        Offset.LEFT_BOTTOM,
        Offset.RIGHT_TOP,
        Offset.RIGHT_MIDDLE,
        Offset.RIGHT_BOTTOM)) {
        switch (<Offset>offset) {
            case Offset.CENTER:
                croods = [(innerWidth - width) / 2, (innerHeight - height) / 2];
                break;
            case Offset.TOP_CENTER:
                croods = [(innerWidth - width) / 2, 0];
                break;
            case Offset.BOTTOM_CENTER:
                croods = [(innerWidth - width) / 2, innerHeight - height];
                break;
            case Offset.LEFT_TOP:
                croods = [0, 0];
                break;
            case Offset.LEFT_MIDDLE:
                croods = [0, (innerHeight - height) / 2];
                break;
            case Offset.LEFT_BOTTOM:
                croods = [0, innerHeight - height];
                break;
            case Offset.RIGHT_TOP:
                croods = [innerWidth - width, 0];
                break;
            case Offset.RIGHT_MIDDLE:
                croods = [innerWidth - width, (innerHeight - height) / 2];
                break;
            case Offset.RIGHT_BOTTOM:
                croods = [innerWidth - width, innerHeight - height];
                break;
        }
    }
    else validateFail(`"${offset}" 不是有效的 "[number,number] 或 [${[Offset.CENTER,
    Offset.TOP_CENTER,
    Offset.BOTTOM_CENTER,
    Offset.LEFT_TOP,
    Offset.LEFT_MIDDLE,
    Offset.LEFT_BOTTOM,
    Offset.RIGHT_TOP,
    Offset.RIGHT_MIDDLE,
    Offset.RIGHT_BOTTOM]}]" 类型`);

    return croods;
}