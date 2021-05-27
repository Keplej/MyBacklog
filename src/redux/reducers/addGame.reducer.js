const addGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ADDING_GAME' :
            return action.payload;
        default:
            return state;
    }
}

export default addGameReducer;