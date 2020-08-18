import express from 'express';
import { Question } from '../models/question';

class RequestStatus {

  sendRequest = (response, statusCode, data) => response.status(statusCode).json(data);

}

export const Status = new RequestStatus()