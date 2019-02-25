import { Theme } from "../enums/Theme";
import { WindowMode } from "../enums/WindowMode";
import { WindowCoord } from "../enums/WindowCoord";
import { Animate } from "../enums/Animate";

export interface JsonObject {
    constructor: Object;
    [key: string]: any;
}

export interface Layx {
    (options: any): void;
    v: string;
    create(options: any): void;
    destroy(id: string): void;
}

export interface WindowOptions {
    id: string;
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    background?: string;
    border: string | boolean;
    boxShadow: string | boolean;
    theme?: Theme;
    mode?: WindowMode,
    animate: Animate | boolean;
    coord?: WindowCoord | [number, number],
    parclose?: boolean;
    resizeBar?: ResizeBarOptions | boolean;
    toolBar?: ToolBarOptions | boolean;
    topMenu?: TopMenuOptions;
    statuBar?: StatuBarOptions | boolean;
    sideBar?: SideBarOptions;
}

export interface ResizeBarOptions {
    top?: boolean;
    left?: boolean;
    right?: boolean;
    bottom?: boolean;
    leftTop?: boolean;
    rightTop?: boolean;
    leftBottom?: boolean;
    rightBottom?: boolean;
}

export interface ToolBarOptions {
    height?: number;
    background?: string;
}

export interface TopMenuOptions {
    background?: string;
}

export interface StatuBarOptions {
    height?: number;
    background?: string;
}

export interface SideBarOptions {
    width?: number;
    background?: string;
}
