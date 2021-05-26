import { takeLatest, put } from "@redux-saga/core/effects";
import axios from "axios";


function* completedList() {
    try {
        // Come back and fix '/api/shelf'
        const response = yield axios.get('/api/completed');
        yield put ({type: 'SET_COMPLETED', payload: response})
    } catch (error) {
        alert(`Sorry cannot fetchList atht the moment`);
        console.log('Error in getting List', error);
    }
}

function* completedSaga() {
    yield takeLatest('GET_COMPLETED', completedList);
}

export default completedSaga;