const statuslistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return action.payload;
        default:
            return state;
    }
}

export default statuslistReducer;