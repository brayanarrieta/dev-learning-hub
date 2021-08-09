export interface NavItem {
    label: string;
    href?: string;
}

export type CoursePlatform = 'Udemy' | 'Coursera' | 'YouTube';

export interface Course {
    _id?: number;
    title: string;
    description: string;
    link: string;
    platform: CoursePlatform;
    isExpired?: boolean;
}

export interface Technology {
    _id?: number;
    name: string;
    description: string;
    slug: string;
}

export interface InterviewQuestion {
    question: string,
    answer: string,
    technologyID?: number,
}