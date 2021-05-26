const completedlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPLETED':
            return action.payload;
        default:
            return state;
    }
}

export default completedlistReducer;