"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const user_controller_1 = require("./user.controller");
const user_middleware_1 = require("./user.middleware");
userRouter.route('/register').post(user_middleware_1.userValidator, user_controller_1.registerUserController);
exports.default = userRouter;
