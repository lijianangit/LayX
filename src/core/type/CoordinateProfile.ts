import OffsetProfile from "./OffsetProfile";

/**
 * 坐标信息
 */
export default interface CoordinateProfile extends OffsetProfile {
    /**
     * 宽度
     */
    width?: number;

    /**
     * 高度
     */
    height?: number;

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