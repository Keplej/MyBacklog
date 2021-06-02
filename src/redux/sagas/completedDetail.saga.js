import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";


function* fetchCompletedDetail(action) {
    try{
        // let id = action.payload;
        const response = yield axios.get(`/api/completeddetail/${action.payload}`);
        yield put({type: 'SET_COMPLETED_DETAIL', payload: response.data });
        console.log('getting backlog detail', response.data);
        
    } catch (error) {
        alert(`Sorry, error in backlog detail`);
        console.log('ERROR in detail', error);
    }
}


function* editCompletedGame(action) {
    console.log('In edit saga', action.payload);
    try {
        yield axios.put(`api/completeddetail/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_COMPLETED'});
        yield put({type: 'SET_COMPLETED_DETAIL', payload: action.payload});
    } catch (error) {
        alert(`Sorry error in edit backlog game`)
        console.log('Error editing game', error);
    }
}

function* fetchCompletedBacklogSaga() {
    yield takeEvery('FETCH_COMPLETED_DETAIL', fetchCompletedDetail);
    yield takeEvery('UPDATE_COMPLETED', editCompletedGame);
}

export default fetchCompletedBacklogSaga;