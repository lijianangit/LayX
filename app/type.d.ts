
import { UIWindow } from './component/ui-window';
import { Component } from './component';
import { AnimationOptional, BorderStyleOptional, DirectionOptional, AlignOptional } from './const';
import { EventSetter, JSONObject, MouseAndTouchEvent } from './core/type';

export type ComponentElement = HTMLDivElement;

export type DirectionOrCoord = DirectionOptional | [number, number];

export interface WindowEventMessage extends JSONObject {
    target: UIWindow;
    created?: boolean;
}

export interface BuiltInComponent {
    [key: string]: Component<JSONObject>;
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
    actionBar?: false | UIActionBarOption;
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
    restore(id: string): void;
}

export interface UIIconOption {
    icon: string;
    color?: string;
    backgroundColor?: string;
    disabled?: boolean;
    visible?: boolean;
    size?: number;
    width?: number;
    hoverClasses?: string | Array<string>;
    handler?: (ev: MouseAndTouchEvent) => void;
    switchIcon?: string;
    switchColor?: string;
    switchBackgroundColor?: string;
    switchHandler?: (ev: MouseAndTouchEvent) => void;
}

export interface UIActionBarOption {
    height?: number;
    backgroundColor?: string;
    align?: AlignOptional;
    color?: string;
    actionHoverClasses?: string | Array<string>;
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