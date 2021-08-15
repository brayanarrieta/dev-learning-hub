/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum HTTP_STATUS_CODES {
    INTERNAL_SERVER_ERROR = 500,
    UNPROCESSABLE_ENTITY= 422,
    OK = 200,
    NOT_FOUND = 404,
}

export enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
}

export enum CoursePlatform {
    UDEMY = 'Udemy',
    COURSERA = 'Coursera',
    YOUTUBE = 'YouTube',
    PLURALSIGHT ='Pluralsight'
}

export enum CommunityRequestType {
    CODE_SNIPPET = 'Code Snippet',
    COURSE = 'Course',
    INTERVIEW_QUESTION = 'Interview Question',
}

export enum CommunityRequestState {
    WAITING_REVIEW ='Waiting Review',
    MERGED ='Merged',
    CLOSED = 'Closed',
    REJECTED = 'Rejected',
}
