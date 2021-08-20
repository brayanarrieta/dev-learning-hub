import { IconType } from 'react-icons';
import {
  FcCollaboration, FcFlashOn, FcQuestions, FcReading,
} from 'react-icons/fc';

export interface FeatureItem {
    title: string;
    icon: IconType;
    text: string;
}

const FEATURE_ITEMS: Array<FeatureItem> = [
  {
    title: 'Interview Questions Collection',
    text: 'A collection of common interview questions based on the community feedback.',
    icon: FcQuestions,
  },
  {
    title: 'Quiz InterviewPractice',
    text: 'A simulator to improve your skills and prepare before your interviews with some common questions based on the community feedback.',
    icon: FcCollaboration,
  },
  {
    title: 'Code Snippet Collection',
    text: 'A collection of developers code snippets of different technologies.',
    icon: FcFlashOn,
  },
  {
    title: 'Free Online Courses',
    text: 'A curated list of free courses from the different platforms created based on the community feedback.',
    icon: FcReading,
  },
];

export default FEATURE_ITEMS;
