import mongoose from 'mongoose';

const { Schema } = mongoose;

const InterviewQuestion = new mongoose.Schema({
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

export default mongoose.models.InterviewQuestion || mongoose.model('InterviewQuestion', InterviewQuestion);
