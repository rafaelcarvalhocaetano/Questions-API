import { Question } from '../models/question';

export interface IQuestion {

  questionAll();
  questionById(_id: string);
  createQuestion(question: Question);
  updateQuestion(question: Question, _id: string);
  deleteQuestion(_id: string);

}