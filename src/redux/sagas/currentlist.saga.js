import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";


function* fetchList() {
    try {
        const response = yield axios.get('/api/current');
        yield put ({type: 'SET_CURRENT', payload: response.data})
    } catch (error) {
        alert(`Sorry cannot fetchList atht the moment`);
        console.log('Error in getting List', error);
    }
}

function* deleteCurrentGame(action) {
    try {
        let id = action.payload;
        yield axios.delete(`/api/current/${id}`);
        yield put({type: 'FETCH_CURRENT'});
    } catch (error) {
        alert(`Error in delete`);
        console.log('Error getting list', error);
    }
}


function* fetchSaga() {
    yield takeEvery('FETCH_CURRENT', fetchList);
    yield takeEvery('DELETE_CURRENT', deleteCurrentGame);
    
}

export default fetchSaga;