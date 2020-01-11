import { Align } from "../component/ui-tool-bar/const";

/**
 * 版本号
 */
export const VERSION: string = "3.0.0";

/**
 * 前缀符
 */
export const PREFIX: string = "layx-";

/**
 * 默认开始层数
 */
export const START_ZINDEX: number = 10000000;

/**
 * 默认窗口宽度
 */
export const DEFAULT_WINDOW_WIDTH: number = 800;

/**
 * 默认窗口高度
 */
export const DEFAULT_WINDOW_HEIGHT: number = 600;

/**
 * 默认窗口背景颜色
 */
export const DEFAULT_WINDOW_BACKGROUND_COLOR: string = "#ffffff";

/**
 * 默认工具栏背景颜色
 */
export const DEFAULT_TOOLBAR_BACKGROUND_COLOR: string = "#ffffff";

/**
 * 默认工具栏高度
 */
export const DEFAULT_TOOLBAR_HEIGHT: number = 30;

/**
 * 标题栏默认文本
 */
export const DEFAULT_TITLEBAR_LABEL = "未命名";

/**
 * 标题栏默认颜色
 */
export const DEFAULT_TITLEBAR_COLOR = "#000000";

/**
 * 标题栏默认对齐方式
 */
export const DEFAULT_TITLEBAR_ALIGN = Align.LEFT;

/**
 * 标题栏默认字体大小
 */
export const DEFAULT_TITLEBAR_FONTSIZE = 14;

/**
 * 内置支持语言
 */
export const enum SupportLanguage {
    /**
     * 中文
     */
    ZH_CN = "ZH_CN",
    /**
     * 英文
     */
    EN_US = "EN_US"
}