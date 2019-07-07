"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreState_1 = require("./core/store/StoreState");
var UILayer_1 = require("./component/UILayer");
require("./asset/style");
exports.default = (function layx() {
    var layx = function (options) { };
    layx.v = "4.0.0";
    layx.store = StoreState_1.default.instance;
    layx.test = function () {
        var layer = new UILayer_1.default();
        layer.width = 800;
        layer.height = 600;
        layer.border = "1px solid #3baced";
        layer.shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        layer.borderRadius = 4;
        layer.animate = "zoom";
        var element = layer.createView();
        console.log(element);
        document.body.appendChild(element);
        return element;
    };
    return layx;
})();
