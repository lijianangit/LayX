"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["LEFT"] = "left";
    Direction["RIGHT"] = "right";
    Direction["TOP"] = "top";
    Direction["BOTTOM"] = "bottom";
    Direction["LEFT_TOP"] = "left-top";
    Direction["RIGHT_TOP"] = "right-top";
    Direction["LEFT_BOTTOM"] = "left-bottom";
    Direction["RIGHT_BOTTOM"] = "right-bottom";
})(Direction = exports.Direction || (exports.Direction = {}));
var WindowAnimate;
(function (WindowAnimate) {
    WindowAnimate["NONE"] = "none";
    WindowAnimate["ZOOM"] = "zoom";
})(WindowAnimate = exports.WindowAnimate || (exports.WindowAnimate = {}));
var WindowMode;
(function (WindowMode) {
    WindowMode["EMBED"] = "embed";
    WindowMode["LAYER"] = "layer";
})(WindowMode = exports.WindowMode || (exports.WindowMode = {}));
var WindowOffset;
(function (WindowOffset) {
    WindowOffset["LEFT_TOP"] = "leftTop";
    WindowOffset["LEFT_CENTER"] = "leftCenter";
    WindowOffset["LEFT_BOTTOM"] = "leftBottom";
    WindowOffset["TOP_CENTER"] = "topCenter";
    WindowOffset["CENTER"] = "center";
    WindowOffset["BOTTOM_CENTER"] = "bottomCenter";
    WindowOffset["RIGHT_TOP"] = "rightTop";
    WindowOffset["RIGHT_CENTER"] = "rightCenter";
    WindowOffset["RIGHT_BOTTOM"] = "rightBottom";
})(WindowOffset = exports.WindowOffset || (exports.WindowOffset = {}));
var WindowStatus;
(function (WindowStatus) {
    WindowStatus["NORMAL"] = "normal";
    WindowStatus["MAX"] = "max";
    WindowStatus["MIN"] = "min";
})(WindowStatus = exports.WindowStatus || (exports.WindowStatus = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType["ICON"] = "icon";
    ComponentType["ACTION_BUTTON"] = "action-button";
    ComponentType["PARCLOSE"] = "parclose";
    ComponentType["RESIZE_BAR"] = "resize-bar";
    ComponentType["ACTION_BAR"] = "action-bar";
    ComponentType["ACTION_BUTTONS"] = "action-buttons";
    ComponentType["CONTEXT_MENU_BUTTON"] = "context-menu-button";
    ComponentType["CONTEXT_MENU_BAR"] = "context-menu-bar";
    ComponentType["CONTEXT_MENU_BUTTONS"] = "context-menu-buttons";
    ComponentType["TITLE_BAR"] = "title-bar";
    ComponentType["TAB_BAR"] = "tab-bar";
    ComponentType["TOOL_BAR"] = "tool-bar";
    ComponentType["WINDOW"] = "window";
    ComponentType["MORE_ACTION_CONTEXT_MENU_BAR"] = "more-action-context-menu-bar";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
