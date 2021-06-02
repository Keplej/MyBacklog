import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";


function* backlogList() {
    try {
        // Come back and fix '/api/shelf'
        const response = yield axios.get('/api/backlog');
        yield put ({type: 'SET_BACKLOG', payload: response.data})
    } catch (error) {
        alert(`Sorry cannot fetchList the the moment`);
        console.log('Error in getting List', error);
    }
}

function* deleteBacklogGame(action) {
    try {
        let id = action.payload;
        yield axios.delete(`/api/backlog/${id}`);
        yield put({type: 'FETCH_BACKLOG_GAMES'});
    } catch (error) {
        alert(`Error in delete`);
        console.log('Error getting list', error);
    }
}


function* editBacklogGame(action) {
    try {
        yield axios.put(`api/backlog/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_BACKLOG_GAMES'});
        yield put({type: 'SET_BACKLOG_DETAIL', payload: action.payload});
    } catch (error) {
        alert(`Sorry error in edit backlog game`)
        console.log('Error editing game', error);
    }
}


function* fetchBacklogSaga() {
    yield takeEvery('FETCH_BACKLOG_GAMES', backlogList);
    yield takeEvery('DELETE_BACKLOG', deleteBacklogGame);
    yield takeEvery('UPDATE_BACKLOG', editBacklogGame);
}

export default fetchBacklogSaga;