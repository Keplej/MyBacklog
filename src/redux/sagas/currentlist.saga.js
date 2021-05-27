import { takeLatest, put } from "@redux-saga/core/effects";
import axios from "axios";


function* fetchList() {
    try {
        const response = yield axios.get('/api/current');
        yield put ({type: 'SET_LIST', payload: response})
    } catch (error) {
        alert(`Sorry cannot fetchList atht the moment`);
        console.log('Error in getting List', error);
    }
}


function* fetchSaga() {
    yield takeLatest('GET_GAMES', fetchList);
}

export default fetchSaga;