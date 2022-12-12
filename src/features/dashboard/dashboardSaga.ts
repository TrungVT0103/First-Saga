import { all, call, takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./dashboardSlice";



function* fetchStatistics() {}
function* fetchHighestStudentList() {}
function* fetchLowestStudentList() {}
function* fetchRankingByCity() {}

function* fetchDashboardData() {
    try {
        yield all([
            call(fetchStatistics),
            call(fetchHighestStudentList),
            call(fetchLowestStudentList),
            call(fetchRankingByCity),
        ])
    } catch (err) {
        console.log(err);
    }
}
export default function* dashboardSaga() {
    yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData)
}