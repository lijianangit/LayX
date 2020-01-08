/**
 * 边框样式
 */
export enum BorderStyle {
    /**
     * 点状
     */
    DOTTED = "dotted",
    /**
     * 虚线
     */
    DASHED = "dashed",
    /**
     * 实线
     */
    SOLID = "solid",
    /**
     * 双线
     */
    DOUBLE = "double"
}

/**
 * 默认最小宽度
 */
export const DEFAULT_MIN_WIDTH: number = 200;

/**
 * 默认最小高度
 */
export const DEFAULT_MIN_HEIGHT: number = 200;

/**
 * 默认最大宽度
 */
export const DEFAULT_MAX_WIDTH: number = innerWidth;

/**
 * 默认最大高度
 */
export const DEFAULT_MAX_HEIGHT: number = innerHeight;

/**
 * 默认边框宽度
 */
export const DEFAULT_BORDER_WIDTH: number = 1;

/**
 * 默认边框样式
 */
export const DEFAULT_BORDER_STYLE: BorderStyle = BorderStyle.SOLID;

/**
 * 默认边框颜色
 */
export const DEFAULT_BORDER_COLOR: string = "#3baced";

/**
 * 默认边框圆角
 */
export const DEFAULT_BORDER_RADIUS: number = 4;

/**
 * 默认阴影样式
 */
export const DEFAULT_BOX_SHADOW: string = "rgba(0, 0, 0, 0.3) 1px 1px 24px";