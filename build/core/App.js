"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIWindow_1 = require("../controls/UIWindow");
var App = (function () {
    function App() {
        this.version = "3.0.0";
        this.prefix = "layx-";
        this._zIndex = 10000000;
        this._aboveZIndex = 20000000;
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
    App.prototype.create = function (options) {
        var uiWindow = new UIWindow_1.default(this, options);
        var windowPresent = uiWindow.present();
        document.body.appendChild(windowPresent);
    };
    return App;
}());
exports.default = App;
