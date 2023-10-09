"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePacket = void 0;
class ResponsePacket {
    constructor(code, status, message, data = null) {
        this.code = code;
        this.status = status;
        this.message = message;
        this.data = data;
        return this;
    }
}
exports.ResponsePacket = ResponsePacket;
