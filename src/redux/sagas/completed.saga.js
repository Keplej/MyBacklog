import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";


function* completedList() {
    try {
        // Come back and fix '/api/shelf'
        const response = yield axios.get('/api/completed');
        yield put ({type: 'SET_COMPLETED', payload: response.data})
    } catch (error) {
        alert(`Sorry cannot fetchList atht the moment`);
        console.log('Error in getting List', error);
    }
}

function* deleteCompletedGame(action) {
    try {
        let id = action.payload;
        yield axios.delete(`/api/completed/${id}`);
        yield put({type: 'FETCH_COMPLETED'});
    } catch (error) {
        alert(`Error in delete`);
        console.log('Error getting list', error);
    }
}

function* completedSaga() {
    yield takeEvery('FETCH_COMPLETED', completedList);
    yield takeEvery('DELETE_COMPLETED', deleteCompletedGame);
}

export default completedSaga;