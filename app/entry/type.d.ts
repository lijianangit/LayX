import { TextAlign } from '../const';
import { EventSetter } from '../core/event-bus/type';

export interface EntryUIToolBarICONOption {
    name?: string;
    color?: string;
    size?: number;
    path?: string | null;
}
export interface EntryUITitleBarOption {
    label?: string;
    color?: string;
    align?: TextAlign;
    fontSize?: number;
}
export interface EntryUIToolBarOption {
    height?: number;
    backgroundColor?: string;
    titleBar?: false | EntryUITitleBarOption;
    icon?: false | EntryUIToolBarICONOption;
}
export interface EntryUIWindowOption {
    width?: number;
    height?: number;
    backgroundColor?: string;
    toolBar?: false | EntryUIToolBarOption;
}
export interface EntryOption {
    startZIndex?: number;
    window?: EntryUIWindowOption
}
export interface Overt {
    version: string;
    (options: EntryOption): void;
    on(eventSetter: EventSetter): void;
}