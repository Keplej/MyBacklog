import { takeLatest, put } from "@redux-saga/core/effects";
import axios from "axios";


function* fetchList() {
    try {
        const response = yield axios.get('/api/current');
        yield put ({type: 'SET_LIST', payload: response})
    } catch (error) {
        alert(`Sorry cannot fetchList atht the moment`);
        console.log('Error in getting List', error);
    }
}

// function* deleteCurrentGame(action) {
//     try {
//         let id = action.payload;
//         yield axios.delete(`/api/current/${id}`);
//         yield put({type: 'GET_GAMES'});
//     } catch (error) {
//         alert(`Error in delete`);
//         console.log('Error getting list', error);
//     }
// }


function* fetchSaga() {
    yield takeLatest('GET_GAMES', fetchList);
    // yield takeLatest('DELETE_CURRENT', deleteCurrentGame);
}

export default fetchSaga;