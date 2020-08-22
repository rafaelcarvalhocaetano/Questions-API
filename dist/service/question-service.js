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
exports.QuestionService = void 0;
const question_repository_1 = require("../repository/question-repository");
class Service {
    questionAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield question_repository_1.QuestionRepository.find();
            return data;
        });
    }
    questionById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield question_repository_1.QuestionRepository.findById(_id);
            return data;
        });
    }
    createQuestion(question) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield question_repository_1.QuestionRepository.create(question);
            return data;
        });
    }
    updateQuestion(question, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield question_repository_1.QuestionRepository.findByIdAndUpdate(_id, question);
            return data;
        });
    }
    deleteQuestion(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield question_repository_1.QuestionRepository.findByIdAndRemove(_id);
            return data;
        });
    }
}
exports.QuestionService = new Service();
