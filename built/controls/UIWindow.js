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
var ElementHelper_1 = require("../utils/ElementHelper");
var ValueHelper_1 = require("../utils/ValueHelper");
var TypeHelper_1 = require("../utils/TypeHelper");
var JsonHelper_1 = require("../utils/JsonHelper");
var StringHelper_1 = require("../utils/StringHelper");
var UIParclose_1 = require("./UIParclose");
var ExceptionHelper_1 = require("../utils/ExceptionHelper");
var UIContextMenu_1 = require("./UIContextMenu");
var UIResizeBar_1 = require("./UIResizeBar");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(app, options) {
        var _this = _super.call(this, app) || this;
        _this.kind = "window";
        _this.flickering = false;
        _this._element = null;
        _this._width = 800;
        _this._height = 600;
        _this._mode = "layer";
        _this._background = "#ffffff";
        _this._border = null;
        _this._borderRadius = null;
        _this._shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        _this._flickerShadow = null;
        _this._animate = "zoom";
        _this._maxWidth = innerWidth;
        _this._maxHeight = innerHeight;
        _this._minWidth = 100;
        _this._minHeight = 100;
        _this._parclose = false;
        _this._contextMenu = false;
        if (!options.id)
            throw new Error("`id` is required.");
        _this._id = options.id;
        _this.elementId = _this.app.prefix + _this.id;
        _this.zIndex = _this.app.zIndex;
        _this._width = ValueHelper_1.numberCast(options.width) || _this._width;
        _this._height = ValueHelper_1.numberCast(options.height) || _this._height;
        var coord = ValueHelper_1.offsetCast(options.offset, _this._width, _this._height) || [(innerWidth - _this._width) / 2, (innerHeight - _this._height) / 2];
        _this._left = coord[0];
        _this._top = coord[1];
        (_this._mode = options.mode || _this._mode) && TypeHelper_1.isWindowMode(_this._mode);
        _this._background = options.background || _this._background;
        var defaultBorder = {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        };
        var borderOption = options.border === undefined ?
            defaultBorder :
            (TypeHelper_1.isJsonObject(options.border) ? JsonHelper_1.merge(defaultBorder, options.border) : options.border);
        var borderStyle = ElementHelper_1.borderCast(borderOption);
        _this._border = borderStyle[0];
        _this._borderRadius = borderStyle[1];
        _this._shadow = (options.shadow === undefined ? true : options.shadow) === false ?
            null :
            typeof options.shadow === "string" ? options.shadow : _this._shadow;
        _this._animate = ValueHelper_1.animateCast(options.animate === undefined ? _this._animate : options.animate);
        _this._maxWidth = Math.min(options.maxWidth || _this._maxWidth, _this._maxWidth);
        _this._maxHeight = Math.min(options.maxHeight || _this._maxHeight, _this._maxHeight);
        _this._minWidth = Math.max(options.minWidth || _this._minWidth, _this._minWidth);
        _this._minHeight = Math.max(options.minHeight || _this._minHeight, _this._minHeight);
        _this._parclose = options.parclose === undefined ? _this._parclose : (options.parclose === true ? 0 : _this._parclose);
        _this._contextMenu = options.contextMenu === undefined ? _this._contextMenu : options.contextMenu;
        if (_this._contextMenu !== false && !TypeHelper_1.isContextMenus(_this._contextMenu)) {
            ExceptionHelper_1.assertNever(_this._contextMenu);
        }
        return _this;
    }
    Object.defineProperty(UIWindow.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "element", {
        get: function () {
            return document.getElementById(this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "border", {
        get: function () {
            return this._border;
        },
        set: function (value) {
            this._border = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "borderRadius", {
        get: function () {
            return this._borderRadius;
        },
        set: function (value) {
            this._borderRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (value) {
            this._shadow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "flickerShadow", {
        get: function () {
            if (this.shadow !== null) {
                var shadowArray = this.shadow.split(" ");
                shadowArray[shadowArray.length - 1] = Number(shadowArray[shadowArray.length - 1].replace("px", "")) / 2 + "px";
                return shadowArray.join(" ");
            }
            return this._shadow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "animate", {
        get: function () {
            return this._animate;
        },
        set: function (value) {
            this._animate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "maxWidth", {
        get: function () {
            return this._maxWidth;
        },
        set: function (value) {
            this._maxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "maxHeight", {
        get: function () {
            return this._maxHeight;
        },
        set: function (value) {
            this._maxHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "minWidth", {
        get: function () {
            return this._minWidth;
        },
        set: function (value) {
            this._minWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "minHeight", {
        get: function () {
            return this._minHeight;
        },
        set: function (value) {
            this._minHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "parclose", {
        get: function () {
            return this._parclose;
        },
        set: function (value) {
            this.parclose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "contextMenu", {
        get: function () {
            return this._contextMenu;
        },
        set: function (value) {
            this._contextMenu = value;
        },
        enumerable: true,
        configurable: true
    });
    UIWindow.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var windowElement = document.createElement("div");
        windowElement.id = this.elementId;
        var isNeedAnimation = this.animate !== "none";
        ElementHelper_1.addClasses(windowElement, this.app.prefix, StringHelper_1.getKebabCase(this.kind), "window-" + this.mode, "flexbox", "flex-column", isNeedAnimation ? "animate" : "", isNeedAnimation ? "animate-" + this.animate + "In" : "");
        ElementHelper_1.addStyles(windowElement, {
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
            ElementHelper_1.removeClasses(windowElement, _this.app.prefix, "animate-" + _this.animate + "In");
        }));
        windowElement.addEventListener("click", function (ev) {
            _this.hideContextMenu();
            _this.updateZIndex();
        }, false);
        fragment.appendChild(windowElement);
        if (this.parclose !== false) {
            var parclose = new UIParclose_1.default(this.app, this, { opacity: this.parclose });
            var parcloseElement = parclose.present();
            if (parcloseElement.hasChildNodes) {
                ElementHelper_1.addStyles((parcloseElement.firstElementChild), {
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
                _this.updateZIndex();
                if (contextMenuElements_1 != null) {
                    ElementHelper_1.addClasses(contextMenuElements_1, _this.app.prefix, "context-menu-active");
                    ElementHelper_1.addStyles(contextMenuElements_1, {
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
        windowElement.appendChild(resizeElement);
        return fragment;
    };
    UIWindow.prototype.createContextMenu = function () {
        var contextMenuElements = document.createElement("div");
        contextMenuElements.id = this.elementId + "-context-menu";
        ElementHelper_1.addClasses(contextMenuElements, this.app.prefix, "context-menu");
        contextMenuElements.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });
        if (this.contextMenu instanceof Array && TypeHelper_1.isContextMenus(this.contextMenu)) {
            for (var _i = 0, _a = this.contextMenu; _i < _a.length; _i++) {
                var item = _a[_i];
                var contextMenu = new UIContextMenu_1.default(this.app, this, item);
                contextMenuElements.appendChild(contextMenu.present());
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
                        ElementHelper_1.addStyles(_this.element, {
                            boxShadow: _this.flickerShadow,
                            webkitBoxShadow: _this.flickerShadow
                        });
                        flickerTimes_1++;
                    }, i * duration);
                }
                else {
                    setTimeout(function () {
                        ElementHelper_1.addStyles(_this.element, {
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
                ElementHelper_1.addStyles(this.element, {
                    zIndex: "" + this.zIndex
                });
                if (disabled === false) {
                    ElementHelper_1.addClasses(this.element, this.app.prefix, isNeedAnimation ? "animate-" + this.animate + "In" : "");
                }
                this.updateParcloseZIndex();
                this.app.window = this;
            }
        }
    };
    UIWindow.prototype.updateParcloseZIndex = function () {
        var parcloseElement = document.getElementById(this.elementId + "-parclose");
        if (parcloseElement) {
            ElementHelper_1.addStyles((parcloseElement), {
                zIndex: "" + (this.zIndex - 1)
            });
        }
    };
    UIWindow.prototype.hideContextMenu = function () {
        var contextMenuElements = document.getElementById(this.elementId + "-context-menu");
        if (contextMenuElements) {
            ElementHelper_1.removeClasses(contextMenuElements, this.app.prefix, "context-menu-active");
        }
    };
    return UIWindow;
}(UIComponent_1.default));
exports.default = UIWindow;
