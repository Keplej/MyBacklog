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

function* deleteCompletedGame(action) {
    try {
        let id = action.payload;
        yield axios.delete(`/api/completed/${id}`);
        yield put({type: 'GET_COMPLETED'});
    } catch (error) {
        alert(`Error in delete`);
        console.log('Error getting list', error);
    }
}

function* completedSaga() {
    yield takeLatest('GET_COMPLETED', completedList);
    yield takeLatest('DELETE_COMPLETED', deleteCompletedGame);
}

export default completedSaga;