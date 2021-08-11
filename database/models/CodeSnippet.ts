import mongoose from 'mongoose';

const { Schema } = mongoose;

const CodeSnippet = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  content: {
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

export default mongoose.models.CodeSnippet || mongoose.model('CodeSnippet', CodeSnippet);
