import mongoose from 'mongoose';
import { CoursePlatform } from '../../constants/enums';

const CourseModel = new mongoose.Schema({
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
  description: {
    type: String,
  },
  platform: {
    type: String,
    enum: Object.values(CoursePlatform),
  },
},
{
  timestamps: true,
});

export const Course = mongoose.models.Course || mongoose.model('Course', CourseModel);
