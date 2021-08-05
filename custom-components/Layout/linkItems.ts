import {
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItem {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItem> = [
  { name: 'Interview Questions', icon: FiTrendingUp, link: '#' },
  { name: 'Interview Quiz', icon: FiCompass, link: '#' },
  { name: 'CheatSheets Collection', icon: FiStar, link: '#' },
  { name: 'Free Online Courses', icon: FiSettings, link: '#' },
  { name: 'Community Requests', icon: FiSettings, link: '#' },
];

export default LinkItems;
