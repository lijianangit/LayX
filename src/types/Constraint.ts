import { Theme } from "../enums/Theme";

export interface JsonObject {
    constructor: Object;
    [key: string]: any;
}

export interface ContainerOptions {
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