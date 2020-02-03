
import { UIWindow } from './component/ui-window';
import { AnimationOptional, BorderStyleOptional, DirectionOptional } from './const';
import { EventSetter, JSONObject } from './core/type';

export type ComponentElement = HTMLDivElement;

export type DirectionOrCoord = DirectionOptional | [number, number];

export interface WindowEventMessage {
    id: string;
    target: UIWindow;
}

export interface EventMessage<TEventMessage> {
    dataset: TEventMessage & JSONObject;
    eventTarget: {
        name: string;
        timestamp: number;
    }
}

export interface BorderOption {
    width?: number;
    color?: string;
    style?: BorderStyleOptional;
    radius?: number;
}

export interface GlobalUIWindowOption {
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    backgroundColor?: string;
    boxShadow?: boolean;
    animate?: false | AnimationOptional;
    border?: false | BorderOption;
}

export interface UIWindowOption extends GlobalUIWindowOption {
    readonly id: string;
    direction?: DirectionOrCoord;
}

export interface EntryOption {
    startZIndex?: number;
    window?: GlobalUIWindowOption
}

export interface Overt {
    version: string;
    (options: EntryOption): void;
    on(eventSetter: EventSetter): void;
    open(options: UIWindowOption): void;
}

