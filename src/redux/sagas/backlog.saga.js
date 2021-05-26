import { takeLatest, put } from "@redux-saga/core/effects";
import axios from "axios";


function* backlogList() {
    try {
        // Come back and fix '/api/shelf'
        const response = yield axios.get('/api/backlog');
        yield put ({type: 'SET_BACKLOG', payload: response})
    } catch (error) {
        alert(`Sorry cannot fetchList the the moment`);
        console.log('Error in getting List', error);
    }
}

function* fetchBacklogSaga() {
    yield takeLatest('GET_BACKLOG_GAMES', backlogList);
}

export default fetchBacklogSaga;