import mongoose from 'mongoose';

const TechnologyModel = new mongoose.Schema({
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

export const Technology = mongoose.models.Technology || mongoose.model('Technology', TechnologyModel);
