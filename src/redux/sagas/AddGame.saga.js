import axios from 'axios';
import { put, takeEvery } from "redux-saga/effects";

function* AddNewGame(action) {
    try {
        const response = yield axios.post(`/api/addgame`, 
        action.payload
        // {name: action.name, description: action.description, image_url: action.url, status: action.status, user_id: action.user_id}
        );
        yield put({ type: 'GET_GAME'});
    } catch (error) {
        console.log('Failed to add new game', error);
    }
}


function* addGameSaga() {
    yield takeEvery('ADDING_NEW_GAME', AddNewGame);
}

export default addGameSaga;