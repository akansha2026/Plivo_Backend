"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const fs_1 = __importDefault(require("fs"));
const yaml_1 = __importDefault(require("yaml"));
const path_1 = __importDefault(require("path"));
const file = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'openapi.yaml'), 'utf8');
exports.swaggerSpec = yaml_1.default.parse(file);
