import mongoose from 'mongoose';
import { QuestionSchema } from '../schemas/question-schema';


interface IQ extends mongoose.Document {
  question: string;
  result: boolean;
}

export const QuestionRepository = mongoose.model<IQ>('items', QuestionSchema);
