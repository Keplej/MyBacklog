import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchSaga from './currentlist.saga';
import fetchBacklogSaga from './backlog.saga';
import completedSaga from './completed.saga';
import addGameSaga from './AddGame.saga';
import statusSaga from './status.saga';
import fetchDetailSaga from './detail.saga';
import fetchCompletedBacklogSaga from './completedDetail.saga';
import fetchCurrentDetailSaga from './currentDetail.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchSaga(),
    fetchBacklogSaga(),
    completedSaga(),
    addGameSaga(),
    statusSaga(),
    fetchDetailSaga(),
    fetchCompletedBacklogSaga(),
    fetchCurrentDetailSaga(),
  ]);
}
