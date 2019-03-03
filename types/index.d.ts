import { WindowMode } from "../src/basic/enums/WindowMode";
import { WindowAnimate } from "../src/basic/enums/WindowAnimate";
import { WindowOffset } from "../src/basic/enums/WindowOffset";

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
}

export type ConfigOptions = {};