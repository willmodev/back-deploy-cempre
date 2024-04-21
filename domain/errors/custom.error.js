"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
    static badRequest(message) {
        return new CustomError(message, 400);
    }
    static unauthorized(message) {
        return new CustomError(message, 401);
    }
    static forbidden(message) {
        return new CustomError(message, 403);
    }
    static notFound(message) {
        return new CustomError(message, 404);
    }
    static internalServer(message = 'Internal server error') {
        return new CustomError(message, 500);
    }
}
exports.CustomError = CustomError;
