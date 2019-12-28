/**
 * 边框样式类型
 */
export type borderStyleType = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "inherit";

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
    style?: borderStyleType;

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
 * UIWindow 窗口控件参数
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
    border?: BorderOption | boolean;

    /**
     * 阴影
     */
    boxShadow?: boolean;
}
