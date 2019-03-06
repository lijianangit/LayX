"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIWindow_1 = require("../controls/UIWindow");
var App = (function () {
    function App(layx) {
        this.layx = layx;
        this.version = "3.0.0";
        this.prefix = "layx-";
        this._window = null;
        this._zIndex = 10000000;
        this._aboveZIndex = 20000000;
        this._windows = [];
        this.bindEvent();
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
    Object.defineProperty(App.prototype, "zIndex", {
        get: function () {
            return this._zIndex = this._zIndex + 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "aboveZIndex", {
        get: function () {
            return this._aboveZIndex = this._aboveZIndex + 2;
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
    App.prototype.open = function (options) {
        var window = this.getWindow(options.id);
        if (window) {
            window.updateZIndex();
        }
        else {
            var uiWindow = new UIWindow_1.default(this, options);
            var windowPresent = uiWindow.present();
            document.body.appendChild(windowPresent);
            this.window = uiWindow;
            this.windows.push(uiWindow);
        }
    };
    App.prototype.getWindow = function (id) {
        if (!id)
            throw new Error("`id` is required.");
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
    App.prototype.bindEvent = function () {
        var _this = this;
        document.addEventListener("mousedown", function (ev) {
            if (_this.window) {
                _this.window.hideContextMenu();
            }
        }, true);
    };
    return App;
}());
exports.default = App;
