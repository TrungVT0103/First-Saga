import { PayloadAction } from '@reduxjs/toolkit';
import authSaga from 'features/auth/authSaga';
// import { authSaga } from 'features/auth/authSaga';
import counterSaga1 from 'features/counter/counterSaga1';
import dashboardSaga from 'features/dashboard/dashboardSaga';
import { all } from 'redux-saga/effects';

export function* log(action: PayloadAction) {
    console.log('log', action);
    
}
function* helloSaga() {
    console.log('Hello saga');
}

// rootSaga chỉ chạy 1 lần duy nhất, nhưng khi dispatch các action 
// counterSaga1 vẫn lắng nghe đc, do counterSaga1 chạy effect takeEvery

export default function* rootSaga() {
    yield all([helloSaga(), authSaga(), dashboardSaga()])
}
