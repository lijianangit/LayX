"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIWindow_1 = require("../controls/UIWindow");
var App = (function () {
    function App() {
        this.version = "3.0.0";
        this.prefix = "layx-";
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
        var uiWindow = new UIWindow_1.default(this, options);
        if (this.addWindow(uiWindow)) {
            var windowPresent = uiWindow.present();
            document.body.appendChild(windowPresent);
        }
    };
    App.prototype.getWindow = function (id) {
        for (var _i = 0, _a = this.windows; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                if (document.getElementById(this.prefix + id)) {
                    return item;
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };
    App.prototype.addWindow = function (window) {
        for (var _i = 0, _a = this.windows; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === window.id) {
                if (document.getElementById(this.prefix + window.id)) {
                    window.updateZIndex();
                }
                else {
                    var index = this.windows.indexOf(item);
                    this.windows.splice(index, 1);
                }
                return false;
            }
        }
        this.windows.push(window);
        return true;
    };
    return App;
}());
exports.default = App;
