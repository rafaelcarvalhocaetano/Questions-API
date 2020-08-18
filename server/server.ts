import express from 'express';
import cors from 'cors';
import bodyParse from 'body-parser';


export class Server {

  public app: express.Application;

  constructor() {
    this.initializerModules();
    this.enabledCors();
    this.initializeMiddlers();
  }

  // initializer
  private initializerModules() {
    this.app = express();
  }

  // cors
  private enabledCors() {
    const options: cors.CorsOptions = {
      methods: 'GET, POST, PUT, DELETE, OPTIONS',
      origin: '*'
    };
    this.app.use(cors(options));
  }

  // middler
  private initializeMiddlers() {
    this.app.use(bodyParse.json());
    this.app.use(bodyParse.urlencoded({ extended: true }));
  }

  // routes
  private routers() {
    this.app.get('/', (req, resp, next) => resp.send({ message: 'success API '}));
  }


}