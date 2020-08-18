import mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  result: {
    type: Boolean
  }
});