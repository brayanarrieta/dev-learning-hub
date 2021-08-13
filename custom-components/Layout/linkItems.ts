import {
  FiStar,
  FiAward,
  FiBookOpen,
  FiUsers,
  FiBook,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import {
  CODE_SNIPPETS_PAGE_URL,
  COMMUNITY_REQUESTS_PAGE_URL,
  COURSES_PAGE_URL,
  INTERVIEW_QUESTIONS_PAGE_URL,
} from '../../constants/pageURLs';

interface LinkItem {
  name: string;
  icon: IconType;
  link: string;
}

const LINK_ITEMS: Array<LinkItem> = [
  { name: 'Interview Questions', icon: FiBookOpen, link: INTERVIEW_QUESTIONS_PAGE_URL },
  { name: 'Interview Quiz', icon: FiBook, link: '#' },
  { name: 'Code Snippet Collection', icon: FiStar, link: CODE_SNIPPETS_PAGE_URL },
  { name: 'Free Online Courses', icon: FiAward, link: COURSES_PAGE_URL },
  { name: 'Community Requests', icon: FiUsers, link: COMMUNITY_REQUESTS_PAGE_URL },
];

export default LINK_ITEMS;
