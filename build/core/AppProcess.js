"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIContentWindow_1 = __importDefault(require("../components/UIContentWindow"));
var StyleHelper_1 = require("../utils/StyleHelper");
var AppProcess = (function () {
    function AppProcess() {
        this.version = "3.0.0";
        this.prefix = "layx-";
        this._zIndex = 10000000;
    }
    Object.defineProperty(AppProcess.prototype, "zIndex", {
        get: function () {
            return this._zIndex++;
        },
        enumerable: true,
        configurable: true
    });
    AppProcess.prototype.create = function (options) {
        var window = new UIContentWindow_1.default(options, this);
        var windowFragment = window.createView();
        if (windowFragment) {
            document.body.appendChild(windowFragment);
        }
    };
    AppProcess.prototype.destroy = function (id) {
        var _this = this;
        var _a;
        var currentWindow = document.getElementById("" + (this.prefix + id));
        if (currentWindow != null) {
            (_a = currentWindow.classList).add.apply(_a, StyleHelper_1.batchClasses(this.prefix, "animated-zoomOut"));
            currentWindow.addEventListener("animationend", function () {
                currentWindow.classList.remove(_this.prefix + "animated-zoomOut");
                if (currentWindow.parentNode != null) {
                    currentWindow.parentNode.removeChild(currentWindow);
                }
            });
        }
    };
    return AppProcess;
}());
exports.default = AppProcess;
