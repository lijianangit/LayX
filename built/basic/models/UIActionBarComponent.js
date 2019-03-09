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
Object.defineProperty(exports, "__esModule", { value: true });
var UIToolBarComponent_1 = require("./UIToolBarComponent");
var UIActionBarComponent = (function (_super) {
    __extends(UIActionBarComponent, _super);
    function UIActionBarComponent(app, window, toolBar, actionBar) {
        var _this = _super.call(this, app, window, toolBar) || this;
        _this.actionBar = actionBar;
        return _this;
    }
    return UIActionBarComponent;
}(UIToolBarComponent_1.default));
exports.default = UIActionBarComponent;
