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
var UIComponent_1 = require("../basic/models/UIComponent");
var ElementHelper = require("../utils/ElementHelper");
var UIDragLayer = (function (_super) {
    __extends(UIDragLayer, _super);
    function UIDragLayer(app) {
        var _this = _super.call(this, app) || this;
        _this.elementId = "" + (_this.app.prefix + "drag-layer");
        _this._element = null;
        return _this;
    }
    Object.defineProperty(UIDragLayer.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIDragLayer.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var dragLayerElement = ElementHelper.createElement("div");
        dragLayerElement.id = this.elementId;
        ElementHelper.addClasses(dragLayerElement, this.app.prefix, "drag-layer");
        fragment.appendChild(dragLayerElement);
        return fragment;
    };
    UIDragLayer.prototype.updateZIndex = function (zIndex) {
        var element = this.element;
        ElementHelper.addClasses(element, this.app.prefix, "drag-layer" + "-active");
        ElementHelper.addStyles(element, {
            zIndex: "" + zIndex
        });
    };
    UIDragLayer.prototype.hide = function () {
        var element = this.element;
        ElementHelper.removeClasses(element, this.app.prefix, "drag-layer" + "-active");
    };
    return UIDragLayer;
}(UIComponent_1.default));
exports.default = UIDragLayer;
