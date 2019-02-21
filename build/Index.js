"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIContentWindow_1 = __importDefault(require("./components/UIContentWindow"));
function layxInstance() {
    var layx = function (options) { };
    layx.v = layx.version = "3.0.0";
    layx.zIndex = 10000000;
    layx.prefix = "layx-";
    layx.create = function (windowOptions) {
        var window = new UIContentWindow_1.default(windowOptions, layx);
        var windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    };
    return layx;
}
exports.default = layxInstance();
//# sourceMappingURL=Index.js.map