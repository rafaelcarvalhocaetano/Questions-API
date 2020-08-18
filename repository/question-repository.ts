import mongoose from 'mongoose';
import { QuestionSchema } from '../schemas/question-schema';


interface IQuestion extends mongoose.Document {
  question: string;
  result: boolean;
}

export const QuestionRepository = mongoose.model<IQuestion>('items', QuestionSchema);