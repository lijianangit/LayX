"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIWindow_1 = require("../controls/UIWindow");
var App = (function () {
    function App() {
        this.version = "3.0.0";
        this.prefix = "layx-";
        this.window = null;
        this._zIndex = 10000000;
        this._aboveZIndex = 20000000;
        this._windows = [];
    }
    Object.defineProperty(App.prototype, "zIndex", {
        get: function () {
            return this._zIndex++;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "aboveZIndex", {
        get: function () {
            return this._aboveZIndex++;
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
    App.prototype.create = function (options) {
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
                if (document.getElementById(this.prefix + id)) {
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
    return App;
}());
exports.default = App;
