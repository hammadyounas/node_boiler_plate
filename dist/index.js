"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/config/app"));
const constant_1 = require("./src/constant");
app_1.default.get('/', (req, res) => res.send('Welcome to NodeJs App TypeScript'));
app_1.default.listen(constant_1.PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${constant_1.PORT}`);
});
