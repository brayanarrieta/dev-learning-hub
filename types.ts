export interface NavItem {
    label: string;
    href?: string;
}

export type CoursePlatform = 'Udemy' | 'Coursera' | 'YouTube';

export interface Course {
    _id: number;
    title: string;
    description: string;
    link: string;
    platform: CoursePlatform;
    isExpired?: boolean;
}
