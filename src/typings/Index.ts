import { Theme } from "../enums/Theme";

export interface JsonObject {
    constructor: Object;
    [key: string]: any;
}

export interface Layx {
    (options: any): void;
    version: string;
    v: string;
    prefix: string;
    zIndex?: number;
    create(options: any): void;
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
    theme?: Theme;
    parclose?: boolean;
    resize?: ResizeOptions | boolean;
    toolBar?: ToolBarOptions | boolean;
    topMenu?: TopMenuOptions;
    statuBar?: StatuBarOptions | boolean;
    sideBar?: SideBarOptions;
}

export interface ResizeOptions {
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
