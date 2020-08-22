"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.QuestionSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
        unique: true
    },
    result_question: {
        type: Boolean
    }
});
