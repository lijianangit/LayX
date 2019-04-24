"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIWindow_1 = require("../controls/UIWindow");
var UINotice_1 = require("../controls/UINotice");
var ExceptionHelper = require("../utils/ExceptionHelper");
var TypeHelper = require("../utils/TypeHelper");
var ElementHelper = require("../utils/ElementHelper");
var UIDragLayer_1 = require("../controls/UIDragLayer");
var App = (function () {
    function App(layx) {
        var _this = this;
        this.layx = layx;
        this.version = "3.0.0";
        this.prefix = "layx-";
        this._window = null;
        this._lastWindow = null;
        this._salver = null;
        this._zIndex = 10000000;
        this._aboveZIndex = 20000000;
        this._salverZIndex = 30000000;
        this._noticeZIndex = 40000000;
        this._windows = [];
        this._notices = [];
        this._drayLayer = null;
        this.mousedown = function (ev) {
            if (_this.window) {
                var contextMenuBar = _this.window.getComponent("context-menu-bar");
                contextMenuBar && contextMenuBar.hide();
                _this.window.hideMoreActionContextMenu();
                var topMenuBar = _this.window.getComponent("top-menu-bar");
                topMenuBar && topMenuBar.hide(ev);
                var windowIconContextMenuBar = _this.window.getComponent("\n            " + "tool-bar" + "\n            /" + "title-bar" + "\n            /" + "window-icon-context-menu-bar");
                windowIconContextMenuBar && windowIconContextMenuBar.hide();
            }
            if (_this.lastWindow) {
                var topMenuBar = _this.lastWindow.getComponent("top-menu-bar");
                topMenuBar && topMenuBar.hide(ev);
            }
        };
        this.mousemove = function (ev) {
            if (_this.salver && _this.salver.element) {
                if (ev.pageY >= innerHeight - 50) {
                    if (ElementHelper.containClass(_this.salver.element, _this.prefix, "salver-bar-keep"))
                        return;
                    _this.salver.show();
                }
                else {
                    if (!ElementHelper.containClass(_this.salver.element, _this.prefix, "salver-bar-keep"))
                        return;
                    _this.salver.show(false);
                }
            }
        };
        this.init();
    }
    Object.defineProperty(App.prototype, "window", {
        get: function () {
            return this._window;
        },
        set: function (value) {
            this.layx.window = this._window = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "lastWindow", {
        get: function () {
            return this._lastWindow;
        },
        set: function (value) {
            this.layx.lastWindow = this._lastWindow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "salver", {
        get: function () {
            return this._salver;
        },
        set: function (value) {
            this.layx.salver = this._salver = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "zIndex", {
        get: function () {
            return this._zIndex = this._zIndex + 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "aboveZIndex", {
        get: function () {
            return this._aboveZIndex = this._aboveZIndex + 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "salverZIndex", {
        get: function () {
            return this._salverZIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "noticeZIndex", {
        get: function () {
            return this._noticeZIndex = this._noticeZIndex + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "windows", {
        get: function () {
            return this._windows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "notices", {
        get: function () {
            return this._notices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "drayLayer", {
        get: function () {
            return this._drayLayer;
        },
        set: function (value) {
            this._drayLayer = value;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.open = function (options) {
        var window = this.getWindow(options.id);
        if (window)
            window.updateZIndex();
        else {
            window = new UIWindow_1.default(this, options);
            var windowPresent = window.present();
            document.body.appendChild(windowPresent);
            this.lastWindow = this.window;
            this.window = window;
            this.windows.push(window);
            if (this.salver)
                this.salver.addOrUpdateItem();
        }
        window.zoomActionButtons(window.width);
    };
    App.prototype.destroy = function (id) {
        if (!TypeHelper.isStringWithNotEmpty(id))
            ExceptionHelper.assertId();
        var window = this.getWindow(id);
        if (window)
            window.destroy();
    };
    App.prototype.getWindow = function (id) {
        if (!TypeHelper.isStringWithNotEmpty(id))
            ExceptionHelper.assertId();
        for (var _i = 0, _a = this.windows; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                if (item.element) {
                    return item;
                }
                else {
                    var index = this.windows.indexOf(item);
                    this.windows.splice(index, 1);
                    return null;
                }
            }
        }
        return null;
    };
    App.prototype.notice = function (options) {
        var notice = new UINotice_1.default(this, options);
        var noticeElement = notice.present();
        document.body.append(noticeElement);
        this.notices.push(notice);
        var index = this.notices.indexOf(notice);
        notice.updateOffset(index, true);
    };
    App.prototype.init = function () {
        this.bindEvent();
    };
    App.prototype.createDragLayer = function () {
        if (!this.drayLayer) {
            var dragLayer = new UIDragLayer_1.default(this);
            var dragLayerElement = dragLayer.present();
            document.body.appendChild(dragLayerElement);
            this.drayLayer = dragLayer;
        }
    };
    App.prototype.bindEvent = function () {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            if (!document.body.id)
                document.body.id = _this.prefix + "body";
            _this.createDragLayer();
        });
        document.addEventListener("mousedown", this.mousedown, true);
        document.addEventListener("mousemove", this.mousemove, true);
    };
    return App;
}());
exports.default = App;
