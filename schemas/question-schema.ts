import mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    unique: true
  },
  result_question: {
    type: Boolean
  }
});