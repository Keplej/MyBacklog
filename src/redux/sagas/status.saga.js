import axios from 'axios';
import { put, takeLatest } from "redux-saga/effects";

function* fetchNewGame() {
    try {
        const response = yield axios.get('/api/status');
        yield put({ type: 'SET_STATUS', payload: response.data});
    } catch (error) {
        console.log('Failed to add new game', error);
    }
}


function* statusSaga() {
    yield takeLatest('FETCH_STATUS', fetchNewGame);
}

export default statusSaga;
