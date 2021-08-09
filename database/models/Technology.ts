import mongoose from 'mongoose';

const Technology = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
    index: true,
    unique: true,
  },
},
{
  timestamps: true,
});

export default mongoose.models.Technology || mongoose.model('Technology', Technology);
