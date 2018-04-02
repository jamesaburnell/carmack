import { 
    SELECT_THREAD, 
    THREADS,
    UPVOTE,
    DOWNVOTE,
    ADD_COMMENT
} from './../constants/forum'

import { updateVotes } from './../helpers'

export default function forum(state = {
    threads: THREADS,
    selectedThread: {
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
    }
}, action) {
	
	switch(action.type) {

        case SELECT_THREAD:
            return {
                ...state,
                selectedThread: action.data
            }

        case UPVOTE:
            return {
                ...state,
                threads: updateVotes(1, action.id, state.threads)
            }

        case DOWNVOTE:
            return {
                ...state,
                threads: updateVotes(-1, action.id, state.threads)
            }

        case ADD_COMMENT:
            return {
                ...state,
                selectedThread: action.data
            }
		
		default:
			return state

    }
    
}