import {
    EntryUITitleBarOption, EntryUIToolBarICONOption, EntryUIToolBarOption, EntryUIWindowOption
} from './entry/type';

export const enum TextAlign { LEFT = "left", CENTER = "center", RIGHT = "right" };
export const enum BuiltInICON { ICON = "icon" };

export const VERSION: string = "3.0.0";
export const DEFAULT_START_ZINDEX: number = 10000000;
export const DEFAULT_WINDOW_WIDTH: number = 800;
export const DEFAULT_WINDOW_HEIGHT: number = 600;
export const DEFAULT_WINDOW_BACKGROUND_COLOR: string = "#ffffff";
export const DEFAULT_TOOLBAR_HEIGHT: number = 30;
export const DEFAULT_TOOLBAR_BACKGROUND_COLOR: string = "#ffffff";
export const DEFAULT_TITLEBAR_LABEL: string = "未命名";
export const DEFAULT_TITLEBAR_COLOR: string = "#000000";
export const DEFAULT_TITLEBAR_ALIGN: TextAlign = TextAlign.LEFT;
export const DEFAULT_TITLEBAR_FONT_SIZE: number = 14;
export const DEFAULT_TOOLBAR_ICON_NAME: string = BuiltInICON.ICON;
export const DEFAULT_TOOLBAR_ICON_COLOR: string = "#000000";
export const DEFAULT_TOOLBAR_ICON_SIZE: number = 14;


export const DEFAULT_TOOLBAR_ICON_OPTION: EntryUIToolBarICONOption = {
    name: DEFAULT_TOOLBAR_ICON_NAME,
    color: DEFAULT_TOOLBAR_ICON_COLOR,
    size: DEFAULT_TOOLBAR_ICON_SIZE,
    path: null
};
export const DEFAULT_TITLEBAR_OPTION: EntryUITitleBarOption = {
    label: DEFAULT_TITLEBAR_LABEL,
    color: DEFAULT_TITLEBAR_COLOR,
    align: DEFAULT_TITLEBAR_ALIGN,
    fontSize: DEFAULT_TITLEBAR_FONT_SIZE
};
export const DEFAULT_TOOLBAR_OPTION: EntryUIToolBarOption = {
    height: DEFAULT_TOOLBAR_HEIGHT,
    backgroundColor: DEFAULT_TOOLBAR_BACKGROUND_COLOR,
    titleBar: DEFAULT_TITLEBAR_OPTION,
    icon: DEFAULT_TOOLBAR_ICON_OPTION
};
export const DEFAULT_WINDOW_OPTION: EntryUIWindowOption = {
    width: DEFAULT_WINDOW_WIDTH,
    height: DEFAULT_WINDOW_HEIGHT,
    backgroundColor: DEFAULT_WINDOW_BACKGROUND_COLOR,
    toolBar: DEFAULT_TOOLBAR_OPTION,
}
