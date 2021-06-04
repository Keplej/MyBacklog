import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";


function* fetchCurrentDetail(action) {
    try{
        // let id = action.payload;
        const response = yield axios.get(`/api/currentdetail/${action.payload}`);
        yield put({type: 'SET_CURRENT_DETAIL', payload: response.data });
        console.log('getting current detail', response.data);
        
    } catch (error) {
        alert(`Sorry, error in current detail`);
        console.log('ERROR in detail', error);
    }
}

function* editCurrentGame(action) {
    console.log('In edit saga', action.payload);
    try {
        yield axios.put(`/api/currentdetail/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_CURRENT'});
        yield put({type: 'SET_CURRENT_DETAIL', payload: action.payload});
    } catch (error) {
        alert(`Sorry error in edit backlog game`)
        console.log('Error editing game', error);
    }
}


function* fetchCurrentDetailSaga() {
    yield takeEvery('FETCH_CURRENT_DETAIL', fetchCurrentDetail);
    yield takeEvery('UPDATE_CURRENT', editCurrentGame);
}

export default fetchCurrentDetailSaga;