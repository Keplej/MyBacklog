const currentDetailReducer = (state={}, action) => {
    if (action.type === 'SET_CURRENT_DETAIL') {
        return action.payload;
    }
    return state;
}

export default currentDetailReducer;