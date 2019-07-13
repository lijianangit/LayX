/**
 * 坐标信息
 */
export default interface CoordinateProfile {
    /**
     * 宽度
     */
    width?: number;

    /**
     * 高度
     */
    height?: number;

    /**
     * X 坐标
     */
    left?: number;

    /**
     * Y 坐标
     */
    top?: number;

    /**
     * 最大宽度
     */
    maxWidth?: number;

    /**
     * 最大高度
     */
    maxHeight?: number;

    /**
     * 最小宽度
     */
    minWidth?: number;

    /**
     * 最小高度
     */
    minHeight?: number;
}