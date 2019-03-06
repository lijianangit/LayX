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
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var ValueHelper = require("../utils/ValueHelper");
var TypeHelper = require("../utils/TypeHelper");
var JsonHelper = require("../utils/JsonHelper");
var ExceptionHelper = require("../utils/ExceptionHelper");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(app, options) {
        var _this = _super.call(this, app) || this;
        _this.kind = "window";
        _this.flickering = false;
        _this.zIndex = _this.app.zIndex;
        _this.width = 800;
        _this.height = 600;
        _this.mode = "layer";
        _this.background = "#ffffff";
        _this.border = null;
        _this.borderRadius = null;
        _this.shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        _this.maxWidth = innerWidth;
        _this.maxHeight = innerHeight;
        _this.minWidth = 100;
        _this.minHeight = 100;
        _this.parclose = false;
        _this.animate = "zoom";
        _this.contextMenu = false;
        _this._element = null;
        _this._flickerShadow = null;
        _this.defaultBorder = {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        };
        if (!options.id)
            throw new Error("`id` is required.");
        _this.id = options.id;
        _this.elementId = _this.app.prefix + _this.id;
        _this.width = ValueHelper.numberCast(options.width) || _this.width;
        _this.height = ValueHelper.numberCast(options.height) || _this.height;
        var coord = ValueHelper.offsetCast(options.offset, _this.width, _this.height) || [(innerWidth - _this.width) / 2, (innerHeight - _this.height) / 2];
        _this.left = coord[0];
        _this.top = coord[1];
        _this.maxWidth = Math.min(options.maxWidth || _this.maxWidth, _this.maxWidth);
        _this.maxHeight = Math.min(options.maxHeight || _this.maxHeight, _this.maxHeight);
        _this.minWidth = Math.max(options.minWidth || _this.minWidth, _this.minWidth);
        _this.minHeight = Math.max(options.minHeight || _this.minHeight, _this.minHeight);
        var borderOption = options.border === undefined ? _this.defaultBorder : (TypeHelper.isJsonObject(options.border) ? JsonHelper.merge(_this.defaultBorder, options.border) : options.border);
        var borderStyle = ElementHelper.borderCast(borderOption);
        _this.border = borderStyle[0];
        _this.borderRadius = borderStyle[1];
        _this.background = options.background || _this.background;
        _this.shadow = (options.shadow === undefined ? true : options.shadow) === false ? null : (typeof options.shadow === "string" ? options.shadow : _this.shadow);
        _this.contextMenu = options.contextMenu === undefined ? _this.contextMenu : options.contextMenu;
        if (_this.contextMenu !== false && !TypeHelper.isContextMenus(_this.contextMenu)) {
            ExceptionHelper.assertNever(_this.contextMenu);
        }
        TypeHelper.isWindowMode(_this.mode = options.mode || _this.mode);
        _this.animate = ValueHelper.animateCast(options.animate === undefined ? _this.animate : options.animate);
        _this.parclose = options.parclose === undefined ? _this.parclose : (options.parclose === true ? 0 : _this.parclose);
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
        var isNeedAnimation = this.animate !== "none";
        ElementHelper.addClasses(windowElement, this.app.prefix, kebabCase, "window-" + this.mode, "flexbox", "flex-column", isNeedAnimation ? "animate" : "", isNeedAnimation ? "animate-" + this.animate + "In" : "");
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
        isNeedAnimation && (windowElement.addEventListener("animationend", function (ev) {
            ElementHelper.removeClasses(windowElement, _this.app.prefix, "animate-" + _this.animate + "In");
        }));
        windowElement.addEventListener("mousedown", function (ev) {
            _this.updateZIndex(true);
        }, true);
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
        var resizeBar = new UIResizeBar_1.default(this.app, this, {});
        var resizeElement = resizeBar.present();
        resizeElement != null && windowElement.appendChild(resizeElement);
        return fragment;
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
                var isNeedAnimation = this.animate !== "none";
                this.zIndex = this.app.zIndex;
                ElementHelper.addStyles(this.element, {
                    zIndex: "" + this.zIndex
                });
                if (disabled === false) {
                    ElementHelper.addClasses(this.element, this.app.prefix, isNeedAnimation ? "animate-" + this.animate + "In" : "");
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
