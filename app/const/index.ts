export const enum BorderStyleOptional {
    DOTTED = "dotted",
    DASHED = "dashed",
    SOLID = "solid",
    DOUBLE = "double"
}

export const enum AnimationOptional {
    ZOOM = "zoom"
}

export const enum DirectionOptional {
    CENTER = "center",
    TOP_CENTER = "top-center",
    BOTTOM_CENTER = "bottom-center",
    LEFT_TOP = "left-top",
    LEFT_MIDDLE = "left-middle",
    LEFT_BOTTOM = "left-bottom",
    RIGHT_TOP = "right-top",
    RIGHT_MIDDLE = "right-middle",
    RIGHT_BOTTOM = "right-bottom"
}

export const enum WindowStateOptional {
    ORIGINAL = "original",
    MAXIMIZE = "maximize",
    MINIMIZE = "minimize"
}

export const enum AlignOptional {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

export const WINDOW_CREATE: string = "window:create";
export const WINDOW_FOCUS: string = "window:focus";
export const WINDOW_SHOW: string = "window:show";
export const WINDOW_EXIST: string = "window:exist";
export const WINDOW_MAXIMIZE: string = "window:maximize";
export const WINDOW_MINIMIZE: string = "window:minimize";
export const WINDOW_DESTROY: string = "window:destroy";

export const ANIMATE_SHOW: string = "animate-{0}-show";
export const ANIMATE_DESTROY: string = "animate-{0}-destroy";
export const ANIMATE_MAXIMIZE: string = "animate-{0}-maximize";