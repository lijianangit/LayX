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
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIFrameContent = (function (_super) {
    __extends(UIFrameContent, _super);
    function UIFrameContent(app, window, url) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "url-content";
        _this._element = null;
        _this._contentWindow = null;
        _this.url = CastHelper.stringCast(url);
        return _this;
    }
    Object.defineProperty(UIFrameContent.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIFrameContent.prototype, "contentWindow", {
        get: function () {
            var frameElement = document.getElementById("" + this.elementId);
            if (!frameElement)
                return null;
            return frameElement.contentWindow;
        },
        enumerable: true,
        configurable: true
    });
    UIFrameContent.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var frameContentElement = ElementHelper.createElement("iframe");
        frameContentElement.setAttribute("data-window-id", this.window.id);
        frameContentElement.id = this.elementId;
        frameContentElement.setAttribute("frameborder", "0");
        frameContentElement.setAttribute("scrolling", "no");
        frameContentElement.setAttribute("allowtransparency", "true");
        frameContentElement.src = this.url;
        ElementHelper.addClasses(frameContentElement, this.app.prefix, "url-content");
        this.bindEvent(frameContentElement);
        fragment.appendChild(frameContentElement);
        return fragment;
    };
    UIFrameContent.prototype.bindEvent = function (frameContentElement) {
        var _this = this;
        frameContentElement.addEventListener("load", function (ev) {
            var contentWindow = frameContentElement.contentWindow;
            if (!contentWindow)
                return;
            contentWindow.document.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.returnValue = false;
                var event = document.createEvent('Event');
                event.initEvent("contextmenu", true);
                _this.window.element.dispatchEvent(event);
                var clientRect = _this.element.getBoundingClientRect();
                var contextMenuBar = _this.window.getComponent("" + "context-menu-bar");
                contextMenuBar && contextMenuBar.updateOffset(ev, _this.window.zIndex + 1, ev.pageX + clientRect.left, ev.pageY + clientRect.top);
                return false;
            });
            contentWindow.document.addEventListener("mousedown", function (ev) {
                var event = document.createEvent('Event');
                event.initEvent("mousedown", true);
                _this.window.element.dispatchEvent(event);
            });
            contentWindow.addEventListener("mousemove", function (ev) {
                var clientRect = _this.element.getBoundingClientRect();
                var pageY = ev.pageY + clientRect.top;
                if (_this.app.salver && _this.app.salver.element) {
                    if (pageY >= parent.innerHeight - 50) {
                        if (ElementHelper.containClass(_this.app.salver.element, _this.app.prefix, "salver-bar-keep"))
                            return;
                        _this.app.salver.show();
                    }
                    else {
                        if (!ElementHelper.containClass(_this.app.salver.element, _this.app.prefix, "salver-bar-keep"))
                            return;
                        _this.app.salver.show(false);
                    }
                }
            });
        });
    };
    return UIFrameContent;
}(UIWindowComponent_1.default));
exports.default = UIFrameContent;
