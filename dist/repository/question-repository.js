"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const question_schema_1 = require("../schemas/question-schema");
exports.QuestionRepository = mongoose_1.default.model('items', question_schema_1.QuestionSchema);
