"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeHelper = require("./TypeHelper");
var ExceptionHelper = require("./ExceptionHelper");
var JsonHelper = require("./JsonHelper");
function numberCast(option, defaultValue) {
    if (option === undefined)
        return defaultValue;
    if (typeof option === "number")
        return option;
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(option)) {
        return Number(option);
    }
    return ExceptionHelper.assertNever(option);
}
exports.numberCast = numberCast;
function booleanCast(option, defaultValue) {
    return option === undefined ? defaultValue : option;
}
exports.booleanCast = booleanCast;
function stringOrBooleanStyleCast(option, defaultValue, trueValue) {
    if (option === undefined)
        return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return defaultValue;
        }
        else {
            return trueValue;
        }
    }
    if (option === false)
        return null;
    return option;
}
exports.stringOrBooleanStyleCast = stringOrBooleanStyleCast;
function numberOrBooleanCast(option, defaultValue, trueValue, falseValue) {
    if (option === undefined)
        return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return defaultValue;
        }
        else {
            return trueValue;
        }
    }
    if (option === false) {
        if (falseValue === undefined) {
            return false;
        }
        else {
            return falseValue;
        }
    }
    return option;
}
exports.numberOrBooleanCast = numberOrBooleanCast;
function undefinedCast(option, defaultValue) {
    if (option === undefined)
        return defaultValue;
    else
        return option;
}
exports.undefinedCast = undefinedCast;
function windowModeCast(option, defaultValue) {
    if (option === undefined)
        return defaultValue;
    TypeHelper.isWindowMode(option);
    return option;
}
exports.windowModeCast = windowModeCast;
function borderCast(option, defaultValue) {
    if (typeof option === "string")
        return [option, null];
    if (option === false)
        return [null, null];
    var borderStyle = [null, null];
    var value = {};
    if (option === undefined || option === true) {
        value = JsonHelper.merge({}, defaultValue);
    }
    else {
        value = JsonHelper.merge(defaultValue, option);
    }
    if (typeof value.width === "number"
        && typeof value.color === "string"
        && (typeof value.style === "string" && ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "inherit"].indexOf(value.style) > -1)) {
        borderStyle[0] = value.width + "px " + value.style + " " + value.color;
    }
    if (typeof value.radius === "number") {
        borderStyle[1] = value.radius + "px";
    }
    return borderStyle;
}
exports.borderCast = borderCast;
function offsetCast(option, width, height) {
    if (option === undefined)
        return [(innerWidth - width) / 2, (innerHeight - height) / 2];
    if (TypeHelper.isWindowCoord(option)) {
        var _a = option, left = _a[0], top_1 = _a[1];
        return [left, top_1];
    }
    var coord = [0, 0];
    switch (option) {
        case "leftTop":
            break;
        case "leftCenter":
            coord[0] = 0;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "leftBottom":
            coord[0] = 0;
            coord[1] = innerHeight - height;
            break;
        case "topCenter":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = 0;
        case "center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "bottomCenter":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = innerHeight - height;
            break;
        case "rightTop":
            coord[0] = innerWidth - width;
            coord[1] = 0;
            break;
        case "rightCenter":
            coord[0] = innerWidth - width;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "rightBottom":
            coord[0] = innerWidth - width;
            coord[1] = innerHeight - height;
            break;
        default:
            return ExceptionHelper.assertNever(option);
    }
    return coord;
}
exports.offsetCast = offsetCast;
function windowAnimateCast(option, defaultValue, trueValue, falseValue) {
    if (option === undefined)
        return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return "zoom";
        }
        else {
            return trueValue;
        }
    }
    if (option === false) {
        if (falseValue === undefined) {
            return "none";
        }
        else {
            return falseValue;
        }
    }
    TypeHelper.isWindowAnimate(option);
    return option;
}
exports.windowAnimateCast = windowAnimateCast;
function jsonOrBooleanCast(option, defaultValue, trueValue, falseValue) {
    if (option === undefined)
        return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return defaultValue;
        }
        else {
            return trueValue;
        }
    }
    if (option === false) {
        if (falseValue === undefined) {
            return false;
        }
        else {
            return falseValue;
        }
    }
    if (defaultValue === false)
        return option;
    return JsonHelper.merge(defaultValue, option);
}
exports.jsonOrBooleanCast = jsonOrBooleanCast;
function contextMenusCast(option) {
    if (option === undefined || option === false)
        return false;
    TypeHelper.isContextMenus(option);
    return option;
}
exports.contextMenusCast = contextMenusCast;
function actionButtonsCast(option, defaultValue) {
    if (option === undefined || option === true)
        return defaultValue;
    if (option === false)
        return false;
    TypeHelper.isActionButtons(option);
    return option;
}
exports.actionButtonsCast = actionButtonsCast;
