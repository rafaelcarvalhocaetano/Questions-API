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
exports.QuestionController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const question_service_1 = require("../service/question-service");
const request_1 = require("../utils/request");
class Controller {
    questionAll(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_service_1.QuestionService.questionAll();
                request_1.Status.sendRequest(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `ALL QUESTION - ERROR API QUESTION ${e}`);
            }
        });
    }
    questionId(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_service_1.QuestionService.questionById(req.params.id);
                request_1.Status.sendRequest(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `ID QUESTION - ERROR API QUESTION ${e}`);
            }
        });
    }
    questionCreate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_service_1.QuestionService.createQuestion(req.body);
                request_1.Status.sendRequest(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `CREATE QUESTION - ERROR API QUESTION ${e}`);
            }
        });
    }
    questionUpdate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_service_1.QuestionService.updateQuestion(req.body, req.params.id);
                request_1.Status.sendRequest(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `UPDATE QUESTION - ERROR API QUESTION ${e}`);
            }
        });
    }
    questionDelete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_service_1.QuestionService.deleteQuestion(req.params.id);
                request_1.Status.sendRequest(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `DELETE QUESTION - ERROR API QUESTION ${e}`);
            }
        });
    }
}
exports.QuestionController = new Controller();
