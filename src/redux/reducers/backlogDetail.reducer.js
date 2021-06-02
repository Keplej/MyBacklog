const backlogDetail = (state={}, action) => {
    if (action.type === 'SET_BACKLOG_DETAIL') {
        return action.payload;
    }
    return state;
}

export default backlogDetail;