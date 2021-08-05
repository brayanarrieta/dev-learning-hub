import {
  FiStar,
  FiAward,
  FiBookOpen,
  FiUsers,
  FiBook,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItem {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItem> = [
  { name: 'Interview Questions', icon: FiBookOpen, link: '#' },
  { name: 'Interview Quiz', icon: FiBook, link: '#' },
  { name: 'CheatSheets Collection', icon: FiStar, link: '#' },
  { name: 'Free Online Courses', icon: FiAward, link: '#' },
  { name: 'Community Requests', icon: FiUsers, link: '#' },
];

export default LinkItems;
