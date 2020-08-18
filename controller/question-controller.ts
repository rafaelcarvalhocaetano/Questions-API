import { QuestionService } from '../service/question-service';
import { Status } from '../utils/request';
import HttpStatus from 'http-status';
import express from 'express';

class Controller {

  async questionAll(req: express.Request, resp: express.Response) {
    try {
      const data = await QuestionService.questionAll();
      Status.sendRequest(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, `ALL QUESTION - ERROR API QUESTION ${e}`);
    }
  }

  async questionId(req: express.Request, resp: express.Response) {
    try {
      const data = await QuestionService.questionById(req.params.id);
      Status.sendRequest(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, `ID QUESTION - ERROR API QUESTION ${e}`);
    }
  }

  async questionCreate(req: express.Request, resp: express.Response) {
    try {
      const data = await QuestionService.createQuestion(req.body);
      Status.sendRequest(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, `CREATE QUESTION - ERROR API QUESTION ${e}`);
    }
  }

  async questionUpdate(req: express.Request, resp: express.Response) {
    try {
      const data = await QuestionService.updateQuestion(req.body, req.params.id);
      Status.sendRequest(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, `UPDATE QUESTION - ERROR API QUESTION ${e}`);
    }
  }

  async questionDelete(req: express.Request, resp: express.Response) {
    try {
      const data = await QuestionService.deleteQuestion(req.params.id);
      Status.sendRequest(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, `DELETE QUESTION - ERROR API QUESTION ${e}`);
    }
  }

}

export const QuestionController = new Controller();