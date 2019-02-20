"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIDefaultWindow_1 = __importDefault(require("./components/UIDefaultWindow"));
function layxInstance() {
    var layx = function (options) { };
    layx.zIndex = 10000000;
    layx.prefix = "layx-";
    layx.create = function (options) {
        var windowOptions = { id: "hello", background: "#dedede" };
        var window = new UIDefaultWindow_1.default(windowOptions, layx);
        var windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    };
    return layx;
}
exports.default = layxInstance();
//# sourceMappingURL=Index.js.map