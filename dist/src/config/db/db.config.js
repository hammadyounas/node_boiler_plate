"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constant_1 = require("../../constant");
mongoose_1.default.Promise = global.Promise;
const dbConnect = () => {
    mongoose_1.default.connect(constant_1.MONGO_URI, {});
    const connection = mongoose_1.default.connection;
    connection.once('open', function () {
        console.log('********** MongoDB database connection established successfully! **********');
    });
};
exports.dbConnect = dbConnect;
