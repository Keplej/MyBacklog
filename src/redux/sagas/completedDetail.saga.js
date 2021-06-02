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

function* fetchCompletedBacklogSaga() {
    yield takeEvery('UPDATE_COMPLETED', fetchCompletedDetail);

}

export default fetchCompletedBacklogSaga;