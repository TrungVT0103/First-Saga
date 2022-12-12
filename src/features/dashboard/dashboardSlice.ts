import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "interface";

export interface DashboardStatistics {
    maleCount: number;
    femaleCount: number;
    hightMarkCount: number;
    lowMarkCount: number;
}

export interface RankingByCity {
    cityId: string;
    rankingList: Student[];
}

export interface DashboardState {
    loading: boolean;
    statistics: DashboardStatistics;
    highestStudentList: Student[];
    lowestStudentList: Student[];
    rankingByCityList: RankingByCity[]
}

const initialState: DashboardState = {
    loading: false,
    statistics: {
        maleCount: 0,
        femaleCount: 0,
        hightMarkCount: 0,
        lowMarkCount: 0,
    },
    highestStudentList: [],
    lowestStudentList: [],
    rankingByCityList: [],

}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
        fetchData(state) {},
        fetchDataSuccess(state) {},
        fetchDataFailed(state) {},
        setStatistics(state, action: PayloadAction<DashboardStatistics>) {
            state.statistics = action.payload
        },
        setHighestStudentList(state, action: PayloadAction<Student[]>) {
            state.highestStudentList = action.payload
        },
        setLowestStudentList(state, action: PayloadAction<Student[]>) {
            state.lowestStudentList = action.payload
        },
        setRankingByCityList(state, action: PayloadAction<RankingByCity[]>) {
            state.rankingByCityList = action.payload
        }
    }
})

// Actions
export const dashboardActions = dashboardSlice.actions

// Selectors
export const selectDashboardLoading = (state: any) => state.dashboard.loading
export const selectDashboardStatistics = (state: any) => state.dashboard.statistics
export const selectDashboardHighestStudentList = (state: any) => state.dashboard.highestStudentList
export const selectDashboardLowestStudentList = (state: any) => state.dashboard.lowestStudentList
export const selectDashboardRankingByCityList = (state: any) => state.dashboard.rankingByCityList

// Reducers
const dashboardReducer = dashboardSlice.reducer
export default dashboardReducer