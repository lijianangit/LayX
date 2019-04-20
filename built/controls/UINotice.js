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
var UIIcon_1 = require("./UIIcon");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var TimeHelper = require("../utils/TimeHelper");
var UINotice = (function (_super) {
    __extends(UINotice, _super);
    function UINotice(app, options) {
        var _this = _super.call(this, app) || this;
        _this.timer = 0;
        _this.fps = 10;
        _this.id = _this.app.notices.length + _this.app.noticeZIndex;
        _this.elementId = _this.app.prefix + "notice" + "-" + _this.id;
        _this.type = "info";
        _this.timeout = 3000;
        _this._element = null;
        _this._processElement = null;
        _this.type = CastHelper.noticeTypeCast(options.type, _this.type);
        _this.title = CastHelper.stringOrUndefinedCast(options.title);
        _this.message = CastHelper.stringCast(options.message);
        _this.timeout = CastHelper.numberCast(options.timeout, _this.timeout);
        return _this;
    }
    Object.defineProperty(UINotice.prototype, "element", {
        get: function () {
            return document.getElementById(this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UINotice.prototype, "processElement", {
        get: function () {
            return this.element.querySelector("." + (this.app.prefix + "notice") + "-process");
        },
        enumerable: true,
        configurable: true
    });
    UINotice.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var noticeElement = ElementHelper.createElement("div");
        noticeElement.id = this.elementId;
        ElementHelper.addClasses(noticeElement, this.app.prefix, "notice", "animate-d3s", "animate-fade-in-right");
        ElementHelper.addStyles(noticeElement, {
            zIndex: "" + this.app.noticeZIndex,
        });
        this.bindEvent(noticeElement);
        this.createClose(noticeElement);
        var noticeContainerElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(noticeContainerElement, this.app.prefix, "notice" + "-container");
        this.createTitle(noticeContainerElement);
        this.createContent(noticeContainerElement);
        noticeElement.appendChild(noticeContainerElement);
        this.createNoticeTime(noticeElement);
        this.createProcess(noticeElement);
        fragment.appendChild(noticeElement);
        return fragment;
    };
    UINotice.prototype.createClose = function (noticeElement) {
        var _this = this;
        var closeElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(closeElement, this.app.prefix, "notice" + "-close-button", "flexbox", "flex-center");
        var icon = new UIIcon_1.default(this.app, 'destroy');
        var iconElement = icon.present();
        closeElement.appendChild(iconElement);
        closeElement.addEventListener("mousedown", function (ev) {
            _this.destroy();
        });
        noticeElement.appendChild(closeElement);
    };
    UINotice.prototype.createTitle = function (noticeElement) {
        if (this.title !== undefined) {
            var titleElement = ElementHelper.createElement("div");
            ElementHelper.addClasses(titleElement, this.app.prefix, "notice" + "-title");
            titleElement.innerText = this.title;
            noticeElement.appendChild(titleElement);
        }
    };
    UINotice.prototype.createContent = function (noticeElement) {
        var contentELement = ElementHelper.createElement("div");
        ElementHelper.addClasses(contentELement, this.app.prefix, "notice" + "-content");
        contentELement.innerText = this.message;
        noticeElement.appendChild(contentELement);
    };
    UINotice.prototype.createNoticeTime = function (noticeElement) {
        var timeElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(timeElement, this.app.prefix, "notice" + "-time");
        timeElement.innerText = "" + TimeHelper.getDatetime();
        noticeElement.appendChild(timeElement);
    };
    UINotice.prototype.createProcess = function (noticeElement) {
        var processElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(processElement, this.app.prefix, "notice" + "-process");
        noticeElement.appendChild(processElement);
    };
    UINotice.prototype.calcTopOffset = function (index) {
        if (index === void 0) { index = undefined; }
        var currentTop = UINotice.topOffset;
        if (this.app.notices.length > 0) {
            var step = (index === undefined ? this.app.notices.length : index) - 1;
            var lastNotice = this.app.notices[step];
            var lastNoticeElement = lastNotice.element;
            var clientRect = lastNoticeElement.getBoundingClientRect();
            currentTop = clientRect.top + clientRect.height + UINotice.space;
        }
        return currentTop;
    };
    UINotice.prototype.bindEvent = function (noticeElement) {
        var _this = this;
        noticeElement.addEventListener("animationend", function (ev) {
            var element = _this.element;
            if (ElementHelper.containClass(element, _this.app.prefix, "animate-fade-in-right-reverse")) {
                _this.remove();
            }
            if (ElementHelper.containClass(element, _this.app.prefix, "animate-fade-in-right")) {
                _this.processAnimate();
            }
            ElementHelper.removeClasses(element, _this.app.prefix, "animate-fade-in-right-reverse", "animate-fade-in-right", "animate-slide-to-top");
        });
        noticeElement.addEventListener("mouseenter", function (ev) {
            clearInterval(_this.timer);
        });
        noticeElement.addEventListener("mouseleave", function (ev) {
            _this.processAnimate();
        });
    };
    UINotice.prototype.destroy = function () {
        ElementHelper.addClasses(this.element, this.app.prefix, "animate-fade-in-right-reverse");
    };
    UINotice.prototype.remove = function () {
        var index = this.app.notices.indexOf(this);
        this.app.notices.splice(index, 1);
        ElementHelper.removeElement(this.element);
        this.updateOffset(index);
    };
    UINotice.prototype.processAnimate = function () {
        var _this = this;
        this.timer = setInterval(function () {
            if (_this.fps <= _this.timeout) {
                ElementHelper.addStyles(_this.processElement, {
                    width: (_this.fps / _this.timeout) * 100 + "%"
                });
            }
            else {
                clearInterval(_this.timer);
                _this.destroy();
            }
            _this.fps += 10;
        }, 10);
    };
    UINotice.prototype.updateOffset = function (index, isCreate) {
        if (isCreate === void 0) { isCreate = false; }
        var notices = this.app.notices;
        for (var i = index; i < notices.length; i++) {
            ElementHelper.addStyles(notices[i].element, {
                top: (i === 0 ? UINotice.topOffset : this.calcTopOffset(i)) + "px"
            });
            if (!isCreate) {
                ElementHelper.addClasses(this.element, this.app.prefix, "animate-slide-to-top");
            }
        }
    };
    UINotice.topOffset = 24;
    UINotice.space = 10;
    return UINotice;
}(UIComponent_1.default));
exports.default = UINotice;
