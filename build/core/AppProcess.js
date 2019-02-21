"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIContentWindow_1 = __importDefault(require("../components/UIContentWindow"));
var AppProcess = (function () {
    function AppProcess() {
        this.version = "3.0.0";
        this.prefix = "layx-";
        this.zIndex = 10000000;
    }
    AppProcess.prototype.create = function (options) {
        var window = new UIContentWindow_1.default(options, this);
        var windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    };
    return AppProcess;
}());
exports.default = AppProcess;
