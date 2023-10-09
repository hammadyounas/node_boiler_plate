"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserController = void 0;
const user_services_1 = require("./user.services");
const registerUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUserExist = yield (0, user_services_1.isEmailExistService)(req.body.email, next);
        if (!isUserExist) {
            const user = Object.assign({}, req.body);
            yield (0, user_services_1.createUserService)(user, res);
        }
        else {
            const error = new Error('User Already Exist');
            error.statusCode = 403;
            return next(error);
        }
    }
    catch (error) {
        // error.statusCode = 403;
        next(error);
    }
});
exports.registerUserController = registerUserController;
