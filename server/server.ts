import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors'; 

import { Database } from '../utils/database';
import { QuestionController } from '../controller/question-controller';


export class Server {

  public app: express.Application;
  private database: Database;

  constructor() {
    this.app = express();
    this.database = new Database();
    this.database.createConnection();
    this.middler();
    this.routers();
  }

  private enabledCors() {
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*'
    };
    this.app.use(cors(options));
  }

  private middler() {
    this.enabledCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
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