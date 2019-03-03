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
var UIComponent_1 = require("./UIComponent");
var UIWindowRelative = (function (_super) {
    __extends(UIWindowRelative, _super);
    function UIWindowRelative(app, window) {
        var _this = _super.call(this, app) || this;
        _this.window = window;
        return _this;
    }
    return UIWindowRelative;
}(UIComponent_1.default));
exports.default = UIWindowRelative;
