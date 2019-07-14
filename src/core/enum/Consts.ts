/**
 * 内置组件
 */
export const enum Component {
    SVG = "svg",
    ICON_BUTTON = "icon-button",
    BLOCK = "block"
}

/**
 * 层类型
 */
export const enum BlockType {
    DEFAULT = "default",
    CONTEXT_MENU = "context-menu",
    WINDOW = "window",
    NOTICE = "notice",
    DIALOG = "dialog"
}

/**
 * 可选呈现模式
 */
export const enum PresentMode {
    EMBED = "embed",
    FLOAT = "float"
}

/**
 * 可选动画
 */
export const enum Animate {
    NONE = "none",
    ZOOM = "zoom"
}

/**
 * 位置
 */
export const enum Position {
    LEFT_TOP = "left-top",
    LEFT_CENTER = "left-center",
    LEFT_BOTTOM = "left-bottom",
    TOP_CENTER = "top-center",
    BOTTOM_CENTER = "bottom-center",
    CENTER = "center",
    RIGHT_TOP = "right-top",
    RIGHT_CENTER = "right-center",
    RIGHT_BOTTOM = "right-bottom"
}