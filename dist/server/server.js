"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("../utils/database");
const question_controller_1 = require("../controller/question-controller");
class Server {
    constructor() {
        this.app = express_1.default();
        this.database = new database_1.Database();
        this.database.createConnection();
        this.middler();
        this.routers();
    }
    enabledCors() {
        const options = {
            methods: 'GET, OPTIONS, PUT, POST, DELETE',
            origin: '*'
        };
        this.app.use(cors_1.default(options));
    }
    middler() {
        this.enabledCors();
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    // routes
    routers() {
        this.app.get('/', (req, resp, next) => resp.send({ message: 'success API ' }));
        this.app.route('/api/v1/question').get(question_controller_1.QuestionController.questionAll);
        this.app.route('/api/v1/question/:id').get(question_controller_1.QuestionController.questionId);
        this.app.route('/api/v1/question').post(question_controller_1.QuestionController.questionCreate);
        this.app.route('/api/v1/question/:id').put(question_controller_1.QuestionController.questionUpdate);
        this.app.route('/api/v1/question/:id').delete(question_controller_1.QuestionController.questionDelete);
    }
}
exports.Server = Server;
