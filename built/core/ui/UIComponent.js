"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringHelper = require("../../utils/StringHelper");
var CastHelper = require("../../utils/CastHelper");
var ElementHelper = require("../../utils/ElementHelper");
var StateStore_1 = require("../store/StateStore");
var UIComponent = (function () {
    function UIComponent() {
        this.components = {};
    }
    Object.defineProperty(UIComponent.prototype, "uniqueId", {
        get: function () {
            var generateUniqueId = StringHelper.generateUniqueId();
            var components = StateStore_1.default.instance.components;
            if (!components.hasOwnProperty(generateUniqueId)) {
                components[generateUniqueId] = this;
            }
            return generateUniqueId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIComponent.prototype, "element", {
        get: function () {
            return document.querySelector("[data-id='" + this.uniqueId + "']");
        },
        enumerable: true,
        configurable: true
    });
    UIComponent.prototype.addComponent = function (key, component) {
        key = CastHelper.stringCast(key);
        if (!this.components[key]) {
            this.components[key] = component;
        }
    };
    UIComponent.prototype.getComponent = function (path, component) {
        if (component === void 0) { component = this; }
        path = StringHelper.removeInvalidCharacter(CastHelper.stringCast(path));
        if (path.indexOf("/") > -1) {
            var keys = path.split("/");
            var tier = component.getComponent(keys[0]);
            if (tier === null) {
                return null;
            }
            for (var i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = tier.getComponent(keys[i + 1], tier);
                }
                else {
                    return tier;
                }
            }
            return tier;
        }
        else {
            if (component.components[path]) {
                return component.components[path];
            }
            return null;
        }
    };
    UIComponent.prototype.removeComponent = function (path) {
        path = StringHelper.removeInvalidCharacter(CastHelper.stringCast(path));
        if (path.indexOf("/") > -1) {
            var lastDiagonalIndex = path.lastIndexOf("/");
            var parentPath = path.substr(0, lastDiagonalIndex);
            var parentComponent = this.getComponent(parentPath);
            if (parentComponent) {
                parentComponent.removeComponent(path.substr(lastDiagonalIndex + 1));
            }
        }
        else {
            var component = this.components[path];
            if (component) {
                ElementHelper.removeElement(component.element);
                delete this.components[path];
            }
        }
    };
    return UIComponent;
}());
exports.default = UIComponent;
