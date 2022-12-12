import createSagaMiddleware from '@redux-saga/core';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';
import {history} from '../utils/index'

const rootReducer  = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  router: connectRouter(history)
})
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  // ngoài middleware mặc đỊnh thì khai báo thêm các mdw khác (bên trong concat)
  // nếu k khai như ở dưới mà viết 1 arr trực tiếp thì các mdw mới sẽ ghi đè lên mdw mặc định
  // ở đây đang thêm vào routerMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history))
});
// cần đặt cái này phía dưới, do phải khởi tạo xong store thì mới có chỗ cho saga chạy đc
// run này là khi khởi tạo sẽ chạy hàm rootSaga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
