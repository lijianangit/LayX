
import { UIWindow } from './component/ui-window';
import { AnimationOptional, BorderStyleOptional, DirectionOptional } from './const';
import { EventSetter, JSONObject, MouseAndTouchEvent } from './core/type';

export type ComponentElement = HTMLDivElement;

export type DirectionOrCoord = DirectionOptional | [number, number];

export interface WindowEventMessage extends JSONObject {
    target: UIWindow;
    created?: boolean;
}

export interface BorderOption {
    width?: number;
    color?: string;
    style?: BorderStyleOptional;
    radius?: number;
}

export interface BoxShadowOption {
    offsetX?: number;
    offsetY?: number;
    blurRadius?: number;
    spreadRadius?: number;
    color?: string;
}

export interface GlobalUIWindowOption {
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    backgroundColor?: string;
    boxShadow?: false | BoxShadowOption;
    animate?: false | AnimationOptional;
    border?: false | BorderOption;
}

export interface UIWindowOption extends GlobalUIWindowOption {
    readonly id: string;
    direction?: DirectionOrCoord;
}

export interface EntryOption {
    startZIndex?: number;
    windowOption?: GlobalUIWindowOption
}

export interface Overt {
    version: string;
    (options: EntryOption): void;
    window: UIWindow | null;
    windows: Array<UIWindow>;
    on(eventSetter: EventSetter): void;
    open(options: UIWindowOption): void;
    getWindow(id: string): UIWindow | null;
    destroy(id: string): void;
    maximize(id: string): void;
    focus(id: string): void;
}

export interface UIIconOption {
    icon: string;
    color?: string;
    backgroundColor?: string;
    disabled?: boolean;
    visible?: boolean;
    size?: number;
    handler?: (ev: MouseAndTouchEvent) => void;
    switchIcon?: string;
    switchColor?: string;
    switchBackgroundColor?: string;
    switchHandler?: (ev: MouseAndTouchEvent) => void;
}

export interface UIActionButtonOption {
    extra?: false | UIIconOption;
    about?: false | UIIconOption;
    develop?: false | UIIconOption;
    refresh?: false | UIIconOption;
    istop?: false | UIIconOption;
    minimize?: false | UIIconOption;
    maximize?: false | UIIconOption;
    destroy?: false | UIIconOption;
    customize?: Array<UIIconOption>;
}

export interface UIActionBarOption {
    actions?: false | UIActionButtonOption;
    height?: number;
    backgroundColor?: string;
    align: "left" | "right";
}