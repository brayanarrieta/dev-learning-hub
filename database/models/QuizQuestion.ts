import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuizQuestionModel = new mongoose.Schema({
  question: {
    type: String,
  },
  answers: {
    type: [Schema.Types.Mixed],
  },
  technology: {
    type: Schema.Types.ObjectId,
    ref: 'Technology',
  },
},
{
  timestamps: true,
});

export const QuizQuestion = mongoose.models.QuizQuestion || mongoose.model('QuizQuestion', QuizQuestionModel);
