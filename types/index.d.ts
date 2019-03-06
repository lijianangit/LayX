import UIWindow from "../src/controls/UIWindow";
import * as Enums from "../src/basic/enums";

export type JsonObject = {
    constructor: Object;
    [key: string]: any;
};

export type CSSStyleObject = CSSStyleDeclaration & { [key: string]: string | null };

export type WindowCoord = {
    [index: number]: number;
    length: number;
};

export type BorderOptions = JsonObject & {
    width?: number;
    color?: string;
    style?: string;
    radius?: number;
} & JsonObject;

export type ParcloseOptions = {
    opacity?: number | false;
} & JsonObject;

export type ContextMenuOptions = {
    id: string;
    label: string;
    handler?: (window: UIWindow) => void;
} & JsonObject;

export type ResizeOptions = {
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    leftTop?: boolean;
    rightTop?: boolean;
    leftBottom?: boolean;
    rightBottom?: boolean;
} & JsonObject;

export type WindowOptions = {
    id: string;
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    offset?: Enums.WindowOffset | WindowCoord;
    mode?: Enums.WindowMode;
    background?: string;
    border?: string | BorderOptions;
    shadow?: string | boolean;
    animate?: Enums.WindowAnimate | false;
    parclose?: number | boolean;
    contextMenu?: Array<ContextMenuOptions> | false;
    resizeBar?: ResizeOptions | boolean;
} & JsonObject;


export type ConfigOptions = {};