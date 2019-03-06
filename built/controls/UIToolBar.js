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
var UIWindowRelative_1 = require("../basic/models/UIWindowRelative");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "toolBar";
        return _this;
    }
    UIToolBar.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        return fragment;
    };
    return UIToolBar;
}(UIWindowRelative_1.default));
exports.default = UIToolBar;
