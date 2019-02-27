"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIWindow_1 = require("../controls/UIWindow");
var App = (function () {
    function App() {
        this.prefix = "layx-";
        this.zIndex = 10000000;
        this.aboveZIndex = 20000000;
    }
    App.prototype.create = function () {
        var options = { id: "hello-world" };
        var uiWindow = new UIWindow_1.default(this, options);
        document.body.appendChild(uiWindow.present());
    };
    return App;
}());
exports.default = App;
