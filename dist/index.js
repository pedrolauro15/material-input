"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./styles.css");
const TextField = ({ label, ...rest }) => {
    return (react_1.default.createElement("div", { className: "floating-label" },
        react_1.default.createElement("input", Object.assign({ className: "floating-input", placeholder: " " }, rest)),
        react_1.default.createElement("label", null, label)));
};
exports.default = TextField;
