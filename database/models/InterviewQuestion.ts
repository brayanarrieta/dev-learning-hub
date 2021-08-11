import mongoose from 'mongoose';

const { Schema } = mongoose;

const InterviewQuestionModel = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  technologyId: {
    type: Schema.Types.ObjectId,
    ref: 'Technology',
  },
},
{
  timestamps: true,
});

export const InterviewQuestion = mongoose.models.InterviewQuestion || mongoose.model('InterviewQuestion', InterviewQuestionModel);
