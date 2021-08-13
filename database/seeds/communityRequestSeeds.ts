import { CommunityRequestType } from '../../constants/enums';
import { CommunityRequest } from '../../types';

const COMMUNITY_REQUEST_SEEDS: CommunityRequest[] = [
  {
    title: 'Add interview question 1',
    type: CommunityRequestType.INTERVIEW_QUESTION,
    descriptionData: {
      question: 'What is React?',
      answer: 'React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.',
    },
  },

];

export default COMMUNITY_REQUEST_SEEDS;
