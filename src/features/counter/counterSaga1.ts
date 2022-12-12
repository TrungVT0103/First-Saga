import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchCount } from "./counterAPI";
import { increment, incrementBySaga, incrementBySagaSuccess } from "./counterSlice";

export function* log(action: PayloadAction) {
    console.log('log', action);
    
}

function* test() {
    yield fetchCount(2)
    yield call(fetchCount, 2)
}

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('waiting 2s');
    yield delay(2000)
    console.log('wait done, dispatch action');
    yield put(incrementBySagaSuccess(action.payload))
}

export default function* counterSaga1() {
    console.log('counter saga');
    // yield takeEvery('*', log)
    // increment là 1 action create (do bên counterSlide export nó ở dạng .action ), nên khi gọi sẽ trả về 1 obj
    // yield takeEvery(incrementBySaga.toString(), handleIncrementSaga)
    // không hiểu sao lại phải .toString()
    yield takeLatest(incrementBySaga.toString(), handleIncrementSaga)
}