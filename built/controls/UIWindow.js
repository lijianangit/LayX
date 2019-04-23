"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UIComponent_1 = require("../basic/models/UIComponent");
var UIParclose_1 = require("./UIParclose");
var UIResizeBar_1 = require("./UIResizeBar");
var UIToolBar_1 = require("./UIToolBar");
var UIActionButton_1 = require("./UIActionButton");
var UIContextMenuBar_1 = require("./UIContextMenuBar");
var UITopMenuBar_1 = require("./UITopMenuBar");
var UISalverBar_1 = require("./UISalverBar");
var UIContent_1 = require("./UIContent");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var TypeHelper = require("../utils/TypeHelper");
var ExceptionHelper = require("../utils/ExceptionHelper");
var StringHelper = require("../utils/StringHelper");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(app, options) {
        var _a, _b;
        var _this = _super.call(this, app) || this;
        _this.zIndex = _this.app.zIndex;
        _this.enableAnimated = false;
        _this.status = "normal";
        _this.lastStatus = "none";
        _this.flickering = false;
        _this.width = 800;
        _this.height = 600;
        _this.maxWidth = innerWidth;
        _this.maxHeight = innerHeight;
        _this.minWidth = 200;
        _this.minHeight = 200;
        _this.background = "#ffffff";
        _this.shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        _this.parclose = false;
        _this.mode = "layer";
        _this.border = null;
        _this.borderRadius = null;
        _this.animate = "zoom";
        _this.resizeBar = {};
        _this.toolBar = {};
        _this.contextMenu = false;
        _this.topMenu = false;
        _this.content = {};
        _this.storeStatus = true;
        _this._element = null;
        _this._flickerShadow = null;
        _this._lastStoreStatus = null;
        if (!TypeHelper.isStringWithNotEmpty(options.id))
            ExceptionHelper.assertId();
        _this.id = options.id;
        _this.elementId = _this.app.prefix + _this.id;
        _this.mode = CastHelper.windowModeCast(options.mode, _this.mode);
        _this.width = CastHelper.numberCast(options.width, _this.width);
        _this.height = CastHelper.numberCast(options.height, _this.height);
        _this.maxWidth = Math.min(CastHelper.numberCast(options.maxWidth, _this.maxWidth), _this.maxWidth);
        _this.maxHeight = Math.min(CastHelper.numberCast(options.maxHeight, _this.maxHeight), _this.maxHeight);
        _this.minWidth = Math.max(CastHelper.numberCast(options.minWidth, _this.minWidth), _this.minWidth);
        _this.minHeight = Math.max(CastHelper.numberCast(options.minHeight, _this.minHeight), _this.minHeight);
        _this.width = Math.max(_this.minWidth, _this.width);
        _this.width = Math.min(_this.maxWidth, _this.width);
        _this.height = Math.max(_this.minHeight, _this.height);
        _this.height = Math.min(_this.maxHeight, _this.height);
        _a = CastHelper.offsetCast(options.offset, _this.width, _this.height), _this.left = _a[0], _this.top = _a[1];
        _this.background = CastHelper.stringOrBooleanStyleCast(options.background, _this.background);
        _this.shadow = CastHelper.stringOrBooleanStyleCast(options.shadow, _this.shadow);
        _this.parclose = CastHelper.typeOrBooleanCast(options.parclose, _this.parclose, 0);
        _b = CastHelper.borderCast(options.border, {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        }), _this.border = _b[0], _this.borderRadius = _b[1];
        _this.animate = CastHelper.windowAnimateCast(options.animate, _this.animate);
        _this.enableAnimated = _this.animate !== "none";
        _this.resizeBar = CastHelper.jsonOrBooleanCast(options.resizeBar, _this.resizeBar);
        _this.toolBar = CastHelper.jsonOrBooleanCast(options.toolBar, _this.toolBar);
        _this.contextMenu = CastHelper.contextMenuButtonsCast(options.contextMenu);
        _this.topMenu = CastHelper.contextMenuButtonsCast(options.topMenu);
        _this.content = CastHelper.jsonOrBooleanCast(options.content, _this.content);
        _this.storeStatus = CastHelper.booleanCast(options.storeStatus, _this.storeStatus);
        return _this;
    }
    Object.defineProperty(UIWindow.prototype, "element", {
        get: function () {
            return document.getElementById(this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "flickerShadow", {
        get: function () {
            return this.getFlickerShadow();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "lastStoreStatus", {
        get: function () {
            var storeStatus = localStorage.getItem(this.app.prefix + this.id);
            if (!storeStatus)
                return null;
            return eval("(" + storeStatus + ")");
        },
        set: function (value) {
            localStorage.setItem(this.app.prefix + this.id, JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    UIWindow.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var windowElement = ElementHelper.createElement("div");
        windowElement.id = this.elementId;
        windowElement.setAttribute("data-window-id", this.id);
        ElementHelper.addClasses(windowElement, this.app.prefix, "window", "window-" + this.mode, "flexbox", "flex-column", this.enableAnimated ? "animate" : "", this.enableAnimated ? "animate-" + this.animate + "-show" : "");
        this.readStoreStatus();
        ElementHelper.addStyles(windowElement, {
            zIndex: this.mode === "layer" ? "" + this.zIndex : null,
            maxWidth: this.maxWidth + "px",
            maxHeight: this.maxHeight + "px",
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            width: this.width + "px",
            height: this.height + "px",
            top: this.mode === "layer" ? this.top + "px" : null,
            left: this.mode === "layer" ? this.left + "px" : null,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius,
            webkitBorderRadius: this.borderRadius,
            boxShadow: this.shadow,
            webkitBoxShadow: this.shadow
        });
        windowElement.addEventListener("mousedown", function (ev) {
            _this.updateZIndex();
        }, true);
        if (this.toolBar !== false) {
            var toolBar = new UIToolBar_1.default(this.app, this, this.toolBar);
            var toolBarElement = toolBar.present();
            windowElement.appendChild(toolBarElement);
            this.setComponent("tool-bar", toolBar);
        }
        if (this.topMenu !== false) {
            var topMenuBar = new UITopMenuBar_1.default(this.app, this, this.topMenu);
            var topMenuBarElement = topMenuBar.present();
            windowElement.appendChild(topMenuBarElement);
            this.setComponent("top-menu-bar", topMenuBar);
        }
        if (this.content !== false) {
            var content = new UIContent_1.default(this.app, this, this.content);
            var contentElement = content.present();
            windowElement.appendChild(contentElement);
            this.setComponent("content-container", content);
        }
        if (this.resizeBar !== false) {
            var resizeBar = new UIResizeBar_1.default(this.app, this, this.resizeBar);
            var resizeElement = resizeBar.present();
            windowElement.appendChild(resizeElement);
            this.setComponent("resize-bar", resizeBar);
        }
        if (this.parclose !== false) {
            var parclose = new UIParclose_1.default(this.app, this, { opacity: this.parclose });
            var parcloseElement = parclose.present();
            fragment.appendChild(parcloseElement);
            this.setComponent("parclose", parclose);
            if (this.app.salver) {
                this.app.salver.parsecloseCount++;
            }
        }
        if (this.contextMenu !== false) {
            var contextMenuBar = new UIContextMenuBar_1.default(this.app, this, "window", this.contextMenu);
            var contextMenuBarElement = contextMenuBar.present();
            fragment.appendChild(contextMenuBarElement);
            this.setComponent("context-menu-bar", contextMenuBar);
        }
        this.bindEvent(windowElement);
        if (!this.app.salver) {
            var salverBar = new UISalverBar_1.default(this.app);
            var salverBarElement = salverBar.present();
            fragment.appendChild(salverBarElement);
            this.app.salver = salverBar;
        }
        fragment.appendChild(windowElement);
        return fragment;
    };
    UIWindow.prototype.readStoreStatus = function () {
        var lastStoreStatus = this.lastStoreStatus;
        if (this.storeStatus) {
            if (lastStoreStatus) {
                this.width = lastStoreStatus.width;
                this.height = lastStoreStatus.height;
                this.top = lastStoreStatus.top;
                this.left = lastStoreStatus.left;
            }
            else {
                this.lastStoreStatus = {
                    top: this.top,
                    left: this.left,
                    width: this.width,
                    height: this.height
                };
            }
        }
    };
    UIWindow.prototype.handlerContentByAnimate = function (isFadeOut) {
        if (isFadeOut === void 0) { isFadeOut = true; }
        var content = this.getComponent("content-container");
        if (content) {
            if (isFadeOut) {
                ElementHelper.addClasses(content.element, this.app.prefix, "content-container" + "-fade-out");
            }
            else {
                ElementHelper.removeClasses(content.element, this.app.prefix, "content-container" + "-fade-out");
            }
        }
    };
    UIWindow.prototype.bindEvent = function (windowElement) {
        var _this = this;
        if (this.contextMenu !== false) {
            windowElement.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.returnValue = false;
                var contextMenuBar = _this.getComponent("" + "context-menu-bar");
                contextMenuBar && contextMenuBar.updateOffset(ev, _this.zIndex + 1);
                return false;
            });
        }
        windowElement.addEventListener("animationstart", function (ev) {
            _this.handlerContentByAnimate();
        });
        windowElement.addEventListener("animationend", function (ev) {
            var element = _this.element;
            ElementHelper.removeClasses(element, _this.app.prefix, "animate-" + _this.animate + "-show", "animate-" + _this.animate + "-drag-to-normal");
            if (ElementHelper.containClass(element, _this.app.prefix, "animate-" + _this.animate + "-destroy"))
                _this.remove();
            if (ElementHelper.containClass(element, _this.app.prefix, "animate-" + _this.animate + "-to-min"))
                _this.minimize();
            _this.handlerContentByAnimate(false);
        });
        windowElement.addEventListener("transitionend", function (ev) {
            ElementHelper.removeClasses(_this.element, _this.app.prefix, "animate-" + _this.animate + "-to-max", "animate-" + _this.animate + "-to-normal");
            _this.handlerContentByAnimate(false);
        });
    };
    UIWindow.prototype.destroy = function () {
        if (this.enableAnimated) {
            ElementHelper.addClasses(this.element, this.app.prefix, "animate-" + this.animate + "-destroy");
        }
        else
            this.remove();
    };
    UIWindow.prototype.remove = function () {
        if (this.status === "max") {
            ElementHelper.removeClasses(document.body, "z" + this.app.prefix, "body-noscroll");
        }
        var parclose = this.getComponent("parclose");
        if (parclose) {
            ElementHelper.removeElement(parclose.element);
            if (this.app.salver) {
                this.app.salver.parsecloseCount--;
            }
        }
        if (this.app.salver)
            this.app.salver.removeItem();
        var index = this.app.windows.indexOf(this);
        this.app.windows.splice(index, 1);
        this.app.window = null;
        ElementHelper.removeElement(this.element);
    };
    UIWindow.prototype.normal = function (dragToNormal) {
        if (dragToNormal === void 0) { dragToNormal = false; }
        var windowElement = this.element;
        if (!windowElement || !windowElement.parentElement || this.status === "normal")
            return;
        this.lastStatus = this.status;
        this.status = "normal";
        this.handlerContentByAnimate();
        ElementHelper.removeClasses(document.body, "z" + this.app.prefix, "body-noscroll");
        ElementHelper.addClasses(windowElement, this.app.prefix, this.enableAnimated ? (dragToNormal === false ? "animate-" + this.animate + "-to-normal" : "animate-" + this.animate + "-drag-to-normal") : "");
        ElementHelper.addStyles(windowElement, {
            top: this.top + "px",
            left: this.left + "px",
            width: this.width + "px",
            height: this.height + "px",
            borderRadius: this.borderRadius
        });
        var resizeBar = this.getComponent("resize-bar");
        if (resizeBar) {
            ElementHelper.removeClasses(resizeBar.element, this.app.prefix, "resize-bar-disabled");
        }
        var actionButtons = this.getComponent("\n        " + "tool-bar" + "\n        /" + "action-bar" + "\n        /" + "action-buttons");
        if (!actionButtons || actionButtons.length === 0)
            return;
        for (var _i = 0, actionButtons_1 = actionButtons; _i < actionButtons_1.length; _i++) {
            var item = actionButtons_1[_i];
            if (item.id !== "max")
                continue;
            var restoreActionButton = new UIActionButton_1.default(this.app, this, UIActionButton_1.default.restore);
            var restoreActionButtonElement = restoreActionButton.element;
            if (!(restoreActionButtonElement && restoreActionButtonElement.parentElement))
                return;
            var maxActionButton = new UIActionButton_1.default(this.app, this, item);
            var maxActionButtonElement = maxActionButton.present();
            restoreActionButtonElement.parentElement.replaceChild(maxActionButtonElement, restoreActionButtonElement);
            break;
        }
        this.zoomActionButtons(this.width);
    };
    UIWindow.prototype.max = function () {
        var windowElement = this.element;
        if (!windowElement || !windowElement.parentElement || this.status === "max")
            return;
        this.handlerContentByAnimate();
        this.lastStatus = this.status;
        this.status = "max";
        ElementHelper.addClasses(document.body, "z" + this.app.prefix, "body-noscroll");
        ElementHelper.addClasses(windowElement, this.app.prefix, this.enableAnimated ? "animate-" + this.animate + "-to-max" : "");
        ElementHelper.addStyles(windowElement, {
            top: "0",
            left: "0",
            width: innerWidth + "px",
            height: innerHeight + "px",
            borderRadius: "0"
        });
        var resizeBar = this.getComponent("resize-bar");
        if (resizeBar) {
            ElementHelper.addClasses(resizeBar.element, this.app.prefix, "resize-bar-disabled");
        }
        var actionButtons = this.getComponent("\n        " + "tool-bar" + "\n        /" + "action-bar" + "\n        /" + "action-buttons");
        if (!actionButtons || actionButtons.length === 0)
            return;
        for (var _i = 0, actionButtons_2 = actionButtons; _i < actionButtons_2.length; _i++) {
            var item = actionButtons_2[_i];
            if (item.id !== "max")
                continue;
            var maxActionButtonElement = item.element;
            if (!(maxActionButtonElement && maxActionButtonElement.parentElement))
                return;
            var restoreActionButton = new UIActionButton_1.default(this.app, this, UIActionButton_1.default.restore);
            var restoreActionButtonElement = restoreActionButton.present();
            maxActionButtonElement.parentElement.replaceChild(restoreActionButtonElement, maxActionButtonElement);
            break;
        }
        this.zoomActionButtons(innerWidth);
    };
    UIWindow.prototype.min = function () {
        var windowElement = this.element;
        if (!windowElement || this.status === "min")
            return;
        if (this.parclose !== false) {
            this.flicker();
        }
        else {
            if (this.enableAnimated) {
                ElementHelper.addClasses(this.element, this.app.prefix, "animate-" + this.animate + "-to-min");
            }
            else
                this.minimize();
        }
    };
    UIWindow.prototype.minimize = function () {
        var windowElement = this.element;
        ElementHelper.addClasses(windowElement, this.app.prefix, "window-min");
        if (this.enableAnimated) {
            ElementHelper.removeClasses(windowElement, this.app.prefix, "animate-" + this.animate + "-to-min");
        }
        if (this.app.salver)
            this.app.salver.addOrUpdateItem();
        this.lastStatus = this.status;
        this.status = "min";
    };
    UIWindow.prototype.flicker = function () {
        var _this = this;
        if (this.element && this.mode === "layer" && this.flickering === false) {
            var flickerTimes_1 = 0;
            var duration = 60;
            var flickerTotals_1 = 12;
            this.flickering = true;
            for (var i = 0; i < flickerTotals_1; i++) {
                if (i % 2 == 0) {
                    setTimeout(function () {
                        ElementHelper.addStyles(_this.element, {
                            boxShadow: _this.flickerShadow,
                            webkitBoxShadow: _this.flickerShadow
                        });
                        flickerTimes_1++;
                    }, i * duration);
                }
                else {
                    setTimeout(function () {
                        ElementHelper.addStyles(_this.element, {
                            boxShadow: _this.shadow,
                            webkitBoxShadow: _this.shadow
                        });
                        flickerTimes_1++;
                    }, i * duration);
                }
            }
            var checkFlickering_1 = setInterval(function () {
                if (flickerTimes_1 >= flickerTotals_1) {
                    clearInterval(checkFlickering_1);
                    _this.flickering = false;
                }
            }, duration);
        }
    };
    UIWindow.prototype.showThis = function (windowElement) {
        var _a;
        if (this.status === "min") {
            this.handlerContentByAnimate(true);
            windowElement = windowElement || this.element;
            ElementHelper.removeClasses(windowElement, this.app.prefix, "window-min");
            ElementHelper.addClasses(windowElement, this.app.prefix, this.enableAnimated ? "animate-" + this.animate + "-show" : "");
            if (this.enableAnimated) {
                ElementHelper.addClasses(windowElement, this.app.prefix, "animate-" + this.animate + "-show");
            }
            (_a = StringHelper.exchangeValue(this.status, this.lastStatus), this.status = _a[0], this.lastStatus = _a[1]);
        }
    };
    UIWindow.prototype.updateZIndex = function () {
        if (this === this.app.window) {
            this.showThis();
            return;
        }
        ;
        var windowElement = this.element;
        if (this.mode === "layer") {
            this.showThis(windowElement);
            this.zIndex = this.app.zIndex;
            ElementHelper.addStyles(windowElement, {
                zIndex: "" + this.zIndex
            });
            var parclose = this.getComponent("parclose");
            parclose && parclose.updateZIndex(this.zIndex - 1);
            this.app.lastWindow = this.app.window;
            this.app.window = this;
            this.app.salver && this.app.salver.addOrUpdateItem();
        }
    };
    UIWindow.prototype.hideMoreActionContextMenu = function () {
        var moreActionContextMenuBar = this.getComponent("more-action-context-menu-bar");
        if (!moreActionContextMenuBar)
            return;
        ElementHelper.removeClasses(moreActionContextMenuBar.element, this.app.prefix, "context-menu-bar-active");
    };
    UIWindow.prototype.removeMoreActionContextMenu = function () {
        var moreActionButton = new UIActionButton_1.default(this.app, this, UIActionButton_1.default.more);
        var moreActionButtonElement = moreActionButton.element;
        ElementHelper.removeElement(moreActionButtonElement);
    };
    UIWindow.prototype.zoomActionButtons = function (windowWidth) {
        var actionBar = this.getComponent("\n        " + "tool-bar" + "\n        /" + "action-bar");
        actionBar && actionBar.zoomActionButtons(windowWidth);
    };
    UIWindow.prototype.getFlickerShadow = function () {
        if (!this.shadow)
            return this.shadow;
        var shadowArray = this.shadow.split(" ");
        shadowArray[shadowArray.length - 1] = Number(shadowArray[shadowArray.length - 1].replace("px", "")) / 2 + "px";
        return shadowArray.join(" ");
    };
    return UIWindow;
}(UIComponent_1.default));
exports.default = UIWindow;
