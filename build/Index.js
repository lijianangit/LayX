"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(require("./components/Container"));
var containerOptions = { id: "hello" };
var container = new Container_1.default(containerOptions);
var fragment = container.createView(container);
document.body.appendChild(fragment);
//# sourceMappingURL=Index.js.map