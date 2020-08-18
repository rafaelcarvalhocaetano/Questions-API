import { IQuestion } from '../repository/IQuestion';
import { Question } from '../models/question';
import { QuestionRepository } from '../repository/question-repository';

class Service implements IQuestion {

  async questionAll() {
    const data = await QuestionRepository.findOne();
    return data;
  }

  async questionById(_id: string) {
    const data = await QuestionRepository.findById(_id);
    return data;
  }

  async createQuestion(question: Question) {
    const data = await QuestionRepository.create(question);
    return data;
  }

  async updateQuestion(question: Question, _id: string) {
    const data = await QuestionRepository.findByIdAndUpdate(_id, question);
    return data;
  }

  async deleteQuestion(_id: string) {
    const data = await QuestionRepository.findByIdAndRemove(_id);
    return data;
  }
}

export const QuestionService = new Service();