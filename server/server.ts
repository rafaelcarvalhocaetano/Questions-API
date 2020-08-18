import express from 'express';
import cors from 'cors';
import bodyParse from 'body-parser';

import { QuestionController } from '../controller/question-controller';
import { Database } from '../utils/database';


export class Server {

  public app: express.Application;
  private database: Database;

  constructor() {
    this.app = express();
    this.database = new Database();
    this.database.createConnection();
    this.initializeMiddlers();
    this.routers();
  }

  // cors
  private enabledCors() {
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*'
    };
    this.app.use(cors(options));
  }

  // middler
  private initializeMiddlers() {
    this.enabledCors();
    this.app.use(bodyParse.json());
    this.app.use(bodyParse.urlencoded({ extended: true }));
  }

  // routes
  private routers() {
    this.app.get('/', (req, resp, next) => resp.send({ message: 'success API '}));

    this.app.route('/api/v1/question').get(QuestionController.questionAll);
    this.app.route('/api/v1/question/:id').get(QuestionController.questionId);
    this.app.route('/api/v1/question').post(QuestionController.questionCreate);
    this.app.route('/api/v1/question/:id').put(QuestionController.questionUpdate);
    this.app.route('/api/v1/question/:id').delete(QuestionController.questionDelete);
  }

}