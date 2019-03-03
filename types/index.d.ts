import { WindowMode } from "../src/basic/enums/WindowMode";
import { WindowAnimate } from "../src/basic/enums/WindowAnimate";
import { WindowOffset } from "../src/basic/enums/WindowOffset";
import UIWindow from "../src/controls/UIWindow";

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
};

export type ParcloseOptions = {
    opacity?: number | false;
};

export type ContextMenuOptions = {
    id: string;
    label: string;
    handler: (window: UIWindow) => void;
};

export type WindowOptions = {
    id: string;
    width?: number;
    height?: number;
    mode?: WindowMode;
    offset?: WindowOffset | WindowCoord;
    background?: string;
    border?: string | BorderOptions;
    shadow?: string | boolean;
    animate?: WindowAnimate | false;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    parclose?: number | boolean;
    contextMenu?: Array<ContextMenuOptions> | false;
}

export type ConfigOptions = {};