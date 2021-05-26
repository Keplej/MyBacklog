const backloglistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BACKLOG':
            return action.payload;
        default:
            return state;
    }
}

export default backloglistReducer;