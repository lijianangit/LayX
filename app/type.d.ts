
import { AnimationOptional, BorderStyleOptional, DirectionOptional } from './const';
import { EventSetter } from './core/type';

export type ComponentElement = HTMLDivElement;

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
    direction?: DirectionOptional | [number, number];
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

