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
var UIContentWindow = (function (_super) {
    __extends(UIContentWindow, _super);
    function UIContentWindow(options, app) {
        return _super.call(this, options, app) || this;
    }
    UIContentWindow.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var windowElement = document.createElement("div");
        windowElement.id = this.id;
        windowElement.classList.add(this.app.prefix + "window", this.app.prefix + "theme-" + this.theme);
        windowElement.style.width = this.width + "px";
        windowElement.style.height = this.height + "px";
        windowElement.style.minWidth = this.minWidth + "px";
        windowElement.style.minHeight = this.minHeight + "px";
        windowElement.style.maxWidth = this.maxWidth === innerWidth ? null : this.maxWidth + "px";
        windowElement.style.maxHeight = this.maxHeight === innerHeight ? null : this.maxHeight + "px";
        windowElement.style.background = this.background;
        var parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }
        for (var _i = 0, _a = [UIToolBar_1.default, UITopMenu_1.default, UISideBar_1.default, UISideBar_1.default]; _i < _a.length; _i++) {
            var component = _a[_i];
            this.initComponet(windowElement, component);
        }
        var resizeElements = this.createResizeView();
        if (resizeElements) {
            windowElement.appendChild(resizeElements);
        }
        fragment.appendChild(windowElement);
        return fragment;
    };
    return UIContentWindow;
}(UIWindow_1.default));
exports.default = UIContentWindow;
