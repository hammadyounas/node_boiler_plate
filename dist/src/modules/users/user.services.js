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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.isEmailExistService = void 0;
const user_modal_1 = require("./user.modal");
const bcrypt_1 = __importDefault(require("bcrypt"));
const constant_1 = require("../../constant");
const utils_1 = require("../../utils");
const isEmailExistService = (email, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUser = yield user_modal_1.User.findOne({ "email": email, isDeleted: false, status: 'ACTIVE' });
        if (isUser) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        error.statusCode = 400;
        return next(error);
    }
});
exports.isEmailExistService = isEmailExistService;
const createUserService = (data, res) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(parseInt(constant_1.BCRYPT_SALT));
    data.password = yield bcrypt_1.default.hash(data.password, salt);
    const newUser = new user_modal_1.User(data);
    const result = yield newUser.save();
    if (result._doc)
        delete result._doc.password;
    const resPacket = new utils_1.ResponsePacket(201, true, 'User Created Successfully!', result);
    res.status(200).json(resPacket);
});
exports.createUserService = createUserService;
