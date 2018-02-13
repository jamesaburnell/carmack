export function updateVotes(difference, id, threads) {
    return threads.map(e => {
        if(e.id === id) {
            return {
                ...e,
                votes: e.votes + difference
            }
        }
        return e
    })
}