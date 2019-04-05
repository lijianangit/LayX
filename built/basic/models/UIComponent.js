"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CastHelper = require("../../utils/CastHelper");
var StringHelper = require("../../utils/StringHelper");
var UIComponent = (function () {
    function UIComponent(app) {
        this.app = app;
        this.components = {};
    }
    UIComponent.prototype.setComponent = function (key, component) {
        key = CastHelper.stringCast(key);
        if (!this.components[key]) {
            this.components[key] = component;
        }
    };
    UIComponent.prototype.getComponent = function (key, component) {
        if (component === void 0) { component = this; }
        key = CastHelper.stringCast(key);
        key = StringHelper.removeValidSymbol(key);
        if (key.indexOf("/") > -1) {
            var keys = key.split("/");
            var tier = component.getComponent(keys[0]);
            if (tier === null)
                return null;
            for (var i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = tier.getComponent(keys[i + 1], tier);
                }
                else
                    return tier;
            }
            return tier;
        }
        else {
            if (component.components[key]) {
                return component.components[key];
            }
            return null;
        }
    };
    UIComponent.prototype.removeComponent = function (key) {
        key = CastHelper.stringCast(key);
        if (this.components[key]) {
            delete this.components[key];
        }
    };
    return UIComponent;
}());
exports.default = UIComponent;
