import { WindowMode } from "../src/basic/enums/WindowMode";
import { WindowAnimate } from "../src/basic/enums/WindowAnimate";
import { WindowOffset } from "../src/basic/enums/WindowOffset";

export type CSSStyleObject = CSSStyleDeclaration & { [key: string]: string | null };

export type WindowCoord = { [index: number]: number; length: number; }

export interface WindowOptions {
    id: string;
    width?: number;
    height?: number;
    mode?: WindowMode;
    offset?: WindowOffset | WindowCoord;
    background?: string;
    boxShadow?: string;
    animate?: WindowAnimate;
}

export interface ConfigOptions {
}

export interface Layx {
    v: string;
    (options: ConfigOptions): void;
    create(options: WindowOptions): void;
}
