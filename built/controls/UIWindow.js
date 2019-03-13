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
var UIContextMenu_1 = require("./UIContextMenu");
var UIToolBar_1 = require("./UIToolBar");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var TypeHelper = require("../utils/TypeHelper");
var ExceptionHelper = require("../utils/ExceptionHelper");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(app, options) {
        var _a, _b;
        var _this = _super.call(this, app) || this;
        _this.kind = "window";
        _this.status = "normal";
        _this.flickering = false;
        _this.zIndex = _this.app.zIndex;
        _this.isNeedAnimation = false;
        _this.width = 800;
        _this.height = 600;
        _this.maxWidth = innerWidth;
        _this.maxHeight = innerHeight;
        _this.minWidth = 100;
        _this.minHeight = 100;
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
        _this._element = null;
        _this._flickerShadow = null;
        if (!options.id)
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
        _this.parclose = CastHelper.numberOrBooleanCast(options.parclose, _this.parclose, 0);
        _b = CastHelper.borderCast(options.border, {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        }), _this.border = _b[0], _this.borderRadius = _b[1];
        _this.animate = CastHelper.windowAnimateCast(options.animate, _this.animate);
        _this.isNeedAnimation = _this.animate !== "none";
        _this.resizeBar = CastHelper.jsonOrBooleanCast(options.resizeBar, _this.resizeBar);
        _this.toolBar = CastHelper.jsonOrBooleanCast(options.toolBar, _this.toolBar);
        _this.contextMenu = CastHelper.contextMenusCast(options.contextMenu);
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
    UIWindow.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var windowElement = document.createElement("div");
        windowElement.id = this.elementId;
        ElementHelper.addClasses(windowElement, this.app.prefix, kebabCase, "window-" + this.mode, "flexbox", "flex-column", this.isNeedAnimation ? "animate" : "", this.isNeedAnimation ? "animate-" + this.animate + "-create" : "");
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
        if (this.isNeedAnimation) {
            windowElement.addEventListener("animationend", function (ev) {
                if (_this.element && _this.element.parentElement) {
                    ElementHelper.removeClasses(_this.element, _this.app.prefix, "animate-" + _this.animate + "-create", "animate-" + _this.animate + "-drag-to-normal");
                    if (ElementHelper.containClass(_this.element, _this.app.prefix, "animate-" + _this.animate + "-destroy")) {
                        ElementHelper.removeClasses(_this.element, _this.app.prefix, "animate-" + _this.animate + "-destroy");
                        if (_this.status === "max") {
                            ElementHelper.removeClasses(document.body, "z" + _this.app.prefix, "noscroll");
                        }
                        var index = _this.app.windows.indexOf(_this);
                        _this.app.windows.splice(index, 1);
                        _this.element.parentElement.removeChild(_this.element);
                    }
                }
            });
            windowElement.addEventListener("transitionend", function (ev) {
                if (_this.element) {
                    ElementHelper.removeClasses(_this.element, _this.app.prefix, "animate-" + _this.animate + "-to-max", "animate-" + _this.animate + "-to-normal");
                }
            });
        }
        windowElement.addEventListener("mousedown", function (ev) {
            _this.updateZIndex(true);
        }, true);
        if (this.toolBar !== false) {
            var toolBar = new UIToolBar_1.default(this.app, this, this.toolBar);
            var toolBarElement = toolBar.present();
            toolBarElement != null && windowElement.appendChild(toolBarElement);
        }
        if (this.resizeBar !== false) {
            var resizeBar = new UIResizeBar_1.default(this.app, this, this.resizeBar);
            var resizeElement = resizeBar.present();
            resizeElement != null && windowElement.appendChild(resizeElement);
        }
        fragment.appendChild(windowElement);
        if (this.parclose !== false) {
            var parclose = new UIParclose_1.default(this.app, this, { opacity: this.parclose });
            var parcloseElement = parclose.present();
            if (parcloseElement != null && parcloseElement.hasChildNodes) {
                ElementHelper.addStyles((parcloseElement.firstElementChild), {
                    zIndex: "" + (this.zIndex - 1)
                });
                fragment.appendChild(parcloseElement);
            }
        }
        if (this.contextMenu !== false) {
            var contextMenuElements_1 = document.getElementById(this.elementId + "-context-menu");
            if (!contextMenuElements_1) {
                contextMenuElements_1 = this.createContextMenu();
                fragment.appendChild(contextMenuElements_1);
            }
            windowElement.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.returnValue = false;
                if (contextMenuElements_1 != null) {
                    ElementHelper.addClasses(contextMenuElements_1, _this.app.prefix, "context-menu-active");
                    ElementHelper.addStyles(contextMenuElements_1, {
                        zIndex: "" + (_this.zIndex + 1),
                        top: ev.pageY + "px",
                        left: ev.pageX + "px",
                    });
                }
                return false;
            });
        }
        return fragment;
    };
    UIWindow.prototype.destroy = function () {
        if (this.element && this.element.parentElement) {
            ElementHelper.addClasses(this.element, this.app.prefix, this.isNeedAnimation ? "animate-" + this.animate + "-destroy" : "");
        }
    };
    UIWindow.prototype.normal = function (dragToNormal) {
        if (dragToNormal === void 0) { dragToNormal = false; }
        if (this.element && this.element.parentElement && this.status !== "normal") {
            ElementHelper.addClasses(this.element, this.app.prefix, this.isNeedAnimation ? (dragToNormal == false ? "animate-" + this.animate + "-to-normal" : "animate-" + this.animate + "-drag-to-normal") : "");
            ElementHelper.addStyles(this.element, {
                top: this.top + "px",
                left: this.left + "px",
                width: this.width + "px",
                height: this.height + "px",
                borderRadius: this.borderRadius + "px"
            });
            var resizeBarElement = this.element.querySelector("." + this.app.prefix + "resize-bar");
            if (resizeBarElement) {
                ElementHelper.removeClasses(resizeBarElement, this.app.prefix, "resize-disabled");
            }
            ElementHelper.removeClasses(document.body, "z" + this.app.prefix, "noscroll");
            this.status = "normal";
            var useElement = this.element.querySelector("#" + this.elementId + "-action-button-" + "max" + ">svg." + this.app.prefix + "icon>use");
            if (useElement) {
                useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#max");
            }
        }
    };
    UIWindow.prototype.max = function () {
        if (this.element && this.element.parentElement) {
            if (this.status !== "max") {
                ElementHelper.addClasses(this.element, this.app.prefix, this.isNeedAnimation ? "animate-" + this.animate + "-to-max" : "");
                ElementHelper.addStyles(this.element, {
                    top: "0px",
                    left: "0px",
                    width: innerWidth + "px",
                    height: innerHeight + "px",
                    borderRadius: "0px"
                });
                var resizeBarElement = this.element.querySelector("." + this.app.prefix + "resize-bar");
                if (resizeBarElement) {
                    ElementHelper.addClasses(resizeBarElement, this.app.prefix, "resize-disabled");
                }
                ElementHelper.addClasses(document.body, "z" + this.app.prefix, "noscroll");
                this.status = "max";
                var useElement = this.element.querySelector("#" + this.elementId + "-action-button-" + "max" + ">svg." + this.app.prefix + "icon>use");
                if (useElement) {
                    useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#restore");
                }
                return;
            }
            else {
                this.normal();
            }
        }
    };
    UIWindow.prototype.createContextMenu = function () {
        var contextMenuElements = document.createElement("div");
        contextMenuElements.id = this.elementId + "-context-menu";
        ElementHelper.addClasses(contextMenuElements, this.app.prefix, "context-menu");
        contextMenuElements.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }, true);
        if (this.contextMenu instanceof Array && TypeHelper.isContextMenus(this.contextMenu)) {
            for (var _i = 0, _a = this.contextMenu; _i < _a.length; _i++) {
                var item = _a[_i];
                var contextMenu = new UIContextMenu_1.default(this.app, this, item);
                var contextMenuElement = contextMenu.present();
                contextMenuElement && contextMenuElements.appendChild(contextMenuElement);
            }
        }
        return contextMenuElements;
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
    UIWindow.prototype.updateZIndex = function (disabled) {
        if (disabled === void 0) { disabled = false; }
        if (this === this.app.window)
            return;
        var uiWindow = this.app.getWindow(this.id);
        if (uiWindow && uiWindow.mode === "layer") {
            if (this.element) {
                this.zIndex = this.app.zIndex;
                ElementHelper.addStyles(this.element, {
                    zIndex: "" + this.zIndex
                });
                if (disabled === false) {
                    ElementHelper.addClasses(this.element, this.app.prefix, this.isNeedAnimation ? "animate-" + this.animate + "In" : "");
                }
                this.updateParcloseZIndex();
                this.app.window = this;
            }
        }
    };
    UIWindow.prototype.updateParcloseZIndex = function () {
        var parcloseElement = document.getElementById(this.elementId + "-parclose");
        if (parcloseElement) {
            ElementHelper.addStyles((parcloseElement), {
                zIndex: "" + (this.zIndex - 1)
            });
        }
    };
    UIWindow.prototype.hideContextMenu = function () {
        var contextMenuElements = document.getElementById(this.elementId + "-context-menu");
        if (contextMenuElements) {
            ElementHelper.removeClasses(contextMenuElements, this.app.prefix, "context-menu-active");
        }
    };
    UIWindow.prototype.getFlickerShadow = function () {
        if (this.shadow !== null) {
            var shadowArray = this.shadow.split(" ");
            shadowArray[shadowArray.length - 1] = Number(shadowArray[shadowArray.length - 1].replace("px", "")) / 2 + "px";
            return shadowArray.join(" ");
        }
        return this.shadow;
    };
    return UIWindow;
}(UIComponent_1.default));
exports.default = UIWindow;
