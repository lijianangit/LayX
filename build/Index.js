"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/styles/common.css");
var AppProcess_1 = __importDefault(require("./core/AppProcess"));
function layxInstance() {
    var layx = function (options) { };
    var appProcess = new AppProcess_1.default();
    layx.v = appProcess.version;
    layx.create = function (options) {
        appProcess.create(options);
    };
    return layx;
}
exports.default = layxInstance();
