"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIToolBar_1 = __importDefault(require("./UIToolBar"));
var UITopMenu_1 = __importDefault(require("./UITopMenu"));
var UISideBar_1 = __importDefault(require("./UISideBar"));
var UIWindow_1 = __importDefault(require("./base/UIWindow"));
var StyleHelper_1 = require("../utils/StyleHelper");
var UIResizeBar_1 = __importDefault(require("./UIResizeBar"));
var UIContentWindow = (function (_super) {
    __extends(UIContentWindow, _super);
    function UIContentWindow(options, app) {
        return _super.call(this, options, app) || this;
    }
    UIContentWindow.prototype.createView = function () {
        var _a;
        var fragment = document.createDocumentFragment();
        var windowElement = document.createElement("div");
        windowElement.id = this.id;
        (_a = windowElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, "window", "mode-" + this.mode, "flexbox", "theme-" + this.theme, this.animate !== false ? "animated" : "", this.animate !== false ? "animated-" + this.animate + "In" : ""));
        StyleHelper_1.batchStyles(windowElement, {
            zIndex: "" + this.app.zIndex,
            boxShadow: this.boxShadow,
            webkitBoxShadow: this.boxShadow,
            left: this.coord === null ? null : this.coord[0] + "px",
            top: this.coord === null ? null : this.coord[1] + "px",
            border: this.border,
            width: this.width + "px",
            height: this.height + "px",
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            maxWidth: this.maxWidth === innerWidth ? null : this.maxWidth + "px",
            maxHeight: this.maxHeight === innerHeight ? null : this.maxHeight + "px",
            background: this.background
        });
        var parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }
        for (var _i = 0, _b = [UIResizeBar_1.default, UIToolBar_1.default, UITopMenu_1.default, UISideBar_1.default, UISideBar_1.default]; _i < _b.length; _i++) {
            var component = _b[_i];
            this.initComponet(windowElement, component);
        }
        fragment.appendChild(windowElement);
        return fragment;
    };
    return UIContentWindow;
}(UIWindow_1.default));
exports.default = UIContentWindow;
