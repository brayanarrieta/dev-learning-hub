export interface NavItem {
    label: string;
    href?: string;
}

export type CoursePlatform = 'Udemy' | 'Coursera' | 'YouTube';

export interface Course {
    _id?: string;
    title: string;
    description: string;
    link: string;
    platform: CoursePlatform;
    isExpired?: boolean;
}

export interface Technology {
    _id?: string;
    name: string;
    description: string;
    slug: string;
}

export interface InterviewQuestion {
    _id?: string;
    question: string,
    answer: string,
    technologyID?: number,
}
