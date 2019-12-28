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
    width: number;

    /**
     * 高度
     */
    height: number;

    /**
     * 最小宽度
     */
    minWidth: number;

    /**
     * 最小高度
     */
    minHeight: number;

    /**
     * 最大宽度
     */
    maxWidth: number;

    /**
     * 最大高度
     */
    maxHeight: number;
}