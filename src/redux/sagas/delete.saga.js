import axios from 'axios';
import {put, takeLatest } from 'redux-saga/effects';

function* deleteCurrentGame(action) {
    try {
        let id = action.payload;
        yield axios.delete(`/api/current/${id}`);
        yield put({type: 'GET_GAMES'});
    } catch (error) {
        alert(`Error in delete`);
        console.log('Error getting list', error);
    }
}

function* deleteGameSaga() {
    yield takeLatest('DELETE_CURRENT', deleteCurrentGame)
}

export default deleteGameSaga;