import UIWindow from "../src/controls/UIWindow";
import * as Enums from "../src/basic/enums";

export type JsonObject = {
    constructor: Object;
    [key: string]: any;
};

export type CSSStyleObject = CSSStyleDeclaration & { [key: string]: string | null };

export type WindowCoord = number[];

export type BorderOption = {
    width?: number;
    color?: string;
    style?: string;
    radius?: number;
} & JsonObject;

export type ParcloseOption = {
    opacity?: number;
} & JsonObject;

export type ContextMenuOption = {
    id: string;
    label: string;
    handler?: (window: UIWindow) => void;
} & JsonObject;

export type ActionButtonOption = {
    id: string;
    label: string;
    handler?: (window: UIWindow) => void;
} & JsonObject;

export type ResizeOption = {
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    leftTop?: boolean;
    rightTop?: boolean;
    leftBottom?: boolean;
    rightBottom?: boolean;
} & JsonObject;

export type DragMoveOption = {
    vertical?: boolean;
    horizontal?: boolean;
    breakLeft?: boolean;
    breakRight?: boolean;
    breakTop?: boolean;
    breakBottom?: boolean;
} & JsonObject;

export type ActionBarOption = {
    enable?: boolean;
    actionButtons?: Array<ActionButtonOption> | boolean;
} & JsonObject;

export type TabBarOption = {

} & JsonObject;

export type TitleBarOption = {
    title?: string;
} & JsonObject;

export type ToolBarOption = {
    height?: number;
    drag?: DragMoveOption | boolean;
    titleBar?: TitleBarOption | boolean;
    tabBar?: TabBarOption | boolean;
    actionBar?: ActionBarOption | boolean;
} & JsonObject;

export type WindowOption = {
    id: string;
    mode?: Enums.WindowMode;
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    background?: string | boolean;
    shadow?: string | boolean;
    parclose?: number | boolean;
    border?: BorderOption | string | boolean;
    offset?: Enums.WindowOffset | WindowCoord;
    animate?: Enums.WindowAnimate | boolean;
    resizeBar?: ResizeOption | boolean;
    toolBar?: ToolBarOption | boolean;
    contextMenu?: Array<ContextMenuOption> | false;
} & JsonObject;

export type ConfigOptions = {};