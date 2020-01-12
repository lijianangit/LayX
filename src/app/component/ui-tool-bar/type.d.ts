import { Align } from "./const";
import { UIIconOption } from "../ui-icon/type";

/**
 * 标题栏
 */
export interface TitleBarOption {
    /**
     * 标题
     */
    label?: string;

    /**
     * 颜色
     */
    color?: string;

    /**
     * 对齐方式
     */
    align?: Align;

    /**
     * 字体大小
     */
    fontSize: number;
}

/**
 * 工具栏可选参数
 */
export interface UIToolBarOption {
    /**
     * 标题
     */
    titleBar?: false | TitleBarOption;

    /**
     * 默认高度
     */
    height?: number;

    /**
     * 背景颜色
     */
    backgroundColor?: string;

    /**
     * 图标
     */
    icon?: false | UIIconOption;
}