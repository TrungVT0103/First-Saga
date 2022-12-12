import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    console.log('handleLogin', payload);
        localStorage.setItem('access_token', 'fakeTox11ken')
        yield put(
            authActions.loginSuccess({
                id: 1,
                name: 'First User'
            })
        )
        // connected-react-router sẽ tạo ra 1 obj, obj này dispatch lên redux store,
        // trong store có routerMiddleware, nó sẽ nhận đc cái dispatch này, và cho router qua trang mới
        // yield put(push('/admin'))

}

function* handleLogout() {
    yield delay(1000)
    console.log('handleLogout');
    localStorage.removeItem('access_token')
}

function* watchLoginFlow() {
    // vòng lặp while true để cho phần bên dưới chạy đi chạy lại
    // để nếU sau khi logout xong user lại muốn login lại thì vẫn ok
    // k có white true thì saga sẽ chỉ lắng nghe duy nhất 1 lần
    while(true) {
        console.log('watch login');
        const isLoggedIn = Boolean(localStorage.getItem('access_token'))
        if (!isLoggedIn) {
            // đợi tới khi user dispatch 1 action tên là logging lên thì sẽ làm cái yield fork tiếp sau
            // yield take(authActions.login.type) tại sao phải là login.type mà k phải là login ????
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type)
            yield fork(handleLogin, action.payload)
        }
        // sau khi login xong thì lắng nghe tiếp xem có logout k
        yield take(authActions.logout.type)
        // dùng call thay cho folk, để nếu sau khi logout, chưa kịp remove access token(ex: delay 1s như trên)
        // thì fork(handleLogout) có thể chạy trc, do fork non-blocking
        // thay call, là blocking, để call xong thì vòng white true tiếp theo mới chạy
        // yield fork(handleLogout)
        yield call(handleLogout)
        
        
        
    }
}
export default function* authSaga() {
    yield fork(watchLoginFlow);
}