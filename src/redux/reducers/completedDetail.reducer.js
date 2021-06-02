const completedDetailReducer = (state={}, action) => {
    if (action.type === 'SET_COMPLETED_DETAIL') {
        return action.payload;
    }
    return state;
}

export default completedDetailReducer;