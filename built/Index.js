"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateStore_1 = require("./core/store/StateStore");
var UIBlock_1 = require("./component/UIBlock");
require("./asset/style");
exports.default = (function layx() {
    var layx = function (options) { };
    layx.v = "4.0.0";
    layx.stateStore = StateStore_1.default.instance;
    layx.test = function () {
        var block = new UIBlock_1.default();
        block.width = 800;
        block.height = 600;
        block.border = "1px solid #3baced";
        block.shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        block.borderRadius = 4;
        block.animate = "zoom";
        var element = block.createView();
        document.body.appendChild(element);
        return element;
    };
    return layx;
})();
