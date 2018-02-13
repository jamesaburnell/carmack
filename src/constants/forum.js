export const SELECT_THREAD = 'SELECT_THREAD'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

export const THREADS = [
    {
        id: '123',
        question: 'is this question number 1?',
        votes: 0,
        comments: [
            {
                id: '135',
                comment: 'yes, this is question 1 because...',
                comments: [
                    {
                        id: '579',
                        comment: 'im not sure i agree, i think its a whole other question'
                    }
                ]
            }
        ]
    },
    {
        id: '456',
        question: 'is this question number 2?',
        votes: 0,
        comments: [
            {
                id: '246',
                comment: 'yes, this is question 2 because...',
                comments: [
                    {
                        id: '680',
                        comment: 'im not sure i agree, i think its a whole other question'
                    }
                ]
            }
        ]
    },
    {
        id: '789',
        question: 'is this question number 3?',
        votes: 0,
        comments: [
            {
                id: '579',
                comment: 'yes, this is question 3 because...',
                comments: [
                    {
                        id: '980',
                        comment: 'im not sure i agree, i think its a whole other question'
                    }
                ]
            }
        ]
    }
]