import mongoose from 'mongoose';

const { Schema } = mongoose;

const CodeSnippetModel = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  technology: {
    type: Schema.Types.ObjectId,
    ref: 'Technology',
  },
},
{
  timestamps: true,
});

export const CodeSnippet = mongoose.models.CodeSnippet || mongoose.model('CodeSnippet', CodeSnippetModel);
