import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";

function* fetchBacklogDetail(action) {
    try{
        // let id = action.payload;
        const response = yield axios.get(`api/detail/${action.payload}`);
        yield put({type: 'SET_BACKLOG_DETAIL', payload: response.data });
        console.log('getting backlog detail', response.data);
        
    } catch (error) {
        alert(`Sorry, error in backlog detail`);
        console.log('ERROR in detail', error);
    }
}


function* editBacklogGame(action) {
    console.log('In edit saga', action.payload);
    try {
        yield axios.put(`api/detail/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_BACKLOG_GAMES'});
        yield put({type: 'SET_BACKLOG_DETAIL', payload: action.payload});
    } catch (error) {
        alert(`Sorry error in edit backlog game`)
        console.log('Error editing game', error);
    }
}

function* fetchDetailSaga() {
    yield takeEvery('FETCH_BACKLOG_DETAIL', fetchBacklogDetail);
    yield takeEvery('UPDATE_BACKLOG', editBacklogGame);
}

export default fetchDetailSaga;