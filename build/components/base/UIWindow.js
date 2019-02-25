"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValueHelper_1 = require("../../utils/ValueHelper");
var ObjectHelper_1 = require("../../utils/ObjectHelper");
var StyleHelper_1 = require("../../utils/StyleHelper");
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
        this.border = "1px solid #3baced";
        this.boxShadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        this.parclose = false;
        this.animate = false;
        this.coord = null;
        this.mode = "layer";
        this.resizeBar = {};
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
        this.mode = options.mode || this.mode;
        if (typeof options.border === "boolean" && options.border === false) {
            this.border = "none";
        }
        if (typeof options.border === "string") {
            this.border = options.border;
        }
        if (typeof options.boxShadow === "boolean" && options.boxShadow === false) {
            this.boxShadow = "none";
        }
        if (typeof options.boxShadow === "string") {
            this.boxShadow = options.boxShadow;
        }
        if (this.mode === "layer") {
            if (typeof options.coord === "string" || options.coord === undefined) {
                this.coord = ValueHelper_1.calcCoord(this.width, this.height, options.coord);
            }
            if (options.coord instanceof Array) {
                var _a = options.coord, left = _a[0], top_1 = _a[1];
                this.coord = [left, top_1];
            }
        }
        if (typeof options.animate === "boolean" && options.animate === true) {
            this.animate = "zoom";
        }
        if (typeof options.animate === "string") {
            this.animate = options.animate;
        }
        if (typeof options.resizeBar === "boolean" && options.resizeBar === false) {
            this.resizeBar = undefined;
        }
        else if (typeof options.resizeBar === "object") {
            this.resizeBar = ObjectHelper_1.merge(this.resizeBar, options.resizeBar);
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
        var _a;
        if (this.parclose === true) {
            var parcloseElement = document.createElement("div");
            parcloseElement.id = this.id + "-parclose";
            (_a = parcloseElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, "parclose"));
            return parcloseElement;
        }
    };
    UIWindow.prototype.initComponet = function (parent, ctor) {
        var componet = new ctor(this, this.app);
        if (this[componet.name] !== undefined) {
            var componentFragment = componet.createView();
            if (componentFragment) {
                parent.appendChild(componentFragment);
            }
            return componet;
        }
    };
    return UIWindow;
}());
exports.default = UIWindow;
