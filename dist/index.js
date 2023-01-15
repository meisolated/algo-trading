"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const trueData_1 = __importDefault(require("./lib/trueData"));
const TrueD = new trueData_1.default(config_1.default.trueData.username, config_1.default.trueData.password);
TrueD.initializeAccessToken();
