"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theme_1 = require("../enums/Theme");
var ValueHelper_1 = require("../utils/ValueHelper");
var Container = (function () {
    function Container(options) {
        this.prefix = "layx-";
        this.width = 800;
        this.height = 600;
        this.minWidth = 200;
        this.minHeight = 200;
        this.maxWidth = innerWidth;
        this.maxHeight = innerHeight;
        this.theme = Theme_1.Theme.DEFAULT;
        this.resize = true;
        this.id = "" + this.prefix + options.id;
        this.width = ValueHelper_1.convertDimension(options.width) || this.width;
        this.height = ValueHelper_1.convertDimension(options.height, "BROWSER_INNER_HEIGHT") || this.height;
        this.minWidth = ValueHelper_1.convertDimension(options.minWidth) || this.minWidth;
        this.minHeight = ValueHelper_1.convertDimension(options.minHeight, "BROWSER_INNER_HEIGHT") || this.minHeight;
        this.maxWidth = ValueHelper_1.convertDimension(options.maxWidth) || this.maxWidth;
        this.maxHeight = ValueHelper_1.convertDimension(options.maxHeight, "BROWSER_INNER_HEIGHT") || this.maxHeight;
        this.theme = options.theme || this.theme;
        this.resize = options.resize || this.resize;
    }
    Container.prototype.createView = function (container) {
        var fragment = document.createDocumentFragment();
        var containerElement = document.createElement("div");
        containerElement.id = container.id;
        containerElement.classList.add(container.prefix + "container", container.prefix + "theme-" + container.theme);
        containerElement.style.width = container.width + "px";
        containerElement.style.height = container.height + "px";
        containerElement.style.minWidth = container.minWidth + "px";
        containerElement.style.minHeight = container.minHeight + "px";
        containerElement.style.maxWidth = container.maxWidth === innerWidth ? null : container.maxWidth + "px";
        containerElement.style.maxHeight = container.maxHeight === innerHeight ? null : container.maxHeight + "px";
        fragment.appendChild(containerElement);
        return fragment;
    };
    Container.prototype.createResizeView = function (container) {
    };
    return Container;
}());
exports.default = Container;
//# sourceMappingURL=Container.js.map