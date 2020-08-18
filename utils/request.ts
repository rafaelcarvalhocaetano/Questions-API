import express from 'express';
import { Question } from '../models/question';

class RequestStatus {

  public sendRequest = (res: express.Response, status, data: Question) => {
    return res.status(status).json(data);
  }
}

export const Status = new RequestStatus()