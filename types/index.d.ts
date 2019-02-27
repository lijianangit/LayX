import { WindowMode } from "../src/basic/enums/WindowMode";
import { WindowAnimate } from "../src/basic/enums/WindowAnimate";

export type CSSStyleObject = CSSStyleDeclaration & { [key: string]: string | null };

export interface WindowOptions {
    id: string;
    width?: number;
    height?: number;
    mode?: WindowMode;
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
