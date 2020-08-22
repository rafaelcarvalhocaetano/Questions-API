"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
class RequestStatus {
    constructor() {
        this.sendRequest = (response, statusCode, data) => response.status(statusCode).json(data);
    }
}
exports.Status = new RequestStatus();
