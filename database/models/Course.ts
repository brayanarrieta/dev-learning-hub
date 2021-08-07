import mongoose from 'mongoose';

const Course = new mongoose.Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  isExpired: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
});

export default mongoose.models.Course || mongoose.model('Course', Course);
