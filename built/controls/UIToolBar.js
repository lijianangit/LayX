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
var UIWindowComponent_1 = require("../basic/models/UIWindowComponent");
var WindowMoveDragEvent_1 = require("../basic/events/WindowMoveDragEvent");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var ValueHelper = require("../utils/ValueHelper");
var JsonHelper = require("../utils/JsonHelper");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "toolBar";
        _this.height = 30;
        _this.drag = {
            vertical: true,
            horizontal: true,
            breakLeft: true,
            breakRight: true,
            breakTop: true,
            breakBottom: true
        };
        _this.height = ValueHelper.numberCast(options.height) || _this.height;
        _this.drag = options.drag === undefined ? _this.drag : JsonHelper.merge(_this.drag, options.drag);
        return _this;
    }
    UIToolBar.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var toolBarElement = document.createElement("div");
        ElementHelper.addClasses(toolBarElement, this.app.prefix, kebabCase, "flexbox", "flex-row");
        ElementHelper.addStyles(toolBarElement, {
            height: this.height + "px"
        });
        if (this.drag.vertical === true || this.drag.horizontal === true) {
            new WindowMoveDragEvent_1.default(toolBarElement, this.window, this.drag);
        }
        fragment.appendChild(toolBarElement);
        return fragment;
    };
    return UIToolBar;
}(UIWindowComponent_1.default));
exports.default = UIToolBar;
