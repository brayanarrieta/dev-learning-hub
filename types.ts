import { CommunityRequestState, CommunityRequestType, CoursePlatform } from './constants/enums';

export interface NavItem {
    label: string;
    href?: string;
}

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
    technology?: string,
}

export interface CodeSnippet {
    _id?: string;
    title: string;
    description: string;
    content: string;
    technology?: string,
}
export interface CommunityRequest {
    _id?: string;
    title: string;
    type: CommunityRequestType
    user: {
        name: string,
        email: string,
    }
    descriptionData: any;
    state: CommunityRequestState;
    approves: string[];
}
