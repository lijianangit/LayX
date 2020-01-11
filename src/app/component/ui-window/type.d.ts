import { BorderStyle, Animation, Offset } from "./const";

/**
 * 边框参数
 */
export interface BorderOption {
    /**
     * 宽度
     */
    width?: number;

    /**
     * 边框样式
     */
    style?: BorderStyle;

    /**
     * 边框颜色
     */
    color?: string;

    /**
     * 圆角
     */
    radius?: number;
}

/**
 * 窗口参数
 */
export interface UIWindowOption {
    /**
     * 唯一Id
     */
    readonly id: string;

    /**
     * 宽度
     */
    width?: number;

    /**
     * 高度
     */
    height?: number;

    /**
     * 最小宽度
     */
    minWidth?: number;

    /**
     * 最小高度
     */
    minHeight?: number;

    /**
     * 最大宽度
     */
    maxWidth?: number;

    /**
     * 最大高度
     */
    maxHeight?: number;

    /**
     * 边框
     */
    border?: false | BorderOption;

    /**
     * 阴影
     */
    boxShadow?: boolean;

    /**
     * 动画
     */
    animate?: false | Animation;

    /**
     * 偏移量
     */
    offset?: [number, number] | Offset;

    /**
     * 背景颜色
     */
    backgroundColor?: string;
}
