export const SELECT_THREAD = 'SELECT_THREAD'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'
export const ADD_COMMENT = "ADD_COMMENT"
export const THREADS = [
    {
        id: '123',
        question: 'is this question number 1?',
        votes: 0,
        comments: [
            {
                id: '135',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                comments: [
                    {
                        id: '579',
                        comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                        comments: []
                    }
                ]
            }
        ]
    },
    {
        id: '456',
        question: 'At vero eos et accusamus et iusto odio dignissimos ducimus?',
        votes: 0,
        comments: [
            {
                id: '246',
                comment: 'yes, this is question 2 because...',
                comments: [
                    {
                        id: '680',
                        comment: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
                        comments: []
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
                comment: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
                comments: [
                    {
                        id: '980',
                        comment: 'im not sure i agree, i think its a whole other question',
                        comments: []
                    }
                ]
            }
        ]
    }
]