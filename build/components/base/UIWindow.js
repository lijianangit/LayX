"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValueHelper_1 = require("../../utils/ValueHelper");
var ObjectHelper_1 = require("../../utils/ObjectHelper");
var UIWindow = (function () {
    function UIWindow(options, app) {
        this.options = options;
        this.app = app;
        this.width = 800;
        this.height = 600;
        this.minWidth = 200;
        this.minHeight = 200;
        this.maxWidth = innerWidth;
        this.maxHeight = innerHeight;
        this.theme = "default";
        this.background = "#ffffff";
        this.parclose = false;
        this.resize = {
            top: true,
            left: true,
            right: true,
            bottom: true,
            leftTop: true,
            rightTop: true,
            leftBottom: true,
            rightBottom: true
        };
        this.toolBar = {};
        this.topMenu = undefined;
        this.statuBar = undefined;
        this.sideBar = undefined;
        this.id = "" + app.prefix + options.id;
        this.width = ValueHelper_1.convertDimension(options.width) || this.width;
        this.height = ValueHelper_1.convertDimension(options.height, "BROWSER_INNER_HEIGHT") || this.height;
        this.minWidth = ValueHelper_1.convertDimension(options.minWidth) || this.minWidth;
        this.minHeight = ValueHelper_1.convertDimension(options.minHeight, "BROWSER_INNER_HEIGHT") || this.minHeight;
        this.maxWidth = ValueHelper_1.convertDimension(options.maxWidth) || this.maxWidth;
        this.maxHeight = ValueHelper_1.convertDimension(options.maxHeight, "BROWSER_INNER_HEIGHT") || this.maxHeight;
        this.theme = options.theme || this.theme;
        this.background = options.background || this.background;
        this.parclose = typeof options.parclose === "boolean" ? options.parclose : this.parclose;
        if (typeof options.resize === "boolean" && options.resize === false) {
            this.resize = ObjectHelper_1.reverseBooleanObject(this.resize);
        }
        else if (typeof options.resize === "object") {
            this.resize = ObjectHelper_1.merge(this.resize, options.resize);
        }
        if (typeof options.toolBar === "boolean" && options.toolBar === false) {
            this.toolBar = undefined;
        }
        else if (typeof options.toolBar === "object") {
            this.toolBar = ObjectHelper_1.merge(this.toolBar, options.toolBar);
        }
        if (typeof options.topMenu === "object") {
            this.topMenu = ObjectHelper_1.merge({}, options.topMenu);
        }
        if (typeof options.statuBar === "object") {
            this.statuBar = ObjectHelper_1.merge({}, options.statuBar);
        }
        if (typeof options.sideBar === "object") {
            this.sideBar = ObjectHelper_1.merge({}, options.sideBar);
        }
    }
    UIWindow.prototype.createParcloseView = function () {
        if (this.parclose === true) {
            var parcloseElement = document.createElement("div");
            parcloseElement.id = this.id + "-parclose";
            parcloseElement.classList.add(this.app.prefix + "parclose");
            return parcloseElement;
        }
    };
    UIWindow.prototype.createResizeView = function () {
        if (ObjectHelper_1.leastOneTrue(this.resize)) {
            var resizeElements = document.createElement("div");
            resizeElements.classList.add(this.app.prefix + "resizes");
            for (var _i = 0, _a = Object.keys(this.resize); _i < _a.length; _i++) {
                var key = _a[_i];
                this.createResizeItem(resizeElements, this.resize.top, ValueHelper_1.getKebabCase(key));
            }
            return resizeElements;
        }
    };
    UIWindow.prototype.createResizeItem = function (parent, isCreate, direction) {
        if (!isCreate)
            return;
        var resize = document.createElement("div");
        resize.classList.add(this.app.prefix + "resize-" + direction);
        parent.appendChild(resize);
    };
    UIWindow.prototype.initComponet = function (parent, ctor) {
        var componet = new ctor(this, this.app);
        if (this[componet.name] !== undefined) {
            var componentFragment = componet.createView();
            parent.appendChild(componentFragment);
            return componet;
        }
    };
    return UIWindow;
}());
exports.default = UIWindow;
